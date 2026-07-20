/**
 * NUSA ARCHIVE — Source Registry
 * Canonical sources for cultural archive items.
 * Each published item must reference at least one source.
 */

import type { ArchiveSourceRef } from "@/types/archive";

export const archiveSourceRegistry: readonly ArchiveSourceRef[] = [
  {
    id: "src-kemdikbud",
    title: "Kementerian Pendidikan dan Kebudayaan RI",
    organization: "Kemdikbud RI",
    type: "government",
    url: "https://kebudayaan.kemdikbud.go.id",
    reliability: "verified",
  },
  {
    id: "src-bpnb",
    title: "Balai Pelestarian Nilai Budaya",
    organization: "BPNB",
    type: "government",
    reliability: "verified",
  },
  {
    id: "src-unesco-ich",
    title: "UNESCO Intangible Cultural Heritage",
    organization: "UNESCO",
    type: "academic",
    url: "https://ich.unesco.org",
    reliability: "verified",
  },
  {
    id: "src-museum-nasional",
    title: "Museum Nasional Indonesia",
    organization: "Museum Nasional",
    type: "museum",
    reliability: "verified",
  },
  {
    id: "src-dinas-budaya",
    title: "Dinas Kebudayaan Provinsi",
    organization: "Dinas Kebudayaan",
    type: "government",
    reliability: "reviewed",
  },
  {
    id: "src-bps",
    title: "Badan Pusat Statistik",
    organization: "BPS",
    type: "government",
    url: "https://www.bps.go.id",
    reliability: "verified",
  },
  {
    id: "src-komunitas-lokal",
    title: "Komunitas Budaya Lokal",
    type: "community",
    reliability: "reviewed",
  },
  {
    id: "src-jurnal-humaniora",
    title: "Jurnal Humaniora — UGM",
    organization: "Universitas Gadjah Mada",
    type: "academic",
    reliability: "verified",
  },
  {
    id: "src-kitlv",
    title: "KITLV / Royal Netherlands Institute",
    organization: "KITLV",
    type: "academic",
    reliability: "verified",
  },
  {
    id: "src-kemenparekraf",
    title: "Kementerian Pariwisata dan Ekonomi Kreatif",
    organization: "Kemenparekraf",
    type: "government",
    url: "https://kemenparekraf.go.id",
    reliability: "verified",
  },
  {
    id: "src-ensiklopedia-keris",
    title: "Ensiklopedia Keris Nusantara",
    type: "book",
    reliability: "reviewed",
  },
  {
    id: "src-atlas-tenun",
    title: "Atlas Tenun Indonesia",
    type: "book",
    reliability: "reviewed",
  },
];

export const sourceRegistryMap = new Map(
  archiveSourceRegistry.map((s) => [s.id, s])
);

export function getSourceById(id: string): ArchiveSourceRef | undefined {
  return sourceRegistryMap.get(id);
}

export function getSourceReliability(sourceRefIds: string[]): "verified" | "reviewed" | "contributed" | "unverified" | "none" {
  if (sourceRefIds.length === 0) return "none";
  const sources = sourceRefIds.map((id) => sourceRegistryMap.get(id)).filter(Boolean);
  if (sources.length === 0) return "none";
  if (sources.some((s) => s!.reliability === "verified")) return "verified";
  if (sources.some((s) => s!.reliability === "reviewed")) return "reviewed";
  if (sources.some((s) => s!.reliability === "contributed")) return "contributed";
  return "unverified";
}
