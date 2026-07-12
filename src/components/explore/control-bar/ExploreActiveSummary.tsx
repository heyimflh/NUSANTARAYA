"use client";

import { useMemo } from "react";
import { ExploreLayerId, ExploreModeId, exploreLayers, exploreModes } from "@/data/exploreControls";

type ExploreActiveSummaryProps = {
  searchQuery: string;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  showFlagshipOnly: boolean;
  resultCount: number;
};

export function ExploreActiveSummary({
  searchQuery,
  activeLayer,
  activeMode,
  showFlagshipOnly,
  resultCount,
}: ExploreActiveSummaryProps) {
  const summaryText = useMemo(() => {
    const layer = exploreLayers.find((l) => l.id === activeLayer);
    const mode = exploreModes.find((m) => m.id === activeMode);

    // If there is an active search
    if (searchQuery) {
      return `Mencari "${searchQuery}" — ${resultCount} provinsi ditemukan.`;
    }

    // If flagship only is selected
    if (showFlagshipOnly) {
      return "Menyorot 8 provinsi flagship dengan konten terdalam.";
    }

    // If default state
    if (activeMode === "explore" && activeLayer === "all") {
      return "Menampilkan semua provinsi dan 8 flagship utama NUSANTARAYA.";
    }

    // If layer is active and mode is default
    if (activeLayer !== "all" && activeMode === "explore") {
      return `Layer ${layer?.label} aktif — ${layer?.description.toLowerCase()}`;
    }

    // If mode is active and layer is default
    if (activeMode !== "explore" && activeLayer === "all") {
      return `Mode ${mode?.label} aktif — ${mode?.description.toLowerCase()}`;
    }

    // Combination of mode and layer
    if (activeMode !== "explore" && activeLayer !== "all") {
      return `Mode ${mode?.label} · Layer ${layer?.label} · ${resultCount} provinsi ditemukan.`;
    }

    return "Memuat preferensi eksplorasi...";
  }, [searchQuery, activeLayer, activeMode, showFlagshipOnly, resultCount]);

  return (
    <div className="w-full pt-4 border-t border-[#E8E0CE]/50">
      <p
        aria-live="polite"
        className="text-sm font-medium text-[#0D1B2A]/60 text-center md:text-left transition-all"
      >
        {summaryText}
      </p>
    </div>
  );
}
