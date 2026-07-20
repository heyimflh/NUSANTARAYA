import { useState, useEffect, useRef } from "react";
import { RegionId, RegionalExplorerState } from "@/types/region";
import { getRegionByProvinceId } from "@/data/regions/regionProvinceMap";

import { RecommendedJourney } from "@/data/journeys/types";

interface UseRegionalExplorerProps {
  selectedProvinceId: string | null;
  activeJourney: RecommendedJourney | null;
}

export function useRegionalExplorer({ selectedProvinceId, activeJourney }: UseRegionalExplorerProps) {
  const [prevSelectedProvinceId, setPrevSelectedProvinceId] = useState(selectedProvinceId);
  const [prevActiveJourneyId, setPrevActiveJourneyId] = useState(activeJourney?.id);

  const [state, setState] = useState<RegionalExplorerState & { pendingExternalRegion: RegionId | null }>(() => {
    let initialRegion: RegionId | null = null;
    if (selectedProvinceId) {
      initialRegion = getRegionByProvinceId(selectedProvinceId)?.id || null;
    } else if (activeJourney && activeJourney.stops.length > 0) {
      const firstProvinceId = activeJourney.stops.find(s => s.provinceId)?.provinceId;
      if (firstProvinceId) {
        initialRegion = getRegionByProvinceId(firstProvinceId)?.id || null;
      }
    }
    return {
      activeRegionId: (initialRegion as RegionId) || "sumatera",
      compareRegionId: null,
      isCompareOpen: false,
      hasUserInteracted: false,
      interactionSource: "initial",
      pendingExternalRegion: null,
    };
  });

  if (selectedProvinceId !== prevSelectedProvinceId || activeJourney?.id !== prevActiveJourneyId) {
    let newExternalRegion: RegionId | null = null;
    
    if (selectedProvinceId && selectedProvinceId !== prevSelectedProvinceId) {
      newExternalRegion = getRegionByProvinceId(selectedProvinceId)?.id || null;
    } else if (activeJourney?.id !== prevActiveJourneyId && activeJourney && activeJourney.stops.length > 0) {
      const firstProvinceId = activeJourney.stops.find(s => s.provinceId)?.provinceId;
      if (firstProvinceId) {
        newExternalRegion = getRegionByProvinceId(firstProvinceId)?.id || null;
      }
    }

    setPrevSelectedProvinceId(selectedProvinceId);
    setPrevActiveJourneyId(activeJourney?.id);

    if (newExternalRegion) {
      setState((prev) => {
        if (prev.activeRegionId === newExternalRegion) return prev;

        if (prev.hasUserInteracted) {
          return { ...prev, pendingExternalRegion: newExternalRegion };
        } else {
          return {
            ...prev,
            activeRegionId: newExternalRegion as RegionId,
            interactionSource: "province-sync",
          };
        }
      });
    }
  }

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
