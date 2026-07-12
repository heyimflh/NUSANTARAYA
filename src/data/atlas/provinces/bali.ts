// ═══════════════════════════════════════════════════════════════════════════
// Bali — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "bali-ref-01",
    title: "Provinsi Bali Dalam Angka 2024",
    authors: ["BPS Provinsi Bali"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["bali"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const baliReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const baliAtlas: ProvinceAtlas = {
  provinceId: "bali",
  slug: "bali",
  title: "Bali",
  tagline: "Pulau Dewata yang Magis",

  summary: [
    {
      id: "bali-sum-01",
      content: "Destinasi wisata kelas dunia dengan harmoni budaya Hindu, seni, dan alam yang luar biasa.",
      citationIds: ["bali-ref-01"],
    }
  ],

  quickFacts: [
    { id: "bali-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["bali-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "bali-geo-01",
        content: "Informasi geografis dan bentang alam Bali masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["bali-ref-01"],
      }
    ],
    referenceIds: ["bali-ref-01"],
  },

  referenceIds: ["bali-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
