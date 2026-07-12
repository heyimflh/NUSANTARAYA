// ═══════════════════════════════════════════════════════════════════════════
// Nusa Tenggara Barat — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "nusa-tenggara-barat-ref-01",
    title: "Provinsi Nusa Tenggara Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Nusa Tenggara Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["nusa-tenggara-barat"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const nusaTenggaraBaratReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const nusaTenggaraBaratAtlas: ProvinceAtlas = {
  provinceId: "nusa-tenggara-barat",
  slug: "nusa-tenggara-barat",
  title: "Nusa Tenggara Barat",
  tagline: "Lombok dan Sumbawa Eksotis",

  summary: [
    {
      id: "nusa-tenggara-barat-sum-01",
      content: "Keindahan Gunung Rinjani, Pantai Mandalika, dan budaya suku Sasak serta Mbojo.",
      citationIds: ["nusa-tenggara-barat-ref-01"],
    }
  ],

  quickFacts: [
    { id: "nusa-tenggara-barat-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["nusa-tenggara-barat-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "nusa-tenggara-barat-geo-01",
        content: "Informasi geografis dan bentang alam Nusa Tenggara Barat masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["nusa-tenggara-barat-ref-01"],
      }
    ],
    referenceIds: ["nusa-tenggara-barat-ref-01"],
  },

  referenceIds: ["nusa-tenggara-barat-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
