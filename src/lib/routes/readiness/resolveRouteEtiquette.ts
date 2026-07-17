import type { RouteEtiquetteItem } from "./routeReadinessSchema";
import type { RouteRecommendation } from "@/types/route-planner";

export function resolveRouteEtiquette(result: RouteRecommendation): RouteEtiquetteItem[] {
  const items: RouteEtiquetteItem[] = [];

  // Fallback / dynamic generation based on interests and provinces
  
  if (result.interests.includes("budaya") || result.interests.includes("sejarah")) {
    items.push({
      id: "etq-sacred",
      contextType: "sacred-place",
      provinceIds: result.provinceIds,
      guidanceId: "Gunakan pakaian sopan dan tertutup saat memasuki area suci/keraton.",
      whyItMattersId: "Menghormati norma kesopanan lokal dan menjaga kesucian tempat.",
      priority: "essential",
      confidence: "verified",
      sourceRefs: ["Panduan Wisata Budaya"],
      updatedAt: new Date().toISOString(),
    });
  }

  if (result.interests.includes("alam")) {
    items.push({
      id: "etq-env",
      contextType: "environment",
      provinceIds: result.provinceIds,
      guidanceId: "Bawa botol minum sendiri dan jangan tinggalkan sampah di alam.",
      whyItMattersId: "Menjaga kebersihan dan kelestarian destinasi alam.",
      priority: "essential",
      confidence: "verified",
      sourceRefs: ["Prinsip Leave No Trace"],
      updatedAt: new Date().toISOString(),
    });
  }

  items.push({
    id: "etq-photo",
    contextType: "photography",
    provinceIds: result.provinceIds,
    guidanceId: "Tanyakan izin sebelum memotret penduduk lokal atau kegiatan upacara adat.",
    whyItMattersId: "Menghargai privasi dan kenyamanan masyarakat setempat.",
    priority: "recommended",
    confidence: "estimated",
    sourceRefs: ["Etika Fotografi Perjalanan"],
    updatedAt: new Date().toISOString(),
  });

  // Limit to 4 to avoid overwhelming
  return items.slice(0, 4);
}
