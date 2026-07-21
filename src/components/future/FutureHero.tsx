"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";

export function FutureHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-24 pb-16 overflow-hidden">
      
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[var(--future-solar)]" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10 mt-8">
        
        {/* Copy Column */}
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[var(--future-terracotta)]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--future-terracotta)]">
                Nusa Future Observatory
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-medium text-[var(--future-ink)] leading-[1.1] mb-6">
              Masa depan <br />
              <span className="italic text-[var(--future-muted)]">bukanlah</span> <br />
              satu tempat.
            </h1>
            
            <p className="text-base md:text-lg text-[var(--future-charcoal)] max-w-md mb-10 leading-relaxed font-light">
              Ia tumbuh dari banyak pulau, komunitas, kota, desa, pengetahuan lokal, dan teknologi yang bekerja selaras untuk kehidupan yang lebih baik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#observatory"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--future-ink)] text-[var(--future-paper)] text-sm font-semibold tracking-wider uppercase rounded-none hover:bg-[var(--future-charcoal)] transition-colors border border-[var(--future-ink)]"
              >
                Eksplorasi Data
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#ikn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[var(--future-ink)] text-sm font-semibold tracking-wider uppercase rounded-none hover:bg-[var(--future-paper)] transition-colors border border-[var(--future-line)] hover:border-[var(--future-charcoal)]"
              >
                Anchor: IKN
              </a>
            </div>
          </motion.div>
        </div>

        {/* Gallery Column */}
        <div className="w-full md:w-7/12 relative min-h-[60vh] md:min-h-[75vh]">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Background geometric accent */}
            <div className="absolute right-0 top-10 w-64 h-64 border border-[var(--future-line)] rounded-full opacity-50" />
            
            {/* Main Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-[4/3] future-frame z-20">
              <div className="relative w-full h-full overflow-hidden bg-[var(--future-paper-deep)]">
                <Image 
                  src="/assets/heritage-future/masa-depan.webp"
                  alt="Masa depan"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[var(--future-paper)] px-2 py-6 border border-[var(--future-line)] flex items-center justify-center shadow-sm">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] tracking-widest uppercase font-mono text-[var(--future-muted)]">
                  FIG. 1 — MASA DEPAN
                </span>
              </div>
            </div>

            {/* Context Image 1 */}
            <motion.div 
              className="absolute -top-4 -right-4 w-40 md:w-56 aspect-square future-frame z-30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-full h-full overflow-hidden bg-[var(--future-paper-deep)]">
                <Image 
                  src="/assets/heritage-future/warisan.webp"
                  alt="Warisan"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-[var(--future-paper)] px-3 py-1 border border-[var(--future-line)] shadow-sm">
                <span className="text-[10px] tracking-widest uppercase font-mono text-[var(--future-ink)]">
                  FIG. 2 — WARISAN
                </span>
              </div>
            </motion.div>

            {/* Context Image 2 */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-48 md:w-64 aspect-video future-frame z-30"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative w-full h-full overflow-hidden bg-[var(--future-paper-deep)]">
                <Image 
                  src="/assets/heritage-future/masa-kini.webp"
                  alt="Masa kini"
                  fill
                  className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
              </div>
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 flex items-center gap-1">
                <Leaf className="w-3 h-3 text-[var(--future-solar)]" />
                <span className="text-[9px] tracking-widest uppercase font-mono text-white">
                  TRANSISI
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center pb-8 z-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--future-ink)] to-transparent" />
      </div>
    </section>
  );
}
