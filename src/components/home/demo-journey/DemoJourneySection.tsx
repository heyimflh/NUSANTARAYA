"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { demoJourneySteps } from "@/data/demoJourney"
import type { DemoJourneySectionProps } from "@/data/demoJourney.types"
import { JourneyStepList } from "./JourneyStepList"
import { JourneyPreviewPanel } from "./JourneyPreviewPanel"
import { JourneyCTA } from "./JourneyCTA"
import { JourneyMockup } from "./JourneyMockup"

export function DemoJourneySection({
  steps = demoJourneySteps,
  defaultStepId = "map",
  autoPlay = true,
  autoPlayIntervalMs = 4000,
}: DemoJourneySectionProps) {
  const [activeStepId, setActiveStepId] = useState(defaultStepId)
  const [isPaused, setIsPaused] = useState(!autoPlay)
  const prefersReducedMotion = useReducedMotion()

  const activeStepIndex = steps.findIndex((s) => s.id === activeStepId)
  const activeStep = steps[activeStepIndex] || steps[0]

  const handleStepChange = useCallback((id: string) => {
    setActiveStepId(id)
    setIsPaused(true) // Pause autoplay on manual interaction
  }, [])

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const interval = setInterval(() => {
      setActiveStepId((currentId) => {
        const currentIndex = steps.findIndex((s) => s.id === currentId)
        const nextIndex = (currentIndex + 1) % steps.length
        return steps[nextIndex].id
      })
    }, autoPlayIntervalMs)

    return () => clearInterval(interval)
  }, [isPaused, prefersReducedMotion, steps, autoPlayIntervalMs])

  return (
    <section 
      aria-labelledby="demo-journey-title"
      className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 15% 20%, rgba(201,168,76,0.08), transparent 32%),
                     radial-gradient(circle at 85% 70%, rgba(45,107,228,0.06), transparent 34%),
                     #FFFDF8`
      }}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="inline-block mb-4 text-xs md:text-sm font-semibold tracking-widest uppercase text-primary">
            Demo Journey
          </span>
          <h2 id="demo-journey-title" className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Mulai dari Peta, Lanjutkan ke Cerita
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            NUSANTARAYA dirancang sebagai perjalanan digital yang utuh: pilih provinsi di peta, masuk ke cerita daerah, jelajahi budaya dan kuliner, susun rute perjalanan, kumpulkan stempel, lalu lanjutkan eksplorasi bersama RANI.
          </p>
        </motion.div>

        {/* Desktop Split Layout (≥ 1024px) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-stretch" onMouseLeave={() => !prefersReducedMotion && autoPlay && setIsPaused(false)}>
          {/* Left: Step List */}
          <div className="col-span-5 pt-8 flex flex-col justify-center">
            <JourneyStepList 
              steps={steps}
              activeStep={activeStepId}
              onStepChange={handleStepChange}
            />
          </div>

          {/* Right: Active Preview Panel */}
          <div className="col-span-7 flex flex-col justify-center">
            <JourneyPreviewPanel step={activeStep} />
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (< 1024px) */}
        <div className="flex flex-col gap-8 lg:hidden">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-4">
              <JourneyStepList 
                steps={[step]} // Render individually
                activeStep={activeStepId}
                onStepChange={handleStepChange}
              />
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[24px] overflow-hidden bg-background shadow-md border border-border mt-2 mb-6">
                <JourneyMockup type={step.mockupType} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <JourneyCTA />
      </div>
    </section>
  )
}
