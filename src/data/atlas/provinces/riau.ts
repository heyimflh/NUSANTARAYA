// ═══════════════════════════════════════════════════════════════════════════
// Riau — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "riau-ref-01",
    title: "Provinsi Riau Dalam Angka 2024",
    authors: ["BPS Provinsi Riau"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["riau"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const riauReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const riauAtlas: ProvinceAtlas = {
  provinceId: "riau",
  slug: "riau",
  title: "Riau",
  tagline: "Bumi Lancang Kuning",

  summary: [
    {
      id: "riau-sum-01",
      content: "Pusat kebudayaan Melayu dengan tradisi sungai yang kuat dan warisan sastra.",
      citationIds: ["riau-ref-01"],
    }
  ],

  quickFacts: [
    { id: "riau-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["riau-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "riau-geo-01",
        content: "Informasi geografis dan bentang alam Riau masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["riau-ref-01"],
      }
    ],
    referenceIds: ["riau-ref-01"],
  },

  referenceIds: ["riau-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
