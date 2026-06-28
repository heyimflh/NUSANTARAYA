"use client";

import { Destination } from "./heroData";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef, useEffect } from "react";

type HeroDestinationSliderProps = {
  destinations: Destination[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function HeroDestinationSlider({
  destinations,
  activeIndex,
  onSelect,
  onNext,
  onPrevious,
}: HeroDestinationSliderProps) {
  // We want to render the cards in the carousel.
  // In the BromoRise mockup, the carousel lists the items.
  // Clicking any card changes the slide.
  
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-end">
      {/* Cards Carousel Container */}
      <div className="flex items-center gap-3 overflow-visible px-2 py-4">
        {destinations.map((dest, i) => {
          const isActive = i === activeIndex;
          
          return (
            <motion.button
              key={dest.id}
              onClick={() => onSelect(i)}
              layout // Smooth size transitions
              transition={{
                layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }}
              className={`relative h-44 md:h-56 rounded-2xl overflow-hidden text-left border cursor-pointer select-none group focus:outline-none flex-shrink-0 shadow-lg ${
                isActive 
                  ? "w-64 md:w-80 border-white/30 shadow-[0_12px_32px_rgba(0,0,0,0.35)]" 
                  : "w-20 md:w-24 border-white/10 opacity-70 hover:opacity-90 hover:scale-102 hover:border-white/20 transition-all duration-300"
              }`}
            >
              {/* Card Background Media */}
              <div className="absolute inset-0 z-0 bg-[#0D1B2A]">
                <video
                  src={dest.background}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay inside card */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive 
                    ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent" 
                    : "bg-black/40 group-hover:bg-black/30"
                }`} />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 md:p-5 h-full">
                {isActive ? (
                  // Expanded card content
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-extrabold">
                      {dest.province}
                    </span>
                    <h3 className="text-white text-base md:text-lg font-bold font-heading drop-shadow-md leading-tight">
                      {dest.carouselTitle}
                    </h3>
                    <p className="text-white/70 text-[10px] md:text-xs leading-normal mt-1 line-clamp-2">
                      {dest.carouselDesc}
                    </p>
                  </motion.div>
                ) : (
                  // Collapsed card content (small vertical text or simple indicator)
                  <div className="flex flex-col items-center justify-end h-full w-full">
                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-[0.15em] writing-mode-vertical text-center transform -rotate-180 origin-center whitespace-nowrap mb-2 hidden md:block">
                      {dest.shortLabel}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors" />
                  </div>
                )}
              </div>

              {/* Subtle glass reflection outline */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
            </motion.button>
          );
        })}
      </div>

      {/* Navigation Buttons (Pills next to the carousel) */}
      <div className="flex items-center gap-2 mt-2 md:mt-0 md:pl-2">
        <button
          onClick={onPrevious}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 border border-white/10 hover:border-[#C9A84C]/50 cursor-pointer active:scale-95 shadow-md"
          aria-label="Destinasi sebelumnya"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={onNext}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 border border-white/10 hover:border-[#C9A84C]/50 cursor-pointer active:scale-95 shadow-md"
          aria-label="Destinasi berikutnya"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
