// ═══════════════════════════════════════════════════════════════════════════
// Papua Barat — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "papua-barat-ref-01",
    title: "Provinsi Papua Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["papua-barat"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const papuaBaratReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const papuaBaratAtlas: ProvinceAtlas = {
  provinceId: "papua-barat",
  slug: "papua-barat",
  title: "Papua Barat",
  tagline: "Gerbang Emas Papua",

  summary: [
    {
      id: "papua-barat-sum-01",
      content: "Sejarah awal masuknya peradaban di tanah Papua, dan pegunungan Arfak yang asri.",
      citationIds: ["papua-barat-ref-01"],
    }
  ],

  quickFacts: [
    { id: "papua-barat-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["papua-barat-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "papua-barat-geo-01",
        content: "Informasi geografis dan bentang alam Papua Barat masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["papua-barat-ref-01"],
      }
    ],
    referenceIds: ["papua-barat-ref-01"],
  },

  referenceIds: ["papua-barat-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
