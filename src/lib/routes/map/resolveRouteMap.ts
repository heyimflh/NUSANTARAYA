/**
 * NUSANTARAYA — Route Map Resolver
 * Section 6: Route Map + Transport Summary
 *
 * Builds RouteMapModel from RouteRecommendation + RouteItinerary.
 * This is the single source of truth builder — never creates data from labels.
 *
 * Rules:
 * - Stop IDs come from itinerary.days[].stopId (canonical)
 * - Stop order follows itinerary day sequence
 * - Segments come from itinerary transfer segments
 * - Transport options come from validated transfer data
 * - Geometry confidence is always "schematic" until real coordinates are available
 */

import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteItinerary, ItinerarySegment } from "@/lib/routes/itinerary/routeItinerarySchema";
import type {
  RouteMapModel,
  RouteMapStop,
  RouteMapSegment,
  RouteTransportOption,
  MapGeometryConfidence,
} from "@/types/route-map";
import { deriveGeometryConfidence } from "./validateRouteMap";
import { ROUTE_MAP_STOP_DATA } from "@/data/routes/routeMapData";

// ─── Build RouteMapModel ──────────────────────────────────────────────────────

/**
 * Resolve a RouteMapModel from active result + itinerary.
 * Returns null if either is null or if critical data is missing.
 */
export function resolveRouteMap(
  result: RouteRecommendation | null,
  itinerary: RouteItinerary | null
): { model: RouteMapModel; transportOptions: RouteTransportOption[] } | null {
  if (!result || !itinerary) return null;

  // Build ordered stops from itinerary days (grouped by stopId)
  const stopsMap = new Map<string, RouteMapStop>();
  let stopOrder = 1;

  for (const day of itinerary.days) {
    const stopId = day.stopId;
    if (!stopsMap.has(stopId)) {
      // Look up schematic position data for this stop (not geographic coordinates)
      const staticData = ROUTE_MAP_STOP_DATA[stopId];
      stopsMap.set(stopId, {
        id: stopId,
        order: stopOrder++,
        provinceId: day.provinceIds[0] ?? "unknown",
        cityOrCluster: day.cityOrCluster,
        shortLabel: day.cityOrCluster,
        // coordinates intentionally not set — schematic only, no fake geo-precision
        coordinates: undefined,
        dayStart: day.dayNumber,
        dayEnd: day.dayNumber,
        itineraryDayIds: [day.id],
        destinationIds: undefined,
        // Store schematic position in a separate field for SVG rendering
        _schematicPosition: staticData?.schematicPosition,
      } as RouteMapStop & { _schematicPosition?: [number, number] });
    } else {
      // Extend dayEnd for stops that span multiple days
      const existing = stopsMap.get(stopId)!;
      stopsMap.set(stopId, {
        ...existing,
        dayEnd: day.dayNumber,
        itineraryDayIds: [...existing.itineraryDayIds, day.id],
      });
    }
  }

  const stops: RouteMapStop[] = Array.from(stopsMap.values()).sort(
    (a, b) => a.order - b.order
  );

  // Build segments from transfer itinerary segments
  const mapSegments: RouteMapSegment[] = [];
  const transportOptions: RouteTransportOption[] = [];
  let segmentIdx = 0;

  for (const day of itinerary.days) {
    for (const seg of day.segments) {
      if (seg.type !== "transfer") continue;
      const transferSeg = seg as Extract<ItinerarySegment, { type: "transfer" }>;

      const mapSegId = `map-seg-${segmentIdx++}`;
      const fromStop = stopsMap.get(transferSeg.fromStopId);
      const toStop = stopsMap.get(transferSeg.toStopId);

      // Only build segment if both stops exist
      if (!fromStop || !toStop) continue;
      if (fromStop.id === toStop.id) continue;

      const transportId = `transport-${mapSegId}`;

      mapSegments.push({
        id: mapSegId,
        itinerarySegmentId: transferSeg.id,
        fromStopId: transferSeg.fromStopId,
        toStopId: transferSeg.toStopId,
        dayNumber: day.dayNumber,
        geometryConfidence: "schematic",
        transportOptionIds: [transportId],
        isRequired: true,
      });

      // Build transport option from itinerary transfer data
      transportOptions.push({
        id: transportId,
        segmentId: mapSegId,
        mode: inferModeFromLabel(transferSeg.modeLabel),
        label: transferSeg.modeLabel ?? "Perjalanan",
        confidence: transferSeg.isValidated ? "editorial" : "unavailable",
        durationLabel: undefined, // Only show if canonically sourced
        sourceRefs: transferSeg.isValidated ? ["itinerary-preset"] : undefined,
        verifiedAt: transferSeg.isValidated ? itinerary.updatedAt : undefined,
      });
    }
  }

  const geometryConfidence: MapGeometryConfidence = "schematic"; // Always schematic for now

  const model: RouteMapModel = {
    routeId: result.id,
    routeVersion: result.version,
    itineraryVersion: itinerary.version,
    mapVersion: `${result.version}-${itinerary.version}`,
    source: "derived",
    geometryConfidence,
    stops,
    segments: mapSegments,
    attribution: [],
    updatedAt: itinerary.updatedAt,
  };

  return { model, transportOptions };
}

// ─── Mode Inference ───────────────────────────────────────────────────────────

/**
 * Infer transport mode from a modeLabel string.
 * Only matches known, explicit transport keywords — never infers from geometry.
 * Returns "road" for unknown/null labels (most common Indonesian inter-city mode).
 */
function inferModeFromLabel(label: string | undefined): RouteTransportOption["mode"] {
  if (!label) return "unspecified";
  const l = label.toLowerCase();
  if (l.includes("krl") || l.includes("kereta") || l.includes("commuter") || l.includes("rail")) return "rail";
  if (l.includes("pesawat") || l.includes("flight") || l.includes("air")) return "flight";
  if (l.includes("kapal") || l.includes("ferry") || l.includes("boat")) return "ferry";
  if (l.includes("bus") || l.includes("damri")) return "road";
  if (l.includes("ojek") || l.includes("taksi") || l.includes("taxi") || l.includes("trans")) return "local-transit";
  if (l.includes("jalan") || l.includes("walk")) return "walk";
  return "road";
}

// ─── Get Schematic Position ───────────────────────────────────────────────────

/**
 * Get the schematic SVG position for a stop.
 * Falls back to an evenly distributed position if not in registry.
 */
export function getSchematicPosition(
  stop: RouteMapStop,
  stopIndex: number,
  totalStops: number
): [number, number] {
  const stopData = ROUTE_MAP_STOP_DATA[stop.id];
  if (stopData?.schematicPosition) return stopData.schematicPosition;

  // Evenly distribute unknown stops along horizontal axis
  const x = totalStops <= 1 ? 50 : (stopIndex / (totalStops - 1)) * 70 + 15;
  const y = 50 + (stopIndex % 2 === 0 ? -5 : 5); // slight zigzag for readability
  return [x, y];
}

