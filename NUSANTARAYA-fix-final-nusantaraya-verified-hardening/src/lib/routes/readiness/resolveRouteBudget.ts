import type { RouteBudgetEstimate, RouteBudgetCategory } from "./routeReadinessSchema";
import type { RouteRecommendation } from "@/types/route-planner";

export function resolveRouteBudget(result: RouteRecommendation): RouteBudgetEstimate {
  const duration = result.durationDays;

  const categories: RouteBudgetCategory[] = [
    {
      id: "cat-acc",
      type: "accommodation",
      label: "Akomodasi (Penginapan)",
      amount: { currency: null, min: null, max: null },
      confidence: "unavailable",
    },
    {
      id: "cat-meals",
      type: "meals",
      label: "Konsumsi (Makan & Minum)",
      amount: { currency: null, min: null, max: null },
      confidence: "unavailable",
    },
    {
      id: "cat-act",
      type: "activities",
      label: "Aktivitas & Tiket Masuk",
      amount: { currency: null, min: null, max: null },
      confidence: "unavailable",
    },
    {
      id: "cat-transport-local",
      type: "local-transport",
      label: "Transportasi Lokal",
      amount: { currency: null, min: null, max: null },
      confidence: "unavailable",
    },
  ];

  if (result.provinceIds.length > 1) {
    categories.push({
      id: "cat-transport-inter",
      type: "intercity-transport",
      label: "Transportasi Antarkota",
      amount: { currency: null, min: null, max: null },
      confidence: "unavailable",
    });
  }

  return {
    basis: "per-person",
    partySize: 1, 
    durationDays: duration,
    total: {
      currency: null,
      min: null,
      max: null,
    },
    confidence: "unavailable",
    categories,
    assumptionIds: [],
    exclusionIds: ["exc-flights", "exc-souvenirs"],
    updatedAt: new Date().toISOString(),
  };
}

