// ═══════════════════════════════════════════════════════════════════════════
// Papua Barat Daya — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "papua-barat-daya-ref-01",
    title: "Provinsi Papua Barat Daya Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Barat Daya"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["papua-barat-daya"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const papuaBaratDayaReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const papuaBaratDayaAtlas: ProvinceAtlas = {
  provinceId: "papua-barat-daya",
  slug: "papua-barat-daya",
  title: "Papua Barat Daya",
  tagline: "Surga Biodiversitas Laut",

  summary: [
    {
      id: "papua-barat-daya-sum-01",
      content: "Rumah bagi kepulauan Raja Ampat yang menjadi episentrum keanekaragaman hayati laut dunia.",
      citationIds: ["papua-barat-daya-ref-01"],
    }
  ],

  quickFacts: [
    { id: "papua-barat-daya-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["papua-barat-daya-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "papua-barat-daya-geo-01",
        content: "Informasi geografis dan bentang alam Papua Barat Daya masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["papua-barat-daya-ref-01"],
      }
    ],
    referenceIds: ["papua-barat-daya-ref-01"],
  },

  referenceIds: ["papua-barat-daya-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
