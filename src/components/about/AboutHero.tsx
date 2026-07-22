'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutManifesto } from '@/data/about/manifesto';
import { AboutGoldenThread } from './AboutGoldenThread';
import Link from 'next/link';
import { aboutAssets, handleImageError } from '@/data/about/assets';

export function AboutHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-32 pb-16 md:py-32 flex items-center overflow-hidden">
      <div className="nusa-container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column - Copy (5 columns desktop) */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <p className="text-about-terracotta text-sm uppercase tracking-widest font-semibold mb-4">
              {aboutManifesto.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-about-ink leading-tight mb-6">
              {aboutManifesto.headline}
            </h1>
            <p className="text-about-charcoal text-lg md:text-xl leading-relaxed mb-8">
              {aboutManifesto.supporting}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="#ecosystem-atlas" 
              className="bg-about-ink text-about-paper px-8 py-4 rounded-md font-medium text-center hover:bg-about-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron focus:ring-offset-2 focus:ring-offset-about-canvas"
            >
              Lihat Cara Kerjanya
            </Link>
            <Link 
              href="/explore?source=about" 
              className="border border-about-ink text-about-ink px-8 py-4 rounded-md font-medium text-center hover:bg-about-paper hover:border-about-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron focus:ring-offset-2 focus:ring-offset-about-canvas"
            >
              Mulai dari Nusa Map
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-about-line"
          >
            <p className="text-about-muted text-sm font-medium">
              38 provinsi &middot; 7 pilar &middot; Satu ekosistem eksplorasi
            </p>
          </motion.div>
        </div>

        {/* Right Column - Archipelago Aperture (7 columns desktop) */}
        <div className="md:col-span-7 relative h-[50vh] md:h-[80vh] flex items-center justify-center mt-8 md:mt-0">
          <motion.div 
            initial={{ clipPath: 'inset(10% 10% 10% 10% round 12px)' }} 
            animate={{ clipPath: 'inset(0% 0% 0% 0% round 16px)' }} 
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full h-full overflow-hidden bg-about-paper-deep rounded-2xl shadow-xl flex items-center justify-center"
          >
            {/* Focal Landscape - Using a placeholder if real image isn't available, but styled nicely */}
            <div className="absolute inset-0 bg-gradient-to-tr from-about-forest/20 to-about-saffron-soft/30 mix-blend-multiply" />
            <img 
              src={aboutAssets.hero.focalLandscape}
              alt="" 
              className="w-full h-full object-cover object-center"
              onError={handleImageError}
            />
            


            {/* Contextual Crop 1 (Top Right) */}
            <div className="absolute top-8 right-8 w-1/3 aspect-[4/3] bg-about-paper rounded-lg shadow-md overflow-hidden hidden md:block border border-about-line/50 p-1">
               <img 
                 src={aboutAssets.hero.heritageCrop}
                 alt="" 
                 className="w-full h-full object-cover rounded-sm grayscale-[20%]"
                 onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
               />
               <div className="absolute bottom-2 left-2 bg-about-paper/90 px-2 py-1 text-[10px] text-about-ink rounded backdrop-blur-sm">
                  Warisan
               </div>
            </div>

            {/* Contextual Crop 2 (Bottom Left) */}
            <div className="absolute bottom-8 left-8 w-1/4 aspect-square bg-about-paper rounded-full shadow-md overflow-hidden hidden md:block border border-about-line/50 p-1">
               <img 
                 src={aboutAssets.hero.futureCrop}
                 alt="" 
                 className="w-full h-full object-cover rounded-full sepia-[10%]"
                 onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
               />
               <div className="absolute inset-0 flex items-center justify-center bg-about-ink/10 rounded-full">
                 <span className="bg-about-paper/90 px-2 py-1 text-[10px] text-about-ink rounded-full backdrop-blur-sm">
                   Masa Depan
                 </span>
               </div>
            </div>

            {/* Subtle Map Silhouette overlay */}
            <img 
              src={aboutAssets.hero.mapOutline}
              alt="" 
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-contain opacity-[0.03] pointer-events-none p-12"
              onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
