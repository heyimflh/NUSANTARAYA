// ═══════════════════════════════════════════════════════════════════════════
// Jawa Barat — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "jawa-barat-ref-01",
    title: "Provinsi Jawa Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Jawa Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["jawa-barat"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const jawaBaratReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const jawaBaratAtlas: ProvinceAtlas = {
  provinceId: "jawa-barat",
  slug: "jawa-barat",
  title: "Jawa Barat",
  tagline: "Pesona Tatar Sunda",

  summary: [
    {
      id: "jawa-barat-sum-01",
      content: "Dikenal dengan budaya Sunda yang ramah, seni angklung, dan lanskap dataran tinggi yang sejuk.",
      citationIds: ["jawa-barat-ref-01"],
    }
  ],

  quickFacts: [
    { id: "jawa-barat-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["jawa-barat-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "jawa-barat-geo-01",
        content: "Informasi geografis dan bentang alam Jawa Barat masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["jawa-barat-ref-01"],
      }
    ],
    referenceIds: ["jawa-barat-ref-01"],
  },

  referenceIds: ["jawa-barat-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
