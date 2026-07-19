import { RouteAdjustmentIntent, RouteAdjustmentDraft } from "./types";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { reduceRouteBudget, slowRoutePace, reduceRouteTransfers } from "./pureAdjustments";

export async function resolveRouteAdjustment(
  intent: RouteAdjustmentIntent,
  baseRoute: RouteRecommendation,
  baseItinerary: RouteItinerary,
  values: RoutePlannerFormValues,
  locale: "id" | "en"
): Promise<RouteAdjustmentDraft> {
  let result = null;

  switch (intent) {
    case "REDUCE_BUDGET":
      result = reduceRouteBudget(baseRoute, baseItinerary);
      break;
    case "SLOWER_PACE":
      result = slowRoutePace(baseRoute, baseItinerary);
      break;
    case "REDUCE_TRANSFERS":
      result = reduceRouteTransfers(baseRoute, baseItinerary);
      break;
  }

  if (!result) {
    throw new Error("Tujuan penyesuaian tidak dapat diaplikasikan pada rute saat ini.");
  }

  // Determine changes array for the diff view
  const changes = [];
  if (result.diffSummary.budget) {
    changes.push({
      type: "budget-level" as const,
      before: result.diffSummary.budget.before,
      after: result.diffSummary.budget.after,
      reason: "Penyesuaian budget",
    });
  }
  if (result.diffSummary.pace) {
    changes.push({
      type: "pace" as const,
      before: result.diffSummary.pace.before,
      after: result.diffSummary.pace.after,
      reason: "Penyesuaian waktu santai",
    });
  }

  const draft: RouteAdjustmentDraft = {
    id: `draft-${Date.now()}`,
    baseRouteId: baseRoute.id,
    baseRouteVersion: baseRoute.version || "1.0",
    baseItineraryVersion: baseItinerary.version || "1.0",
    intent,
    status: "valid",
    summary: `Saya telah menyesuaikan ${intent === "REDUCE_BUDGET" ? "budget" : intent === "SLOWER_PACE" ? "kecepatan perjalanan" : "jumlah transfer"} rute Anda.`,
    reasonCodes: [intent],
    changes,
    unchangedGuarantees: [
      `Durasi tetap ${baseRoute.durationDays} hari`,
      `Provinsi utama tidak berubah`
    ],
    limitations: [
      "Detail tempat aktual dapat sedikit berbeda berdasarkan ketersediaan lokal."
    ],
    validationErrors: [],
    proposedRoute: result.proposedRoute,
    proposedItinerary: result.proposedItinerary,
    generatedBy: "local-rules",
    createdAt: new Date().toISOString()
  };

  return draft;
}

