import { PassportData, PassportSavedRoute } from "@/lib/types";
import { provinceMapData } from "@/data/provinces/provinces";
import { ROUTE_PRESETS } from "@/data/routes/routePresets";

export type SavedRoutePassportView = {
  routeId: string;
  title: string;
  regionLabel: string;
  durationDays: number | null;
  provinceIds: string[];
  provinceLabels: string[];
  version: string | null;
  savedAt: string | null;
  status: "ready" | "legacy" | "partial" | "unavailable";
  resumeHref: string;
  coverAsset?: string;
};

export function buildSavedRouteView(
  routeId: string,
  detailsMap?: Record<string, PassportSavedRoute>
): SavedRoutePassportView {
  const details = detailsMap?.[routeId];

  if (details) {
    const provinceLabels = details.provinceIds.map((id) => {
      const p = provinceMapData.find((prov) => prov.id === id);
      return p ? p.name : id;
    });

    return {
      routeId,
      title: details.titleSnapshot || routeId,
      regionLabel: details.regionIds?.length > 0 
        ? details.regionIds.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(", ") 
        : "Beberapa Wilayah",
      durationDays: details.durationDays || null,
      provinceIds: details.provinceIds,
      provinceLabels,
      version: details.routeVersion || null,
      savedAt: details.savedAt || null,
      status: "ready",
      resumeHref: `/routes?preset=${routeId}&source=passport`,
      coverAsset: undefined, 
    };
  }

  // Fallback to preset registry if details are missing
  const preset = ROUTE_PRESETS.find((r) => r.id === routeId);
  if (preset) {
    const provinceLabels = preset.provinceIds.map((id) => {
      const p = provinceMapData.find((prov) => prov.id === id);
      return p ? p.name : id;
    });

    return {
      routeId,
      title: preset.title,
      regionLabel: preset.regionIds.join(", "),
      durationDays: preset.durationDays,
      provinceIds: preset.provinceIds,
      provinceLabels,
      version: null,
      savedAt: null,
      status: "legacy",
      resumeHref: `/routes?preset=${routeId}&source=passport`,
      coverAsset: undefined,
    };
  }

  // Complete failure fallback
  return {
    routeId,
    title: `Rute Tidak Dikenal (${routeId})`,
    regionLabel: "Tidak Diketahui",
    durationDays: null,
    provinceIds: [],
    provinceLabels: [],
    version: null,
    savedAt: null,
    status: "unavailable",
    resumeHref: `/routes?source=passport`,
    coverAsset: undefined,
  };
}
