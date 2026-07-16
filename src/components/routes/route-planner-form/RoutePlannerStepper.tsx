import React from "react";

interface RoutePlannerStepperProps {
  currentStep: 1 | 2 | 3;
  onStepChange: (step: 1 | 2 | 3) => void;
  isStep1Valid: boolean;
  isStep2Valid: boolean;
}

export function RoutePlannerStepper({ currentStep, onStepChange, isStep1Valid, isStep2Valid }: RoutePlannerStepperProps) {
  const steps = [
    {
      num: 1,
      label: "Rencana dasar",
      isValid: isStep1Valid,
      isAccessible: true,
    },
    {
      num: 2,
      label: "Preferensi",
      isValid: isStep2Valid,
      isAccessible: isStep1Valid,
    },
    {
      num: 3,
      label: "Tinjau",
      isValid: false,
      isAccessible: isStep1Valid && isStep2Valid,
    }
  ];

  return (
    <nav aria-label="Progress" className="w-full relative">
      <ol className="flex items-center w-full justify-between relative z-10">
        {steps.map((step, idx) => {
          const isCurrent = currentStep === step.num;
          const isComplete = step.isValid && step.num < currentStep;
          const disabled = !step.isAccessible;

          return (
            <React.Fragment key={step.num}>
              <li className="flex items-center shrink-0">
                <button
                  type="button"
                  onClick={() => onStepChange(step.num as 1 | 2 | 3)}
                  disabled={disabled}
                  aria-current={isCurrent ? "step" : undefined}
                  className="group flex items-center gap-3 focus:outline-none text-left"
                >
                  {/* Marker */}
                  <div className="relative shrink-0 w-6 h-6 flex items-center justify-center bg-[var(--planner-canvas)] z-10">
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300
                        ${isCurrent ? "bg-[var(--planner-primary)] text-white shadow-[0_0_0_4px_var(--planner-primary-soft)]" :
                          isComplete ? "bg-[var(--planner-espresso)] text-white" : 
                          "bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] text-[var(--planner-muted)] group-hover:border-[var(--planner-muted)]"}
                      `}
                    >
                      {isComplete ? (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="font-inter text-[10px] font-bold leading-none">
                          {step.num}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="flex flex-col gap-0 min-w-0 pr-1">
                    <span className={`font-inter text-[14px] sm:text-[15px] transition-colors duration-300 leading-tight
                      ${isCurrent ? "font-bold text-[var(--planner-ink)]" : isComplete ? "font-semibold text-[var(--planner-ink)]" : "font-medium text-[var(--planner-muted)]"}
                    `}>
                      {step.label}
                    </span>
                    {isCurrent && (
                      <span className="font-mono text-[9px] text-[var(--planner-primary)] uppercase tracking-wider mt-1 block">
                        Sedang Diisi
                      </span>
                    )}
                  </div>
                </button>
              </li>

              {/* Connector Line */}
              {idx !== steps.length - 1 && (
                <li className="flex-1 px-2 sm:px-4 flex items-center" aria-hidden="true">
                  <div 
                    className={`w-full h-[1px] transition-colors duration-500
                      ${isComplete ? "bg-[var(--planner-primary)]" : "bg-[var(--planner-warm-border)]"}
                    `} 
                  />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
