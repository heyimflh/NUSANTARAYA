// ═══════════════════════════════════════════════════════════════════════════
// Atlas Data Utilities
// Helpers untuk mengakses data atlas dan referensi ilmiah
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference, ChapterMeta } from "@/types/atlas";
import { ALL_CHAPTERS } from "@/types/atlas";

// ─── Atlas Registry ─────────────────────────────────────────────────────
// Lazy-loaded per province to avoid bundling all 38 provinces at once

const atlasRegistry: Record<string, () => Promise<{ atlas: ProvinceAtlas; references: ScientificReference[] }>> = {
  "di-yogyakarta": () => import("@/data/atlas/provinces/di-yogyakarta").then(m => ({
    atlas: m.diYogyakartaAtlas,
    references: m.diYogyakartaReferences,
  })),
  "aceh": () => import("@/data/atlas/provinces/aceh").then(m => ({
    atlas: m.acehAtlas,
    references: m.acehReferences,
  })),
  "sumatera-utara": () => import("@/data/atlas/provinces/sumatera-utara").then(m => ({
    atlas: m.sumateraUtaraAtlas,
    references: m.sumateraUtaraReferences,
  })),
  "sumatera-barat": () => import("@/data/atlas/provinces/sumatera-barat").then(m => ({
    atlas: m.sumateraBaratAtlas,
    references: m.sumateraBaratReferences,
  })),
  "riau": () => import("@/data/atlas/provinces/riau").then(m => ({
    atlas: m.riauAtlas,
    references: m.riauReferences,
  })),
  "kepulauan-riau": () => import("@/data/atlas/provinces/kepulauan-riau").then(m => ({
    atlas: m.kepulauanRiauAtlas,
    references: m.kepulauanRiauReferences,
  })),
  "jambi": () => import("@/data/atlas/provinces/jambi").then(m => ({
    atlas: m.jambiAtlas,
    references: m.jambiReferences,
  })),
  "sumatera-selatan": () => import("@/data/atlas/provinces/sumatera-selatan").then(m => ({
    atlas: m.sumateraSelatanAtlas,
    references: m.sumateraSelatanReferences,
  })),
  "bengkulu": () => import("@/data/atlas/provinces/bengkulu").then(m => ({
    atlas: m.bengkuluAtlas,
    references: m.bengkuluReferences,
  })),
  "lampung": () => import("@/data/atlas/provinces/lampung").then(m => ({
    atlas: m.lampungAtlas,
    references: m.lampungReferences,
  })),
  "kepulauan-bangka-belitung": () => import("@/data/atlas/provinces/kepulauan-bangka-belitung").then(m => ({
    atlas: m.kepulauanBangkaBelitungAtlas,
    references: m.kepulauanBangkaBelitungReferences,
  })),
  "banten": () => import("@/data/atlas/provinces/banten").then(m => ({
    atlas: m.bantenAtlas,
    references: m.bantenReferences,
  })),
  "dki-jakarta": () => import("@/data/atlas/provinces/dki-jakarta").then(m => ({
    atlas: m.dkiJakartaAtlas,
    references: m.dkiJakartaReferences,
  })),
  "jawa-barat": () => import("@/data/atlas/provinces/jawa-barat").then(m => ({
    atlas: m.jawaBaratAtlas,
    references: m.jawaBaratReferences,
  })),
  "jawa-tengah": () => import("@/data/atlas/provinces/jawa-tengah").then(m => ({
    atlas: m.jawaTengahAtlas,
    references: m.jawaTengahReferences,
  })),
  "jawa-timur": () => import("@/data/atlas/provinces/jawa-timur").then(m => ({
    atlas: m.jawaTimurAtlas,
    references: m.jawaTimurReferences,
  })),
  "bali": () => import("@/data/atlas/provinces/bali").then(m => ({
    atlas: m.baliAtlas,
    references: m.baliReferences,
  })),
  "nusa-tenggara-barat": () => import("@/data/atlas/provinces/nusa-tenggara-barat").then(m => ({
    atlas: m.nusaTenggaraBaratAtlas,
    references: m.nusaTenggaraBaratReferences,
  })),
  "nusa-tenggara-timur": () => import("@/data/atlas/provinces/nusa-tenggara-timur").then(m => ({
    atlas: m.nusaTenggaraTimurAtlas,
    references: m.nusaTenggaraTimurReferences,
  })),
  "kalimantan-barat": () => import("@/data/atlas/provinces/kalimantan-barat").then(m => ({
    atlas: m.kalimantanBaratAtlas,
    references: m.kalimantanBaratReferences,
  })),
  "kalimantan-tengah": () => import("@/data/atlas/provinces/kalimantan-tengah").then(m => ({
    atlas: m.kalimantanTengahAtlas,
    references: m.kalimantanTengahReferences,
  })),
  "kalimantan-selatan": () => import("@/data/atlas/provinces/kalimantan-selatan").then(m => ({
    atlas: m.kalimantanSelatanAtlas,
    references: m.kalimantanSelatanReferences,
  })),
  "kalimantan-timur": () => import("@/data/atlas/provinces/kalimantan-timur").then(m => ({
    atlas: m.kalimantanTimurAtlas,
    references: m.kalimantanTimurReferences,
  })),
  "kalimantan-utara": () => import("@/data/atlas/provinces/kalimantan-utara").then(m => ({
    atlas: m.kalimantanUtaraAtlas,
    references: m.kalimantanUtaraReferences,
  })),
  "sulawesi-utara": () => import("@/data/atlas/provinces/sulawesi-utara").then(m => ({
    atlas: m.sulawesiUtaraAtlas,
    references: m.sulawesiUtaraReferences,
  })),
  "gorontalo": () => import("@/data/atlas/provinces/gorontalo").then(m => ({
    atlas: m.gorontaloAtlas,
    references: m.gorontaloReferences,
  })),
  "sulawesi-tengah": () => import("@/data/atlas/provinces/sulawesi-tengah").then(m => ({
    atlas: m.sulawesiTengahAtlas,
    references: m.sulawesiTengahReferences,
  })),
  "sulawesi-barat": () => import("@/data/atlas/provinces/sulawesi-barat").then(m => ({
    atlas: m.sulawesiBaratAtlas,
    references: m.sulawesiBaratReferences,
  })),
  "sulawesi-selatan": () => import("@/data/atlas/provinces/sulawesi-selatan").then(m => ({
    atlas: m.sulawesiSelatanAtlas,
    references: m.sulawesiSelatanReferences,
  })),
  "sulawesi-tenggara": () => import("@/data/atlas/provinces/sulawesi-tenggara").then(m => ({
    atlas: m.sulawesiTenggaraAtlas,
    references: m.sulawesiTenggaraReferences,
  })),
  "maluku": () => import("@/data/atlas/provinces/maluku").then(m => ({
    atlas: m.malukuAtlas,
    references: m.malukuReferences,
  })),
  "maluku-utara": () => import("@/data/atlas/provinces/maluku-utara").then(m => ({
    atlas: m.malukuUtaraAtlas,
    references: m.malukuUtaraReferences,
  })),
  "papua": () => import("@/data/atlas/provinces/papua").then(m => ({
    atlas: m.papuaAtlas,
    references: m.papuaReferences,
  })),
  "papua-barat": () => import("@/data/atlas/provinces/papua-barat").then(m => ({
    atlas: m.papuaBaratAtlas,
    references: m.papuaBaratReferences,
  })),
  "papua-barat-daya": () => import("@/data/atlas/provinces/papua-barat-daya").then(m => ({
    atlas: m.papuaBaratDayaAtlas,
    references: m.papuaBaratDayaReferences,
  })),
  "papua-tengah": () => import("@/data/atlas/provinces/papua-tengah").then(m => ({
    atlas: m.papuaTengahAtlas,
    references: m.papuaTengahReferences,
  })),
  "papua-pegunungan": () => import("@/data/atlas/provinces/papua-pegunungan").then(m => ({
    atlas: m.papuaPegununganAtlas,
    references: m.papuaPegununganReferences,
  })),
  "papua-selatan": () => import("@/data/atlas/provinces/papua-selatan").then(m => ({
    atlas: m.papuaSelatanAtlas,
    references: m.papuaSelatanReferences,
  })),
};

