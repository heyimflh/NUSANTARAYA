// ═══════════════════════════════════════════════════════════════════════════
// Papua Tengah — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "papua-tengah-ref-01",
    title: "Provinsi Papua Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["papua-tengah"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const papuaTengahReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const papuaTengahAtlas: ProvinceAtlas = {
  provinceId: "papua-tengah",
  slug: "papua-tengah",
  title: "Papua Tengah",
  tagline: "Puncak Salju Abadi",

  summary: [
    {
      id: "papua-tengah-sum-01",
      content: "Memiliki Puncak Jaya (Carstensz Pyramid) yang tertutup salju, salah satu Seven Summits dunia.",
      citationIds: ["papua-tengah-ref-01"],
    }
  ],

  quickFacts: [
    { id: "papua-tengah-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["papua-tengah-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "papua-tengah-geo-01",
        content: "Informasi geografis dan bentang alam Papua Tengah masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["papua-tengah-ref-01"],
      }
    ],
    referenceIds: ["papua-tengah-ref-01"],
  },

  referenceIds: ["papua-tengah-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
