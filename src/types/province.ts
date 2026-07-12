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
  tier: "deep" | "standard" | "basic";
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

export type ProvincePanelSummary = {
  provinceId: string;
  cultureHighlights: string[];
  culinaryHighlights: string[];
  destinationHighlights: string[];
  modernHighlights: string[];
  languages?: string[];
  scripts?: string[];
  touristTip?: string;
  learnSourceCount?: number;
};

export type ProvinceSelectionPayload = {
  provinceId: string;
  source: "map" | "search" | "keyboard" | "card";
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
};
