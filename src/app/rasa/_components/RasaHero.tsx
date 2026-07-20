"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";

export default function RasaHero() {
  const dishCount = CANONICAL_DISHES.length;
  
  // We can pick a specific dish for the hero, or hardcode the hero composition.
  // The PRD mentions "Culinary Still-Life Atlas" with a dish, ingredient, spice.
  const heroDish = CANONICAL_DISHES.find(d => d.id === "rendang") || CANONICAL_DISHES[0];
  const heroMedia = heroDish.media.find(m => m.type === "hero") || heroDish.media[0];

  return (
    <section id="rasa-hero" aria-labelledby="hero-heading" className="w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Copy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
             <span className="text-xs font-semibold tracking-widest text-[var(--rasa-muted)] uppercase">RASA / 01</span>
             <span className="w-12 h-[1px] bg-[var(--rasa-line)]"></span>
             <span className="text-xs font-semibold tracking-widest text-[var(--rasa-chili)] uppercase">NusaRasa · Atlas Kuliner Nusantara</span>
          </div>

          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--rasa-cacao)] leading-[1.1] mb-6 tracking-tight"
          >
            Indonesia, dibaca melalui rasa.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[var(--rasa-ink)] leading-relaxed mb-10 max-w-lg"
          >
            Jelajahi hidangan, rempah, bahan, dan cerita dari berbagai wilayah—lalu ubah rasa ingin tahumu menjadi perjalanan.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link 
              href="#taste-compass" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] hover:bg-[var(--rasa-ink)] transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Mulai Menjelajah Rasa
              <ArrowRight size={16} />
            </Link>
            <Link 
              href="#culinary-cartography" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-[var(--rasa-line)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)] transition-colors text-sm font-medium uppercase tracking-wider"
            >
              <Map size={16} />
              Buka Peta Kuliner
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm font-medium text-[var(--rasa-muted)]"
          >
            {dishCount}+ hidangan · 7 wilayah · Cerita dan sumber terkurasi
          </motion.div>
        </div>

        {/* Right Side: Culinary Still-Life Atlas (7 cols) */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/3] bg-[var(--rasa-paper-deep)] overflow-hidden flex items-center justify-center">
          
          {/* Main Hero Crop */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={heroMedia?.src} 
            alt="Culinary Still-Life Atlas" 
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: heroMedia?.focalPoint || "center" }}
            width={heroMedia?.width}
            height={heroMedia?.height}
            loading="eager" // LCP image
          />

          {/* Ingredient Annotation Line (Simplified for layout) */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 flex justify-between items-end">
            <div className="bg-[var(--rasa-paper)]/90 backdrop-blur-sm p-4 border border-[var(--rasa-line)] max-w-[240px]">
               <div className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] mb-1">Atlas / 01</div>
               <div className="font-serif text-lg text-[var(--rasa-cacao)] leading-tight mb-2">
                 {heroDish.localeContent.id.title}
               </div>
               <div className="text-xs text-[var(--rasa-ink)]">
                 Sebuah studi rasa dari {heroDish.provinceIds.map(p => p.replace("-", " ")).join(", ")}
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
