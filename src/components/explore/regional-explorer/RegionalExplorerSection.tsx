"use client";

import React, { useMemo } from "react";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { useRegionalExplorer } from "@/hooks/useRegionalExplorer";
import { getRegionById } from "@/data/regions/regionProvinceMap";
import { RegionSelector } from "./RegionSelector";
import { RegionalPortraitStage } from "./RegionalPortraitStage";
import { RegionalProvinceRail } from "./RegionalProvinceRail";
import { RegionCompareTray } from "./RegionCompareTray";
import { useRouter } from "next/navigation";
import { RecommendedJourney } from "@/data/journeys/types";
import { Map, RefreshCw } from "lucide-react";

interface RegionalExplorerSectionProps {
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  activeJourney: RecommendedJourney | null;
  onExploreMap: (regionId: string) => void;
  onOpenSummary: (provinceId: string) => void;
}

export function RegionalExplorerSection({
  activeLayer,
  activeMode,
  selectedProvinceId,
  searchQuery,
  showFlagshipOnly,
  activeJourney,
  onExploreMap,
  onOpenSummary,
}: RegionalExplorerSectionProps) {
  const router = useRouter();

  const {
    state,
    selectRegion,
    toggleCompare,
    selectCompareRegion,
    swapRegions,
    acceptPendingRegion,
    rejectPendingRegion,
  } = useRegionalExplorer({ selectedProvinceId, activeJourney });

  const activeRegion = useMemo(() => getRegionById(state.activeRegionId), [state.activeRegionId]);
  const pendingRegion = useMemo(() => state.pendingExternalRegion ? getRegionById(state.pendingExternalRegion) : null, [state.pendingExternalRegion]);

  if (!activeRegion) return null;

  return (
    <section 
      id="regional-explorer" 
      aria-labelledby="regional-explorer-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-[var(--atlas-canvas)]"
      style={{
        "--atlas-canvas": "#F2EBDD",
        "--atlas-paper": "#FFFDF7",
        "--atlas-paper-aged": "#E8DDC8",
        "--atlas-ink": "#242A2E",
        "--atlas-ink-soft": "#566066",
        "--atlas-line": "#CFC4AF",
        "--atlas-gold": "#BE963D",
      } as React.CSSProperties}
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1440px]">
        
        {/* SYNC GUARD PROMPT */}
        {pendingRegion && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
            <div className="bg-[var(--atlas-ink)] text-[var(--atlas-paper)] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-4 text-sm font-medium">
              <span>Pilihan di peta berubah ke <strong>{pendingRegion.label}</strong>. Tampilkan wilayah ini?</span>
              <div className="flex gap-2">
                <button onClick={rejectPendingRegion} className="px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                  Abaikan
                </button>
                <button onClick={acceptPendingRegion} className="px-4 py-1.5 rounded-full bg-[var(--atlas-gold)] text-[var(--atlas-ink)] hover:brightness-110 transition-all flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Tampilkan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* EDITORIAL HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 xl:mb-14 items-end">
          <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-end pb-2">
            <p className="text-[10px] md:text-[11px] font-bold text-[var(--atlas-gold)] uppercase tracking-[0.15em] mb-1">
              Regional Explorer
            </p>
            <p className="text-[13px] md:text-[14px] font-serif text-[var(--atlas-ink-soft)] font-medium italic">
              7 Wilayah Indonesia
            </p>
          </div>
          
          <div className="md:col-span-6 lg:col-span-7">
            <h2 id="regional-explorer-heading" className="text-3xl md:text-[44px] lg:text-[52px] font-serif text-[var(--atlas-ink)] font-bold leading-[1.1] mb-4 tracking-tight">
              Tujuh Wilayah, <br className="hidden sm:block"/>Beragam Wajah Nusantara
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--atlas-ink-soft)] leading-[1.65] max-w-2xl">
              Bandingkan karakter Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, dan Papua—lalu pilih provinsi, jalur, atau cerita yang ingin kamu jelajahi berikutnya.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3 md:text-right">
            <div className="inline-flex flex-col gap-2 items-start md:items-end">
              <div className="flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium text-[var(--atlas-ink)] bg-[var(--atlas-paper)] border border-[var(--atlas-line)] px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[var(--atlas-gold)]"></span>
                {activeMode === 'explore' ? 'Mode Explore' : activeMode === 'tourist' ? 'Mode Wisata' : 'Mode Pelajar'}
              </div>
              {activeLayer !== 'all' && (
                <div className="flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium text-[var(--atlas-ink)] bg-[var(--atlas-paper)] border border-[var(--atlas-line)] px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[var(--atlas-moss)]"></span>
                  Layer {activeLayer}
                </div>
              )}
              {activeJourney && (
                <div className="flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium text-[var(--atlas-ink)] bg-[var(--atlas-paper)] border border-[var(--atlas-line)] px-3 py-1.5 rounded-full">
                  <Map className="w-3.5 h-3.5 text-[var(--atlas-ink-soft)]" />
                  Jalur {activeJourney.title}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* THIN HORIZONTAL RHYTHM LINE */}
        <div className="w-full h-px bg-[var(--atlas-line)] mb-10 opacity-70"></div>

        {/* MAIN STAGE AND SELECTOR */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8">
          <RegionSelector 
            activeRegionId={state.activeRegionId} 
            onSelect={selectRegion} 
          />
          
          <div className="flex-1 flex flex-col min-w-0">
            <RegionalPortraitStage 
              region={activeRegion}
              onExploreMap={() => onExploreMap(activeRegion.id)}
              onOpenCompare={() => toggleCompare(true)}
            />

            <RegionalProvinceRail 
              region={activeRegion}
              selectedProvinceId={selectedProvinceId}
              activeLayer={activeLayer}
              activeMode={activeMode}
              onSelectProvince={(id) => onOpenSummary(id)}
              onOpenAtlas={(id) => router.push(`/provinsi/${id}`)}
            />

            {state.isCompareOpen && (
              <RegionCompareTray 
                activeRegion={activeRegion}
                compareRegionId={state.compareRegionId}
                activeLayer={activeLayer}
                onSelectCompare={selectCompareRegion}
                onClose={() => {
                  toggleCompare(false);
                  selectCompareRegion(null);
                }}
                onSwap={swapRegions}
              />
            )}
          </div>
        </div>

        {/* HANDOFF TO PASSPORT */}
        <div className="mt-20 pt-16 border-t border-[var(--atlas-line)] text-center">
          <p className="text-[16px] md:text-[18px] text-[var(--atlas-ink-soft)] font-medium mb-2">Sudah menemukan wilayah yang ingin dijelajahi?</p>
          <p className="text-[15px] md:text-[16px] text-[var(--atlas-ink-soft)]/80 mb-6">Lihat bagaimana pilihanmu melengkapi peta dan Passport Nusantara.</p>
          <button 
            onClick={() => router.push('/passport')}
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[var(--atlas-ink)] text-[var(--atlas-paper)] font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Lihat Progress Passport
          </button>
        </div>

      </div>
    </section>
  );
}
