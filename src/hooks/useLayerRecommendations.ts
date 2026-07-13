import { useMemo } from "react";
import { ExploreLayerId } from "@/data/exploreControls";
import { provinceMapData } from "@/data/provinces/provinces";
import { LayerProvinceRecommendation } from "@/types/explore-layer";

export function useLayerRecommendations(
  activeLayer: ExploreLayerId | "all",
  limit: number = 4
) {
  return useMemo(() => {
    if (activeLayer === "all") return [];

    const recommendations: LayerProvinceRecommendation[] = [];
    
    // Sort and filter strategy:
    // 1. Matches layer category
    // 2. Mix of flagship and standard
    // 3. Fallback reason based on layer
    
    const matchingProvinces = provinceMapData.filter((p) => 
      p.categories.includes(activeLayer as ExploreLayerId)
    );

    // simple deterministic shuffle based on layer to keep it stable
    const seed = activeLayer.charCodeAt(0) + activeLayer.length;
    const sorted = [...matchingProvinces].sort((a, b) => {
      // Put flagships first, but introduce a slight variation
      if (a.isFlagship && !b.isFlagship) return -1;
      if (!a.isFlagship && b.isFlagship) return 1;
      return (a.id.charCodeAt(0) % seed) - (b.id.charCodeAt(0) % seed);
    });

    const reasons: Record<string, string> = {
      budaya: "Kaya akan warisan dan tradisi",
      kuliner: "Memiliki keunikan cerita rasa",
      alam: "Destinasi alam yang memukau",
      sejarah: "Pusat jejak masa lalu penting",
      rempah: "Simpul utama jalur rempah",
      future: "Pusat inovasi dan kota masa depan",
    };

    const defaultReason = reasons[activeLayer] || "Provinsi unggulan";

    for (const p of sorted.slice(0, limit)) {
      recommendations.push({
        provinceId: p.id,
        reason: p.summary.split('.')[0] || defaultReason, // Use first sentence of summary or default
        thumbnail: p.assets.thumb,
        href: p.href,
      });
    }

    return recommendations;
  }, [activeLayer, limit]);
}
