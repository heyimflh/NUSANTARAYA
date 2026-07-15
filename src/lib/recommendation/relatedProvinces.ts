import { provinceMapData } from "@/data/provinces/provinces";

export interface RelatedProvince {
  id: string;
  name: string;
  reason: string;
  coverAsset: string;
}

export function getRelatedProvinces(currentProvinceId: string, limit: number = 3): RelatedProvince[] {
  const current = provinceMapData.find((p) => p.id === currentProvinceId);
  if (!current) return [];

  // Deterministic scoring based on attributes
  const scored = provinceMapData
    .filter((p) => p.id !== currentProvinceId)
    .map((p) => {
      let score = 0;
      let reason = "";

      // Same region gets high score
      if (p.region === current.region) {
        score += 50;
        reason = `Sesama bagian dari ${p.region.toUpperCase()}`;
      }

      // Both are flagship
      if (p.isFlagship && current.isFlagship) {
        score += 30;
        if (!reason) reason = "Destinasi Unggulan Nasional";
      }

      // Shared categories (interests)
      const sharedLayers = p.categories.filter((l) => current.categories.includes(l));
      score += sharedLayers.length * 10;
      
      if (!reason && sharedLayers.length > 0) {
        const layerNames: Record<string, string> = {
          "alam": "Wisata Alam",
          "budaya": "Kekayaan Budaya",
          "kuliner": "Eksplorasi Kuliner",
          "sejarah": "Jejak Sejarah"
        };
        reason = `Sama-sama memiliki ${layerNames[sharedLayers[0]] || sharedLayers[0]}`;
      }

      // Fallback reason
      if (!reason) {
        reason = "Rekomendasi Penjelajahan";
      }

      // Add a deterministic pseudo-random factor based on IDs to break ties consistently
      const stringScore = (p.id.length + currentProvinceId.length) % 10;
      score += stringScore;

      return {
        id: p.id,
        name: p.name,
        reason,
        coverAsset: p.assets.destination || p.assets.hero,
        score
      };
    });

  // Sort by score descending, then by name alphabetically for deterministic results
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.name.localeCompare(b.name);
  });

  return scored.slice(0, limit);
}
