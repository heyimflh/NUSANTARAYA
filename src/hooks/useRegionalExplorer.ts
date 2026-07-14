import { useState, useEffect, useRef } from "react";
import { RegionId, RegionalExplorerState } from "@/types/region";
import { getRegionByProvinceId } from "@/data/regions/regionProvinceMap";

import { RecommendedJourney } from "@/data/journeys/types";

interface UseRegionalExplorerProps {
  selectedProvinceId: string | null;
  activeJourney: RecommendedJourney | null;
}

export function useRegionalExplorer({ selectedProvinceId, activeJourney }: UseRegionalExplorerProps) {
  const [state, setState] = useState<RegionalExplorerState & { pendingExternalRegion: RegionId | null }>({
    activeRegionId: "sumatera", // default editorial fallback
    compareRegionId: null,
    isCompareOpen: false,
    hasUserInteracted: false,
    interactionSource: "initial",
    pendingExternalRegion: null,
  });

  const prevSelectedProvinceRef = useRef(selectedProvinceId);
  const prevActiveJourneyRef = useRef(activeJourney?.id);
  const isInitialMount = useRef(true);

  // Initial active region priority logic
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      let initialRegion: RegionId | null = null;
      if (selectedProvinceId) {
        initialRegion = getRegionByProvinceId(selectedProvinceId)?.id || null;
      } else if (activeJourney && activeJourney.stops.length > 0) {
        const firstProvinceId = activeJourney.stops.find(s => s.provinceId)?.provinceId;
        if (firstProvinceId) {
          initialRegion = getRegionByProvinceId(firstProvinceId)?.id || null;
        }
      }
      
      if (initialRegion) {
        setState((prev) => ({
          ...prev,
          activeRegionId: initialRegion as RegionId,
          interactionSource: "initial",
        }));
      }
      return;
    }
    
    // Evaluate new region if selected province or active journey changes
    let newExternalRegion: RegionId | null = null;
    
    if (selectedProvinceId && selectedProvinceId !== prevSelectedProvinceRef.current) {
      newExternalRegion = getRegionByProvinceId(selectedProvinceId)?.id || null;
    } else if (activeJourney?.id !== prevActiveJourneyRef.current && activeJourney && activeJourney.stops.length > 0) {
      const firstProvinceId = activeJourney.stops.find(s => s.provinceId)?.provinceId;
      if (firstProvinceId) {
        newExternalRegion = getRegionByProvinceId(firstProvinceId)?.id || null;
      }
    }

    if (newExternalRegion) {
      setState((prev) => {
        if (prev.activeRegionId === newExternalRegion) return prev;

        if (prev.hasUserInteracted) {
          // Non-blocking prompt logic: store as pending
          return { ...prev, pendingExternalRegion: newExternalRegion };
        } else {
          // Auto sync if user hasn't manually interacted
          return {
            ...prev,
            activeRegionId: newExternalRegion,
            interactionSource: "province-sync",
          };
        }
      });
    }

    prevSelectedProvinceRef.current = selectedProvinceId;
    prevActiveJourneyRef.current = activeJourney?.id;
  }, [selectedProvinceId, activeJourney]);

  const acceptPendingRegion = () => {
    setState((prev) => ({
      ...prev,
      activeRegionId: prev.pendingExternalRegion || prev.activeRegionId,
      pendingExternalRegion: null,
      interactionSource: "province-sync",
    }));
  };

  const rejectPendingRegion = () => {
    setState((prev) => ({
      ...prev,
      pendingExternalRegion: null,
    }));
  };

  const selectRegion = (regionId: RegionId) => {
    setState((prev) => ({
      ...prev,
      activeRegionId: regionId,
      hasUserInteracted: true,
      interactionSource: "region-selector",
    }));
  };

  const toggleCompare = (open?: boolean) => {
    setState((prev) => ({
      ...prev,
      isCompareOpen: open !== undefined ? open : !prev.isCompareOpen,
      interactionSource: "compare",
    }));
  };

  const selectCompareRegion = (regionId: RegionId | null) => {
    setState((prev) => ({
      ...prev,
      compareRegionId: regionId,
      interactionSource: "compare",
    }));
  };

  const swapRegions = () => {
    setState((prev) => {
      if (!prev.compareRegionId) return prev;
      return {
        ...prev,
        activeRegionId: prev.compareRegionId,
        compareRegionId: prev.activeRegionId,
      };
    });
  };

  return {
    state,
    selectRegion,
    toggleCompare,
    selectCompareRegion,
    swapRegions,
    acceptPendingRegion,
    rejectPendingRegion,
  };
}
