import React from "react";
import type { RoutePlannerRegionId } from "@/types/route-planner";
import { REGION_DISPLAY_OPTIONS } from "@/data/routes/routePlannerOptions";

interface RegionSelectorProps {
  value: RoutePlannerRegionId | null;
  onChange: (val: RoutePlannerRegionId) => void;
}

export function RegionSelector({ value, onChange }: RegionSelectorProps) {
  return (
    <fieldset className="flex flex-col gap-6">
      <legend className="font-playfair text-[24px] md:text-[28px] font-bold text-[var(--planner-ink)]">
        Wilayah mana yang ingin kamu jelajahi?
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-label="Pilih wilayah">
        {REGION_DISPLAY_OPTIONS.map((opt) => {
          const isSelected = value === opt.id;

          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(opt.id as RoutePlannerRegionId)}
              className={`text-left p-5 flex flex-col justify-between min-h-[140px] relative focus-visible:ring-2 focus-visible:ring-[var(--planner-primary)] focus-visible:outline-none transition-all duration-300 rounded-xl ${
                isSelected 
                  ? "bg-[var(--planner-primary-soft)]/20 border border-[var(--planner-primary)]" 
                  : "bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] hover:border-[var(--planner-primary)]/40 hover:bg-[var(--planner-primary-soft)]/5"
              }`}
            >
              
              <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className={`block font-inter text-[16px] font-bold tracking-wide leading-tight ${isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-ink)]"}`}>
                    {opt.label}
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border focus-visible:ring-2 focus-visible:ring-[var(--planner-primary)] focus-visible:outline-none transition-all duration-300 shrink-0 ${
                    isSelected ? "bg-[var(--planner-primary)] border-[var(--planner-primary)]" : "border-[var(--planner-warm-border)]"
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <span className="font-inter text-[13px] text-[var(--planner-earth)] font-medium mb-3">
                  {opt.sampleProvinces?.join(" · ") || "Berbagai provinsi"}
                </span>
              </div>

              <span className={`font-inter text-[13px] leading-relaxed ${isSelected ? "text-[var(--planner-ink)]" : "text-[var(--planner-muted)]"}`}>
                {opt.keywords}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
