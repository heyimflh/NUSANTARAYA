"use client";
import { navigateToRouteSection } from "@/lib/routes/navigateToRouteSection";
import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";
import type { RouteAdjustmentDraft } from "@/lib/routes/save-rani/types";
import { isDraftStale } from "@/lib/routes/save-rani/resolveRouteAdjustment";
import { validateItineraryAgainstRecommendation } from "@/lib/routes/itinerary/resolveRouteItinerary";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Info } from "lucide-react";
import type {
  RoutePlannerFormValues,
  RoutePlannerStatus,
  RouteRecommendation,
  RoutePlannerSource
} from "@/types/route-planner";
import { DEFAULT_FORM_VALUES } from "@/types/route-planner";
import {
  validateFormValues,
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
import { PresetRoutesSection } from "@/components/routes/preset-routes";
import { mapPresetToPlannerValues } from "@/lib/routes/presetRouteHelpers";
import { presetToRecommendation, RoutePresetDefinition, ROUTE_PRESETS } from "@/data/routes/routePresets";
import { RouteRecommendationResultSection } from "@/components/routes/route-result";

// Core UI
import { PlannerIntroSection } from "./PlannerIntroSection";
import { RoutePlannerStepper } from "./RoutePlannerStepper";
import { RouteImpactPreview } from "./RouteImpactPreview";
import { StepNavigation } from "./StepNavigation";
import { PlannerLiveRegion, announcer } from "./PlannerLiveRegion";

// Steps
import { PlannerStep1 } from "./PlannerStep1";
import { PlannerStep2 } from "./PlannerStep2";
import { PlannerStep3Review } from "./PlannerStep3Review";

export function RouteAtelier() {
  // ─── Form State ───
  const [values, setValues] = useState<RoutePlannerFormValues>(DEFAULT_FORM_VALUES);
  const [status, setStatus] = useState<RoutePlannerStatus>("idle");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  // ─── Journey/RANI Context ───
  const [activeJourneyId, setActiveJourneyId] = useState<string | null>(null);
  const [activeSource, setActiveSource] = useState<string>("routes-page");
  
  // ─── Atelier State (Unified 3 steps) ───
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [prefillMessage, setPrefillMessage] = useState<string | null>(null);
  const [result, setResult] = useState<RouteRecommendation | null>(null);
    const [activeItinerary, setActiveItinerary] = useState<import("@/lib/routes/itinerary/routeItinerarySchema").RouteItinerary | null>(null);
    const [previousState, setPreviousState] = useState<{ result: RouteRecommendation, itinerary: import("@/lib/routes/itinerary/routeItinerarySchema").RouteItinerary | null } | null>(null);
  const [adjustmentNote, setAdjustmentNote] = useState<string | null>(null);
  const [resultSource, setResultSource] = useState<"form" | "preset" | "url">("form");
  const [focusOnReveal, setFocusOnReveal] = useState(false);

  const draftTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const hydratedRef = useRef(false);
  
  // ─── Hydration ───
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    const { values: urlValues, source, journeyId } = parsePlannerQuery(searchParams);
    const hasUrlParams = Object.keys(urlValues).length > 0;
    
    setTimeout(() => {
      if (source && source !== activeSource) {
        setActiveSource(source);
      }
      if (journeyId && journeyId !== activeJourneyId) {
        setActiveJourneyId(journeyId);
      }
    }, 0);

    if (hasUrlParams) {
      const merged = sanitizeFormValues({ ...DEFAULT_FORM_VALUES, ...urlValues });
      setTimeout(() => {
        setValues(merged);
        if (merged.destinationRegionId && merged.interests.length > 0) {
          setActiveStep(3);
        }
      }, 0);
      trackRoutePlannerEvent("route_planner_prefilled", {
        source,
        journeyId,
        ...buildAnalyticsPayload(merged),
      });
    } else {
      const draft = loadDraft();
      if (draft) setValues(draft);
    }
    
    // Check for preset in URL
    const presetId = searchParams.get("preset");
    if (presetId) {
      const preset = ROUTE_PRESETS.find(p => p.id === presetId);
      if (preset) {
        const rec = presetToRecommendation(preset, "exact-preset");
        setResult(rec);
        setStatus("success");
        setResultSource("url");
        setFocusOnReveal(false); // restored — don't steal focus
      }
    }

    setHydrated(true);
    trackRoutePlannerEvent("route_planner_form_viewed");
  }, [searchParams, activeSource, activeJourneyId]);

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

  // ─── Validation ───
  const isStep1Valid = values.destinationRegionId !== null;
  const isStep2Valid = values.interests.length >= 1;
  const formIsValid = isStep1Valid && isStep2Valid;

  const currentStepValidationReason = useMemo(() => {
    if (activeStep === 1 && !isStep1Valid) return "Lengkapi wilayah tujuan untuk melanjutkan.";
    if (activeStep === 2 && !isStep2Valid) return "Pilih minimal 1 minat untuk melanjutkan.";
    return null;
  }, [activeStep, isStep1Valid, isStep2Valid]);

  const updateField = useCallback(
    <K extends keyof RoutePlannerFormValues>(field: K, value: RoutePlannerFormValues[K]) => {
      if (!hasInteracted) {
        setHasInteracted(true);
        trackRoutePlannerEvent("route_planner_started");
      }
      setValues((prev) => ({ ...prev, [field]: value }));
    },
    [hasInteracted]
  );

  const handleReset = useCallback(() => {
    setValues(DEFAULT_FORM_VALUES);
    setStatus("idle");
    setResult(null);
      setActiveItinerary(null);
      setPreviousState(null);
    setAdjustmentNote(null);
    setResultSource("form");
    setFocusOnReveal(false);
    setActiveStep(1);
    clearDraft();
    trackRoutePlannerEvent("route_planner_reset");
    announcer.announce("Perencana rute diatur ulang ke awal.");
    
    // Clear preset from URL if exists
    const qs = buildPlannerQueryString(DEFAULT_FORM_VALUES, activeSource as RoutePlannerSource, activeJourneyId || undefined);
    router.replace(`/routes${qs}`, { scroll: false });
    
    setTimeout(() => {
      navigateToRouteSection("planner");
    }, 50);
  }, [router, activeSource, activeJourneyId]);

  const handlePrefillFromPreset = useCallback((preset: RoutePresetDefinition) => {
    const newValues = mapPresetToPlannerValues(preset, values);
    setValues(newValues);
    setHasInteracted(true);
    setResult(null);
      setActiveItinerary(null);
      setPreviousState(null);
    setActiveSource("preset-route");
    trackRoutePlannerEvent("route_planner_prefilled", {
      source: "preset-route",
      presetId: preset.id,
      ...buildAnalyticsPayload(newValues),
    });
    
    // Remove preset result from URL since we are now editing the form
    const qs = buildPlannerQueryString(newValues, "preset-route", activeJourneyId || undefined);
    router.replace(`/routes${qs}`, { scroll: false });

    announcer.announce(`Preferensi diisi dari rute: ${preset.title}. Anda dapat meninjaunya di form.`);
    setTimeout(() => {
      navigateToRouteSection("planner");
    }, 50);
  }, [values, router, activeJourneyId]);

  const handleViewRoute = useCallback((preset: RoutePresetDefinition) => {
    const rec = presetToRecommendation(preset, "exact-preset");
    setResult(rec);
    setStatus("success");
    setResultSource("preset");
    setFocusOnReveal(true);
    trackRoutePlannerEvent("preset_route_opened", {
      presetId: preset.id,
      destinationRegionId: preset.regionId,
      durationDays: preset.durationDays,
    });
    
    // Update URL to include the preset
    const qs = buildPlannerQueryString(values, activeSource as RoutePlannerSource, activeJourneyId || undefined);
    const newQs = qs ? `${qs}&preset=${preset.id}` : `?preset=${preset.id}`;
    router.push(`/routes${newQs}`, { scroll: false });
    
    announcer.announce(`Membuka rute: ${preset.title}`);
    requestAnimationFrame(() => {
      navigateToRouteSection("result");
    });
  }, [values, router, activeSource, activeJourneyId]);

  const handleApplyRaniDraft = useCallback((draft: RouteAdjustmentDraft) => {
    if (!result || !activeItinerary) {
      announcer.announce("Rute aktif belum siap untuk disesuaikan.", "assertive");
      return;
    }

    if (draft.status !== "valid") {
      announcer.announce("Draft penyesuaian tidak valid dan tidak dapat diterapkan.", "assertive");
      return;
    }

    if (isDraftStale(draft, result.id, result.version, activeItinerary.version)) {
      announcer.announce("Draft sudah usang. Buat ulang preview RANI.", "assertive");
      return;
    }

    const validationErrors = validateItineraryAgainstRecommendation(
      draft.proposedItinerary,
      draft.proposedRoute
    );

    if (validationErrors.length > 0) {
      announcer.announce("Penyesuaian gagal karena itinerary tidak konsisten.", "assertive");
      return;
    }

    setPreviousState({
      result,
      itinerary: activeItinerary,
    });
    setResult(draft.proposedRoute);
    setActiveItinerary(draft.proposedItinerary);
    setStatus("success");
    setAdjustmentNote(`Rute disesuaikan: ${draft.summary}`);
    announcer.announce(`Draft diterapkan: ${draft.summary}`, "polite");
  }, [result, activeItinerary]);

  const handleSubmit = useCallback((e?: React.FormEvent) => {
    if (e) e.preventDefault();
    trackRoutePlannerEvent("route_generate_clicked", buildAnalyticsPayload(values));
    const validationErrors = validateFormValues(values);
    if (validationErrors.length > 0) {
      trackRoutePlannerEvent("route_generate_validation_failed");
      announcer.announce("Gagal membuat rute. Periksa kembali form Anda.", "assertive");
      return;
    }

    setStatus("loading");
    saveDraft(values);
    trackRoutePlannerEvent("route_generate_started", buildAnalyticsPayload(values));
    announcer.announce("Menyusun rute perjalanan Anda. Mohon tunggu.", "polite");

    try {
      const res = matchRoutePreset(values);
      if (res.status === "matched") {
        setStatus(res.metadata.matchType === "fallback-preset" ? "fallback" : "success");
        setResult(res.recommendation);
        setAdjustmentNote(res.metadata.reason);
        setResultSource("form");
        setFocusOnReveal(true);
        trackRoutePlannerEvent(
          res.metadata.matchType === "fallback-preset" ? "route_generate_fallback_used" : "route_generate_succeeded",
          { ...buildAnalyticsPayload(values), matchType: res.metadata.matchType || undefined }
        );
        announcer.announce(`Rute berhasil dibuat: ${res.recommendation.title}`, "polite");
      } else {
        setStatus("fallback");
        setResult(null);
      setActiveItinerary(null);
      setPreviousState(null);
        setAdjustmentNote(res.metadata.reason);
        setResultSource("form");
        setFocusOnReveal(true);
        announcer.announce("Tidak ada rute yang cocok.", "polite");
      }
    } catch {
      setStatus("error");
      setResult(null);
      setActiveItinerary(null);
      setPreviousState(null);
      setAdjustmentNote("Terjadi kesalahan sistem saat mencari rute.");
      setResultSource("form");
      setFocusOnReveal(true);
      announcer.announce("Terjadi kesalahan sistem.", "assertive");
    }
    
    // Remove any preset ID from URL when generating from form
    const qs = buildPlannerQueryString(values, activeSource as RoutePlannerSource, activeJourneyId || undefined);
    router.push(`/routes${qs}`, { scroll: false });
    
    // Focus management — scroll to result section, focus after animation
    requestAnimationFrame(() => {
      navigateToRouteSection("result");
    });
  }, [values, router, activeSource, activeJourneyId]);

  const handleStepChange = useCallback((newStep: 1 | 2 | 3) => {
    if (newStep > activeStep) {
      if (activeStep === 1 && !isStep1Valid) return;
      if (activeStep === 2 && !isStep2Valid) return;
    }
    setActiveStep(newStep);
  }, [activeStep, isStep1Valid, isStep2Valid]);

  const plannerTokens = {
    "--planner-canvas": "#F4EFE6",
    "--planner-paper": "#FFFCF7",
    "--planner-paper-raised": "#FFF9F1",
    "--planner-sand": "#E7DED1",
    "--planner-warm-border": "#D9CDBC",
    "--planner-ink": "#27211C",
    "--planner-espresso": "#3A2B22",
    "--planner-earth": "#604C3E",
    "--planner-muted": "#75685D",
    "--planner-primary": "#C75B3C",
    "--planner-primary-hover": "#A9472F",
    "--planner-primary-soft": "#F5E1D8",
    "--planner-saffron": "#C59B43",
    "--planner-saffron-soft": "#F5EEDB",
    "--planner-moss": "#6E785E",
    "--planner-moss-soft": "#E3E5DF",
  } as React.CSSProperties;

  return (
    <section 
      id={ROUTE_SECTION_IDS.planner} 
      style={plannerTokens}
      className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--planner-canvas)] font-inter text-[var(--planner-ink)]"
    >


      <PlannerLiveRegion />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[600px] z-10 scroll-mt-32">
        <div className="flex flex-col animate-in fade-in duration-500">
                    {prefillMessage && (
            <div className="mb-6 p-4 rounded-xl bg-[var(--planner-saffron)]/10 border border-[var(--planner-saffron)]/30 text-[var(--planner-primary)] font-medium text-sm flex items-center gap-3 animate-in fade-in">
              <Info className="w-5 h-5 shrink-0" />
              <span>{prefillMessage}</span>
            </div>
          )}
          <PlannerIntroSection />

          {(activeJourneyId || activeSource === "rani") && (
            <div className="mb-10 p-5 bg-[var(--planner-saffron-soft)]/50 border border-[var(--planner-saffron)]/40 flex items-start gap-4 max-w-4xl mx-auto w-full relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[var(--planner-saffron)]">
              <Info className="w-5 h-5 text-[var(--planner-saffron)] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[var(--planner-ink)] text-[14px] font-bold tracking-wide uppercase mb-1">
                  {activeSource === "rani" ? "Melanjutkan dari RANI" : "Melanjutkan Journey"}
                </h4>
                <p className="text-[var(--planner-earth)] text-[14px] leading-relaxed">
                  Kerangka perjalananmu telah disusun dari eksplorasi sebelumnya. Silakan periksa atau ubah jika perlu.
                </p>
              </div>
            </div>
          )}

          <form 
            className="w-full max-w-5xl mx-auto flex flex-col gap-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <RoutePlannerStepper 
              currentStep={activeStep} 
              onStepChange={handleStepChange} 
              isStep1Valid={isStep1Valid}
              isStep2Valid={isStep2Valid}
            />

            {/* Main Form Surface */}
            <div className="flex flex-col lg:flex-row flex-wrap items-start relative gap-8 xl:gap-10">
              
              {/* Form Content Panel */}
              <div className="flex-1 w-full flex flex-col bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] rounded-3xl shadow-[0_8px_32px_rgba(58,43,34,0.03)] overflow-hidden min-h-[500px]">
                <div className="flex-1 p-6 sm:p-8 lg:p-10">
                  {activeStep === 1 && (
                    <PlannerStep1 values={values} updateField={updateField} />
                  )}
                  {activeStep === 2 && (
                    <PlannerStep2 values={values} updateField={updateField} />
                  )}
                  {activeStep === 3 && (
                    <PlannerStep3Review values={values} onEditStep={setActiveStep} />
                  )}
                </div>

                <div className="mt-auto pt-6 sm:pt-8 sm:border-t sm:border-[var(--planner-warm-border)]/60 px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10">
                  <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md p-4 border-t border-[var(--planner-warm-border)] sm:static sm:bg-transparent sm:backdrop-blur-none sm:p-0 sm:border-none shadow-[0_-4px_24px_rgba(0,0,0,0.06)] sm:shadow-none transition-all">
                    <StepNavigation 
                      currentStep={activeStep}
                      onNext={() => handleStepChange((activeStep + 1) as 2 | 3)}
                      onBack={() => handleStepChange((activeStep - 1) as 1 | 2)}
                      onSubmit={handleSubmit}
                      isStepValid={activeStep === 1 ? isStep1Valid : activeStep === 2 ? isStep2Valid : formIsValid}
                      validationReason={currentStepValidationReason}
                      isLoading={status === "loading"}
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Preview Panel */}
              <div className="hidden lg:block w-[320px] xl:w-[340px] shrink-0 sticky top-32">
                <RouteImpactPreview values={values} activeStep={activeStep} />
              </div>
            </div>
            
            {/* Mobile Dynamic Preview */}
            <div className="lg:hidden w-full mt-4">
              <RouteImpactPreview values={values} activeStep={activeStep} />
            </div>
          </form>

          {/* Section 3: Popular / Preset Routes */}
          <PresetRoutesSection 
            currentFormValues={values}
            onViewRoute={handleViewRoute}
            onPrefill={handlePrefillFromPreset}
            activePresetId={result?.id}
          />
          
          {/* Section 4: Route Recommendation Result */}
          <div className="w-full max-w-7xl mx-auto pt-16 mt-8">
            <RouteRecommendationResultSection
              result={result}
              activeItinerary={activeItinerary}
              status={status}
              adjustmentNote={adjustmentNote}
              values={values}
              resultSource={resultSource}
              onEdit={() => setActiveStep(1)}
              onReset={handleReset}
              focusOnReveal={focusOnReveal}
              onApplyDraft={handleApplyRaniDraft}
              onUndoDraft={() => {
                if (previousState) {
                  setResult(previousState.result);
                  setActiveItinerary(previousState.itinerary);
                  setPreviousState(null);
                  setAdjustmentNote("Perubahan rute dibatalkan.");
                  announcer.announce("Perubahan rute berhasil dibatalkan.", "polite");
                }
              }}
              canUndo={!!previousState}
            />
          </div>
        </div>
      </div>
    </section>
  );
}





