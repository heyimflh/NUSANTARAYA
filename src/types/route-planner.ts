/**
 * NUSANTARAYA — Route Planner Form Types
 * Planning: Section 2 Route Planner Form
 *
 * Typed contracts for form values, submission, recommendation result,
 * and prefill sources.
 */

import type { RegionId } from "./region";

// ─── Duration ────────────────────────────────────────────────────────────────
export type RouteDuration = 3 | 5 | 7;

export const ROUTE_DURATIONS: readonly RouteDuration[] = [3, 5, 7] as const;

export function isRouteDuration(v: unknown): v is RouteDuration {
  return v === 3 || v === 5 || v === 7;
}

// ─── Region (extends existing RegionId + indonesia for inspiration) ──────────
export type RoutePlannerRegionId = RegionId | "indonesia";

export const ROUTE_PLANNER_REGION_IDS: readonly RoutePlannerRegionId[] = [
  "sumatera",
  "jawa",
  "kalimantan",
  "sulawesi",
  "bali-nusa-tenggara",
  "maluku",
  "papua",
  "indonesia",
] as const;

export function isRoutePlannerRegionId(v: unknown): v is RoutePlannerRegionId {
  return (
    typeof v === "string" &&
    (ROUTE_PLANNER_REGION_IDS as readonly string[]).includes(v)
  );
}

// ─── Interest ────────────────────────────────────────────────────────────────
export type RouteInterest =
  | "budaya"
  | "alam"
  | "kuliner"
  | "sejarah"
  | "petualangan"
  | "relaksasi"
  | "hidden-gems"
  | "kota-kreatif";

export const ROUTE_INTERESTS: readonly RouteInterest[] = [
  "budaya",
  "alam",
  "kuliner",
  "sejarah",
  "petualangan",
  "relaksasi",
  "hidden-gems",
  "kota-kreatif",
] as const;

export function isRouteInterest(v: unknown): v is RouteInterest {
  return (
    typeof v === "string" &&
    (ROUTE_INTERESTS as readonly string[]).includes(v)
  );
}

// ─── Budget ──────────────────────────────────────────────────────────────────
export type BudgetLevel = "hemat" | "menengah" | "premium" | "fleksibel";

export const BUDGET_LEVELS: readonly BudgetLevel[] = [
  "hemat",
  "menengah",
  "premium",
  "fleksibel",
] as const;

export function isBudgetLevel(v: unknown): v is BudgetLevel {
  return (
    typeof v === "string" &&
    (BUDGET_LEVELS as readonly string[]).includes(v)
  );
}

// ─── Travel Pace ─────────────────────────────────────────────────────────────
export type TravelPace = "santai" | "seimbang" | "eksploratif";

export const TRAVEL_PACES: readonly TravelPace[] = [
  "santai",
  "seimbang",
  "eksploratif",
] as const;

export function isTravelPace(v: unknown): v is TravelPace {
  return (
    typeof v === "string" &&
    (TRAVEL_PACES as readonly string[]).includes(v)
  );
}

// ─── Prefill Source ──────────────────────────────────────────────────────────
export type RoutePlannerSource =
  | "routes-page"
  | "home-feature"
  | "map"
  | "province-atlas"
  | "recommended-journey"
  | "regional-explorer"
  | "passport"
  | "rani"
  | "preset-route";

export const ROUTE_PLANNER_SOURCES: readonly RoutePlannerSource[] = [
  "routes-page",
  "home-feature",
  "map",
  "province-atlas",
  "recommended-journey",
  "regional-explorer",
  "passport",
  "rani",
  "preset-route",
] as const;

export function isRoutePlannerSource(v: unknown): v is RoutePlannerSource {
  return (
    typeof v === "string" &&
    (ROUTE_PLANNER_SOURCES as readonly string[]).includes(v)
  );
}

// ─── Form Values ─────────────────────────────────────────────────────────────
export interface RoutePlannerFormValues {
  durationDays: RouteDuration;
  originProvinceId: string | null;
  destinationRegionId: RoutePlannerRegionId | null;
  interests: RouteInterest[];
  budgetLevel: BudgetLevel;
  travelPace: TravelPace;
}

export const DEFAULT_FORM_VALUES: RoutePlannerFormValues = {
  durationDays: 5,
  originProvinceId: null,
  destinationRegionId: null,
  interests: [],
  budgetLevel: "menengah",
  travelPace: "seimbang",
};

// ─── Submit Request ──────────────────────────────────────────────────────────
export interface RoutePlannerRequest extends RoutePlannerFormValues {
  source: RoutePlannerSource;
  locale: "id" | "en";
}

// ─── Recommendation Result ───────────────────────────────────────────────────
export type RouteMatchType = "dynamic" | "preset" | "fallback";

export interface RouteStop {
  dayStart: number;
  dayEnd: number;
  provinceId: string;
  cityOrCluster: string;
  highlights: string[];
}

export interface RouteRecommendation {
  id: string;
  matchType: RouteMatchType;
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
}

// ─── Form Status ─────────────────────────────────────────────────────────────
export type RoutePlannerStatus =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "fallback";

// ─── Validation Error ────────────────────────────────────────────────────────
export interface RoutePlannerValidationError {
  field: keyof RoutePlannerFormValues;
  message: string;
}
