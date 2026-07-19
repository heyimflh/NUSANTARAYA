import { RouteItinerary, ItinerarySegment } from "@/lib/routes/itinerary/routeItinerarySchema";
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

/**
 * Validates a RouteItinerary against a RouteRecommendation.
 * Can be used for both preset itineraries and RANI-adjusted itineraries.
 */
export function validateItineraryAgainstRecommendation(
  itinerary: RouteItinerary,
  result: RouteRecommendation
): string[] {
  const errors: string[] = [];

  if (itinerary.routeId !== result.id) {
    errors.push(`Route ID mismatch: expected ${result.id}, got ${itinerary.routeId}`);
  }
  if (itinerary.routeVersion !== result.version) {
    errors.push(`Route version mismatch: expected ${result.version}, got ${itinerary.routeVersion}`);
  }
  if (itinerary.durationDays !== result.durationDays) {
    errors.push(`Duration mismatch: expected ${result.durationDays}, got ${itinerary.durationDays}`);
  }
  if (itinerary.days.length !== result.durationDays) {
    errors.push(`Days count mismatch: expected ${result.durationDays}, got ${itinerary.days.length}`);
  }

  const dayIds = new Set<string>();
  const segmentIds = new Set<string>();
  const stopIds = new Set<string>();

  // Collect all known stop IDs from recommendation
  const recStopIds = new Set(result.stops.map(s => s.id));

  // Also collect stop IDs from itinerary days (for stops referenced within)
  for (const day of itinerary.days) {
    if (day.stopId) {
      stopIds.add(day.stopId);
    }
  }

  for (let i = 0; i < itinerary.days.length; i++) {
    const day = itinerary.days[i];
    
    // Day number continuity
    if (day.dayNumber !== i + 1) {
      errors.push(`Day number tidak kontinu pada index ${i}: ${day.dayNumber}`);
    }
    
    // Unique day ID
    if (dayIds.has(day.id)) {
      errors.push(`Day ID duplikat: ${day.id}`);
    }
    dayIds.add(day.id);

    // Province validation
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

    // Segment validation
    for (const segment of day.segments) {
      // Unique segment ID
      if (segmentIds.has(segment.id)) {
        errors.push(`Segment ID duplikat: ${segment.id}`);
      }
      segmentIds.add(segment.id);

      // Transfer reference validation
      if (segment.type === "transfer") {
        const transferSeg = segment as Extract<ItinerarySegment, { type: "transfer" }>;
        
        if (!transferSeg.fromStopId) {
          errors.push(`Transfer segment ${segment.id}: fromStopId kosong`);
        } else if (!stopIds.has(transferSeg.fromStopId) && !recStopIds.has(transferSeg.fromStopId)) {
          errors.push(`Transfer segment ${segment.id}: fromStopId "${transferSeg.fromStopId}" tidak ditemukan pada stop mana pun`);
        }

        if (!transferSeg.toStopId) {
          errors.push(`Transfer segment ${segment.id}: toStopId kosong`);
        } else if (!stopIds.has(transferSeg.toStopId) && !recStopIds.has(transferSeg.toStopId)) {
          errors.push(`Transfer segment ${segment.id}: toStopId "${transferSeg.toStopId}" tidak ditemukan pada stop mana pun`);
        }

        if (transferSeg.fromStopId && transferSeg.toStopId && transferSeg.fromStopId === transferSeg.toStopId) {
          errors.push(`Transfer segment ${segment.id}: fromStopId === toStopId ("${transferSeg.fromStopId}") — transfer antar stop yang sama tanpa alasan`);
        }
      }
    }
  }

  return errors;
}

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

  const errors = validateItineraryAgainstRecommendation(itinerary, result);

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
