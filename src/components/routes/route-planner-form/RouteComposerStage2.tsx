import { motion } from "framer-motion";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import { TravelMotifSelector } from "./TravelMotifSelector";
import { TravelComfortSpectrum } from "./TravelComfortSpectrum";
import { TravelRhythmSelector } from "./TravelRhythmSelector";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Stage2Props {
  values: RoutePlannerFormValues;
  updateField: <K extends keyof RoutePlannerFormValues>(field: K, value: RoutePlannerFormValues[K]) => void;
  onNext?: () => void;
  onBack?: () => void;
  mobileStep?: number;
}

export function RouteComposerStage2({ values, updateField, onNext, onBack, mobileStep }: Stage2Props) {
  const isDesktop = !mobileStep;

  const showInterest = isDesktop || mobileStep === 4;
  const showBudget = isDesktop || mobileStep === 5;
  const showPace = isDesktop || mobileStep === 6;

  const isStageComplete = values.interests.length > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-12"
    >
      {isDesktop && (
        <div className="mb-4">
          <h2 className="font-playfair text-[32px] font-bold text-[var(--route-ink)] mb-3">
            Perjalanan seperti apa yang terasa paling kamu?
          </h2>
          <p className="font-inter text-[15px] text-[var(--route-muted)] leading-relaxed">
            Lapisan preferensi ini akan memfilter ratusan destinasi menjadi satu narasi harian yang sesuai dengan gaya, anggaran, dan ritmemu.
          </p>
        </div>
      )}

      {showInterest && (
        <div className="flex flex-col gap-4">
          <label className="font-inter text-[14px] font-bold tracking-widest uppercase text-[var(--route-muted)]">
            Motif Perjalanan
          </label>
          <TravelMotifSelector 
            values={values.interests} 
            onChange={(v) => updateField("interests", v)} 
          />
        </div>
      )}

      {showBudget && (
        <div className="flex flex-col gap-4">
          <label className="font-inter text-[14px] font-bold tracking-widest uppercase text-[var(--route-muted)]">
            Karakter Biaya & Kenyamanan
          </label>
          <TravelComfortSpectrum 
            value={values.budgetLevel} 
            onChange={(v) => updateField("budgetLevel", v)} 
          />
        </div>
      )}

      {showPace && (
        <div className="flex flex-col gap-4">
          <label className="font-inter text-[14px] font-bold tracking-widest uppercase text-[var(--route-muted)]">
            Ritme Eksplorasi
          </label>
          <TravelRhythmSelector 
            value={values.travelPace} 
            onChange={(v) => updateField("travelPace", v)} 
          />
        </div>
      )}

      {isDesktop && (
        <div className="pt-8 border-t border-[var(--route-border)] mt-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-4 rounded-xl font-inter font-semibold text-[15px] text-[var(--route-muted)] hover:bg-[var(--route-surface)] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>
          
          <button
            onClick={onNext}
            disabled={!isStageComplete}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-[15px] transition-all duration-300 ${
              isStageComplete 
                ? "bg-[var(--route-primary)] text-white hover:bg-[var(--route-primary-hover)] active:scale-[0.98]" 
                : "bg-[var(--route-surface)] text-[var(--route-muted)] cursor-not-allowed"
            }`}
          >
            Siap Lihat Rute
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </motion.div>
  );
}
