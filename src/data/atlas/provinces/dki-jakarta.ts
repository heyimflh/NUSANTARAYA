// ═══════════════════════════════════════════════════════════════════════════
// DKI Jakarta — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "dki-jakarta-ref-01",
    title: "Provinsi DKI Jakarta Dalam Angka 2024",
    authors: ["BPS Provinsi DKI Jakarta"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["dki-jakarta"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const dkiJakartaReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const dkiJakartaAtlas: ProvinceAtlas = {
  provinceId: "dki-jakarta",
  slug: "dki-jakarta",
  title: "DKI Jakarta",
  tagline: "Pusat Ekonomi dan Melting Pot Nusantara",

  summary: [
    {
      id: "dki-jakarta-sum-01",
      content: "Mantan ibu kota yang menjadi pusat metropolitan, dengan warisan budaya Betawi dan Kota Tua.",
      citationIds: ["dki-jakarta-ref-01"],
    }
  ],

  quickFacts: [
    { id: "dki-jakarta-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["dki-jakarta-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "dki-jakarta-geo-01",
        content: "Informasi geografis dan bentang alam DKI Jakarta masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["dki-jakarta-ref-01"],
      }
    ],
    referenceIds: ["dki-jakarta-ref-01"],
  },

  referenceIds: ["dki-jakarta-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
