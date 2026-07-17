"use client";

/**
 * RouteReasonPanel — Section 4 Why This Route
 * Shows primary reason sentence, up to 3 reason chips,
 * and expandable disclosure for more detail.
 * Disclosure uses aria-expanded for keyboard accessibility.
 * Does NOT show confidence scores or internal weights.
 */

import { useState } from "react";
import { ChevronDown, Quote, CheckCircle2 } from "lucide-react";
import type { RouteRecommendation, RouteReasonCode, RoutePlannerFormValues } from "@/types/route-planner";
import {
  deriveReasonCodes,
  composePrimaryReason,
  getReasonCodeLabel,
} from "@/lib/routes/routeResultHelpers";
import { trackRoutePlannerEvent } from "@/lib/routes/routePlannerAnalytics";

interface RouteReasonPanelProps {
  result: RouteRecommendation;
  values: RoutePlannerFormValues;
  locale?: "id" | "en";
}

// Show max 3 chips (excluding FALLBACK_NEAREST and SCOPE_REDUCED which are in disclosure)
const CHIP_DISPLAY_CODES: RouteReasonCode[] = [
  "REGION_EXACT",
  "DURATION_EXACT",
  "INTEREST_OVERLAP",
  "CULTURAL_DEPTH",
  "CULINARY_DEPTH",
  "PACE_COMPATIBLE",
  "BUDGET_COMPATIBLE",
  "CLUSTER_REALISTIC",
  "ORIGIN_CONVENIENT",
];

export function RouteReasonPanel({ result, values, locale = "id" }: RouteReasonPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const reasonCodes = deriveReasonCodes(values, result);
  const primaryReason = composePrimaryReason(reasonCodes, result, values);

  const displayChipCodes = reasonCodes
    .filter((c) => CHIP_DISPLAY_CODES.includes(c))
    .slice(0, 3);

  const sectionLabel = locale === "en" ? "Curator's Note" : "Catatan Kurator";
  const disclosureLabel =
    locale === "en"
      ? "See how this was selected"
      : "Lihat cara rekomendasi dipilih";
  const disclosureClose =
    locale === "en" ? "Close explanation" : "Tutup penjelasan";

  const handleToggle = () => {
    const next = !isExpanded;
    setIsExpanded(next);
    if (next) {
      trackRoutePlannerEvent("route_result_reason_expanded");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-[#F8F4EA] rounded-[24px] border border-[#E8E0CE]">
      {/* Section label / Quote Icon */}
      <div className="flex items-center gap-2 mb-1">
        <Quote className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]/20" aria-hidden="true" />
        <p className="font-inter text-[11px] font-bold tracking-[0.15em] uppercase text-[#C9A84C]">
          {sectionLabel}
        </p>
      </div>

      {/* Primary reason sentence - larger, elegant */}
      <p className="font-playfair text-[18px] md:text-[20px] text-[#0D1B2A] leading-snug font-medium">
        {primaryReason}
      </p>

      {/* Elegant list instead of heavy chips */}
      {displayChipCodes.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-1" role="list" aria-label={sectionLabel}>
          {displayChipCodes.map((code) => (
            <span
              key={code}
              role="listitem"
              className="inline-flex items-center gap-1.5 font-inter text-[13px] font-medium text-[#4A5568]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
              {getReasonCodeLabel(code, locale)}
            </span>
          ))}
        </div>
      )}

      {/* Expandable disclosure */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        className="self-start flex items-center gap-1.5 font-inter text-[13px] font-semibold text-[#0D1B2A] hover:text-[#C9A84C] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 rounded-sm min-h-[44px] px-0 py-1 mt-2"
      >
        {isExpanded ? disclosureClose : disclosureLabel}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Expanded detail */}
      {isExpanded && (
        <div
          className="pt-4 border-t border-[#E8E0CE] flex flex-col gap-3 text-[13px] text-[#4A5568] font-inter leading-relaxed"
          role="region"
          aria-label={disclosureLabel}
        >
          <ul className="flex flex-col gap-2 list-none">
            {reasonCodes.map((code) => (
              <li key={code} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-[#0D1B2A] font-semibold">
                    {getReasonCodeLabel(code, locale)}:
                  </strong>{" "}
                  {getReasonCodeDetail(code, result, values, locale)}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-[#9DAEC2] mt-2">
            {locale === "en"
              ? "This selection uses curated route data — not a confidence score."
              : "Pilihan ini menggunakan data rute terkurasi — bukan skor kepercayaan."}
          </p>
        </div>
      )}
    </div>
  );
}

/** Human-readable detail per reason code for the expanded disclosure. */
function getReasonCodeDetail(
  code: RouteReasonCode,
  result: RouteRecommendation,
  values: RoutePlannerFormValues,
  locale: "id" | "en"
): string {
  const id: Record<RouteReasonCode, string> = {
    REGION_EXACT: `Wilayah ${result.regionId} sesuai dengan pilihan tujuanmu.`,
    DURATION_EXACT: `Durasi ${result.durationDays} hari persis sesuai dengan ketersediaan waktumu.`,
    INTEREST_OVERLAP: `Minat kamu (${values.interests.join(", ")}) ada dalam fokus rute ini.`,
    PACE_COMPATIBLE: `Ritme ${values.travelPace} didukung oleh urutan stop dalam rute ini.`,
    BUDGET_COMPATIBLE: `Budget ${values.budgetLevel} sesuai dengan estimasi rute.`,
    ORIGIN_CONVENIENT: `Provinsi asal dekat dengan wilayah rute, meminimalkan perpindahan awal.`,
    CLUSTER_REALISTIC: `${result.stops.length} stop membentuk cluster yang realistis untuk durasi ini.`,
    CULTURAL_DEPTH: `Rute mencakup destinasi budaya utama di ${result.regionId}.`,
    CULINARY_DEPTH: `Rute mencakup pengalaman kuliner autentik di setiap stop.`,
    FALLBACK_NEAREST: `Tidak ada preset yang persis cocok; ini adalah pilihan terdekat yang tersedia.`,
    SCOPE_REDUCED: `Cakupan dikurangi agar realistis dalam ${result.durationDays} hari.`,
  };
  const en: Record<RouteReasonCode, string> = {
    REGION_EXACT: `Region ${result.regionId} matches your destination choice.`,
    DURATION_EXACT: `${result.durationDays}-day duration exactly matches your availability.`,
    INTEREST_OVERLAP: `Your interests (${values.interests.join(", ")}) are covered in this route.`,
    PACE_COMPATIBLE: `${values.travelPace} pace is supported by the stop sequence.`,
    BUDGET_COMPATIBLE: `${values.budgetLevel} budget aligns with this route's estimates.`,
    ORIGIN_CONVENIENT: `Your origin province is close to the route region.`,
    CLUSTER_REALISTIC: `${result.stops.length} stops form a realistic cluster for this duration.`,
    CULTURAL_DEPTH: `Route covers key cultural destinations in ${result.regionId}.`,
    CULINARY_DEPTH: `Route includes authentic culinary experiences at each stop.`,
    FALLBACK_NEAREST: `No exact preset matched; this is the nearest available route.`,
    SCOPE_REDUCED: `Scope reduced to remain realistic within ${result.durationDays} days.`,
  };
  return locale === "en" ? en[code] : id[code];
}
