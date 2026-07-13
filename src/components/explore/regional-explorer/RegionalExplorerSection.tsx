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

interface RegionalExplorerSectionProps {
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  onExploreMap: (regionId: string) => void;
  onOpenSummary: (provinceId: string) => void;
}

export function RegionalExplorerSection({
  activeLayer,
  activeMode,
  selectedProvinceId,
  searchQuery,
  showFlagshipOnly,
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
  } = useRegionalExplorer({ selectedProvinceId });

  const activeRegion = useMemo(() => getRegionById(state.activeRegionId), [state.activeRegionId]);

  if (!activeRegion) return null;

  return (
    <section 
      id="regional-explorer" 
      aria-labelledby="regional-explorer-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-background"
      style={{
        "--region-canvas": "#F8F4EA",
        "--region-paper": "#FFFDF8",
        "--region-ink": "#0D1B2A",
        "--region-gold": "#C9A84C",
        "--region-border": "#E8E0CE",
        "--region-muted": "#5E6570",
      } as React.CSSProperties}
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1440px]">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-[720px] mb-10 xl:mb-14">
          <p className="text-[11px] md:text-xs font-bold text-[var(--region-muted)] uppercase tracking-[0.2em] mb-4">
            Jelajah Per Wilayah
          </p>
          <h2 id="regional-explorer-heading" className="text-4xl md:text-[44px] lg:text-[56px] font-serif text-[var(--region-ink)] font-bold leading-[1.15] mb-5 tracking-tight">
            Tujuh Wilayah, <br className="hidden sm:block"/>Beragam Wajah Nusantara
          </h2>
          <p className="text-base md:text-[17px] text-[var(--region-muted)] leading-[1.6] mb-4">
            Bandingkan karakter Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, dan Papua—lalu pilih provinsi, jalur, atau cerita yang ingin kamu jelajahi berikutnya.
          </p>
          <p className="text-[13px] md:text-sm font-medium text-[var(--region-muted)]">
            Setiap wilayah adalah pintu masuk, bukan batas cerita.
          </p>
        </div>

        {/* MAIN STAGE AND SELECTOR */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-10">
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
              onSelectProvince={(id) => onOpenSummary(id)}
              onOpenAtlas={(id) => router.push(`/provinsi/${id}`)}
            />

            {state.isCompareOpen && (
              <RegionCompareTray 
                activeRegion={activeRegion}
                compareRegionId={state.compareRegionId}
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

      </div>
    </section>
  );
}
