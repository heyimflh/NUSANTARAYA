"use client";

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
  itinerary: RouteItinerary | null;
  status: "idle" | "loading" | "success" | "error" | "fallback";
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
  itinerary,
  status,
  externalDaySelection,
  onViewInItinerary,
}: RouteMapTransportSectionProps) {
  const titleId = useId();
  const liveRegionId = useId();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const { language } = useLanguage();
  const { mode } = useMode();
  const locale = language as "id" | "en";

  // ─── Map Model State ─────────────────────────────────────────────────────

  const [mapModel, setMapModel] = useState<RouteMapModel | null>(null);
  const [transportOptions, setTransportOptions] = useState<RouteTransportOption[]>([]);
  const [isResolving, setIsResolving] = useState(false);
  const [hasError, setHasError] = useState(false);

  // ─── Selection State ─────────────────────────────────────────────────────

  const [selection, setSelection] = useState<RouteMapSelection | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string | null>(null);

  // ─── Resolve map model when result/itinerary change ──────────────────────

  useEffect(() => {
    if (status === "loading") {
      setMapModel(null);
      setTransportOptions([]);
      setSelection(null);
      return;
    }

    if (!result || !itinerary) {
      setMapModel(null);
      setTransportOptions([]);
      return;
    }

    setIsResolving(true);
    setHasError(false);

    try {
      const resolved = resolveRouteMap(result, itinerary);
      if (resolved) {
        setMapModel(resolved.model);
        setTransportOptions(resolved.transportOptions);
        // Reset selection to whole-route overview on route change
        setSelection(null);
        trackMapEvent("route_map_loaded", {
          routeId: resolved.model.routeId,
          stopCount: resolved.model.stops.length,
          segmentCount: resolved.model.segments.length,
          geometryConfidence: resolved.model.geometryConfidence,
        });
      } else {
        setMapModel(null);
        setTransportOptions([]);
      }
    } catch {
      setHasError(true);
      trackMapEvent("route_map_error", { routeId: result.id });
    } finally {
      setIsResolving(false);
    }
  }, [result?.id, itinerary?.version, status]); // eslint-disable-line react-hooks/exhaustive-deps

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

    setSelection(sel);

    // Scroll to map section
    const mapSection = document.getElementById("route-map-transport-summary");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
  }, [externalDaySelection, mapModel]); // eslint-disable-line react-hooks/exhaustive-deps

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
    [mapModel, locale]
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
    [mapModel, locale]
  );

  const handleResetView = useCallback(() => {
    setSelection(null);
    const msg = locale === "en" ? "Showing full route overview." : "Menampilkan seluruh rute.";
    announcer.announce(msg, "polite");
    setLiveAnnouncement(msg);
    trackMapEvent("route_map_fit_route_clicked", { routeId: mapModel?.routeId });
  }, [mapModel, locale]);

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
        dayCard.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [mapModel, onViewInItinerary]
  );

  const handleRaniClick = useCallback(() => {
    trackMapEvent("route_map_rani_clicked", { routeId: mapModel?.routeId });
    // Navigate to RANI section or scroll — integration point
    const raniSection = document.getElementById("save-passport-rani");
    if (raniSection) {
      raniSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [mapModel]);

  // ─── Derived selection values ─────────────────────────────────────────────

  const activeStopId = selection?.stopId ?? null;
  const activeDayNumber = selection?.dayNumber ?? null;
  const activeSegmentIds = selection?.segmentIds ?? [];

  // ─── Section visibility ───────────────────────────────────────────────────

  // Hidden if no result yet
  if (!result && status === "idle") return null;

  // Loading skeleton
  if (status === "loading" || isResolving) {
    return (
      <section
        id="route-map-transport-summary"
        aria-labelledby={titleId}
        className="w-full mt-12 lg:mt-24 scroll-mt-32"
      >
        <RouteMapSkeleton />
      </section>
    );
  }

  // No map model (no result or resolution failed)
  if (!result || !mapModel) return null;

  const stops = mapModel.stops;
  const segments = mapModel.segments;

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <motion.section
      id="route-map-transport-summary"
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
              tabIndex={-1}
            >
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
                onRaniClick={handleRaniClick}
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
