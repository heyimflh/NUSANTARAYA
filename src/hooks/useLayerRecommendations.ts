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
    
    // 1. Matches layer category
    const matchingProvinces = provinceMapData.filter((p) => 
      p.categories.includes(activeLayer as ExploreLayerId)
    );

    // 2. Sort strategy
    // We want regional diversity and max 2 flagships from 4 items.
    const seed = activeLayer.charCodeAt(0) + activeLayer.length;
    
    // Sort flagships first just to have them at the beginning of the pool
    const sortedPool = [...matchingProvinces].sort((a, b) => {
      if (a.isFlagship && !b.isFlagship) return -1;
      if (!a.isFlagship && b.isFlagship) return 1;
      // deterministic pseudo-random tie-break
      return (a.id.charCodeAt(0) % seed) - (b.id.charCodeAt(0) % seed);
    });

    const reasons: Record<string, string> = {
      budaya: "Tradisi adat dan warisan seni yang kental",
      kuliner: "Cerita di balik hidangan dan rempah khas",
      alam: "Lanskap alam dan green tourism yang memukau",
      sejarah: "Pusat situs bersejarah dan jejak kerajaan",
      rempah: "Simpul utama pelabuhan jalur maritim",
      future: "Inovasi lokal dan ekonomi kreatif modern",
    };

    const getThumbnail = (p: typeof provinceMapData[0]) => {
      switch (activeLayer) {
        case "budaya": return p.assets.culture || p.assets.thumb;
        case "kuliner": return p.assets.food || p.assets.thumb;
        case "alam": return p.assets.destination || p.assets.thumb;
        case "future": return p.assets.modern || p.assets.thumb;
        case "sejarah": return p.assets.culture || p.assets.hero || p.assets.thumb;
        case "rempah": return p.assets.food || p.assets.hero || p.assets.thumb;
        default: return p.assets.thumb;
      }
    };

    let flagshipCount = 0;
    const selectedRegions = new Set<string>();

    for (const p of sortedPool) {
      if (recommendations.length >= limit) break;
      
      // Enforce max 2 flagships
      if (p.isFlagship && flagshipCount >= 2) continue;
      
      // Enforce regional diversity ideally, but if we don't have enough data, fallback
      // For a robust implementation, we try to pick diverse regions.
      // If we already have this region and there are other options, skip for now.
      // But to keep it simple and deterministic, we just allow it if we're desperate.
      const regionAlreadySelected = selectedRegions.has(p.region);
      if (regionAlreadySelected && sortedPool.length > limit * 2) {
         // Skip to ensure diversity if we have plenty of pool size
         continue;
      }

      if (p.isFlagship) flagshipCount++;
      selectedRegions.add(p.region);

      recommendations.push({
        provinceId: p.id,
        provinceName: p.name,
        region: p.region,
        reason: reasons[activeLayer] || "Provinsi yang relevan dengan lensa ini",
        thumbnail: getThumbnail(p),
        href: p.href,
        isFlagship: p.isFlagship,
      });
    }

    // If we didn't fill the limit because of strict region filters, fill with remaining
    if (recommendations.length < limit) {
      for (const p of sortedPool) {
        if (recommendations.length >= limit) break;
        if (!recommendations.some(r => r.provinceId === p.id)) {
          if (p.isFlagship && flagshipCount >= 2) continue; // still enforce flagship cap if possible
          if (p.isFlagship) flagshipCount++;
          recommendations.push({
            provinceId: p.id,
            provinceName: p.name,
            region: p.region,
            reason: reasons[activeLayer] || "Cerita tambahan di Nusantara",
            thumbnail: getThumbnail(p),
            href: p.href,
            isFlagship: p.isFlagship,
          });
        }
      }
    }

    return recommendations;
  }, [activeLayer, limit]);
}
