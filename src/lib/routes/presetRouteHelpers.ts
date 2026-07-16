/**
 * NUSANTARAYA — Preset Route Helpers
 *
 * Provides pure, typed functions to filter, rank, and map preset routes
 * to form values, ensuring a consistent Data Contract without duplicating
 * logic across the section.
 */

import { ROUTE_PRESETS, type RoutePresetDefinition } from "@/data/routes/routePresets";
import type {
  RoutePlannerFormValues,
  RoutePlannerRegionId,
  RouteDuration,
  RouteInterest,
  TravelPace,
  BudgetLevel,
} from "@/types/route-planner";

export interface PresetRouteFilters {
  collection?: string | null;
  regionId?: RoutePlannerRegionId | null;
  durationDays?: RouteDuration | null;
  interest?: RouteInterest | null;
}

export interface PresetRankingContext {
  presetId?: string;
  regionId?: RoutePlannerRegionId | null;
  durationDays?: RouteDuration;
  interests?: RouteInterest[];
  travelPace?: TravelPace;
  budgetLevel?: BudgetLevel;
}

/**
 * Filter preset routes based on selected criteria (AND logic).
 */
export function filterPresetRoutes(
  presets: readonly RoutePresetDefinition[],
  filters: PresetRouteFilters
): RoutePresetDefinition[] {
  return presets.filter((preset) => {
    if (filters.collection && (!preset.collections || !preset.collections.includes(filters.collection))) {
      return false;
    }
    if (filters.regionId && preset.regionId !== filters.regionId) {
      return false;
    }
    if (filters.durationDays && preset.durationDays !== filters.durationDays) {
      return false;
    }
    if (filters.interest && !preset.interests.includes(filters.interest)) {
      return false;
    }
    return true;
  });
}

/**
 * Rank routes based on the current context, returning the best match first.
 * Used to determine the `Featured Route` dynamically.
 * Priority: Exact preset > Form Context Matches > Default Featured
 */
export function rankPresetRoutes(
  presets: readonly RoutePresetDefinition[],
  context: PresetRankingContext
): RoutePresetDefinition[] {
  const scored = presets.map((preset, index) => {
    let score = 0;

    if (context.presetId && preset.id === context.presetId) {
      score += 100;
    }

    if (context.regionId && preset.regionId === context.regionId) {
      score += 40;
    }

    if (context.durationDays && preset.durationDays === context.durationDays) {
      score += 25;
    }

    if (context.interests && context.interests.length > 0) {
      const overlap = preset.interests.filter(i => context.interests?.includes(i)).length;
      score += overlap * 15;
    }

    if (context.travelPace && preset.supportedPaces.includes(context.travelPace)) {
      score += 10;
    }

    if (context.budgetLevel && preset.supportedBudgets.includes(context.budgetLevel)) {
      score += 5;
    }

    // Tie-breaker: keep the original stable order if scores are exactly the same
    // We add a tiny fraction based on original index (inverted, so lower index is better tiebreak)
    score += (100 - index) * 0.001;

    return { preset, score };
  });

  return scored.sort((a, b) => b.score - a.score).map((s) => s.preset);
}

/**
 * Map a preset definition to Route Planner form values.
 * It will not override the user's explicitly selected originProvinceId.
 */
export function mapPresetToPlannerValues(
  preset: RoutePresetDefinition,
  currentValues: RoutePlannerFormValues
): RoutePlannerFormValues {
  return {
    ...currentValues,
    durationDays: preset.durationDays,
    destinationRegionId: preset.regionId,
    // Take up to 3 primary interests as the form allows
    interests: preset.interests.slice(0, 3),
    // Use the first supported budget and pace as the safest default, 
    // or keep the current one if it's already supported.
    budgetLevel: preset.supportedBudgets.includes(currentValues.budgetLevel)
      ? currentValues.budgetLevel
      : preset.supportedBudgets[0],
    travelPace: preset.supportedPaces.includes(currentValues.travelPace)
      ? currentValues.travelPace
      : preset.supportedPaces[0],
  };
}

/**
 * Safely get published preset routes (can be extended with validation logic if pulling from API)
 */
export function getPublishedPresetRoutes(): readonly RoutePresetDefinition[] {
  return ROUTE_PRESETS;
}
