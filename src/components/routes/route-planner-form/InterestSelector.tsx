"use client";

/**
 * InterestSelector — Toggle chips with checkbox semantics for 1-3 interests.
 * Displays counter, max limit feedback, and accessible toggle state.
 */

import type { RouteInterest } from "@/types/route-planner";
import { INTEREST_OPTIONS } from "@/data/routes/routePlannerOptions";
import {
  Landmark,
  Mountain,
  UtensilsCrossed,
  BookOpen,
  Compass,
  Waves,
  Gem,
  Building2,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Landmark,
  Mountain,
  UtensilsCrossed,
  BookOpen,
  Compass,
  Waves,
  Gem,
  Building2,
};

const MAX_INTERESTS = 3;

interface InterestSelectorProps {
  value: RouteInterest[];
  onChange: (interests: RouteInterest[]) => void;
  disabled?: boolean;
  error?: string;
}

export function InterestSelector({
  value,
  onChange,
  disabled = false,
  error,
}: InterestSelectorProps) {
  const count = value.length;
  const isAtMax = count >= MAX_INTERESTS;

  const handleToggle = (interest: RouteInterest) => {
    if (value.includes(interest)) {
      // Remove
      onChange(value.filter((v) => v !== interest));
    } else if (!isAtMax) {
      // Add
      onChange([...value, interest]);
    }
    // At max and trying to add — handled by UI (disabled state)
  };

  const errorId = error ? "interest-error" : undefined;

  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="font-inter text-[15px] font-semibold text-[#0D1B2A] mb-1">
        Pengalaman apa yang paling kamu cari?
      </legend>
      <div className="flex items-center justify-between mb-3">
        <p className="font-inter text-[13px] text-[#9DAEC2]">
          Pilih 1–3 minat utama.
        </p>
        <span
          className={[
            "font-inter text-[13px] font-medium px-2 py-0.5 rounded-full",
            isAtMax
              ? "bg-[#C9A84C]/10 text-[#C9A84C]"
              : "bg-[#F8F4EA] text-[#9DAEC2]",
          ].join(" ")}
          aria-live="polite"
          aria-label={`${count} dari ${MAX_INTERESTS} minat dipilih`}
        >
          {count}/{MAX_INTERESTS} dipilih
        </span>
      </div>

      {/* Hint */}
      {count === 0 && (
        <p className="font-inter text-[12px] text-[#9DAEC2] italic mb-2">
          Pilihan populer: Budaya + Kuliner
        </p>
      )}

      <div
        className="flex flex-wrap gap-2.5"
        role="group"
        aria-label="Pilih minat perjalanan"
        aria-describedby={errorId}
      >
        {INTEREST_OPTIONS.map((opt) => {
          const isSelected = value.includes(opt.value);
          const isDisabledChip = !isSelected && isAtMax;
          const Icon = ICON_MAP[opt.icon];

          return (
            <button
              key={opt.value}
              type="button"
              role="checkbox"
              aria-checked={isSelected}
              aria-label={`${opt.label}${isSelected ? " (dipilih)" : ""}`}
              disabled={disabled || isDisabledChip}
              onClick={() => handleToggle(opt.value)}
              className={[
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-inter text-[13px] font-medium",
                "transition-all duration-200 select-none",
                isSelected
                  ? "border-[#C9A84C] bg-[#C9A84C]/[0.07] text-[#0D1B2A] shadow-sm"
                  : isDisabledChip
                  ? "border-[#E8E0CE] bg-[#F8F4EA] text-[#9DAEC2] cursor-not-allowed opacity-50"
                  : "border-[#E8E0CE] bg-white text-[#5C6470] hover:border-[#C9A84C]/40 hover:bg-[#FFFDF8] cursor-pointer",
              ].join(" ")}
            >
              {Icon && (
                <Icon
                  className={[
                    "w-4 h-4 shrink-0",
                    isSelected ? "text-[#C9A84C]" : "text-[#9DAEC2]",
                  ].join(" ")}
                  aria-hidden="true"
                />
              )}
              {opt.label}
              {isSelected && (
                <Check
                  className="w-3.5 h-3.5 text-[#C9A84C] shrink-0"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Max limit message */}
      {isAtMax && (
        <p className="font-inter text-[12px] text-[#C9A84C] mt-1" aria-live="polite">
          Pilih maksimal 3 minat utama agar rekomendasi tetap fokus.
        </p>
      )}

      {/* Error */}
      {error && (
        <p id="interest-error" className="font-inter text-[13px] text-[#8B2020] mt-1" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
