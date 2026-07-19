/**
 * NUSANTARAYA — Route Recommendation Result Helpers
 * Section 4: Route Recommendation Result
 *
 * Pure functions that derive Section 4 display logic from existing
 * RouteRecommendation and RoutePlannerFormValues contracts.
 * No data duplication — reads from canonical sources only.
 */

import type {
  RouteRecommendation,
  RoutePlannerFormValues,
  RouteMatchType,
  RouteReasonCode,
  PreferenceMatchState,
  PreferenceMatchChip,
} from "@/types/route-planner";
import {
  getRegionLabel,
  getInterestLabels,
  getBudgetLabel,
  getPaceLabel,
} from "@/lib/routes/composePreferenceSummary";
import type { ProvinceId } from "@/data/provinces/provinceIds";
import { getRegionByProvinceId } from "@/data/regions/regionProvinceMap";

// ─── Route Field Derivations ──────────────────────────────────────────────────

/**
 * Derives unique province IDs from a route recommendation's stops.
 */
export function getRouteProvinceIds(result: RouteRecommendation): ProvinceId[] {
  const ids = result.stops.map(stop => stop.provinceId);
  return [...new Set(ids)];
}

/**
 * Derives unique region IDs from a route recommendation's stops using canonical mapping.
 */
export function getRouteRegionIds(result: RouteRecommendation): string[] {
  const provinceIds = getRouteProvinceIds(result);
  const regionIds = provinceIds
    .map(pId => getRegionByProvinceId(pId)?.id)
    .filter(Boolean) as string[];
  return [...new Set(regionIds)];
}

// ─── Match Type Derivation ────────────────────────────────────────────────────

/**
 * Derives the Section 4 RouteMatchType from existing status + recommendation.
 * Maps legacy matchType values to the new canonical union.
 */
export function deriveRouteMatchType(
  status: "idle" | "loading" | "success" | "error" | "fallback",
  recommendation: RouteRecommendation,
  source: "form" | "preset" | "url" = "form"
): RouteMatchType {
  if (source === "url") return "restored";
  if (status === "fallback" || recommendation.matchType === "fallback-preset") return "fallback-preset";
  if (source === "preset" && recommendation.matchType === "exact-preset") return "exact-preset";
  return recommendation.matchType as RouteMatchType;
}

// ─── Reason Code Derivation ───────────────────────────────────────────────────

/**
 * Derives up to 4 reason codes from form values + recommendation.
 * Codes are ordered by relevance (most specific first).
 */
export function deriveReasonCodes(
  values: RoutePlannerFormValues,
  result: RouteRecommendation
): RouteReasonCode[] {
  const codes: RouteReasonCode[] = [];

  // Region
  if (values.destinationRegionId && result.regionId === values.destinationRegionId) {
    codes.push("REGION_EXACT");
  }

  // Duration
  if (result.durationDays === values.durationDays) {
    codes.push("DURATION_EXACT");
  }

  // Interests
  const interestOverlap = values.interests.filter((i) =>
    result.interests.includes(i)
  );
  if (interestOverlap.length > 0) {
    codes.push("INTEREST_OVERLAP");
    if (interestOverlap.includes("budaya")) codes.push("CULTURAL_DEPTH");
    if (interestOverlap.includes("kuliner")) codes.push("CULINARY_DEPTH");
  }

  // Pace
  // Check if pace is compatible (route stops count is reasonable)
  if (result.stops.length >= 2) {
    codes.push("PACE_COMPATIBLE");
  }

  // Budget
  codes.push("BUDGET_COMPATIBLE");

  // Cluster (2+ stops = realistic cluster)
  if (result.stops.length >= 2 && result.provinceIds.length <= 3) {
    codes.push("CLUSTER_REALISTIC");
  }

  // Fallback
  if (result.matchType === "fallback-preset") {
    codes.push("FALLBACK_NEAREST");
  }

  // Scope reduced (adapted from different duration)
  if (result.matchType === "adapted-preset") {
    codes.push("SCOPE_REDUCED");
  }

  // Return max 4 unique codes
  return [...new Set(codes)].slice(0, 4) as RouteReasonCode[];
}

// ─── Primary Reason Sentence ──────────────────────────────────────────────────

/**
 * Composes a natural-language primary reason sentence from reason codes.
 * Always returns a truthful, human-readable sentence.
 */
