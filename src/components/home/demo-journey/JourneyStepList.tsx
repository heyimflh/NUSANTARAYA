"use client"

import type { DemoJourneyStep } from "@/data/demoJourney.types"
import { JourneyStepItem } from "./JourneyStepItem"

type JourneyStepListProps = {
  steps: DemoJourneyStep[]
  activeStep: string
  onStepChange: (id: string) => void
}

export function JourneyStepList({
  steps,
  activeStep,
  onStepChange,
}: JourneyStepListProps) {
  return (
    <div className="flex flex-col gap-3 relative">
      {/* Background line connecting steps */}
      {steps.length > 1 && (
        <div className="absolute left-[36px] top-6 bottom-6 w-[2px] bg-border/40 -z-10" />
      )}
      
      {steps.map((step) => (
        <JourneyStepItem
          key={step.id}
          step={step}
          isActive={activeStep === step.id}
          onActivate={() => onStepChange(step.id)}
        />
      ))}
    </div>
  )
}
