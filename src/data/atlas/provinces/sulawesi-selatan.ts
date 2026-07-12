// ═══════════════════════════════════════════════════════════════════════════
// Sulawesi Selatan — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sulawesi-selatan-ref-01",
    title: "Provinsi Sulawesi Selatan Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Selatan"],
    year: 2024,
    publisher: "Badan Pusat Statistik",
    url: "https://bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["sulawesi-selatan"],
    topicIds: ["ringkasan", "geografi"],
  }
];

export const sulawesiSelatanReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sulawesiSelatanAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-selatan",
  slug: "sulawesi-selatan",
  title: "Sulawesi Selatan",
  tagline: "Gerbang Timur Indonesia",

  summary: [
    {
      id: "sulawesi-selatan-sum-01",
      content: "Sejarah pelaut tangguh dengan kapal Pinisi, adat Toraja yang unik, dan kuliner rempah Coto Makassar.",
      citationIds: ["sulawesi-selatan-ref-01"],
    }
  ],

  quickFacts: [
    { id: "sulawesi-selatan-qf-01", label: "Sumber Data Utama", value: "BPS Provinsi", citationIds: ["sulawesi-selatan-ref-01"] },
  ],

  // Placeholder chapters ready for enrichment
  geography: {
    introduction: [
      {
        id: "sulawesi-selatan-geo-01",
        content: "Informasi geografis dan bentang alam Sulawesi Selatan masih dalam tahap riset kompilasi data spasial dan geologi.",
        citationIds: ["sulawesi-selatan-ref-01"],
      }
    ],
    referenceIds: ["sulawesi-selatan-ref-01"],
  },

  referenceIds: ["sulawesi-selatan-ref-01", "shared-ref-bps", "shared-ref-kemendagri"],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
