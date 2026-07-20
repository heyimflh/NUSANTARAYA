/**
 * modeConfig.ts — Mode-specific behavior configuration
 * Controls tooltip emphasis, panel tab defaults, CTA text, and pin priority.
 */

import { ExploreModeId } from "@/data/exploreControls";

export type ModeConfig = {
  defaultTab: "budaya" | "rasa" | "destinasi" | "masadepan";
  ctaLabel: string;
  ctaDisabledLabel: string;
  tooltipEmphasis: string[]; // Which highlight fields to prioritize in tooltips
  pinPriority: string[];     // Which categories to prioritize in pin display
  panelSubtitle: string;
};

export const MODE_CONFIGS: Record<ExploreModeId, ModeConfig> = {
  explore: {
    defaultTab: "budaya",
    ctaLabel: "Jelajahi Provinsi",
    ctaDisabledLabel: "Segera Hadir",
    tooltipEmphasis: ["highlights"],
    pinPriority: [],
    panelSubtitle: "Eksplorasi bebas",
  },
  tourist: {
    defaultTab: "destinasi",
    ctaLabel: "Rencanakan Perjalanan",
    ctaDisabledLabel: "Segera Hadir",
    tooltipEmphasis: ["destination", "culinary"],
    pinPriority: ["alam", "kuliner"],
    panelSubtitle: "Panduan wisata",
  },
  learn: {
    defaultTab: "budaya",
    ctaLabel: "Buka Arsip",
    ctaDisabledLabel: "Segera Hadir",
    tooltipEmphasis: ["culture", "history"],
    pinPriority: ["sejarah", "budaya"],
    panelSubtitle: "Sumber pengetahuan",
  },
};

export const MODE_LABELS: Record<ExploreModeId, string> = {
  explore: "Explore",
  tourist: "Tourist",
  learn: "Learn",
};
