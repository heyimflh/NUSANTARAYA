import type {
  RoutePlannerFormValues,
  RouteRecommendation,
  RoutePlannerRegionId,
  RouteDuration,
} from "@/types/route-planner";
import {
  ROUTE_PRESETS,
  createRouteRecommendation,
  presetToRecommendation,
  type RoutePresetDefinition,
} from "@/data/routes/routePresets";
import { getRegionByProvinceId } from "@/data/regions/regionProvinceMap";
import { ROUTE_ADAPTATION_POLICY, type SupportedRouteDuration, type RouteDurationAdaptation } from "./routeAdaptationPolicy";
import { resolveRouteItinerary } from "./itinerary/resolveRouteItinerary";

const W_INTEREST = 15;
const W_PACE = 10;
const W_BUDGET = 5;
const W_ORIGIN = 10;

interface ScoredPreset {
  preset: RoutePresetDefinition;
  score: number;
  index: number;
}

function computeInterestScore(preset: RoutePresetDefinition, interests: string[]): number {
  if (interests.length === 0) return 0;
  const overlap = preset.interests.filter((i) => interests.includes(i)).length;
  return overlap / Math.max(interests.length, 1);
}

function computePaceScore(preset: RoutePresetDefinition, pace: string): number {
  return preset.supportedPaces.includes(pace as typeof preset.supportedPaces[number]) ? 1 : 0.3;
}

function computeBudgetScore(preset: RoutePresetDefinition, budget: string): number {
  return preset.supportedBudgets.includes(budget as typeof preset.supportedBudgets[number]) ? 1 : 0.3;
}

function computeOriginScore(preset: RoutePresetDefinition, originProvinceId: string | null): number {
  if (!originProvinceId) return 0.5; 
  const originRegion = getRegionByProvinceId(originProvinceId);
  if (originRegion && originRegion.id === preset.regionId) return 1;
  return 0.3;
}

function scorePreset(preset: RoutePresetDefinition, values: RoutePlannerFormValues, index: number): ScoredPreset {
  const score =
    computeInterestScore(preset, values.interests) * W_INTEREST +
    computePaceScore(preset, values.travelPace) * W_PACE +
    computeBudgetScore(preset, values.budgetLevel) * W_BUDGET +
    computeOriginScore(preset, values.originProvinceId) * W_ORIGIN;

  return { preset, score, index };
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

export type RouteMatchType = "exact-preset" | "adapted-preset" | "fallback-preset";

export interface RouteMatchMetadata {
  matchType: RouteMatchType | null;
  requestedRegion: RoutePlannerRegionId | null;
  requestedDuration: SupportedRouteDuration;
  actualDuration: SupportedRouteDuration | null;
  reason: string;
}

export type RouteMatchResolution =
  | {
      status: "matched";
      recommendation: RouteRecommendation;
      metadata: RouteMatchMetadata;
      alternatives: RouteRecommendation[];
    }
  | {
      status: "alternatives";
      recommendation: null;
      metadata: RouteMatchMetadata;
      alternatives: RouteRecommendation[];
    }
  | {
      status: "unavailable";
      recommendation: null;
      metadata: RouteMatchMetadata;
      alternatives: [];
    };

/**
 * Look up adaptation policy for a given route ID and duration.
 * Returns undefined if no policy exists for this combination.
 */
function lookupAdaptationPolicy(
  routeId: string,
  duration: SupportedRouteDuration
): RouteDurationAdaptation | undefined {
  const routePolicy = ROUTE_ADAPTATION_POLICY[routeId];
  if (!routePolicy) return undefined;
  return routePolicy[duration];
}

export function matchRoutePreset(values: RoutePlannerFormValues): RouteMatchResolution {
  const reqRegion = values.destinationRegionId;
  const reqDuration = values.durationDays;
  
  // 1. Hard Region Filter
  const validPresets = reqRegion ? ROUTE_PRESETS.filter(p => p.regionId === reqRegion) : [];
  
  if (validPresets.length === 0 || !reqRegion) {
    return {
      status: "unavailable",
      recommendation: null,
      metadata: {
        matchType: null,
        requestedRegion: reqRegion,
        requestedDuration: reqDuration,
        actualDuration: null,
        reason: "Belum ada preset yang tersedia untuk region ini.",
      },
      alternatives: []
    };
  }

  // 2. Score Candidates
  const scored = validPresets.map((preset, index) => scorePreset(preset, values, index));
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });

  const best = scored[0].preset;
  const policy = lookupAdaptationPolicy(best.id, reqDuration);
  
  const createRec = (preset: RoutePresetDefinition, mType: RouteMatchType): RouteRecommendation => {
    return {
      ...createRouteRecommendation(preset, mType),
      durationDays: preset.durationDays,
      requestedDuration: reqDuration,
      actualDuration: preset.durationDays,
      interests: values.interests.length > 0 ? values.interests : [...preset.interests],
      budgetLabel: `Estimasi ${values.budgetLevel || 'menengah'}`,
      paceLabel: values.travelPace.charAt(0).toUpperCase() + values.travelPace.slice(1),
      assumptions: [
        getBudgetExplanation(values.budgetLevel),
        getPaceExplanation(values.travelPace),
        ...buildOriginAssumptions(values.originProvinceId, preset.regionId)
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
  };

  // 3. Resolve matched preset
  if (policy && (policy.type === "identity" || policy.type === "use-existing-route")) {
    const targetPreset = ROUTE_PRESETS.find(p => p.id === policy.targetRouteId);
    if (targetPreset) {
      const isExact = policy.type === "identity";
      const mType: RouteMatchType = isExact ? "exact-preset" : "adapted-preset";
      const rec = createRec(targetPreset, mType);
      
      // Verify itinerary
      const itinRes = resolveRouteItinerary(rec);
      if (itinRes.status === "ready") {
        const reason = isExact
          ? "Sesuai dengan preferensi."
          : policy.type === "use-existing-route"
            ? policy.reason
            : "Sesuai dengan preferensi.";
        return {
          status: "matched",
          recommendation: rec,
          metadata: {
            matchType: mType,
            requestedRegion: reqRegion,
            requestedDuration: reqDuration,
            actualDuration: targetPreset.durationDays,
            reason,
          },
          alternatives: []
        };
      }
    }
  }

  // 4. Fallback (Alternatives in same region)
  const alts = validPresets.map(p => createRec(p, "fallback-preset"));
  const fallbackRec = alts.find(a => resolveRouteItinerary(a).status === "ready");

  if (fallbackRec) {
    const unsupportedReason = policy?.type === "unsupported" ? policy.reason : undefined;
    return {
      status: "matched",
      recommendation: fallbackRec,
      metadata: {
        matchType: "fallback-preset",
        requestedRegion: reqRegion,
        requestedDuration: reqDuration,
        actualDuration: fallbackRec.durationDays,
        reason: unsupportedReason ?? "Durasi yang diminta belum tersedia.",
      },
      alternatives: alts.filter(a => a.id !== fallbackRec.id)
    };
  }

  return {
    status: "alternatives",
    recommendation: null,
    metadata: {
      matchType: null,
      requestedRegion: reqRegion,
      requestedDuration: reqDuration,
      actualDuration: null,
      reason: "Tidak ada rute yang sepenuhnya cocok dengan durasi ini.",
    },
    alternatives: alts
  };
}

export function getTopPresets(values: RoutePlannerFormValues, count: number = 3): RouteRecommendation[] {
  const scored = ROUTE_PRESETS.map((preset, index) => scorePreset(preset, values, index));
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });
  return scored.slice(0, count).map(s => presetToRecommendation(s.preset, "exact-preset"));
}
