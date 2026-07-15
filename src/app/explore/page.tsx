"use client";

import { useState, useMemo, useCallback } from "react";
import { MapHeroSection } from "@/components/explore/map-hero";
import { ExploreNavbar } from "@/components/explore/ExploreNavbar";
import { ExploreControlBar } from "@/components/explore/control-bar";
import { ExploreLayerId } from "@/data/exploreControls";
import { provinceMapData } from "@/data/provinces/provinces";
import { InteractiveIndonesiaMap } from "@/components/explore/interactive-map";
import { countMatchingProvinces } from "@/lib/provinceMatch";
import { MapInsightsSection } from "@/components/explore/map-insights";
import { FlagshipProvincesSection } from "@/components/explore/flagship-provinces/FlagshipProvincesSection";
import { ExploreByLayerSection } from "@/components/explore/explore-by-layer";
import { RecommendedJourneySection } from "@/components/explore/recommended-journey";
import { RegionalExplorerSection } from "@/components/explore/regional-explorer";
import { PassportProgressSection } from "@/components/explore/passport-progress/PassportProgressSection";
import { RaniMapAssistantSection } from "@/components/explore/rani-map-assistant";
import { FinalCtaFooterSection } from '@/components/home/final-cta-footer';
import { useRouter } from "next/navigation";
import { usePassport, useMode, useLanguage } from "@/context/app-context";

import { RegionId } from "@/types/region";
import { RecommendedJourney } from "@/data/journeys/types";

export default function ExplorePage() {
  // State for Explore Control Bar and Map
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLayer, setActiveLayer] = useState<ExploreLayerId>("all");
  const { mode: activeMode, setMode: setActiveMode } = useMode();
  const { language } = useLanguage();
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
  const [showFlagshipOnly, setShowFlagshipOnly] = useState(false);
  const [activeJourney, setActiveJourney] = useState<RecommendedJourney | null>(null);
  const [activeRegionFilter, setActiveRegionFilter] = useState<RegionId | null>(null);
  const [highlightedRegionId, setHighlightedRegionId] = useState<RegionId | null>(null);
  
  const router = useRouter();
  const { startProvince } = usePassport();

  // Additional state lifted from Map for potential coordination
  // Derived result count using canonical matching utility
  const resultCount = useMemo(() => {
    return countMatchingProvinces(provinceMapData, searchQuery, activeLayer, showFlagshipOnly, activeRegionFilter);
  }, [activeLayer, searchQuery, showFlagshipOnly, activeRegionFilter]);

  // Handlers
  const handleReset = useCallback(() => {
    setSearchQuery("");
    setActiveLayer("all");
    setSelectedProvinceId(null);
    setShowFlagshipOnly(false);
    setHighlightedRegionId(null);
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
    startProvince(provinceId);
    router.push(`/provinsi/${provinceId}`);
  }, [router, startProvince]);

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

  const handleHighlightRegion = useCallback((regionId: string) => {
    setHighlightedRegionId(regionId as RegionId);
    const passportHeading = document.getElementById("passport-progress-heading");
    if (passportHeading) {
      passportHeading.focus();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      passportHeading.scrollIntoView({ 
        behavior: prefersReducedMotion ? "auto" : "smooth", 
        block: "start" 
      });
    }
  }, []);

  return (
    <main className="relative min-h-screen isolate">
      <picture
        className="pointer-events-none fixed inset-0 z-0 block h-[100dvh] w-full select-none"
      >
        <source
          media="(max-width: 767px)"
          srcSet="/assets/background/background-explore-mobile.webp"
        />
        <img
          src="/assets/background/background-explore-dekstop.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <div className="relative z-10">
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

      <MapInsightsSection
        context={{
          locale: language,
          activeMode,
          activeLayer,
          searchQuery,
          selectedProvinceId,
          showFlagshipOnly,
          resultCount,
          activeRegionId: activeRegionFilter,
        }}
        onResetMap={() => {
          handleReset();
          setActiveRegionFilter(null);
        }}
        onOpenProvinceSummary={handleOpenSummary}
        onOpenProvinceAtlas={handleOpenAtlas}
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
        onHighlightRegion={handleHighlightRegion}
        onOpenSummary={handleOpenSummary}
      />

      <PassportProgressSection
        highlightedRegionId={highlightedRegionId}
        selectedProvinceId={selectedProvinceId}
        onExploreMapRegion={handleExploreMapRegion}
        onOpenAtlas={handleOpenAtlas}
        onOpenSummary={handleOpenSummary}
      />

      <RaniMapAssistantSection
        activeMode={activeMode}
        activeLayer={activeLayer}
        selectedProvinceId={selectedProvinceId}
        searchQuery={searchQuery}
        showFlagshipOnly={showFlagshipOnly}
        highlightedRegionId={highlightedRegionId}
        activeJourney={activeJourney}
        onExploreMapRegion={handleExploreMapRegion}
        onOpenSummary={handleOpenSummary}
        onOpenAtlas={handleOpenAtlas}
      />

      <FinalCtaFooterSection />
      </div>
    </main>
  );
}
