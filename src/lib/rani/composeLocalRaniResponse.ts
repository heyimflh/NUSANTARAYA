import { RaniResponse, RaniIntent, RaniMapContext } from "@/types/rani";
import { RankedCandidate } from "./rankRaniRecommendations";
import { raniDemoPresets } from "@/data/rani/presets";
import { getAvailableAction } from "@/data/rani/actions";

export function composeLocalRaniResponse(
  candidate: RankedCandidate | null,
  intent: RaniIntent,
  context: RaniMapContext
): RaniResponse {
  
  if (!candidate) {
    // If no candidate, try to fallback to a preset based on intent
    const preset = raniDemoPresets.find(p => p.intent === intent);
    if (preset) {
      return preset as RaniResponse;
    }
    
    // Total fallback
    return {
      id: "resp-unavailable",
      intent: "UNKNOWN",
      title: "Informasi Terbatas",
      summary: "Data terkurasi untuk pertanyaan ini belum cukup.",
      bodyBlocks: [
        { type: "paragraph", text: "RANI dapat membantumu membuka provinsi, Atlas, Archive, atau sumber terkait." }
      ],
      reasonCodes: ["EDITORIAL_FALLBACK"],
      sourceIds: [],
      primaryAction: null,
      secondaryActions: [],
      followUpPrompts: [
        { id: "prompt-next", label: "Ke mana saya harus lanjut?" }
      ],
      generatedBy: "local-template",
      confidence: "low",
      limitations: ["Data terkurasi untuk pertanyaan ini belum cukup."]
    };
  }

  const record = candidate.record;

  // Process Actions securely via registry
  let primaryAction = null;
  const secondaryActions = [];
  
  if (record.actionTargets && record.actionTargets.length > 0) {
    const firstActionTarget = record.actionTargets[0];
    const availablePrimary = getAvailableAction(firstActionTarget.type);
    if (availablePrimary) {
      primaryAction = {
        id: `act-${availablePrimary.id}`,
        type: availablePrimary.type,
        label: availablePrimary.label,
        payload: firstActionTarget.payload
      };
    }
    
    for (let i = 1; i < record.actionTargets.length; i++) {
      const target = record.actionTargets[i];
      const availableSecondary = getAvailableAction(target.type);
      if (availableSecondary) {
        secondaryActions.push({
          id: `act-${availableSecondary.id}`,
          type: availableSecondary.type,
          label: availableSecondary.label,
          payload: target.payload
        });
      }
    }
  } else {
    // Default fallback action to map
    const fallbackMap = getAvailableAction("APPLY_MAP_CONTEXT");
    if (fallbackMap) {
      primaryAction = {
        id: `act-default-map`,
        type: fallbackMap.type,
        label: fallbackMap.label,
        payload: { provinceId: record.provinceIds[0] }
      };
    }
  }

  return {
    id: `resp-${record.id}`,
    intent,
    title: record.title,
    summary: record.summary,
    bodyBlocks: [
      { type: "paragraph", text: record.summary } 
      // In a real expanded knowledge base, we'd have richer blocks.
      // We will render whatever is in the record summary for now.
    ],
    reasonCodes: candidate.reasonCodes,
    sourceIds: record.sourceIds,
    primaryAction,
    secondaryActions,
    followUpPrompts: [
      { id: "prompt-next", label: "Ke mana saya harus lanjut?" },
      { id: "prompt-etiquette", label: "Apa etika budaya yang perlu diketahui?" }
    ],
    generatedBy: "local-recommendation",
    confidence: candidate.score >= 50 ? "high" : "medium"
  };
}
