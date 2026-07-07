"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import type { DemoJourneyStep } from "@/data/demoJourney.types"

type JourneyStepItemProps = {
  step: DemoJourneyStep
  isActive: boolean
  onActivate: () => void
}

export function JourneyStepItem({
  step,
  isActive,
  onActivate,
}: JourneyStepItemProps) {
  return (
    <motion.button
      onClick={onActivate}
      onMouseEnter={onActivate}
      aria-pressed={isActive}
      aria-label={`Lihat langkah ${step.number}: ${step.title}`}
      className={cn(
        "group relative flex w-full items-start gap-4 rounded-[24px] text-left transition-all duration-500",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        isActive
          ? "p-5 bg-white/40 backdrop-blur-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/20 scale-100 opacity-100 my-2"
          : "p-3 bg-transparent border border-transparent opacity-50 scale-95 hover:opacity-70 blur-[0.5px] hover:blur-0 my-0"
      )}
    >
      {/* Active Dot aligned with the progress line */}
      {isActive && (
        <motion.div
          layoutId="activeDot"
          className="absolute left-[13px] top-[26px] w-[6px] h-[6px] rounded-full bg-primary z-10"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Number */}
      <span
        className={cn(
          "shrink-0 font-serif text-2xl font-bold transition-colors duration-500 relative z-20 w-8 text-center",
          isActive ? "text-primary mt-1" : "text-muted-foreground/60 mt-0"
        )}
      >
        {step.number}
      </span>

      <div className="flex flex-col w-full">
        {/* Title */}
        <div className="flex items-center h-8">
          <h3
            className={cn(
              "font-sans font-semibold tracking-tight transition-colors duration-500",
              isActive ? "text-lg text-foreground" : "text-base text-foreground group-hover:text-foreground"
            )}
          >
            {step.title}
          </h3>
        </div>

        {/* Accordion Description */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 8 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="text-[15px] leading-relaxed text-muted-foreground pl-[44px] pb-1">
                {step.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  )
}
