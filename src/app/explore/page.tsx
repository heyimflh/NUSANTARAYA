"use client";

import { useState, useMemo, useCallback } from "react";
import { MapHeroSection } from "@/components/explore/map-hero";
import { ExploreNavbar } from "@/components/explore/ExploreNavbar";
import { ExploreControlBar } from "@/components/explore/control-bar";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { provinceMapData } from "@/data/provinces/provinces";
import { InteractiveIndonesiaMap } from "@/components/explore/interactive-map";
import { countMatchingProvinces } from "@/lib/provinceMatch";

export default function ExplorePage() {
  // State for Explore Control Bar and Map
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLayer, setActiveLayer] = useState<ExploreLayerId>("all");
  const [activeMode, setActiveMode] = useState<ExploreModeId>("explore");
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
  const [showFlagshipOnly, setShowFlagshipOnly] = useState(false);

  // Additional state lifted from Map for potential coordination
  // Derived result count using canonical matching utility
  const resultCount = useMemo(() => {
    return countMatchingProvinces(provinceMapData, searchQuery, activeLayer, showFlagshipOnly);
  }, [activeLayer, searchQuery, showFlagshipOnly]);

  // Handlers
  const handleReset = useCallback(() => {
    setSearchQuery("");
    setActiveLayer("all");
    setActiveMode("explore");
    setSelectedProvinceId(null);
    setShowFlagshipOnly(false);
  }, []);

  const handleToggleFlagship = useCallback(() => {
    setShowFlagshipOnly((prev) => !prev);
    // Don't auto-reset layer when toggling flagship, unless it makes sense for UX
    // But PRD says "only when that behavior is intentional". Let's leave layer as is.
  }, []);

  const handleProvinceSelect = useCallback((provinceId: string) => {
    // Selecting a province on the map DOES NOT mutate search query.
    // It only shows the detail panel.
    setSelectedProvinceId(provinceId);
  }, []);

  return (
    <main className="relative bg-background min-h-screen">
      <ExploreNavbar />
      <MapHeroSection />
      
      <ExploreControlBar 
        searchQuery={searchQuery}
        activeLayer={activeLayer}
        activeMode={activeMode}
        selectedProvinceId={selectedProvinceId}
        showFlagshipOnly={showFlagshipOnly}
        resultCount={resultCount}
        onSearchChange={setSearchQuery}
        onLayerChange={setActiveLayer}
        onModeChange={setActiveMode}
        onProvinceSelect={(id) => {
          // Selecting from search dropdown WILL fill the query and select the province
          const p = provinceMapData.find((item) => item.id === id);
          if (p) setSearchQuery(p.name);
          handleProvinceSelect(id);
        }}
        onReset={handleReset}
        onToggleFlagship={handleToggleFlagship}
      />

      <InteractiveIndonesiaMap
        provinces={provinceMapData}
        searchQuery={searchQuery}
        activeLayer={activeLayer}
        activeMode={activeMode}
        selectedProvinceId={selectedProvinceId}
        showFlagshipOnly={showFlagshipOnly}
        resultCount={resultCount}
        onProvinceSelect={handleProvinceSelect}
        onReset={handleReset}
      />
    </main>
  );
}
