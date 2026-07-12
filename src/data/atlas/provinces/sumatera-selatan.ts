// ═══════════════════════════════════════════════════════════════════════════
// Sumatera Selatan — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sumatera-selatan-ref-01",
    title: "Provinsi Sumatera Selatan Dalam Angka 2024",
    authors: ["BPS Provinsi Sumatera Selatan"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sumatera-selatan"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sumateraSelatanReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sumateraSelatanAtlas: ProvinceAtlas = {
  provinceId: "sumatera-selatan",
  slug: "sumatera-selatan",
  title: "Sumatera Selatan",
  tagline: "Bumi Sriwijaya yang Megah",

  summary: [
    {
      id: "sumatera-selatan-sum-01",
      content: "Pusat Kerajaan maritim Sriwijaya masa lalu, terkenal dengan Pempek dan Jembatan Ampera.",
      citationIds: ["sumatera-selatan-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sumatera-selatan-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sumatera-selatan-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sumatera-selatan-geo-01",
        content: "Informasi geografis dan bentang alam Sumatera Selatan masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sumatera-selatan-ref-01"],
      }
    ],
    referenceIds: ["sumatera-selatan-ref-01"],
  },

  referenceIds: ["sumatera-selatan-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
