"use client";

import React, { useState, useMemo } from "react";
import { PresetRoutesHeader } from "./PresetRoutesHeader";
import { PresetRouteFilters } from "./PresetRouteFilters";
import { FeaturedPresetRoute } from "./FeaturedPresetRoute";
import { PresetRoutesGrid } from "./PresetRoutesGrid";
import { PresetRoutesEmptyState } from "./PresetRoutesEmptyState";
import { 
  getPublishedPresetRoutes, 
  filterPresetRoutes, 
  rankPresetRoutes, 
  PresetRouteFilters as FilterState 
} from "@/lib/routes/presetRouteHelpers";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { RoutePlannerFormValues } from "@/types/route-planner";

interface PresetRoutesSectionProps {
  currentFormValues?: RoutePlannerFormValues;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
}

export function PresetRoutesSection({ 
  currentFormValues, 
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
  const gridRoutes = displayedRoutes.length > 1 ? displayedRoutes.slice(1, 10) : [];

  const handleResetFilters = () => {
    setFilters({
      collection: null,
      regionId: null,
      durationDays: null,
      interest: null,
    });
  };

  return (
    <section 
      id="preset-routes" 
      aria-labelledby="preset-routes-title"
      className="w-full pt-16 pb-24 border-t border-[var(--planner-warm-border)]/50 mt-16"
    >
      <PresetRoutesHeader />
      
      <PresetRouteFilters 
        filters={filters} 
        onChange={setFilters} 
        resultCount={displayedRoutes.length} 
      />

      {displayedRoutes.length === 0 ? (
        <PresetRoutesEmptyState onReset={handleResetFilters} />
      ) : (
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 md:px-8">
          {featuredRoute && (
            <FeaturedPresetRoute 
              route={featuredRoute} 
              onViewRoute={onViewRoute} 
              onPrefill={onPrefill} 
            />
          )}
          
          <PresetRoutesGrid 
            routes={gridRoutes} 
            onViewRoute={onViewRoute} 
            onPrefill={onPrefill} 
          />
        </div>
      )}
    </section>
  );
}
