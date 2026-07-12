// ═══════════════════════════════════════════════════════════════════════════
// Maluku — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "maluku-ref-01",
    title: "Provinsi Maluku Dalam Angka 2024",
    authors: ["BPS Provinsi Maluku"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["maluku"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const malukuReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const malukuAtlas: ProvinceAtlas = {
  provinceId: "maluku",
  slug: "maluku",
  title: "Maluku",
  tagline: "Provinsi Seribu Pulau",

  summary: [
    {
      id: "maluku-sum-01",
      content: "Pusat Jalur Rempah historis, pantai-pantai memukau di Banda Neira, dan kota musik dunia.",
      citationIds: ["maluku-ref-01"],
    }
  ],

  quickFacts: [
    { id: "maluku-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["maluku-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "maluku-geo-01",
        content: "Informasi geografis dan bentang alam Maluku masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["maluku-ref-01"],
      }
    ],
    referenceIds: ["maluku-ref-01"],
  },

  referenceIds: ["maluku-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
