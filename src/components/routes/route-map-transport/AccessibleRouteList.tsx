"use client";

/**
 * NUSANTARAYA — Accessible Route List
 * Section 6: Route Map + Transport Summary
 *
 * Semantic <ol> list of all stops in route order.
 * Provides full accessibility for users who cannot use the visual map.
 * Always rendered alongside the map canvas.
 */

import React from "react";
import { motion } from "framer-motion";
import type { RouteMapStop, RouteMapSegment, RouteTransportOption } from "@/types/route-map";
import { MapPin, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface AccessibleRouteListProps {
  stops: RouteMapStop[];
  segments: RouteMapSegment[];
  transportOptions: RouteTransportOption[];
  activeStopId: string | null;
  activeDayNumber: number | null;
  onStopSelect: (stopId: string) => void;
  onViewInItinerary: (dayNumber: number) => void;
  locale?: "id" | "en";
}

export function AccessibleRouteList({
  stops,
  segments,
  transportOptions,
  activeStopId,
  activeDayNumber,
  onStopSelect,
  onViewInItinerary,
  locale = "id",
}: AccessibleRouteListProps) {
  if (stops.length === 0) return null;

  const orderedStops = [...stops].sort((a, b) => a.order - b.order);

  return (
    <nav
      aria-label={locale === "en" ? "Route stop sequence" : "Urutan stop rute"}
      className="w-full"
    >
      <ol className="flex flex-col gap-0" role="list">
        {orderedStops.map((stop, idx) => {
          const isActive =
            stop.id === activeStopId ||
            (activeDayNumber !== null &&
              stop.dayStart <= activeDayNumber &&
              stop.dayEnd >= activeDayNumber);

          // Find segment from previous stop to this one
          const incomingSegment =
            idx > 0
              ? segments.find(
                  (seg) =>
                    seg.toStopId === stop.id &&
                    seg.fromStopId === orderedStops[idx - 1].id
                )
              : undefined;

          const incomingTransport = incomingSegment
            ? transportOptions.find((t) => t.segmentId === incomingSegment.id)
            : undefined;

          return (
            <li key={stop.id} className="flex flex-col">
              {/* Transfer connector between stops */}
              {idx > 0 && (
                <div className="flex items-start gap-3 ml-5 py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-full min-h-[24px] bg-gradient-to-b from-[#E8E0CE] to-[#E8E0CE]" />
                  </div>
                  {incomingSegment && (
                    <div className="flex items-center gap-2 text-[12px] text-[#8A94A6] font-medium py-1">
                      <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
                      <span>
                        {incomingTransport
                          ? incomingTransport.label
                          : locale === "en"
                          ? "Transfer"
                          : "Perpindahan"}
                      </span>
                      <span className="text-[#C9A84C]">
                        · {locale === "en" ? `Day ${incomingSegment.dayNumber}` : `Hari ${incomingSegment.dayNumber}`}
                      </span>
                      {incomingTransport?.confidence === "verified" && (
                        <span className="px-1.5 py-0.5 rounded-full bg-[#2D5A27]/10 text-[#2D5A27] text-[10px] font-bold uppercase tracking-wide">
                          {locale === "en" ? "Verified" : "Tervalidasi"}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Stop item */}
              <motion.div
                role="button"
                tabIndex={0}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                onClick={() => onStopSelect(stop.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onStopSelect(stop.id);
                  }
                }}
                aria-pressed={isActive}
                aria-label={
                  locale === "en"
                    ? `Stop ${stop.order} of ${stops.length}: ${stop.cityOrCluster}, Day ${stop.dayStart}${stop.dayStart !== stop.dayEnd ? ` to Day ${stop.dayEnd}` : ""}`
                    : `Stop ${stop.order} dari ${stops.length}: ${stop.cityOrCluster}, Hari ${stop.dayStart}${stop.dayStart !== stop.dayEnd ? ` sampai Hari ${stop.dayEnd}` : ""}`
                }
                className={clsx(
                  "group flex items-center gap-3 w-full rounded-2xl px-4 py-3 text-left transition-all duration-200",
                  "focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2",
                  isActive
                    ? "bg-[#C9A84C]/10 border border-[#C9A84C]/30"
                    : "bg-transparent hover:bg-[#F8F4EA] border border-transparent hover:border-[#E8E0CE]"
                )}
              >
                {/* Stop number indicator */}
                <div
                  className={clsx(
                    "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-playfair font-bold text-[15px] transition-all duration-200",
                    isActive
                      ? "bg-[#C9A84C] text-white shadow-[0_4px_12px_rgba(201,168,76,0.3)]"
                      : "bg-[#0D1B2A] text-white group-hover:bg-[#1a304d]"
                  )}
                  aria-hidden="true"
                >
                  {stop.order}
                </div>

                {/* Stop info */}
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span
                    className={clsx(
                      "font-bold text-[15px] leading-tight transition-colors duration-200",
                      isActive ? "text-[#C9A84C]" : "text-[#0D1B2A] group-hover:text-[#C9A84C]"
                    )}
                  >
                    {stop.cityOrCluster}
                  </span>
                  <span className="text-[12px] text-[#8A94A6] font-medium">
                    {stop.dayStart === stop.dayEnd
                      ? (locale === "en" ? `Day ${stop.dayStart}` : `Hari ${stop.dayStart}`)
                      : (locale === "en"
                        ? `Day ${stop.dayStart}–${stop.dayEnd}`
                        : `Hari ${stop.dayStart}–${stop.dayEnd}`)}
                  </span>
                </div>

                {/* "View in itinerary" CTA — only for active */}
                {isActive && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewInItinerary(stop.dayStart);
                    }}
                    className="flex-shrink-0 text-[11px] font-bold text-[#C9A84C] hover:text-[#A08A3A] underline underline-offset-2 transition-colors whitespace-nowrap"
                    aria-label={
                      locale === "en"
                        ? `View Day ${stop.dayStart} in itinerary`
                        : `Lihat Hari ${stop.dayStart} di itinerary`
                    }
                  >
                    {locale === "en" ? "View in itinerary" : "Lihat di itinerary"}
                  </button>
                )}
              </motion.div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
