'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutGoldenThread } from './AboutGoldenThread';
import Link from 'next/link';
import { aboutAssets, handleImageError } from '@/data/about/assets';

const horizons = [
  {
    id: 'heritage',
    title: 'Warisan',
    description: 'Menelusuri asal-usul, sejarah Jalur Rempah, arsip kebudayaan lisan, dan situs bersejarah.',
    route: '/archive?source=about',
    image: aboutAssets.panorama.heritage
  },
  {
    id: 'today',
    title: 'Hari Ini',
    description: 'Merasakan denyut budaya saat ini melalui peta interaktif, eksplorasi kuliner, dan rute perjalanan aktual.',
    route: '/explore?source=about',
    image: aboutAssets.panorama.present
  },
  {
    id: 'future',
    title: 'Masa Depan',
    description: 'Melihat bagaimana tradisi menjadi fondasi bagi inovasi, ekonomi kreatif, dan desa digital.',
    route: '/future?source=about',
    image: aboutAssets.panorama.future
  }
];

export function HeritageFuturePanorama() {
  return (
    <section id="heritage-future" className="relative py-24 md:py-32 bg-about-ink text-about-paper overflow-hidden">
      <div className="nusa-container relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Dari Warisan ke Masa Depan Digital</h2>
          <p className="text-about-line text-lg">
            Kami tidak melihat budaya sebagai relik masa lalu yang diam. Nusantara adalah garis waktu panjang yang terus bergerak.
          </p>
        </div>

        {/* Panorama Windows */}
        <div className="relative mt-20">
          
          {/* Golden Thread Horizon Line */}
          <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-0">
             <AboutGoldenThread orientation="horizontal" className="opacity-40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {horizons.map((horizon, index) => (
              <motion.div
                key={horizon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col h-[400px] md:h-[500px]"
              >
                {/* Focal Window */}
                <div className="flex-1 relative rounded-t-full overflow-hidden border border-about-charcoal bg-about-charcoal/50 group">
                   <img 
                     src={horizon.image} 
                     alt=""
                     className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 ease-in-out mix-blend-luminosity hover:mix-blend-normal"
                     onError={handleImageError}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-about-ink via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Content Block */}
                <div className="bg-about-charcoal/30 backdrop-blur-sm p-6 border border-t-0 border-about-charcoal rounded-b-xl flex-shrink-0 min-h-[160px] flex flex-col">
                  <h3 className="text-xl font-serif text-white mb-2">{horizon.title}</h3>
                  <p className="text-about-line text-sm leading-relaxed mb-4 flex-grow">
                    {horizon.description}
                  </p>
                  <Link 
                    href={horizon.route}
                    className="text-about-saffron-soft text-sm font-medium hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-about-saffron rounded"
                  >
                    Buka Halaman <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Atmosphere Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        {/* Soft noise/grain would go here if available, simulated by bg */}
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-about-charcoal to-about-ink"></div>
      </div>
    </section>
  );
}
