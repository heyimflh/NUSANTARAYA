// ═══════════════════════════════════════════════════════════════════════════
// Shared Scientific References
// ═══════════════════════════════════════════════════════════════════════════

import type { ScientificReference } from "@/types/atlas";

export const sharedReferences: ScientificReference[] = [
  {
    id: "shared-ref-bps",
    title: "Provinsi Dalam Angka 2024",
    authors: ["Badan Pusat Statistik"],
    year: 2024,
    publisher: "Badan Pusat Statistik Indonesia",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: [], // Used globally
    topicIds: ["ringkasan", "geografi", "masyarakat", "masa-depan"],
  },
  {
    id: "shared-ref-kemendagri",
    title: "Data Kependudukan Semester I 2024",
    authors: ["Ditjen Dukcapil Kemendagri"],
    year: 2024,
    publisher: "Kementerian Dalam Negeri Republik Indonesia",
    url: "https://dukcapil.kemendagri.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    language: "id",
    provinceIds: [],
    topicIds: ["masyarakat"],
  }
];
