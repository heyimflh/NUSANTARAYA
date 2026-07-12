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
  onShowFlagship: () => void;
};

export function ExploreControlBar(props: ExploreControlBarProps) {
  return (
    <section className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 mt-4 md:mt-8 mb-24">
      {/* Subtle background glow for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-[#2D6BE4]/5 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative bg-white/85 backdrop-blur-2xl border border-[#E8E0CE]/80 rounded-[32px] p-6 md:p-10 shadow-[0_32px_80px_rgba(13,27,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#C9A84C] font-bold tracking-widest uppercase text-xs">
            <Compass className="w-4 h-4" />
            <span>Mulai Eksplorasi</span>
          </div>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#0D1B2A] leading-tight font-serif">
            Temukan Jalur Jelajahmu
          </h2>
          <p className="text-[#0D1B2A]/60 md:text-lg max-w-2xl">
            Cari provinsi, pilih layer, dan sesuaikan mode eksplorasi sebelum masuk ke peta interaktif.
          </p>
        </div>

        {/* Control Desk Elements */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Search */}
          <div className="w-full">
            <ProvinceSearch 
              searchQuery={props.searchQuery}
              onSearchChange={props.onSearchChange}
              onProvinceSelect={props.onProvinceSelect}
            />
          </div>

          {/* Row 2: Mode & Quick Actions */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full md:w-auto">
              <span className="text-sm font-semibold text-[#0D1B2A]/50 uppercase tracking-wider pl-1 md:pl-0">
                Mode Jelajah
              </span>
              <ExploreModeSelector 
                activeMode={props.activeMode}
                onModeChange={props.onModeChange}
              />
            </div>

            <div className="w-full md:w-auto">
              <ExploreQuickActions 
                onReset={props.onReset}
                onShowFlagship={props.onShowFlagship}
              />
            </div>
          </div>

          {/* Row 3: Layer Chips */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#0D1B2A]/50 uppercase tracking-wider pl-1">
              Pilih Layer
            </span>
            <LayerFilterChips 
              activeLayer={props.activeLayer}
              onLayerChange={props.onLayerChange}
            />
          </div>

          {/* Row 4: Summary */}
          <ExploreActiveSummary 
            searchQuery={props.searchQuery}
            activeLayer={props.activeLayer}
            activeMode={props.activeMode}
            showFlagshipOnly={props.showFlagshipOnly}
            resultCount={props.resultCount}
          />
        </div>
      </div>
    </section>
  );
}
