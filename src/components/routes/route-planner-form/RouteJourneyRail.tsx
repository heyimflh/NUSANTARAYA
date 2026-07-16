import { Check } from "lucide-react";
import type { RoutePlannerFormValues } from "@/types/route-planner";

interface RouteJourneyRailProps {
  stage: 1 | 2 | 3;
  onStageChange: (stage: 1 | 2 | 3) => void;
  values: RoutePlannerFormValues;
}

export function RouteJourneyRail({ stage, onStageChange, values }: RouteJourneyRailProps) {
  // Determine if stages are completed
  const stage1Completed = values.destinationRegionId !== null;
  const stage2Completed = values.interests.length > 0;

  const steps = [
    {
      id: 1 as const,
      label: "Bentuk Perjalanan",
      isCompleted: stage1Completed,
    },
    {
      id: 2 as const,
      label: "Temukan Karakter",
      isCompleted: stage2Completed,
      disabled: !stage1Completed,
    },
    {
      id: 3 as const,
      label: "Lihat Draft Rute",
      isCompleted: false, // The final stage is just the review
      disabled: !stage1Completed || !stage2Completed,
    },
  ];

  return (
    <div className="sticky top-28 flex flex-col pt-12">
      <div className="font-playfair text-[20px] font-bold text-[var(--route-earth)] mb-8 tracking-wide">
        Susun Rute
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Continuous vertical line */}
        <div className="absolute top-3 bottom-8 left-[11px] w-[1px] bg-[var(--route-border)] -z-10" />

        {steps.map((step, idx) => {
          const isActive = stage === step.id;
          const isCompleted = step.isCompleted;
          
          return (
            <button
              key={step.id}
              onClick={() => {
                if (!step.disabled) onStageChange(step.id);
              }}
              disabled={step.disabled}
              className={`group flex items-start gap-4 text-left ${
                step.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
            >
              {/* Marker */}
              <div 
                className={`relative shrink-0 flex items-center justify-center w-6 h-6 mt-0.5 rounded-full border transition-colors duration-300 bg-[var(--route-canvas)] ${
                  isActive 
                    ? "border-[var(--route-primary)]" 
                    : isCompleted 
                      ? "border-[var(--route-moss)] text-[var(--route-moss)]" 
                      : "border-[var(--route-border)]"
                }`}
              >
                {isCompleted && !isActive && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                {isActive && <div className="w-2 h-2 rounded-full bg-[var(--route-primary)]" />}
              </div>

              {/* Label */}
              <div className="flex flex-col">
                <span 
                  className={`font-inter text-[14px] font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? "text-[var(--route-primary)]" : "text-[var(--route-muted)] group-hover:text-[var(--route-ink)]"
                  }`}
                >
                  Fase 0{step.id}
                </span>
                <span 
                  className={`font-playfair text-[16px] transition-colors duration-300 mt-1 ${
                    isActive ? "text-[var(--route-ink)] font-bold" : "text-[var(--route-muted)] group-hover:text-[var(--route-ink)]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
