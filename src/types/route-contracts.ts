/**
 * NUSANTARAYA — Route Contracts
 * Phase 1: Canonical Contracts for RouteRecommendation, RouteStop, and RoutePlannerFormValues.
 * 
 * All route-related entities MUST use these canonical definitions to ensure
 * type safety across the application, especially between the planner, 
 * Rani context, and passport saves.
 */

import type { RouteDuration, RoutePlannerRegionId, RouteInterest, BudgetLevel, TravelPace } from "./route-planner";

export type { RouteDuration, RoutePlannerRegionId, RouteInterest, BudgetLevel, TravelPace };

/**
 * Core representation of a stop within a route.
 */
export interface RouteStop {
  id: string; // Required for Rani tracking
  dayStart: number;
  dayEnd: number;
  provinceId: string;
  regionId: RoutePlannerRegionId; // Added explicitly to support Passport analytics
  cityOrCluster: string;
  highlights: string[];
}

/**
 * References used by the engine to justify a route recommendation.
 */
export interface RouteSourceReference {
  id: string;
  title: string;
  url?: string;
  publisher?: string;
  accessedAt?: string;
  lastVerifiedAt?: string;
  supports: string;
  note?: string;
}

/**
 * Form values submitted by the user in the Route Planner.
 */
export interface RoutePlannerFormValues {
  durationDays: RouteDuration;
  originProvinceId: string | null;
  destinationRegionId: RoutePlannerRegionId | null;
  interests: RouteInterest[];
  budgetLevel: BudgetLevel;
  travelPace: TravelPace;
  partySize?: number; // Added for Rani context
  travelerMode: "explore" | "tourist" | "learn"; // Unified with AppMode
}

/**
 * The canonical recommended route output by the planner engine or Rani.
 */
export interface RouteRecommendation {
  id: string;
  version?: string; // e.g., "1.0", for passport saving
  matchType: "exact" | "adapted" | "contextual" | "fallback" | "restored"; // Merged types
  title: string;
  summary: string;
  reason: string[];
  durationDays: RouteDuration;
  regionId: RoutePlannerRegionId;
  provinceIds: string[];
  stops: RouteStop[];
  interests: RouteInterest[];
  budgetLabel: string;
  paceLabel: string;
  transportSummary: string[];
  etiquetteTips: string[];
  assumptions?: string[];
  sourceRefs?: RouteSourceReference[];
  originalValuesSnapshot?: RoutePlannerFormValues;
}
