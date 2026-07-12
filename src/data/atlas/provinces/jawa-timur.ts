// ═══════════════════════════════════════════════════════════════════════════
// Jawa Timur — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "jawa-timur-ref-01",
    title: "Provinsi Jawa Timur Dalam Angka 2024",
    authors: ["BPS Provinsi Jawa Timur"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["jawa-timur"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const jawaTimurReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const jawaTimurAtlas: ProvinceAtlas = {
  provinceId: "jawa-timur",
  slug: "jawa-timur",
  title: "Jawa Timur",
  tagline: "Bumi Majapahit yang Dinamis",

  summary: [
    {
      id: "jawa-timur-sum-01",
      content: "Kombinasi alam spektakuler seperti Gunung Bromo, situs Majapahit, dan budaya Arek.",
      citationIds: ["jawa-timur-ref-01"],
    }
  ],

  quickFacts: [
    { id: "jawa-timur-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["jawa-timur-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "jawa-timur-geo-01",
        content: "Informasi geografis dan bentang alam Jawa Timur masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["jawa-timur-ref-01"],
      }
    ],
    referenceIds: ["jawa-timur-ref-01"],
  },

  referenceIds: ["jawa-timur-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
