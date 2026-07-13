import React from "react";
import { X } from "lucide-react";
import { RegionId, RegionalProfile } from "@/types/region";
import { regions } from "@/data/regions/regions";
import { useRegionalPassportProgress } from "@/hooks/useRegionalPassportProgress";

interface RegionCompareTrayProps {
  activeRegion: RegionalProfile;
  compareRegionId: RegionId | null;
  onSelectCompare: (id: RegionId) => void;
  onClose: () => void;
  onSwap: () => void;
}

export function RegionCompareTray({ activeRegion, compareRegionId, onSelectCompare, onClose, onSwap }: RegionCompareTrayProps) {
  
  const compareRegion = compareRegionId ? regions.find(r => r.id === compareRegionId) : null;

  return (
    <div className="w-full mt-6 bg-[var(--region-canvas)] border border-[var(--region-border)] rounded-3xl p-6 md:p-8 xl:p-10 shadow-sm relative animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--region-border)]">
        <div>
          <h4 className="text-xl md:text-2xl font-serif font-bold text-[var(--region-ink)] mb-1">
            Bandingkan Wilayah
          </h4>
          <p className="text-sm text-[var(--region-muted)]">
            Berbeda dalam fokus cerita, pilar dominan, dan jejak Nusantara.
          </p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-[var(--region-paper)] transition-colors text-[var(--region-muted)] hover:text-[var(--region-ink)]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Selector for B if not selected */}
      {!compareRegion && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-base text-[var(--region-ink)] font-medium mb-6">
            Pilih wilayah untuk dibandingkan dengan {activeRegion.label}
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {regions.filter(r => r.id !== activeRegion.id).map(region => (
              <button
                key={region.id}
                onClick={() => onSelectCompare(region.id)}
                className="px-5 py-2.5 rounded-full bg-[var(--region-paper)] border border-[var(--region-border)] text-sm font-semibold text-[var(--region-ink)] hover:border-[var(--region-ink)]/30 transition-colors"
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
          <div className="hidden xl:flex absolute left-1/2 top-0 -translate-x-1/2 bottom-0 w-px bg-[var(--region-border)] items-center justify-center z-10">
            <button 
              onClick={onSwap}
              className="bg-[var(--region-paper)] border border-[var(--region-border)] text-[var(--region-muted)] hover:text-[var(--region-ink)] rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
            >
              Tukar
            </button>
          </div>

          {/* Swap Button (Mobile) */}
          <div className="xl:hidden flex justify-center py-2">
            <button 
              onClick={onSwap}
              className="bg-[var(--region-paper)] border border-[var(--region-border)] text-[var(--region-muted)] hover:text-[var(--region-ink)] rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
            >
              Tukar Posisi
            </button>
          </div>

          <CompareColumn region={activeRegion} isPrimary={true} />
          <CompareColumn region={compareRegion} isPrimary={false} onChangeRegion={() => onSelectCompare(null as any)} />
          
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
      <div className="flex flex-col gap-1 pb-4 border-b border-[var(--region-border)]/50 relative">
        {!isPrimary && onChangeRegion && (
          <button onClick={onChangeRegion} className="absolute right-0 top-0 text-[11px] font-semibold text-[var(--region-muted)] hover:text-[var(--region-ink)] underline underline-offset-2">
            Ganti Wilayah
          </button>
        )}
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--region-muted)]">
          {isPrimary ? "Wilayah Aktif" : "Wilayah Pembanding"}
        </span>
        <h5 className="text-2xl font-serif font-bold text-[var(--region-ink)]" style={{ color: isPrimary ? region.accentColor : "var(--region-ink)" }}>
          {region.label}
        </h5>
      </div>

      {/* Dimensions */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-[var(--region-muted)] mb-1">Cakupan</span>
          <span className="font-semibold text-[var(--region-ink)]">{region.provinceIds.length} Provinsi</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-[var(--region-muted)] mb-1">Passport</span>
          <span className="font-semibold text-[var(--region-ink)]">{passport.completedProvinceCount} Dikunjungi</span>
        </div>
      </div>

      <div>
        <span className="block text-[10px] uppercase tracking-widest text-[var(--region-muted)] mb-2">Karakter Utama</span>
        <div className="flex flex-wrap gap-2">
          {region.signals.map(s => (
            <span key={s} className="px-3 py-1 bg-[var(--region-paper)] border border-[var(--region-border)] rounded-md text-xs font-medium text-[var(--region-ink)]">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-[10px] uppercase tracking-widest text-[var(--region-muted)] mb-2">Pilar Dominan</span>
        <div className="flex flex-wrap gap-2">
          {region.dominantPillarIds.map(p => (
            <span key={p} className="px-2 py-0.5 bg-[var(--region-border)]/40 rounded text-[11px] font-medium text-[var(--region-ink)] capitalize">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-[10px] uppercase tracking-widest text-[var(--region-muted)] mb-2">Unggulan</span>
        <div className="flex flex-wrap gap-2">
          {region.flagshipProvinceIds.map(id => (
            <span key={id} className="text-sm font-medium text-[var(--region-ink)] capitalize">
              {id.replace(/-/g, " ")}{region.flagshipProvinceIds.length > 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
