import React from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface StepNavigationProps {
  currentStep: 1 | 2 | 3;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  isStepValid: boolean;
  validationReason?: string | null;
  isLoading?: boolean;
}

export function StepNavigation({
  currentStep,
  onNext,
  onBack,
  onSubmit,
  isStepValid,
  validationReason,
  isLoading
}: StepNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      {/* Left Area (Progress or Back) */}
      <div className="flex items-center w-full sm:w-auto">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center justify-center gap-2 px-4 py-2.5 font-inter text-[14px] font-medium text-[var(--planner-ink)] hover:text-[var(--planner-primary)] transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali
          </button>
        ) : (
          <div className="flex items-center gap-3 px-2 sm:px-4">
            <div className="h-2 w-2 rounded-full bg-[var(--planner-primary)] shadow-[0_0_0_3px_var(--planner-primary-soft)]" />
            <span className="font-inter text-[14px] font-medium text-[var(--planner-muted)]">
              Langkah <span className="font-semibold text-[var(--planner-ink)]">1</span> dari 3
            </span>
          </div>
        )}
      </div>

      {/* Right Area (Action) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {!isStepValid && validationReason && (
          <span className="font-inter text-[13px] text-[var(--planner-primary)] font-medium text-center sm:text-right" role="alert">
            {validationReason}
          </span>
        )}

        {currentStep < 3 ? (
          <button
            type="button"
            onClick={onNext}
            disabled={!isStepValid}
            className={`group flex items-center justify-center gap-2 px-8 py-3 rounded-full font-inter text-[14px] font-semibold transition-all w-full sm:w-auto ${
              isStepValid
                ? "bg-[var(--planner-ink)] text-white shadow-sm hover:shadow-md hover:translate-y-[-1px]"
                : "bg-[var(--planner-canvas)] text-[var(--planner-muted)] cursor-not-allowed"
            }`}
          >
            Lanjut
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            disabled={isLoading || !isStepValid}
            className={`group flex items-center justify-center gap-2 px-8 py-3 rounded-full font-inter text-[14px] font-semibold transition-all w-full sm:w-auto relative overflow-hidden ${
              isLoading || !isStepValid
                ? "bg-[var(--planner-canvas)] text-[var(--planner-muted)] cursor-not-allowed"
                : "bg-[var(--planner-primary)] text-white shadow-sm hover:shadow-md hover:translate-y-[-1px]"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Menyusun Dossier...</span>
              </>
            ) : (
              <span>Buat Rute Perjalanan</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
