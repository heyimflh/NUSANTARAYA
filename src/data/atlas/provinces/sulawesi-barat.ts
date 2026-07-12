// ═══════════════════════════════════════════════════════════════════════════
// Sulawesi Barat — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sulawesi-barat-ref-01",
    title: "Provinsi Sulawesi Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sulawesi-barat"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sulawesiBaratReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sulawesiBaratAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-barat",
  slug: "sulawesi-barat",
  title: "Sulawesi Barat",
  tagline: "Malaqbi",

  summary: [
    {
      id: "sulawesi-barat-sum-01",
      content: "Dikenal dengan budaya maritim Suku Mandar dan keindahan alam pegunungan pesisir.",
      citationIds: ["sulawesi-barat-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sulawesi-barat-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sulawesi-barat-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sulawesi-barat-geo-01",
        content: "Informasi geografis dan bentang alam Sulawesi Barat masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sulawesi-barat-ref-01"],
      }
    ],
    referenceIds: ["sulawesi-barat-ref-01"],
  },

  referenceIds: ["sulawesi-barat-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
