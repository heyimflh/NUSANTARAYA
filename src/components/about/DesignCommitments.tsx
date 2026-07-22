'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aboutPrinciples } from '@/data/about/principles';

export function DesignCommitments() {
  return (
    <section id="accessibility" className="relative py-24 md:py-32 bg-about-paper">
      <div className="nusa-container">
        
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-about-ink mb-6">
            Pengalaman yang indah harus tetap dapat digunakan.
          </h2>
          <p className="text-about-charcoal text-lg">
            Desain NUSANTARAYA tidak hanya diukur dari visualnya, melainkan juga seberapa tangguh ia bertahan di berbagai perangkat, kondisi jaringan, dan kebutuhan pengguna.
          </p>
        </div>

        {/* Ledger Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {aboutPrinciples.accessibility.map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="border-t-2 border-about-line pt-6 group hover:border-about-saffron transition-colors"
             >
               <div className="flex items-start gap-4">
                 <span className="text-about-muted font-mono text-sm mt-1">{String(idx + 1).padStart(2, '0')}</span>
                 <div>
                   <h3 className="text-about-ink font-semibold text-lg mb-2">{item.title}</h3>
                   <p className="text-about-muted text-sm leading-relaxed">{item.description}</p>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
        
        {/* Visual Proof / UI Snippet Demo */}
        <div className="mt-16 bg-about-canvas border border-about-line rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="md:w-1/2">
             <h4 className="font-medium text-about-ink mb-2">Fokus Tanpa Navy</h4>
             <p className="text-about-muted text-sm">
               Kami secara sadar menghindari warna *navy* dan turunannya demi mempertahankan estetika *warm paper*, namun tetap memberikan visibilitas interaksi yang tegas melalui *focus ring* berwarna saffron/terracotta. Coba bernavigasi menggunakan tombol `Tab`.
             </p>
           </div>
           <div className="md:w-1/2 flex justify-center gap-4">
             <button className="px-6 py-2 bg-about-paper border border-about-line text-about-ink rounded font-medium focus:outline-none focus:ring-4 focus:ring-about-saffron focus:ring-offset-2 focus:ring-offset-about-canvas">
               Fokus Saya
             </button>
             <button className="px-6 py-2 bg-about-paper border border-about-line text-about-ink rounded font-medium focus:outline-none focus:ring-4 focus:ring-about-terracotta focus:ring-offset-2 focus:ring-offset-about-canvas">
               Alternatif Fokus
             </button>
           </div>
        </div>

      </div>
    </section>
  );
}
