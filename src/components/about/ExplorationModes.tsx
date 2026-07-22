'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutAssets, handleImageError } from '@/data/about/assets';

const modes = [
  {
    id: 'explore',
    title: 'Explore',
    description: 'Pengalaman visual dan discovery penuh. Biarkan rasa ingin tahu yang memandu perjalanan Anda.',
    image: aboutAssets.modes.explore,
    sampleContext: 'Menampilkan semua layer budaya secara bebas tanpa hierarki ketat.'
  },
  {
    id: 'tourist',
    title: 'Tourist',
    description: 'Fokus pada konteks praktis: itinerary, etika lokal, bahasa dasar, dan rute perjalanan efisien.',
    image: aboutAssets.modes.tourist,
    sampleContext: 'Menyoroti landmark, jarak, dan panduan esensial untuk pelancong.'
  },
  {
    id: 'learn',
    title: 'Learn',
    description: 'Pendekatan akademis: sumber tervalidasi, struktur pengetahuan, timeline sejarah, dan istilah lokal.',
    image: aboutAssets.modes.learn,
    sampleContext: 'Menyajikan data historis, kutipan naskah, dan kronologi secara mendalam.'
  }
];

export function ExplorationModes() {
  const [activeMode, setActiveMode] = useState<string>('explore');

  return (
    <section id="modes" className="relative py-24 md:py-32 bg-about-canvas overflow-hidden">
      <div className="nusa-container relative z-10">
        
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-about-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">Perspektif Fleksibel</span>
          <h2 className="text-3xl md:text-5xl font-serif text-about-ink mb-6">Tiga Cara Membaca Nusantara</h2>
          <p className="text-about-charcoal/80 text-lg leading-relaxed">
            Satu hamparan data besar yang kaya, disajikan melalui tiga sudut pandang berbeda. Ubah cara informasi ditampilkan sesuai dengan kebutuhan penjelajahan Anda hari ini.
          </p>
        </div>

        {/* Triptych Accordion */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:h-[600px]">
          {modes.map((mode) => {
            const isActive = activeMode === mode.id;
            
            return (
              <motion.div
                key={mode.id}
                layout
                onClick={() => setActiveMode(mode.id)}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl ${
                  isActive 
                    ? 'flex-[2.5] md:flex-[3] shadow-2xl shadow-black/10' 
                    : 'flex-[1] shadow-md hover:flex-[1.2]'
                }`}
                style={{ height: '100%', minHeight: isActive ? '350px' : '120px' }}
              >
                {/* Background Image */}
                <img 
                  src={mode.image} 
                  alt={mode.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    isActive 
                      ? 'opacity-100 scale-100 filter-none' 
                      : 'opacity-50 grayscale contrast-125 scale-105 group-hover:opacity-70 group-hover:grayscale-0'
                  }`}
                  onError={handleImageError}
                />
                
                {/* Gradient overlay for readability */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive 
                    ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10' 
                    : 'bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/70'
                }`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  
                  {/* Vertical Title (Inactive State) */}
                  <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 md:left-1/2 transition-all duration-500 flex flex-col md:items-center gap-4 ${
                    isActive ? 'opacity-0 pointer-events-none scale-90 blur-sm' : 'opacity-100 scale-100 blur-0'
                  }`}>
                     <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/40 group-hover:bg-about-saffron transition-colors mx-auto hidden md:block"></span>
                     <h3 className="text-xl md:text-3xl font-serif text-white tracking-widest uppercase md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                        {mode.title}
                     </h3>
                  </div>

                  {/* Detailed Content (Active State) */}
                  <div className={`transition-all duration-700 delay-100 transform ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                       <span className="w-4 h-4 rounded-full bg-about-saffron shadow-[0_0_15px_rgba(210,161,46,0.6)]"></span>
                       <h3 className="text-3xl md:text-5xl font-serif text-white">{mode.title}</h3>
                    </div>
                    
                    <p className="text-white/90 text-base md:text-xl leading-relaxed mb-8 max-w-xl font-light drop-shadow-sm">
                      {mode.description}
                    </p>
                    
                    <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium rounded-full hover:bg-white hover:text-about-ink transition-all duration-300 shadow-lg">
                      Pilih Mode {mode.title}
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-about-saffron group-hover/btn:text-white transition-colors">&rarr;</span>
                    </button>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
