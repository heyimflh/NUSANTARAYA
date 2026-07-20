"use client";

import { motion } from "framer-motion";
import { Pillar } from "@/data/pillars";
import { useMemo } from "react";

type PillarCardProps = {
  pillar: Pillar;
  index: number;
  activeIndex: number;
  isActive: boolean;
  onMouseEnter: () => void;
};

// Shared spring config for buttery-smooth feel
const smoothSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

// Lighter spring for secondary elements
const lightSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 35,
  mass: 0.6,
};

// Fast fade for content reveals
const quickFade = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

export function PillarCard({
  pillar,
  index,
  activeIndex,
  isActive,
  onMouseEnter,
}: PillarCardProps) {
  
  const positionOffset = index - 3;
  const absPosOffset = Math.abs(positionOffset);
  const signPos = Math.sign(positionOffset);
  
  const translateX = signPos * (absPosOffset * 100 + (absPosOffset > 1 ? (absPosOffset - 1) * 30 : 0));

  const absActiveOffset = Math.abs(index - activeIndex);
  
  const zIndex = 20 - absActiveOffset;
  const scale = 1 - absActiveOffset * 0.08;

  // Memoize shadow strings to prevent unnecessary recalculations
  const boxShadow = useMemo(() => 
    isActive 
      ? "0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.5)" 
      : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
    [isActive]
  );

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 cursor-pointer origin-center rounded-[32px] overflow-hidden bg-black"
      style={{
        width: "380px",
        height: "560px",
        marginTop: "-280px",
        marginLeft: "-190px",
        willChange: "transform",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
      animate={{
        x: translateX,
        scale: scale,
        zIndex: zIndex,
        boxShadow: boxShadow,
        borderColor: isActive ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      transition={smoothSpring}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image — GPU-accelerated with will-change */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${pillar.image})`,
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
        animate={{ 
          scale: isActive ? 1.05 : 1,
          opacity: isActive ? 1 : 0.85,
        }}
        transition={lightSpring}
      />

      {/* Bottom gradient for text legibility */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={quickFade}
      />

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        
        {/* Title Group */}
        <motion.div
          animate={{ y: isActive ? 0 : 25 }}
          transition={smoothSpring}
          className="relative z-10"
        >
          {/* Animated Icon & Tagline */}
          <div className="flex items-center gap-4 mb-4">
            {/* Pure Logo */}
            <motion.div 
              className="shrink-0 flex items-center justify-center"
              animate={{ 
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.9,
                y: isActive ? 0 : 5
              }}
              transition={lightSpring}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={pillar.icon} 
                alt={pillar.name} 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                style={{ 
                  filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.6)) drop-shadow(0px 1px 3px rgba(0,0,0,0.8))" 
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.span 
              className="text-white font-bold tracking-[0.25em] uppercase text-[10px] leading-relaxed"
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
              transition={quickFade}
              style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.8), 0px 0px 3px rgba(0,0,0,0.5)" }}
            >
              {pillar.tagline}
            </motion.span>
          </div>

          {/* Title */}
          <h3 
            className="font-serif text-4xl font-bold tracking-wide text-white mb-2 leading-none" 
            style={{ 
              color: "#ffffff",
              textShadow: "0px 4px 15px rgba(0,0,0,0.6), 0px 0px 4px rgba(0,0,0,0.4)" 
            }}
          >
            {pillar.name}
          </h3>
        </motion.div>

        {/* Hidden Details */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isActive ? 1 : 0,
            height: isActive ? "auto" : 0,
            marginTop: isActive ? "16px" : "0px",
          }}
          transition={{
            height: smoothSpring,
            opacity: quickFade,
            marginTop: smoothSpring,
          }}
          className="relative z-10 overflow-hidden"
        >
          <div className="w-10 h-px bg-white/60 mb-4" />

          <p 
            className="text-[14px] text-white font-medium leading-relaxed mb-6 max-w-[280px]"
            style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.8), 0px 0px 2px rgba(0,0,0,0.5)" }}
          >
            {pillar.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {pillar.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md shadow-sm"
                style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.6)" }}
              >
                {feature}
              </span>
            ))}
          </div>

          <div 
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:text-white/90 transition-colors cursor-pointer group pb-1.5 border-b-2 border-white/40 hover:border-white"
            style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Jelajahi Pilar
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.6))" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      </div>
      
      {/* Elegant Watermark Letter */}
      <motion.div
        animate={{ opacity: isActive ? 0.1 : 0.02, y: isActive ? 0 : 20 }}
        transition={lightSpring}
        className="absolute top-6 right-6 text-[120px] font-serif font-bold text-white select-none pointer-events-none leading-none drop-shadow-lg"
      >
        {pillar.letter}
      </motion.div>

    </motion.div>
  );
}
