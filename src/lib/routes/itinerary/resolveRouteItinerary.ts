import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import type { RouteRecommendation } from "@/types/route-planner";

export function resolveRouteItinerary(
  result: RouteRecommendation | null,
  fallbackItinerary: RouteItinerary
): RouteItinerary | null {
  if (!result) return null;
  // TODO: Implement actual dynamic resolving. For MVP/demo, always return fallback/preset
  // In reality, this would look up from a store or API based on result.id
  return fallbackItinerary;
}
