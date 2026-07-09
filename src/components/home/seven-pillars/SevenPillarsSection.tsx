"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { nusantarayaPillars } from "@/data/pillars";
import { PillarCard } from "./PillarCard";
import { MobilePillarCard } from "./MobilePillarCard";
import { PillarClosingCard } from "./PillarClosingCard";

export function SevenPillarsSection() {
  const [activeDesktopIndex, setActiveDesktopIndex] = useState<number>(3);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);

  return (
    <section className="relative w-full pt-8 pb-16 md:pt-16 md:pb-32 overflow-hidden font-sans">
      {/* Background Decor - Exactly matching to blend seamlessly with Mini Stats */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/assets/branding/ornamen-batik.svg')`, backgroundSize: '520px', backgroundPosition: 'top center' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 md:mb-24 px-4 md:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-4"
          >
            Tujuh Pilar Eksplorasi
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[32px] leading-tight md:text-5xl lg:text-[64px] md:leading-[1.1] text-[#0D1B2A] mb-6"
          >
            Satu Peta, Tujuh Cara<br />
            <span className="italic font-light">Menjelajahi Nusantara</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 md:mt-6"
          >
            <img 
              src="/assets/branding/ornamen-divider.svg" 
              alt="" 
              className="w-24 md:w-32 h-auto opacity-60" 
            />
          </motion.div>
        </div>

        {/* ---------------- MOBILE LAYOUT ---------------- */}
        <div className="md:hidden w-full overflow-hidden mb-12">
          {/* Swipe indicator hint */}
          <div className="text-center text-[#0D1B2A]/40 text-xs font-medium uppercase tracking-widest mb-4 flex items-center justify-center gap-2 animate-pulse">
            <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            Geser & Tekan
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-12 pt-4 hide-scrollbar">
            {nusantarayaPillars.map((pillar, index) => {
              const isActive = index === activeMobileIndex;
              return (
                <MobilePillarCard
                  key={pillar.slug}
                  pillar={pillar}
                  isActive={isActive}
                  onClick={() => setActiveMobileIndex(index)}
                />
              );
            })}
          </div>
        </div>

        {/* ---------------- DESKTOP LAYOUT ---------------- */}
        <div className="hidden md:flex relative h-[650px] items-center justify-center w-full max-w-[1200px] mx-auto px-8">
          {nusantarayaPillars.map((pillar, index) => {
            const isActive = index === activeDesktopIndex;

            return (
              <PillarCard
                key={pillar.slug}
                pillar={pillar}
                index={index}
                activeIndex={activeDesktopIndex}
                isActive={isActive}
                onMouseEnter={() => setActiveDesktopIndex(index)}
              />
            );
          })}
        </div>

        {/* Closing Card Container */}
        <div className="mt-8 md:mt-24 w-full max-w-[1000px] mx-auto px-4 md:px-8">
          <PillarClosingCard />
        </div>

      </div>
    </section>
  );
}
