import { RaniMapContext, RaniResponse } from "@/types/rani";
import { raniDemoPresets } from "@/data/rani/presets";
import { provinceMapData } from "@/data/provinces/provinces";

export function rankRaniRecommendations(context: RaniMapContext): RaniResponse {
  // If there's an explicit selected province, recommend exploring it
  if (context.selectedProvinceId) {
    const prov = provinceMapData.find(p => p.id === context.selectedProvinceId);
    if (prov) {
      return {
        id: `rec-selected-${prov.id}`,
        intent: "RECOMMEND_PROVINCE",
        title: `Eksplorasi ${prov.name}`,
        summary: `Rekomendasi berdasarkan pilihan petamu.`,
        bodyBlocks: [
          { type: "paragraph", text: `${prov.name} menyimpan banyak keunikan dari segi budaya, alam, dan kuliner.` }
        ],
        reasonCodes: ["MATCHES_SELECTED_PROVINCE"],
        sourceIds: [],
        primaryAction: {
          id: `act-atlas-${prov.id}`,
          type: "OPEN_PROVINCE_ATLAS",
          label: `Atlas ${prov.name}`,
          payload: { provinceId: prov.id }
        },
        secondaryActions: [],
        followUpPrompts: [
          { id: "prompt-kuliner", label: `Apa kuliner khas ${prov.name}?` }
        ],
        generatedBy: "local-recommendation",
        confidence: "high"
      };
    }
  }

  // If there's a next passport milestone
  if (context.nextMilestone) {
    return {
      id: `rec-milestone-${context.nextMilestone.provinceId}`,
      intent: "PASSPORT_PROGRESS",
      title: context.nextMilestone.title,
      summary: context.nextMilestone.description,
      bodyBlocks: [
        { type: "paragraph", text: context.nextMilestone.description }
      ],
      reasonCodes: [context.nextMilestone.reason],
      sourceIds: [],
      primaryAction: {
        id: `act-summary-${context.nextMilestone.provinceId}`,
        type: "OPEN_PROVINCE_SUMMARY",
        label: context.nextMilestone.ctaLabel,
        payload: { provinceId: context.nextMilestone.provinceId }
      },
      secondaryActions: [],
      followUpPrompts: [
        { id: "prompt-next", label: "Apa milestone Passport saya berikutnya?" }
      ],
      generatedBy: "local-recommendation",
      confidence: "high"
    };
  }

  // Default fallback (Next step demo preset)
  return raniDemoPresets.find(p => p.intent === "NEXT_STEP") as RaniResponse;
}
