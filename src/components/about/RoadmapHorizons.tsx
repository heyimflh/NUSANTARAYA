'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutPrinciples } from '@/data/about/principles';
import { AboutGoldenThread } from './AboutGoldenThread';

export function RoadmapHorizons() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32 bg-about-canvas">
      <div className="nusa-container">
        
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-about-ink mb-6">Navigational Horizons</h2>
          <p className="text-about-charcoal text-lg">
            Kami membangun NUSANTARAYA bukan sebagai aplikasi yang selesai, melainkan ekosistem yang tumbuh perlahan dan pasti.
          </p>
        </div>

        {/* Horizons Layout */}
        <div className="relative">
          {/* Thread binding them horizontally on desktop, vertically on mobile */}
          <div className="absolute top-8 left-0 w-full hidden md:block z-0">
             <AboutGoldenThread orientation="horizontal" className="opacity-30" />
          </div>
          <div className="absolute top-0 bottom-0 left-6 md:hidden z-0">
             <AboutGoldenThread orientation="vertical" className="opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {aboutPrinciples.roadmap.map((phase, idx) => {
              const isActive = phase.status === 'available';
              const isProgress = phase.status === 'in-progress';
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`bg-about-paper rounded-xl p-6 md:p-8 border pl-12 md:pl-6 ${
                    isActive 
                      ? 'border-about-saffron shadow-sm' 
                      : 'border-about-line opacity-80'
                  }`}
                >
                  <div className="absolute left-[21px] md:static md:mb-6 w-3 h-3 md:w-4 md:h-4 rounded-full mt-1 md:mt-0 transform -translate-x-1/2 md:translate-x-0">
                     <span className={`block w-full h-full rounded-full ${
                       isActive ? 'bg-about-saffron' : isProgress ? 'bg-about-terracotta/60' : 'bg-about-line'
                     }`}></span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                     <h3 className={`text-xl font-serif ${isActive ? 'text-about-ink' : 'text-about-charcoal'}`}>
                       {phase.title}
                     </h3>
                     <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded font-medium ${
                       isActive ? 'bg-about-saffron-soft text-about-warning' : 
                       isProgress ? 'bg-about-canvas border border-about-terracotta/30 text-about-terracotta' :
                       'bg-about-canvas border border-about-line text-about-muted'
                     }`}>
                       {phase.status.replace('-', ' ')}
                     </span>
                  </div>
                  
                  <p className="text-about-muted text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
