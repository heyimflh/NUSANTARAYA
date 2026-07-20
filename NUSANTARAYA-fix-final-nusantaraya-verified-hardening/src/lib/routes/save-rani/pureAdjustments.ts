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
  const transfers = baseItinerary.days.flatMap((day) =>
    day.segments
      .filter((segment): segment is Extract<ItinerarySegment, { type: "transfer" }> => segment.type === "transfer")
      .map((segment) => ({ dayNumber: day.dayNumber, segment }))
  );
  if (transfers.length <= 1) return null;

  const target = transfers[transfers.length - 1].segment;
  const originDay = baseItinerary.days.find((day) => day.stopId === target.fromStopId);
  const destinationDays = baseItinerary.days.filter((day) => day.stopId === target.toStopId);
  if (!originDay || destinationDays.length === 0) return null;

  const proposedRoute = cloneDeep(baseRoute);
  const proposedItinerary = cloneDeep(baseItinerary);
  const newVersion = generateAdjustmentVersion(baseRoute.version, "REDUCE_TRANSFERS");
  proposedRoute.version = newVersion;
  proposedItinerary.version = newVersion;
  proposedItinerary.routeVersion = newVersion;
  proposedItinerary.status = "adjusted";

  const removedActivities: string[] = [];
  const addedActivities: string[] = [];
  for (const day of proposedItinerary.days) {
    day.segments = day.segments.filter((segment) => {
      if (segment.type === "transfer" && segment.id === target.id) return false;
      return true;
    });
    if (day.stopId !== target.toStopId) continue;
    for (const segment of day.segments) {
      if (segment.type === "activity") removedActivities.push(segment.title);
    }
    day.stopId = target.fromStopId;
    day.provinceIds = [...originDay.provinceIds];
    day.cityOrCluster = originDay.cityOrCluster;
    day.title = `Eksplorasi lebih dalam di ${originDay.cityOrCluster}`;
    day.summary = "Hari dipusatkan pada klaster utama untuk mengurangi perpindahan dan memberi waktu eksplorasi yang lebih tenang.";
    day.type = "slow-day";
    day.density = "light";
    day.culinaryMoments = undefined;
    day.segments = [{
      id: `local-flex-${day.id}`,
      type: "flex",
      dayPart: "morning",
      label: "Eksplorasi lokal fleksibel",
      note: "Pilih aktivitas terdekat yang sudah tersedia di klaster utama dan verifikasi jam operasional sebelum berangkat.",
    }];
    addedActivities.push(`Eksplorasi lokal fleksibel — ${originDay.cityOrCluster}`);
  }

  proposedRoute.stops = proposedRoute.stops.filter((stop) => stop.id !== target.toStopId);
  const remainingProvinceIds = new Set(proposedRoute.stops.map((stop) => stop.provinceId));
  proposedRoute.provinceIds = proposedRoute.provinceIds.filter((id) => remainingProvinceIds.has(id));
  proposedRoute.transportSummary = proposedRoute.transportSummary.slice(0, Math.max(0, proposedRoute.transportSummary.length - 1));

  return {
    proposedRoute,
    proposedItinerary,
    diffSummary: {
      transfers: { before: transfers.length, after: transfers.length - 1 },
      removedActivities,
      addedActivities,
    },
  };
}

