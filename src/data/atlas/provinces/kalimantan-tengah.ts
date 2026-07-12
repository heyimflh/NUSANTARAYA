// ═══════════════════════════════════════════════════════════════════════════
// Kalimantan Tengah — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kalimantan-tengah-ref-01",
    title: "Provinsi Kalimantan Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["kalimantan-tengah"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const kalimantanTengahReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kalimantanTengahAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-tengah",
  slug: "kalimantan-tengah",
  title: "Kalimantan Tengah",
  tagline: "Paru-paru Dunia",

  summary: [
    {
      id: "kalimantan-tengah-sum-01",
      content: "Habitat Orangutan di Taman Nasional Tanjung Puting dan hutan gambut tropis yang lebat.",
      citationIds: ["kalimantan-tengah-ref-01"],
    }
  ],

  quickFacts: [
    { id: "kalimantan-tengah-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["kalimantan-tengah-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "kalimantan-tengah-geo-01",
        content: "Informasi geografis dan bentang alam Kalimantan Tengah masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["kalimantan-tengah-ref-01"],
      }
    ],
    referenceIds: ["kalimantan-tengah-ref-01"],
  },

  referenceIds: ["kalimantan-tengah-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
