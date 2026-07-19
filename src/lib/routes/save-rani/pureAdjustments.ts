import { RouteRecommendation } from "@/types/route-planner";
import { RouteItinerary, ItinerarySegment } from "@/lib/routes/itinerary/routeItinerarySchema";

export interface AdjustmentResult {
  proposedRoute: RouteRecommendation;
  proposedItinerary: RouteItinerary;
  diffSummary: {
    budget?: { before: string; after: string };
    pace?: { before: string; after: string };
    transfers?: { before: number; after: number };
    removedActivities: string[];
    addedActivities: string[];
  };
}

function cloneDeep<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

const NEW_VERSION = "1.0.1-adjusted";

export function reduceRouteBudget(
  baseRoute: RouteRecommendation,
  baseItinerary: RouteItinerary
): AdjustmentResult | null {
  if (baseRoute.budgetLabel === "Hemat" || baseRoute.budgetLabel === "Budget") {
    return null;
  }

  const newRoute = cloneDeep(baseRoute);
  const newItinerary = cloneDeep(baseItinerary);

  newRoute.version = NEW_VERSION;
  newItinerary.version = NEW_VERSION;
  newItinerary.routeVersion = NEW_VERSION;
  
  newRoute.budgetLabel = "Hemat (Adjusted)";
  
  const removed: string[] = [];
  const added: string[] = [];

  newItinerary.days.forEach(day => {
    day.segments = day.segments.map(act => {
      if (act.type === "activity" && !(act as any).isFree) {
        removed.push(act.title);
        added.push(act.title + " (Alternatif Gratis)");
        return {
          ...act,
          title: act.title + " (Alternatif Gratis)",
          isFree: true,
          summary: "Alternatif aktivitas gratis yang direkomendasikan RANI."
        } as ItinerarySegment;
      }
      return act;
    });
  });

  if (removed.length === 0) return null;

  return {
    proposedRoute: newRoute,
    proposedItinerary: newItinerary,
    diffSummary: {
      budget: { before: baseRoute.budgetLabel, after: newRoute.budgetLabel },
      removedActivities: removed,
      addedActivities: added,
    }
  };
}

export function slowRoutePace(
  baseRoute: RouteRecommendation,
  baseItinerary: RouteItinerary
): AdjustmentResult | null {
  if (baseRoute.paceLabel === "Santai" || baseRoute.paceLabel === "Relaxed") {
    return null;
  }

  const newRoute = cloneDeep(baseRoute);
  const newItinerary = cloneDeep(baseItinerary);

  newRoute.version = NEW_VERSION;
  newItinerary.version = NEW_VERSION;
  newItinerary.routeVersion = NEW_VERSION;
  
  newRoute.paceLabel = "Santai (Adjusted)";
  
  const removed: string[] = [];
  const added: string[] = [];

  newItinerary.days.forEach(day => {
    const segments = day.segments;
    const activities = segments.filter(s => s.type === "activity");
    if (activities.length > 2) {
      for (let i = segments.length - 1; i >= 0; i--) {
        const act = segments[i];
        if (act.type === "activity") {
          removed.push(act.title);
          added.push("Waktu Istirahat (Flex Window)");
          
          segments[i] = {
            id: `flex-${day.id}-${i}`,
            type: "flex",
            dayPart: act.dayPart,
            label: "Waktu Istirahat (Flex Window)",
            note: "Waktu bebas untuk bersantai atau mengeksplorasi sekitar tanpa jadwal ketat."
          };
          break;
        }
      }
    }
  });

  if (removed.length === 0) return null;

  return {
    proposedRoute: newRoute,
    proposedItinerary: newItinerary,
    diffSummary: {
      pace: { before: baseRoute.paceLabel, after: newRoute.paceLabel },
      removedActivities: removed,
      addedActivities: added,
    }
  };
}

export function reduceRouteTransfers(
  baseRoute: RouteRecommendation,
  baseItinerary: RouteItinerary
): AdjustmentResult | null {
  const newRoute = cloneDeep(baseRoute);
  const newItinerary = cloneDeep(baseItinerary);

  newRoute.version = NEW_VERSION;
  newItinerary.version = NEW_VERSION;
  newItinerary.routeVersion = NEW_VERSION;
  
  const removed: string[] = [];
  const added: string[] = [];
  let transfersBefore = 0;
  let transfersAfter = 0;

  baseItinerary.days.forEach(day => {
    day.segments.forEach(act => {
      if (act.type === "transfer") transfersBefore++;
    });
  });

  newItinerary.days.forEach(day => {
    const segments = day.segments;
    for (let i = segments.length - 1; i >= 0; i--) {
      const act = segments[i];
      if (act.type === "transfer" && removed.length === 0) {
        removed.push(act.note || "Perjalanan Antar Kota");
        added.push("Eksplorasi Lokal Ekstra");
        
        segments[i] = {
          id: `local-${day.id}-${i}`,
          type: "activity",
          dayPart: act.dayPart,
          activityId: `explore-local-${i}`,
          title: "Eksplorasi Lokal Ekstra",
          summary: "Menghindari perpindahan jauh dengan mengeksplorasi destinasi terdekat.",
          durationCategory: "flexible",
          timeConfidence: "estimated",
          isPrimary: true
        };
      } else if (act.type === "transfer") {
        transfersAfter++;
      }
    }
  });

  if (removed.length === 0) return null;

  return {
    proposedRoute: newRoute,
    proposedItinerary: newItinerary,
    diffSummary: {
      transfers: { before: transfersBefore, after: transfersAfter },
      removedActivities: removed,
      addedActivities: added,
    }
  };
}

