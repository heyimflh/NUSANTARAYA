import React from "react";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { motion, useReducedMotion } from "framer-motion";

type PassportManifestoProps = {
  summary: PassportProgressSummary;
};

export const PassportManifesto: React.FC<PassportManifestoProps> = ({ summary }) => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: any = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full pt-16 md:pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
      {/* Decorative vertical label & index */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-row md:flex-col items-start gap-4 md:gap-8 shrink-0 md:w-24"
      >
        <span className="text-4xl md:text-5xl font-serif text-[#2C2118] font-bold">09</span>
        <div className="h-[1px] w-12 md:w-[1px] md:h-24 bg-[#D8C8A8]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#776A5D] [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] md:rotate-180">
          Nusa Passport
        </span>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex-1 max-w-3xl"
      >
        <h2 id="passport-progress-heading" className="text-5xl md:text-[76px] leading-[1.05] font-serif text-[#2C2118] mb-8 tracking-tight">
          Setiap Provinsi Meninggalkan Jejak.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="flex-1">
            <p className="text-lg md:text-xl text-[#3A281C] leading-relaxed mb-6 font-medium">
              Jelajahi provinsi, selesaikan pengalaman, dan kumpulkan jejak Nusantaramu. Setiap langkah disimpan aman di perangkatmu.
            </p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-[#D8C8A8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A302B]">
                Status Ekspedisi
              </span>
              <span 
                className="text-sm font-medium text-[#776A5D]"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={38}
                aria-valuenow={summary.completedCount}
                aria-valuetext={`${summary.completedCount} dari 38 jejak selesai`}
              >
                {summary.completedCount} dari 38 jejak selesai
              </span>
            </div>
          </div>

          {/* Decorative Seal */}
          <div className="shrink-0 relative w-32 h-32 hidden md:flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_30s_linear_infinite]" aria-hidden="true">
              <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[10.5px] uppercase tracking-[0.22em] fill-[#B85C38]">
                <textPath href="#textPath" startOffset="0%">
                  Nusantaraya • Digital Passport • Archipelago • 
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 m-auto w-12 h-12 border border-[#B85C38] rounded-full flex items-center justify-center">
              <span className="text-[#B85C38] text-xl font-serif">N</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
