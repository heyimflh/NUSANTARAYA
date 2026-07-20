"use client";
import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";
import type { RouteAdjustmentDraft } from "@/lib/routes/save-rani/types";

/**
 * RouteRecommendationResultSection — Section 4
 * The full Route Recommendation Result dossier.
 *
 * Position: after Popular/Preset Routes, before Day-by-Day Itinerary.
 * Anchor: #route-recommendation-result
 * Semantics: <section aria-labelledby="route-result-title">
 *
 * States handled:
 * - PRISTINE (null result): not rendered / hidden
 * - LOADING: RouteResultSkeleton
 * - DYNAMIC_SUCCESS, PRESET_SUCCESS: full dossier
 * - FALLBACK: full dossier + fallback disclosure
 * - ADJUSTED: full dossier + adjustment note
 * - RESTORED: full dossier + restored label
 * - ERROR: RouteResultErrorState
 *
 * Layout:
 * - Desktop ≥1024: split 5/7 (visual | content)
 * - Tablet 768–1023: stacked visual above content
 * - Mobile <768: single column
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { RouteRecommendation, RoutePlannerFormValues, RoutePlannerStatus } from "@/types/route-planner";
import { deriveRouteMatchType } from "@/lib/routes/routeResultHelpers";
import { trackRoutePlannerEvent } from "@/lib/routes/routePlannerAnalytics";
import { useLanguage, usePassport } from "@/context/app-context";
import { useActiveRouteWorkspace } from "@/hooks/useActiveRouteWorkspace";

// Sub-components
import { RouteResultSkeleton } from "./RouteResultSkeleton";
import { RouteResultErrorState } from "./RouteResultErrorState";
import { RouteResultStatusBar } from "./RouteResultStatusBar";
import { RouteResultVisual } from "./RouteResultVisual";
import { RouteResultHeader } from "./RouteResultHeader";
import { RouteReasonPanel } from "./RouteReasonPanel";
import { PreferenceMatchSummary } from "./PreferenceMatchSummary";
import { RouteOverviewRibbon } from "./RouteOverviewRibbon";
import { RouteResultMetadata } from "./RouteResultMetadata";
import { RouteResultActions } from "./RouteResultActions";
import { RouteResultDisclosure } from "./RouteResultDisclosure";
import { DayByDayItinerarySection } from "@/components/routes/day-by-day-itinerary/DayByDayItinerarySection";
import dynamic from "next/dynamic";
const RouteMapTransportSection = dynamic(() => import("@/components/routes/route-map-transport").then(m => m.RouteMapTransportSection), { ssr: false, loading: () => <div className="min-h-[500px] w-full bg-surface-50 animate-pulse flex items-center justify-center rounded-2xl border border-surface-200"><p className="text-surface-500 font-medium font-sans">Memuat Peta Perjalanan...</p></div> });
import { RouteReadinessSection } from "@/components/routes/route-readiness";
const RouteSaveRaniSection = dynamic(() => import("@/components/routes/route-save-rani").then(m => m.RouteSaveRaniSection), { ssr: true, loading: () => <div className="min-h-[200px] w-full bg-surface-50 animate-pulse flex items-center justify-center rounded-2xl border border-surface-200"><p className="text-surface-500 font-medium font-sans">Menyiapkan Asisten RANI...</p></div> });

interface RouteRecommendationResultSectionProps {
  result: RouteRecommendation | null;
  activeItinerary: import("@/lib/routes/itinerary/routeItinerarySchema").RouteItinerary | null;
  status: RoutePlannerStatus;
  adjustmentNote: string | null;
  values: RoutePlannerFormValues;
  resultSource: "form" | "preset" | "url";
  onEdit: () => void;
  onReset: () => void;
  /** When true, this was an explicit user submit (focus heading) */
  focusOnReveal?: boolean;
  onApplyDraft?: (draft: RouteAdjustmentDraft) => void;
  onUndoDraft?: () => void;
  canUndo?: boolean;
}

