"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Info } from "lucide-react";
import type {
  RoutePlannerFormValues,
  RoutePlannerStatus,
  RoutePlannerValidationError,
  RouteRecommendation,
} from "@/types/route-planner";
import { DEFAULT_FORM_VALUES } from "@/types/route-planner";
import {
  validateFormValues,
  isFormValid,
  parsePlannerQuery,
  buildPlannerQueryString,
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

// Component placeholders for later implementation
import { RouteJourneyRail } from "./RouteJourneyRail";
import { RouteComposerStage1 } from "./RouteComposerStage1";
import { RouteComposerStage2 } from "./RouteComposerStage2";
import { JourneyDraft } from "./JourneyDraft";
import { RouteLiveCanvas } from "./RouteLiveCanvas";
import { RouteReveal } from "./RouteReveal";
import { MobileRouteNavigation } from "./MobileRouteNavigation";
import { MobileRouteProgress } from "./MobileRouteProgress";

export function RouteAtelier() {
  // ─── Form State ───
  const [values, setValues] = useState<RoutePlannerFormValues>(DEFAULT_FORM_VALUES);
  const [status, setStatus] = useState<RoutePlannerStatus>("idle");
  const [errors, setErrors] = useState<RoutePlannerValidationError[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  
  // ─── Journey/RANI Context ───
  const [activeJourneyId, setActiveJourneyId] = useState<string | null>(null);
  const [activeSource, setActiveSource] = useState<string>("routes-page");
  
  // ─── Atelier State ───
  // Desktop stages: 1 (Bentuk), 2 (Karakter), 3 (Review)
  // Mobile questions: 1 to 6, 7 (Review)
  const [desktopStage, setDesktopStage] = useState<1 | 2 | 3>(1);
  const [mobileStep, setMobileStep] = useState<number>(1);
  const [result, setResult] = useState<RouteRecommendation | null>(null);
  const [adjustmentNote, setAdjustmentNote] = useState<string | null>(null);

  const draftTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // ─── Hydration ───
  useEffect(() => {
    const { values: urlValues, source, journeyId } = parsePlannerQuery(searchParams);
    const hasUrlParams = Object.keys(urlValues).length > 0;

    if (source && source !== activeSource) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSource(source);
    }
    if (journeyId && journeyId !== activeJourneyId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveJourneyId(journeyId);
    }

    if (hasUrlParams) {
      const merged = sanitizeFormValues({ ...DEFAULT_FORM_VALUES, ...urlValues });
      setValues(merged);
      trackRoutePlannerEvent("route_planner_prefilled", {
        source,
        journeyId,
        ...buildAnalyticsPayload(merged),
      });
      // If prefilled heavily, maybe advance stage?
      if (merged.destinationRegionId && merged.interests.length > 0) {
        setDesktopStage(3);
        setMobileStep(7);
      }
    } else {
      const draft = loadDraft();
      if (draft) setValues(draft);
    }
    setHydrated(true);
    trackRoutePlannerEvent("route_planner_form_viewed");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── URL Sync ───
  useEffect(() => {
    if (!hydrated || !hasInteracted) return;
    if (draftTimerRef.current) clearTimeout(draftTimerRef.current);
    draftTimerRef.current = setTimeout(() => {
      saveDraft(values);
      const qs = buildPlannerQueryString(values, activeSource as RoutePlannerSource, activeJourneyId || undefined);
      router.replace(`/routes${qs}`, { scroll: false });
    }, 400);
    return () => {
      if (draftTimerRef.current) clearTimeout(draftTimerRef.current);
    };
  }, [values, hydrated, hasInteracted, router, activeSource, activeJourneyId]);

  const formIsValid = useMemo(() => isFormValid(values), [values]);

  const updateField = useCallback(
    <K extends keyof RoutePlannerFormValues>(field: K, value: RoutePlannerFormValues[K]) => {
      if (!hasInteracted) {
        setHasInteracted(true);
        trackRoutePlannerEvent("route_planner_started");
      }
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => prev.filter((e) => e.field !== field));
    },
    [hasInteracted]
  );

  const handleReset = useCallback(() => {
    setValues(DEFAULT_FORM_VALUES);
    setErrors([]);
    setStatus("idle");
    setResult(null);
    setDesktopStage(1);
    setMobileStep(1);
    clearDraft();
    trackRoutePlannerEvent("route_planner_reset");
    setTimeout(() => {
      document.getElementById("route-atelier")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  const handleSubmit = useCallback(() => {
    trackRoutePlannerEvent("route_generate_clicked", buildAnalyticsPayload(values));
    const validationErrors = validateFormValues(values);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      trackRoutePlannerEvent("route_generate_validation_failed");
      return;
    }

    setErrors([]);
    setStatus("loading");
    saveDraft(values);
    trackRoutePlannerEvent("route_generate_started", buildAnalyticsPayload(values));

    setTimeout(() => {
      try {
        const res = matchRoutePreset(values);
        setStatus(res.recommendation.matchType === "fallback" ? "fallback" : "success");
        setResult(res.recommendation);
        setAdjustmentNote(res.adjustmentNote);
        trackRoutePlannerEvent(
          res.recommendation.matchType === "fallback" ? "route_generate_fallback_used" : "route_generate_succeeded",
          { ...buildAnalyticsPayload(values), matchType: res.recommendation.matchType }
        );
      } catch {
        const fallback = matchRoutePreset(DEFAULT_FORM_VALUES);
        setStatus("fallback");
        setResult(fallback.recommendation);
        setAdjustmentNote(fallback.adjustmentNote);
      }
      setTimeout(() => {
        document.getElementById("route-reveal-heading")?.focus();
        document.getElementById("route-reveal-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 800);
  }, [values]);

  const atelierTokens = {
    "--route-canvas": "#F3EEE4",
    "--route-paper": "#FFFDF8",
    "--route-surface": "#E9DFCF",
    "--route-ink": "#29221B",
    "--route-earth": "#3A2B22",
    "--route-muted": "#76685B",
    "--route-primary": "#C65D3B",
    "--route-primary-hover": "#A8442C",
    "--route-saffron": "#D6A33D",
    "--route-moss": "#63724D",
    "--route-sea-glass": "#8AB4A5",
    "--route-border": "#D8CBB8",
  } as React.CSSProperties;

  return (
    <section 
      id="route-atelier" 
      style={atelierTokens}
      className="relative w-full py-16 md:py-24 bg-[var(--route-canvas)] font-inter text-[var(--route-ink)]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[600px]">
        {result ? (
          <div tabIndex={-1} id="route-reveal-heading" className="outline-none">
            <RouteReveal 
              result={result} 
              adjustmentNote={adjustmentNote}
              onEdit={() => {
                setResult(null);
                setTimeout(() => document.getElementById("route-atelier")?.scrollIntoView({ behavior: "smooth" }), 50);
              }}
              onReset={handleReset} 
              values={values}
            />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 animate-in fade-in duration-500">
            {(activeJourneyId || activeSource === "rani") && (
              <div className="absolute top-0 left-4 right-4 lg:left-8 lg:right-8 -mt-6 z-10 p-4 rounded-xl bg-[var(--route-saffron)]/10 border border-[var(--route-saffron)]/30 flex gap-3 backdrop-blur-sm">
                <Info className="w-5 h-5 text-[var(--route-saffron)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[var(--route-ink)] text-[14px] font-semibold mb-1">
                    {activeSource === "rani" ? "Melanjutkan dari RANI" : "Melanjutkan Journey"}
                  </h4>
                  <p className="text-[var(--route-muted)] text-[13px] leading-relaxed">
                    Kerangka perjalananmu telah disusun dari eksplorasi sebelumnya.
                  </p>
                </div>
              </div>
            )}

            <div className="hidden lg:block w-64 shrink-0">
              <RouteJourneyRail 
                stage={desktopStage} 
                onStageChange={setDesktopStage}
                values={values}
              />
            </div>

            <div className="hidden lg:flex flex-1 gap-8 xl:gap-12">
              <div className="flex-1 max-w-xl py-6">
                {desktopStage === 1 && (
                  <RouteComposerStage1 
                    values={values} 
                    updateField={updateField} 
                    onNext={() => setDesktopStage(2)}
                  />
                )}
                {desktopStage === 2 && (
                  <RouteComposerStage2 
                    values={values} 
                    updateField={updateField} 
                    onNext={() => setDesktopStage(3)}
                    onBack={() => setDesktopStage(1)}
                  />
                )}
                {desktopStage === 3 && (
                  <JourneyDraft 
                    values={values} 
                    onEditStage={setDesktopStage}
                    onSubmit={handleSubmit}
                    isLoading={status === "loading"}
                  />
                )}
              </div>
              <div className="flex-1 relative">
                <RouteLiveCanvas values={values} />
              </div>
            </div>

            <div className="lg:hidden flex flex-col w-full">
              <MobileRouteProgress step={mobileStep} totalSteps={7} />
              <div className="py-8">
                {mobileStep <= 3 && (
                  <RouteComposerStage1 
                    values={values} 
                    updateField={updateField} 
                    mobileStep={mobileStep}
                  />
                )}
                {mobileStep >= 4 && mobileStep <= 6 && (
                  <RouteComposerStage2 
                    values={values} 
                    updateField={updateField} 
                    mobileStep={mobileStep}
                  />
                )}
                {mobileStep === 7 && (
                  <JourneyDraft 
                    values={values} 
                    onEditStage={(s) => setMobileStep(s === 1 ? 1 : 4)}
                    onSubmit={handleSubmit}
                    isLoading={status === "loading"}
                    isMobile={true}
                  />
                )}
              </div>
              <MobileRouteNavigation 
                step={mobileStep} 
                totalSteps={7}
                onNext={() => setMobileStep(m => Math.min(m + 1, 7))}
                onBack={() => setMobileStep(m => Math.max(m - 1, 1))}
                isValid={formIsValid}
                onSubmit={handleSubmit}
                isLoading={status === "loading"}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
