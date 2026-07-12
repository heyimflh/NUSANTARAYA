// ═══════════════════════════════════════════════════════════════════════════
// Kepulauan Riau — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kepulauan-riau-ref-01",
    title: "Provinsi Kepulauan Riau Dalam Angka 2024",
    authors: ["BPS Provinsi Kepulauan Riau"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["kepulauan-riau"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const kepulauanRiauReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kepulauanRiauAtlas: ProvinceAtlas = {
  provinceId: "kepulauan-riau",
  slug: "kepulauan-riau",
  title: "Kepulauan Riau",
  tagline: "Gerbang Bahari Nusantara",

  summary: [
    {
      id: "kepulauan-riau-sum-01",
      content: "Wilayah kepulauan dengan potensi pariwisata bahari dan ekonomi modern di Batam-Bintan.",
      citationIds: ["kepulauan-riau-ref-01"],
    }
  ],

  quickFacts: [
    { id: "kepulauan-riau-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["kepulauan-riau-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "kepulauan-riau-geo-01",
        content: "Informasi geografis dan bentang alam Kepulauan Riau masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["kepulauan-riau-ref-01"],
      }
    ],
    referenceIds: ["kepulauan-riau-ref-01"],
  },

  referenceIds: ["kepulauan-riau-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
