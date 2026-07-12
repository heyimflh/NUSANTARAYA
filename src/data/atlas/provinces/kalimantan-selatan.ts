// ═══════════════════════════════════════════════════════════════════════════
// Kalimantan Selatan — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kalimantan-selatan-ref-01",
    title: "Provinsi Kalimantan Selatan Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Selatan"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["kalimantan-selatan"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const kalimantanSelatanReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kalimantanSelatanAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-selatan",
  slug: "kalimantan-selatan",
  title: "Kalimantan Selatan",
  tagline: "Bumi Antasari",

  summary: [
    {
      id: "kalimantan-selatan-sum-01",
      content: "Pasar terapung tradisional yang ikonik, batu permata Martapura, dan budaya Banjar.",
      citationIds: ["kalimantan-selatan-ref-01"],
    }
  ],

  quickFacts: [
    { id: "kalimantan-selatan-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["kalimantan-selatan-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "kalimantan-selatan-geo-01",
        content: "Informasi geografis dan bentang alam Kalimantan Selatan masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["kalimantan-selatan-ref-01"],
      }
    ],
    referenceIds: ["kalimantan-selatan-ref-01"],
  },

  referenceIds: ["kalimantan-selatan-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
