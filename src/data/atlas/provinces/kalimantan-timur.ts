// ═══════════════════════════════════════════════════════════════════════════
// Kalimantan Timur — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kalimantan-timur-ref-01",
    title: "Provinsi Kalimantan Timur Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Timur"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const kalimantanTimurReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kalimantanTimurAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-timur",
  slug: "kalimantan-timur",
  title: "Kalimantan Timur",
  tagline: "Serambi Nusantara",

  summary: [
    {
      id: "kalimantan-timur-sum-01",
      content: "Lokasi Ibu Kota Nusantara (IKN) dengan kekayaan biodiversitas dan ekonomi yang berkembang pesat.",
      citationIds: ["kalimantan-timur-ref-01"],
    }
  ],

  quickFacts: [
    { id: "kalimantan-timur-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["kalimantan-timur-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "kalimantan-timur-geo-01",
        content: "Informasi geografis dan bentang alam Kalimantan Timur masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["kalimantan-timur-ref-01"],
      }
    ],
    referenceIds: ["kalimantan-timur-ref-01"],
  },

  referenceIds: ["kalimantan-timur-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
