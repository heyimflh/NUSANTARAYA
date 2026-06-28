"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { destinations } from "./heroData";
import HeroNavbar from "./HeroNavbar";
import HeroDestinationSlider from "./HeroDestinationSlider";
import HeroRaniButton from "./HeroRaniButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroNusantaraya() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeDestination = destinations[activeIndex];

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % destinations.length);
    }, 7000); // Auto-slide every 7 seconds

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const nextDestination = () => {
    setActiveIndex((current) => (current + 1) % destinations.length);
  };

  const previousDestination = () => {
    setActiveIndex((current) =>
      current === 0 ? destinations.length - 1 : current - 1
    );
  };

  // Avatar initials for the explorer badge
  const explorerInitials = ["JD", "MA", "SR", "KL"];
  const explorerGradients = [
    "from-[#C9A84C] to-amber-600",
    "from-teal-400 to-emerald-600",
    "from-blue-400 to-indigo-600",
    "from-rose-400 to-pink-600",
  ];

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#0D1B2A] text-white">
      
      {/* 🌊 Layer 0: Background Canvas (z-0) with cinematic transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeDestination.id}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <video
              src={activeDestination.background}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover scale-105"
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-[#0D1B2A]/90 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔠 Layer 1: Subtle Massive Typography Texture (z-10) */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center pt-8">
        <h1 className="select-none text-center font-heading font-black uppercase leading-[0.85] tracking-[-0.05em] text-white/5 mix-blend-overlay">
          <span className="block text-[18vw] md:text-[16vw]">NUSAN</span>
          <span className="block text-[18vw] md:text-[16vw]">TARAYA</span>
        </h1>
      </div>

      {/* 💎 Beautiful Outer Capsule Glass Frame (z-40) */}
      <div className="absolute inset-4 md:inset-6 rounded-[28px] md:rounded-[40px] border border-white/10 pointer-events-none z-40 shadow-[inset_0_0_80px_rgba(255,255,255,0.03),0_12px_48px_rgba(0,0,0,0.5)]" />
      <div className="absolute inset-5 md:inset-7 rounded-[26px] md:rounded-[38px] border border-white/5 pointer-events-none z-40" />

      {/* 🎛️ Layer 2: UI & Interaction (z-20/30) */}
      
      {/* 2.1 Top Header - Glassmorphic Navbar */}
      <div className="absolute top-0 inset-x-0 z-30">
        <HeroNavbar />
      </div>

      {/* 2.2 Center Content (Badge & Elegant Title) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center pointer-events-none pt-12 md:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Province Badge */}
            <span className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] border border-white/10 mb-4 shadow-md">
              {activeDestination.province}
            </span>

            {/* Cinematic Title */}
            <h2 className="max-w-4xl font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] tracking-wide">
              {activeDestination.tagline.split(" ").map((word, i) => {
                // Highlight the destination name or specific words in gold
                const isHighlighted = 
                  word.toLowerCase() === activeDestination.title.toLowerCase() ||
                  word.toLowerCase() === "raja" || 
                  word.toLowerCase() === "ampat" ||
                  word.toLowerCase() === "borobudur" || 
                  word.toLowerCase() === "rinjani" ||
                  word.toLowerCase() === "kelingking" ||
                  word.toLowerCase() === "harau";
                  
                return (
                  <span key={i} className={isHighlighted ? "text-[#C9A84C] font-normal" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2.3 Bottom Layout Container (z-30) */}
      <div 
        className="absolute bottom-8 md:bottom-12 inset-x-8 md:inset-x-12 z-30 flex flex-col md:flex-row items-end justify-between gap-6 pointer-events-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Side: Glassmorphic Destination Detail Card */}
        <div className="w-full md:w-auto max-w-[350px] pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/25 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex flex-col"
            >
              {/* Explorer Badge / Avatar Stack */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {explorerInitials.map((initial, i) => (
                    <div
                      key={i}
                      className={`inline-block h-7 w-7 rounded-full border border-black bg-gradient-to-tr ${explorerGradients[i]} flex items-center justify-center text-[9px] font-bold text-white shadow-md`}
                    >
                      {initial}
                    </div>
                  ))}
                  <div className="inline-block h-7 w-7 rounded-full border border-black bg-[#C9A84C] flex items-center justify-center text-[9px] font-bold text-black shadow-md">
                    +50
                  </div>
                </div>
                <span className="text-xs font-semibold text-white/90 font-heading">
                  {activeDestination.peopleCount} Orang Bergabung
                </span>
              </div>

              {/* Description */}
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-5 font-body line-clamp-3">
                {activeDestination.description}
              </p>

              {/* CTA Button (BromoRise Style) */}
              <Link
                href={`/map?dest=${activeDestination.id}`}
                className="flex items-center justify-between rounded-full bg-white/10 hover:bg-white/20 border border-white/15 px-5 py-2.5 text-xs md:text-sm font-semibold text-white transition-all group shadow-sm active:scale-98"
              >
                <span>Jelajahi Sekarang</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#C9A84C] group-hover:text-black">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Card Carousel */}
        <div className="w-full md:w-auto flex-1 flex justify-end pointer-events-auto">
          <HeroDestinationSlider
            destinations={destinations}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            onNext={nextDestination}
            onPrevious={previousDestination}
          />
        </div>
      </div>

      {/* Floating AI RANI Assistant Button (z-40) */}
      <div 
        className="absolute bottom-60 md:bottom-72 right-12 z-40 pointer-events-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <HeroRaniButton />
      </div>

    </section>
  );
}
