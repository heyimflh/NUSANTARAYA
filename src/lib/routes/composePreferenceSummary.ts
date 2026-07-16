/**
 * NUSANTARAYA — Preference Summary Composer
 * Derives human-readable summary and route character insight from form values.
 * Pure function — no side effects, no state duplication.
 */

import type { RoutePlannerFormValues } from "@/types/route-planner";
import { INTEREST_OPTIONS } from "@/data/routes/routePlannerOptions";
import { REGION_DISPLAY_OPTIONS } from "@/data/routes/routePlannerOptions";
import { provinceMapData } from "@/data/provinces/provinces";

// ─── Label Resolvers ─────────────────────────────────────────────────────────

export function getRegionLabel(regionId: string | null): string {
  if (!regionId) return "—";
  const region = REGION_DISPLAY_OPTIONS.find((r) => r.id === regionId);
  return region?.label ?? regionId;
}

export function getInterestLabels(interests: string[]): string[] {
  return interests.map((id) => {
    const opt = INTEREST_OPTIONS.find((o) => o.value === id);
    return opt?.label ?? id;
  });
}

export function getProvinceLabel(provinceId: string | null): string {
  if (!provinceId) return "Fleksibel";
  const province = provinceMapData.find((p) => p.id === provinceId);
  return province?.name ?? provinceId;
}

const BUDGET_LABELS: Record<string, string> = {
  hemat: "Hemat",
  menengah: "Menengah",
  premium: "Premium",
  fleksibel: "Fleksibel",
};

const PACE_LABELS: Record<string, string> = {
  santai: "Santai",
  seimbang: "Seimbang",
  eksploratif: "Eksploratif",
};

export function getBudgetLabel(budget: string): string {
  return BUDGET_LABELS[budget] ?? budget;
}

export function getPaceLabel(pace: string): string {
  return PACE_LABELS[pace] ?? pace;
}

// ─── Missing Fields ──────────────────────────────────────────────────────────

export function getMissingFields(values: RoutePlannerFormValues): string[] {
  const missing: string[] = [];
  if (!values.destinationRegionId) missing.push("wilayah tujuan");
  if (values.interests.length === 0) missing.push("minimal satu minat");
  return missing;
}

export function getIncompleteCopy(values: RoutePlannerFormValues): string | null {
  const missing = getMissingFields(values);
  if (missing.length === 0) return null;
  return `Lengkapi ${missing.join(" dan ")} untuk membuat rekomendasi.`;
}

// ─── Route Character Insight ─────────────────────────────────────────────────

export function composeRouteCharacter(
  values: RoutePlannerFormValues
): string | null {
  if (!values.destinationRegionId || values.interests.length === 0) {
    return null;
  }

  const region = getRegionLabel(values.destinationRegionId);
  const interestLabels = getInterestLabels(values.interests);
  const interestText = interestLabels.join(", ").toLowerCase();

  // Determine city count based on duration and pace
  let cityRange = "2–3";
  if (values.durationDays === 3) {
    cityRange = values.travelPace === "eksploratif" ? "1–2" : "1";
  } else if (values.durationDays === 7) {
    cityRange = values.travelPace === "santai" ? "2–3" : "3–4";
  }

  // Determine pace qualifier
  let paceQualifier = "";
  if (values.travelPace === "santai") {
    paceQualifier = "waktu jeda yang cukup";
  } else if (values.travelPace === "eksploratif") {
    paceQualifier = "lebih banyak aktivitas terkurasi";
  } else {
    paceQualifier = "keseimbangan eksplorasi dan istirahat";
  }

  return `Rute akan memprioritaskan ${cityRange} kota di ${region} dengan perpaduan ${interestText}, dan ${paceQualifier}.`;
}
