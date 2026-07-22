'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutManifesto } from '@/data/about/manifesto';
import { AboutGoldenThread } from './AboutGoldenThread';
import Link from 'next/link';
import { aboutAssets, handleImageError } from '@/data/about/assets';

export function FinalManifesto() {
  return (
    <section className="relative py-24 md:py-32 bg-about-canvas overflow-hidden flex flex-col items-center">
      
      {/* Background Thread leading to the section */}
      <div className="absolute top-0 h-32 left-1/2 transform -translate-x-1/2 z-0">
         <AboutGoldenThread />
      </div>

      <div className="nusa-container relative z-10 w-full pt-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl w-full max-w-6xl mx-auto border border-white/20"
        >
          {/* Background Image with Parallax-like feel */}
          <div className="absolute inset-0 z-0">
            <img 
              src={aboutAssets.hero.focalLandscape} 
              alt="Nusantara Landscape"
              className="w-full h-full object-cover transform scale-105"
              onError={handleImageError}
            />
            {/* Dark overlay for perfect text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-about-ink/80 via-about-ink/70 to-about-ink/90"></div>
          </div>

          {/* Card Content */}
          <div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center">
             
             {/* Decorative Compass Mark */}
             <div className="text-about-saffron mb-8 opacity-80">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2L12 22M2 12L22 12" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
             </div>

             <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] mb-8 max-w-4xl drop-shadow-lg">
               "{aboutManifesto.finalManifesto.text}"
             </h2>
             
             <p className="text-white/80 text-lg md:text-xl font-light mb-16 max-w-2xl">
               {aboutManifesto.finalManifesto.supporting}
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl">
               <Link 
                 href="/explore?source=about" 
                 className="w-full sm:w-auto bg-about-saffron text-about-ink px-10 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-about-saffron/20 focus:outline-none focus:ring-2 focus:ring-white"
               >
                 Mulai dari Nusa Map
               </Link>
               
               <Link 
                 href="/routes?source=about" 
                 className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-about-saffron"
               >
                 Susun Perjalanan
               </Link>
             </div>
             
             <div className="mt-12">
               <Link 
                 href="/archive?source=about"
                 className="group inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors focus:outline-none"
               >
                 <span>Atau telusuri jejak di Nusa Archive</span>
                 <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
               </Link>
             </div>
             
          </div>
        </motion.div>

      </div>
    </section>
  );
}
