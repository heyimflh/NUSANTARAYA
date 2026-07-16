/**
 * NUSANTARAYA — Deterministic Preset Matcher
 * Scores and ranks route presets against user form values.
 * Weighted scoring per planning: region 40, duration 25, interest 15, pace 10, budget 5, origin 5.
 * Tie-break: editorial priority (array order), then ID stability.
 */

import type {
  RoutePlannerFormValues,
  RouteRecommendation,
  RoutePlannerRegionId,
} from "@/types/route-planner";
import {
  ROUTE_PRESETS,
  presetToRecommendation,
  type RoutePresetDefinition,
} from "@/data/routes/routePresets";
import { getRegionByProvinceId } from "@/data/regions/regionProvinceMap";

// ─── Scoring Weights ─────────────────────────────────────────────────────────

const W_REGION = 40;
const W_DURATION = 25;
const W_INTEREST = 15;
const W_PACE = 10;
const W_BUDGET = 5;
const W_ORIGIN = 5;

// ─── Score Calculation ───────────────────────────────────────────────────────

interface ScoredPreset {
  preset: RoutePresetDefinition;
  score: number;
  index: number;
}

function computeRegionScore(
  preset: RoutePresetDefinition,
  regionId: RoutePlannerRegionId | null
): number {
  if (!regionId) return 0;
  if (regionId === "indonesia") return 0.5; // partial match for inspiration mode
  return preset.regionId === regionId ? 1 : 0;
}

function computeDurationScore(
  preset: RoutePresetDefinition,
  durationDays: number
): number {
  if (preset.durationDays === durationDays) return 1;
  // Partial credit for close durations
  const diff = Math.abs(preset.durationDays - durationDays);
  if (diff === 2) return 0.5;
  return 0.25;
}

function computeInterestScore(
  preset: RoutePresetDefinition,
  interests: string[]
): number {
  if (interests.length === 0) return 0;
  const overlap = preset.interests.filter((i) => interests.includes(i)).length;
  return overlap / Math.max(interests.length, 1);
}

function computePaceScore(
  preset: RoutePresetDefinition,
  pace: string
): number {
  return preset.supportedPaces.includes(pace as typeof preset.supportedPaces[number])
    ? 1
    : 0.3;
}

function computeBudgetScore(
  preset: RoutePresetDefinition,
  budget: string
): number {
  return preset.supportedBudgets.includes(budget as typeof preset.supportedBudgets[number])
    ? 1
    : 0.3;
}

function computeOriginScore(
  preset: RoutePresetDefinition,
  originProvinceId: string | null
): number {
  if (!originProvinceId) return 0.5; // Neutral — no penalty for flexible
  // Check if origin is in the same region as the preset
  const originRegion = getRegionByProvinceId(originProvinceId);
  if (originRegion && originRegion.id === preset.regionId) return 1;
  // Origin in a different region — still valid but lower priority
  return 0.3;
}

function scorePreset(
  preset: RoutePresetDefinition,
  values: RoutePlannerFormValues,
  index: number
): ScoredPreset {
  const score =
    computeRegionScore(preset, values.destinationRegionId) * W_REGION +
    computeDurationScore(preset, values.durationDays) * W_DURATION +
    computeInterestScore(preset, values.interests) * W_INTEREST +
    computePaceScore(preset, values.travelPace) * W_PACE +
    computeBudgetScore(preset, values.budgetLevel) * W_BUDGET +
    computeOriginScore(preset, values.originProvinceId) * W_ORIGIN;

  return { preset, score, index };
}

// ─── Public API ──────────────────────────────────────────────────────────────

export interface MatchResult {
  recommendation: RouteRecommendation;
  isExact: boolean;
  adjustmentNote: string | null;
}

/**
 * Match user form values against presets and return the best recommendation.
 * Always returns a result — never a dead end.
 */
export function matchRoutePreset(
  values: RoutePlannerFormValues
): MatchResult {
  const scored = ROUTE_PRESETS.map((preset, index) =>
    scorePreset(preset, values, index)
  );

  // Sort by score (desc), then by editorial priority (index asc)
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });

  const best = scored[0];
  const maxPossibleScore = W_REGION + W_DURATION + W_INTEREST + W_PACE + W_BUDGET + W_ORIGIN;
  const scoreRatio = best.score / maxPossibleScore;

  // Determine if it's an exact match (>85%) or adjusted
  const isExact = scoreRatio > 0.85;

  const adjustmentNote = isExact
    ? null
    : "Kami menyesuaikan cakupan agar perjalanan tetap realistis. Rute ini paling mendekati wilayah, durasi, dan minat pilihanmu.";

  const matchType = isExact ? "preset" : "fallback";

  return {
    recommendation: presetToRecommendation(best.preset, matchType),
    isExact,
    adjustmentNote,
  };
}

/**
 * Get top N preset recommendations for given form values.
 */
export function getTopPresets(
  values: RoutePlannerFormValues,
  count: number = 3
): RouteRecommendation[] {
  const scored = ROUTE_PRESETS.map((preset, index) =>
    scorePreset(preset, values, index)
  );

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });

  return scored
    .slice(0, count)
    .map((s) => presetToRecommendation(s.preset, "preset"));
}
