import React from "react";
import { Wallet, Coins, Gem, Sparkles } from "lucide-react";
import type { BudgetLevel } from "@/types/route-planner";
import { BUDGET_OPTIONS } from "@/data/routes/routePlannerOptions";

interface BudgetSelectorProps {
  value: BudgetLevel;
  onChange: (val: BudgetLevel) => void;
}

export function BudgetSelector({ value, onChange }: BudgetSelectorProps) {
  // Mapping labels to descriptions as requested in the design directive
  const getSubLabel = (val: string) => {
    switch(val) {
      case "hemat": return "Efisien";
      case "menengah": return "Seimbang";
      case "premium": return "Lebih nyaman";
      case "fleksibel": return "Berdasarkan pengalaman";
      default: return "";
    }
  };

  const getBudgetIcon = (val: string, isSelected: boolean) => {
    const className = `w-5 h-5 ${isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-muted)]"}`;
    switch(val) {
      case "hemat": return <Coins className={className} strokeWidth={1.5} />;
      case "menengah": return <Wallet className={className} strokeWidth={1.5} />;
      case "premium": return <Gem className={className} strokeWidth={1.5} />;
      case "fleksibel": return <Sparkles className={className} strokeWidth={1.5} />;
      default: return null;
    }
  };

  return (
    <fieldset className="flex flex-col gap-6">
      <legend className="font-playfair text-[24px] md:text-[28px] font-bold text-[var(--planner-ink)]">
        Ekspektasi Anggaran
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="radiogroup" aria-label="Pilih ekspektasi anggaran">
        {BUDGET_OPTIONS.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(opt.value)}
              className={`text-left p-5 flex flex-col justify-between min-h-[140px] relative transition-all duration-300 rounded-xl ${
                isSelected 
                  ? "bg-[var(--planner-primary-soft)]/20 border border-[var(--planner-primary)]" 
                  : "bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] hover:border-[var(--planner-primary)]/40 hover:bg-[var(--planner-primary-soft)]/5"
              }`}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center justify-center">
                    {getBudgetIcon(opt.value, isSelected)}
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
                
                <span className={`block font-inter text-[16px] font-bold tracking-wide leading-tight mb-1 ${isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-ink)]"}`}>
                  {opt.label.charAt(0).toUpperCase() + opt.label.slice(1).toLowerCase()}
                </span>
                
                <span className={`font-inter text-[13px] font-medium ${isSelected ? "text-[var(--planner-ink)]" : "text-[var(--planner-earth)]"}`}>
                  {getSubLabel(opt.value)}
                </span>
              </div>

              <span className={`font-inter text-[13px] leading-relaxed mt-4 ${isSelected ? "text-[var(--planner-ink)]" : "text-[var(--planner-muted)]"}`}>
                {opt.description}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
