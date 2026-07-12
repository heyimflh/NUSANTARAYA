// ═══════════════════════════════════════════════════════════════════════════
// NUSANTARAYA Deep Province Atlas — Type Definitions
// "Satu Peta, Ribuan Cerita"
//
// Data model untuk konten Atlas provinsi, sistem sitasi ilmiah,
// dan referensi terstruktur.
// ═══════════════════════════════════════════════════════════════════════════

// ─── Scientific Reference ────────────────────────────────────────────────

export type SourceType =
  | "government"
  | "statistics"
  | "journal"
  | "book"
  | "thesis"
  | "museum"
  | "unesco"
  | "institution"
  | "regulation"
  | "archive";

export type CredibilityTier = "A" | "B" | "C";

export type CitationIndex = Readonly<Record<string, number>>;

export type ScientificReference = {
  id: string;
  title: string;
  authors?: string[];
  year?: number;
  publication?: string;
  publisher?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url: string;
  accessedAt: string;
  sourceType: SourceType;
  credibilityTier: CredibilityTier;
  language?: "id" | "en" | "other";
  provinceIds: string[];
  topicIds: string[];
  notes?: string;
};

// ─── Cited Content Primitives ────────────────────────────────────────────

export type CitedParagraph = {
  id: string;
  content: string;
  citationIds: string[];
};

export type AtlasFact = {
  id: string;
  label: string;
  value: string;
  dataYear?: number;
  citationIds: string[];
};

export type AtlasTimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
  citationIds: string[];
};

export type AtlasContentItem = {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: CitedParagraph[];
  image?: string;
  imageAlt?: string;
  citationIds: string[];
};

// ─── Chapter Types ───────────────────────────────────────────────────────

export type GeographyChapter = {
  introduction: CitedParagraph[];
  terrain?: CitedParagraph[];
  climate?: CitedParagraph[];
  conservation?: CitedParagraph[];
  referenceIds: string[];
};

export type HistoryChapter = {
  introduction: CitedParagraph[];
  timeline: AtlasTimelineItem[];
  referenceIds: string[];
};

export type SocietyChapter = {
  introduction: CitedParagraph[];
  communities?: CitedParagraph[];
  socialStructure?: CitedParagraph[];
  referenceIds: string[];
};

export type CultureChapter = {
  introduction: CitedParagraph[];
  items: AtlasContentItem[];
  referenceIds: string[];
};

export type AtlasVocabularyItem = {
  id: string;
  word: string;
  meaning: string;
  citationIds: string[];
};

export type LanguageChapter = {
  introduction: CitedParagraph[];
  languages?: CitedParagraph[];
  scripts?: CitedParagraph[];
  vocabulary?: AtlasVocabularyItem[];
  referenceIds: string[];
};

export type CulinaryChapter = {
  introduction: CitedParagraph[];
  items: AtlasContentItem[];
  referenceIds: string[];
};

export type BiodiversityChapter = {
  introduction: CitedParagraph[];
  ecosystems?: CitedParagraph[];
  species?: AtlasContentItem[];
  referenceIds: string[];
};

export type DestinationChapter = {
  introduction: CitedParagraph[];
  items: AtlasContentItem[];
  referenceIds: string[];
};

export type StoryChapter = {
  introduction: CitedParagraph[];
  stories: AtlasContentItem[];
  referenceIds: string[];
};

export type ContemporaryChapter = {
  introduction: CitedParagraph[];
  economy?: CitedParagraph[];
  development?: CitedParagraph[];
  referenceIds: string[];
};

export type AtlasItinerary = {
  id: string;
  duration: number;
  title: string;
  days: { day: number; activities: string[] }[];
  citationIds: string[];
  editorialRecommendation?: boolean;
};

export type TravelChapter = {
  introduction: CitedParagraph[];
  itineraries?: AtlasItinerary[];
  etiquette?: CitedParagraph[];
  referenceIds: string[];
};

// ─── Province Atlas ──────────────────────────────────────────────────────

export type ContentStatus = "draft" | "reviewed" | "verified";

export type ProvinceAtlas = {
  provinceId: string;
  slug: string;
  title: string;
  tagline: string;
  summary: CitedParagraph[];
  quickFacts: AtlasFact[];
  geography?: GeographyChapter;
  history?: HistoryChapter;
  society?: SocietyChapter;
  culture?: CultureChapter;
  language?: LanguageChapter;
  culinary?: CulinaryChapter;
  biodiversity?: BiodiversityChapter;
  destinations?: DestinationChapter;
  stories?: StoryChapter;
  contemporary?: ContemporaryChapter;
  travel?: TravelChapter;
  referenceIds: string[];
  lastReviewedAt: string;
  contentStatus: ContentStatus;
};

// ─── Chapter Navigation ─────────────────────────────────────────────────

export type ChapterMeta = {
  id: string;
  number: string;
  label: string;
};

export const ALL_CHAPTERS: ChapterMeta[] = [
  { id: "ringkasan", number: "00", label: "Ringkasan" },
  { id: "geografi", number: "01", label: "Geografi" },
  { id: "sejarah", number: "02", label: "Sejarah" },
  { id: "masyarakat", number: "03", label: "Masyarakat" },
  { id: "budaya", number: "04", label: "Budaya" },
  { id: "bahasa", number: "05", label: "Bahasa" },
  { id: "kuliner", number: "06", label: "Rasa Nusantara" },
  { id: "alam", number: "07", label: "Alam" },
  { id: "destinasi", number: "08", label: "Destinasi" },
  { id: "cerita", number: "09", label: "Cerita" },
  { id: "masa-depan", number: "10", label: "Masa Kini" },
  { id: "perjalanan", number: "11", label: "Perjalanan" },
  { id: "referensi", number: "12", label: "Referensi" },
];
