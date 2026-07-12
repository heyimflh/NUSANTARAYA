// ═══════════════════════════════════════════════════════════════════════════
// Gorontalo — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "gorontalo-ref-01",
    title: "Provinsi Gorontalo Dalam Angka 2024",
    authors: ["BPS Provinsi Gorontalo"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["gorontalo"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const gorontaloReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const gorontaloAtlas: ProvinceAtlas = {
  provinceId: "gorontalo",
  slug: "gorontalo",
  title: "Gorontalo",
  tagline: "Serambi Madinah",

  summary: [
    {
      id: "gorontalo-sum-01",
      content: "Kekayaan hiu paus di Teluk Tomini dan sejarah peradaban Islam di Sulawesi Utara.",
      citationIds: ["gorontalo-ref-01"],
    }
  ],

  quickFacts: [
    { id: "gorontalo-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["gorontalo-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "gorontalo-geo-01",
        content: "Informasi geografis dan bentang alam Gorontalo masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["gorontalo-ref-01"],
      }
    ],
    referenceIds: ["gorontalo-ref-01"],
  },

  referenceIds: ["gorontalo-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
