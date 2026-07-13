import { regions } from "./regions";
import { RegionId, RegionalProfile } from "@/types/region";

// Cache for quick lookup
const regionByIdMap = new Map<RegionId, RegionalProfile>();
const regionByProvinceIdMap = new Map<string, RegionId>();

regions.forEach((region) => {
  regionByIdMap.set(region.id, region);
  region.provinceIds.forEach((provinceId) => {
    regionByProvinceIdMap.set(provinceId, region.id);
  });
});

export function getRegionById(id: RegionId): RegionalProfile | undefined {
  return regionByIdMap.get(id);
}

export function getRegionByProvinceId(provinceId: string): RegionalProfile | undefined {
  const regionId = regionByProvinceIdMap.get(provinceId);
  if (!regionId) return undefined;
  return regionByIdMap.get(regionId);
}

export function getProvincesByRegionId(regionId: RegionId): string[] {
  const region = regionByIdMap.get(regionId);
  return region ? region.provinceIds : [];
}

export function getAllRegionIds(): RegionId[] {
  return regions.map((r) => r.id);
}
