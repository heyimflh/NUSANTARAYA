import { ExploreLayerId } from "@/data/exploreControls";

export type ExploreLayerDefinition = {
  id: Exclude<ExploreLayerId, "all">;
  index: number;
  label: string;
  shortLabel: string;
  promise: string;
  description: string;
  signals: [string, string, string];
  icon: string;
  accentColor: string;
  visualAsset?: string;
  mapOverlay?: string;
  ctaShortLabel: string;
  ctaAriaLabel: string;
  ctaBackground: string;
  ctaHoverBackground: string;
};

export type LayerProvinceRecommendation = {
  provinceId: string;
  provinceName: string;
  region: string;
  reason: string;
  thumbnail: string;
  href: string;
  isFlagship: boolean;
};
