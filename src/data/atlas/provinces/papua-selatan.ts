// ═══════════════════════════════════════════════════════════════════════════
// Papua Selatan — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "papua-selatan-ref-01",
    title: "Provinsi Papua Selatan Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Selatan"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["papua-selatan"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const papuaSelatanReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const papuaSelatanAtlas: ProvinceAtlas = {
  provinceId: "papua-selatan",
  slug: "papua-selatan",
  title: "Papua Selatan",
  tagline: "Batas Ujung Timur Nusantara",

  summary: [
    {
      id: "papua-selatan-sum-01",
      content: "Ujung paling timur Indonesia di Merauke, habitat kanguru pohon, dan Taman Nasional Wasur.",
      citationIds: ["papua-selatan-ref-01"],
    }
  ],

  quickFacts: [
    { id: "papua-selatan-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["papua-selatan-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "papua-selatan-geo-01",
        content: "Informasi geografis dan bentang alam Papua Selatan masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["papua-selatan-ref-01"],
      }
    ],
    referenceIds: ["papua-selatan-ref-01"],
  },

  referenceIds: ["papua-selatan-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
