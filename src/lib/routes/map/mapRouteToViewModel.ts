/**
 * NUSANTARAYA — Route Map View Model Builder
 * Section 6: Route Map + Transport Summary
 *
 * Transforms RouteMapModel + selection into a presentation-ready view model.
 * All labels are locale-aware. All derived values are deterministic.
 */

import type {
  RouteMapModel,
  RouteMapStop,
  RouteMapSegment,
  RouteTransportOption,
  RouteMapSelection,
  RouteMapViewModel,
  RouteMapState,
  TransportComplexity,
  MapGeometryConfidence,
} from "@/types/route-map";
import {
  deriveTransportComplexity,
  buildAccessibleRouteSummary,
} from "./validateRouteMap";

// ─── Labels ───────────────────────────────────────────────────────────────────

const LABELS = {
  id: {
    geometry: {
      canonical: "Data tervalidasi",
      approximate: "Gambaran jalur",
      schematic: "Diagram rute skematik",
    },
    source: {
      canonical: "Sumber tervalidasi",
      derived: "Diturunkan dari itinerary",
      fallback: "Tampilan cadangan",
    },
    complexity: {
      simple: "Sederhana",
      moderate: "Moderat",
      "active-transfer": "Berpindah aktif",
      unknown: "Belum dapat dinilai",
    },
    modes: {
      walk: "Jalan kaki",
      "local-transit": "Angkutan lokal",
      rail: "Kereta",
      road: "Darat",
      ferry: "Kapal",
      flight: "Penerbangan",
      mixed: "Kombinasi",
      unspecified: "Belum ditentukan",
    },
  },
  en: {
    geometry: {
      canonical: "Validated data",
      approximate: "Route outline",
      schematic: "Schematic route diagram",
    },
    source: {
      canonical: "Validated source",
      derived: "Derived from itinerary",
      fallback: "Fallback view",
    },
    complexity: {
      simple: "Simple",
      moderate: "Moderate",
      "active-transfer": "Active transfers",
      unknown: "Unknown",
    },
    modes: {
      walk: "Walking",
      "local-transit": "Local transit",
      rail: "Train",
      road: "Road",
      ferry: "Ferry",
      flight: "Flight",
      mixed: "Mixed",
      unspecified: "Unspecified",
    },
  },
} as const;

// ─── mapRouteToViewModel ──────────────────────────────────────────────────────

export function mapRouteToViewModel(
  model: RouteMapModel | null,
  selection: RouteMapSelection | null,
  locale: "id" | "en" = "id"
): RouteMapViewModel {
  const L = LABELS[locale];

  if (!model) {
    return buildEmptyViewModel(locale);
  }

  const orderedStops = [...model.stops].sort((a, b) => a.order - b.order);
  const requiredSegments = model.segments.filter((s) => s.isRequired);
  const complexity = deriveTransportComplexity(orderedStops.length, requiredSegments.length);
  const validatedTransportCount = model.segments
    .flatMap((s) => s.transportOptionIds)
    .filter((tid) => {
      // count transport options that have verified confidence
      // we'll check against available options from the model's context
      return tid.length > 0; // placeholder — actual count comes from transport options
    }).length;

  // Derive dominant mode from transport options
  const dominantMode = deriveDominantMode(model.segments, locale);

  // Resolve active selection values
  const activeStopId = selection?.stopId ?? null;
  const activeDayNumber = selection?.dayNumber ?? null;
  const activeSegmentIds = selection?.segmentIds ?? [];

  // Determine map state
  const mapState = deriveMapState(model, selection);

  // Selection announcement for live region
  const selectionAnnouncement = buildSelectionAnnouncement(
    selection,
    orderedStops,
    locale
  );

  const accessibleRouteSummary = buildAccessibleRouteSummary(
    orderedStops,
    requiredSegments,
    locale
  );

  return {
    routeId: model.routeId,
    routeVersion: model.routeVersion,
    itineraryVersion: model.itineraryVersion,
    mapVersion: model.mapVersion,
    mapState,
    geometryConfidence: model.geometryConfidence,
    geometryLabel: L.geometry[model.geometryConfidence],
    sourceLabel: L.source[model.source],
    orderedStops,
    activeStopId,
    activeDayNumber,
    activeSegmentIds,
    segments: model.segments,
    transportOptions: [], // populated externally
    validatedTransportCount: 0, // populated externally
    complexity,
    complexityLabel: L.complexity[complexity],
    dominantModeLabel: dominantMode,
    accessibleRouteSummary,
    selectionAnnouncement,
    showDisclosure: true,
    attributionLines: model.attribution ?? [],
    updatedAt: model.updatedAt,
  };
}

