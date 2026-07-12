// ═══════════════════════════════════════════════════════════════════════════
// Papua Pegunungan — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "papua-pegunungan-ref-01",
    title: "Provinsi Papua Pegunungan Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Pegunungan"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["papua-pegunungan"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const papuaPegununganReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const papuaPegununganAtlas: ProvinceAtlas = {
  provinceId: "papua-pegunungan",
  slug: "papua-pegunungan",
  title: "Papua Pegunungan",
  tagline: "Lembah Baliem yang Eksotis",

  summary: [
    {
      id: "papua-pegunungan-sum-01",
      content: "Provinsi landlocked satu-satunya di Indonesia, kaya akan tradisi suku Dani di Lembah Baliem.",
      citationIds: ["papua-pegunungan-ref-01"],
    }
  ],

  quickFacts: [
    { id: "papua-pegunungan-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["papua-pegunungan-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "papua-pegunungan-geo-01",
        content: "Informasi geografis dan bentang alam Papua Pegunungan masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["papua-pegunungan-ref-01"],
      }
    ],
    referenceIds: ["papua-pegunungan-ref-01"],
  },

  referenceIds: ["papua-pegunungan-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
