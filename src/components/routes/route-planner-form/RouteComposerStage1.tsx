import { motion } from "framer-motion";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import { DurationTimeline } from "./DurationTimeline";
import { DepartureField } from "./DepartureField";
import { ArchipelagoRegionIndex } from "./ArchipelagoRegionIndex";
import { ArrowRight } from "lucide-react";

interface Stage1Props {
  values: RoutePlannerFormValues;
  updateField: <K extends keyof RoutePlannerFormValues>(field: K, value: RoutePlannerFormValues[K]) => void;
  onNext?: () => void;
  mobileStep?: number; // Used in mobile guided flow
}

export function RouteComposerStage1({ values, updateField, onNext, mobileStep }: Stage1Props) {
  const isDesktop = !mobileStep;

  // On desktop, show all fields for stage 1. On mobile, only show the active step.
  const showDuration = isDesktop || mobileStep === 1;
  const showOrigin = isDesktop || mobileStep === 2;
  const showRegion = isDesktop || mobileStep === 3;

  const isStageComplete = values.destinationRegionId !== null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-12"
    >
      {/* Intro Copy */}
      {isDesktop && (
        <div className="mb-4">
          <h2 className="font-playfair text-[32px] font-bold text-[var(--route-ink)] mb-3">
            Dari mana dan sejauh apa kamu ingin menjelajah?
          </h2>
          <p className="font-inter text-[15px] text-[var(--route-muted)] leading-relaxed">
            Pilih titik awal dan tujuan kepulauanmu. Durasi akan menentukan ritme perpindahan—makin panjang harimu, makin jauh wilayah yang bisa dieksplorasi.
          </p>
        </div>
      )}

      {showDuration && (
        <div className="flex flex-col gap-4">
          <label className="font-inter text-[14px] font-bold tracking-widest uppercase text-[var(--route-muted)]">
            Panjang Ekspedisi
          </label>
          <DurationTimeline 
            value={values.durationDays} 
            onChange={(v) => updateField("durationDays", v)} 
          />
        </div>
      )}

      {showOrigin && (
        <div className="flex flex-col gap-4">
          <label className="font-inter text-[14px] font-bold tracking-widest uppercase text-[var(--route-muted)]">
            Titik Berangkat
          </label>
          <DepartureField 
            value={values.originProvinceId} 
            onChange={(v) => updateField("originProvinceId", v)} 
          />
        </div>
      )}

      {showRegion && (
        <div className="flex flex-col gap-4">
          <label className="font-inter text-[14px] font-bold tracking-widest uppercase text-[var(--route-muted)]">
            Wilayah Tujuan
          </label>
          <ArchipelagoRegionIndex 
            value={values.destinationRegionId} 
            onChange={(v) => updateField("destinationRegionId", v)} 
          />
        </div>
      )}

      {isDesktop && (
        <div className="pt-8 border-t border-[var(--route-border)] mt-4">
          <button
            onClick={onNext}
            disabled={!isStageComplete}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-[15px] transition-all duration-300 ${
              isStageComplete 
                ? "bg-[var(--route-primary)] text-white hover:bg-[var(--route-primary-hover)] active:scale-[0.98]" 
                : "bg-[var(--route-surface)] text-[var(--route-muted)] cursor-not-allowed"
            }`}
          >
            Lanjutkan ke Karakter Rute
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </motion.div>
  );
}
