"use client";

/**
 * NUSANTARAYA — Transport Summary Panel
 * Section 6: Route Map + Transport Summary
 *
 * Right panel: Journey overview stats + transfer sequence + practical checks.
 * Reads exclusively from canonical RouteMapModel data — no fabrication.
 */

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRightLeft, Calendar, AlertCircle, CheckSquare } from "lucide-react";
import { clsx } from "clsx";
import type {
  RouteMapStop,
  RouteMapSegment,
  RouteTransportOption,
  TransportComplexity,
} from "@/types/route-map";
import { deriveTransportComplexity } from "@/lib/routes/map/validateRouteMap";
import { TransferRow } from "./TransferRow";

interface TransportSummaryPanelProps {
  stops: RouteMapStop[];
  segments: RouteMapSegment[];
  transportOptions: RouteTransportOption[];
  durationDays: number;
  activeSegmentIds: string[];
  activeDayNumber: number | null;
  onSegmentSelect: (segmentId: string) => void;
  onViewInItinerary: (dayNumber: number) => void;
  onRaniClick: () => void;
  locale?: "id" | "en";
}

const COMPLEXITY_CONFIG: Record<
  TransportComplexity,
  { label: { id: string; en: string }; color: string; bg: string; note?: { id: string; en: string } }
> = {
  simple: {
    label: { id: "Sederhana", en: "Simple" },
    color: "#2D5A27",
    bg: "bg-[#2D5A27]/10",
  },
  moderate: {
    label: { id: "Moderat", en: "Moderate" },
    color: "#C9A84C",
    bg: "bg-[#C9A84C]/10",
  },
  "active-transfer": {
    label: { id: "Berpindah aktif", en: "Active transfers" },
    color: "#8B2020",
    bg: "bg-[#8B2020]/10",
    note: {
      id: "Rute ini membutuhkan beberapa perpindahan. Pastikan fleksibilitas waktu dan tenaga.",
      en: "This route requires multiple transfers. Ensure you have time and energy flexibility.",
    },
  },
  unknown: {
    label: { id: "Belum dapat dinilai", en: "Not assessed" },
    color: "#8A94A6",
    bg: "bg-[#8A94A6]/10",
  },
};

