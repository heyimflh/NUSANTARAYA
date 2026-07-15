import { MapInsightStat } from "@/types/mapInsights";

export const NUSANTARAYA_COUNTS = {
  provinces: 38,
  regions: 7,
  flagships: 8,
  pillars: 7,
  thematicLayers: 6,
} as const;

export const canonicalMapInsightStats: MapInsightStat[] = [
  {
    id: "provinces",
    value: NUSANTARAYA_COUNTS.provinces,
    label: "Provinsi",
    description: "Seluruh provinsi Indonesia yang tersedia pada peta.",
    sourceKey: "nusantara-registry-provinces",
    action: {
      id: "action-provinces-map",
      label: "Kembali ke Map",
      type: "scroll",
      target: "#interactive-map",
      analyticsSource: "map-insights",
    },
  },
  {
    id: "regions",
    value: NUSANTARAYA_COUNTS.regions,
    label: "Wilayah Jelajah",
    description: "Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, Papua.",
    sourceKey: "nusantara-registry-regions",
    action: {
      id: "action-regions-explorer",
      label: "Buka Regional Explorer",
      type: "scroll",
      target: "#regional-explorer",
      analyticsSource: "map-insights",
    },
  },
  {
    id: "flagships",
    value: NUSANTARAYA_COUNTS.flagships,
    label: "Flagship",
    description: "Provinsi dengan materi Atlas terdalam untuk demo dan eksplorasi.",
    sourceKey: "nusantara-registry-flagships",
    action: {
      id: "action-flagships-provinces",
      label: "Buka Flagship Provinces",
      type: "scroll",
      target: "#flagship-provinces",
      analyticsSource: "map-insights",
    },
  },
  {
    id: "pillars",
    value: NUSANTARAYA_COUNTS.pillars,
    label: "Pilar Eksplorasi",
    description: "Fondasi konseptual NUSANTARAYA; bukan jumlah filter UI.",
    sourceKey: "nusantara-registry-pillars",
    // No target action, informative only.
  },
];
