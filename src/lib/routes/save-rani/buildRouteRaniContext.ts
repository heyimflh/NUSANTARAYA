import { RouteRaniContext } from "./types";
import { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { PassportData } from "@/lib/types";
import { getRouteProvinceIds } from "@/lib/routes/routeResultHelpers";

export function buildRouteRaniContext(
  result: RouteRecommendation,
  values: RoutePlannerFormValues,
  passportData: PassportData,
  locale: "id" | "en"
): RouteRaniContext {
  const provinceIds = getRouteProvinceIds(result);
  const routeId = result.id;
  const isSaved = passportData.savedRoutes.includes(routeId);
  const passportSaveStatus = isSaved ? "saved" : "unsaved";

  return {
    entrySource: "route-save-section",
    routeId: result.id,
    routeVersion: result.version || "1.0",
    itineraryVersion: "1.0",
    durationDays: result.durationDays,
    provinceIds,
    stopIds: result.stops.map(s => s.id),
    interests: values.interests || [],
    budgetLevel: values.budgetLevel,
    travelPace: values.travelPace,
    passportSaveStatus,
    locale,
  };
}
