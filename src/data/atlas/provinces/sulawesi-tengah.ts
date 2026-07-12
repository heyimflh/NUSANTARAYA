// ═══════════════════════════════════════════════════════════════════════════
// Sulawesi Tengah — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sulawesi-tengah-ref-01",
    title: "Provinsi Sulawesi Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sulawesi-tengah"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sulawesiTengahReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sulawesiTengahAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-tengah",
  slug: "sulawesi-tengah",
  title: "Sulawesi Tengah",
  tagline: "Bumi Tadulako",

  summary: [
    {
      id: "sulawesi-tengah-sum-01",
      content: "Menyimpan keindahan Danau Poso, peninggalan megalitik Lembah Bada, dan Kepulauan Togean.",
      citationIds: ["sulawesi-tengah-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sulawesi-tengah-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sulawesi-tengah-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sulawesi-tengah-geo-01",
        content: "Informasi geografis dan bentang alam Sulawesi Tengah masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sulawesi-tengah-ref-01"],
      }
    ],
    referenceIds: ["sulawesi-tengah-ref-01"],
  },

  referenceIds: ["sulawesi-tengah-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
