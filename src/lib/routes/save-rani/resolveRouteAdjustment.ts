import { RouteAdjustmentIntent, RouteAdjustmentDraft } from "./types";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { presetItineraries } from "@/data/routes/presetItineraries";

const localFallbacks: Record<string, { summary: string, limitations: string[] }> = {
  REDUCE_BUDGET: {
    summary: "Pertahankan rute, kurangi aktivitas berbiaya, dan gunakan lebih banyak waktu fleksibel.",
    limitations: ["Nominal aktual tetap perlu diverifikasi."],
  },
  REDUCE_TRANSFERS: {
    summary: "Pertahankan lebih sedikit cluster dan tambah waktu pada stop utama.",
    limitations: ["Cakupan destinasi dapat berkurang."],
  },
  SLOWER_PACE: {
    summary: "Kurangi aktivitas utama dan tambahkan rest atau flex window.",
    limitations: ["Tidak semua highlight dapat dipertahankan."],
  },
};

export async function resolveRouteAdjustment(
  intent: RouteAdjustmentIntent,
  baseRoute: RouteRecommendation,
  baseItinerary: RouteItinerary,
  values: RoutePlannerFormValues,
  locale: "id" | "en"
): Promise<RouteAdjustmentDraft> {
  // In a full implementation, we'd search presetItineraries based on ALTERNATIVE_WEIGHTS and ALTERNATIVE_PENALTIES.
  // For the MVP, we generate a static fallback based on intent but formatted cleanly.
  
  const fallback = localFallbacks[intent] || {
    summary: "Saya dapat menyusun alternatif rute untuk menyesuaikan preferensi Anda.",
    limitations: ["Detail spesifik mungkin perlu dikonfirmasi."],
  };

  const draft: RouteAdjustmentDraft = {
    id: `draft-${Date.now()}`,
    baseRouteId: baseRoute.id,
    baseRouteVersion: baseRoute.version || "1.0",
    baseItineraryVersion: "1.0",
    intent,
    status: "valid", // Marking as valid to allow UI preview
    summary: fallback.summary,
    reasonCodes: [intent],
    changes: [
      {
        type: "pace",
        before: values.travelPace,
        after: intent === "SLOWER_PACE" ? "relaxed" : values.travelPace,
        reason: "Penyesuaian berdasarkan permintaan RANI",
      }
    ],
    unchangedGuarantees: [
      `Durasi ${baseRoute.durationDays} hari`,
      `Provinsi ${baseRoute.stops.map(s => s.provinceId).join(", ")}`
    ],
    limitations: fallback.limitations,
    validationErrors: [],
    // For MVP, we pass back the original as proposed so it's a "no-op" visually on map, 
    // but the diff panel will show the logical changes.
    proposedRoute: baseRoute,
    proposedItinerary: baseItinerary,
    generatedBy: "local-rules",
    createdAt: new Date().toISOString()
  };

  return draft;
}
