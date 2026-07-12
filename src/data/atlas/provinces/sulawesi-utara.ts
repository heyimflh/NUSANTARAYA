// ═══════════════════════════════════════════════════════════════════════════
// Sulawesi Utara — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sulawesi-utara-ref-01",
    title: "Provinsi Sulawesi Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sulawesi-utara"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sulawesiUtaraReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sulawesiUtaraAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-utara",
  slug: "sulawesi-utara",
  title: "Sulawesi Utara",
  tagline: "Bumi Nyiur Melambai",

  summary: [
    {
      id: "sulawesi-utara-sum-01",
      content: "Taman Nasional Bunaken yang mendunia dan kerukunan umat beragama yang tinggi.",
      citationIds: ["sulawesi-utara-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sulawesi-utara-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sulawesi-utara-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sulawesi-utara-geo-01",
        content: "Informasi geografis dan bentang alam Sulawesi Utara masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sulawesi-utara-ref-01"],
      }
    ],
    referenceIds: ["sulawesi-utara-ref-01"],
  },

  referenceIds: ["sulawesi-utara-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
