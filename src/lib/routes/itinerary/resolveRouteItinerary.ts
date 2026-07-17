import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import type { RouteRecommendation } from "@/types/route-planner";
import { ITINERARIES_BY_ROUTE_ID } from "@/data/routes/itineraries";
import { isProvinceId } from "@/data/provinces/provinceIds";

export type ItineraryResolution =
  | {
      status: "ready";
      itinerary: RouteItinerary;
    }
  | {
      status: "partial";
      itinerary: null;
      reason: string;
    }
  | {
      status: "invalid";
      itinerary: null;
      errors: string[];
    };

export function resolveRouteItinerary(
  result: RouteRecommendation | null
): ItineraryResolution {
  if (!result) {
    return {
      status: "partial",
      itinerary: null,
      reason: "Belum ada rute yang dipilih.",
    };
  }

  const id = result.id as keyof typeof ITINERARIES_BY_ROUTE_ID;
  const itinerary = ITINERARIES_BY_ROUTE_ID[id];

  if (!itinerary) {
    return {
      status: "partial",
      itinerary: null,
      reason: "Itinerary sedang dilengkapi",
    };
  }

  const errors: string[] = [];

  if (itinerary.routeId !== result.id) {
    errors.push(`Route ID mismatch: expected ${result.id}, got ${itinerary.routeId}`);
  }
  if (itinerary.version !== result.version) {
    errors.push(`Version mismatch: expected ${result.version}, got ${itinerary.version}`);
  }
  if (itinerary.durationDays !== result.durationDays) {
    errors.push(`Duration mismatch: expected ${result.durationDays}, got ${itinerary.durationDays}`);
  }
  if (itinerary.days.length !== result.durationDays) {
    errors.push(`Days count mismatch: expected ${result.durationDays}, got ${itinerary.days.length}`);
  }

  const dayIds = new Set<string>();
  const stopIds = new Set<string>();
  
  for (let i = 0; i < itinerary.days.length; i++) {
    const day = itinerary.days[i];
    
    if (day.dayNumber !== i + 1) {
      errors.push(`Day number tidak kontinu pada index ${i}: ${day.dayNumber}`);
    }
    
    if (dayIds.has(day.id)) {
      errors.push(`Day ID duplikat: ${day.id}`);
    }
    dayIds.add(day.id);
    
    if (day.stopId) {
      stopIds.add(day.stopId);
    }

    if (!Array.isArray(day.provinceIds) || day.provinceIds.length === 0) {
      errors.push(`Day ${day.dayNumber} tidak memiliki provinceId`);
    } else {
      for (const pid of day.provinceIds) {
        if (!isProvinceId(pid)) {
          errors.push(`Province ID tidak valid atau non-canonical: ${pid}`);
        }
        if (!result.provinceIds.includes(pid)) {
          errors.push(`Province ID ${pid} pada day ${day.dayNumber} tidak termasuk dalam rekomendasi`);
        }
      }
    }
  }

  if (errors.length > 0) {
    return {
      status: "invalid",
      itinerary: null,
      errors,
    };
  }

  return {
    status: "ready",
    itinerary,
  };
}
