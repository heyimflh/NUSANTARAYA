// ═══════════════════════════════════════════════════════════════════════════
// Aceh — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "aceh-ref-01",
    title: "Provinsi Aceh Dalam Angka 2024",
    authors: ["BPS Provinsi Aceh"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["aceh"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const acehReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const acehAtlas: ProvinceAtlas = {
  provinceId: "aceh",
  slug: "aceh",
  title: "Aceh",
  tagline: "Serambi Mekkah yang Penuh Pesona",

  summary: [
    {
      id: "aceh-sum-01",
      content: "Terkenal dengan hukum adat Islam yang kuat, kopi Gayo mendunia, dan keindahan alam bawah laut Pulau Weh.",
      citationIds: ["aceh-ref-01"],
    }
  ],

  quickFacts: [
    { id: "aceh-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["aceh-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "aceh-geo-01",
        content: "Informasi geografis dan bentang alam Aceh masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["aceh-ref-01"],
      }
    ],
    referenceIds: ["aceh-ref-01"],
  },

  referenceIds: ["aceh-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