export function composePrimaryReason(
  reasonCodes: RouteReasonCode[],
  result: RouteRecommendation,
  values: RoutePlannerFormValues
): string {
  const regionLabel = getRegionLabel(result.regionId);
  const interestLabels = getInterestLabels(result.interests.slice(0, 2));
  const paceLabel = getPaceLabel(values.travelPace).toLowerCase();
  const duration = result.durationDays;
  const clusterCount = result.stops.length;

  if (reasonCodes.includes("FALLBACK_NEAREST")) {
    return `Kami menampilkan rute terkurasi yang paling mendekati wilayah, durasi, dan minat pilihanmu, karena rute dinamis belum tersedia untuk kombinasi ini.`;
  }

  if (reasonCodes.includes("SCOPE_REDUCED")) {
    return `Rute ini diadaptasi untuk ${duration} hari, memprioritaskan ${interestLabels.join(" dan ").toLowerCase()} di ${regionLabel} dengan ritme yang ${paceLabel}.`;
  }

  if (
    reasonCodes.includes("CULTURAL_DEPTH") &&
    reasonCodes.includes("CULINARY_DEPTH")
  ) {
    return `Rute ini memprioritaskan budaya dan kuliner sesuai pilihanmu, membatasi perpindahan pada ${clusterCount} cluster yang saling terhubung, serta menjaga ritme tetap ${paceLabel} selama ${duration} hari.`;
  }

  if (reasonCodes.includes("CULTURAL_DEPTH")) {
    return `Rute ini dipilih karena kedalaman warisan budaya di ${regionLabel}, dengan ${clusterCount} cluster terhubung yang sesuai ritme ${paceLabel} selama ${duration} hari.`;
  }

  if (reasonCodes.includes("INTEREST_OVERLAP")) {
    return `Rute ini cocok dengan fokus ${interestLabels.join(" dan ").toLowerCase()} pilihanmu, mempertahankan ritme ${paceLabel} dalam ${clusterCount} cluster selama ${duration} hari di ${regionLabel}.`;
  }

  // Generic fallback reason
  return `Rute ini dipilih berdasarkan kecocokan wilayah, durasi, dan ritme perjalanan pilihanmu di ${regionLabel} selama ${duration} hari.`;
}

// ─── Reason Code Labels ───────────────────────────────────────────────────────

const REASON_CODE_LABELS_ID: Record<RouteReasonCode, string> = {
  REGION_EXACT: "Wilayah cocok",
  DURATION_EXACT: "Durasi tepat",
  INTEREST_OVERLAP: "Minat selaras",
  PACE_COMPATIBLE: "Ritme sesuai",
  BUDGET_COMPATIBLE: "Budget sesuai",
  ORIGIN_CONVENIENT: "Asal terjangkau",
  CLUSTER_REALISTIC: "Cluster realistis",
  CULTURAL_DEPTH: "Kaya budaya",
  CULINARY_DEPTH: "Kaya kuliner",
  FALLBACK_NEAREST: "Rute terdekat",
  SCOPE_REDUCED: "Cakupan disesuaikan",
};

const REASON_CODE_LABELS_EN: Record<RouteReasonCode, string> = {
  REGION_EXACT: "Region matched",
  DURATION_EXACT: "Duration exact",
  INTEREST_OVERLAP: "Interests aligned",
  PACE_COMPATIBLE: "Pace compatible",
  BUDGET_COMPATIBLE: "Budget compatible",
  ORIGIN_CONVENIENT: "Convenient origin",
  CLUSTER_REALISTIC: "Realistic cluster",
  CULTURAL_DEPTH: "Cultural depth",
  CULINARY_DEPTH: "Culinary depth",
  FALLBACK_NEAREST: "Nearest route",
  SCOPE_REDUCED: "Scope adjusted",
};

export function getReasonCodeLabel(code: RouteReasonCode, locale: "id" | "en" = "id"): string {
  return locale === "en"
    ? REASON_CODE_LABELS_EN[code]
    : REASON_CODE_LABELS_ID[code];
}

// ─── Preference Match Summary ─────────────────────────────────────────────────

/**
 * Builds the preference match chips array for the PreferenceMatchSummary component.
 * Each chip shows how the user's preference maps to the actual result.
 */
