interface MobileRouteProgressProps {
  step: number;
  totalSteps: number;
}

export function MobileRouteProgress({ step, totalSteps }: MobileRouteProgressProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-[var(--route-paper)] sticky top-16 z-30 pt-4 pb-2 px-4 -mx-4 w-[calc(100%+2rem)] border-b border-[var(--route-border)] shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="font-inter text-[11px] font-bold text-[var(--route-muted)] uppercase tracking-wider">
          {step <= 3 ? "Bentuk Perjalanan" : step <= 6 ? "Temukan Karakter" : "Review Draft"}
        </span>
        <span className="font-mono text-[11px] font-bold text-[var(--route-primary)]">
          {step} / {totalSteps}
        </span>
      </div>
      <div className="w-full h-1.5 bg-[var(--route-surface)] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[var(--route-primary)] transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
}
