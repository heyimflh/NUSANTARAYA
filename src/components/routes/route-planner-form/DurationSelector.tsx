"use client";

/**
 * DurationSelector — Segmented option cards for 3/5/7 day duration.
 * Uses native radio semantics with visual card presentation.
 */

import type { RouteDuration } from "@/types/route-planner";
import { DURATION_OPTIONS } from "@/data/routes/routePlannerOptions";
import { Check } from "lucide-react";

interface DurationSelectorProps {
  value: RouteDuration;
  onChange: (value: RouteDuration) => void;
  disabled?: boolean;
}

export function DurationSelector({
  value,
  onChange,
  disabled = false,
}: DurationSelectorProps) {
  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="font-inter text-[15px] font-semibold text-[#0D1B2A] mb-1">
        Berapa lama kamu ingin menjelajah?
      </legend>
      <p className="font-inter text-[13px] text-[#9DAEC2] mb-3">
        Durasi membantu kami membatasi jumlah perpindahan dan destinasi.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {DURATION_OPTIONS.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={[
                "relative flex flex-col items-center justify-center gap-1 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200",
                "min-h-[100px] text-center select-none",
                isSelected
                  ? "border-[#C9A84C] bg-[#C9A84C]/[0.06] shadow-sm"
                  : "border-[#E8E0CE] bg-white hover:border-[#C9A84C]/40 hover:bg-[#FFFDF8]",
                disabled ? "opacity-50 pointer-events-none" : "",
              ].join(" ")}
            >
              <input
                type="radio"
                name="duration"
                value={opt.value}
                checked={isSelected}
                onChange={() => onChange(opt.value)}
                className="sr-only"
                aria-label={`${opt.value} hari — ${opt.description}`}
              />

              {/* Selected indicator */}
              {isSelected && (
                <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
              )}

              {/* Big number */}
              <span className="font-playfair text-[32px] md:text-[36px] font-bold leading-none text-[#0D1B2A]">
                {opt.value}
              </span>
              <span className="font-inter text-[13px] font-medium text-[#0D1B2A]/70 uppercase tracking-wide">
                hari
              </span>
              <span className="font-inter text-[11px] md:text-[12px] text-[#9DAEC2] mt-1 leading-snug">
                {opt.description}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
