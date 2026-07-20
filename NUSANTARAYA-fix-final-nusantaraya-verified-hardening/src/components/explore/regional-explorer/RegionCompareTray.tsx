import React from "react";
import { X } from "lucide-react";
import { RegionId, RegionalProfile } from "@/types/region";
import { regions } from "@/data/regions/regions";
import { useRegionalPassportProgress } from "@/hooks/useRegionalPassportProgress";

import { ExploreLayerId } from "@/data/exploreControls";

interface RegionCompareTrayProps {
  activeRegion: RegionalProfile;
  compareRegionId: RegionId | null;
  activeLayer: ExploreLayerId;
  onSelectCompare: (id: RegionId) => void;
  onClose: () => void;
  onSwap: () => void;
}

export function RegionCompareTray({ activeRegion, compareRegionId, onSelectCompare, onClose, onSwap }: RegionCompareTrayProps) {
  
  const compareRegion = compareRegionId ? regions.find(r => r.id === compareRegionId) : null;

  return (
    <div className="w-full mt-10 bg-[var(--atlas-paper-aged)]/20 border border-[var(--atlas-line)] rounded-2xl p-6 md:p-8 xl:p-10 shadow-sm relative animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-sm">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-8 pb-5 border-b border-[var(--atlas-line)]/60">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-px bg-[var(--atlas-gold)]"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--atlas-ink-soft)]">
              Mode Analisis
            </span>
          </div>
          <h4 className="text-2xl md:text-3xl font-serif font-bold text-[var(--atlas-ink)] mb-2">
            Bandingkan Wilayah
          </h4>
          <p className="text-[14px] text-[var(--atlas-ink-soft)] font-serif italic">
            Berbeda dalam fokus cerita, pilar dominan, dan jejak Nusantara.
          </p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-[var(--atlas-paper)] transition-colors text-[var(--atlas-ink-soft)] hover:text-[var(--atlas-ink)] border border-transparent hover:border-[var(--atlas-line)]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Selector for B if not selected */}
      {!compareRegion && (
        <div className="flex flex-col items-center justify-center py-12 text-center bg-[var(--atlas-paper)]/50 rounded-xl border border-[var(--atlas-line)]/50 border-dashed">
          <p className="text-base text-[var(--atlas-ink)] font-medium mb-6">
            Pilih wilayah untuk dibandingkan dengan <strong className="font-serif italic">{activeRegion.label}</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {regions.filter(r => r.id !== activeRegion.id).map(region => (
              <button
                key={region.id}
                onClick={() => onSelectCompare(region.id)}
                className="px-5 py-2.5 rounded-full bg-[var(--atlas-paper)] border border-[var(--atlas-line)] text-sm font-semibold text-[var(--atlas-ink)] hover:border-[var(--atlas-gold)] hover:text-[var(--atlas-gold)] transition-colors shadow-sm"
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Comparison View */}
      {compareRegion && (
        <div className="flex flex-col xl:flex-row gap-8 relative">
          
          {/* Swap Button (Desktop Center) */}
          <div className="hidden xl:flex absolute left-1/2 top-0 -translate-x-1/2 bottom-0 w-px bg-[var(--atlas-line)] items-center justify-center z-10">
            <button 
              onClick={onSwap}
              className="bg-[var(--atlas-paper)] border border-[var(--atlas-line)] text-[var(--atlas-ink-soft)] hover:text-[var(--atlas-gold)] hover:border-[var(--atlas-gold)] rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm flex items-center gap-1"
            >
              Tukar
            </button>
          </div>

          {/* Swap Button (Mobile) */}
          <div className="xl:hidden flex justify-center py-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--atlas-line)] -translate-y-1/2 z-0"></div>
            <button 
              onClick={onSwap}
              className="relative z-10 bg-[var(--atlas-paper)] border border-[var(--atlas-line)] text-[var(--atlas-ink-soft)] hover:text-[var(--atlas-gold)] rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm"
            >
              Tukar Posisi
            </button>
          </div>

          <CompareColumn region={activeRegion} isPrimary={true} />
          <CompareColumn region={compareRegion} isPrimary={false} onChangeRegion={() => onSelectCompare(null as unknown as RegionId)} />
          
        </div>
      )}

    </div>
  );
}

function CompareColumn({ region, isPrimary, onChangeRegion }: { region: RegionalProfile, isPrimary: boolean, onChangeRegion?: () => void }) {
  const passport = useRegionalPassportProgress(region.id);

  return (
    <div className="flex-1 flex flex-col gap-6">
      
      {/* Region Identity */}
      <div className="flex flex-col gap-2 pb-5 border-b border-[var(--atlas-line)] relative">
        {!isPrimary && onChangeRegion && (
          <button onClick={onChangeRegion} className="absolute right-0 top-0 text-[11px] font-semibold text-[var(--atlas-ink-soft)] hover:text-[var(--atlas-ink)] underline underline-offset-4">
            Ganti Wilayah
          </button>
        )}
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--atlas-ink-soft)]">
          {isPrimary ? "Wilayah Aktif" : "Wilayah Pembanding"}
        </span>
        <h5 className="text-4xl font-serif font-bold text-[var(--atlas-ink)] tracking-tight leading-none" style={{ color: isPrimary ? region.accentColor : "var(--atlas-ink)" }}>
          {region.label}
        </h5>
      </div>

      {/* Dimensions */}
      <div className="grid grid-cols-2 gap-6 bg-[var(--atlas-paper)] border border-[var(--atlas-line)] p-5 rounded-xl shadow-sm">
        <div>
          <span className="block text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--atlas-ink-soft)] mb-2">Cakupan</span>
          <span className="font-serif text-2xl font-bold text-[var(--atlas-ink)]">{region.provinceIds.length} <span className="text-sm font-sans font-medium text-[var(--atlas-ink-soft)]">Provinsi</span></span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--atlas-ink-soft)] mb-2">Passport</span>
          <span className="font-serif text-2xl font-bold text-[var(--atlas-ink)]">{passport.completedProvinceCount} <span className="text-sm font-sans font-medium text-[var(--atlas-ink-soft)]">Stempel</span></span>
        </div>
      </div>

      <div className="pt-2">
        <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--atlas-ink-soft)] mb-3">Karakter Utama</span>
        <div className="flex flex-wrap gap-2">
          {region.signals.map(s => (
            <span key={s} className="px-3 py-1.5 bg-[var(--atlas-paper)] border border-[var(--atlas-line)] rounded-md text-[13px] font-medium text-[var(--atlas-ink)] shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--atlas-ink-soft)] mb-3">Pilar Dominan</span>
        <div className="flex flex-wrap gap-2">
          {region.dominantPillarIds.map(p => (
            <span key={p} className="px-3 py-1.5 bg-[var(--atlas-line)]/30 border border-[var(--atlas-line)] rounded text-[12px] font-medium text-[var(--atlas-ink)] capitalize">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--atlas-ink-soft)] mb-3">Provinsi Unggulan</span>
        <div className="flex flex-wrap gap-3">
          {region.flagshipProvinceIds.map(id => (
            <span key={id} className="text-[15px] font-serif font-medium text-[var(--atlas-ink)] italic capitalize bg-[var(--atlas-paper)] px-3 py-1.5 border border-[var(--atlas-line)] rounded shadow-sm">
              {id.replace(/-/g, " ")}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
