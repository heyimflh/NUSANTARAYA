// ═══════════════════════════════════════════════════════════════════════════
// Bengkulu — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "bengkulu-ref-01",
    title: "Provinsi Bengkulu Dalam Angka 2024",
    authors: ["BPS Provinsi Bengkulu"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["bengkulu"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const bengkuluReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const bengkuluAtlas: ProvinceAtlas = {
  provinceId: "bengkulu",
  slug: "bengkulu",
  title: "Bengkulu",
  tagline: "Bumi Rafflesia",

  summary: [
    {
      id: "bengkulu-sum-01",
      content: "Tempat mekar bunga Rafflesia Arnoldii dan sejarah pengasingan Bung Karno.",
      citationIds: ["bengkulu-ref-01"],
    }
  ],

  quickFacts: [
    { id: "bengkulu-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["bengkulu-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "bengkulu-geo-01",
        content: "Informasi geografis dan bentang alam Bengkulu masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["bengkulu-ref-01"],
      }
    ],
    referenceIds: ["bengkulu-ref-01"],
  },

  referenceIds: ["bengkulu-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
