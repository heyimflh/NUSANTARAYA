import type { RouteBudgetEstimate, RouteBudgetCategory } from "./routeReadinessSchema";
import type { RouteRecommendation, BudgetLevel } from "@/types/route-planner";

export function resolveRouteBudget(result: RouteRecommendation): RouteBudgetEstimate {
  const duration = result.durationDays;
  const budgetLevel: BudgetLevel = (result.originalValuesSnapshot?.budgetLevel as BudgetLevel) || "menengah";

  // Base daily cost multipliers (IDR per person)
  const costMap: Record<BudgetLevel, number> = {
    hemat: 350000,
    menengah: 750000,
    premium: 1500000,
    fleksibel: 750000,
  };

  const dailyBase = costMap[budgetLevel] || 750000;

  // Categories breakdown (approximations based on daily base)
  const categories: RouteBudgetCategory[] = [
    {
      id: "cat-acc",
      type: "accommodation",
      label: "Akomodasi (Penginapan)",
      amount: { currency: "IDR", min: dailyBase * 0.4 * duration, max: dailyBase * 0.6 * duration },
      confidence: "estimated",
    },
    {
      id: "cat-meals",
      type: "meals",
      label: "Konsumsi (Makan & Minum)",
      amount: { currency: "IDR", min: dailyBase * 0.3 * duration, max: dailyBase * 0.4 * duration },
      confidence: "estimated",
    },
    {
      id: "cat-act",
      type: "activities",
      label: "Aktivitas & Tiket Masuk",
      amount: { currency: "IDR", min: dailyBase * 0.1 * duration, max: dailyBase * 0.2 * duration },
      confidence: "estimated",
    },
    {
      id: "cat-transport-local",
      type: "local-transport",
      label: "Transportasi Lokal",
      amount: { currency: "IDR", min: dailyBase * 0.1 * duration, max: dailyBase * 0.15 * duration },
      confidence: "estimated",
    },
  ];

  // If there are multiple provinces, add intercity transport
  if (result.provinceIds.length > 1) {
    categories.push({
      id: "cat-transport-inter",
      type: "intercity-transport",
      label: "Transportasi Antarkota",
      amount: { currency: "IDR", min: 300000 * (result.provinceIds.length - 1), max: 800000 * (result.provinceIds.length - 1) },
      confidence: "estimated",
    });
  }

  // Calculate total by summing min and max
  const totalMin = categories.reduce((sum, cat) => sum + (cat.amount?.min || 0), 0);
  const totalMax = categories.reduce((sum, cat) => sum + (cat.amount?.max || 0), 0);

  return {
    basis: "per-person",
    partySize: 1, // Default 1 traveler
    durationDays: duration,
    total: {
      currency: "IDR",
      min: totalMin,
      max: totalMax,
    },
    confidence: "estimated",
    categories,
    assumptionIds: ["assume-shared-room", "assume-public-transport"],
    exclusionIds: ["exclude-flights-to-origin", "exclude-souvenirs"],
    updatedAt: new Date().toISOString(),
  };
}
