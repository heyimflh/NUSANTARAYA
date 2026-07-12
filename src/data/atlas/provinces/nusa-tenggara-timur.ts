// ═══════════════════════════════════════════════════════════════════════════
// Nusa Tenggara Timur — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "nusa-tenggara-timur-ref-01",
    title: "Provinsi Nusa Tenggara Timur Dalam Angka 2024",
    authors: ["BPS Provinsi Nusa Tenggara Timur"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const nusaTenggaraTimurReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const nusaTenggaraTimurAtlas: ProvinceAtlas = {
  provinceId: "nusa-tenggara-timur",
  slug: "nusa-tenggara-timur",
  title: "Nusa Tenggara Timur",
  tagline: "Nusa Purba dan Satwa Endemik",

  summary: [
    {
      id: "nusa-tenggara-timur-sum-01",
      content: "Habitat asli Komodo, danau Tiga Warna Kelimutu, serta tradisi penenun yang sangat berakar.",
      citationIds: ["nusa-tenggara-timur-ref-01"],
    }
  ],

  quickFacts: [
    { id: "nusa-tenggara-timur-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["nusa-tenggara-timur-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "nusa-tenggara-timur-geo-01",
        content: "Informasi geografis dan bentang alam Nusa Tenggara Timur masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["nusa-tenggara-timur-ref-01"],
      }
    ],
    referenceIds: ["nusa-tenggara-timur-ref-01"],
  },

  referenceIds: ["nusa-tenggara-timur-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
