// ═══════════════════════════════════════════════════════════════════════════
// Jambi — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "jambi-ref-01",
    title: "Provinsi Jambi Dalam Angka 2024",
    authors: ["BPS Provinsi Jambi"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["jambi"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const jambiReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const jambiAtlas: ProvinceAtlas = {
  provinceId: "jambi",
  slug: "jambi",
  title: "Jambi",
  tagline: "Sepucuk Jambi Sembilan Lurah",

  summary: [
    {
      id: "jambi-sum-01",
      content: "Menyimpan situs Candi Muaro Jambi yang luas peninggalan kebudayaan Buddha purba.",
      citationIds: ["jambi-ref-01"],
    }
  ],

  quickFacts: [
    { id: "jambi-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["jambi-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "jambi-geo-01",
        content: "Informasi geografis dan bentang alam Jambi masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["jambi-ref-01"],
      }
    ],
    referenceIds: ["jambi-ref-01"],
  },

  referenceIds: ["jambi-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
