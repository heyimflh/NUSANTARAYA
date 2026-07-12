// ═══════════════════════════════════════════════════════════════════════════
// Sumatera Barat — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sumatera-barat-ref-01",
    title: "Provinsi Sumatera Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Sumatera Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sumatera-barat"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sumateraBaratReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sumateraBaratAtlas: ProvinceAtlas = {
  provinceId: "sumatera-barat",
  slug: "sumatera-barat",
  title: "Sumatera Barat",
  tagline: "Tanah Minang dengan Kuliner Mendunia",

  summary: [
    {
      id: "sumatera-barat-sum-01",
      content: "Dikenal dengan masakan Padang terutama Rendang, sistem matrilineal, dan arsitektur Rumah Gadang.",
      citationIds: ["sumatera-barat-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sumatera-barat-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sumatera-barat-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sumatera-barat-geo-01",
        content: "Informasi geografis dan bentang alam Sumatera Barat masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sumatera-barat-ref-01"],
      }
    ],
    referenceIds: ["sumatera-barat-ref-01"],
  },

  referenceIds: ["sumatera-barat-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
