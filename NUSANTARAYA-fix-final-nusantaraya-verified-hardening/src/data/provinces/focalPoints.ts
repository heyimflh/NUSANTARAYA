export type ProvinceAssetRole = "thumb" | "hero" | "culture" | "food" | "destination" | "modern";

export type FocalPoint = { x: number; y: number };

// Maps province ID to a set of focal points for its assets.
// Values represent percentages (0-100) from top-left (e.g. { x: 50, y: 50 } is center).
// If an asset doesn't have a focal point defined here, it will default to { x: 50, y: 50 }.
export const provinceAssetFocalPoints: Record<
  string,
  Partial<Record<ProvinceAssetRole, FocalPoint>>
> = {
  "sulawesi-selatan": {
    hero: { x: 50, y: 35 }, // Keep focus on the upper middle of the hero (e.g. ship/house)
    culture: { x: 50, y: 30 }, 
    destination: { x: 50, y: 40 },
  },
  "sumatera-barat": {
    hero: { x: 50, y: 40 },
    culture: { x: 50, y: 20 }, // Focus on the top of Rumah Gadang or headpiece
    food: { x: 50, y: 50 }, // Rendang usually centered
  },
  "di-yogyakarta": {
    hero: { x: 50, y: 40 }, // Kraton/Tugu usually centered slightly up
    culture: { x: 50, y: 25 }, // Wayang or Batik details
  },
  "bali": {
    hero: { x: 50, y: 40 }, // Temple gates
    culture: { x: 50, y: 25 }, // Dancer faces
  },
  "kalimantan-timur": {
    hero: { x: 50, y: 30 },
  },
  "maluku": {
    hero: { x: 50, y: 40 },
  },
  "nusa-tenggara-timur": {
    hero: { x: 50, y: 45 },
  },
  "papua-barat-daya": {
    hero: { x: 50, y: 40 }, // Raja Ampat islands
    destination: { x: 50, y: 40 },
  }
};

export function getFocalPoint(provinceId: string, role: ProvinceAssetRole): FocalPoint {
  const points = provinceAssetFocalPoints[provinceId];
  if (points && points[role]) {
    return points[role]!;
  }
  return { x: 50, y: 50 };
}
