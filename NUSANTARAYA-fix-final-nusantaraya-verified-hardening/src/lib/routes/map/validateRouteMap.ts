/**
 * NUSANTARAYA — Route Map Validation
 * Section 6: Route Map + Transport Summary
 *
 * Pure, testable validation functions for RouteMapModel and related types.
 * Returns typed error arrays — never throws.
 */

import type {
  RouteMapModel,
  RouteMapStop,
  RouteMapSegment,
  RouteTransportOption,
  RouteMapSelection,
  TransportComplexity,
  MapGeometryConfidence,
} from "@/types/route-map";

// ─── Validation Result ────────────────────────────────────────────────────────

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

// ─── Coordinate Validation ────────────────────────────────────────────────────

function isValidCoordinate(lat: number, lng: number): boolean {
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

// ─── validateRouteMapStops ────────────────────────────────────────────────────

export function validateRouteMapStops(stops: RouteMapStop[]): ValidationResult {
  const errors: string[] = [];

  if (!Array.isArray(stops) || stops.length === 0) {
    return { valid: false, errors: ["Stop list is empty or invalid."] };
  }

  const ids = new Set<string>();
  const orders = new Set<number>();

  for (const stop of stops) {
    // Unique IDs
    if (ids.has(stop.id)) {
      errors.push(`Duplicate stop id: ${stop.id}`);
    }
    ids.add(stop.id);

    // Unique, sequential order starting from 1
    if (orders.has(stop.order)) {
      errors.push(`Duplicate stop order: ${stop.order}`);
    }
    orders.add(stop.order);

    // dayStart <= dayEnd
    if (stop.dayStart > stop.dayEnd) {
      errors.push(`Stop ${stop.id}: dayStart (${stop.dayStart}) > dayEnd (${stop.dayEnd})`);
    }

    // Valid coordinates if provided
    if (stop.coordinates) {
      const [lat, lng] = stop.coordinates;
      if (!isValidCoordinate(lat, lng)) {
        errors.push(`Stop ${stop.id}: invalid coordinates [${lat}, ${lng}]`);
      }
    }
  }

  // Check sequential order 1..n
  const sortedOrders = Array.from(orders).sort((a, b) => a - b);
  for (let i = 0; i < sortedOrders.length; i++) {
    if (sortedOrders[i] !== i + 1) {
      errors.push(`Stop orders are not sequential starting from 1. Found: ${sortedOrders.join(", ")}`);
      break;
    }
  }

  return { valid: errors.length === 0, errors };
}

// ─── validateRouteMapSegments ────────────────────────────────────────────────

export function validateRouteMapSegments(
  segments: RouteMapSegment[],
  stops: RouteMapStop[]
): ValidationResult {
  const errors: string[] = [];
  const stopIds = new Set(stops.map((s) => s.id));

  for (const seg of segments) {
    if (!stopIds.has(seg.fromStopId)) {
      errors.push(`Segment ${seg.id}: fromStopId "${seg.fromStopId}" not found in stops.`);
    }
    if (!stopIds.has(seg.toStopId)) {
      errors.push(`Segment ${seg.id}: toStopId "${seg.toStopId}" not found in stops.`);
    }
    if (seg.fromStopId === seg.toStopId) {
      errors.push(`Segment ${seg.id}: fromStopId === toStopId — same-stop segment without canonical reason.`);
    }
    if (seg.dayNumber < 1) {
      errors.push(`Segment ${seg.id}: dayNumber must be >= 1.`);
    }
  }

  return { valid: errors.length === 0, errors };
}

// ─── validateTransportOptions ────────────────────────────────────────────────

export function validateTransportOptions(
  options: RouteTransportOption[],
  segments: RouteMapSegment[]
): ValidationResult {
  const errors: string[] = [];
  const segmentIds = new Set(segments.map((s) => s.id));

  for (const opt of options) {
    if (!segmentIds.has(opt.segmentId)) {
      errors.push(`Transport option ${opt.id}: segmentId "${opt.segmentId}" not found in segments.`);
    }
    // verified must have sourceRefs
    if (opt.confidence === "verified" && (!opt.sourceRefs || opt.sourceRefs.length === 0)) {
      errors.push(`Transport option ${opt.id}: confidence="verified" requires at least one sourceRef.`);
    }
  }

  return { valid: errors.length === 0, errors };
}

// ─── validateRouteMap ────────────────────────────────────────────────────────

export function validateRouteMap(
  model: RouteMapModel,
  expectedRouteId: string,
  expectedRouteVersion: string,
  expectedItineraryVersion: string
): ValidationResult {
  const errors: string[] = [];

  if (model.routeId !== expectedRouteId) {
    errors.push(`routeId mismatch: expected "${expectedRouteId}", got "${model.routeId}"`);
  }
  if (model.routeVersion !== expectedRouteVersion) {
    errors.push(`routeVersion mismatch: expected "${expectedRouteVersion}", got "${model.routeVersion}"`);
  }
  if (model.itineraryVersion !== expectedItineraryVersion) {
    errors.push(`itineraryVersion mismatch: expected "${expectedItineraryVersion}", got "${model.itineraryVersion}"`);
  }

  const stopsResult = validateRouteMapStops(model.stops);
  errors.push(...stopsResult.errors);

  const segmentsResult = validateRouteMapSegments(model.segments, model.stops);
  errors.push(...segmentsResult.errors);

  return { valid: errors.length === 0, errors };
}

// ─── validateMapSelection ────────────────────────────────────────────────────

export function validateMapSelection(
  sel: Partial<RouteMapSelection>,
  model: RouteMapModel | null
): RouteMapSelection | null {
  if (!sel.routeId || !sel.routeVersion || !sel.itineraryVersion) return null;
  if (!model) return null;
  if (sel.routeId !== model.routeId) return null;

  const stopIds = new Set(model.stops.map((s) => s.id));
  const segmentIds = new Set(model.segments.map((s) => s.id));

  const validStopId = sel.stopId && stopIds.has(sel.stopId) ? sel.stopId : undefined;
  const validSegmentIds = (sel.segmentIds ?? []).filter((id) => segmentIds.has(id));

  return {
    routeId: sel.routeId,
    routeVersion: sel.routeVersion,
    itineraryVersion: sel.itineraryVersion,
    dayNumber: sel.dayNumber,
    dayId: sel.dayId,
    stopId: validStopId,
    segmentIds: validSegmentIds,
    source: sel.source ?? "restored",
  };
}

// ─── deriveTransportComplexity ────────────────────────────────────────────────

/**
 * Deterministic complexity rules from planning spec.
 * Based on stop count and number of main (required) transfers.
 */
export function deriveTransportComplexity(
  stopCount: number,
  mainTransferCount: number
): TransportComplexity {
  if (stopCount <= 0 || mainTransferCount < 0) return "unknown";
  if (stopCount <= 2 && mainTransferCount <= 1) return "simple";
  if (stopCount <= 3 && mainTransferCount <= 2) return "moderate";
  if (stopCount <= 4 || mainTransferCount >= 3) return "active-transfer";
  return "unknown";
}

// ─── deriveGeometryConfidence ────────────────────────────────────────────────

/**
 * Derives the geometry confidence level from available stop coordinates.
 * If any stop lacks coordinates → schematic.
 */
export function deriveGeometryConfidence(
  stops: RouteMapStop[]
): MapGeometryConfidence {
  if (stops.length === 0) return "schematic";
  const allHaveCoords = stops.every((s) => s.coordinates !== undefined);
  return allHaveCoords ? "approximate" : "schematic";
}

// ─── buildAccessibleRouteSummary ─────────────────────────────────────────────

/**
 * Generates a plain-text screen reader summary for the entire route.
 * Example: "Rute memiliki 2 stop: Yogyakarta dan Solo. Satu perpindahan utama direncanakan pada Hari 3."
 */
export function buildAccessibleRouteSummary(
  stops: RouteMapStop[],
  segments: RouteMapSegment[],
  locale: "id" | "en" = "id"
): string {
  if (stops.length === 0) {
    return locale === "en"
      ? "Route information is not available."
      : "Informasi rute belum tersedia.";
  }

  const sortedStops = [...stops].sort((a, b) => a.order - b.order);
  const stopNames = sortedStops.map((s) => s.cityOrCluster);
  const requiredSegments = segments.filter((s) => s.isRequired);
  const transferDays = requiredSegments.map((s) => s.dayNumber);

  if (locale === "en") {
    const stopList =
      stopNames.length === 1
        ? stopNames[0]
        : stopNames.slice(0, -1).join(", ") + " and " + stopNames[stopNames.length - 1];
    const stopPart = `Route has ${stopNames.length} stop${stopNames.length > 1 ? "s" : ""}: ${stopList}.`;
    const transferPart =
      requiredSegments.length === 0
        ? ""
        : ` ${requiredSegments.length} main transfer${requiredSegments.length > 1 ? "s" : ""} planned on Day${transferDays.length > 1 ? "s" : ""} ${transferDays.join(", ")}.`;
    return stopPart + transferPart;
  }

  const stopList =
    stopNames.length === 1
      ? stopNames[0]
      : stopNames.slice(0, -1).join(", ") + " dan " + stopNames[stopNames.length - 1];
  const stopPart = `Rute memiliki ${stopNames.length} stop: ${stopList}.`;
  const transferPart =
    requiredSegments.length === 0
      ? ""
      : ` ${requiredSegments.length === 1 ? "Satu" : `${requiredSegments.length}`} perpindahan utama direncanakan pada Hari ${transferDays.join(", ")}.`;
  return stopPart + transferPart;
}
