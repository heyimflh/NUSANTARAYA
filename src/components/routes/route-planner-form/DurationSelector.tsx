import React from "react";
import type { RouteDuration } from "@/types/route-planner";
import { DURATION_OPTIONS } from "@/data/routes/routePlannerOptions";

interface DurationSelectorProps {
  value: RouteDuration;
  onChange: (val: RouteDuration) => void;
}

export function DurationSelector({ value, onChange }: DurationSelectorProps) {
  return (
    <fieldset className="flex flex-col gap-6">
      <legend className="font-playfair text-[24px] md:text-[28px] font-bold text-[var(--planner-ink)]">
        Berapa lama perjalananmu?
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="radiogroup" aria-label="Pilih durasi perjalanan">
        {DURATION_OPTIONS.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(opt.value)}
              className={`text-left p-5 relative transition-all duration-300 rounded-xl ${
                isSelected 
                  ? "bg-[var(--planner-primary-soft)]/20 border border-[var(--planner-primary)]" 
                  : "bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] hover:border-[var(--planner-primary)]/40 hover:bg-[var(--planner-primary-soft)]/5"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-end gap-1.5">
                    <span className={`font-inter text-[24px] font-bold leading-none ${isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-ink)]"}`}>
                      {opt.value}
                    </span>
                    <span className={`font-inter text-[14px] font-medium pb-[2px] ${isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-earth)]"}`}>
                      Hari
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                    isSelected ? "bg-[var(--planner-primary)] border-[var(--planner-primary)]" : "border-[var(--planner-warm-border)]"
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <span className={`font-inter text-[15px] font-bold ${isSelected ? "text-[var(--planner-ink)]" : "text-[var(--planner-ink)]"}`}>
                  {opt.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
