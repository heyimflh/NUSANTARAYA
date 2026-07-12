"use client";

import { Compass } from "lucide-react";
import { ProvinceSearch } from "./ProvinceSearch";
import { LayerFilterChips } from "./LayerFilterChips";
import { ExploreModeSelector } from "./ExploreModeSelector";
import { ExploreQuickActions } from "./ExploreQuickActions";
import { ExploreActiveSummary } from "./ExploreActiveSummary";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";

type ExploreControlBarProps = {
  searchQuery: string;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  showFlagshipOnly: boolean;
  resultCount: number;
  onSearchChange: (value: string) => void;
  onLayerChange: (layer: ExploreLayerId) => void;
  onModeChange: (mode: ExploreModeId) => void;
  onProvinceSelect: (provinceId: string) => void;
  onReset: () => void;
  onToggleFlagship: () => void;
};

export function ExploreControlBar(props: ExploreControlBarProps) {
  return (
    <section className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-16 mb-[-32px] md:mb-[-48px]">
      {/* Subtle background glow for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-[#2D6BE4]/5 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative bg-white/85 backdrop-blur-2xl border border-[#E8E0CE]/80 rounded-[22px] md:rounded-[28px] xl:rounded-[32px] p-5 md:p-6 xl:p-8 shadow-[0_24px_60px_rgba(13,27,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2 mb-6 md:mb-8 text-center pt-2">
          <div className="flex items-center gap-2 text-[#C9A84C] font-bold tracking-widest uppercase text-[10px] md:text-xs">
            <Compass className="w-4 h-4" />
            <span>Pusat Kendali</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] leading-tight font-serif">
            Temukan Jalur Jelajahmu
          </h2>
          <p className="text-[13px] md:text-sm text-nusaNavy/60 max-w-md mx-auto hidden md:block">
            Cari provinsi, pilih mode, lalu temukan cerita di peta.
          </p>
        </div>

        {/* Control Desk Elements */}
        <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">
          {/* Row 1: Search, Mode & Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_auto_auto] gap-3 md:gap-4 w-full">
            <div className="md:col-span-full xl:col-span-1 min-w-0 w-full">
              <ProvinceSearch 
                searchQuery={props.searchQuery}
                onSearchChange={props.onSearchChange}
                onProvinceSelect={props.onProvinceSelect}
              />
            </div>
            
            <div className="md:col-span-1 xl:col-span-1 w-full min-w-0 flex items-center">
              <ExploreModeSelector 
                activeMode={props.activeMode}
                onModeChange={props.onModeChange}
              />
            </div>

            <div className="md:col-span-1 xl:col-span-1 w-full min-w-0 flex items-center md:justify-end">
              <ExploreQuickActions 
                showFlagshipOnly={props.showFlagshipOnly}
                onReset={props.onReset}
                onToggleFlagship={props.onToggleFlagship}
              />
            </div>
          </div>

          {/* Row 2: Layer Chips */}
          <div className="w-full min-w-0">
            <LayerFilterChips 
              activeLayer={props.activeLayer}
              onLayerChange={props.onLayerChange}
            />
          </div>

          {/* Row 3: Summary */}
          <div className="w-full pt-1 border-t border-nusaBorder/40">
            <ExploreActiveSummary 
              searchQuery={props.searchQuery}
              activeLayer={props.activeLayer}
              activeMode={props.activeMode}
              showFlagshipOnly={props.showFlagshipOnly}
              resultCount={props.resultCount}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
