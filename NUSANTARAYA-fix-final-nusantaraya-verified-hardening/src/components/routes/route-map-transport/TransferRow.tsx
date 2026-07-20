"use client";

/**
 * NUSANTARAYA — Transfer Row
 * Section 6: Route Map + Transport Summary
 *
 * A single transfer row in the transport summary panel.
 * Shows: from → to, day, mode (if validated), confidence, note.
 *
 * Rules:
 * - unverified: no duration/operator shown as fact
 * - estimated: clear estimation label
 * - verified: may show mode/duration with source reminder
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation2, ChevronDown, ExternalLink } from "lucide-react";
import { clsx } from "clsx";
import type { RouteMapStop, RouteMapSegment, RouteTransportOption } from "@/types/route-map";
import { TransportConfidenceBadge } from "./TransportConfidenceBadge";

interface TransferRowProps {
  segment: RouteMapSegment;
  fromStop: RouteMapStop;
  toStop: RouteMapStop;
  transportOption: RouteTransportOption | undefined;
  isActive: boolean;
  onSelect: () => void;
  onViewInItinerary: (dayNumber: number) => void;
  locale?: "id" | "en";
}

const MODE_ICONS: Record<string, string> = {
  rail: "🚆",
  road: "🚌",
  ferry: "⛴️",
  flight: "✈️",
  walk: "🚶",
  "local-transit": "🛵",
  mixed: "🔀",
  unspecified: "🚐",
};

export function TransferRow({
  segment,
  fromStop,
  toStop,
  transportOption,
  isActive,
  onSelect,
  onViewInItinerary,
  locale = "id",
}: TransferRowProps) {
  const [expanded, setExpanded] = useState(false);
  const confidence = transportOption?.confidence ?? "unavailable";
  const modeIcon = MODE_ICONS[transportOption?.mode ?? "unspecified"] ?? "🚐";

  return (
    <div
      className={clsx(
        "rounded-2xl border transition-all duration-200",
        isActive
          ? "bg-[#FFF9EE] border-[#C9A84C]/40 shadow-[0_4px_16px_rgba(201,168,76,0.08)]"
          : "bg-white border-[#E8E0CE] hover:border-[#D9CDBC]"
      )}
    >
      {/* Main Row */}
      <div
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
        className="flex items-start gap-4 w-full p-5 text-left group focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:rounded-2xl cursor-pointer"
        aria-expanded={expanded}
        aria-controls={`transfer-detail-${segment.id}`}
      >
        {/* Mode icon */}
        <div
          className={clsx(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[18px] transition-all",
            isActive ? "bg-[#C9A84C]/15" : "bg-[#F8F4EA]"
          )}
          aria-hidden="true"
        >
          {modeIcon}
        </div>

        {/* Transfer info */}
        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
          {/* From → To */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-[14px] text-[#0D1B2A]">{fromStop.cityOrCluster}</span>
            <Navigation2 className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" aria-hidden="true" />
            <span className="font-bold text-[14px] text-[#0D1B2A]">{toStop.cityOrCluster}</span>
          </div>

          {/* Day + Mode */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[12px] text-[#8A94A6] font-medium">
              {locale === "en" ? `Day ${segment.dayNumber}` : `Hari ${segment.dayNumber}`}
            </span>
            {transportOption && confidence !== "unavailable" && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#E8E0CE]" aria-hidden="true" />
                <span className="text-[12px] text-[#5C6470] font-medium">
                  {transportOption.label}
                </span>
              </>
            )}
          </div>

          {/* Confidence badge */}
          <div className="mt-0.5">
            <TransportConfidenceBadge confidence={confidence} locale={locale} />
          </div>
        </div>

        {/* Expand toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((v) => !v);
          }}
          className={clsx(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all",
            "border focus-visible:outline-2 focus-visible:outline-[#C9A84C]",
            expanded
              ? "bg-[#C9A84C] border-[#C9A84C] text-white"
              : "bg-transparent border-[#E8E0CE] text-[#8A94A6] hover:bg-[#F8F4EA]"
          )}
          aria-label={
            expanded
              ? (locale === "en" ? "Collapse details" : "Sembunyikan detail")
              : (locale === "en" ? "Expand details" : "Tampilkan detail")
          }
          aria-expanded={expanded}
          aria-controls={`transfer-detail-${segment.id}`}
        >
          <ChevronDown
            className={clsx("w-4 h-4 transition-transform duration-200", expanded && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Expanded Detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`transfer-detail-${segment.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 flex flex-col gap-3 border-t border-[#F0E9D8]">

              {/* Confidence-specific messaging */}
              {confidence === "verified" && (
                <div className="flex items-start gap-2.5 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2D5A27] mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-[13px] text-[#5C6470] leading-relaxed">
                    {locale === "en"
                      ? "Transport details validated. Always check current schedules and availability before departure."
                      : "Detail transportasi telah tervalidasi. Tetap periksa jadwal dan ketersediaan terbaru sebelum berangkat."}
                  </p>
                </div>
              )}

              {confidence === "estimated" && (
                <div className="flex items-start gap-2.5 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-[13px] text-[#5C6470] leading-relaxed">
                    {locale === "en"
                      ? "This is an initial estimate based on available data. Confirm actual schedule and fare before departure."
                      : "Ini adalah estimasi awal berdasarkan data yang tersedia. Konfirmasi jadwal dan tarif aktual sebelum berangkat."}
                  </p>
                </div>
              )}

              {confidence === "unavailable" && (
                <div className="flex items-start gap-2.5 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8A94A6] mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-[13px] text-[#5C6470] leading-relaxed">
                    {locale === "en"
                      ? "Transport details for this connection are not yet verified. Research routes and operators independently."
                      : "Detail transportasi untuk perpindahan ini belum terverifikasi. Riset jalur dan operator secara mandiri."}
                  </p>
                </div>
              )}

              {/* View in itinerary CTA */}
              <button
                onClick={() => onViewInItinerary(segment.dayNumber)}
                className="flex items-center gap-2 self-start mt-1 text-[12px] font-bold text-[#C9A84C] hover:text-[#A08A3A] transition-colors underline underline-offset-2"
              >
                {locale === "en"
                  ? `View Day ${segment.dayNumber} in Itinerary`
                  : `Lihat Hari ${segment.dayNumber} di Itinerary`}
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

