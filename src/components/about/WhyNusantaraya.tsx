'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const problems = [
  {
    id: 'scattered',
    title: 'Informasi tersebar.',
    description: 'Data sejarah, budaya, dan pariwisata terpisah di berbagai platform tanpa konteks yang menyatukan.',
    solution: 'Map & Province Atlas'
  },
  {
    id: 'static',
    title: 'Platform sering statis.',
    description: 'Kebanyakan website budaya hanya menjadi galeri bacaan, bukan alat eksplorasi yang hidup.',
    solution: 'Nusa Archive & Rasa'
  },
  {
    id: 'disconnected',
    title: 'Perjalanan terpisah dari konteks.',
    description: 'Perencanaan itinerary seringkali mengabaikan sejarah dan etika lokal suatu destinasi.',
    solution: 'Nusa Route & Passport'
  },
  {
    id: 'unequal',
    title: 'Fokus tidak merata.',
    description: 'Banyak wilayah kaya budaya belum mendapatkan panggung digital yang setara.',
    solution: '38 Provinsi Tersedia'
  },
  {
    id: 'future',
    title: 'Masa depan terabaikan.',
    description: 'Warisan jarang dibaca sebagai fondasi untuk inovasi masa depan dan ekonomi kreatif.',
    solution: 'Nusa Future'
  }
];

export function WhyNusantaraya() {
  const [activeProblem, setActiveProblem] = useState<string | null>(null);

  return (
    <section id="why" className="relative py-24 md:py-32 bg-about-canvas">
      <div className="nusa-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Statement (4 columns) */}
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-about-ink leading-tight sticky top-32"
            >
              Indonesia terlalu kaya untuk dibaca sebagai daftar.
            </motion.h2>
          </div>

          {/* Fragments (5 columns) */}
          <div className="lg:col-span-5 relative min-h-[500px] flex items-center justify-center pt-8 lg:pt-0">
             {/* Background Abstract Grid */}
             <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #34291A 1px, transparent 0)', backgroundSize: '24px 24px' }} />

             <div className="relative w-full h-full flex flex-col gap-6 lg:gap-8 p-2 sm:p-4 max-w-[400px] mx-auto">
                {/* Fragment 1: Disconnected Map */}
                <motion.div 
                  className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl shadow-about-ink/5 border border-white transform -rotate-3 w-[85%] self-start relative z-10 hover:rotate-0 transition-transform duration-500"
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="w-full h-28 sm:h-32 relative rounded-xl overflow-hidden mb-3 group">
                    <div className="absolute inset-0 bg-about-charcoal/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src="/assets/features/nusa-map-preview-v2.webp" alt="Peta Terpisah" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded text-about-terracotta z-20 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-about-terracotta animate-pulse" />
                      Platform Statis
                    </div>
                  </div>
                  <div className="flex gap-2 px-1">
                    <div className="h-1.5 w-1/3 bg-about-line rounded-full" />
                    <div className="h-1.5 w-1/4 bg-about-line/50 rounded-full" />
                  </div>
                </motion.div>
                
                {/* Fragment 2: Scattered Information */}
                <motion.div 
                  className="bg-[#2D2419] p-4 rounded-2xl shadow-2xl shadow-about-ink/20 border border-white/10 transform rotate-2 w-[75%] self-end z-20 -mt-10 sm:-mt-12 hover:rotate-0 transition-transform duration-500"
                  initial={{ opacity: 0, x: 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-about-saffron rounded-full flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-2 w-full bg-white/20 rounded-full" />
                      <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                      <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
                      <span className="text-[8px] sm:text-[9px] text-about-saffron font-mono tracking-widest">DATA_X1</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                      <div className="h-1.5 w-2/3 bg-white/20 rounded-full" />
                      <span className="text-[8px] sm:text-[9px] text-white/40 font-mono tracking-widest">LOCAL_DB</span>
                    </div>
                  </div>
                  <div className="absolute -right-2 -top-3 sm:-right-4 bg-about-terracotta text-white text-[9px] font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-[#2D2419]">
                    Informasi Tersebar
                  </div>
                </motion.div>

                {/* Fragment 3: Lost Context */}
                <motion.div 
                  className="bg-white/95 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-about-line/50 transform -rotate-1 w-[90%] sm:w-[85%] self-center z-30 -mt-6 sm:-mt-8 hover:rotate-0 transition-transform duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <div className="flex gap-3">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden shrink-0 relative group">
                       <img src="/assets/pillars/tradisi.webp" alt="Budaya" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500" />
                    </div>
                    <div className="flex flex-col justify-center flex-1 space-y-2 sm:space-y-2.5 pr-2">
                      <div className="h-2 w-1/3 bg-about-charcoal/40 rounded-full mb-1" />
                      <div className="h-1.5 w-full bg-about-line/80 rounded-full" />
                      <div className="h-1.5 w-full bg-about-line/80 rounded-full" />
                      <div className="text-[9px] sm:text-[10px] text-about-muted font-serif italic mt-1 border-l-2 border-about-terracotta/40 pl-2">Arsip budaya lokal...</div>
                    </div>
                  </div>
                </motion.div>

                {/* Broken/Fragmented Thread binding them */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-0 opacity-30">
                  <svg width="2" height="100%" viewBox="0 0 2 500" preserveAspectRatio="none">
                    <line x1="1" y1="0" x2="1" y2="150" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="1" y1="200" x2="1" y2="350" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="1" y1="400" x2="1" y2="500" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                  <div className="absolute top-[175px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[2.5px] border-about-terracotta bg-about-paper" />
                  <div className="absolute top-[375px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[2.5px] border-about-terracotta bg-about-paper" />
                </div>
             </div>
          </div>

          {/* Problem Ledger (3 columns) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-about-muted mb-4 font-semibold border-b border-about-line pb-2">
              Fragmentasi
            </h3>
            
            {problems.map((problem, index) => (
              <div 
                key={problem.id}
                className="group relative"
                onMouseEnter={() => setActiveProblem(problem.id)}
                onMouseLeave={() => setActiveProblem(null)}
              >
                <div className="flex items-baseline gap-3 cursor-pointer">
                  <span className="text-about-terracotta/70 text-xs font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-about-charcoal font-medium group-hover:text-about-ink transition-colors">
                    {problem.title}
                  </h4>
                </div>
                
                <AnimatePresence>
                  {activeProblem === problem.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pl-7 pb-3">
                        <p className="text-sm text-about-muted leading-relaxed mb-2">
                          {problem.description}
                        </p>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-about-saffron-soft/30 text-about-warning text-[11px] font-medium rounded border border-about-saffron-soft">
                          <span className="w-1.5 h-1.5 rounded-full bg-about-saffron"></span>
                          Solusi: {problem.solution}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
