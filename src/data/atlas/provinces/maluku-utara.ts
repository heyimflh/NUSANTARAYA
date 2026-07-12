// ═══════════════════════════════════════════════════════════════════════════
// Maluku Utara — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "maluku-utara-ref-01",
    title: "Provinsi Maluku Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Maluku Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["maluku-utara"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const malukuUtaraReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const malukuUtaraAtlas: ProvinceAtlas = {
  provinceId: "maluku-utara",
  slug: "maluku-utara",
  title: "Maluku Utara",
  tagline: "Moloku Kie Raha",

  summary: [
    {
      id: "maluku-utara-sum-01",
      content: "Sejarah kesultanan Ternate dan Tidore, benteng-benteng bersejarah peninggalan kolonial.",
      citationIds: ["maluku-utara-ref-01"],
    }
  ],

  quickFacts: [
    { id: "maluku-utara-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["maluku-utara-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "maluku-utara-geo-01",
        content: "Informasi geografis dan bentang alam Maluku Utara masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["maluku-utara-ref-01"],
      }
    ],
    referenceIds: ["maluku-utara-ref-01"],
  },

  referenceIds: ["maluku-utara-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
