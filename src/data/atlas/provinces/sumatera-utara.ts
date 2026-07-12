// ═══════════════════════════════════════════════════════════════════════════
// Sumatera Utara — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sumatera-utara-ref-01",
    title: "Provinsi Sumatera Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Sumatera Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sumatera-utara"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sumateraUtaraReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sumateraUtaraAtlas: ProvinceAtlas = {
  provinceId: "sumatera-utara",
  slug: "sumatera-utara",
  title: "Sumatera Utara",
  tagline: "Pesona Danau Toba dan Budaya Batak",

  summary: [
    {
      id: "sumatera-utara-sum-01",
      content: "Rumah bagi Danau Toba yang ikonik, kuliner Medan yang kaya rempah, dan budaya suku Batak yang mendalam.",
      citationIds: ["sumatera-utara-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sumatera-utara-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sumatera-utara-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sumatera-utara-geo-01",
        content: "Informasi geografis dan bentang alam Sumatera Utara masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sumatera-utara-ref-01"],
      }
    ],
    referenceIds: ["sumatera-utara-ref-01"],
  },

  referenceIds: ["sumatera-utara-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
