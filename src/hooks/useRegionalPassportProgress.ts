import { useMemo } from "react";
import { usePassport } from "@/context/app-context";
import { RegionId, RegionalProgress } from "@/types/region";
import { getProvincesByRegionId } from "@/data/regions/regionProvinceMap";

export function useRegionalPassportProgress(regionId: RegionId): RegionalProgress {
  const { passport } = usePassport();
  
  return useMemo(() => {
    const provinceIds = getProvincesByRegionId(regionId);
    const totalProvinceCount = provinceIds.length;
    
    // Normalize Disjoint Sets
    const completedIds = new Set(passport.stamps);
    const startedIds = new Set(
      (passport.startedProvinces || []).filter((id) => !completedIds.has(id))
    );
    const plannedIds = new Set(
      (passport.plannedProvinces || []).filter(
        (id) => !completedIds.has(id) && !startedIds.has(id)
      )
    );
    
    const completedProvinceCount = provinceIds.filter(id => completedIds.has(id)).length;
    const startedProvinceCount = provinceIds.filter(id => startedIds.has(id)).length;
    const plannedProvinceCount = provinceIds.filter(id => plannedIds.has(id)).length;
    
    // Badge unlocked if all provinces in the region are completed
    const badgeUnlocked = totalProvinceCount > 0 && completedProvinceCount === totalProvinceCount;

    return {
      regionId,
      totalProvinceCount,
      plannedProvinceCount,
      startedProvinceCount,
      completedProvinceCount,
      badgeUnlocked,
    };
  }, [regionId, passport.stamps, passport.startedProvinces, passport.plannedProvinces]);
}
