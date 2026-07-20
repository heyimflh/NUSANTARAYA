"use client"

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { DemoJourneyStep } from "@/data/demoJourney.types"
import { JourneyMockup } from "./JourneyMockup"
import { ArrowUpRight } from "lucide-react"

type JourneyPreviewPanelProps = {
  step: DemoJourneyStep
}

export function JourneyPreviewPanel({ step }: JourneyPreviewPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Cursor tracking values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for buttery cursor movement
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[640px] rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/50 overflow-hidden flex flex-col p-6 md:p-8 transition-all duration-500 cursor-default">
      {/* Dynamic Ambient Shadow */}
      <div 
        className="absolute inset-0 opacity-[0.25] blur-[120px] transition-colors duration-1000 -z-10"
        style={{ backgroundColor: step.color }}
      />
      <div 
        className="absolute inset-0 transition-shadow duration-1000 -z-20"
        style={{ boxShadow: `0 30px 100px -20px ${step.color}40` }}
      />
      
      <div className="w-full flex flex-col h-full relative group">
        {/* Step Info Header */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm font-bold tracking-widest text-primary uppercase">Step {step.number}</span>
            <div className="h-[1px] w-12 bg-border" />
            <span className="text-sm text-muted-foreground/80 font-medium">{step.microcopy}</span>
          </div>
          
          {/* Staggered Title Reveal with Icon */}
          <div className="flex overflow-hidden items-center">
            <AnimatePresence mode="wait">
              <motion.img 
                key={`icon-${step.id}`}
                src={step.icon}
                alt=""
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full mr-4 shrink-0" 
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h3 
                key={step.id}
                className="text-2xl md:text-4xl font-serif font-bold text-foreground tracking-tight flex gap-2"
              >
                {step.shortTitle.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h3>
            </AnimatePresence>
          </div>
        </div>

        {/* Mockup Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex-grow w-full rounded-[24px] overflow-hidden z-10 bg-muted/20 border border-black/[0.04] shadow-[inset_0_4px_20px_rgba(0,0,0,0.02)] cursor-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <JourneyMockup type={step.mockupType} />
            </motion.div>
          </AnimatePresence>

          {/* Premium Follower Cursor */}
          <motion.div 
            className="absolute pointer-events-none z-50 flex items-center justify-center w-24 h-24 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-2xl overflow-hidden"
            style={{ 
              x: springX, 
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-xs font-semibold tracking-widest uppercase">Lihat</span>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Features/Tags */}
        <div className="mt-8 relative z-20 h-[40px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {step.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer",
                    "bg-white/80 backdrop-blur-sm border-black/[0.05] text-muted-foreground hover:text-foreground shadow-sm hover:shadow-md"
                  )}
                >
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
