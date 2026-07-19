/**
 * NUSANTARAYA — Route Map + Transport Summary Types
 * Section 6: Route Map + Transport Summary
 *
 * Source of truth: Planning Lengkap — Section 6 Route Map + Transport Summary
 * These types represent the data contract for map model, transport options, and selection state.
 *
 * Rules:
 * - Map reads same routeId/routeVersion as Result.
 * - Map reads same itineraryVersion as Section 5.
 * - Stop IDs must be canonical from active result.
 * - Transport details only shown if source and confidence allow.
 * - Never store viewport, rendered HTML, or provider state as route identity.
 */

// ─── Geometry Confidence ──────────────────────────────────────────────────────

/**
 * How reliable the geographic representation is.
 * - canonical: geometry from validated source; may be rendered as route layer.
 * - approximate: visual guide only; must show "gambaran jalur" disclosure.
 * - schematic: abstract node diagram; no geographic scale/direction claim.
 */
export type MapGeometryConfidence =
  | "canonical"
  | "approximate"
  | "schematic";

// ─── Route Map Model ──────────────────────────────────────────────────────────

export interface RouteMapModel {
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion: string;
  /** How the map model was produced. */
  source: "canonical" | "derived" | "fallback";
  geometryConfidence: MapGeometryConfidence;
  /** [west, south, east, north] bounding box if coordinates available. */
  bounds?: [number, number, number, number];
  stops: RouteMapStop[];
  segments: RouteMapSegment[];
  attribution?: string[];
  updatedAt: string;
}

// ─── Route Map Stop ───────────────────────────────────────────────────────────

export interface RouteMapStop {
  id: string;
  /** 1-indexed, unique, sequential. */
  order: number;
  provinceId: string;
  cityOrCluster: string;
  /** Short label for marker display. */
  shortLabel: string;
  /** [latitude, longitude] — optional; only present if validated. */
  coordinates?: [number, number];
  dayStart: number;
  dayEnd: number;
  itineraryDayIds: string[];
  destinationIds?: string[];
}

// ─── Route Map Segment ────────────────────────────────────────────────────────

export interface RouteMapSegment {
  id: string;
  /** References a transfer segment in the itinerary. */
  itinerarySegmentId: string;
  fromStopId: string;
  toStopId: string;
  /** Day on which this transfer/segment occurs. */
  dayNumber: number;
  /** Optional reference to geometry asset (GeoJSON, polyline key). */
  geometryRef?: string;
  geometryConfidence: MapGeometryConfidence;
  transportOptionIds: string[];
  isRequired: boolean;
}

// ─── Transport Confidence ─────────────────────────────────────────────────────

/**
 * How trustworthy the transport information is.
 * - verified: source ref + verifiedAt present; may show mode/duration.
 * - estimated: estimasi label required; no certainty claim.
 * - unverified: note only; no duration/operator as fact.
 */
export type TransportConfidence = import("@/lib/routes/readiness/routeReadinessSchema").DataConfidence;

// ─── Transport Mode ───────────────────────────────────────────────────────────

export type RouteTransportMode =
  | "walk"
  | "local-transit"
  | "rail"
  | "road"
  | "ferry"
  | "flight"
  | "mixed"
  | "unspecified";

// ─── Route Transport Option ───────────────────────────────────────────────────

export interface RouteTransportOption {
  id: string;
  /** Must reference a valid segment in the RouteMapModel. */
  segmentId: string;
  mode: RouteTransportMode;
  label: string;
  confidence: TransportConfidence;
  /** Human-readable duration only if sourced and confidence allows. */
  durationLabel?: string;
  durationMinutes?: number;
  operatorId?: string;
  reservationNoteId?: string;
  accessibilityNoteId?: string;
  sourceRefs?: string[];
  verifiedAt?: string;
}

// ─── Route Map Selection ──────────────────────────────────────────────────────

/**
 * Typed selection context shared between Map, Itinerary, and URL.
 * Canonical IDs only — never parsed from labels or DOM.
 */
export interface RouteMapSelection {
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  dayNumber?: number;
  dayId?: string;
  stopId?: string;
  segmentIds: string[];
  /** How the selection was triggered. */
  source: "itinerary" | "map" | "result" | "restored";
}

// ─── Transport Complexity ─────────────────────────────────────────────────────

export type TransportComplexity =
  | "simple"           // 1-2 stops, max 1 main transfer
  | "moderate"         // 2-3 stops, 1-2 main transfers
  | "active-transfer"  // 3-4 stops or >=3 main transfers
  | "unknown";         // insufficient transfer data

// ─── Route Map State ──────────────────────────────────────────────────────────

export type RouteMapState =
  | "hidden"
  | "loading"
  | "ready"
  | "route-overview"
  | "day-focused"
  | "stop-focused"
  | "segment-focused"
  | "partial"
  | "schematic-fallback"
  | "restored"
  | "stale"
  | "error";

// ─── Route Map View Model ─────────────────────────────────────────────────────

/** Presentation-ready data derived from RouteMapModel + selection. */
export interface RouteMapViewModel {
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion: string;
  mapState: RouteMapState;
  geometryConfidence: MapGeometryConfidence;
  geometryLabel: string;
  sourceLabel: string;
  orderedStops: RouteMapStop[];
  activeStopId: string | null;
  activeDayNumber: number | null;
  activeSegmentIds: string[];
  segments: RouteMapSegment[];
  transportOptions: RouteTransportOption[];
  /** Total number of validated transport options. */
  validatedTransportCount: number;
  complexity: TransportComplexity;
  complexityLabel: string;
  dominantModeLabel: string | null;
  /** Plain text summary for screen readers. */
  accessibleRouteSummary: string;
  /** Text description of active selection for live region. */
  selectionAnnouncement: string | null;
  showDisclosure: boolean;
  attributionLines: string[];
  updatedAt: string;
}

