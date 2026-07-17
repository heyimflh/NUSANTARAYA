import type { RouteReadinessDossier } from "./routeReadinessSchema";
import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";

import { resolveRouteBudget } from "./resolveRouteBudget";
import { resolveRouteCulinary } from "./resolveRouteCulinary";
import { resolveRouteEtiquette } from "./resolveRouteEtiquette";
import { buildRouteChecklist } from "./buildRouteChecklist";

export function resolveRouteReadiness(
  result: RouteRecommendation,
  itinerary: RouteItinerary | null,
  routeVersion: string,
  itineraryVersion: string,
  locale: "id" | "en"
): RouteReadinessDossier {
  const budget = resolveRouteBudget(result);
  const culinaryItems = resolveRouteCulinary(result, itinerary);
  const etiquetteItems = resolveRouteEtiquette(result);
  const checklistTemplate = buildRouteChecklist(result, routeVersion, itineraryVersion);

  return {
    id: `readiness-${result.id}`,
    routeId: result.id,
    routeVersion,
    itineraryVersion,
    version: "1.0",
    locale,
    source: result.matchType === "fallback" ? "fallback" : "canonical",
    status: itinerary ? "ready" : "partial",
    budget,
    culinaryItems,
    etiquetteItems,
    checklistTemplate,
    updatedAt: new Date().toISOString(),
  };
}
