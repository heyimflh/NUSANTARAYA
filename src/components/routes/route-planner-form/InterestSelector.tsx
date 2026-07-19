import React from "react";
import type { RouteInterest } from "@/types/route-planner";
import { INTEREST_OPTIONS } from "@/data/routes/routePlannerOptions";
import { Check, Landmark, Mountain, UtensilsCrossed, BookOpen, Compass, Waves, Gem, Building2 } from "lucide-react";
import { announcer } from "./PlannerLiveRegion";

const ICON_MAP: Record<string, React.ElementType> = {
  Landmark,
  Mountain,
  UtensilsCrossed,
  BookOpen,
  Compass,
  Waves,
  Gem,
  Building2,
};

interface InterestSelectorProps {
  value: RouteInterest[];
  onChange: (val: RouteInterest[]) => void;
}

export function InterestSelector({ value, onChange }: InterestSelectorProps) {
  const toggleInterest = (interestValue: RouteInterest) => {
    let newValue: RouteInterest[];
    if (value.includes(interestValue)) {
      newValue = value.filter((v) => v !== interestValue);
      announcer.announce(`Minat ${interestValue} dihapus.`);
    } else {
      if (value.length >= 3) {
        announcer.announce("Maksimal 3 minat sudah terpilih.");
        return;
      }
      newValue = [...value, interestValue];
      announcer.announce(`Minat ${interestValue} ditambahkan.`);
    }
    onChange(newValue);
  };

  return (
    <fieldset className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <legend className="font-playfair text-[24px] md:text-[28px] font-bold text-[var(--planner-ink)]">
          Apa yang paling ingin kamu nikmati?
        </legend>
        <span className="font-inter text-[14px] text-[var(--planner-muted)]">
          Pilih hingga 3 minat utama agar rute lebih terfokus.
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" role="group" aria-label="Pilih hingga 3 minat">
        {INTEREST_OPTIONS.map((opt) => {
          const isSelected = value.includes(opt.value);
          const isDisabled = !isSelected && value.length >= 3;
          const Icon = ICON_MAP[opt.icon] || Compass;

          return (
            <button
              key={opt.value}
              type="button"
              role="checkbox"
              aria-checked={isSelected}
              disabled={isDisabled}
              onClick={() => toggleInterest(opt.value)}
              className={`group flex flex-col items-center justify-center p-4 min-h-[110px] text-center border focus-visible:ring-2 focus-visible:ring-[var(--planner-primary)] focus-visible:outline-none transition-all duration-300 relative rounded-xl ${
                isSelected 
                  ? "bg-[var(--planner-primary-soft)]/20 border-[var(--planner-primary)]" 
                  : isDisabled
                  ? "bg-[var(--planner-canvas)] border-[var(--planner-warm-border)] opacity-50 cursor-not-allowed"
                  : "bg-[var(--planner-paper)] border-[var(--planner-warm-border)] hover:border-[var(--planner-primary)]/40 hover:bg-[var(--planner-primary-soft)]/5"
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[var(--planner-primary)] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
              )}

              <Icon className={`w-6 h-6 mb-3 transition-colors ${
                isSelected ? "text-[var(--planner-primary)]" : "text-[var(--planner-earth)] group-hover:text-[var(--planner-primary)]"
              }`} strokeWidth={isSelected ? 2.5 : 1.5} />
              
              <span className={`font-inter text-[13px] sm:text-[14px] leading-tight ${
                isSelected ? "font-bold text-[var(--planner-ink)]" : "font-semibold text-[var(--planner-ink)]"
              }`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      {value.length === 3 && (
        <div className="flex items-center gap-2 px-4 py-2 border-l-2 border-[var(--planner-saffron)] bg-[var(--planner-saffron-soft)]/30 w-fit">
          <span className="font-inter text-[13px] font-bold text-[var(--planner-ink)]">
            3 minat dipilih
          </span>
          <span className="font-inter text-[13px] text-[var(--planner-earth)]">
            &middot; Hapus satu untuk mengganti
          </span>
        </div>
      )}
    </fieldset>
  );
}
