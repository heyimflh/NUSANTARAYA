// ═══════════════════════════════════════════════════════════════════════════
// Banten — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "banten-ref-01",
    title: "Provinsi Banten Dalam Angka 2024",
    authors: ["BPS Provinsi Banten"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["banten"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const bantenReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const bantenAtlas: ProvinceAtlas = {
  provinceId: "banten",
  slug: "banten",
  title: "Banten",
  tagline: "Warisan Kesultanan di Ujung Barat Jawa",

  summary: [
    {
      id: "banten-sum-01",
      content: "Kaya akan sejarah Kesultanan Banten, budaya Suku Baduy yang unik, serta pantai di Ujung Kulon.",
      citationIds: ["banten-ref-01"],
    }
  ],

  quickFacts: [
    { id: "banten-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["banten-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "banten-geo-01",
        content: "Informasi geografis dan bentang alam Banten masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["banten-ref-01"],
      }
    ],
    referenceIds: ["banten-ref-01"],
  },

  referenceIds: ["banten-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