export function buildPreferenceMatchChips(
  values: RoutePlannerFormValues,
  result: RouteRecommendation,
  locale: "id" | "en" = "id"
): PreferenceMatchChip[] {
  const chips: PreferenceMatchChip[] = [];

  // Duration
  const durationMatch: PreferenceMatchState =
    result.durationDays === values.durationDays ? "exact" : "adjusted";
  chips.push({
    id: "duration",
    label: locale === "en" ? "Duration" : "Durasi",
    value: `${values.durationDays} ${locale === "en" ? "days" : "hari"}`,
    state: durationMatch,
    note:
      durationMatch === "adjusted"
        ? locale === "en"
          ? `Adapted to ${result.durationDays} days from original preset`
          : `Disesuaikan menjadi ${result.durationDays} hari dari preset asli`
        : undefined,
  });

  // Region
  const regionLabel = getRegionLabel(values.destinationRegionId);
  const regionMatch: PreferenceMatchState =
    !values.destinationRegionId
      ? "not-applicable"
      : result.regionId === values.destinationRegionId
      ? "exact"
      : "adjusted";
  chips.push({
    id: "region",
    label: locale === "en" ? "Region" : "Wilayah",
    value: regionLabel,
    state: regionMatch,
    note:
      regionMatch === "adjusted"
        ? locale === "en"
          ? "Nearest available region was selected"
          : "Wilayah terdekat yang tersedia dipilih"
        : undefined,
  });

  // Interests
  const interestLabels = getInterestLabels(values.interests);
  const interestOverlap = values.interests.filter((i) =>
    result.interests.includes(i)
  );
  const interestMatch: PreferenceMatchState =
    values.interests.length === 0
      ? "not-applicable"
      : interestOverlap.length === values.interests.length
      ? "exact"
      : interestOverlap.length > 0
      ? "compatible"
      : "adjusted";
  chips.push({
    id: "interests",
    label: locale === "en" ? "Interests" : "Minat",
    value: interestLabels.join(" · "),
    state: interestMatch,
  });

  // Budget
  const budgetLabel = getBudgetLabel(values.budgetLevel);
  chips.push({
    id: "budget",
    label: locale === "en" ? "Budget" : "Anggaran",
    value: budgetLabel,
    state: "compatible",
  });

  // Pace
  const paceLabel = getPaceLabel(values.travelPace);
  chips.push({
    id: "pace",
    label: locale === "en" ? "Pace" : "Ritme",
    value: paceLabel,
    state: "compatible",
  });

  // Origin
  chips.push({
    id: "origin",
    label: locale === "en" ? "Origin" : "Asal",
    value:
      locale === "en"
        ? "Flexible — entry point auto-selected"
        : "Fleksibel — titik masuk dipilih otomatis",
    state: values.originProvinceId ? "compatible" : "not-applicable",
  });

  return chips.filter((c) => c.state !== "not-applicable" || c.id === "origin");
}

// ─── RANI Context Builder ─────────────────────────────────────────────────────

export interface RaniRouteContext {
  routeId: string;
  routeVersion: string;
  preferenceSnapshot: RoutePlannerFormValues;
  requestedAdjustment: string | null;
  locale: "id" | "en";
  travelerMode: "explore" | "tourist" | "learn";
}

/**
 * Builds the structured context object to pass to RANI when user clicks
 * "Sesuaikan bersama RANI". Does NOT send HTML, raw text, or personal data.
 */
export function buildRaniContext(
  result: RouteRecommendation,
  values: RoutePlannerFormValues,
  locale: "id" | "en" = "id",
  travelerMode: "explore" | "tourist" | "learn" = "explore"
): RaniRouteContext {
  return {
    routeId: result.id,
    routeVersion: "1", // preset version — extend when versioning is added
    preferenceSnapshot: values,
    requestedAdjustment: null,
    locale,
    travelerMode,
  };
}

// ─── Analytics Payload ────────────────────────────────────────────────────────

export interface RouteResultAnalyticsPayload {
  routeId: string;
  routeVersion: string;
  matchType: RouteMatchType;
  source: "form" | "preset" | "url";
  durationDays: number;
  primaryRegionId: string;
  provinceCount: number;
  interestCount: number;
  adjustmentCount: number;
  travelerMode: "explore" | "tourist" | "learn";
  locale: "id" | "en";
}

export function buildRouteResultAnalyticsPayload(
  result: RouteRecommendation,
  matchType: RouteMatchType,
  source: "form" | "preset" | "url",
  adjustmentNote: string | null,
  locale: "id" | "en" = "id",
  travelerMode: "explore" | "tourist" | "learn" = "explore"
): RouteResultAnalyticsPayload {
  return {
    routeId: result.id,
    routeVersion: "1",
    matchType,
    source,
    durationDays: result.durationDays,
    primaryRegionId: result.regionId,
    provinceCount: result.provinceIds.length,
    interestCount: result.interests.length,
    adjustmentCount: adjustmentNote ? 1 : 0,
    travelerMode,
    locale,
  };
}

// ─── Status Labels ────────────────────────────────────────────────────────────

export function getMatchTypeLabel(
  matchType: RouteMatchType,
  locale: "id" | "en" = "id"
): string {
  const labels: Record<RouteMatchType, { id: string; en: string }> = {
    "exact-preset": {
      id: "Preset paling sesuai",
      en: "Best matching preset",
    },
    "adapted-preset": {
      id: "Preset yang disesuaikan",
      en: "Adapted preset",
    },
    "fallback-preset": {
      id: "Alternatif preset",
      en: "Alternative preset",
    },
    restored: {
      id: "Rute tersimpan dipulihkan",
      en: "Saved route restored",
    },
  };
  return locale === "en" ? labels[matchType]?.en || labels["exact-preset"].en : labels[matchType]?.id || labels["exact-preset"].id;
}

