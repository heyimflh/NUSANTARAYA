/**
 * NUSANTARAYA — Deterministic Preset Matcher
 * Scores, ranks, and ADAPTS route presets against user form values.
 * Duration and Region are hard constraints.
 */

import type {
  RoutePlannerFormValues,
  RouteRecommendation,
  RoutePlannerRegionId,
  RouteStop,
  RouteDuration,
} from "@/types/route-planner";
import {
  ROUTE_PRESETS,
  createRouteRecommendation,
  presetToRecommendation,
  type RoutePresetDefinition,
} from "@/data/routes/routePresets";
import { getRegionByProvinceId } from "@/data/regions/regionProvinceMap";

// ─── Scoring Weights ─────────────────────────────────────────────────────────
const W_INTEREST = 15;
const W_PACE = 10;
const W_BUDGET = 5;
const W_ORIGIN = 10;

// ─── Score Calculation ───────────────────────────────────────────────────────

interface ScoredPreset {
  preset: RoutePresetDefinition;
  score: number;
  index: number;
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
  if (!originProvinceId) return 0.5; 
  const originRegion = getRegionByProvinceId(originProvinceId);
  if (originRegion && originRegion.id === preset.regionId) return 1;
  return 0.3;
}

function scorePreset(
  preset: RoutePresetDefinition,
  values: RoutePlannerFormValues,
  index: number
): ScoredPreset {
  const score =
    computeInterestScore(preset, values.interests) * W_INTEREST +
    computePaceScore(preset, values.travelPace) * W_PACE +
    computeBudgetScore(preset, values.budgetLevel) * W_BUDGET +
    computeOriginScore(preset, values.originProvinceId) * W_ORIGIN;

  return { preset, score, index };
}

// ─── Adaptation ──────────────────────────────────────────────────────────────

/**
 * Adapt stops to strictly match the requested duration.
 */
function adaptStops(stops: RouteStop[], sourceDuration: number, targetDuration: RouteDuration): RouteStop[] {
  if (sourceDuration === targetDuration) return [...stops];

  const adapted: RouteStop[] = JSON.parse(JSON.stringify(stops));
  
  if (targetDuration < sourceDuration) {
    // Truncate
    let daysKept = 0;
    const newStops = [];
    for (const stop of adapted) {
      const stopDuration = stop.dayEnd - stop.dayStart + 1;
      if (daysKept + stopDuration <= targetDuration) {
        stop.dayStart = daysKept + 1;
        stop.dayEnd = daysKept + stopDuration;
        newStops.push(stop);
        daysKept += stopDuration;
      } else if (daysKept < targetDuration) {
        stop.dayStart = daysKept + 1;
        stop.dayEnd = targetDuration;
        newStops.push(stop);
        daysKept = targetDuration;
        break; // Reached target
      }
    }
    return newStops;
  } else {
    // Expand
    const diff = targetDuration - sourceDuration;
    // Add extra days to the last stop or distribute
    if (adapted.length > 0) {
      adapted[adapted.length - 1].dayEnd += diff;
    }
    return adapted;
  }
}

function getBudgetExplanation(level: string): string {
  switch (level) {
    case "hemat": return "Fokus pada transportasi umum, aktivitas gratis, dan akomodasi terjangkau.";
    case "premium": return "Kenyamanan ekstra pada transportasi, akomodasi, dan aktivitas.";
    case "fleksibel": return "Menyesuaikan kebutuhan dengan variasi pengalaman dari lokal hingga premium.";
    case "menengah":
    default: return "Keseimbangan antara kenyamanan standar dan pengalaman budaya.";
  }
}

function getPaceExplanation(pace: string): string {
  switch (pace) {
    case "santai": return "1-2 aktivitas per hari dengan banyak waktu istirahat.";
    case "eksploratif": return "3-4 aktivitas terkurasi per hari untuk menjelajah lebih banyak tempat.";
    case "seimbang":
    default: return "2-3 aktivitas per hari, cukup untuk eksplorasi tanpa terburu-buru.";
  }
}

