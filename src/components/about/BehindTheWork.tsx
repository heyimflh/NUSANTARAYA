'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutPrinciples } from '@/data/about/principles';
import { aboutAssets, handleImageError } from '@/data/about/assets';

export function BehindTheWork() {
  return (
    <section id="behind-the-work" className="relative py-24 md:py-32 bg-about-ink text-about-paper">
      <div className="nusa-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Studio Field Notes Visual (7 columns) */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-about-charcoal bg-about-charcoal/30 aspect-[4/3] md:aspect-video"
            >
              <img 
                src={aboutAssets.editorial.nodes} 
                alt=""
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-about-ink/20"></div>
              
              {/* Process overlay labels */}
              <div className="absolute bottom-6 right-6 flex gap-2 flex-wrap justify-end max-w-[70%]">
                 {['Research', 'Architecture', 'Design', 'Build', 'Validate'].map((step, i) => (
                   <span key={i} className="text-[10px] uppercase tracking-wider bg-about-charcoal/80 text-about-line px-2 py-1 rounded backdrop-blur-sm border border-about-line/20">
                     {step}
                   </span>
                 ))}
              </div>
            </motion.div>
          </div>

          {/* Narrative (5 columns) */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">How the Work Is Made</h2>
            <div className="w-12 h-px bg-about-terracotta mb-6"></div>
            
            <p className="text-about-line text-lg leading-relaxed mb-8">
              {aboutPrinciples.team.description}
            </p>

            <div className="bg-about-charcoal/40 p-6 rounded-xl border border-about-charcoal">
               <h3 className="text-xs uppercase tracking-widest text-about-saffron-soft font-semibold mb-4">Independent Multidisciplinary Build</h3>
               <ul className="space-y-3">
                 {aboutPrinciples.team.roles.map((role, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-about-paper">
                     <span className="w-4 h-px bg-about-line/50"></span>
                     {role}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
