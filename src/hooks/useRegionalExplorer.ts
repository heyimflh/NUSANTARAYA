import { useState, useEffect, useRef } from "react";
import { RegionId, RegionalExplorerState } from "@/types/region";
import { getRegionByProvinceId } from "@/data/regions/regionProvinceMap";

interface UseRegionalExplorerProps {
  selectedProvinceId: string | null;
}

export function useRegionalExplorer({ selectedProvinceId }: UseRegionalExplorerProps) {
  const [state, setState] = useState<RegionalExplorerState>({
    activeRegionId: "sumatera", // default editorial fallback
    compareRegionId: null,
    isCompareOpen: false,
    hasUserInteracted: false,
    interactionSource: "initial",
  });

  const prevSelectedProvinceRef = useRef(selectedProvinceId);

  // Sync Guard: Sync selected province to region if user hasn't interacted
  // or if selected province changed from outside
  useEffect(() => {
    if (selectedProvinceId && selectedProvinceId !== prevSelectedProvinceRef.current) {
      const region = getRegionByProvinceId(selectedProvinceId);
      if (region) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setState((prev) => {
          // If already on that region, do nothing
          if (prev.activeRegionId === region.id) return prev;
          
          return {
            ...prev,
            activeRegionId: region.id,
            interactionSource: "province-sync",
            // optionally auto-close compare if context shifts entirely, but let's keep it open for now
          };
        });
      }
    }
    prevSelectedProvinceRef.current = selectedProvinceId;
  }, [selectedProvinceId]);

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
  };
}
