"use client";

/**
 * BudgetSelector — Option cards for budget level with Rp symbol accent.
 * Uses radio semantics. Default: Menengah.
 */

import type { BudgetLevel } from "@/types/route-planner";
import { BUDGET_OPTIONS } from "@/data/routes/routePlannerOptions";
import { Check } from "lucide-react";

interface BudgetSelectorProps {
  value: BudgetLevel;
  onChange: (value: BudgetLevel) => void;
  disabled?: boolean;
}

export function BudgetSelector({
  value,
  onChange,
  disabled = false,
}: BudgetSelectorProps) {
  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="font-inter text-[15px] font-semibold text-[#0D1B2A] mb-1">
        Kisaran perjalanan yang kamu inginkan?
      </legend>
      <p className="font-inter text-[13px] text-[#9DAEC2] mb-3">
        Estimasi mencakup transportasi lokal, aktivitas, dan konsumsi dasar.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {BUDGET_OPTIONS.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={[
                "relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200",
                "min-h-[100px] text-center select-none",
                isSelected
                  ? "border-[#C9A84C] bg-[#C9A84C]/[0.06] shadow-sm"
                  : "border-[#E8E0CE] bg-white hover:border-[#C9A84C]/40 hover:bg-[#FFFDF8]",
                disabled ? "opacity-50 pointer-events-none" : "",
              ].join(" ")}
            >
              <input
                type="radio"
                name="budget"
                value={opt.value}
                checked={isSelected}
                onChange={() => onChange(opt.value)}
                className="sr-only"
                aria-label={`${opt.label} — ${opt.description}`}
              />

              {isSelected && (
                <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
              )}

              {/* Symbol */}
              <span className="font-playfair text-[18px] md:text-[20px] font-bold text-[#C9A84C]/70 leading-none">
                {opt.symbol}
              </span>

              {/* Label */}
              <span className="font-inter text-[14px] font-semibold text-[#0D1B2A]">
                {opt.label}
              </span>

              {/* Description */}
              <span className="font-inter text-[11px] text-[#9DAEC2] leading-snug">
                {opt.description}
              </span>
            </label>
          );
        })}
      </div>

      {/* Disclaimer */}
      <p className="font-inter text-[11px] text-[#9DAEC2] mt-2 italic">
        Estimasi bersifat indikatif dan dapat berubah menurut musim, titik keberangkatan, serta pilihan akomodasi.
      </p>
    </fieldset>
  );
}
