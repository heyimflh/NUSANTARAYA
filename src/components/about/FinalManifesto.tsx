'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutManifesto } from '@/data/about/manifesto';
import { AboutGoldenThread } from './AboutGoldenThread';
import Link from 'next/link';
import { aboutAssets, handleImageError } from '@/data/about/assets';

export function FinalManifesto() {
  return (
    <section className="relative py-24 md:py-32 bg-about-canvas overflow-hidden border-b border-about-line">
      
      {/* Background Thread leading to the end compass */}
      <div className="absolute top-0 bottom-32 left-1/2 transform -translate-x-1/2 z-0">
         <AboutGoldenThread />
      </div>

      <div className="nusa-container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Manifesto Text (7 columns) */}
          <div className="lg:col-span-7 bg-about-paper/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-about-line shadow-sm relative overflow-hidden">
             {/* Decorative compass/mark hint at bottom left */}
             <div className="absolute -bottom-12 -left-12 opacity-5 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2L12 22M2 12L22 12" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
             </div>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-2xl md:text-4xl font-serif text-about-ink leading-tight mb-6">
                 "{aboutManifesto.finalManifesto.text}"
               </h2>
               <p className="text-about-charcoal text-lg md:text-xl font-medium mb-10">
                 {aboutManifesto.finalManifesto.supporting}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link 
                   href="/explore?source=about" 
                   className="bg-about-ink text-about-paper px-8 py-4 rounded-md font-medium text-center hover:bg-about-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron"
                 >
                   Mulai dari Nusa Map
                 </Link>
                 <Link 
                   href="/routes?source=about" 
                   className="border border-about-ink text-about-ink px-8 py-4 rounded-md font-medium text-center hover:bg-about-paper hover:border-about-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron"
                 >
                   Susun Perjalanan
                 </Link>
               </div>
               
               <div className="mt-6 text-center sm:text-left">
                 <Link 
                   href="/archive?source=about"
                   className="text-about-muted text-sm font-medium hover:text-about-terracotta underline underline-offset-4 decoration-about-line transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron rounded"
                 >
                   Atau buka Nusa Archive &rarr;
                 </Link>
               </div>
             </motion.div>
          </div>

          {/* Strong Landscape Image (5 columns) */}
          <div className="lg:col-span-5 h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden border border-about-line shadow-sm">
             <img 
               src={aboutAssets.editorial.finalLandscape} 
               alt=""
               className="w-full h-full object-cover grayscale-[20%]"
               onError={handleImageError}
             />
             <div className="absolute inset-0 bg-about-terracotta/10 mix-blend-multiply"></div>
          </div>

        </div>

      </div>
      
      {/* Final Brand Compass Mark at the bottom center, where the thread ends */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-about-saffron w-12 h-12 flex items-center justify-center bg-about-canvas rounded-full z-10">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <circle cx="12" cy="12" r="10" />
           <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
         </svg>
      </div>
    </section>
  );
}
