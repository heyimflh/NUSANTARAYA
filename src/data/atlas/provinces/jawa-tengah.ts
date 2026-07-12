// ═══════════════════════════════════════════════════════════════════════════
// Jawa Tengah — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "jawa-tengah-ref-01",
    title: "Provinsi Jawa Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Jawa Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["jawa-tengah"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const jawaTengahReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const jawaTengahAtlas: ProvinceAtlas = {
  provinceId: "jawa-tengah",
  slug: "jawa-tengah",
  title: "Jawa Tengah",
  tagline: "Pusat Peradaban Jawa",

  summary: [
    {
      id: "jawa-tengah-sum-01",
      content: "Menyimpan keajaiban dunia Candi Borobudur dan kekayaan seni budaya Jawa yang autentik.",
      citationIds: ["jawa-tengah-ref-01"],
    }
  ],

  quickFacts: [
    { id: "jawa-tengah-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["jawa-tengah-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "jawa-tengah-geo-01",
        content: "Informasi geografis dan bentang alam Jawa Tengah masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["jawa-tengah-ref-01"],
      }
    ],
    referenceIds: ["jawa-tengah-ref-01"],
  },

  referenceIds: ["jawa-tengah-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
