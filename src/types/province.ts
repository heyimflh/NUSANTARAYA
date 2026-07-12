import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";

export type ProvinceAssets = {
  thumb: string;
  hero: string;
  culture: string;
  food: string;
  destination: string;
  modern: string;
};

export type ProvinceMapItem = {
  id: string;
  name: string;
  officialName?: string;
  capital: string;
  region: string;
  tier: "deep" | "standard";
  isFlagship: boolean;
  tagline: string;
  summary: string;
  categories: ExploreLayerId[];
  highlights: string[];
  keywords: string[];
  mapPosition: { x: number; y: number };
  coordinates: [number, number];
  assets: ProvinceAssets;
  href: string;
};

export type SummaryFact = {
  label: string;
  value: string;
};

export type AtlasPreview = {
  category: string;
  title: string;
  description?: string;
  href: string;
};

export type ProvincePanelSummary = {
  provinceId: string;
  facts: SummaryFact[];
  signatures: string[];
  atlasPreviews: AtlasPreview[];
  whyItMatters?: string;
  materialCount?: number;
};

