import { motion } from "framer-motion";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import {
  REGION_DISPLAY_OPTIONS,
  PACE_OPTIONS,
  BUDGET_OPTIONS,
  INTEREST_OPTIONS
} from "@/data/routes/routePlannerOptions";
import { provinceMapData } from "@/data/provinces/provinces";

interface PlannerStep3ReviewProps {
  values: RoutePlannerFormValues;
  onEditStep: (step: 1 | 2) => void;
}

export function PlannerStep3Review({ values, onEditStep }: PlannerStep3ReviewProps) {
  const originProvince = values.originProvinceId ? provinceMapData.find(p => p.id === values.originProvinceId) : null;
  const regionLabel = REGION_DISPLAY_OPTIONS.find(r => r.id === values.destinationRegionId)?.label;
  const interestLabels = values.interests.map(i => INTEREST_OPTIONS.find(opt => opt.value === i)?.label).filter(Boolean);
  const budgetLabel = BUDGET_OPTIONS.find(b => b.value === values.budgetLevel)?.label;
  const paceLabel = PACE_OPTIONS.find(p => p.value === values.travelPace)?.label;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-8 w-full max-w-3xl"
    >
      <div className="sr-only" aria-live="polite">
        Langkah 3 dari 3: Tinjau dan buat rute
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-[var(--planner-ink)]">
          Tinjauan Spesifikasi
        </h2>
        <p className="font-inter text-[15px] md:text-[16px] text-[var(--planner-earth)] leading-relaxed">
          Periksa kembali parameter perjalananmu. Rute akan disusun berdasarkan konfigurasi ini.
        </p>
      </div>

      <div className="flex flex-col w-full border border-[var(--planner-warm-border)] rounded-xl mt-2 overflow-hidden bg-[var(--planner-paper)]">
        
        {/* Row 1: Rencana Dasar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-6 border-b border-[var(--planner-warm-border)] gap-4 sm:gap-6 group bg-[var(--planner-paper-raised)]">
          <div className="w-[140px] shrink-0">
            <span className="font-inter text-[12px] font-bold text-[var(--planner-muted)] uppercase tracking-wide">
              Rencana Dasar
            </span>
          </div>
          
          <div className="flex-1 flex flex-col gap-1">
            <div className="font-inter text-[16px] font-bold text-[var(--planner-primary)] leading-tight">
              {String(values.durationDays)} Hari
            </div>
            <div className="font-inter text-[14px] font-medium text-[var(--planner-ink)]">
              {originProvince ? `${originProvince.name} → ` : ""}{regionLabel || "Wilayah Tujuan"}
            </div>
          </div>
          
          <button 
            onClick={() => onEditStep(1)}
            className="font-inter text-[13px] font-bold text-[var(--planner-earth)] hover:text-[var(--planner-primary)] transition-colors underline decoration-[var(--planner-warm-border)] underline-offset-4 hover:decoration-[var(--planner-primary)]"
          >
            Ubah
          </button>
        </div>

        {/* Row 2: Preferensi */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-6 gap-4 sm:gap-6 group">
          <div className="w-[140px] shrink-0">
            <span className="font-inter text-[12px] font-bold text-[var(--planner-muted)] uppercase tracking-wide">
              Preferensi
            </span>
          </div>
          
          <div className="flex-1 flex flex-col gap-2">
            <div className="font-inter text-[14px] font-bold text-[var(--planner-ink)]">
              {interestLabels.join(" · ")}
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-inter text-[13px] text-[var(--planner-earth)]">
                <strong className="font-semibold text-[var(--planner-ink)]">Anggaran:</strong> {budgetLabel}
              </span>
              <span className="font-inter text-[13px] text-[var(--planner-earth)]">
                <strong className="font-semibold text-[var(--planner-ink)]">Ritme:</strong> {paceLabel}
              </span>
            </div>
          </div>
          
          <button 
            onClick={() => onEditStep(2)}
            className="font-inter text-[13px] font-bold text-[var(--planner-earth)] hover:text-[var(--planner-primary)] transition-colors underline decoration-[var(--planner-warm-border)] underline-offset-4 hover:decoration-[var(--planner-primary)]"
          >
            Ubah
          </button>
        </div>

      </div>

    </motion.div>
  );
}
