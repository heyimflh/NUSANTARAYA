// ═══════════════════════════════════════════════════════════════════════════
// Lampung — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "lampung-ref-01",
    title: "Provinsi Lampung Dalam Angka 2024",
    authors: ["BPS Provinsi Lampung"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["lampung"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const lampungReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const lampungAtlas: ProvinceAtlas = {
  provinceId: "lampung",
  slug: "lampung",
  title: "Lampung",
  tagline: "Sang Bumi Ruwa Jurai",

  summary: [
    {
      id: "lampung-sum-01",
      content: "Gerbang Pulau Sumatera, habitat gajah Sumatera di Way Kambas, dan pesona Pantai Pahawang.",
      citationIds: ["lampung-ref-01"],
    }
  ],

  quickFacts: [
    { id: "lampung-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["lampung-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "lampung-geo-01",
        content: "Informasi geografis dan bentang alam Lampung masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["lampung-ref-01"],
      }
    ],
    referenceIds: ["lampung-ref-01"],
  },

  referenceIds: ["lampung-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
