/**
 * NUSANTARAYA — Route Planner Analytics Adapter
 * Typed no-op adapter for analytics events.
 * When an analytics platform is integrated, replace the no-op with real tracking.
 * Never sends personal data — only preference categories.
 */

import type {
  RoutePlannerFormValues,
  RoutePlannerSource,
} from "@/types/route-planner";

// ─── Event Names ─────────────────────────────────────────────────────────────

export type RoutePlannerEvent =
  | "route_planner_form_viewed"
  | "route_planner_started"
  | "route_duration_selected"
  | "route_origin_selected"
  | "route_origin_cleared"
  | "route_region_selected"
  | "route_interest_selected"
  | "route_interest_removed"
  | "route_budget_selected"
  | "route_pace_selected"
  | "route_planner_prefilled"
  | "route_planner_reset"
  | "route_generate_clicked"
  | "route_generate_validation_failed"
  | "route_generate_started"
  | "route_generate_succeeded"
  | "route_generate_fallback_used"
  | "route_generate_failed"
  | "route_result_viewed"
  | "preset_routes_viewed"
  | "preset_routes_filter_selected"
  | "preset_routes_filter_cleared"
  | "preset_routes_no_match_viewed"
  | "preset_route_impression"
  | "preset_route_opened"
  | "preset_route_prefill_clicked"
  | "preset_route_prefill_succeeded"
  | "preset_route_result_loaded"
  | "preset_route_fallback_used"
  | "preset_route_error"
  // Section 4 — Route Recommendation Result events
  | "route_result_loading_viewed"
  | "route_result_viewed"
  | "route_result_dynamic_loaded"
  | "route_result_preset_loaded"
  | "route_result_fallback_loaded"
  | "route_result_adjustment_viewed"
  | "route_result_reason_expanded"
  | "route_result_itinerary_clicked"
  | "route_result_edit_clicked"
  | "route_result_map_clicked"
  | "route_result_saved"
  | "route_result_unsaved"
  | "route_result_rani_clicked"
  | "route_result_alternatives_clicked"
  | "route_result_retry_clicked"
  | "route_result_error";

// ─── Safe Payload ────────────────────────────────────────────────────────────

export interface RoutePlannerAnalyticsPayload {
  source?: RoutePlannerSource;
  durationDays?: number;
  hasOrigin?: boolean;
  destinationRegionId?: string | null;
  interestCount?: number;
  interests?: string[];
  budgetLevel?: string;
  travelPace?: string;
  journeyId?: string;
  presetId?: string;
  matchType?: import("@/types/route-planner").RouteMatchType;
  locale?: "id" | "en";
}

// ─── No-op Tracker ───────────────────────────────────────────────────────────

/**
 * Track a route planner analytics event.
 * Emits a typed browser event and forwards to dataLayer when an analytics provider is present.
 */
export function trackRoutePlannerEvent(
  event: RoutePlannerEvent,
  payload: RoutePlannerAnalyticsPayload = {}
): void {
  if (typeof window === "undefined") return;
  const detail = { event, ...payload };
  window.dispatchEvent(new CustomEvent("nusantaraya:analytics", { detail }));
  const analyticsWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };
  analyticsWindow.dataLayer?.push(detail);
}

/**
 * Build safe analytics payload from form values.
 * Strips personal data — only sends preference categories.
 */
export function buildAnalyticsPayload(
  values: RoutePlannerFormValues,
  extra?: Partial<RoutePlannerAnalyticsPayload>
): RoutePlannerAnalyticsPayload {
  return {
    durationDays: values.durationDays,
    hasOrigin: values.originProvinceId !== null,
    destinationRegionId: values.destinationRegionId,
    interestCount: values.interests.length,
    interests: [...values.interests],
    budgetLevel: values.budgetLevel,
    travelPace: values.travelPace,
    locale: "id",
    ...extra,
  };
}

