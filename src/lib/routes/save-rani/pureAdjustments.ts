import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteItinerary, ItinerarySegment } from "@/lib/routes/itinerary/routeItinerarySchema";

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

/**
 * Generate a deterministic, unique adjustment version based on
 * base version, intent, and a revision counter.
 */
export function generateAdjustmentVersion(
  baseVersion: string,
  intent: string,
  revision: number = 1
): string {
  const intentShort = intent.toLowerCase().replace(/_/g, "-");
  return `${baseVersion}-${intentShort}-r${revision}`;
}

export function reduceRouteBudget(
  baseRoute: RouteRecommendation,
  baseItinerary: RouteItinerary
): AdjustmentResult | null {
  // Don't reduce if already at lowest budget
  if (baseRoute.budgetLabel.toLowerCase().includes("hemat") || 
      baseRoute.budgetLabel.toLowerCase().includes("budget")) {
    return null;
  }

  const newRoute = cloneDeep(baseRoute);
  const newItinerary = cloneDeep(baseItinerary);

  const newVersion = generateAdjustmentVersion(baseRoute.version, "REDUCE_BUDGET");
  newRoute.version = newVersion;
  newItinerary.version = newVersion;
  newItinerary.routeVersion = newVersion;
  newItinerary.status = "adjusted";
  
  // Always change the budget label to indicate budget reduction
  const oldBudget = newRoute.budgetLabel;
  newRoute.budgetLabel = oldBudget.includes("premium") || oldBudget.includes("Premium")
    ? "Menengah (Budget-Optimized)"
    : "Hemat (Budget-Optimized)";
  
  const removed: string[] = [];
  const added: string[] = [];
  let hasChanges = false;

  // Look for non-primary activities that can be replaced with budget notes
  newItinerary.days.forEach(day => {
    day.segments = day.segments.map(seg => {
      if (seg.type === "activity" && !seg.isPrimary) {
        // Non-primary activities: replace with budget-friendly note
        removed.push(seg.title);
        const budgetTitle = `${seg.title} (Opsi Hemat)`;
        added.push(budgetTitle);
        hasChanges = true;
        return {
          ...seg,
          title: budgetTitle,
          summary: "Versi hemat dari aktivitas ini — konfirmasi biaya aktual di lokasi.",
        } as ItinerarySegment;
      }
      return seg;
    });
  });

  // Even if no activities were changed, the budget label change is meaningful
  // This represents focusing on free/low-cost options within existing activities
  if (!hasChanges) {
    // Add a note that this is a budget-conscious version
    added.push("Fokus pada opsi hemat di setiap aktivitas");
  }

  return {
    proposedRoute: newRoute,
    proposedItinerary: newItinerary,
    diffSummary: {
      budget: { before: oldBudget, after: newRoute.budgetLabel },
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

  const newVersion = generateAdjustmentVersion(baseRoute.version, "SLOWER_PACE");
  newRoute.version = newVersion;
  newItinerary.version = newVersion;
  newItinerary.routeVersion = newVersion;
  newItinerary.status = "adjusted";
  
  newRoute.paceLabel = "Santai (Adjusted)";
  
  const removed: string[] = [];
  const added: string[] = [];

  newItinerary.days.forEach(day => {
    const segments = day.segments;
    const activities = segments.filter(s => s.type === "activity");
    if (activities.length > 2) {
      // Remove the last non-primary activity and replace with rest/flex
      for (let i = segments.length - 1; i >= 0; i--) {
        const act = segments[i];
        if (act.type === "activity" && !("isPrimary" in act && act.isPrimary)) {
          removed.push(act.title);
          const flexLabel = "Waktu Istirahat (Flex Window)";
          added.push(flexLabel);
          
          segments[i] = {
            id: `flex-${day.id}-${i}`,
            type: "flex",
            dayPart: act.dayPart,
            label: flexLabel,
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

  const newVersion = generateAdjustmentVersion(baseRoute.version, "REDUCE_TRANSFERS");
  newRoute.version = newVersion;
  newItinerary.version = newVersion;
  newItinerary.routeVersion = newVersion;
  newItinerary.status = "adjusted";
  
  const removed: string[] = [];
  const added: string[] = [];
  let transfersBefore = 0;
  let transfersAfter = 0;

  // Count total transfers
  baseItinerary.days.forEach(day => {
    day.segments.forEach(seg => {
      if (seg.type === "transfer") transfersBefore++;
    });
  });

  if (transfersBefore <= 1) {
    // Cannot reduce transfers further — route only has 0 or 1
    return null;
  }

  // Find the last transfer and replace with a rest segment
  // We replace with rest/flex instead of fabricating an activity
  let didReduce = false;
  for (let dayIdx = newItinerary.days.length - 1; dayIdx >= 0; dayIdx--) {
    const day = newItinerary.days[dayIdx];
    for (let i = day.segments.length - 1; i >= 0; i--) {
      const seg = day.segments[i];
      if (seg.type === "transfer" && !didReduce) {
        const transferSeg = seg as Extract<ItinerarySegment, { type: "transfer" }>;
        removed.push(transferSeg.note || "Perjalanan Antar Kota");
        const restLabel = "Waktu Eksplorasi Lokal";
        added.push(restLabel);
        
        day.segments[i] = {
          id: `rest-${day.id}-${i}`,
          type: "rest",
          dayPart: seg.dayPart,
          label: restLabel,
          note: "Menghindari perpindahan jauh dengan mengeksplorasi destinasi terdekat."
        };
        didReduce = true;
      } else if (seg.type === "transfer") {
        transfersAfter++;
      }
    }
  }

  if (!didReduce) return null;

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