export function RouteRecommendationResultSection({
  result,
  activeItinerary,
  status,
  adjustmentNote,
  values,
  resultSource,
  onEdit,
  onReset,
  focusOnReveal = false,
  onApplyDraft,
  onUndoDraft,
  canUndo = false,
}: RouteRecommendationResultSectionProps) {
  const { language } = useLanguage();
  const { passport } = usePassport();
  const locale = language as "id" | "en";
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isPresetSource = resultSource === "preset";

  const workspace = useActiveRouteWorkspace(
    status === "success" || status === "fallback" ? result : null,
    activeItinerary,
    values,
    passport,
    resultSource,
    locale
  );

  // ── Section 6 state: resolved itinerary + bidirectional selection ──
  // Selection from itinerary → map
  const [mapExternalSelection, setMapExternalSelection] = useState<{
    dayNumber: number;
    dayId: string;
    stopId?: string;
    segmentIds?: string[];
  } | null>(null);
  // Selection from map → itinerary (day number to open)
  const [itineraryExternalDay, setItineraryExternalDay] = useState<number | null>(null);

  const handleViewInMap = useCallback((context: {
    dayNumber: number;
    dayId: string;
    stopId?: string;
    segmentIds?: string[];
  }) => {
    setMapExternalSelection(context);
  }, []);

  const handleViewInItinerary = useCallback((dayNumber: number) => {
    setItineraryExternalDay(dayNumber);
    // Reset after a tick so it can be re-triggered with same day
    setTimeout(() => setItineraryExternalDay(null), 500);
  }, []);

  // Reset section 6 state when result changes
  useEffect(() => {
    setMapExternalSelection(null);
    setItineraryExternalDay(null);
  }, [workspace.activeRouteKey]);

  // ── Focus management: only focus after explicit submit ──
  useEffect(() => {
    if (focusOnReveal && result && status !== "loading" && headingRef.current) {
      // Small delay to let animation settle
      const id = setTimeout(() => {
        headingRef.current?.focus();
      }, 400);
      return () => clearTimeout(id);
    }
  }, [result, status, focusOnReveal]);

  // ── Analytics: track when result is viewed ──
  useEffect(() => {
    if (!result || status === "loading") return;
    trackRoutePlannerEvent("route_result_viewed");
    if (status === "fallback") {
      trackRoutePlannerEvent("route_result_fallback_loaded");
    } else if (resultSource === "preset") {
      trackRoutePlannerEvent("route_result_preset_loaded");
    } else {
      trackRoutePlannerEvent("route_result_dynamic_loaded");
    }
  }, [result?.id, status]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── PRISTINE: return null — no fake personal recommendation ──
  if (!result && status === "idle") {
    return null;
  }

  // ── LOADING ──
  if (status === "loading") {
    return <RouteResultSkeleton isPreset={isPresetSource} />;
  }

  // ── ERROR ──
  if (status === "error" && !result) {
    return (
      <RouteResultErrorState
        onRetry={onReset}
        onEdit={onEdit}
        locale={locale}
      />
    );
  }

  // ── No result but not loading/error — shouldn't happen but guard ──
  if (!result) return null;

  // ── Derive match type from status + recommendation ──
  const matchType = deriveRouteMatchType(status, result, resultSource);
  const isAdjusted = !!adjustmentNote && matchType !== "fallback-preset";

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={result.id}
        id={ROUTE_SECTION_IDS.result}
        aria-labelledby="route-result-title"
        className="w-full scroll-mt-32"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Dossier card — Editorial Style */}
        <div className="w-full rounded-[36px] bg-[#FFFDF8] border border-[#E8E0CE] p-6 md:p-8 lg:p-12 shadow-[0_8px_32px_rgba(13,27,42,0.04)] relative">

          {/* Status bar */}
          <div className="flex items-center gap-3 mb-8 lg:mb-10">
            <RouteResultStatusBar
              matchType={matchType}
              isAdjusted={isAdjusted}
              locale={locale}
            />
          </div>

          {/* Main dossier: Editorial Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

            {/* LEFT PANEL: Visual + Route Ribbon */}
            <div className="lg:w-2/5 flex flex-col gap-6 lg:gap-8">
              <RouteResultVisual result={result} locale={locale} />

              {/* Route ribbon below visual on desktop, inside content on mobile */}
              <div className="hidden lg:block pt-6 border-t border-[#E8E0CE]">
                <RouteOverviewRibbon result={result} locale={locale} />
              </div>
            </div>

            {/* RIGHT PANEL: Content */}
            <div className="lg:w-3/5 flex flex-col gap-8 lg:gap-10">

              {/* Header: eyebrow + title + promise */}
              {/* Attach ref for focus management */}
              <div ref={headingRef as React.RefObject<HTMLDivElement>}>
                <RouteResultHeader result={result} locale={locale} />
              </div>

              {/* Route ribbon — mobile only (above reason) */}
              <div className="lg:hidden">
                <RouteOverviewRibbon result={result} locale={locale} />
              </div>

              {/* Expert's Note / Why recommended */}
              <RouteReasonPanel result={result} values={values} locale={locale} />

              {/* Travel Profile (Metadata + Preference Match) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-[#E8E0CE] py-8">
                <PreferenceMatchSummary result={result} values={values} locale={locale} />
                <RouteResultMetadata result={result} values={values} locale={locale} />
              </div>

              {/* Actions & Disclosures */}
              <div className="flex flex-col gap-6 pt-2">
                <RouteResultActions
                  result={result}
                  values={values}
                  onEdit={onEdit}
                  onReset={onReset}
                  locale={locale}
                />
                <RouteResultDisclosure
                  matchType={matchType}
                  adjustmentNote={adjustmentNote}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Day-by-day itinerary section */}
        <div className="w-full">
          <DayByDayItinerarySection
            result={workspace.recommendation}
            status={workspace.status}
            itinerary={workspace.itinerary}
            activeRouteKey={workspace.activeRouteKey}
            onViewInMap={handleViewInMap}
            externalActiveDay={itineraryExternalDay}
          />
        </div>

        {/* Section 6: Route Map + Transport Summary */}
        <div className="w-full">
          <RouteMapTransportSection
            result={workspace.recommendation}
            mapModel={workspace.mapModel}
            transportOptions={workspace.transportOptions}
            status={workspace.status}
            activeRouteKey={workspace.activeRouteKey}
            externalDaySelection={mapExternalSelection}
            onViewInItinerary={handleViewInItinerary}
          />
        </div>

        {/* Section 7: Travel Readiness Dossier (Budget, Culinary, Etiquette, Checklist) */}
        <div className="w-full">
          <RouteReadinessSection
            result={workspace.recommendation}
            dossier={workspace.readiness}
            status={workspace.status}
          />
        </div>

        {/* Section 8: Save to Passport + Ask RANI */}
        <div className="w-full">
          <RouteSaveRaniSection
            result={workspace.recommendation}
            itinerary={workspace.itinerary}
            values={values}
            savedRouteSnapshot={workspace.saveSnapshot}
            canSavePassport={workspace.canSavePassport}
            canUseRani={workspace.canUseRani}
            activeRouteKey={workspace.activeRouteKey}
            onApplyDraft={onApplyDraft ?? (() => {})}
            onUndoDraft={onUndoDraft ?? (() => {})}
            canUndo={canUndo}
          />
        </div>
      </motion.section>
    </AnimatePresence>
  );
}




