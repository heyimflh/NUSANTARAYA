import { useMemo } from "react";
import { usePassport } from "@/context/app-context";
import { RegionId, RegionalProgress } from "@/types/region";
import { getProvincesByRegionId } from "@/data/regions/regionProvinceMap";

export function useRegionalPassportProgress(regionId: RegionId): RegionalProgress {
  const { passport } = usePassport();
  
  return useMemo(() => {
    const provinceIds = getProvincesByRegionId(regionId);
    const totalProvinceCount = provinceIds.length;
    
    // In current implementation, passport only has stamps (completed).
    // If the system supported planned/started, we would filter those here.
    const completedProvinceCount = provinceIds.filter(id => 
      passport.stamps.includes(id)
    ).length;

    // For now, started and planned are not tracked explicitly in the current passport state, 
    // we'll default them to 0.
    const startedProvinceCount = 0;
    const plannedProvinceCount = 0;
    
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
  }, [regionId, passport.stamps]);
}
