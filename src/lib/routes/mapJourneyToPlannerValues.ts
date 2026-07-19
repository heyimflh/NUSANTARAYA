import { RecommendedJourney, JourneyLayer } from "@/data/journeys/types";
import { RoutePlannerFormValues, RouteDuration, isRouteDuration, RouteInterest, TravelPace } from "@/types/route-planner";
import { RoutePlannerRegionId, ROUTE_PLANNER_REGION_IDS } from "@/types/route-planner";

export type JourneyPlannerMappingStatus = "complete" | "partial" | "context-only";

export interface JourneyPlannerMapping {
  values: Partial<RoutePlannerFormValues>;
  status: JourneyPlannerMappingStatus;
  missingFields: Array<"region" | "duration" | "interests" | "pace">;
}

function mapLayerToInterest(layer: JourneyLayer): RouteInterest | null {
  switch (layer) {
    case "budaya": return "budaya";
    case "alam": return "alam";
    case "kuliner": return "kuliner";
    case "sejarah": return "sejarah";
    case "mixed": return "hidden-gems";
    default: return null;
  }
}

function mapIntensityToPace(intensity?: "ringan" | "seimbang" | "mendalam"): TravelPace | undefined {
  switch (intensity) {
    case "ringan": return "santai";
    case "seimbang": return "seimbang";
    case "mendalam": return "eksploratif";
    default: return undefined;
  }
}

// Simple mapping for region if not explicit. We rely on the first stop's province ID if possible, 
// but since we need canonical regions, we will map common province prefixes to region if explicit region is missing.
// However, the rule says: "gunakan region explicit jika journey memilikinya; jika tidak, turunkan dari Province ID canonical; jika province tersebar ... jangan menebak".
// We will just do a strict mapping based on prefix of the first stop if they all share it, otherwise missing.
function deriveRegionFromStops(stopProvinceIds: string[]): RoutePlannerRegionId | undefined {
  if (!stopProvinceIds.length) return undefined;
  
  const regions = stopProvinceIds.map(pid => {
    if (pid.startsWith("jawa-") || pid === "di-yogyakarta" || pid === "dki-jakarta" || pid === "banten") return "jawa";
    if (pid.startsWith("sumatera-") || pid.startsWith("sumatera_") || pid.startsWith("sumbar") || pid.startsWith("sumsel") || pid.startsWith("sumut") || pid === "aceh" || pid === "riau" || pid === "jambi" || pid === "bengkulu" || pid === "lampung") return "sumatera";
    if (pid.startsWith("kalimantan-")) return "kalimantan";
    if (pid.startsWith("sulawesi-") || pid === "gorontalo") return "sulawesi";
    if (pid === "bali" || pid.startsWith("nusa-tenggara-")) return "bali-nusa-tenggara";
    if (pid.startsWith("maluku")) return "maluku";
    if (pid.startsWith("papua")) return "papua";
    return undefined;
  });

  const first = regions[0];
  if (!first) return undefined;
  const allSame = regions.every(r => r === first);
  return allSame ? (first as RoutePlannerRegionId) : undefined;
}

export function mapJourneyToPlannerValues(journey: RecommendedJourney): JourneyPlannerMapping {
  const values: Partial<RoutePlannerFormValues> = {};
  const missingFields: Array<"region" | "duration" | "interests" | "pace"> = [];

  // 1. Duration
  if (journey.durationDays && journey.durationDays.length > 0) {
    // Pick the first one if it matches allowed durations
    const dur = journey.durationDays[0];
    if (isRouteDuration(dur)) {
      values.durationDays = dur;
    } else {
      missingFields.push("duration");
    }
  } else {
    missingFields.push("duration");
  }

  // 2. Region
  // RecommendedJourney doesn't have explicit regionId in its type based on what we saw, but we can derive it.
  const provinceIds = journey.stops.map(s => s.provinceId).filter((id): id is string => !!id);
  const region = deriveRegionFromStops(provinceIds);
  if (region) {
    values.destinationRegionId = region;
  } else {
    missingFields.push("region");
  }

  // 3. Interests
  const interests = new Set<RouteInterest>();
  const mainInterest = mapLayerToInterest(journey.primaryLayer);
  if (mainInterest) interests.add(mainInterest);
  
  journey.secondaryLayers?.forEach(layer => {
    const i = mapLayerToInterest(layer);
    if (i) interests.add(i);
  });

  if (interests.size > 0) {
    values.interests = Array.from(interests);
  } else {
    missingFields.push("interests");
  }

  // 4. Pace
  const pace = mapIntensityToPace(journey.intensity);
  if (pace) {
    values.travelPace = pace;
  } else {
    missingFields.push("pace");
  }

  // Status
  let status: JourneyPlannerMappingStatus = "context-only";
  if (missingFields.length === 0) {
    status = "complete";
  } else if (values.durationDays || values.destinationRegionId || values.interests?.length || values.travelPace) {
    status = "partial";
  }

  return { values, status, missingFields };
}

export function buildJourneyRouteHref(journey: RecommendedJourney): string {
  const mapping = mapJourneyToPlannerValues(journey);
  const searchParams = new URLSearchParams();
  searchParams.set("source", "recommended-journey");
  searchParams.set("journeyId", journey.id);

  
  if (mapping.values.destinationRegionId) {
    searchParams.set("region", mapping.values.destinationRegionId);
  }
  if (mapping.values.durationDays) {
    searchParams.set("duration", mapping.values.durationDays.toString());
  }
  if (mapping.values.interests && mapping.values.interests.length > 0) {
    searchParams.set("interests", mapping.values.interests.join(","));
  }
  if (mapping.values.travelPace) {
    searchParams.set("pace", mapping.values.travelPace);
  }
  // budgetLevel is not mapped in journey
  
  return "/routes?" + searchParams.toString();
}



