/**
 * NUSANTARAYA — Route Planner Schema & Validation
 * Validation, URL query parsing, draft persistence helpers.
 * All inputs are validated through allowlists — never trust raw URL/localStorage.
 */

import type {
  RoutePlannerFormValues,
  RoutePlannerValidationError,
  RoutePlannerSource,
  RoutePlannerRegionId,
  RouteInterest,
  RouteDuration,
  BudgetLevel,
  TravelPace,
} from "@/types/route-planner";
import {
  DEFAULT_FORM_VALUES,
  isRouteDuration,
  isRoutePlannerRegionId,
  isRouteInterest,
  isBudgetLevel,
  isTravelPace,
  isRoutePlannerSource,
  ROUTE_INTERESTS,
} from "@/types/route-planner";
import { isValidProvinceId } from "@/data/provinces/provinceIds";

// ─── Validation ──────────────────────────────────────────────────────────────

export function validateFormValues(
  values: RoutePlannerFormValues
): RoutePlannerValidationError[] {
  const errors: RoutePlannerValidationError[] = [];

  if (!isRouteDuration(values.durationDays)) {
    errors.push({
      field: "durationDays",
      message: "Pilih durasi perjalanan: 3, 5, atau 7 hari.",
    });
  }

  if (
    values.originProvinceId !== null &&
    !isValidProvinceId(values.originProvinceId)
  ) {
    errors.push({
      field: "originProvinceId",
      message: "Provinsi keberangkatan tidak valid.",
    });
  }

  if (!values.destinationRegionId) {
    errors.push({
      field: "destinationRegionId",
      message:
        "Pilih satu wilayah tujuan agar kami dapat menyusun rute yang realistis.",
    });
  } else if (!isRoutePlannerRegionId(values.destinationRegionId)) {
    errors.push({
      field: "destinationRegionId",
      message: "Wilayah tujuan tidak valid.",
    });
  }

  if (!values.interests || values.interests.length === 0) {
    errors.push({
      field: "interests",
      message: "Pilih minimal satu minat utama.",
    });
  } else if (values.interests.length > 3) {
    errors.push({
      field: "interests",
      message: "Pilih maksimal 3 minat utama agar rekomendasi tetap fokus.",
    });
  } else {
    const uniqueInterests = new Set(values.interests);
    if (uniqueInterests.size !== values.interests.length) {
      errors.push({
        field: "interests",
        message: "Minat tidak boleh duplikat.",
      });
    }
    for (const interest of values.interests) {
      if (!isRouteInterest(interest)) {
        errors.push({
          field: "interests",
          message: `Minat "${interest}" tidak valid.`,
        });
        break;
      }
    }
  }

  if (!isBudgetLevel(values.budgetLevel)) {
    errors.push({
      field: "budgetLevel",
      message: "Pilih kisaran anggaran yang valid.",
    });
  }

  if (!isTravelPace(values.travelPace)) {
    errors.push({
      field: "travelPace",
      message: "Pilih gaya perjalanan yang valid.",
    });
  }

  return errors;
}

export function isFormValid(values: RoutePlannerFormValues): boolean {
  return validateFormValues(values).length === 0;
}

// ─── URL Query Parsing ───────────────────────────────────────────────────────

export interface ParsedPlannerQuery {
  values: Partial<RoutePlannerFormValues>;
  source: RoutePlannerSource;
  journeyId?: string;
}

export function parsePlannerQuery(
  searchParams: URLSearchParams
): ParsedPlannerQuery {
  const values: Partial<RoutePlannerFormValues> = {};

  // Duration
  const durationRaw = searchParams.get("duration");
  if (durationRaw) {
    const num = parseInt(durationRaw, 10);
    if (isRouteDuration(num)) {
      values.durationDays = num;
    }
  }

  // Origin
  const originRaw = searchParams.get("origin");
  if (originRaw && isValidProvinceId(originRaw)) {
    values.originProvinceId = originRaw;
  }

  // Region
  const regionRaw = searchParams.get("region");
  if (regionRaw && isRoutePlannerRegionId(regionRaw)) {
    values.destinationRegionId = regionRaw as RoutePlannerRegionId;
  }

  // Interests
  const interestsRaw = searchParams.get("interests");
  if (interestsRaw) {
    const parsed = interestsRaw
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter((s): s is RouteInterest => isRouteInterest(s))
      .filter(
        (value, index, self) => self.indexOf(value) === index
      )
      .slice(0, 3);
    if (parsed.length > 0) {
      values.interests = parsed;
    }
  }

  // Budget
  const budgetRaw = searchParams.get("budget");
  if (budgetRaw && isBudgetLevel(budgetRaw)) {
    values.budgetLevel = budgetRaw as BudgetLevel;
  }

  // Pace
  const paceRaw = searchParams.get("pace");
  if (paceRaw && isTravelPace(paceRaw)) {
    values.travelPace = paceRaw as TravelPace;
  }

  // Source & Context
  const sourceRaw = searchParams.get("source");
  const source: RoutePlannerSource = isRoutePlannerSource(sourceRaw)
    ? (sourceRaw as RoutePlannerSource)
    : "routes-page";

  const journeyId = searchParams.get("journeyId") || undefined;

  return { values, source, journeyId };
}

