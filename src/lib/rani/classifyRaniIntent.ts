import { RaniIntent } from "@/types/rani";

export function classifyRaniIntent(query: string, activeMode: string): { intent: RaniIntent; confidence: "high" | "medium" | "low" } {
  const normalized = query.toLowerCase().trim();

  if (!normalized) {
    return { intent: "UNKNOWN", confidence: "low" };
  }

  // Exact demo matches (High confidence)
  if (normalized.includes("ke mana saya harus lanjut") || normalized.includes("langkah berikutnya")) {
    return { intent: "NEXT_STEP", confidence: "high" };
  }
  if (normalized.includes("milestone passport berikutnya") || normalized.includes("passport saya")) {
    return { intent: "PASSPORT_PROGRESS", confidence: "high" };
  }
  if (normalized.includes("jalur rempah maluku") || normalized.includes("jelaskan jalur rempah")) {
    return { intent: "EXPLAIN_CULTURE", confidence: "high" };
  }
  if (normalized.includes("etika budaya yang perlu diketahui") || normalized.includes("etika mengunjungi")) {
    return { intent: "CULTURAL_ETIQUETTE", confidence: "high" };
  }
  if (normalized.includes("rencana perjalanan") || normalized.includes("itinerary")) {
    return { intent: "CREATE_ITINERARY", confidence: "high" };
  }
  if (normalized.includes("kuliner khas") || normalized.includes("makanan khas")) {
    return { intent: "RECOMMEND_CULINARY", confidence: "high" };
  }
  if (normalized.includes("bandingkan") || normalized.includes("perbandingan")) {
    return { intent: "COMPARE_REGIONS", confidence: "high" };
  }
  if (normalized.includes("sumber informasi") || normalized.includes("referensi")) {
    return { intent: "FIND_SOURCE", confidence: "high" };
  }

  // Keyword-based matches (Medium confidence)
  if (normalized.includes("budaya") || normalized.includes("sejarah") || normalized.includes("tari") || normalized.includes("adat")) {
    return { intent: "EXPLAIN_CULTURE", confidence: "medium" };
  }
  if (normalized.includes("rekomendasi") || normalized.includes("provinsi")) {
    return { intent: "RECOMMEND_PROVINCE", confidence: "medium" };
  }
  
  // By Mode heuristics
  if (activeMode === "tourist") {
    if (normalized.includes("tiket") || normalized.includes("hotel") || normalized.includes("cuaca")) {
      return { intent: "OUT_OF_SCOPE", confidence: "high" };
    }
    return { intent: "TRAVEL_TIPS", confidence: "medium" };
  }

  return { intent: "UNKNOWN", confidence: "low" };
}
