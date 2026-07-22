'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutPillars } from '@/data/about/pillars';
import { AboutPillarId } from '@/types/about';
import Link from 'next/link';
import { aboutAssets } from '@/data/about/assets';

export function SevenPillarInstrument() {
  const [activePillarId, setActivePillarId] = useState<AboutPillarId>('sejarah');
  
  const activePillar = aboutPillars.find(p => p.id === activePillarId) || aboutPillars[0];

  return (
    <section id="seven-pillars" className="relative py-24 md:py-32 bg-about-charcoal overflow-hidden">
      {/* Background Image Crossfade */}
      <div className="absolute inset-0 z-0">
         <AnimatePresence mode="popLayout">
           <motion.img 
             key={activePillarId}
             src={`/assets/pillars/${activePillarId}.webp`}
             alt={activePillar.name}
             className="absolute inset-0 w-full h-full object-cover"
             initial={{ opacity: 0, scale: 1.05 }}
             animate={{ opacity: 0.4, scale: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
           />
         </AnimatePresence>
         
         {/* Vignette Gradients */}
         <div className="absolute inset-0 bg-gradient-to-r from-about-charcoal via-about-charcoal/60 to-about-charcoal/90 mix-blend-multiply" />
         <div className="absolute inset-0 bg-gradient-to-t from-about-charcoal via-transparent to-about-charcoal/80" />
      </div>

      <div className="nusa-container relative z-10">
        
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-about-paper mb-6 drop-shadow-lg"
          >
            Satu Peta, Tujuh Sudut Pandang
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-about-paper/80 text-lg max-w-2xl mx-auto"
          >
            Kami tidak memisahkan antara sejarah, alam, dan budaya. Peta kami adalah instrumen untuk membaca semuanya dalam satu konteks yang saling terhubung.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[550px]">
          
          {/* Left Navigation Tabs (3 cols) */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible hide-scrollbar pb-4 md:pb-0 relative z-20">
            {aboutPillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`group text-left px-5 py-4 rounded-xl transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-about-saffron relative overflow-hidden ${
                  activePillarId === pillar.id 
                    ? 'bg-white/10 backdrop-blur-md text-about-paper shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 font-medium' 
                    : 'text-about-paper/60 hover:text-about-paper hover:bg-white/5 border border-transparent'
                }`}
                aria-selected={activePillarId === pillar.id}
                role="tab"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <span className={`text-xs font-mono w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    activePillarId === pillar.id 
                      ? 'bg-about-saffron text-about-charcoal font-bold' 
                      : 'bg-white/10 text-about-paper/70 group-hover:bg-white/20'
                  }`}>
                    {pillar.name.charAt(0)}
                  </span>
                  <span className="text-base tracking-wide">{pillar.name}</span>
                </div>
                
                {/* Active Indicator Line */}
                {activePillarId === pillar.id && (
                  <motion.div 
                    layoutId="activePillarTab"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-about-saffron rounded-l-xl"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Center Space (Wait, what about the map? Let's put a beautiful circular crop of the map outline) */}
          <div className="md:col-span-4 lg:col-span-5 relative h-64 md:h-[500px] flex items-center justify-center pointer-events-none opacity-60 md:opacity-100 hidden md:flex">
             {/* Radial Glass Aperture */}
             <div className="absolute w-64 h-64 lg:w-96 lg:h-96 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5 animate-spin-slow"></div>
                <img 
                  src={aboutAssets.hero.mapOutline}
                  alt="" 
                  className="w-3/4 h-3/4 object-contain opacity-80 filter brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                />
             </div>
          </div>

          {/* Active Dossier Right (4 cols) */}
          <div className="md:col-span-4 lg:col-span-4 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillarId}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/40 border border-white/20 relative overflow-hidden"
                role="tabpanel"
              >
                {/* Subtle internal gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-about-saffron rounded-2xl flex items-center justify-center text-about-charcoal font-serif text-3xl mb-8 shadow-lg shadow-about-saffron/20 transform -rotate-3">
                    {activePillar.name.charAt(0)}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif text-[#FFFFFF] drop-shadow-md mb-5">{activePillar.name}</h3>
                  <p className="text-[#F8F4EA] text-base lg:text-lg leading-relaxed mb-8 font-light drop-shadow-sm">
                    {activePillar.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#E8B750] mb-4 font-bold drop-shadow-sm">Dimensi Eksplorasi:</h4>
                    <ul className="flex flex-wrap gap-2.5">
                      {activePillar.examples.map(ex => (
                        <li key={ex} className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg text-sm text-white hover:bg-white/20 transition-colors shadow-sm">
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={activePillar.ctaRoute}
                    className="group inline-flex items-center gap-3 text-about-saffron font-medium hover:text-white transition-colors focus:outline-none"
                  >
                    <span className="border-b border-about-saffron/30 pb-0.5 group-hover:border-white/50 transition-colors">{activePillar.ctaText}</span>
                    <span aria-hidden="true" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-about-saffron group-hover:text-about-charcoal transition-all transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
