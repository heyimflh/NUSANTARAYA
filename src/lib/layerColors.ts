/**
 * layerColors.ts — Visual state colors for each ExploreLayerId
 * Heritage Futuristic palette: warm, restrained, thematic.
 */

import { ExploreLayerId } from "@/data/exploreControls";

export type LayerColorScheme = {
  fill: string;
  fillOpacity: number;
  stroke: string;
  pinColor: string;
  label: string;
};

export const LAYER_COLORS: Record<ExploreLayerId, LayerColorScheme> = {
  all: {
    fill: "#E8E0CE",
    fillOpacity: 0.18,
    stroke: "rgba(13,27,42,0.12)",
    pinColor: "#C9A84C",
    label: "Semua",
  },
  budaya: {
    fill: "#B85C38",
    fillOpacity: 0.22,
    stroke: "rgba(184,92,56,0.35)",
    pinColor: "#B85C38",
    label: "Budaya",
  },
  kuliner: {
    fill: "#D4691E",
    fillOpacity: 0.22,
    stroke: "rgba(212,105,30,0.35)",
    pinColor: "#D4691E",
    label: "Kuliner",
  },
  alam: {
    fill: "#2D5A27",
    fillOpacity: 0.20,
    stroke: "rgba(45,90,39,0.30)",
    pinColor: "#2D5A27",
    label: "Alam",
  },
  sejarah: {
    fill: "#2D6BE4",
    fillOpacity: 0.18,
    stroke: "rgba(45,107,228,0.30)",
    pinColor: "#2D6BE4",
    label: "Sejarah",
  },
  rempah: {
    fill: "#1B7A7A",
    fillOpacity: 0.20,
    stroke: "rgba(27,122,122,0.30)",
    pinColor: "#1B7A7A",
    label: "Jalur Rempah",
  },
  future: {
    fill: "#6B3FA0",
    fillOpacity: 0.18,
    stroke: "rgba(107,63,160,0.30)",
    pinColor: "#6B3FA0",
    label: "Kota Masa Depan",
  },
};

/** Province path visual states */
export const PROVINCE_STATES = {
  default: {
    fill: "transparent",
    fillOpacity: 0,
    stroke: "rgba(13,27,42,0.12)",
    strokeWidth: 0.5,
  },
  hover: {
    fill: "#C9A84C",
    fillOpacity: 0.15,
    stroke: "#C9A84C",
    strokeWidth: 1.2,
  },
  focus: {
    fill: "#C9A84C",
    fillOpacity: 0.10,
    stroke: "#C9A84C",
    strokeWidth: 1.5,
  },
  selected: {
    fill: "#0D1B2A",
    fillOpacity: 0.55,
    stroke: "#C9A84C",
    strokeWidth: 2,
  },
  dimmed: {
    fill: "#0D1B2A",
    fillOpacity: 0.05,
    stroke: "rgba(13,27,42,0.05)",
    strokeWidth: 0.3,
  },
  // High relevance
  primary_match: {
    fillOpacity: 0.45,
    strokeWidth: 1.2,
  },
  // Medium relevance
  related_match: {
    fillOpacity: 0.18,
    strokeWidth: 0.6,
  },
} as const;
