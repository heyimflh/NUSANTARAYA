import { ExploreLayerId } from "@/data/exploreControls";

export type RegionId =
  | "sumatera"
  | "jawa"
  | "kalimantan"
  | "sulawesi"
  | "bali-nusa-tenggara"
  | "maluku"
  | "papua";

export type RegionalProfile = {
  id: RegionId;
  index: number;
  label: string;
  shortLabel: string;
  promise: string;
  description: string;
  provinceIds: string[];
  flagshipProvinceIds: string[];
  signals: [string, string, string];
  dominantPillarIds: string[];
  supportedLayerIds: ExploreLayerId[];
  accentColor: string;
  visualAsset?: string;
  fallbackAsset?: string;
  visualAlt: string;
  ctaLabel: string;
  journeyPresetIds?: string[];
  sourceIds?: string[];
};

export type RegionalProvincePreview = {
  provinceId: string;
  regionId: RegionId;
  isFlagship: boolean;
  isSelected: boolean;
  isPassportPlanned: boolean;
  isPassportCompleted: boolean;
  matchingSignals: string[];
  thumbnail: string;
  summaryHref?: string;
  atlasHref?: string;
};

export type RegionalProgress = {
  regionId: RegionId;
  totalProvinceCount: number;
  plannedProvinceCount: number;
  startedProvinceCount: number;
  completedProvinceCount: number;
  badgeUnlocked: boolean;
};

export type RegionalExplorerState = {
  activeRegionId: RegionId;
  compareRegionId: RegionId | null;
  isCompareOpen: boolean;
  hasUserInteracted: boolean;
  interactionSource:
    | "initial"
    | "province-sync"
    | "journey-sync"
    | "region-selector"
    | "compare"
    | "passport";
};
