'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutFeatureNodes } from '@/data/about/featureNodes';
import Link from 'next/link';

export function EcosystemHandoff() {
  // Only show available features for handoff
  const availableFeatures = aboutFeatureNodes.filter(f => f.status === 'available');

  return (
    <section id="open-ecosystem" className="relative py-24 md:py-32 bg-about-paper-deep/20">
      <div className="nusa-container">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-about-ink mb-6">Buka Ekosistem</h2>
          <p className="text-about-charcoal text-lg">
            Pilih pintu masuk Anda. Setiap jalur akan membawa Anda pada cerita yang sama, namun dengan sudut pandang yang berbeda.
          </p>
        </div>

        {/* Radial / Editorial Constellation Layout (Simulated with a varied grid) */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {availableFeatures.map((feature, idx) => (
             <motion.div
               key={feature.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
             >
               <Link 
                 href={feature.route || '/'}
                 className="group relative flex items-center gap-3 bg-about-paper px-6 py-4 rounded-full border border-about-line hover:border-about-saffron hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-about-saffron"
               >
                 <span className="w-2 h-2 rounded-full bg-about-terracotta/40 group-hover:bg-about-terracotta transition-colors"></span>
                 <span className="text-about-charcoal font-medium group-hover:text-about-ink transition-colors">
                   {feature.localeContent.id.title}
                 </span>
               </Link>
             </motion.div>
          ))}
          
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: availableFeatures.length * 0.05 }}
          >
             <Link 
               href="/"
               className="group relative flex items-center gap-3 bg-about-ink px-6 py-4 rounded-full border border-about-ink hover:bg-about-charcoal transition-all focus:outline-none focus:ring-2 focus:ring-about-saffron"
             >
               <span className="w-2 h-2 rounded-full bg-about-saffron"></span>
               <span className="text-about-paper font-medium">
                 Kembali ke Beranda
               </span>
             </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
