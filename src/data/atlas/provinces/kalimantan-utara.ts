// ═══════════════════════════════════════════════════════════════════════════
// Kalimantan Utara — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kalimantan-utara-ref-01",
    title: "Provinsi Kalimantan Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["kalimantan-utara"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const kalimantanUtaraReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kalimantanUtaraAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-utara",
  slug: "kalimantan-utara",
  title: "Kalimantan Utara",
  tagline: "Beranda Terdepan Utara",

  summary: [
    {
      id: "kalimantan-utara-sum-01",
      content: "Provinsi termuda di Kalimantan, berbatasan langsung dengan Malaysia, dengan potensi alam asli.",
      citationIds: ["kalimantan-utara-ref-01"],
    }
  ],

  quickFacts: [
    { id: "kalimantan-utara-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["kalimantan-utara-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "kalimantan-utara-geo-01",
        content: "Informasi geografis dan bentang alam Kalimantan Utara masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["kalimantan-utara-ref-01"],
      }
    ],
    referenceIds: ["kalimantan-utara-ref-01"],
  },

  referenceIds: ["kalimantan-utara-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
