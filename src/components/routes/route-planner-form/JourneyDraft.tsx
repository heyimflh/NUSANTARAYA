import { motion } from "framer-motion";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import { ArrowRight, Loader2, Edit3 } from "lucide-react";
import {
  getRegionLabel,
  getProvinceLabel,
  getInterestLabels,
} from "@/lib/routes/composePreferenceSummary";

interface JourneyDraftProps {
  values: RoutePlannerFormValues;
  onEditStage: (stage: 1 | 2 | 3) => void;
  onSubmit: () => void;
  isLoading: boolean;
  isMobile?: boolean;
}

export function JourneyDraft({ values, onEditStage, onSubmit, isLoading, isMobile }: JourneyDraftProps) {
  const originLabel = getProvinceLabel(values.originProvinceId);
  const regionLabel = getRegionLabel(values.destinationRegionId);
  const interestLabels = getInterestLabels(values.interests);
  
  const paceLabel = values.travelPace === "santai" ? "Santai" : values.travelPace === "seimbang" ? "Seimbang" : "Eksploratif";
  const budgetLabel = values.budgetLevel === "hemat" ? "Lokal & Ringkas" : values.budgetLevel === "menengah" ? "Seimbang" : values.budgetLevel === "premium" ? "Lebih Nyaman" : "Fleksibel";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full flex flex-col gap-8"
    >
      {!isMobile && (
        <div className="mb-2">
          <h2 className="font-playfair text-[32px] font-bold text-[var(--route-ink)] mb-3">
            Siap melihat Nusantara versimu?
          </h2>
          <p className="font-inter text-[15px] text-[var(--route-muted)] leading-relaxed">
            Periksa kembali komposisi perjalananmu sebelum kami menyusun rute lengkapnya.
          </p>
        </div>
      )}

      {/* Draft Document Ticket */}
      <div className="relative w-full bg-[var(--route-paper)] rounded-2xl border border-[var(--route-border)] overflow-hidden shadow-sm">
        {/* Ticket Header */}
        <div className="bg-[var(--route-surface)]/50 border-b border-[var(--route-border)] border-dashed p-6 flex items-center justify-between">
          <span className="font-inter text-[12px] font-bold tracking-widest text-[var(--route-muted)] uppercase">
            Journey Draft
          </span>
          <button 
            onClick={() => onEditStage(1)}
            className="p-2 hover:bg-[var(--route-surface)] rounded-full text-[var(--route-muted)] hover:text-[var(--route-ink)] transition-colors"
            title="Edit Kerangka"
          >
            <Edit3 className="w-4 h-4" />
          </button>
        </div>
        
        {/* Notch effect */}
        <div className="absolute top-[68px] -left-3 w-6 h-6 bg-[var(--route-canvas)] rounded-full border-r border-[var(--route-border)]" />
        <div className="absolute top-[68px] -right-3 w-6 h-6 bg-[var(--route-canvas)] rounded-full border-l border-[var(--route-border)]" />

        {/* Ticket Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[16px] text-[var(--route-primary)] font-bold tracking-widest">
              {String(values.durationDays).padStart(2, "0")} DAYS
            </span>
            <div className="font-playfair text-[24px] sm:text-[28px] font-bold text-[var(--route-ink)] leading-tight">
              {originLabel ? `${originLabel} → ` : ""}{regionLabel || "Belum dipilih"}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-inter text-[11px] font-bold text-[var(--route-muted)] uppercase tracking-wider mb-1">
                Motif
              </span>
              <div className="font-inter text-[15px] font-medium text-[var(--route-ink)] flex items-center gap-2">
                {interestLabels.length > 0 ? interestLabels.join(" / ") : "Belum dipilih"}
                <button onClick={() => onEditStage(2)} className="text-[var(--route-primary)] hover:underline text-[12px] font-normal ml-2">Ubah</button>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="font-inter text-[11px] font-bold text-[var(--route-muted)] uppercase tracking-wider mb-1">
                  Kenyamanan
                </span>
                <span className="font-inter text-[15px] font-medium text-[var(--route-ink)]">
                  {budgetLabel.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[11px] font-bold text-[var(--route-muted)] uppercase tracking-wider mb-1">
                  Ritme
                </span>
                <span className="font-inter text-[15px] font-medium text-[var(--route-ink)]">
                  {paceLabel.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[var(--route-canvas)]/50 rounded-xl mt-2 border border-[var(--route-border)]">
            <p className="font-playfair text-[15px] italic text-[var(--route-earth)] leading-relaxed">
              &quot;{values.durationDays} hari {originLabel ? `dari ${originLabel} ` : ""}menuju {regionLabel}, dengan ritme {paceLabel.toLowerCase()} dan fokus pada {interestLabels.join(", ").toLowerCase()}.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-inter font-semibold text-[16px] transition-all duration-300 ${
          isLoading 
            ? "bg-[var(--route-surface)] text-[var(--route-muted)] cursor-not-allowed" 
            : "bg-[var(--route-primary)] text-white hover:bg-[var(--route-primary-hover)] active:scale-[0.98] shadow-sm"
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Menyusun rute harian...
          </>
        ) : (
          <>
            SUSUN RUTE SAYA
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

    </motion.div>
  );
}
