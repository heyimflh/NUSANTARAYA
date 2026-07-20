"use client";

import { motion } from "framer-motion";
import { Pillar } from "@/data/pillars";
import Image from "next/image";

type MobilePillarCardProps = {
  pillar: Pillar;
  isActive: boolean;
  onClick: () => void;
};

export function MobilePillarCard({
  pillar,
  isActive,
  onClick,
}: MobilePillarCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="shrink-0 snap-center rounded-[24px] overflow-hidden relative cursor-pointer"
      style={{
        width: "85vw",
        maxWidth: "320px",
        height: "480px",
      }}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pillar.image})` }}
        animate={{ 
          scale: isActive ? 1.05 : 1,
          opacity: isActive ? 1 : 0.85,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Subtle bottom gradient */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"
        animate={{ opacity: isActive ? 1 : 0.6 }}
        transition={{ duration: 0.5 }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        
        {/* Title Group */}
        <motion.div
          animate={{ y: isActive ? 0 : 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Animated Icon & Tagline */}
          <div className="flex items-center gap-3 mb-4">
            {/* Pure Logo (Always Visible) */}
            <motion.div 
              className="shrink-0 flex items-center justify-center"
              animate={{ 
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.9,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
              src={pillar.icon} 
                alt={pillar.name} 
                className="w-10 h-10 object-contain"
                style={{ 
                  filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.6)) drop-shadow(0px 1px 3px rgba(0,0,0,0.8))" 
                }}
              width={0}
              height={0}
              sizes="100vw"
            />
            </motion.div>

            {/* Tagline (Fades out when inactive) */}
            <motion.span 
              className="text-white font-bold tracking-[0.25em] uppercase text-[9px] leading-relaxed"
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
              transition={{ duration: 0.5 }}
              style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.8), 0px 0px 3px rgba(0,0,0,0.5)" }}
            >
              {pillar.tagline}
            </motion.span>
          </div>

          <h3 
            className="font-serif text-3xl font-bold tracking-wide text-white mb-2 leading-none" 
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
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 overflow-hidden"
        >
          <div className="w-10 h-px bg-white/60 mb-4" />

          <p 
            className="text-[13px] text-white font-medium leading-relaxed mb-6"
            style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.8), 0px 0px 2px rgba(0,0,0,0.5)" }}
          >
            {pillar.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {pillar.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md shadow-sm"
                style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.6)" }}
              >
                {feature}
              </span>
            ))}
          </div>

          <div 
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-white/90 transition-colors cursor-pointer pb-1.5 border-b-2 border-white/40"
            style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Jelajahi Pilar
            <svg
              className="w-4 h-4"
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
        animate={{ opacity: isActive ? 0.08 : 0.02, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 right-4 text-[100px] font-serif font-bold text-white select-none pointer-events-none leading-none drop-shadow-lg"
      >
        {pillar.letter}
      </motion.div>
    </motion.div>
  );
}
