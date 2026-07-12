/**
 * provinceMatch.ts — Canonical province matching utility
 * Used by: resultCount, map dimming, search dropdown
 * Single source of truth for all province filtering and searching.
 */

import { ProvinceMapItem } from "@/types/province";
import { ExploreLayerId } from "@/data/exploreControls";

// ─── Filter: does a province match the current filter state? ─────────────

export type LayerRelevance = 0 | 1 | 2 | 3;

/**
 * Gets the relevance of a province based on current filters.
 * 3: Primary Match (Flagship or strong match)
 * 2: Strong Match (Direct name/capital match)
 * 1: Related Match (Category, region, keywords)
 * 0: No Match (Dimmed)
 */
export function getProvinceRelevance(
  province: ProvinceMapItem,
  query: string,
  layer: ExploreLayerId,
  flagshipOnly: boolean
): LayerRelevance {
  // Layer filter
  if (layer !== "all" && !province.categories.includes(layer)) {
    return 0;
  }

  // Flagship filter
  if (flagshipOnly && !province.isFlagship) {
    return 0;
  }

  // Search filter
  if (query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      return province.isFlagship ? 3 : 2;
    }

    const nameLower = province.name.toLowerCase();
    const officialLower = (province.officialName || "").toLowerCase();
    const capitalLower = province.capital.toLowerCase();

    // Exact or partial name match = highly relevant
    if (nameLower.includes(q) || officialLower.includes(q) || capitalLower.includes(q)) {
      return 3;
    }

    // Highlight, keyword, region = somewhat relevant
    const regionLower = province.region.toLowerCase();
    const matchedHighlight = province.highlights.some(h => h.toLowerCase().includes(q));
    const matchedKeyword = province.keywords.some(k => k.toLowerCase().includes(q));

    if (matchedHighlight || matchedKeyword || regionLower.includes(q)) {
      return 2;
    }

    // Category match = related match
    const matchedCat = province.categories.some(c => c.toLowerCase().includes(q));
    if (matchedCat) {
      return 1;
    }

    return 0;
  }

  // If no query but filters are active
  if (layer !== "all" || flagshipOnly) {
    return province.isFlagship ? 3 : 2;
  }

  // Default state (no filters at all)
  return 1;
}

export function matchesProvince(
  province: ProvinceMapItem,
  query: string,
  layer: ExploreLayerId,
  flagshipOnly: boolean
): boolean {
  return getProvinceRelevance(province, query, layer, flagshipOnly) > 0;
}

// ─── Search: ranked results for the combobox dropdown ────────────────────

export type RankedSearchResult = {
  province: ProvinceMapItem;
  score: number;
  matchedField: string;
};

export function searchProvinces(
  provinces: ProvinceMapItem[],
  query: string,
  limit: number = 8
): RankedSearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: RankedSearchResult[] = [];

  for (const province of provinces) {
    let score = 0;
    let matchedField = "";

    const nameLower = province.name.toLowerCase();
    const officialLower = (province.officialName || "").toLowerCase();
    const capitalLower = province.capital.toLowerCase();
    const regionLower = province.region.toLowerCase();

    // 1. Exact province name match (highest)
    if (nameLower === q) {
      score = 100;
      matchedField = "name";
    }
    // 2. Province name starts with query
    else if (nameLower.startsWith(q)) {
      score = 90;
      matchedField = "name";
    }
    // 3. Province name contains query
    else if (nameLower.includes(q)) {
      score = 80;
      matchedField = "name";
    }
    // 4. Official name match
    else if (officialLower && officialLower.includes(q)) {
      score = 75;
      matchedField = "officialName";
    }
    // 5. Capital match
    else if (capitalLower === q) {
      score = 70;
      matchedField = "capital";
    } else if (capitalLower.includes(q)) {
      score = 65;
      matchedField = "capital";
    }
    // 6. Highlights match (e.g. "Rendang", "Raja Ampat")
    else {
      const matchedHighlight = province.highlights.find((h) =>
        h.toLowerCase().includes(q)
      );
      if (matchedHighlight) {
        score = 60;
        matchedField = matchedHighlight;
      } else {
        // 7. Keywords match (e.g. "ikn", "bromo")
        const matchedKeyword = province.keywords.find((k) =>
          k.toLowerCase().includes(q)
        );
        if (matchedKeyword) {
          score = 50;
          matchedField = matchedKeyword;
        } else {
          // 8. Region match
          if (regionLower.includes(q)) {
            score = 30;
            matchedField = "region";
          }
          // 9. Category match
          else {
            const matchedCat = province.categories.find((c) =>
              c.toLowerCase().includes(q)
            );
            if (matchedCat) {
              score = 20;
              matchedField = matchedCat;
            }
          }
        }
      }
    }

    if (score > 0) {
      // Boost flagship provinces slightly
      if (province.isFlagship) {
        score += 5;
      }
      results.push({ province, score, matchedField });
    }
  }

  // Sort by score descending, then name alphabetically
  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.province.name.localeCompare(b.province.name);
  });

  return results.slice(0, limit);
}

// ─── Count: how many provinces match current filters ─────────────────────

export function countMatchingProvinces(
  provinces: ProvinceMapItem[],
  query: string,
  layer: ExploreLayerId,
  flagshipOnly: boolean
): number {
  return provinces.filter((p) =>
    matchesProvince(p, query, layer, flagshipOnly)
  ).length;
}
