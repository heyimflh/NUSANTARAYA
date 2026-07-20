import { RaniKnowledgeRecord, RaniMapContext, RaniIntent } from "@/types/rani";
import { raniKnowledgeBase } from "@/data/rani/knowledge";
import { normalizeRaniQuery } from "./normalizeRaniQuery";

/**
 * Retrieves relevant knowledge records based on the user's explicit query and current context.
 */
export function retrieveRaniKnowledge(
  query: string,
  intent: RaniIntent,
  context: RaniMapContext
): RaniKnowledgeRecord[] {
  const { clean } = normalizeRaniQuery(query);
  
  return raniKnowledgeBase.filter(record => {
    // If the record is a demo preset but we have a real intent and context, we might skip it unless specifically matched.
    
    // 1. Keyword match
    let keywordMatch = false;
    if (clean) {
      keywordMatch = record.keywords.some(kw => {
        const kwClean = normalizeRaniQuery(kw).clean;
        return clean.includes(kwClean) || kwClean.includes(clean);
      });
    }

    // 2. Province match
    const provinceMatch = context.selectedProvinceId 
      ? record.provinceIds.includes(context.selectedProvinceId)
      : false;

    // 3. Region match
    const activeRegion = context.activeRegionId || context.highlightedRegionId;
    const regionMatch = activeRegion
      ? record.regionIds.includes(activeRegion)
      : false;

    // If there is an explicit query, keyword match is strong.
    // Otherwise, rely on context (province or region).
    if (clean && intent !== "UNKNOWN") {
       return keywordMatch || provinceMatch; 
    }

    // Proactive retrieval (no query)
    return provinceMatch || regionMatch;
  });
}
