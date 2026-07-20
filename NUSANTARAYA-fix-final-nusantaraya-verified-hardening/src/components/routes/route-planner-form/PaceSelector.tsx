import React from "react";
import type { TravelPace } from "@/types/route-planner";
import { PACE_OPTIONS } from "@/data/routes/routePlannerOptions";

interface PaceSelectorProps {
  value: TravelPace;
  onChange: (val: TravelPace) => void;
}

export function PaceSelector({ value, onChange }: PaceSelectorProps) {
  // Rhythm visualizations based on design specs
  const getRhythmVisual = (val: string) => {
    switch(val) {
      case "santai": return "●────●────●";
      case "seimbang": return "●──●──●──●";
      case "eksploratif": return "●─●─●─●─●";
      default: return "";
    }
  };

  const getSubLabel = (val: string) => {
    switch(val) {
      case "santai": return "1–2 aktivitas utama";
      case "seimbang": return "2–3 aktivitas utama";
      case "eksploratif": return "3–4 aktivitas utama";
      default: return "";
    }
  };

  return (
    <fieldset className="flex flex-col gap-6">
      <legend className="font-playfair text-[24px] md:text-[28px] font-bold text-[var(--planner-ink)]">
        Ritme Eksplorasi
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="radiogroup" aria-label="Pilih ritme eksplorasi">
        {PACE_OPTIONS.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(opt.value)}
              className={`text-left p-5 flex flex-col min-h-[140px] relative focus-visible:ring-2 focus-visible:ring-[var(--planner-primary)] focus-visible:outline-none transition-all duration-300 rounded-xl ${
                isSelected 
                  ? "bg-[var(--planner-primary-soft)]/20 border border-[var(--planner-primary)]" 
                  : "bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] hover:border-[var(--planner-primary)]/40 hover:bg-[var(--planner-primary-soft)]/5"
              }`}
            >
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className={`font-inter text-[16px] font-bold tracking-wide leading-tight ${isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-ink)]"}`}>
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
                
                <span className={`font-inter text-[13px] leading-relaxed ${isSelected ? "text-[var(--planner-ink)]" : "text-[var(--planner-muted)]"}`}>
                  {opt.description}
                </span>
              </div>

              {/* Rhythmic Visualization */}
              <div className="mt-4 flex flex-col gap-1.5">
                <div className={`font-mono text-[12px] tracking-widest ${isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-warm-border)]"}`}>
                  {getRhythmVisual(opt.value)}
                </div>
                <div className={`font-inter text-[12px] font-medium ${isSelected ? "text-[var(--planner-ink)]" : "text-[var(--planner-earth)]"}`}>
                  {getSubLabel(opt.value)}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
