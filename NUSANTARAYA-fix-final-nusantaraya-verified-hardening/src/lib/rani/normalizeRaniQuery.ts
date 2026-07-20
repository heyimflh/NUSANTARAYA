export type NormalizedQuery = {
  raw: string;
  clean: string;
  tokens: string[];
};

/**
 * Robust NLP normalization for local query matching.
 * Handles trimming, lowercase, unicode folding, and punctuation stripping.
 */
export function normalizeRaniQuery(query: string): NormalizedQuery {
  if (!query) {
    return { raw: "", clean: "", tokens: [] };
  }
  
  const raw = query.trim();
  
  // 1. Lowercase
  // 2. Normalize unicode (NFKD) to separate diacritics, then remove them
  // 3. Remove punctuation (keep alphanumeric and spaces)
  const clean = raw
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^\w\s-]/g, " ")       // replace punctuation with space (keep hyphens)
    .replace(/\s+/g, " ")            // collapse spaces
    .trim();

  // Split into tokens (ignoring empty)
  const tokens = clean.split(" ").filter(t => t.length > 0);

  return {
    raw,
    clean,
    tokens
  };
}
