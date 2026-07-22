'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { demoStoryboardSteps } from '@/data/about/journeys';
import Link from 'next/link';
import { handleImageError } from '@/data/about/assets';

export function ProductJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = demoStoryboardSteps[activeStepIndex];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#F6F3EC]">
      {/* Soft radial background glow behind the section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-about-saffron/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-about-terracotta/5 rounded-full blur-[100px]" />
      </div>

      <div className="nusa-container relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="text-about-saffron font-bold tracking-widest uppercase text-sm mb-4 block">Alur Pengalaman</span>
          <h2 className="text-3xl md:text-5xl font-serif text-about-ink mb-6">Dari Keingintahuan Menjadi Perjalanan</h2>
          <p className="text-about-charcoal/80 text-lg max-w-2xl">
            Lihat bagaimana NUSANTARAYA menemani langkah Anda dari sekadar melihat peta hingga menjejakkan kaki di dunia nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chapter Rail (Left side on Desktop, 5 columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
            <div className="flex-grow space-y-4 relative">
              
              {demoStoryboardSteps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`group w-full text-left relative z-10 flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-about-saffron ${
                      isActive 
                        ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-about-line/40' 
                        : 'hover:bg-white/50 border border-transparent'
                    }`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {/* Number Indicator */}
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 shadow-sm ${
                      isActive 
                        ? 'bg-about-saffron text-white shadow-about-saffron/30 scale-110'
                        : 'bg-white text-about-muted group-hover:bg-about-paper'
                    }`}>
                      {idx + 1}
                    </div>
                    
                    <div className="pt-2">
                      <h4 className={`text-lg font-serif transition-colors duration-300 ${isActive ? 'text-about-ink font-bold mb-3' : 'text-about-charcoal/70 group-hover:text-about-ink'}`}>
                        {step.title}
                      </h4>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="text-sm space-y-3 pb-2 text-about-charcoal/90">
                              <p><span className="font-semibold text-about-terracotta">Tujuan:</span> {step.learn}</p>
                              <p><span className="font-semibold text-about-terracotta">Aksi:</span> {step.do}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-about-line/30 flex items-center text-about-saffron text-xs font-bold uppercase tracking-wider">
                              Selanjutnya <span className="mx-2">&rarr;</span> {step.next}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 pt-8 pl-4">
               <Link 
                 href="/explore?source=about&journey=core" 
                 className="group inline-flex items-center gap-3 bg-about-ink text-about-paper px-8 py-4 rounded-xl font-medium hover:bg-about-charcoal hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-about-saffron"
               >
                 Mulai Alur Ini Sekarang
                 <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
               </Link>
            </div>
          </div>

          {/* Active Visual / Browser Mockup (Right side on Desktop, 7 columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
             <div className="relative rounded-2xl md:rounded-3xl bg-white shadow-2xl shadow-black/5 border border-about-line/30 overflow-hidden">
                
                {/* Browser Top Bar */}
                <div className="h-10 md:h-12 bg-[#F3F2F0] border-b border-about-line/30 flex items-center px-4 md:px-6 gap-2">
                   <div className="flex gap-1.5 md:gap-2">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]"></div>
                   </div>
                   <div className="mx-auto bg-white border border-about-line/40 rounded-md py-1 md:py-1.5 px-10 md:px-24 text-[10px] md:text-xs text-about-muted font-mono flex items-center justify-center opacity-70">
                      nusantaraya.id
                   </div>
                </div>

                {/* Browser Content Area (Image Aspect Ratio 16:9) */}
                <div className="relative aspect-video bg-about-canvas overflow-hidden flex items-center justify-center">
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={activeStep.id}
                       initial={{ opacity: 0, filter: 'blur(10px)' }}
                       animate={{ opacity: 1, filter: 'blur(0px)' }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.5, ease: "easeOut" }}
                       className="absolute inset-0 w-full h-full flex items-center justify-center"
                     >
                       <img 
                         src={activeStep.image} 
                         alt={activeStep.title}
                         className="w-full h-full object-cover object-center"
                         onError={handleImageError}
                       />
                       {/* Subtle overlay gradient to ensure image looks premium */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                     </motion.div>
                   </AnimatePresence>

                   {/* Floating Label inside the mockup */}
                   <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                      <motion.div
                         key={`label-${activeStep.id}`}
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3, duration: 0.4 }}
                         className="bg-white/90 backdrop-blur text-about-ink text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-white/50"
                      >
                         Tahap {activeStepIndex + 1}
                      </motion.div>
                   </div>
                </div>

             </div>
             
             {/* Decorative Elements behind the mockup */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-about-saffron/10 to-transparent -z-10 rounded-[3rem] opacity-50 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
