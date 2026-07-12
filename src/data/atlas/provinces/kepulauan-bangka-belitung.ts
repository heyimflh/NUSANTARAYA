// ═══════════════════════════════════════════════════════════════════════════
// Kepulauan Bangka Belitung — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kepulauan-bangka-belitung-ref-01",
    title: "Provinsi Kepulauan Bangka Belitung Dalam Angka 2024",
    authors: ["BPS Provinsi Kepulauan Bangka Belitung"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["kepulauan-bangka-belitung"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const kepulauanBangkaBelitungReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kepulauanBangkaBelitungAtlas: ProvinceAtlas = {
  provinceId: "kepulauan-bangka-belitung",
  slug: "kepulauan-bangka-belitung",
  title: "Kepulauan Bangka Belitung",
  tagline: "Negeri Laskar Pelangi",

  summary: [
    {
      id: "kepulauan-bangka-belitung-sum-01",
      content: "Gugusan pulau dengan pantai granit eksotis dan sejarah panjang pertambangan timah.",
      citationIds: ["kepulauan-bangka-belitung-ref-01"],
    }
  ],

  quickFacts: [
    { id: "kepulauan-bangka-belitung-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["kepulauan-bangka-belitung-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "kepulauan-bangka-belitung-geo-01",
        content: "Informasi geografis dan bentang alam Kepulauan Bangka Belitung masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["kepulauan-bangka-belitung-ref-01"],
      }
    ],
    referenceIds: ["kepulauan-bangka-belitung-ref-01"],
  },

  referenceIds: ["kepulauan-bangka-belitung-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
