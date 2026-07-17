import { PassportSavedRoute } from "@/lib/types";
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
  const provinceIds = Array.from(new Set(result.stops.map(stop => stop.provinceId)));
  const regionIds = Array.from(new Set(result.stops.map(stop => stop.regionId)));

  const titleSnapshot = result.title[locale] || result.title["id"];
  
  return {
    routeId: result.id,
    routeVersion: result.version || "1.0",
    itineraryVersion: "1.0",
    titleSnapshot,
    provinceIds,
    regionIds,
    durationDays: result.durationDays,
    status: "planned",
    source,
    locale,
    travelerMode: values.travelerMode,
    savedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