export function buildPlannerQueryString(
  values: RoutePlannerFormValues,
  source: RoutePlannerSource = "routes-page",
  journeyId?: string
): string {
  const params = new URLSearchParams();

  if (source !== "routes-page") params.set("source", source);
  if (journeyId) params.set("journeyId", journeyId);
  if (values.durationDays !== DEFAULT_FORM_VALUES.durationDays) {
    params.set("duration", String(values.durationDays));
  }
  if (values.originProvinceId) {
    params.set("origin", values.originProvinceId);
  }
  if (values.destinationRegionId) {
    params.set("region", values.destinationRegionId);
  }
  if (values.interests.length > 0) {
    params.set("interests", values.interests.join(","));
  }
  if (values.budgetLevel !== DEFAULT_FORM_VALUES.budgetLevel) {
    params.set("budget", values.budgetLevel);
  }
  if (values.travelPace !== DEFAULT_FORM_VALUES.travelPace) {
    params.set("pace", values.travelPace);
  }

  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

// ─── Draft Persistence ───────────────────────────────────────────────────────

const DRAFT_KEY = "nusantaraya.routePlanner.draft.v1";

interface DraftEnvelope {
  version: 1;
  values: RoutePlannerFormValues;
  savedAt: number;
}

export function saveDraft(values: RoutePlannerFormValues): void {
  if (typeof window === "undefined") return;
  try {
    const envelope: DraftEnvelope = {
      version: 1,
      values,
      savedAt: Date.now(),
    };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(envelope));
  } catch {
    // localStorage might be full or unavailable
  }
}

export function loadDraft(): RoutePlannerFormValues | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;

    const envelope: unknown = JSON.parse(raw);
    if (
      !envelope ||
      typeof envelope !== "object" ||
      !("version" in envelope) ||
      (envelope as DraftEnvelope).version !== 1
    ) {
      return null;
    }

    const draft = (envelope as DraftEnvelope).values;
    if (!draft || typeof draft !== "object") return null;

    // Validate each field against allowlists
    return sanitizeFormValues(draft);
  } catch {
    return null;
  }
}

export function clearDraft(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch {
    // noop
  }
}

/**
 * Sanitize raw values from untrusted sources (URL, localStorage).
 * Returns valid form values or defaults for invalid fields.
 */
export function sanitizeFormValues(
  raw: Partial<RoutePlannerFormValues>
): RoutePlannerFormValues {
  const durationDays: RouteDuration = isRouteDuration(raw.durationDays)
    ? raw.durationDays
    : DEFAULT_FORM_VALUES.durationDays;

  const originProvinceId: string | null =
    raw.originProvinceId && isValidProvinceId(raw.originProvinceId)
      ? raw.originProvinceId
      : null;

  const destinationRegionId: RoutePlannerRegionId | null =
    raw.destinationRegionId &&
    isRoutePlannerRegionId(raw.destinationRegionId)
      ? raw.destinationRegionId
      : null;

  const interests: RouteInterest[] = Array.isArray(raw.interests)
    ? raw.interests
        .filter((i): i is RouteInterest => isRouteInterest(i))
        .filter((v, idx, arr) => arr.indexOf(v) === idx)
        .slice(0, 3)
    : [];

  const budgetLevel: BudgetLevel = isBudgetLevel(raw.budgetLevel)
    ? raw.budgetLevel
    : DEFAULT_FORM_VALUES.budgetLevel;

  const travelPace: TravelPace = isTravelPace(raw.travelPace)
    ? raw.travelPace
    : DEFAULT_FORM_VALUES.travelPace;

  return {
    durationDays,
    originProvinceId,
    destinationRegionId,
    interests,
    budgetLevel,
    travelPace,
  };
}
