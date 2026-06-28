"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { destinations } from "./heroData";
import HeroNavbar from "./HeroNavbar";
import HeroDestinationSlider from "./HeroDestinationSlider";
import HeroRaniButton from "./HeroRaniButton";
import Link from "next/link";

export default function HeroNusantaraya() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDestination = destinations[activeIndex];

  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 500], [0, 50]);
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const uiOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const uiY = useTransform(scrollY, [0, 320], [0, 50]);

  const nextDestination = () => {
    setActiveIndex((current) => (current + 1) % destinations.length);
  };

  const previousDestination = () => {
    setActiveIndex((current) =>
      current === 0 ? destinations.length - 1 : current - 1
    );
  };

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#0D1B2A] text-white">
      {/* 🌊 Layer 0: Background Canvas (z-0) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.video
            key={activeDestination.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={activeDestination.background}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-105"
          />
        </AnimatePresence>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/80 via-transparent to-[#0D1B2A]/90 pointer-events-none z-0" />
      </motion.div>

      {/* 🔠 Layer 1: Massive Typography Texture (z-10) */}
      <motion.div
        style={{ y: textY }}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center pt-8"
      >
        <h1 className="select-none text-center font-heading font-black uppercase leading-[0.85] tracking-[-0.05em] text-white/10 mix-blend-overlay">
          <span className="block text-[18vw] md:text-[16vw]">NUSAN</span>
          <span className="block text-[18vw] md:text-[16vw]">TARAYA</span>
        </h1>
      </motion.div>

      {/* 🎛️ Layer 2: UI & Interaction (z-20) */}
      
      {/* 2.1 Top Header */}
      <div className="absolute top-0 inset-x-0 z-20">
        <HeroNavbar />
      </div>

      {/* 2.2 Center Content */}
      <motion.div
        style={{ opacity: uiOpacity, y: uiY }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A84C] drop-shadow-md"
        >
          Digital Twin Pariwisata Nusantara
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-4xl font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
        >
          Satu Peta, Ribuan Cerita
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Jelajahi destinasi, warisan budaya, dan rute perjalanan Indonesia
          melalui pengalaman visual interaktif berbasis peta.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/map"
            className="rounded-full bg-[#C9A84C] px-8 py-3.5 text-sm font-bold text-[#0D1B2A] transition-all hover:scale-105 hover:bg-[#E8D48B] shadow-[0_4px_16px_-2px_rgba(201,168,76,0.35)]"
          >
            Mulai Jelajah
          </Link>

          <Link
            href="/routes"
            className="rounded-full border border-[#F0EAD9]/40 bg-white/5 px-8 py-3.5 text-sm font-bold text-[#F0EAD9] backdrop-blur-md transition-all hover:scale-105 hover:border-[#C9A84C] hover:bg-white/10 shadow-lg"
          >
            Buat Rute
          </Link>
        </motion.div>
      </motion.div>

      {/* 2.3 Bottom Carousel & AI Button */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none">
        <div className="relative h-48 w-full pointer-events-auto">
          <HeroDestinationSlider
            destinations={destinations}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            onNext={nextDestination}
            onPrevious={previousDestination}
          />
          <HeroRaniButton />
        </div>
      </div>
    </section>
  );
}
