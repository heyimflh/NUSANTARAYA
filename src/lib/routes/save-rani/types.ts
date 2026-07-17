import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import type { PassportSavedRoute } from "@/lib/types";

export type RouteAdjustmentIntent =
  | "REDUCE_BUDGET"
  | "INCREASE_COMFORT"
  | "REDUCE_TRANSFERS"
  | "SLOWER_PACE"
  | "MORE_ACTIVE_PACE"
  | "ADD_REST_WINDOW"
  | "PRIORITIZE_CULTURE"
  | "PRIORITIZE_CULINARY"
  | "PRIORITIZE_NATURE"
  | "PRIORITIZE_HISTORY"
  | "REPLACE_ACTIVITY"
  | "ADJUST_DAY"
  | "ADD_ACCESS_VERIFICATION"
  | "ADD_DIET_VERIFICATION"
  | "EXPLAIN_BUDGET"
  | "EXPLAIN_ETIQUETTE"
  | "OPEN_PLANNER"
  | "UNKNOWN";

import type { RouteDuration, RoutePlannerRegionId } from "@/types/route-planner";
import type { AppMode } from "@/lib/types";

export interface RouteRaniContext {
  entrySource: "route-save-section";
  routeId: string;
  routeVersion: string;
  itineraryVersion: string;
  mapVersion?: string;
  readinessVersion?: string;
  durationDays: RouteDuration; // Replaced 3 | 5 | 7
  provinceIds: string[];
  stopIds: string[];
  selectedDayNumber?: number;
  selectedStopId?: string;
  selectedSegmentIds?: string[];
  interests: string[];
  budgetLevel: string;
  travelPace: string;
  partySize?: number;
  readinessStatus?: "ready" | "partial" | "stale";
  budgetConfidence?: "verified" | "estimated" | "partial" | "unknown";
  incompleteChecklistItemIds?: string[];
  passportSaveStatus: "unsaved" | "saved" | "outdated";
  locale: "id" | "en";
  travelerMode: AppMode; // Replaced "explore" | "tourist" | "learn"
}

export type RouteAdjustmentChangeType = 
  | "budget-level" 
  | "pace" 
  | "duration" 
  | "activity-replaced" 
  | "day-reordered" 
  | "rest-added" 
  | "transfer-changed" 
  | "verification-check-added";

export interface RouteAdjustmentChange {
  type: RouteAdjustmentChangeType;
  before: string;
  after: string;
  affectedId?: string;
  affectedDayNumber?: number;
  reason: string;
  impact?: string;
}

export interface RouteAdjustmentDraft {
  id: string;
  baseRouteId: string;
  baseRouteVersion: string;
  baseItineraryVersion: string;
  intent: RouteAdjustmentIntent;
  status: "draft" | "valid" | "invalid" | "stale";
  summary: string;
  reasonCodes: string[];
  changes: RouteAdjustmentChange[];
  unchangedGuarantees: string[];
  limitations: string[];
  validationErrors: string[];
  proposedRoute: RouteRecommendation; // Full new proposed route
  proposedItinerary: RouteItinerary;  // Full new proposed itinerary
  generatedBy: "local-template" | "local-rules" | "hybrid-ai" | "editorial-preset";
  createdAt: string;
}

export type PassportRouteSaveStatus = "created" | "updated" | "unchanged" | "failed";

export interface PassportRouteSaveResult {
  status: PassportRouteSaveStatus;
  savedRoute: PassportSavedRoute | null;
  plannedProvinceIdsAdded: string[];
  preservedHigherStatusProvinceIds: string[];
  errorCode?:
    | "INVALID_ROUTE"
    | "VERSION_MISMATCH"
    | "STORAGE_UNAVAILABLE"
    | "WRITE_FAILED"
    | "VALIDATION_FAILED"
    | "QUOTA_EXCEEDED";
}
