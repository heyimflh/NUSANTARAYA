import { RaniMapContext, RaniIntent, RaniKnowledgeRecord, RaniReasonCode } from "@/types/rani";
import { raniKnowledgeBase } from "@/data/rani/knowledge";

export type RankedCandidate = {
  record: RaniKnowledgeRecord;
  score: number;
  reasonCodes: RaniReasonCode[];
};

/**
 * Deterministic scoring engine for knowledge records based on current context.
 */
export function rankRaniRecommendations(
  records: RaniKnowledgeRecord[],
  context: RaniMapContext,
  intent: RaniIntent
): RankedCandidate[] {
  const candidates: RankedCandidate[] = [];

  for (const record of records) {
    let score = 0;
    const reasons: RaniReasonCode[] = [];

    // Explicit query match (35)
    // If the record was matched directly by intent and keywords in retrieve step, we assume it's a match.
    // We'll rely on the caller to have filtered appropriately, but we can score it here.
    if (intent !== "UNKNOWN" && record.type !== "province") {
      score += 35;
      reasons.push("MATCHES_EXPLICIT_QUERY");
    }

    // Selected province (20)
    if (context.selectedProvinceId && record.provinceIds.includes(context.selectedProvinceId)) {
      score += 20;
      reasons.push("MATCHES_SELECTED_PROVINCE");
    }

    // Active layer (20)
    if (context.activeLayer !== "all" && record.layerIds.includes(context.activeLayer)) {
      score += 20;
      reasons.push("MATCHES_ACTIVE_LAYER");
    }

    // Active mode (10)
    if (record.modeTags.includes(context.activeMode)) {
      score += 10;
      reasons.push("MATCHES_ACTIVE_MODE");
    }

    // Passport milestone (20)
    if (context.nextMilestone && record.provinceIds.includes(context.nextMilestone.provinceId)) {
      score += 20;
      reasons.push("ADVANCES_NEXT_LEVEL"); // Generic reason for milestone
    }

    // Active/highlighted region (15)
    const activeRegion = context.activeRegionId || context.highlightedRegionId;
    if (activeRegion && record.regionIds.includes(activeRegion)) {
      score += 15;
      reasons.push("MATCHES_ACTIVE_REGION");
    }

    // Journey continuity (15)
    if (context.activeJourneyId && record.provinceIds.some(id => context.journeyProvinceIds.includes(id))) {
      score += 15;
      reasons.push("CONTINUES_ACTIVE_JOURNEY");
    }

    // Flagship content depth (5)
    if (context.showFlagshipOnly) {
      score += 5;
      reasons.push("FLAGSHIP_CONTENT_DEPTH");
    }

    // Source completeness (10)
    if (record.sourceIds.length > 0) {
      score += 10;
      reasons.push("SOURCE_COMPLETE");
    }

    candidates.push({
      record,
      score,
      reasonCodes: Array.from(new Set(reasons))
    });
  }

  // Tie-break sorting:
  // score -> source completeness -> province ID alphabetical
  candidates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.record.sourceIds.length !== a.record.sourceIds.length) return b.record.sourceIds.length - a.record.sourceIds.length;
    return a.record.id.localeCompare(b.record.id);
  });

  return candidates;
}
