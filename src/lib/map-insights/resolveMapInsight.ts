import {
  MapInsightsContext,
  MapInsightViewModel,
  MapInsightAction,
} from "@/types/mapInsights";
import { canonicalMapInsightStats } from "@/data/map/mapInsightStats";
import { mapEditorialInsightsId } from "@/data/map/mapEditorialInsights";
import { mapInsightActions } from "./mapInsightActions";
import { provinceMapData } from "@/data/provinces/provinces";

function getActionOrFallback(actionId: string): MapInsightAction {
  return (
    mapInsightActions[actionId] || {
      id: "fallback",
      label: "Kembali",
      type: "scroll",
      target: "#interactive-map",
      analyticsSource: "map-insights",
    }
  );
}

function buildBaseViewModel(
  context: MapInsightsContext,
  insightId: string,
  tone: MapInsightViewModel["tone"],
  liveLabel: string
): MapInsightViewModel {
  // Use English fallback if we implement it, but for now fallback to ID
  let insight = mapEditorialInsightsId.find((i) => i.id === insightId);
  
  if (!insight) {
    insight = mapEditorialInsightsId.find((i) => i.id === "default")!;
  }

  const primaryAction = getActionOrFallback(insight.primaryActionId);

  return {
    canonicalStats: canonicalMapInsightStats,
    liveValue: context.resultCount,
    liveLabel,
    contextLabel:
      context.activeLayer !== "all"
        ? `Layer ${context.activeLayer}`
        : `Mode ${context.activeMode === 'explore' ? 'Explore' : context.activeMode === 'tourist' ? 'Tourist' : 'Learn'}`,
    insightId: insight.id,
    insightText: insight.text,
    primaryAction,
    tone,
  };
}

export function resolveMapInsight(
  context: MapInsightsContext
): MapInsightViewModel {
  const isEn = context.locale === "en";

  // 1. No result
  if (context.resultCount === 0) {
    return {
      canonicalStats: canonicalMapInsightStats,
      liveValue: 0,
      liveLabel: isEn ? "matching your selection" : "hasil sesuai pilihanmu",
      contextLabel: isEn ? "0 Results" : "0 Hasil",
      insightId: "no-result",
      insightText: isEn
        ? "No provinces match your selection. Try changing the keywords or reset the filter."
        : "Belum ada provinsi yang cocok. Ubah kata kunci atau reset filter.",
      primaryAction: getActionOrFallback("action-reset-filter"),
      tone: "empty",
    };
  }

  // 2. Selected province
  if (context.selectedProvinceId) {
    const province = provinceMapData.find(
      (p) => p.id === context.selectedProvinceId
    );
    if (province) {
      const tierLabel = province.isFlagship ? "Flagship" : province.region;
      const categories = province.categories
        .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
        .join(", ");
      
      const insightText = isEn
        ? `${province.name} selected · ${province.region} · ${tierLabel} · strong in ${categories}.`
        : `${province.name} dipilih · ${province.region} · ${tierLabel} · kuat pada ${categories}.`;

      return {
        canonicalStats: canonicalMapInsightStats,
        liveValue: 1,
        liveLabel: isEn ? "matching your selection" : "provinsi dipilih",
        contextLabel: province.name,
        insightId: `province-${province.id}`,
        insightText,
        primaryAction: getActionOrFallback("action-open-summary"),
        secondaryAction: getActionOrFallback("action-open-atlas"),
        tone: "province",
      };
    }
  }

  // 3. Active search
  if (context.searchQuery.trim()) {
    const isSingle = context.resultCount === 1;
    return {
      canonicalStats: canonicalMapInsightStats,
      liveValue: context.resultCount,
      liveLabel: isEn ? "match this search" : "cocok dengan pencarian ini",
      contextLabel: isEn ? "Search Results" : "Hasil Pencarian",
      insightId: "search-active",
      insightText: isEn 
        ? `${context.resultCount} province${isSingle ? '' : 's'} match your search criteria.`
        : `${context.resultCount} provinsi cocok dengan kriteria pencarian ini.`,
      primaryAction: getActionOrFallback("action-reset-filter"),
      tone: "default",
    };
  }

  // 4. Active thematic layer
  if (context.activeLayer !== "all") {
    const label = isEn
      ? `matching Layer ${context.activeLayer}`
      : `sesuai Layer ${context.activeLayer.charAt(0).toUpperCase() + context.activeLayer.slice(1)}`;
    return buildBaseViewModel(
      context,
      `layer-${context.activeLayer}`,
      "layer",
      label
    );
  }

  // 5. Flagship-only state
  if (context.showFlagshipOnly) {
    return {
      canonicalStats: canonicalMapInsightStats,
      liveValue: context.resultCount,
      liveLabel: isEn ? "flagship provinces shown" : "provinsi flagship ditampilkan",
      contextLabel: isEn ? "Flagship Selection" : "Pilihan Flagship",
      insightId: "flagship-only",
      insightText: isEn
        ? "The map is now focused exclusively on the eight flagship provinces with the deepest Atlas materials."
        : "Peta sekarang difokuskan secara eksklusif pada delapan provinsi flagship dengan materi Atlas terdalam.",
      primaryAction: getActionOrFallback("action-view-flagships"),
      tone: "default",
    };
  }

  // 6. Non-default mode
  if (context.activeMode !== "explore") {
    return buildBaseViewModel(
      context,
      `mode-${context.activeMode}`,
      "default",
      isEn ? "ready to explore" : "siap dijelajahi"
    );
  }

  // 7. Default insight
  return buildBaseViewModel(
    context,
    "default",
    "default",
    isEn ? "ready to explore" : "provinsi siap dijelajahi"
  );
}