// ─── Public API ─────────────────────────────────────────────────────────

export function getAtlasIds(): string[] {
  return Object.keys(atlasRegistry);
}

export async function getAtlasData(slug: string): Promise<ProvinceAtlas | null> {
  const loader = atlasRegistry[slug];
  if (!loader) return null;
  const { atlas } = await loader();
  return atlas;
}

export async function getAtlasReferences(slug: string): Promise<ScientificReference[]> {
  const loader = atlasRegistry[slug];
  if (!loader) return [];
  const { references } = await loader();
  return references;
}

export function getReferenceById(references: ScientificReference[], id: string): ScientificReference | undefined {
  return references.find(r => r.id === id);
}

export function getReferencesByIds(references: ScientificReference[], ids: string[]): ScientificReference[] {
  return ids.map(id => references.find(r => r.id === id)).filter(Boolean) as ScientificReference[];
}

/**
 * Mengembalikan chapter yang memiliki konten pada atlas.
 * Chapter "ringkasan" dan "referensi" selalu ditampilkan jika atlas ada.
 */
export function getActiveChapters(atlas: ProvinceAtlas): ChapterMeta[] {
  const chapterKeyMap: Record<string, keyof ProvinceAtlas> = {
    geografi: "geography",
    sejarah: "history",
    masyarakat: "society",
    budaya: "culture",
    bahasa: "language",
    kuliner: "culinary",
    alam: "biodiversity",
    destinasi: "destinations",
    cerita: "stories",
    "masa-depan": "contemporary",
    perjalanan: "travel",
  };

  return ALL_CHAPTERS.filter(ch => {
    // Ringkasan and Referensi are always shown
    if (ch.id === "ringkasan" || ch.id === "referensi") return true;
    const key = chapterKeyMap[ch.id];
    if (!key) return false;
    return atlas[key] != null;
  });
}

/**
 * Returns true if atlas data is available for this province slug.
 */
export function hasAtlasData(slug: string): boolean {
  return slug in atlasRegistry;
}
