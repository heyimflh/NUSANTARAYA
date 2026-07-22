'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutPersonas } from '@/data/about/personas';
import { aboutJourneys } from '@/data/about/journeys';
import { aboutFeatureNodes } from '@/data/about/featureNodes';
import Link from 'next/link';

export function PersonaJourneys() {
  const [activePersonaId, setActivePersonaId] = useState<string>('explorer');
  
  const activePersona = aboutPersonas.find(p => p.id === activePersonaId) || aboutPersonas[0];
  const activeJourney = aboutJourneys.find(j => j.personaIds.includes(activePersona.id as any)) || aboutJourneys[0];

  return (
    <section id="for-everyone" className="relative py-24 md:py-32 bg-about-canvas">
      <div className="nusa-container">
        
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-about-ink mb-4">Dirancang Untuk Berbagai Peran</h2>
          <p className="text-about-charcoal text-lg max-w-2xl">
            Tabel perjalanan ini menyediakan pintu masuk khusus sesuai dengan siapa Anda dan apa yang Anda cari.
          </p>
        </div>

        {/* Shared Table Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-about-paper p-6 md:p-10 rounded-2xl shadow-sm border border-about-line">
          
          {/* Index Selector (Left) */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar">
             {aboutPersonas.map((persona) => (
               <button
                 key={persona.id}
                 onClick={() => setActivePersonaId(persona.id)}
                 aria-selected={activePersonaId === persona.id}
                 className={`text-left px-4 py-3 rounded-lg transition-all whitespace-nowrap lg:whitespace-normal focus:outline-none focus:ring-2 focus:ring-about-saffron ${
                   activePersonaId === persona.id 
                     ? 'bg-about-ink text-about-paper font-medium shadow-md' 
                     : 'text-about-charcoal hover:bg-about-canvas border border-transparent'
                 }`}
               >
                 {persona.name}
               </button>
             ))}
          </div>

          {/* Active Journey Ticket (Right) */}
          <div className="lg:w-2/3 relative">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activePersonaId}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="h-full bg-about-canvas border border-about-line/60 rounded-xl p-6 md:p-10 relative overflow-hidden flex flex-col"
               >
                 {/* Decorative ticket background elements */}
                 <div className="absolute -right-16 -top-16 w-64 h-64 border-2 border-about-terracotta/5 rounded-full pointer-events-none"></div>
                 <div className="absolute right-8 top-8 opacity-20 pointer-events-none">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-about-ink">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2L12 22M2 12L22 12" />
                    </svg>
                 </div>

                 <div className="mb-8 z-10">
                   <h3 className="text-2xl font-serif text-about-ink mb-2">Jalur {activePersona.name}</h3>
                   <p className="text-about-charcoal">{activePersona.description}</p>
                 </div>

                 {/* The Journey Steps */}
                 <div className="relative mb-10 z-10 flex-grow">
                    <div className="absolute left-[11px] top-4 bottom-4 w-px bg-about-line border-l border-dashed border-about-muted/40"></div>
                    <ul className="space-y-6">
                      {activeJourney.stepFeatureIds.slice(0, 3).map((featureId, idx) => {
                         const feature = aboutFeatureNodes.find(f => f.id === featureId);
                         if (!feature) return null;
                         return (
                           <li key={`${featureId}-${idx}`} className="relative pl-8">
                             <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-about-paper border border-about-line flex items-center justify-center text-[10px] font-mono text-about-muted z-10">
                               {idx + 1}
                             </div>
                             <h4 className="font-semibold text-about-ink text-sm md:text-base">
                               {feature.localeContent.id.title}
                             </h4>
                             <p className="text-about-muted text-sm mt-1">
                               {feature.localeContent.id.summary}
                             </p>
                           </li>
                         );
                      })}
                    </ul>
                 </div>

                 <div className="bg-about-saffron-soft/30 p-4 rounded-lg border border-about-saffron/20 mb-8 z-10">
                    <h4 className="text-xs uppercase tracking-widest text-about-terracotta mb-2 font-semibold">Hasil yang Diharapkan:</h4>
                    <p className="text-about-charcoal text-sm">{activePersona.expectedValue}</p>
                 </div>

                 <div className="z-10 mt-auto">
                    <Link 
                      href={activeJourney.primaryAction.route}
                      className="inline-flex items-center justify-center gap-2 bg-about-ink text-about-paper px-8 py-3 rounded font-medium hover:bg-about-charcoal transition-colors w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-about-saffron"
                    >
                      {activeJourney.primaryAction.label}
                      <span aria-hidden="true">&rarr;</span>
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