export function TransportSummaryPanel({
  stops,
  segments,
  transportOptions,
  durationDays,
  activeSegmentIds,
  activeDayNumber,
  onSegmentSelect,
  onViewInItinerary,
  onRaniClick,
  locale = "id",
}: TransportSummaryPanelProps) {
  const requiredSegments = segments.filter((s) => s.isRequired);
  const complexity = deriveTransportComplexity(stops.length, requiredSegments.length);
  const complexityConf = COMPLEXITY_CONFIG[complexity];
  const validatedCount = transportOptions.filter((t) => t.confidence === "verified").length;

  // Practical checks — only show relevant ones based on transport types
  const hasFerry = transportOptions.some((t) => t.mode === "ferry");
  const hasFlight = transportOptions.some((t) => t.mode === "flight");
  const hasRail = transportOptions.some((t) => t.mode === "rail");
  const hasMultipleTransfers = requiredSegments.length >= 2;

  const practicalChecks: string[] = [
    locale === "en"
      ? "Check latest schedules and operator availability before departure."
      : "Periksa jadwal dan ketersediaan operator terbaru sebelum berangkat.",
    ...(hasFerry || hasFlight
      ? [
          locale === "en"
            ? "Check weather and crossing/flight conditions, especially during rainy season."
            : "Periksa cuaca dan kondisi penyeberangan/penerbangan, terutama musim hujan.",
        ]
      : []),
    ...(hasMultipleTransfers
      ? [
          locale === "en"
            ? "Provide adequate transfer buffer time between each connection."
            : "Sediakan waktu buffer perpindahan yang cukup di setiap koneksi.",
        ]
      : []),
    ...(hasRail
      ? [
          locale === "en"
            ? "For trains, check ticket availability. Some routes require advance booking."
            : "Untuk kereta, periksa ketersediaan tiket. Beberapa rute perlu pemesanan lebih awal.",
        ]
      : []),
    locale === "en"
      ? "Confirm baggage limits and accessibility if needed."
      : "Konfirmasi batas bagasi dan aksesibilitas jika dibutuhkan.",
    locale === "en"
      ? "Verify entry points and last-mile options at each destination."
      : "Verifikasi titik masuk dan pilihan last-mile di setiap tujuan.",
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Journey Overview Stats */}
      <div>
        <h3 className="font-inter font-bold text-xs text-[#8A94A6] uppercase tracking-[0.2em] mb-5 pl-2">
          {locale === "en" ? "Journey Overview" : "Ringkasan Perpindahan"}
        </h3>

        <div className="grid grid-cols-2 gap-3.5">
          {/* Stop count */}
          <div className="relative overflow-hidden bg-white border border-[#E8E0CE]/80 rounded-[20px] p-5 flex flex-col gap-2 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-3 -right-3 text-[#F8F4EA] rotate-12 pointer-events-none" aria-hidden="true">
              <MapPin className="w-20 h-20" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10 mt-1">
              <div className="text-[32px] font-playfair font-bold text-[#0D1B2A] leading-none">
                {stops.length}
              </div>
              <div className="text-[12px] text-[#5C6470] font-inter font-medium mt-1">
                {locale === "en" ? "Main stops" : "Stop utama"}
              </div>
            </div>
          </div>

          {/* Transfer count */}
          <div className="relative overflow-hidden bg-white border border-[#E8E0CE]/80 rounded-[20px] p-5 flex flex-col gap-2 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-3 -right-3 text-[#F8F4EA] -rotate-12 pointer-events-none" aria-hidden="true">
              <ArrowRightLeft className="w-20 h-20" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                <ArrowRightLeft className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10 mt-1">
              <div className="text-[32px] font-playfair font-bold text-[#0D1B2A] leading-none">
                {requiredSegments.length}
              </div>
              <div className="text-[12px] text-[#5C6470] font-inter font-medium mt-1">
                {locale === "en" ? "Main transfers" : "Perpindahan utama"}
              </div>
            </div>
          </div>

          {/* Travel days */}
          <div className="relative overflow-hidden bg-white border border-[#E8E0CE]/80 rounded-[20px] p-5 flex flex-col gap-2 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-3 -right-3 text-[#F8F4EA] rotate-6 pointer-events-none" aria-hidden="true">
              <Calendar className="w-20 h-20" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10 mt-1">
              <div className="text-[32px] font-playfair font-bold text-[#0D1B2A] leading-none">
                {durationDays}
              </div>
              <div className="text-[12px] text-[#5C6470] font-inter font-medium mt-1">
                {locale === "en" ? "Travel days" : "Hari perjalanan"}
              </div>
            </div>
          </div>

          {/* Validated transport count */}
          <div className="relative overflow-hidden bg-white border border-[#E8E0CE]/80 rounded-[20px] p-5 flex flex-col gap-2 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-3 -right-3 text-[#F8F4EA] -rotate-6 pointer-events-none" aria-hidden="true">
              <CheckSquare className="w-20 h-20" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-[#2D5A27]/10 flex items-center justify-center text-[#2D5A27]">
                <CheckSquare className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10 mt-1">
              <div className="text-[32px] font-playfair font-bold text-[#0D1B2A] leading-none">
                {validatedCount}
              </div>
              <div className="text-[12px] text-[#5C6470] font-inter font-medium mt-1">
                {locale === "en" ? "Verified details" : "Detail tervalidasi"}
              </div>
            </div>
          </div>
        </div>

        {/* Complexity indicator */}
        <div
          className={clsx(
            "mt-4 rounded-[20px] px-5 py-4 flex items-start gap-4 border",
            complexityConf.bg.replace("bg-", "bg-").replace("/10", "/5"),
            `border-[${complexityConf.color}]/20`
          )}
        >
          <div
            className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 shadow-sm"
            style={{ backgroundColor: complexityConf.color }}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1.5">
            <span
              className="text-[13px] font-inter font-bold tracking-wide"
              style={{ color: complexityConf.color }}
            >
              {locale === "en"
                ? `Complexity: ${complexityConf.label.en}`
                : `Kompleksitas: ${complexityConf.label.id}`}
            </span>
            {complexityConf.note && (
              <p className="text-[12px] font-inter text-[#5C6470] leading-relaxed">
                {locale === "en" ? complexityConf.note.en : complexityConf.note.id}
              </p>
            )}
            <p className="text-[11px] font-inter text-[#8A94A6] mt-0.5">
              {locale === "en"
                ? "Complexity is not a safety rating or ease guarantee."
                : "Kompleksitas bukan penilaian keamanan atau jaminan kemudahan."}
            </p>
          </div>
        </div>
      </div>

      {/* Transfer Sequence */}
      {requiredSegments.length > 0 && (
        <div className="pt-2">
          <h3 className="font-inter font-bold text-xs text-[#8A94A6] uppercase tracking-[0.2em] mb-5 pl-2">
            {locale === "en" ? "Transfer Details" : "Detail Perpindahan"}
          </h3>
          <div className="flex flex-col gap-3 relative">
            {requiredSegments.map((seg) => {
              const fromStop = stops.find((s) => s.id === seg.fromStopId);
              const toStop = stops.find((s) => s.id === seg.toStopId);
              const transport = transportOptions.find((t) => t.segmentId === seg.id);

              if (!fromStop || !toStop) return null;

              return (
                <TransferRow
                  key={seg.id}
                  segment={seg}
                  fromStop={fromStop}
                  toStop={toStop}
                  transportOption={transport}
                  isActive={activeSegmentIds.includes(seg.id) || activeDayNumber === seg.dayNumber}
                  onSelect={() => onSegmentSelect(seg.id)}
                  onViewInItinerary={onViewInItinerary}
                  locale={locale}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Practical Checks */}
      {practicalChecks.length > 0 && (
        <div className="pt-2">
          <h3 className="font-inter font-bold text-xs text-[#8A94A6] uppercase tracking-[0.2em] mb-5 pl-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
            {locale === "en" ? "Before You Go" : "Sebelum Berangkat"}
          </h3>
          <ul className="flex flex-col gap-3 pl-2" role="list">
            {practicalChecks.map((check, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[13px] font-inter text-[#5C6470] leading-relaxed">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFF9EE] border border-[#C9A84C]/20 flex items-center justify-center mt-0.5 shadow-sm" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                </span>
                {check}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* RANI CTA */}
      <div className="pt-6 mt-2 border-t border-[#E8E0CE]/60">
        <button
          onClick={onRaniClick}
          className="relative w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-white border border-[#E8E0CE] text-[#0D1B2A] font-inter font-bold text-[14px] hover:bg-[#FDFBF7] hover:border-[#C9A84C]/50 hover:text-[#A08A3A] transition-all duration-300 shadow-sm hover:shadow focus-visible:outline-2 focus-visible:outline-[#C9A84C] overflow-hidden group"
          aria-label={
            locale === "en"
              ? "Adjust this route with RANI AI assistant"
              : "Sesuaikan rute ini bersama asisten RANI"
          }
        >
          {/* Subtle hover gleam */}
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-[#C9A84C]/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          
          <span className="text-[#C9A84C] group-hover:scale-110 transition-transform" aria-hidden="true">✦</span>
          {locale === "en" ? "Adjust Route with RANI" : "Sesuaikan Rute bersama RANI"}
        </button>
      </div>
    </div>
  );
}
