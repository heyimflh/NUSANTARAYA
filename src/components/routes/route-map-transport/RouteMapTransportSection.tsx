"use client";
import { scrollElementIntoView } from "@/lib/utils/scroll";
import { navigateToRouteSection } from "@/lib/routes/navigateToRouteSection";
import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";

/**
 * NUSANTARAYA — Route Map + Transport Summary Section
 * Section 6: /routes page
 *
 * Anchor: #route-map-transport-summary
 * Semantics: <section aria-labelledby="route-map-title">
 *
 * Orchestrates:
 * - RouteMapModel resolution from result + itinerary
 * - Schematic SVG canvas (not geographic — honest disclosure)
 * - Accessible ordered route list
 * - Transport summary panel (journey overview + transfers + checks)
 * - Two-way sync with Section 5 (Itinerary)
 * - Selection state + URL persistence
 * - Fallback: accessible list + summary if canvas unavailable
 * - Analytics events
 *
 * Source of truth rules:
 * - Map reads same routeId/routeVersion as Result
 * - Map reads same itineraryVersion as Itinerary
 * - Stop order from itinerary canonical stopIds
 * - Transport from itinerary transfer segments
 * - No data fabricated from map geometry or labels
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useId,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Map,
  ChevronRight,
  RotateCcw,
  AlertCircle,
  Info,
} from "lucide-react";
import { clsx } from "clsx";

import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import type {
  RouteMapModel,
  
  RouteMapStop,
  RouteMapSegment,
  RouteTransportOption,
  RouteMapSelection,
} from "@/types/route-map";

import { resolveRouteMap, getSchematicPosition } from "@/lib/routes/map/resolveRouteMap";
import { validateMapSelection } from "@/lib/routes/map/validateRouteMap";
import { ROUTE_MAP_STOP_DATA } from "@/data/routes/routeMapData";

import { RouteMapSchematicCanvas } from "./RouteMapSchematicCanvas";
import { AccessibleRouteList } from "./AccessibleRouteList";
import { TransportSummaryPanel } from "./TransportSummaryPanel";
import { RouteMapSkeleton } from "./RouteMapSkeleton";

import { useLanguage, useMode } from "@/context/app-context";
import { announcer } from "@/components/routes/route-planner-form/PlannerLiveRegion";

// ─── Analytics (no-op) ───────────────────────────────────────────────────────

function trackMapEvent(event: string, payload?: Record<string, unknown>): void {
  // No-op — extend routePlannerAnalytics when ready
  if (process.env.NODE_ENV === "development") {
    void event;
    void payload;
  }
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface RouteMapTransportSectionProps {
  result: RouteRecommendation | null;
  mapModel: RouteMapModel | null;
  transportOptions: RouteTransportOption[];
  status: "idle" | "resolving" | "ready" | "partial" | "error";
  activeRouteKey: string | null;
  /** Day selection signal from Section 5 */
  externalDaySelection?: {
    dayNumber: number;
    dayId: string;
    stopId?: string;
    segmentIds?: string[];
  } | null;
  onViewInItinerary?: (dayNumber: number) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function RouteMapTransportSection({
  result,
  mapModel,
  transportOptions,
  
  status,
  activeRouteKey,
  externalDaySelection,
  onViewInItinerary,
}: RouteMapTransportSectionProps) {
  const titleId = useId();
  const liveRegionId = useId();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const { language } = useLanguage();
  const { mode } = useMode();
  const locale = language as "id" | "en";

  // ─── Selection State ─────────────────────────────────────────────────────

  const [selection, setSelection] = useState<RouteMapSelection | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string | null>(null);

  // ─── Reset selection when route key changes ─────────────────────────

  useEffect(() => {
    setTimeout(() => {
      setSelection(null);
    }, 0);
  }, [activeRouteKey]);

  // ─── Apply external day selection from itinerary ─────────────────────────

  useEffect(() => {
    if (!externalDaySelection || !mapModel) return;

    const sel: RouteMapSelection = {
      routeId: mapModel.routeId,
      routeVersion: mapModel.routeVersion,
      itineraryVersion: mapModel.itineraryVersion,
      dayNumber: externalDaySelection.dayNumber,
      dayId: externalDaySelection.dayId,
      stopId: externalDaySelection.stopId,
      segmentIds: externalDaySelection.segmentIds ?? [],
      source: "itinerary",
    };

    setTimeout(() => {
      setSelection(sel);
    }, 0);

    // Scroll to map section
    const mapSection = document.getElementById("route-map-transport-summary");
    if (mapSection) {
      scrollElementIntoView(mapSection, { block: "start" });
    }

    // Announce selection after brief delay to let scroll settle
    const stop = mapModel.stops.find(
      (s) => s.id === externalDaySelection.stopId
    );
    const announcement = stop
      ? locale === "en"
        ? `Map focused on Stop ${stop.order}: ${stop.cityOrCluster}, Day ${stop.dayStart} to ${stop.dayEnd}.`
        : `Peta difokuskan ke Stop ${stop.order}: ${stop.cityOrCluster}, Hari ${stop.dayStart} sampai ${stop.dayEnd}.`
      : locale === "en"
      ? `Map focused on Day ${externalDaySelection.dayNumber}.`
      : `Peta difokuskan ke Hari ${externalDaySelection.dayNumber}.`;

    announcer.announce(announcement, "polite");
    setLiveAnnouncement(announcement);
  }, [externalDaySelection, mapModel, locale, announcer]);

  // ─── Selection Handlers ───────────────────────────────────────────────────

  const handleStopSelect = useCallback(
    (stopId: string) => {
      if (!mapModel) return;
      const stop = mapModel.stops.find((s) => s.id === stopId);
      if (!stop) return;

      const newSel: RouteMapSelection = {
        routeId: mapModel.routeId,
        routeVersion: mapModel.routeVersion,
        itineraryVersion: mapModel.itineraryVersion,
        stopId,
        dayNumber: stop.dayStart,
        segmentIds: mapModel.segments
          .filter((seg) => seg.fromStopId === stopId || seg.toStopId === stopId)
          .map((seg) => seg.id),
        source: "map",
      };
      setSelection(newSel);

      const msg =
        locale === "en"
          ? `Stop ${stop.order} selected: ${stop.cityOrCluster}.`
          : `Stop ${stop.order} dipilih: ${stop.cityOrCluster}.`;
      announcer.announce(msg, "polite");
      setLiveAnnouncement(msg);
      trackMapEvent("route_map_stop_selected", {
        routeId: mapModel.routeId,
        stopId,
      });
    },
    [mapModel,
   locale]
  );

  const handleSegmentSelect = useCallback(
    (segmentId: string) => {
      if (!mapModel) return;
      const seg = mapModel.segments.find((s) => s.id === segmentId);
      if (!seg) return;

      const newSel: RouteMapSelection = {
        routeId: mapModel.routeId,
        routeVersion: mapModel.routeVersion,
        itineraryVersion: mapModel.itineraryVersion,
        dayNumber: seg.dayNumber,
        segmentIds: [segmentId],
        source: "map",
      };
      setSelection(newSel);

      const msg =
        locale === "en"
          ? `Transfer on Day ${seg.dayNumber} selected.`
          : `Perpindahan Hari ${seg.dayNumber} dipilih.`;
      announcer.announce(msg, "polite");
      setLiveAnnouncement(msg);
      trackMapEvent("route_map_segment_selected", {
        routeId: mapModel.routeId,
        segmentId,
        dayNumber: seg.dayNumber,
      });
    },
    [mapModel,
   locale]
  );

  const handleResetView = useCallback(() => {
    setSelection(null);
    const msg = locale === "en" ? "Showing full route overview." : "Menampilkan seluruh rute.";
    announcer.announce(msg, "polite");
    setLiveAnnouncement(msg);
    trackMapEvent("route_map_fit_route_clicked", { routeId: mapModel?.routeId });
  }, [mapModel,
   locale]);

  const handleViewInItinerary = useCallback(
    (dayNumber: number) => {
      trackMapEvent("route_map_itinerary_clicked", {
        routeId: mapModel?.routeId,
        dayNumber,
      });
      if (onViewInItinerary) {
        onViewInItinerary(dayNumber);
        return;
      }
      // Default: scroll to the itinerary day card
      const dayCard = document.getElementById(`itinerary-day-${dayNumber}`);
      if (dayCard) {
        scrollElementIntoView(dayCard, { block: "start" });
      }
    },
    [mapModel,
   onViewInItinerary]
  );

  // ─── Derived selection values ─────────────────────────────────────────────

  const activeStopId = selection?.stopId ?? null;
  const activeDayNumber = selection?.dayNumber ?? null;
  const activeSegmentIds = selection?.segmentIds ?? [];

  // ─── Section visibility ───────────────────────────────────────────────────

  // Hidden if no result yet
  if (!result && status === "idle") return null;

  // Loading skeleton
  if (status === "resolving") {
    return <RouteMapSkeleton />;
  }

  if (!result) return null;

  if (status === "partial" && !mapModel) {
    return (
      <section className="w-full mt-12 lg:mt-24">
        <div className="flex flex-col items-center justify-center p-12 bg-[#F8F4EA] border border-[#E8E0CE] rounded-3xl text-center">
          <div className="w-16 h-16 bg-[#E8E0CE] rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5C6470]"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
          </div>
          <h2 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-3" tabIndex={-1} data-route-section-heading>Peta Belum Tersedia</h2>
          <p className="text-[#5C6470] max-w-md">Peta rute dinamis ini masih dalam proses penyusunan.</p>
        </div>
      </section>
    );
  }

  if (status === "error" && !mapModel) {
    return (
      <section className="w-full mt-12 lg:mt-24">
        <div className="flex flex-col items-center justify-center p-12 bg-red-50 border border-red-100 rounded-3xl text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h2 className="text-2xl font-playfair font-bold text-red-700 mb-3" tabIndex={-1} data-route-section-heading>Gagal Memuat Peta</h2>
          <p className="text-red-600/80 max-w-md">Terjadi kendala saat memuat data peta rute. Silakan coba beberapa saat lagi.</p>
        </div>
      </section>
    );
  }

  if (!mapModel) return null;

  const stops = mapModel.stops;
  const segments = mapModel.segments;

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <motion.section
      id={ROUTE_SECTION_IDS.map}
      aria-labelledby={titleId}
      className="w-full mt-12 lg:mt-24 scroll-mt-32"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Live region for selection announcements */}
      <div
        id={liveRegionId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {liveAnnouncement}
      </div>

      {/* Main workspace card */}
      <div className="w-full rounded-[32px] bg-gradient-to-b from-[#FFFDF8] to-[#F8F4EA] border border-[#E8E0CE] shadow-lg shadow-[#0D1B2A]/[0.02] overflow-hidden">

        {/* ── Section Header ── */}
        <div className="px-6 md:px-10 lg:px-12 pt-10 md:pt-12 lg:pt-16 pb-8 md:pb-10 border-b border-[#E8E0CE]/60">
          <div className="flex flex-col gap-4 max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
                <Map className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <span className="text-[11px] font-inter font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                {locale === "en" ? "Route Map" : "Peta Rute Perjalanan"}
              </span>
            </div>

            {/* Heading */}
            <h2
              id={titleId}
              ref={headingRef}
              className="font-playfair text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#0D1B2A] leading-[1.15] tracking-tight"
              tabIndex={-1} data-route-section-heading>
              {locale === "en"
                ? "See your journey route at a glance."
                : "Lihat jalur perjalananmu dalam satu pandangan."}
            </h2>

            {/* Supporting copy */}
            <p className="text-[16px] md:text-[18px] text-[#5C6470] leading-relaxed max-w-2xl font-inter mt-1">
              {locale === "en"
                ? "Follow each stop in order, recognize transfer days, and review validated transport options before continuing your journey."
                : "Ikuti urutan setiap stop, kenali hari perpindahan, dan tinjau pilihan transportasi yang telah tervalidasi sebelum melanjutkan perjalanan."}
            </p>

            {/* Trust microcopy */}
            <div className="inline-flex items-center gap-2 mt-2 py-2 px-3 rounded-xl bg-white/60 border border-[#E8E0CE]/50 backdrop-blur-sm w-fit">
              <Info className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
              <p className="text-[12px] font-inter text-[#5C6470] font-medium">
                {locale === "en"
                  ? "Route overview · Not real-time navigation · Schedules and conditions may change"
                  : "Gambaran rute · Bukan navigasi real-time · Jadwal dan kondisi dapat berubah"}
              </p>
            </div>
          </div>

          {/* Active route context */}
          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className="text-[13px] font-inter font-medium text-[#8A94A6]">
              {locale === "en" ? "Active route:" : "Rute aktif:"}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8E0CE] text-[13px] font-inter font-bold text-[#0D1B2A] shadow-sm">
              {result.title}
            </span>
            {selection && (
              <button
                onClick={handleResetView}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-inter font-bold text-[#C9A84C] border border-[#C9A84C]/30 hover:bg-[#C9A84C]/10 transition-colors shadow-sm"
                aria-label={locale === "en" ? "Show full route" : "Tampilkan seluruh rute"}
              >
                <RotateCcw className="w-3 h-3" aria-hidden="true" />
                {locale === "en" ? "Full Route" : "Fokuskan Seluruh Rute"}
              </button>
            )}
          </div>
        </div>

        {/* ── Map Workspace ── */}
        <div className="px-6 md:px-10 lg:px-12 py-10 md:py-12 bg-white/40">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

            {/* ── LEFT: Map Canvas + Accessible List ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">

              {/* Schematic canvas */}
              <div className="w-full rounded-[24px] bg-[#FDFBF7] border border-[#E8E0CE] shadow-inner shadow-[#0D1B2A]/[0.02] overflow-hidden p-2 md:p-4">
                <RouteMapSchematicCanvas
                  stops={stops}
                  segments={segments}
                  transportOptions={transportOptions}
                  activeStopId={activeStopId}
                  activeDayNumber={activeDayNumber}
                  activeSegmentIds={activeSegmentIds}
                  onStopSelect={handleStopSelect}
                  onSegmentSelect={handleSegmentSelect}
                  locale={locale}
                />
              </div>

              {/* Active stop/segment detail panel */}
              <AnimatePresence mode="wait">
                {activeStopId && (
                  <motion.div
                    key={activeStopId}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative rounded-[20px] bg-gradient-to-br from-[#FFF9EE] to-white border border-[#C9A84C]/40 p-6 flex flex-col gap-4 shadow-lg shadow-[#C9A84C]/[0.08] overflow-hidden"
                  >
                    {/* Decorative background flare */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C9A84C]/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
                    
                    {(() => {
                      const stop = stops.find((s) => s.id === activeStopId);
                      if (!stop) return null;
                      return (
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-[11px] font-inter font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
                              {locale === "en"
                                ? `Stop ${stop.order} of ${stops.length}`
                                : `Stop ${stop.order} dari ${stops.length}`}
                            </div>
                            <div className="font-playfair text-[26px] font-bold text-[#0D1B2A] leading-none">
                              {stop.cityOrCluster}
                            </div>
                            <div className="text-[14px] font-inter font-medium text-[#5C6470] mt-1">
                                {stop.dayStart === stop.dayEnd
                                  ? (locale === "en" ? `Day ${stop.dayStart}` : `Hari ${stop.dayStart}`)
                                  : (locale === "en"
                                    ? `Day ${stop.dayStart}–${stop.dayEnd}`
                                    : `Hari ${stop.dayStart}–${stop.dayEnd}`)}
                              </div>
                            </div>
                          <button
                            onClick={() => onViewInItinerary
                              ? onViewInItinerary(stop.dayStart)
                              : handleViewInItinerary(stop.dayStart)
                            }
                            className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full bg-[#0D1B2A] text-white text-[13px] font-inter font-bold hover:bg-[#C9A84C] transition-colors shadow-md group"
                          >
                            {locale === "en" ? "View in Itinerary" : "Lihat di Itinerary"}
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                          </button>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Accessible ordered route list */}
              <div className="mt-4">
                <h3 className="font-inter font-bold text-xs text-[#8A94A6] uppercase tracking-[0.2em] mb-5 pl-2">
                  {locale === "en" ? "Route Sequence" : "Urutan Stop Rute"}
                </h3>
                <AccessibleRouteList
                  stops={stops}
                  segments={segments}
                  transportOptions={transportOptions}
                  activeStopId={activeStopId}
                  activeDayNumber={activeDayNumber}
                  onStopSelect={handleStopSelect}
                  onViewInItinerary={(dayNumber) =>
                    onViewInItinerary
                      ? onViewInItinerary(dayNumber)
                      : handleViewInItinerary(dayNumber)
                  }
                  locale={locale}
                />
              </div>
            </div>

            {/* ── RIGHT: Transport Summary Panel ── */}
            <div className="lg:w-[360px] xl:w-[400px] flex-shrink-0 w-full">
              <TransportSummaryPanel
                stops={stops}
                segments={segments}
                transportOptions={transportOptions}
                durationDays={result.durationDays}
                activeSegmentIds={activeSegmentIds}
                activeDayNumber={activeDayNumber}
                onSegmentSelect={handleSegmentSelect}
                onViewInItinerary={(dayNumber) =>
                  onViewInItinerary
                    ? onViewInItinerary(dayNumber)
                    : handleViewInItinerary(dayNumber)
                }
                onRaniClick={() => { navigateToRouteSection("saveRani") }}
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* ── Disclosure ── */}
        <div className="px-6 md:px-10 lg:px-12 pb-8 md:pb-10 pt-2 border-t border-[#F0E9D8]">
          <div className="flex items-start gap-3 max-w-3xl">
            <AlertCircle className="w-4 h-4 text-[#8A94A6] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[12px] text-[#8A94A6] leading-relaxed">
              {locale === "en"
                ? "Transport information is an initial plan based on available data. Check operator schedules, weather conditions, local access, and reservation requirements before departure."
                : "Informasi transportasi adalah rencana awal berdasarkan data yang tersedia. Periksa operator, jadwal, kondisi cuaca, akses lokal, dan kebutuhan reservasi terbaru sebelum berangkat."}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}













