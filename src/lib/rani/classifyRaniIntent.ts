import { RaniIntent } from "@/types/rani";
import { normalizeRaniQuery } from "./normalizeRaniQuery";
import { intentSynonyms, outOfScopeKeywords } from "@/data/rani/synonyms";

export function classifyRaniIntent(query: string, activeMode: string): { intent: RaniIntent; confidence: "high" | "medium" | "low" } {
  const { clean } = normalizeRaniQuery(query);
  
  if (!clean) return { intent: "UNKNOWN", confidence: "low" };

  // 1. Out of Scope Check
  const isOutOfScope = outOfScopeKeywords.some(kw => {
    const kwClean = normalizeRaniQuery(kw).clean;
    return clean === kwClean || clean.includes(` ${kwClean} `) || clean.startsWith(`${kwClean} `) || clean.endsWith(` ${kwClean}`);
  });
  
  if (isOutOfScope) return { intent: "OUT_OF_SCOPE", confidence: "high" };

  // 2. Score intents based on synonyms
  let bestIntent: RaniIntent = "UNKNOWN";
  let highestScore = 0;

  for (const [intentKey, synonyms] of Object.entries(intentSynonyms)) {
    let currentScore = 0;

    for (const syn of synonyms) {
      const synClean = normalizeRaniQuery(syn).clean;
      if (!synClean) continue;
      
      // Exact phrase match gives high confidence
      if (clean === synClean) {
        currentScore += 100;
      }
      // Phrase included in query
      else if (clean.includes(synClean)) {
        currentScore += 50;
      }
      // Token overlap
      else {
        const synTokens = synClean.split(" ");
        const queryTokens = clean.split(" ");
        let matchCount = 0;
        
        for (const t of synTokens) {
          if (queryTokens.includes(t)) matchCount++;
        }
        
        if (matchCount === synTokens.length) {
          currentScore += 30; 
        } else if (matchCount > 0) {
          currentScore += (10 * matchCount);
        }
      }
    }

    if (currentScore > highestScore) {
      highestScore = currentScore;
      bestIntent = intentKey as RaniIntent;
    }
  }

  // 3. Fallbacks
  if (bestIntent === "UNKNOWN") {
    if (activeMode === "tourist") {
      if (clean.includes("tiket") || clean.includes("hotel") || clean.includes("cuaca")) {
        return { intent: "OUT_OF_SCOPE", confidence: "high" };
      }
    }
    
    if (clean.includes("apa ") || clean.includes("bagaimana ")) {
       return { intent: "EXPLAIN_PROVINCE", confidence: "low" };
    }
  }

  const confidence = highestScore >= 100 ? "high" : highestScore >= 30 ? "medium" : "low";

  return { intent: bestIntent, confidence };
}
