"use client";

import { useState, useMemo, useCallback } from "react";
import { MapHeroSection } from "@/components/explore/map-hero";
import { ExploreNavbar } from "@/components/explore/ExploreNavbar";
import { ExploreControlBar } from "@/components/explore/control-bar";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { provinceMapData } from "@/data/provinces/provinces";
import { InteractiveIndonesiaMap } from "@/components/explore/interactive-map";
import { countMatchingProvinces } from "@/lib/provinceMatch";
import { FlagshipProvincesSection } from "@/components/explore/flagship-provinces/FlagshipProvincesSection";
import { ExploreByLayerSection } from "@/components/explore/explore-by-layer";
import { RecommendedJourneySection } from "@/components/explore/recommended-journey";
import { RegionalExplorerSection } from "@/components/explore/regional-explorer";
import { PassportProgressSection } from "@/components/explore/passport-progress/PassportProgressSection";
import { useRouter } from "next/navigation";
import { getRegionById } from "@/data/regions/regionProvinceMap";
import { RegionId } from "@/types/region";
import { RecommendedJourney } from "@/data/journeys/types";

export default function ExplorePage() {
  // State for Explore Control Bar and Map
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLayer, setActiveLayer] = useState<ExploreLayerId>("all");
  const [activeMode, setActiveMode] = useState<ExploreModeId>("explore");
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
  const [showFlagshipOnly, setShowFlagshipOnly] = useState(false);
  const [activeJourney, setActiveJourney] = useState<RecommendedJourney | null>(null);
  const [activeRegionFilter, setActiveRegionFilter] = useState<RegionId | null>(null);
  
  const router = useRouter();

  // Additional state lifted from Map for potential coordination
  // Derived result count using canonical matching utility
  const resultCount = useMemo(() => {
    return countMatchingProvinces(provinceMapData, searchQuery, activeLayer, showFlagshipOnly, activeRegionFilter);
  }, [activeLayer, searchQuery, showFlagshipOnly, activeRegionFilter]);

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

  const handleOpenAtlas = useCallback((provinceId: string) => {
    router.push(`/provinsi/${provinceId}`);
  }, [router]);

  const handleOpenSummary = useCallback((provinceId: string) => {
    setSelectedProvinceId(provinceId);
    // Focus or scroll to map section if needed. Assuming user knows where panel is 
    // or we can just scroll to the map heading.
    const mapHeading = document.getElementById("interactive-map-heading");
    if (mapHeading) {
      mapHeading.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleExploreMapRegion = useCallback((regionId: string) => {
    // Typed Regional Filter
    setActiveRegionFilter(regionId as RegionId);
    
    const mapHeading = document.getElementById("interactive-map-heading") || document.getElementById("interactive-map");
    if (mapHeading) {
      mapHeading.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
        onReset={() => {
          handleReset();
          setActiveRegionFilter(null);
        }}
        onToggleFlagship={handleToggleFlagship}
      />

      <InteractiveIndonesiaMap
        provinces={provinceMapData}
        searchQuery={searchQuery}
        activeLayer={activeLayer}
        activeMode={activeMode}
        selectedProvinceId={selectedProvinceId}
        showFlagshipOnly={showFlagshipOnly}
        regionFilter={activeRegionFilter}
        resultCount={resultCount}
        onProvinceSelect={handleProvinceSelect}
        onReset={() => {
          handleReset();
          setActiveRegionFilter(null);
        }}
        onClearRegionFilter={() => setActiveRegionFilter(null)}
      />

      <FlagshipProvincesSection 
        selectedProvinceId={selectedProvinceId}
        onOpenSummary={handleOpenSummary}
        onOpenAtlas={handleOpenAtlas}
      />

      <ExploreByLayerSection
        activeLayer={activeLayer}
        onLayerChange={setActiveLayer}
        onOpenSummary={handleOpenSummary}
      />

      <RecommendedJourneySection
        activeLayer={activeLayer}
        activeMode={activeMode}
        selectedProvinceId={selectedProvinceId}
        searchQuery={searchQuery}
        showFlagshipOnly={showFlagshipOnly}
        onJourneyChange={setActiveJourney}
      />

      <RegionalExplorerSection
        activeLayer={activeLayer}
        activeMode={activeMode}
        selectedProvinceId={selectedProvinceId}
        searchQuery={searchQuery}
        showFlagshipOnly={showFlagshipOnly}
        activeJourney={activeJourney}
        onExploreMap={handleExploreMapRegion}
        onOpenSummary={handleOpenSummary}
      />

      <PassportProgressSection
        highlightedRegionId={activeRegionFilter}
        selectedProvinceId={selectedProvinceId}
        onExploreMapRegion={handleExploreMapRegion}
        onOpenAtlas={handleOpenAtlas}
        onOpenSummary={handleOpenSummary}
      />
    </main>
  );
}
