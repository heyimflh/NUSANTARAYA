import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import type { RouteMapModel, RouteTransportOption } from "@/types/route-map";
import type { RouteReadinessDossier } from "@/lib/routes/readiness/routeReadinessSchema";
import type { PassportSavedRoute } from "@/lib/types";

export type RouteWorkspaceStatus =
  | "idle"
  | "resolving"
  | "ready"
  | "partial"
  | "error";

export interface RouteWorkspaceError {
  code:
    | "ITINERARY_PARTIAL"
    | "ITINERARY_INVALID"
    | "ROUTE_ID_MISMATCH"
    | "VERSION_MISMATCH"
    | "MAP_RESOLUTION_FAILED"
    | "READINESS_RESOLUTION_FAILED"
    | "SNAPSHOT_INVALID";
  message: string;
  section: "itinerary" | "map" | "readiness" | "passport" | "rani";
}

export interface ActiveRouteWorkspace {
  activeRouteKey: string | null;
  recommendation: RouteRecommendation | null;
  itinerary: RouteItinerary | null;
  mapModel: RouteMapModel | null;
  transportOptions: RouteTransportOption[];
  readiness: RouteReadinessDossier | null;
  saveSnapshot: PassportSavedRoute | null;
  
  status: RouteWorkspaceStatus;
  errors: RouteWorkspaceError[];
  
  canSavePassport: boolean;
  canUseRani: boolean;
}



