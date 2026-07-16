"use client";

/**
 * TravelPaceSelector — Three horizontal cards for travel pace selection.
 * Uses radio semantics. Default: Seimbang.
 */

import type { TravelPace } from "@/types/route-planner";
import { PACE_OPTIONS } from "@/data/routes/routePlannerOptions";
import { Check } from "lucide-react";

interface TravelPaceSelectorProps {
  value: TravelPace;
  onChange: (value: TravelPace) => void;
  disabled?: boolean;
}

export function TravelPaceSelector({
  value,
  onChange,
  disabled = false,
}: TravelPaceSelectorProps) {
  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="font-inter text-[15px] font-semibold text-[#0D1B2A] mb-1">
        Seberapa padat ritme perjalananmu?
      </legend>
      <p className="font-inter text-[13px] text-[#9DAEC2] mb-3">
        Ini menentukan jumlah aktivitas dan waktu jeda setiap hari.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PACE_OPTIONS.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={[
                "relative flex flex-col gap-2 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200",
                "min-h-[90px] select-none",
                isSelected
                  ? "border-[#C9A84C] bg-[#C9A84C]/[0.06] shadow-sm"
                  : "border-[#E8E0CE] bg-white hover:border-[#C9A84C]/40 hover:bg-[#FFFDF8]",
                disabled ? "opacity-50 pointer-events-none" : "",
              ].join(" ")}
            >
              <input
                type="radio"
                name="pace"
                value={opt.value}
                checked={isSelected}
                onChange={() => onChange(opt.value)}
                className="sr-only"
                aria-label={`${opt.label} — ${opt.activitiesPerDay} aktivitas utama per hari. ${opt.description}`}
              />

              {isSelected && (
                <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
              )}

              {/* Pace name */}
              <span className="font-inter text-[15px] font-semibold text-[#0D1B2A]">
                {opt.label}
              </span>

              {/* Activities per day */}
              <span className="font-inter text-[13px] text-[#C9A84C] font-medium">
                {opt.activitiesPerDay} aktivitas/hari
              </span>

              {/* Description */}
              <span className="font-inter text-[12px] text-[#9DAEC2] leading-snug">
                {opt.description}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
