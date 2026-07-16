import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface MobileRouteNavigationProps {
  step: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
  onSubmit: () => void;
  isLoading: boolean;
}

export function MobileRouteNavigation({ 
  step, 
  totalSteps, 
  onNext, 
  onBack, 
  isValid, 
  onSubmit, 
  isLoading 
}: MobileRouteNavigationProps) {
  const isFirst = step === 1;
  const isLast = step === totalSteps;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[var(--route-paper)] border-t border-[var(--route-border)] p-4 pb-safe z-40 shadow-[0_-4px_24px_rgba(41,34,27,0.05)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        {!isFirst && (
          <button
            onClick={onBack}
            className="p-3 rounded-xl border border-[var(--route-border)] text-[var(--route-ink)] hover:bg-[var(--route-surface)] transition-colors active:scale-95"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        
        {!isLast ? (
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[var(--route-primary)] text-white rounded-xl font-inter font-semibold text-[15px] hover:bg-[var(--route-primary-hover)] active:scale-[0.98] transition-all shadow-sm"
          >
            Lanjut
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onSubmit}
            disabled={!isValid || isLoading}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-inter font-semibold text-[15px] transition-all ${
              !isValid || isLoading
                ? "bg-[var(--route-surface)] text-[var(--route-muted)] cursor-not-allowed"
                : "bg-[var(--route-primary)] text-white hover:bg-[var(--route-primary-hover)] active:scale-[0.98] shadow-sm"
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "SUSUN RUTE SAYA"
            )}
          </button>
        )}
      </div>
    </div>
  );
}
