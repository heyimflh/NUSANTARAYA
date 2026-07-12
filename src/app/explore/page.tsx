"use client";

import { useState, useMemo } from "react";
import { MapHeroSection } from "@/components/explore/map-hero";
import { ExploreNavbar } from "@/components/explore/ExploreNavbar";
import { ExploreControlBar } from "@/components/explore/control-bar";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { provinceMapData } from "@/data/provinces/provinces";
import { InteractiveIndonesiaMap } from "@/components/explore/interactive-map";

export default function ExplorePage() {
  // State for Explore Control Bar
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLayer, setActiveLayer] = useState<ExploreLayerId>("all");
  const [activeMode, setActiveMode] = useState<ExploreModeId>("explore");
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
  const [showFlagshipOnly, setShowFlagshipOnly] = useState(false);

  // Derived result count
  const resultCount = useMemo(() => {
    return provinceMapData.filter((province) => {
      const matchesLayer =
        activeLayer === "all" || province.categories.includes(activeLayer);

      const matchesFlagship = showFlagshipOnly ? province.tier === "deep" : true;

      const query = searchQuery.trim().toLowerCase();

      const searchableText = [
        province.name,
        province.region,
        province.capital,
        ...province.categories,
        ...province.highlights,
        ...province.keywords,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = query ? searchableText.includes(query) : true;

      return matchesLayer && matchesFlagship && matchesSearch;
    }).length;
  }, [activeLayer, searchQuery, showFlagshipOnly]);

  // Handlers
  const handleReset = () => {
    setSearchQuery("");
    setActiveLayer("all");
    setActiveMode("explore");
    setSelectedProvinceId(null);
    setShowFlagshipOnly(false);
  };

  const handleShowFlagship = () => {
    setShowFlagshipOnly(true);
    setActiveLayer("all");
  };

  const handleProvinceSelect = (provinceId: string) => {
    const province = provinceMapData.find((item) => item.id === provinceId);
    setSelectedProvinceId(provinceId);

    if (province) {
      setSearchQuery(province.name);
    }
  };

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
        onProvinceSelect={handleProvinceSelect}
        onReset={handleReset}
        onShowFlagship={handleShowFlagship}
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