// ─── mapRouteToViewModelWithTransport ────────────────────────────────────────

/**
 * Full view model builder that also incorporates transport options.
 */
export function mapRouteToViewModelWithTransport(
  model: RouteMapModel | null,
  transportOptions: RouteTransportOption[],
  selection: RouteMapSelection | null,
  locale: "id" | "en" = "id"
): RouteMapViewModel {
  const base = mapRouteToViewModel(model, selection, locale);
  if (!model) return base;

  const validatedTransportCount = transportOptions.filter(
    (opt) => opt.confidence === "verified"
  ).length;

  return {
    ...base,
    transportOptions,
    validatedTransportCount,
  };
}

// ─── Transport Complexity Label ───────────────────────────────────────────────

function deriveDominantMode(
  segments: RouteMapSegment[],
  locale: "id" | "en"
): string | null {
  // In schematic mode, we cannot determine dominant mode from geometry
  // Return null to avoid fabricating mode from segment positions
  return null;
}

// ─── Map State Derivation ─────────────────────────────────────────────────────

function deriveMapState(
  model: RouteMapModel,
  selection: RouteMapSelection | null
): RouteMapState {
  if (!selection) return "route-overview";
  if (selection.stopId) return "stop-focused";
  if (selection.segmentIds.length > 0) return "segment-focused";
  if (selection.dayNumber) return "day-focused";
  return "route-overview";
}

// ─── Selection Announcement ───────────────────────────────────────────────────

function buildSelectionAnnouncement(
  selection: RouteMapSelection | null,
  stops: RouteMapStop[],
  locale: "id" | "en"
): string | null {
  if (!selection) return null;

  if (selection.stopId) {
    const stop = stops.find((s) => s.id === selection.stopId);
    if (stop) {
      return locale === "en"
        ? `Stop ${stop.order} of ${stops.length}: ${stop.cityOrCluster}, Day ${stop.dayStart} to Day ${stop.dayEnd}.`
        : `Stop ${stop.order} dari ${stops.length}: ${stop.cityOrCluster}, Hari ${stop.dayStart} sampai Hari ${stop.dayEnd}.`;
    }
  }

  if (selection.dayNumber) {
    return locale === "en"
      ? `Viewing Day ${selection.dayNumber}.`
      : `Melihat Hari ${selection.dayNumber}.`;
  }

  return null;
}

// ─── Empty View Model ─────────────────────────────────────────────────────────

function buildEmptyViewModel(locale: "id" | "en"): RouteMapViewModel {
  return {
    routeId: "",
    routeVersion: "",
    itineraryVersion: "",
    mapVersion: "",
    mapState: "hidden",
    geometryConfidence: "schematic",
    geometryLabel: LABELS[locale].geometry.schematic,
    sourceLabel: LABELS[locale].source.fallback,
    orderedStops: [],
    activeStopId: null,
    activeDayNumber: null,
    activeSegmentIds: [],
    segments: [],
    transportOptions: [],
    validatedTransportCount: 0,
    complexity: "unknown",
    complexityLabel: LABELS[locale].complexity.unknown,
    dominantModeLabel: null,
    accessibleRouteSummary:
      locale === "en"
        ? "Route information is not available."
        : "Informasi rute belum tersedia.",
    selectionAnnouncement: null,
    showDisclosure: false,
    attributionLines: [],
    updatedAt: new Date().toISOString(),
  };
}

// ─── getTransportConfidenceLabel ─────────────────────────────────────────────

export function getTransportConfidenceLabel(
  confidence: RouteTransportOption["confidence"],
  locale: "id" | "en" = "id"
): string {
  const map = {
    verified: locale === "en" ? "Verified" : "Tervalidasi",
    estimated: locale === "en" ? "Estimated" : "Estimasi",
    unverified: locale === "en" ? "Unverified" : "Belum terverifikasi",
  };
  return map[confidence];
}

// ─── getModeLabel ─────────────────────────────────────────────────────────────

export function getModeLabel(
  mode: RouteTransportOption["mode"],
  locale: "id" | "en" = "id"
): string {
  return LABELS[locale].modes[mode] ?? mode;
}

// ─── getComplexityLabel ───────────────────────────────────────────────────────

export function getComplexityLabel(
  complexity: TransportComplexity,
  locale: "id" | "en" = "id"
): string {
  return LABELS[locale].complexity[complexity];
}
