import { PassportSavedRoute } from "@/lib/types";
import { getRouteProvinceIds, getRouteRegionIds } from "@/lib/routes/routeResultHelpers";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { PassportData } from "@/lib/types";

export function buildRouteSaveSnapshot(
  result: RouteRecommendation,
  values: RoutePlannerFormValues,
  passportData: PassportData,
  source: string,
  locale: "id" | "en"
): PassportSavedRoute {
  // Extract provinces and regions
  const provinceIds = getRouteProvinceIds(result);
  const regionIds = getRouteRegionIds(result);

  return {
    routeId: result.id,
    routeVersion: result.version,
    itineraryVersion: "1.0",
    titleSnapshot: result.title,
    provinceIds,
    regionIds,
    durationDays: result.durationDays,
    status: "planned",
    source,
    locale,
    savedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
