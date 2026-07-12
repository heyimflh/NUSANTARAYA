// ═══════════════════════════════════════════════════════════════════════════
// Sulawesi Tenggara — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sulawesi-tenggara-ref-01",
    title: "Provinsi Sulawesi Tenggara Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Tenggara"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sulawesi-tenggara"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sulawesiTenggaraReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sulawesiTenggaraAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-tenggara",
  slug: "sulawesi-tenggara",
  title: "Sulawesi Tenggara",
  tagline: "Bumi Anoa",

  summary: [
    {
      id: "sulawesi-tenggara-sum-01",
      content: "Keindahan surga bawah laut Wakatobi dan kerajinan perak khas Kendari.",
      citationIds: ["sulawesi-tenggara-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sulawesi-tenggara-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sulawesi-tenggara-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sulawesi-tenggara-geo-01",
        content: "Informasi geografis dan bentang alam Sulawesi Tenggara masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sulawesi-tenggara-ref-01"],
      }
    ],
    referenceIds: ["sulawesi-tenggara-ref-01"],
  },

  referenceIds: ["sulawesi-tenggara-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
