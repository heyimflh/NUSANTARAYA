import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Map, MapPin, Compass, Medal } from "lucide-react";
import { RegionalProfile } from "@/types/region";
import { useRegionalPassportProgress } from "@/hooks/useRegionalPassportProgress";

interface RegionalPortraitStageProps {
  region: RegionalProfile;
  onExploreMap: () => void;
  onOpenCompare: () => void;
}

export function RegionalPortraitStage({ region, onExploreMap, onOpenCompare }: RegionalPortraitStageProps) {
  const passportProgress = useRegionalPassportProgress(region.id);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-8 xl:gap-12 bg-[var(--atlas-paper)] rounded-2xl p-6 md:p-8 xl:p-10 border border-[var(--atlas-line)] shadow-inner relative overflow-hidden">
      {/* Decorative bg gradient for atlas feel */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none transition-colors duration-500"
        style={{ background: `radial-gradient(ellipse at top right, ${region.accentColor}, transparent 70%)` }}
      />
      {/* Tape decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm border border-white/20 -translate-y-3 rotate-1 z-20 shadow-[0_2px_4px_rgba(0,0,0,0.02)]" />
      
      {/* LEFT: Portrait & Promise */}
      <div className="flex-1 flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2 relative">
          <div className="absolute -left-3 -top-2 text-8xl font-serif text-[var(--atlas-gold)]/10 font-bold -z-10 tracking-tighter select-none pointer-events-none">
            {String(region.index).padStart(2, '0')}
          </div>
          <motion.h3 
            key={region.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl xl:text-[64px] font-serif font-bold text-[var(--atlas-ink)] tracking-tight leading-[1.05]"
          >
            {region.label}
          </motion.h3>
          <p className="text-lg md:text-xl font-medium" style={{ color: region.accentColor }}>
            {region.promise}
          </p>
        </div>

        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] xl:aspect-[16/10] rounded-xl overflow-hidden bg-[var(--atlas-canvas)] border border-[var(--atlas-line)] shadow-[0_4px_12px_rgba(36,42,46,0.05)] p-2">
          {!imgError && region.visualAsset ? (
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={region.visualAsset}
                alt={region.visualAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div className="absolute inset-0 m-2 rounded-lg flex flex-col items-center justify-center p-6 text-center" style={{ background: `linear-gradient(135deg, var(--atlas-canvas) 0%, ${region.accentColor}11 100%)` }}>
              <Compass className="w-12 h-12 mb-4 opacity-20" style={{ color: region.accentColor }} />
              <span className="text-xl font-serif font-bold text-[var(--atlas-ink)]/50">{region.label}</span>
              <span className="text-sm text-[var(--atlas-ink-soft)] mt-2">Visual sedang disiapkan</span>
            </div>
          )}
        </div>

        <p className="text-[15px] md:text-[17px] text-[var(--atlas-ink-soft)] leading-relaxed font-serif italic">
          {region.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button 
            onClick={onExploreMap}
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--atlas-ink)] text-white px-6 py-3.5 rounded-full font-medium text-[15px] hover:bg-[var(--atlas-ink-soft)] transition-colors shadow-sm"
          >
            <Map className="w-4 h-4" />
            Jelajahi {region.shortLabel} di Peta
          </button>
          <button 
            onClick={onOpenCompare}
            className="flex items-center justify-center gap-2 bg-transparent text-[var(--atlas-ink)] border border-[var(--atlas-ink)]/20 px-6 py-3.5 rounded-full font-medium text-[15px] hover:bg-[var(--atlas-ink)]/5 transition-colors"
          >
            Bandingkan Wilayah
          </button>
        </div>
      </div>

      {/* RIGHT: Dossier */}
      <div className="w-full xl:w-[320px] flex flex-col gap-8 relative z-10 xl:border-l border-[var(--atlas-line)] xl:pl-8 pt-6 xl:pt-0">
        
        {/* Province Count */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-px bg-[var(--atlas-gold)]"></span>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--atlas-ink-soft)]">PROVINSI</div>
          </div>
          <div className="text-[40px] font-serif font-bold text-[var(--atlas-ink)] flex items-baseline gap-2 leading-none">
            {region.provinceIds.length}
            <span className="text-base font-sans font-medium text-[var(--atlas-ink-soft)]">wilayah</span>
          </div>
        </div>

        {/* Signals */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-px bg-[var(--atlas-gold)]"></span>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--atlas-ink-soft)]">KARAKTER UTAMA</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {region.signals.map((signal, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-md bg-[var(--atlas-paper-aged)]/40 border border-[var(--atlas-line)] text-[13px] font-medium text-[var(--atlas-ink)] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                {signal}
              </span>
            ))}
          </div>
        </div>

        {/* Passport Progress */}
        <div className="mt-auto bg-gradient-to-b from-[var(--atlas-canvas)] to-[var(--atlas-paper)] rounded-xl p-5 border border-[var(--atlas-line)] shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-16 h-16 opacity-5 pointer-events-none">
            <Medal className="w-full h-full text-[var(--atlas-ink)]" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--atlas-ink)] flex items-center gap-1.5">
              <Medal className="w-4 h-4 text-[var(--atlas-gold)]" />
              PASSPORT
            </span>
            <span className="text-sm font-bold text-[var(--atlas-ink)]">
              {passportProgress.completedProvinceCount} / {passportProgress.totalProvinceCount}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-[var(--atlas-line)] rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-[var(--atlas-gold)] transition-all duration-1000"
              style={{ width: `${(passportProgress.completedProvinceCount / passportProgress.totalProvinceCount) * 100}%` }}
            />
          </div>
          
          <p className="text-[12px] text-[var(--atlas-ink-soft)] leading-relaxed">
            {passportProgress.completedProvinceCount === 0 
              ? "Belum dimulai. Kunjungi provinsi untuk mengumpulkan stempel."
              : passportProgress.badgeUnlocked 
                ? "Lengkap! Anda telah menjelajahi seluruh wilayah ini."
                : `Terus kumpulkan ${passportProgress.totalProvinceCount - passportProgress.completedProvinceCount} stempel lagi.`}
          </p>
        </div>

      </div>
    </div>
  );
}
