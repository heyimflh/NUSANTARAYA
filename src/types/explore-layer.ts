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
  ctaLabel: string;
  keywords: string[];
};

export type LayerProvinceRecommendation = {
  provinceId: string;
  reason: string;
  thumbnail: string;
  href: string;
};
