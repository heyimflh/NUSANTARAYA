"use client";

/**
 * RoutePlannerForm — Main form component.
 * Manages form state, validation, prefill/URL parsing, draft persistence,
 * submission flow, and preset matching.
 */

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type {
  RoutePlannerFormValues,
  RoutePlannerStatus,
  RoutePlannerValidationError,
  RouteDuration,
  RoutePlannerRegionId,
  RouteInterest,
  BudgetLevel,
  TravelPace,
  RouteRecommendation,
} from "@/types/route-planner";
import { DEFAULT_FORM_VALUES } from "@/types/route-planner";
import {
  validateFormValues,
  isFormValid,
  parsePlannerQuery,
  saveDraft,
  loadDraft,
  clearDraft,
  sanitizeFormValues,
} from "@/lib/routes/routePlannerSchema";
import { matchRoutePreset } from "@/lib/routes/matchRoutePreset";
import {
  trackRoutePlannerEvent,
  buildAnalyticsPayload,
} from "@/lib/routes/routePlannerAnalytics";

import { DurationSelector } from "./DurationSelector";
import { OriginProvinceCombobox } from "./OriginProvinceCombobox";
import { DestinationRegionSelector } from "./DestinationRegionSelector";
import { InterestSelector } from "./InterestSelector";
import { BudgetSelector } from "./BudgetSelector";
import { TravelPaceSelector } from "./TravelPaceSelector";
import { PreferenceSummary } from "./PreferenceSummary";

interface RoutePlannerFormProps {
  onResult?: (result: RouteRecommendation, adjustmentNote: string | null) => void;
}