function buildOriginAssumptions(originProvinceId: string | null, regionId: RoutePlannerRegionId): string[] {
  if (!originProvinceId) {
    return ["Diasumsikan tiba melalui pintu masuk bandara/pelabuhan utama wilayah ini."];
  }
  const originRegion = getRegionByProvinceId(originProvinceId);
  if (originRegion && originRegion.id === regionId) {
    return [`Berangkat dari ${originProvinceId.replace(/-/g, ' ').toUpperCase()}, urutan rute diprioritaskan dari akses darat/lokal terdekat.`];
  }
  return [`Berangkat dari luar wilayah, pastikan mengecek penerbangan ke gerbang utama ${regionId.toUpperCase()}.`];
}


// ─── Public API ──────────────────────────────────────────────────────────────

export interface MatchResult {
  recommendation: RouteRecommendation;
  isExact: boolean;
  adjustmentNote: string | null;
}

export function matchRoutePreset(
  values: RoutePlannerFormValues
): MatchResult {
  // 1. Hard Constraint: Region
  let validPresets = ROUTE_PRESETS.filter(p => p.regionId === values.destinationRegionId);
  
  if (validPresets.length === 0) {
    // Fallback: If absolutely no preset in region, use a generic national preset and adapt it
    validPresets = [...ROUTE_PRESETS];
  }

  // 2. Score and Rank
  const scored = validPresets.map((preset, index) =>
    scorePreset(preset, values, index)
  );
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index; // editorial priority
  });

  const best = scored[0].preset;
  
  // 3. Adapt
  const isExactDuration = best.durationDays === values.durationDays;
  const isExactRegion = best.regionId === values.destinationRegionId;
  const isExact = isExactDuration && isExactRegion && scored[0].score > 15;

  let adjustmentNote: string | null = null;
  let matchType: "exact" | "adapted" | "contextual" | "fallback" = "exact";

  if (!isExactRegion) {
    matchType = "fallback";
    adjustmentNote = "Wilayah yang kamu pilih belum memiliki rute rekomendasi spesifik. Kami menampilkan rute inspirasi dari wilayah lain.";
  } else if (!isExactDuration) {
    matchType = "adapted";
    adjustmentNote = `Rute ini diadaptasi dari rekomendasi ${best.durationDays} hari menjadi ${values.durationDays} hari agar sesuai dengan ketersediaan waktumu.`;
  }

  // 4. Build output
  const adaptedStops = adaptStops(best.stops, best.durationDays, values.durationDays);
  
  // Clean up province list based on adapted stops
  const newProvinceIds = Array.from(new Set(adaptedStops.map(s => s.provinceId)));

  const rec: RouteRecommendation = {
    ...createRouteRecommendation(best, matchType),
    durationDays: values.durationDays, // Strictly respect user input
    regionId: values.destinationRegionId || best.regionId,
    provinceIds: newProvinceIds,
    stops: adaptedStops,
    interests: values.interests.length > 0 ? values.interests : [...best.interests],
    budgetLabel: `Estimasi ${values.budgetLevel || 'menengah'}`,
    paceLabel: values.travelPace.charAt(0).toUpperCase() + values.travelPace.slice(1),
    assumptions: [
      getBudgetExplanation(values.budgetLevel),
      getPaceExplanation(values.travelPace),
      ...buildOriginAssumptions(values.originProvinceId, values.destinationRegionId || best.regionId)
    ],
    originalValuesSnapshot: values,
    sourceRefs: [
      {
        id: "ref-atlas-1",
        title: "Database Destinasi NUSANTARAYA",
        supports: "Cakupan rekomendasi stop",
      }
    ]
  };

  return {
    recommendation: rec,
    isExact,
    adjustmentNote,
  };
}

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
    .map((s) => presetToRecommendation(s.preset, "exact"));
}
