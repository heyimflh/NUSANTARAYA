import type { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import type { PassportData, PassportSavedRoute } from "@/lib/types";
import type { ActiveRouteWorkspace, RouteWorkspaceError, RouteWorkspaceStatus } from "@/types/route-workspace";

import { resolveRouteItinerary } from "@/lib/routes/itinerary/resolveRouteItinerary";
import { resolveRouteMap } from "@/lib/routes/map/resolveRouteMap";
import { resolveRouteReadiness } from "@/lib/routes/readiness/resolveRouteReadiness";
import { buildRouteSaveSnapshot } from "@/lib/routes/save-rani/buildRouteSaveSnapshot";

export function getActiveRouteKey(recommendation: RouteRecommendation | null): string | null {
  return recommendation ? `${recommendation.id}@${recommendation.version}` : null;
}

export function hasMatchingRouteIdentity(
  recommendation: RouteRecommendation,
  entity: { routeId: string; version?: string; routeVersion?: string }
): boolean {
  return (
    entity.routeId === recommendation.id &&
    (entity.version === recommendation.version || entity.routeVersion === recommendation.version)
  );
}

export function resolveActiveRouteWorkspace(
  recommendation: RouteRecommendation | null,
  values: RoutePlannerFormValues,
  passport: PassportData,
  source: string,
  locale: "id" | "en"
): ActiveRouteWorkspace {
  const activeRouteKey = getActiveRouteKey(recommendation);

  if (!recommendation) {
    return {
      activeRouteKey: null,
      recommendation: null,
      itinerary: null,
      mapModel: null,
      transportOptions: [],
      readiness: null,
      saveSnapshot: null,
      status: "idle",
      errors: [],
      canSavePassport: false,
      canUseRani: false,
    };
  }

  const errors: RouteWorkspaceError[] = [];
  let status: RouteWorkspaceStatus = "ready";

  // 1. Resolve Itinerary
  const itineraryRes = resolveRouteItinerary(recommendation);
  if (itineraryRes.status === "partial") {
    status = "partial";
    errors.push({ code: "ITINERARY_PARTIAL", message: "Itinerary is partial", section: "itinerary" });
    return createPartialWorkspace(activeRouteKey, recommendation, status, errors);
  }
  
  if (itineraryRes.status === "invalid" || !itineraryRes.itinerary) {
    status = "error";
    errors.push({ code: "ITINERARY_INVALID", message: "Itinerary is invalid or missing", section: "itinerary" });
    return createPartialWorkspace(activeRouteKey, recommendation, status, errors);
  }

  const itinerary = itineraryRes.itinerary;

  // Validate Identity
  if (itinerary.routeId !== recommendation.id) {
    errors.push({ code: "ROUTE_ID_MISMATCH", message: "Itinerary route ID mismatch", section: "itinerary" });
    return createPartialWorkspace(activeRouteKey, recommendation, "error", errors);
  }
  if (itinerary.version !== recommendation.version) {
    errors.push({ code: "VERSION_MISMATCH", message: "Itinerary version mismatch", section: "itinerary" });
    return createPartialWorkspace(activeRouteKey, recommendation, "error", errors);
  }

  // 2. Resolve Map Model
  const mapRes = resolveRouteMap(recommendation, itinerary);
  if (!mapRes) {
    status = "partial";
    errors.push({ code: "MAP_RESOLUTION_FAILED", message: "Map resolution failed", section: "map" });
  }

  // 3. Resolve Readiness
  const readiness = resolveRouteReadiness(recommendation, itinerary, recommendation.version, itinerary.version, locale);
  if (!readiness) {
    status = "partial";
    errors.push({ code: "READINESS_RESOLUTION_FAILED", message: "Readiness resolution failed", section: "readiness" });
  }

  // 4. Resolve Passport Snapshot
  const saveSnapshot = buildRouteSaveSnapshot(recommendation, values, passport, source, locale);
  if (!saveSnapshot || saveSnapshot.routeId !== recommendation.id) {
    errors.push({ code: "SNAPSHOT_INVALID", message: "Snapshot generation failed or mismatched", section: "passport" });
    // Snapshot invalid doesn't necessarily fail the whole view, just the save capability
  }

  // 5. Calculate Capabilities
  const canSavePassport = status === "ready" && saveSnapshot !== null && !errors.some(e => e.section === "passport");
  const canUseRani = status === "ready";

  return {
    activeRouteKey,
    recommendation,
    itinerary,
    mapModel: mapRes ? mapRes.model : null,
    transportOptions: mapRes ? mapRes.transportOptions : [],
    readiness,
    saveSnapshot: errors.some(e => e.section === "passport") ? null : saveSnapshot,
    status,
    errors,
    canSavePassport,
    canUseRani,
  };
}

function createPartialWorkspace(
  activeRouteKey: string | null,
  recommendation: RouteRecommendation,
  status: RouteWorkspaceStatus,
  errors: RouteWorkspaceError[]
): ActiveRouteWorkspace {
  return {
    activeRouteKey,
    recommendation,
    itinerary: null,
    mapModel: null,
      transportOptions: [],
    readiness: null,
    saveSnapshot: null,
    status,
    errors,
    canSavePassport: false,
    canUseRani: false,
  };
}