export function RoutePlannerForm({ onResult }: RoutePlannerFormProps) {
  // ─── Form State ──────────────────────────────────────────────────────────
  const [values, setValues] = useState<RoutePlannerFormValues>(DEFAULT_FORM_VALUES);
  const [status, setStatus] = useState<RoutePlannerStatus>("idle");
  const [errors, setErrors] = useState<RoutePlannerValidationError[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const draftTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchParams = useSearchParams();

  // ─── Hydration: URL > Draft > Defaults ───────────────────────────────────
  useEffect(() => {
    // 1. Parse URL params
    const { values: urlValues, source } = parsePlannerQuery(searchParams);
    const hasUrlParams = Object.keys(urlValues).length > 0;

    if (hasUrlParams) {
      const merged = sanitizeFormValues({ ...DEFAULT_FORM_VALUES, ...urlValues });
      setValues(merged);
      trackRoutePlannerEvent("route_planner_prefilled", {
        source,
        ...buildAnalyticsPayload(merged),
      });
    } else {
      // 2. Try draft
      const draft = loadDraft();
      if (draft) {
        setValues(draft);
      }
      // 3. Otherwise defaults are already set
    }

    setHydrated(true);
    trackRoutePlannerEvent("route_planner_form_viewed");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Draft Persistence (debounced) ───────────────────────────────────────
  useEffect(() => {
    if (!hydrated || !hasInteracted) return;

    if (draftTimerRef.current) clearTimeout(draftTimerRef.current);
    draftTimerRef.current = setTimeout(() => {
      saveDraft(values);
    }, 400);

    return () => {
      if (draftTimerRef.current) clearTimeout(draftTimerRef.current);
    };
  }, [values, hydrated, hasInteracted]);

  // ─── Derived State ───────────────────────────────────────────────────────
  const formIsValid = useMemo(() => isFormValid(values), [values]);

  // ─── Field Updaters ──────────────────────────────────────────────────────
  const markInteracted = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackRoutePlannerEvent("route_planner_started");
    }
  }, [hasInteracted]);

  const updateField = useCallback(
    <K extends keyof RoutePlannerFormValues>(
      field: K,
      value: RoutePlannerFormValues[K]
    ) => {
      markInteracted();
      setValues((prev) => ({ ...prev, [field]: value }));
      // Clear field-specific error
      setErrors((prev) => prev.filter((e) => e.field !== field));
    },
    [markInteracted]
  );

  const handleDurationChange = useCallback(
    (v: RouteDuration) => {
      updateField("durationDays", v);
      trackRoutePlannerEvent("route_duration_selected", { durationDays: v });
    },
    [updateField]
  );

  const handleOriginChange = useCallback(
    (v: string | null) => {
      updateField("originProvinceId", v);
      trackRoutePlannerEvent(v ? "route_origin_selected" : "route_origin_cleared", {
        hasOrigin: v !== null,
      });
    },
    [updateField]
  );

  const handleRegionChange = useCallback(
    (v: RoutePlannerRegionId) => {
      updateField("destinationRegionId", v);
      trackRoutePlannerEvent("route_region_selected", {
        destinationRegionId: v,
      });
    },
    [updateField]
  );

  const handleInterestsChange = useCallback(
    (interests: RouteInterest[]) => {
      updateField("interests", interests);
      // Track individual add/remove
      const prev = values.interests;
      const added = interests.filter((i) => !prev.includes(i));
      const removed = prev.filter((i) => !interests.includes(i));
      added.forEach(() =>
        trackRoutePlannerEvent("route_interest_selected", {
          interestCount: interests.length,
        })
      );
      removed.forEach(() =>
        trackRoutePlannerEvent("route_interest_removed", {
          interestCount: interests.length,
        })
      );
    },
    [updateField, values.interests]
  );

  const handleBudgetChange = useCallback(
    (v: BudgetLevel) => {
      updateField("budgetLevel", v);
      trackRoutePlannerEvent("route_budget_selected", { budgetLevel: v });
    },
    [updateField]
  );

  const handlePaceChange = useCallback(
    (v: TravelPace) => {
      updateField("travelPace", v);
      trackRoutePlannerEvent("route_pace_selected", { travelPace: v });
    },
    [updateField]
  );

  // ─── Reset ───────────────────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    setValues(DEFAULT_FORM_VALUES);
    setErrors([]);
    setStatus("idle");
    clearDraft();
    trackRoutePlannerEvent("route_planner_reset");
  }, []);

  // ─── Submit ──────────────────────────────────────────────────────────────
  const handleSubmit = useCallback(() => {
    trackRoutePlannerEvent("route_generate_clicked", buildAnalyticsPayload(values));

    // Validate
    const validationErrors = validateFormValues(values);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      trackRoutePlannerEvent("route_generate_validation_failed");

      // Focus first error field
      const firstErrorField = validationErrors[0].field;
      const fieldElement = formRef.current?.querySelector(
        `[name="${firstErrorField}"], [data-field="${firstErrorField}"]`
      );
      if (fieldElement instanceof HTMLElement) {
        fieldElement.focus();
        fieldElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setErrors([]);
    setStatus("loading");
    saveDraft(values);

    trackRoutePlannerEvent("route_generate_started", buildAnalyticsPayload(values));

    // Simulate brief processing time for realistic feel (600ms)
    setTimeout(() => {
      try {
        const result = matchRoutePreset(values);

        if (result.recommendation.matchType === "fallback") {
          setStatus("fallback");
          trackRoutePlannerEvent("route_generate_fallback_used", {
            ...buildAnalyticsPayload(values),
            matchType: "fallback",
          });
        } else {
          setStatus("success");
          trackRoutePlannerEvent("route_generate_succeeded", {
            ...buildAnalyticsPayload(values),
            matchType: result.recommendation.matchType,
          });
        }

        onResult?.(result.recommendation, result.adjustmentNote);
      } catch {
        // Fallback: even on error, provide a recommendation
        const fallback = matchRoutePreset(DEFAULT_FORM_VALUES);
        setStatus("fallback");
        trackRoutePlannerEvent("route_generate_failed", buildAnalyticsPayload(values));
        onResult?.(fallback.recommendation, fallback.adjustmentNote);
      }
    }, 700);
  }, [values, onResult]);

  // ─── Error Helpers ───────────────────────────────────────────────────────
  const getFieldError = (field: keyof RoutePlannerFormValues): string | undefined => {
    return errors.find((e) => e.field === field)?.message;
  };

  const isDisabled = status === "loading";

  // ─── Render ──────────────────────────────────────────────────────────────
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
      {/* Form Area */}
      <form
        ref={formRef}
        className="lg:col-span-7 xl:col-span-8 space-y-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        noValidate
      >
        {/* 01 Duration */}
        <div data-field="durationDays">
          <StepNumber n={1} />
          <DurationSelector
            value={values.durationDays}
            onChange={handleDurationChange}
            disabled={isDisabled}
          />
        </div>

        {/* 02 Origin Province */}
        <div data-field="originProvinceId">
          <StepNumber n={2} />
          <OriginProvinceCombobox
            value={values.originProvinceId}
            onChange={handleOriginChange}
            disabled={isDisabled}
            error={getFieldError("originProvinceId")}
          />
        </div>

        {/* 03 Destination Region */}
        <div data-field="destinationRegionId">
          <StepNumber n={3} />
          <DestinationRegionSelector
            value={values.destinationRegionId}
            onChange={handleRegionChange}
            disabled={isDisabled}
            error={getFieldError("destinationRegionId")}
          />
        </div>

        {/* 04 Interests */}
        <div data-field="interests">
          <StepNumber n={4} />
          <InterestSelector
            value={values.interests}
            onChange={handleInterestsChange}
            disabled={isDisabled}
            error={getFieldError("interests")}
          />
        </div>

        {/* 05 Budget */}
        <div data-field="budgetLevel">
          <StepNumber n={5} />
          <BudgetSelector
            value={values.budgetLevel}
            onChange={handleBudgetChange}
            disabled={isDisabled}
          />
        </div>

        {/* 06 Travel Pace */}
        <div data-field="travelPace">
          <StepNumber n={6} />
          <TravelPaceSelector
            value={values.travelPace}
            onChange={handlePaceChange}
            disabled={isDisabled}
          />
        </div>

        {/* Mobile/Tablet CTA (shown below form on small screens) */}
        <div className="lg:hidden">
          <PreferenceSummary
            values={values}
            status={status}
            isValid={formIsValid}
            onReset={handleReset}
            onSubmit={handleSubmit}
          />
        </div>
      </form>

      {/* Desktop Sticky Summary */}
      <aside className="hidden lg:block lg:col-span-5 xl:col-span-4">
        <div className="sticky top-28" style={{ maxHeight: "calc(100vh - 140px)" }}>
          <PreferenceSummary
            values={values}
            status={status}
            isValid={formIsValid}
            onReset={handleReset}
            onSubmit={handleSubmit}
          />
        </div>
      </aside>
    </div>
  );
}

// ─── Step Number Badge ───────────────────────────────────────────────────────

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F8F4EA] border border-[#E8E0CE] font-inter text-[12px] font-semibold text-[#9DAEC2] mb-3">
      {String(n).padStart(2, "0")}
    </span>
  );
}
