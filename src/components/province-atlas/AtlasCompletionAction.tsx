"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Stamp } from "lucide-react";
import { usePassport } from "@/context/app-context";

interface AtlasCompletionActionProps {
  provinceId: string;
  provinceName: string;
}

export function AtlasCompletionAction({ provinceId, provinceName }: AtlasCompletionActionProps) {
  const { passport, completeProvince } = usePassport();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const isCompleted = passport.stamps.includes(provinceId);

  const handleComplete = () => {
    if (isCompleted) return;
    setIsAnimating(true);
    // Add a slight delay for the visual effect before mutating the global state
    setTimeout(() => {
      completeProvince(provinceId, "atlas");
      setIsAnimating(false);
    }, 1500);
  };

  if (isCompleted) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center border-t border-[#DED3C3]/50">
        <div className="flex items-center gap-3 text-nusaGold mb-2">
          <CheckCircle2 size={24} />
          <span className="font-sans font-bold tracking-[0.1em] text-sm uppercase">Selesai Dijelajahi</span>
        </div>
        <p className="text-nusaNavy/60 text-sm italic font-serif">
          Anda telah menyelesaikan Atlas {provinceName} dan mendapatkan Stamp.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center border-t border-[#DED3C3]/50 relative">
      <AnimatePresence>
        {isAnimating && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="absolute z-10 pointer-events-none text-nusaGold drop-shadow-2xl"
          >
            <Stamp size={120} strokeWidth={1} />
          </motion.div>
        )}
      </AnimatePresence>
      
      <p className="font-serif italic text-nusaNavy/70 mb-6 text-center max-w-md">
        Apakah Anda telah selesai membaca dan menjelajahi semua keajaiban yang ada di {provinceName}?
      </p>
      
      <button
        onClick={handleComplete}
        disabled={isAnimating}
        className="group relative inline-flex items-center justify-center gap-3 bg-nusaNavy text-white px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase overflow-hidden transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">Tandai Selesai</span>
        <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-nusaGold group-hover:text-nusaNavy transition-colors">
          <CheckCircle2 size={16} />
        </div>
        <div className="absolute inset-0 bg-[#2D2419] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </button>
    </div>
  );
}
