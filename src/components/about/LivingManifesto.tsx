'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutManifesto } from '@/data/about/manifesto';
import { AboutGoldenThread } from './AboutGoldenThread';

export function LivingManifesto() {
  return (
    <section id="manifesto" className="relative py-24 md:py-32 bg-about-paper">
      {/* Top Border Thread */}
      <div className="absolute top-0 left-0 w-full">
         <AboutGoldenThread orientation="horizontal" className="opacity-50" />
      </div>

      <div className="nusa-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Vision (8 columns) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-about-ink leading-tight mb-8">
                "{aboutManifesto.vision}"
              </h2>
              
              <div className="w-16 h-px bg-about-terracotta mb-8"></div>
              
              <div className="prose prose-about">
                <p className="text-about-charcoal text-lg md:text-xl font-medium mb-6">Misi Kami:</p>
                <ul className="space-y-4">
                  {aboutManifesto.mission.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-1 text-about-saffron">✦</span>
                      <span className="text-about-muted text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Promise & Values Rail (4 columns) */}
          <div className="lg:col-span-4 relative border-l border-about-line pl-6 md:pl-10">
            <div className="sticky top-32 space-y-12">
              
              <div>
                <h3 className="text-xs uppercase tracking-widest text-about-terracotta font-semibold mb-6">
                  Prinsip Dasar
                </h3>
                
                <div className="space-y-8">
                  {aboutManifesto.values.map((value, idx) => (
                    <motion.div 
                      key={value.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative group"
                    >
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-about-line text-sm font-mono">{String(idx + 1).padStart(2, '0')}</span>
                        <h4 className="text-about-charcoal font-semibold text-lg relative inline-block">
                          {value.title}
                          {/* Saffron underline reveal on hover/view */}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-about-saffron transition-all duration-300 group-hover:w-full"></span>
                        </h4>
                      </div>
                      <p className="text-about-muted text-sm leading-relaxed pl-8">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
