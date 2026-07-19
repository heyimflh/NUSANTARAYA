import { RouteAdjustmentIntent, RouteAdjustmentDraft } from "./types";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { reduceRouteBudget, slowRoutePace, reduceRouteTransfers } from "./pureAdjustments";
import { validateItineraryAgainstRecommendation } from "@/lib/routes/itinerary/resolveRouteItinerary";

export type AdjustmentState =
  | "idle"
  | "resolving"
  | "preview"
  | "validating"
  | "invalid"
  | "applied";

/**
 * Checks whether a draft is stale relative to the current active route.
 */
export function isDraftStale(
  draft: RouteAdjustmentDraft,
  activeRouteId: string,
  activeRouteVersion: string,
  activeItineraryVersion: string
): boolean {
  return (
    draft.baseRouteId !== activeRouteId ||
    draft.baseRouteVersion !== activeRouteVersion ||
    draft.baseItineraryVersion !== activeItineraryVersion
  );
}

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
    // Return an invalid draft with clear messaging instead of throwing
    return {
      id: `draft-${Date.now()}`,
      baseRouteId: baseRoute.id,
      baseRouteVersion: baseRoute.version,
      baseItineraryVersion: baseItinerary.version,
      intent,
      status: "invalid",
      summary: "Penyesuaian ini tidak dapat diterapkan pada rute saat ini.",
      reasonCodes: [intent],
      changes: [],
      unchangedGuarantees: [],
      limitations: ["Rute ini sudah optimal untuk jenis penyesuaian yang diminta."],
      validationErrors: ["Tidak ada perubahan yang dapat dilakukan untuk intent ini."],
      proposedRoute: baseRoute,
      proposedItinerary: baseItinerary,
      generatedBy: "local-rules",
      createdAt: new Date().toISOString()
    };
  }

  // Run canonical validation on the proposed itinerary
  const validationErrors = validateItineraryAgainstRecommendation(
    result.proposedItinerary,
    result.proposedRoute
  );

  const isValid = validationErrors.length === 0;

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
  if (result.diffSummary.transfers) {
    changes.push({
      type: "transfer-changed" as const,
      before: `${result.diffSummary.transfers.before} transfer`,
      after: `${result.diffSummary.transfers.after} transfer`,
      reason: "Pengurangan perpindahan",
    });
  }

  const draft: RouteAdjustmentDraft = {
    id: `draft-${Date.now()}`,
    baseRouteId: baseRoute.id,
    baseRouteVersion: baseRoute.version,
    baseItineraryVersion: baseItinerary.version,
    intent,
    status: isValid ? "valid" : "invalid",
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
    validationErrors,
    proposedRoute: result.proposedRoute,
    proposedItinerary: result.proposedItinerary,
    generatedBy: "local-rules",
    createdAt: new Date().toISOString()
  };

  return draft;
}
