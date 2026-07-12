// ═══════════════════════════════════════════════════════════════════════════
// Papua — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "papua-ref-01",
    title: "Provinsi Papua Dalam Angka 2024",
    authors: ["BPS Provinsi Papua"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["papua"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const papuaReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const papuaAtlas: ProvinceAtlas = {
  provinceId: "papua",
  slug: "papua",
  title: "Papua",
  tagline: "Bumi Cenderawasih",

  summary: [
    {
      id: "papua-sum-01",
      content: "Danau Sentani yang indah, perbatasan timur laut, dan kekayaan budaya Melanesia.",
      citationIds: ["papua-ref-01"],
    }
  ],

  quickFacts: [
    { id: "papua-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["papua-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "papua-geo-01",
        content: "Informasi geografis dan bentang alam Papua masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["papua-ref-01"],
      }
    ],
    referenceIds: ["papua-ref-01"],
  },

  referenceIds: ["papua-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
