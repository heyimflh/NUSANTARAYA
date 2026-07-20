/**
 * NUSA ARCHIVE — Search Engine
 * Deterministic, alias-aware, ranked search for archive items.
 *
 * Ranking order (from planning):
 * 1. Exact title/alias match
 * 2. Exact category/province match
 * 3. Prefix title match
 * 4. Keyword/tag match
 * 5. Active mode relevance
 * 6. Source completeness
 * 7. Editorial priority
 * 8. Stable ID tie-break
 */

import type { ArchiveItem, ArchiveCategoryId } from "@/types/archive";
import { getSourceReliability } from "@/data/archive/archiveSourceRegistry";
import { getArchiveCategoryName } from "@/data/archive/archiveCategories";

// ─── Text Normalization ──────────────────────────────────────────────────────

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^\w\s]/g, " ")        // remove punctuation
    .replace(/\s+/g, " ")            // collapse whitespace
    .trim();
}

// ─── Search Scoring ──────────────────────────────────────────────────────────

type SearchScore = {
  item: ArchiveItem;
  score: number;
  matchType: "exact-title" | "exact-alias" | "exact-category" | "exact-province" | "prefix" | "keyword" | "none";
};

function scoreItem(
  item: ArchiveItem,
  normalizedQuery: string,
  queryTokens: string[],
  activeMode: "explore" | "tourist" | "learn",
  provinceNameMap: Map<string, string>,
): SearchScore {
  const locale = item.localeContent.id;
  const title = normalizeText(locale.title);
  const aliases = item.aliases.map(normalizeText);
  const categoryName = normalizeText(getArchiveCategoryName(item.categoryId));
  const provinceNames = item.provinceIds
    .map((pid) => normalizeText(provinceNameMap.get(pid) ?? pid))
    .filter(Boolean);
  const keywords = item.keywords.map(normalizeText);

  let score = 0;
  let matchType: SearchScore["matchType"] = "none";

  // 1. Exact title match
  if (title === normalizedQuery) {
    score += 1000;
    matchType = "exact-title";
  }

  // 2. Exact alias match
  if (aliases.some((a) => a === normalizedQuery)) {
    score += 900;
    if (matchType === "none") matchType = "exact-alias";
  }

  // 3. Exact category/province match
  if (categoryName === normalizedQuery) {
    score += 800;
    if (matchType === "none") matchType = "exact-category";
  }
  if (provinceNames.some((p) => p === normalizedQuery)) {
    score += 800;
    if (matchType === "none") matchType = "exact-province";
  }

  // 4. Prefix title match
  if (title.startsWith(normalizedQuery)) {
    score += 700;
    if (matchType === "none") matchType = "prefix";
  }

  // 5. Token matching — any token matches title/alias/category/province/keyword
  for (const token of queryTokens) {
    if (token.length < 2) continue;

    if (title.includes(token)) score += 100;
    if (aliases.some((a) => a.includes(token))) score += 80;
    if (categoryName.includes(token)) score += 60;
    if (provinceNames.some((p) => p.includes(token))) score += 60;
    if (keywords.some((k) => k.includes(token))) score += 40;

    // English title if available
    if (item.localeContent.en) {
      const enTitle = normalizeText(item.localeContent.en.title);
      if (enTitle.includes(token)) score += 50;
    }

    if (score > 0 && matchType === "none") matchType = "keyword";
  }

  // 6. Mode relevance bonus
  if (activeMode === "learn" && item.sourceRefs.length > 0) {
    score += 20;
  }
  if (activeMode === "tourist" && item.localeContent.id.etiquette) {
    score += 15;
  }

  // 7. Source completeness bonus
  const reliability = getSourceReliability(item.sourceRefs);
  if (reliability === "verified") score += 10;
  else if (reliability === "reviewed") score += 5;

  // 8. Editorial priority
  score += item.editorialPriority;

  return { item, score, matchType };
}

// ─── Public Search Function ──────────────────────────────────────────────────

export type SearchResult = {
  items: ArchiveItem[];
  totalCount: number;
  query: string;
};

export function searchArchiveItems(
  items: ArchiveItem[],
  query: string,
  mode: "explore" | "tourist" | "learn",
  provinceNameMap: Map<string, string>,
): SearchResult {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery || normalizedQuery.length < 1) {
    return { items, totalCount: items.length, query };
  }

  const queryTokens = normalizedQuery.split(" ").filter((t) => t.length >= 2);

  const scored = items
    .map((item) => scoreItem(item, normalizedQuery, queryTokens, mode, provinceNameMap))
    .filter((s) => s.score > 0)
    .sort((a, b) => {
      // Primary: score descending
      if (b.score !== a.score) return b.score - a.score;
      // Tie-break: stable ID ascending
      return a.item.id.localeCompare(b.item.id);
    });

  return {
    items: scored.map((s) => s.item),
    totalCount: scored.length,
    query,
  };
}
