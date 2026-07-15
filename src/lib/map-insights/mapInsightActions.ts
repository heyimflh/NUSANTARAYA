import { MapInsightAction } from "@/types/mapInsights";

export const mapInsightActions: Record<string, MapInsightAction> = {
  "action-view-flagships": {
    id: "action-view-flagships",
    label: "Lihat 8 Flagship",
    type: "scroll",
    target: "#flagship-provinces",
    analyticsSource: "map-insights",
  },
  "action-layer-explore": {
    id: "action-layer-explore",
    label: "Jelajahi Layer Ini",
    type: "scroll",
    target: "#explore-by-layer",
    analyticsSource: "map-insights",
  },
  "action-mode-explore": {
    id: "action-mode-explore",
    label: "Kembali ke Peta",
    type: "scroll",
    target: "#interactive-map",
    analyticsSource: "map-insights",
  },
  "action-reset-filter": {
    id: "action-reset-filter",
    label: "Reset Pilihan",
    type: "map-action",
    target: "reset",
    analyticsSource: "map-insights",
  },
  "action-open-summary": {
    id: "action-open-summary",
    label: "Buka Ringkasan Provinsi",
    type: "map-action",
    target: "open-summary",
    analyticsSource: "map-insights",
  },
  "action-open-atlas": {
    id: "action-open-atlas",
    label: "Buka Atlas Provinsi",
    type: "route",
    target: "open-atlas", // handled dynamically
    analyticsSource: "map-insights",
  },
};
