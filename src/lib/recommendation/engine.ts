import {
  JourneyRecommendationContext,
  JourneyRecommendationResult,
  RecommendedJourney,
  JourneyReasonCode,
  RecommendationConfidence,
  JourneyLayer,
} from "@/data/journeys/types";
import { journeyPresets } from "@/data/journeys/presets";

// Evaluasi 1: Filtering Eligible Journeys
function getEligibleJourneys(context: JourneyRecommendationContext): RecommendedJourney[] {
  return journeyPresets.filter((j) => {
    // Mode must be supported
    if (!j.modes.includes(context.activeMode)) return false;

    // Tourist mode validations
    if (context.activeMode === "tourist" && !j.travelValidated) return false;

    return true;
  });
}

// Evaluasi 2: Scoring
function scoreJourney(j: RecommendedJourney, context: JourneyRecommendationContext): { score: number; reasons: JourneyReasonCode[] } {
  let score = 0;
  const reasons: JourneyReasonCode[] = [];

  // Layer match (30%)
  if (context.activeLayer !== "all") {
    if (j.primaryLayer === context.activeLayer) {
      score += 30;
      reasons.push("MATCHES_ACTIVE_LAYER");
    } else if (j.secondaryLayers?.includes(context.activeLayer as JourneyLayer)) {
      score += 15;
    }
  }

  // Mode match (20%) - already filtered, but just give it score
  score += 20;
  reasons.push("MATCHES_ACTIVE_MODE");

  // Selected Province match (20%)
  if (context.selectedProvinceId) {
    if (j.stops[0].provinceId === context.selectedProvinceId) {
      score += 20;
      reasons.push("STARTS_FROM_SELECTED_PROVINCE");
    } else if (j.stopIds.includes(context.selectedProvinceId)) {
      score += 10;
    }
  }

  // Passport novelty (15%)
  const hasNovelty = j.stopIds.some((id) => !context.passportProvinceIds.includes(id));
  if (hasNovelty) {
    score += 15;
    reasons.push("NEW_FOR_PASSPORT");
  }

  // Active / Planned continuation (10%)
  const hasStartedOrPlanned = j.stopIds.some((id) => context.startedProvinceIds.includes(id) || context.plannedProvinceIds.includes(id));
  if (hasStartedOrPlanned) {
    score += 10;
  }

  // Already saved penalty (-20%)
  if (context.savedRouteIds.includes(j.id)) {
    score -= 20;
  }

  // Flagship preference (5%)
  if (context.showFlagshipOnly && j.slug === "flagship-grand-tour") {
    score += 25; // boost if strictly asking for flagship
  }

  // Fallbacks
  if (j.slug === "flagship-grand-tour" && reasons.length <= 1) {
    reasons.push("POPULAR_STARTER");
  }

  return { score, reasons };
}

// Evaluasi 3: Compose Recommendations
export function getRecommendedJourneys(context: JourneyRecommendationContext): JourneyRecommendationResult {
  const eligible = getEligibleJourneys(context);

  const scored = eligible.map((j) => {
    const { score, reasons } = scoreJourney(j, context);
    return { journey: j, score, reasons };
  });

  // Sort by score desc, then by "not recently viewed", then by data completeness (stops count)
  scored.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    
    const aViewed = context.viewedJourneyIds.includes(a.journey.id) ? 1 : 0;
    const bViewed = context.viewedJourneyIds.includes(b.journey.id) ? 1 : 0;
    if (aViewed !== bViewed) return aViewed - bViewed;

    return b.journey.stops.length - a.journey.stops.length;
  });

  if (scored.length === 0) {
    // Ultimate fallback if somehow empty
    const fallback = journeyPresets.find((j) => j.slug === "flagship-grand-tour")!;
    return {
      primary: fallback,
      alternatives: [],
      confidence: "fallback",
      reasons: ["POPULAR_STARTER"],
      generatedBy: "fallback",
    };
  }

  const primaryScore = scored[0];
  const primary = primaryScore.journey;
  
  // Smart suggestions: pick max 3, prioritize diverse ones if possible, but for now just top 3 others
  const alternatives = scored.slice(1, 4).map((s) => s.journey);

  let confidence: RecommendationConfidence = "fallback";
  if (primaryScore.score >= 50) confidence = "strong";
  else if (primaryScore.score > 20) confidence = "moderate";

  return {
    primary,
    alternatives,
    confidence,
    reasons: primaryScore.reasons.slice(0, 3), // Max 3 reasons: 1 primary, 2 secondary
    generatedBy: "local-rules",
  };
}

// Dictionary to map reason codes to human readable copy
export const REASON_COPY_ID: Record<JourneyReasonCode, string> = {
  MATCHES_ACTIVE_LAYER: "Sesuai dengan tema layer yang kamu pilih.",
  STARTS_FROM_SELECTED_PROVINCE: "Dimulai dari provinsi yang sedang aktif di peta.",
  MATCHES_ACTIVE_MODE: "Disesuaikan dengan mode penjelajahanmu.",
  NEW_FOR_PASSPORT: "Memperkenalkan provinsi yang belum tersimpan di Passport.",
  COMPLETES_REGION_BADGE: "Membantu melengkapi badge wilayahmu.",
  FLAGSHIP_CONTENT_DEPTH: "Memiliki sorotan utama yang mendalam.",
  REGIONAL_CONTINUITY: "Menjaga perjalanan dalam satu kawasan agar lebih mudah diikuti.",
  THEMATIC_CONTINUITY: "Menyelaraskan tema cerita dari provinsi ke provinsi.",
  SOURCE_COMPLETENESS: "Memiliki materi belajar dan sumber yang lebih lengkap.",
  POPULAR_STARTER: "Jalur terkurasi yang cocok untuk memulai.",
};
