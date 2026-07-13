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
    <div className="flex-1 flex flex-col xl:flex-row gap-8 xl:gap-12 bg-[var(--region-paper)] rounded-3xl p-6 md:p-8 xl:p-10 border border-[var(--region-border)] shadow-sm relative overflow-hidden">
      {/* Decorative bg gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 opacity-20 pointer-events-none transition-colors duration-500"
        style={{ background: `linear-gradient(to bottom, ${region.accentColor}33, transparent)` }}
      />
      
      {/* LEFT: Portrait & Promise */}
      <div className="flex-1 flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <motion.h3 
            key={region.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl xl:text-5xl font-serif font-bold text-[var(--region-ink)]"
          >
            {region.label}
          </motion.h3>
          <p className="text-base md:text-lg font-medium text-[var(--region-accent)]" style={{ color: region.accentColor }}>
            {region.promise}
          </p>
        </div>

        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] xl:aspect-[5/4] rounded-2xl overflow-hidden bg-[var(--region-canvas)] border border-[var(--region-border)]">
          {!imgError && region.visualAsset ? (
            <Image
              src={region.visualAsset}
              alt={region.visualAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ background: `linear-gradient(135deg, var(--region-canvas) 0%, ${region.accentColor}11 100%)` }}>
              <Compass className="w-12 h-12 mb-4 opacity-20" style={{ color: region.accentColor }} />
              <span className="text-xl font-serif font-bold text-[var(--region-ink)]/50">{region.label}</span>
              <span className="text-sm text-[var(--region-muted)] mt-2">Visual sedang disiapkan</span>
            </div>
          )}
        </div>

        <p className="text-sm md:text-base text-[var(--region-muted)] leading-relaxed">
          {region.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button 
            onClick={onExploreMap}
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--region-ink)] text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[var(--region-ink)]/90 transition-colors"
          >
            <Map className="w-4 h-4" />
            Jelajahi {region.shortLabel} di Peta
          </button>
          <button 
            onClick={onOpenCompare}
            className="flex items-center justify-center gap-2 bg-[var(--region-canvas)] text-[var(--region-ink)] border border-[var(--region-border)] px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[var(--region-border)]/50 transition-colors"
          >
            Bandingkan Wilayah
          </button>
        </div>
      </div>

      {/* RIGHT: Dossier */}
      <div className="w-full xl:w-[280px] flex flex-col gap-6 relative z-10 xl:border-l xl:border-[var(--region-border)] xl:pl-8">
        
        {/* Province Count */}
        <div>
          <div className="text-[11px] font-bold tracking-widest uppercase text-[var(--region-muted)] mb-1">PROVINSI</div>
          <div className="text-3xl font-serif font-bold text-[var(--region-ink)] flex items-end gap-2">
            {region.provinceIds.length}
            <span className="text-sm font-sans font-medium text-[var(--region-muted)] pb-1">wilayah</span>
          </div>
        </div>

        {/* Signals */}
        <div>
          <div className="text-[11px] font-bold tracking-widest uppercase text-[var(--region-muted)] mb-3">KARAKTER UTAMA</div>
          <div className="flex flex-wrap gap-2">
            {region.signals.map((signal, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-lg bg-[var(--region-canvas)] border border-[var(--region-border)] text-xs font-medium text-[var(--region-ink)]">
                {signal}
              </span>
            ))}
          </div>
        </div>

        {/* Passport Progress */}
        <div className="bg-[var(--region-canvas)] rounded-xl p-4 border border-[var(--region-border)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--region-muted)] flex items-center gap-1.5">
              <Medal className="w-3.5 h-3.5 text-[var(--region-gold)]" />
              PASSPORT
            </span>
            <span className="text-xs font-bold text-[var(--region-ink)]">
              {passportProgress.completedProvinceCount} / {passportProgress.totalProvinceCount}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-[var(--region-border)] rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-[var(--region-gold)] transition-all duration-1000"
              style={{ width: `${(passportProgress.completedProvinceCount / passportProgress.totalProvinceCount) * 100}%` }}
            />
          </div>
          
          <p className="text-[11px] text-[var(--region-muted)] leading-tight">
            {passportProgress.completedProvinceCount === 0 
              ? "Belum dimulai. Jelajahi provinsi di wilayah ini untuk mendapatkan stempel."
              : passportProgress.badgeUnlocked 
                ? "Lengkap! Anda telah menjelajahi seluruh provinsi di wilayah ini."
                : `Terus kumpulkan ${passportProgress.totalProvinceCount - passportProgress.completedProvinceCount} stempel lagi.`}
          </p>
        </div>

      </div>
    </div>
  );
}
