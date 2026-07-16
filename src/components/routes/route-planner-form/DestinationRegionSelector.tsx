"use client";

/**
 * DestinationRegionSelector — Single-choice region cards with radio semantics.
 * Displays region name, sample provinces, keywords, and accent color.
 */

import type { RoutePlannerRegionId } from "@/types/route-planner";
import { REGION_DISPLAY_OPTIONS } from "@/data/routes/routePlannerOptions";
import { Check, MapPin } from "lucide-react";

interface DestinationRegionSelectorProps {
  value: RoutePlannerRegionId | null;
  onChange: (regionId: RoutePlannerRegionId) => void;
  disabled?: boolean;
  error?: string;
}

export function DestinationRegionSelector({
  value,
  onChange,
  disabled = false,
  error,
}: DestinationRegionSelectorProps) {
  const errorId = error ? "region-error" : undefined;

  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="font-inter text-[15px] font-semibold text-[#0D1B2A] mb-1">
        Wilayah mana yang ingin kamu jelajahi?
      </legend>
      <p
        className="font-inter text-[13px] text-[#9DAEC2] mb-3"
        id="region-helper"
      >
        Pilih satu wilayah utama agar rute tetap realistis.
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        role="radiogroup"
        aria-labelledby="region-helper"
        aria-describedby={errorId}
      >
        {REGION_DISPLAY_OPTIONS.map((region) => {
          const isSelected = value === region.id;
          return (
            <label
              key={region.id}
              className={[
                "relative flex flex-col gap-2 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200",
                "min-h-[90px] select-none",
                isSelected
                  ? "border-[#C9A84C] bg-[#C9A84C]/[0.04] shadow-sm"
                  : "border-[#E8E0CE] bg-white hover:border-[#C9A84C]/40 hover:bg-[#FFFDF8]",
                disabled ? "opacity-50 pointer-events-none" : "",
              ].join(" ")}
            >
              <input
                type="radio"
                name="destination-region"
                value={region.id}
                checked={isSelected}
                onChange={() =>
                  onChange(region.id as RoutePlannerRegionId)
                }
                className="sr-only"
                aria-label={`${region.label} — ${region.keywords}`}
              />

              {/* Selected indicator */}
              {isSelected && (
                <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
              )}

              {/* Region accent bar */}
              <div
                className="w-8 h-1 rounded-full opacity-70"
                style={{ backgroundColor: region.accentColor }}
                aria-hidden="true"
              />

              {/* Region name */}
              <span className="font-inter text-[15px] font-semibold text-[#0D1B2A] leading-tight">
                {region.label}
              </span>

              {/* Keywords */}
              <span className="font-inter text-[12px] text-[#5C6470] leading-snug">
                {region.keywords}
              </span>

              {/* Sample provinces */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <MapPin className="w-3 h-3 text-[#9DAEC2] shrink-0" aria-hidden="true" />
                <span className="font-inter text-[11px] text-[#9DAEC2]">
                  {region.sampleProvinces.join(" · ")}
                </span>
              </div>
            </label>
          );
        })}
      </div>

      {/* Error */}
      {error && (
        <p id="region-error" className="font-inter text-[13px] text-[#8B2020] mt-1" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
