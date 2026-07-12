// ═══════════════════════════════════════════════════════════════════════════
// Kalimantan Barat — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kalimantan-barat-ref-01",
    title: "Provinsi Kalimantan Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["kalimantan-barat"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const kalimantanBaratReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kalimantanBaratAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-barat",
  slug: "kalimantan-barat",
  title: "Kalimantan Barat",
  tagline: "Bumi Khatulistiwa",

  summary: [
    {
      id: "kalimantan-barat-sum-01",
      content: "Dilewati garis Ekuator, kekayaan budaya Dayak dan Melayu, serta keindahan Sungai Kapuas.",
      citationIds: ["kalimantan-barat-ref-01"],
    }
  ],

  quickFacts: [
    { id: "kalimantan-barat-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["kalimantan-barat-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "kalimantan-barat-geo-01",
        content: "Informasi geografis dan bentang alam Kalimantan Barat masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["kalimantan-barat-ref-01"],
      }
    ],
    referenceIds: ["kalimantan-barat-ref-01"],
  },

  referenceIds: ["kalimantan-barat-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
