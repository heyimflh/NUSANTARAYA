"use client";

/**
 * PreferenceSummary — Live preference summary panel.
 * Derives all display from form values — no state duplication.
 * Desktop: sticky sidebar. Mobile: compact panel.
 */

import type { RoutePlannerFormValues, RoutePlannerStatus } from "@/types/route-planner";
import {
  getRegionLabel,
  getInterestLabels,
  getProvinceLabel,
  getBudgetLabel,
  getPaceLabel,
  getIncompleteCopy,
  composeRouteCharacter,
} from "@/lib/routes/composePreferenceSummary";
import {
  Clock,
  MapPin,
  Target,
  Heart,
  Wallet,
  Gauge,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Loader2,
} from "lucide-react";

interface PreferenceSummaryProps {
  values: RoutePlannerFormValues;
  status: RoutePlannerStatus;
  isValid: boolean;
  onReset: () => void;
  onSubmit: () => void;
}

export function PreferenceSummary({
  values,
  status,
  isValid,
  onReset,
  onSubmit,
}: PreferenceSummaryProps) {
  const incompleteCopy = getIncompleteCopy(values);
  const routeCharacter = composeRouteCharacter(values);
  const interestLabels = getInterestLabels(values.interests);
  const isLoading = status === "loading";

  return (
    <div className="rounded-3xl border border-[#E8E0CE] bg-white shadow-sm p-5 md:p-6 space-y-4">
      {/* Title */}
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
        <h3 className="font-playfair text-[18px] font-bold text-[#0D1B2A]">
          Perjalananmu
        </h3>
      </div>

      {/* Summary items */}
      <div className="space-y-3">
        <SummaryRow icon={Clock} label="Durasi" value={`${values.durationDays} hari`} />
        <SummaryRow
          icon={MapPin}
          label="Dari"
          value={getProvinceLabel(values.originProvinceId)}
          muted={!values.originProvinceId}
        />
        <SummaryRow
          icon={Target}
          label="Tujuan"
          value={getRegionLabel(values.destinationRegionId)}
          accent={!!values.destinationRegionId}
          muted={!values.destinationRegionId}
        />
        <SummaryRow
          icon={Heart}
          label="Minat"
          value={interestLabels.length > 0 ? interestLabels.join(" · ") : "—"}
          muted={interestLabels.length === 0}
        />
        <SummaryRow icon={Wallet} label="Anggaran" value={getBudgetLabel(values.budgetLevel)} />
        <SummaryRow icon={Gauge} label="Gaya" value={getPaceLabel(values.travelPace)} />
      </div>

      {/* Route character insight */}
      {routeCharacter && (
        <div className="bg-[#FFFDF8] border border-[#E8E0CE] rounded-xl p-3 mt-3">
          <p className="font-inter text-[12px] text-[#5C6470] leading-relaxed italic">
            {routeCharacter}
          </p>
        </div>
      )}

      {/* Incomplete message */}
      {incompleteCopy && (
        <p className="font-inter text-[12px] text-[#C9A84C] bg-[#C9A84C]/[0.05] border border-[#C9A84C]/20 rounded-xl px-3 py-2 mt-2">
          {incompleteCopy}
        </p>
      )}

      {/* Actions */}
      <div className="pt-3 space-y-3 border-t border-[#E8E0CE]">
        {/* Primary CTA */}
        <button
          type="button"
          onClick={onSubmit}
          disabled={!isValid || isLoading}
          className={[
            "w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl font-inter text-[15px] font-semibold transition-all duration-200",
            isValid && !isLoading
              ? "bg-[#C9A84C] text-white hover:bg-[#B8973E] hover:shadow-[0_4px_16px_-2px_rgba(201,168,76,0.25)] active:scale-[0.98] cursor-pointer"
              : "bg-[#E8E0CE] text-[#9DAEC2] cursor-not-allowed",
          ].join(" ")}
          aria-label={
            isLoading
              ? "Menyusun Rute Terbaik…"
              : isValid
              ? "Buat Rekomendasi Rute"
              : incompleteCopy ?? "Form belum lengkap"
          }
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              Menyusun Rute Terbaik…
            </>
          ) : (
            <>
              Buat Rekomendasi Rute
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>

        {/* Supporting CTA microcopy */}
        {isValid && !isLoading && (
          <p className="font-inter text-[11px] text-[#9DAEC2] text-center">
            Hasil dapat diubah, disimpan ke Passport, dan disesuaikan bersama RANI.
          </p>
        )}

        {/* Reset */}
        <button
          type="button"
          onClick={onReset}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-2 font-inter text-[13px] text-[#9DAEC2] hover:text-[#5C6470] transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          Reset pilihan
        </button>
      </div>
    </div>
  );
}

// ─── Summary Row ─────────────────────────────────────────────────────────────

function SummaryRow({
  icon: Icon,
  label,
  value,
  accent = false,
  muted = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        className={[
          "w-4 h-4 mt-0.5 shrink-0",
          accent ? "text-[#C9A84C]" : "text-[#9DAEC2]",
        ].join(" ")}
        aria-hidden="true"
      />
      <div className="flex-1 min-w-0">
        <span className="font-inter text-[11px] text-[#9DAEC2] uppercase tracking-wider block">
          {label}
        </span>
        <span
          className={[
            "font-inter text-[14px] font-medium block truncate",
            muted ? "text-[#9DAEC2] italic" : "text-[#0D1B2A]",
          ].join(" ")}
        >
          {value}
        </span>
      </div>
    </div>
  );
}
