"use client";

/**
 * RouteResultDisclosure — Section 4 Fallback/Adjustment + Trust Microcopy
 * Shows:
 * - Honest fallback disclosure when dynamic engine is unavailable
 * - Adjustment note when scope/duration was changed to fit
 * - Trust microcopy: "Estimasi awal · Bukan jadwal atau harga pemesanan"
 *
 * Never hides adjustments. Adjustment not color-only (has icon + text).
 */

import { Info, AlertTriangle } from "lucide-react";
import type { RouteMatchType } from "@/types/route-planner";

interface RouteResultDisclosureProps {
  matchType: RouteMatchType;
  adjustmentNote: string | null;
  locale?: "id" | "en";
}

const FALLBACK_COPY: Record<"id" | "en", string> = {
  id: "Kami belum dapat menyusun rute dinamis saat ini. Sebagai gantinya, kami menampilkan rute terkurasi yang paling mendekati wilayah, durasi, dan minat pilihanmu.",
  en: "We could not generate a dynamic route at this time. Instead, we are showing the curated route that best matches your region, duration, and interests.",
};

const TRUST_COPY: Record<"id" | "en", string> = {
  id: "Estimasi awal · Bukan jadwal atau harga pemesanan · Selalu periksa kondisi perjalanan terbaru",
  en: "Preliminary estimate · Not a booking schedule or price · Always check current travel conditions",
};

export function RouteResultDisclosure({
  matchType,
  adjustmentNote,
  locale = "id",
}: RouteResultDisclosureProps) {
  const showFallbackNote = matchType === "fallback";
  const showAdjustmentNote = !!adjustmentNote && matchType !== "fallback";

  return (
    <div className="flex flex-col gap-3">
      {/* Fallback disclosure */}
      {showFallbackNote && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl bg-[#FFF8EC] border border-[#C09A3A]/30"
          role="note"
          aria-label={locale === "en" ? "Fallback notice" : "Catatan fallback"}
        >
          <AlertTriangle
            className="w-4 h-4 text-[#C09A3A] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="font-inter text-[13px] text-[#7A5E1A] leading-relaxed">
            {FALLBACK_COPY[locale]}
          </p>
        </div>
      )}

      {/* Adjustment note */}
      {showAdjustmentNote && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F4EA] border border-[#E8E0CE]"
          role="note"
          aria-label={locale === "en" ? "Adjustment notice" : "Catatan penyesuaian"}
        >
          <Info
            className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="font-inter text-[13px] text-[#4A5568] leading-relaxed">
            {adjustmentNote}
          </p>
        </div>
      )}

      {/* Trust microcopy — always shown */}
      <p className="font-inter text-[11px] text-[#9DAEC2] text-center leading-relaxed">
        {TRUST_COPY[locale]}
      </p>
    </div>
  );
}
