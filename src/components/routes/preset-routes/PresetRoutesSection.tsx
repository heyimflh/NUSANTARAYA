"use client";
import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";

import React, { useState, useMemo } from "react";
import { PresetRoutesHeader } from "./PresetRoutesHeader";
import { PresetRouteFilters } from "./PresetRouteFilters";
import { FeaturedPresetRoute } from "./FeaturedPresetRoute";
import { PresetRouteCard } from "./PresetRouteCard";
import { PresetRouteCarousel } from "./PresetRouteCarousel";
import { PresetRoutesEmptyState } from "./PresetRoutesEmptyState";
import { 
  getPublishedPresetRoutes, 
  filterPresetRoutes, 
  rankPresetRoutes, 
  PresetRouteFilters as FilterState 
} from "@/lib/routes/presetRouteHelpers";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { RoutePlannerFormValues } from "@/types/route-planner";

import { trackRoutePlannerEvent } from "@/lib/routes/routePlannerAnalytics";

interface PresetRoutesSectionProps {
  currentFormValues?: RoutePlannerFormValues;
  activePresetId?: string;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
}

export function PresetRoutesSection({ 
  currentFormValues, 
  activePresetId,
  onViewRoute, 
  onPrefill 
}: PresetRoutesSectionProps) {
  // State for filters
  const [filters, setFilters] = useState<FilterState>({
    collection: null,
    regionId: null,
    durationDays: null,
    interest: null,
  });

  const allPresets = useMemo(() => getPublishedPresetRoutes(), []);

  React.useEffect(() => {
    trackRoutePlannerEvent("preset_routes_viewed");
  }, []);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    trackRoutePlannerEvent("preset_routes_filter_selected");
  };

  // Compute displayed routes based on filters and ranking
  const displayedRoutes = useMemo(() => {
    // 1. Filter
    const filtered = filterPresetRoutes(allPresets, filters);
    
    // 2. Rank (context-aware if form values exist)
    return rankPresetRoutes(filtered, {
      regionId: currentFormValues?.destinationRegionId,
      durationDays: currentFormValues?.durationDays,
      interests: currentFormValues?.interests,
      travelPace: currentFormValues?.travelPace,
      budgetLevel: currentFormValues?.budgetLevel,
    });
  }, [allPresets, filters, currentFormValues]);

  const featuredRoute = displayedRoutes.length > 0 ? displayedRoutes[0] : null;
  
  // For Bento layout on desktop, we pick the 2nd and 3rd items
  const bentoSupportingRoutes = displayedRoutes.slice(1, 3);
  
  // The carousel contains all routes after the featured one
  // but on desktop we hide the first two because they are already in the bento
  const carouselRoutes = displayedRoutes.slice(1);

  const handleResetFilters = () => {
    setFilters({
      collection: null,
      regionId: null,
      durationDays: null,
      interest: null,
    });
    trackRoutePlannerEvent("preset_routes_filter_cleared");
  };

  return (
    <section 
      id={ROUTE_SECTION_IDS.presets} 
      aria-labelledby="preset-routes-title"
      className="w-full pt-16 pb-24 border-t border-[#E8E0CE]/50 mt-16 bg-[#FFFDF8]"
    >
      <PresetRoutesHeader />
      
      <PresetRouteFilters 
        filters={filters} 
        onChange={handleFilterChange} 
        resultCount={displayedRoutes.length} 
      />

      {displayedRoutes.length === 0 ? (
        <PresetRoutesEmptyState onReset={handleResetFilters} />
      ) : (
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Editorial Bento Journey Gallery */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            
            {/* Featured Hero */}
            {featuredRoute && (
              <div className="lg:col-span-12 flex flex-col">
                <FeaturedPresetRoute 
                  route={featuredRoute} 
                  onViewRoute={onViewRoute} 
                  onPrefill={onPrefill}
                  isActive={featuredRoute.id === activePresetId}
                />
              </div>
            )}
            
            {/* Supporting Tiles (Desktop Only) */}
            {bentoSupportingRoutes.map((route) => (
              <div key={`bento-${route.id}`} className="hidden lg:flex lg:col-span-6 flex-col">
                <PresetRouteCard 
                  route={route} 
                  onViewRoute={onViewRoute} 
                  onPrefill={onPrefill}
                  isActive={route.id === activePresetId}
                  className="h-full"
                />
              </div>
            ))}

          </div>

          {/* Cinematic Route Rail */}
          {carouselRoutes.length > 0 && (
            <PresetRouteCarousel 
              routes={carouselRoutes}
              onViewRoute={onViewRoute}
              onPrefill={onPrefill}
              activePresetId={activePresetId}
              hiddenOnDesktopCount={bentoSupportingRoutes.length}
            />
          )}

        </div>
      )}
    </section>
  );
}



