/**
 * Map Utilities — NUSANTARAYA
 *
 * Mapping KODE_PROV (dari TopoJSON) ↔ province.json id.
 * Helper warna per wilayah.
 */

import type { ProvinceRegion } from "@/lib/types";

/** Mapping KODE_PROV → province JSON id */
export const KODE_TO_ID: Record<string, string> = {
  "11": "aceh",
  "12": "sumatera-utara",
  "13": "sumatera-barat",
  "14": "riau",
  "15": "jambi",
  "16": "sumatera-selatan",
  "17": "bengkulu",
  "18": "lampung",
  "19": "kepulauan-bangka-belitung",
  "21": "kepulauan-riau",
  "31": "dki-jakarta",
  "32": "jawa-barat",
  "33": "jawa-tengah",
  "34": "di-yogyakarta",
  "35": "jawa-timur",
  "36": "banten",
  "51": "bali",
  "52": "nusa-tenggara-barat",
  "53": "nusa-tenggara-timur",
  "62": "kalimantan-tengah",
  "63": "kalimantan-selatan",
  "64": "kalimantan-timur",
  "65": "kalimantan-utara",
  "61": "kalimantan-barat",
  "71": "sulawesi-utara",
  "72": "sulawesi-tengah",
  "73": "sulawesi-selatan",
  "74": "sulawesi-tenggara",
  "75": "gorontalo",
  "76": "sulawesi-barat",
  "81": "maluku",
  "82": "maluku-utara",
  "91-A": "papua",
  "91-B": "papua-pegunungan",
  "91-C": "papua-selatan",
  "91-D": "papua-tengah",
  "92-A": "papua-barat",
  "92-B": "papua-barat-daya",
};

/** Reverse mapping: id → KODE_PROV */
export const ID_TO_KODE: Record<string, string> = Object.fromEntries(
  Object.entries(KODE_TO_ID).map(([k, v]) => [v, k])
);

/** Province id → wilayah region */
export const ID_TO_REGION: Record<string, ProvinceRegion> = {};

// Populate region mapping
const regionMap: Record<ProvinceRegion, string[]> = {
  "Sumatera": ["aceh", "sumatera-utara", "sumatera-barat", "riau", "jambi", "sumatera-selatan", "bengkulu", "lampung", "kepulauan-bangka-belitung", "kepulauan-riau"],
  "Jawa": ["dki-jakarta", "jawa-barat", "jawa-tengah", "di-yogyakarta", "jawa-timur", "banten"],
  "Kalimantan": ["kalimantan-barat", "kalimantan-tengah", "kalimantan-selatan", "kalimantan-timur", "kalimantan-utara"],
  "Sulawesi": ["sulawesi-utara", "sulawesi-tengah", "sulawesi-selatan", "sulawesi-tenggara", "gorontalo", "sulawesi-barat"],
  "Bali dan Nusa Tenggara": ["bali", "nusa-tenggara-barat", "nusa-tenggara-timur"],
  "Maluku": ["maluku", "maluku-utara"],
  "Papua": ["papua", "papua-pegunungan", "papua-selatan", "papua-tengah", "papua-barat", "papua-barat-daya"],
};

for (const [region, ids] of Object.entries(regionMap)) {
  for (const id of ids) {
    ID_TO_REGION[id] = region as ProvinceRegion;
  }
}

/** Get CSS color variable name for a region */
export function getRegionColor(region: ProvinceRegion): string {
  const map: Record<ProvinceRegion, string> = {
    "Sumatera": "var(--color-sumatera)",
    "Jawa": "var(--color-jawa)",
    "Kalimantan": "var(--color-kalimantan)",
    "Sulawesi": "var(--color-sulawesi)",
    "Bali dan Nusa Tenggara": "var(--color-bali-nusa)",
    "Maluku": "var(--color-maluku)",
    "Papua": "var(--color-papua)",
  };
  return map[region] ?? "var(--color-gold)";
}

/** Get Tailwind color class for a region */
export function getRegionColorClass(region: ProvinceRegion): string {
  const map: Record<ProvinceRegion, string> = {
    "Sumatera": "text-sumatera",
    "Jawa": "text-jawa",
    "Kalimantan": "text-kalimantan",
    "Sulawesi": "text-sulawesi",
    "Bali dan Nusa Tenggara": "text-bali-nusa",
    "Maluku": "text-maluku",
    "Papua": "text-papua",
  };
  return map[region] ?? "text-gold";
}

/** Get region fill color for map hover */
export function getRegionFill(region: ProvinceRegion): string {
  const map: Record<ProvinceRegion, string> = {
    "Sumatera": "#B85C38",
    "Jawa": "#2B4C8C",
    "Kalimantan": "#1A5C3A",
    "Sulawesi": "#D4691E",
    "Bali dan Nusa Tenggara": "#6B3FA0",
    "Maluku": "#1B7A7A",
    "Papua": "#1A4A7A",
  };
  return map[region] ?? "#C9A84C";
}

/** Get region from KODE_PROV */
export function getRegionFromKode(kode: string): ProvinceRegion {
  const id = KODE_TO_ID[kode];
  return id ? (ID_TO_REGION[id] ?? "Jawa") : "Jawa";
}
