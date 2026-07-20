/**
 * NUSANTARAYA — Nusa Archive Types
 * "The Living Memory House"
 *
 * Canonical types for the Archive module.
 * Source of truth: Planning Master — Halaman Nusa Archive §13 Data Model
 */

import type { RegionId } from "./region";

// ─── Category ────────────────────────────────────────────────────────────────

export type ArchiveCategoryId =
  | "rumah-adat"
  | "tarian"
  | "alat-musik"
  | "pakaian-adat"
  | "upacara-adat"
  | "cerita-rakyat"
  | "bahasa-aksara"
  | "senjata-tradisional"
  | "kerajinan"
  | "motif-kain"
  | "tokoh-daerah"
  | "kosmologi";

export const ARCHIVE_CATEGORY_IDS: readonly ArchiveCategoryId[] = [
  "rumah-adat",
  "tarian",
  "alat-musik",
  "pakaian-adat",
  "upacara-adat",
  "cerita-rakyat",
  "bahasa-aksara",
  "senjata-tradisional",
  "kerajinan",
  "motif-kain",
  "tokoh-daerah",
  "kosmologi",
] as const;

export const ARCHIVE_CATEGORY_ID_SET: ReadonlySet<string> = new Set(ARCHIVE_CATEGORY_IDS);

export function isArchiveCategoryId(value: unknown): value is ArchiveCategoryId {
  return typeof value === "string" && ARCHIVE_CATEGORY_ID_SET.has(value);
}

// ─── Category Definition ─────────────────────────────────────────────────────

export type ArchiveCategoryDefinition = {
  id: ArchiveCategoryId;
  index: number;
  name: string;
  nameEn: string;
  promise: string;
  promiseEn: string;
  icon: string;
  accentColor: string;
  accentColorSoft: string;
};

// ─── Media ───────────────────────────────────────────────────────────────────

export type ArchiveMediaType = "image" | "audio" | "video";

export type ArchiveMedia = {
  id: string;
  type: ArchiveMediaType;
  src: string;
  width: number;
  height: number;
  aspectRatio: string;
  alt: string;
  altEn?: string;
  caption?: string;
  captionEn?: string;
  credit?: string;
  license?: string;
  focalPoint?: { x: number; y: number };
  fallbackCategory?: ArchiveCategoryId;
};

// ─── Source References ───────────────────────────────────────────────────────

export type ArchiveSourceType =
  | "government"
  | "academic"
  | "museum"
  | "community"
  | "media"
  | "field-research"
  | "book"
  | "online";

export type ArchiveSourceRef = {
  id: string;
  title: string;
  organization?: string;
  author?: string;
  type: ArchiveSourceType;
  url?: string;
  publishedDate?: string;
  accessDate?: string;
  reliability: "verified" | "reviewed" | "contributed" | "unverified";
};

// ─── Feature Refs (Ecosystem Handoff) ────────────────────────────────────────

export type ArchiveFeatureRefTarget =
  | "nusa-map"
  | "province-atlas"
  | "nusa-route"
  | "nusa-passport"
  | "rani"
  | "nusa-rasa"
  | "aksara-lab"
  | "jalur-rempah"
  | "nusa-future";

export type ArchiveFeatureRef = {
  target: ArchiveFeatureRefTarget;
  targetId?: string;
  label: string;
  labelEn?: string;
};

// ─── Sensitivity ─────────────────────────────────────────────────────────────

export type ArchiveSensitivity = {
  isSensitive: boolean;
  reason?: string;
  policy?: string;
  mediaRestriction?: "none" | "limited" | "no-media";
};

// ─── Period / Era ────────────────────────────────────────────────────────────

export type ArchivePeriod = {
  label: string;
  labelEn?: string;
  startYear?: number;
  endYear?: number;
  era?: string;
};

// ─── Item Locale Content ─────────────────────────────────────────────────────

export type ArchiveItemLocale = {
  title: string;
  summary: string;
  context?: string;
  meaning?: string;
  history?: string;
  materialProcess?: string;
  contextOfUse?: string;
  etiquette?: string;
  funFacts?: string[];
};

// ─── Living Status ───────────────────────────────────────────────────────────

export type ArchiveLivingStatus = "living" | "revitalized" | "historical" | "unknown";

// ─── Item Status ─────────────────────────────────────────────────────────────

export type ArchiveItemStatus = "draft" | "review" | "published" | "archived";

// ─── Archive Item ────────────────────────────────────────────────────────────

export type ArchiveItem = {
  id: string;
  slug: string;
  status: ArchiveItemStatus;
  categoryId: ArchiveCategoryId;
  provinceIds: string[];
  communityIds?: string[];
  localeContent: {
    id: ArchiveItemLocale;
    en?: ArchiveItemLocale;
  };
  aliases: string[];
  keywords: string[];
  period?: ArchivePeriod;
  livingStatus?: ArchiveLivingStatus;
  media: ArchiveMedia[];
  sourceRefs: string[];
  relatedItemIds: string[];
  relatedFeatureRefs: ArchiveFeatureRef[];
  sensitivity?: ArchiveSensitivity;
  editorialPriority: number;
  updatedAt: string;
  reviewedAt?: string;
};

// ─── Collection ──────────────────────────────────────────────────────────────

export type ArchiveCollection = {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  promise: string;
  promiseEn?: string;
  itemIds: string[];
  provinceIds: string[];
  primaryCategoryId?: ArchiveCategoryId;
  reasonCodes: string[];
  heroVisual?: string;
  heroAlt?: string;
  editorialPriority: number;
};

// ─── Story Thread ────────────────────────────────────────────────────────────

export type ArchiveStoryThreadKind = "explore-trail" | "learning-path" | "tourist-context";

export type ArchiveStoryThread = {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  promise: string;
  promiseEn?: string;
  itemIds: string[];
  provinceIds: string[];
  kind: ArchiveStoryThreadKind;
  primaryPillar: string;
  reasonCodes: string[];
  sourceCompleteness: "complete" | "partial" | "minimal";
};

// ─── View / Filter / Sort ────────────────────────────────────────────────────

export type ArchiveViewMode = "editorial" | "compact";

export type ArchiveSortOption = "relevance" | "name" | "updated";

export type ArchiveFilterState = {
  query: string;
  categoryId: ArchiveCategoryId | null;
  regionId: RegionId | null;
  provinceId: string | null;
  mode: "explore" | "tourist" | "learn";
  sort: ArchiveSortOption;
  viewMode: ArchiveViewMode;
  page: number;
};

export const DEFAULT_ARCHIVE_FILTER: ArchiveFilterState = {
  query: "",
  categoryId: null,
  regionId: null,
  provinceId: null,
  mode: "explore",
  sort: "relevance",
  viewMode: "editorial",
  page: 1,
};

// ─── Handoff Payloads ────────────────────────────────────────────────────────

export type ArchiveMapHandoff = {
  source: "archive";
  itemId?: string;
  provinceIds: string[];
  categoryId?: ArchiveCategoryId;
  regionId?: RegionId;
  locale: "id" | "en";
  mode: "explore" | "tourist" | "learn";
};

export type ArchiveRouteHandoff = {
  source: "archive";
  provinceIds: string[];
  regionId?: RegionId;
  interests: string[];
};

export type ArchiveRaniHandoff = {
  source: "archive";
  itemIds: string[];
  sourceRefs: string[];
  locale: "id" | "en";
  mode: "explore" | "tourist" | "learn";
};

// ─── Shelf (Personal) ───────────────────────────────────────────────────────

export type ArchiveShelfData = {
  version: 1;
  savedItemIds: string[];
  savedThreadIds: string[];
  recentItemIds: string[];
  updatedAt: string;
};

export const DEFAULT_ARCHIVE_SHELF: ArchiveShelfData = {
  version: 1,
  savedItemIds: [],
  savedThreadIds: [],
  recentItemIds: [],
  updatedAt: new Date().toISOString(),
};

// ─── Item View Model (for components) ────────────────────────────────────────

export type ArchiveItemViewModel = {
  id: string;
  slug: string;
  catalogNumber: string;
  title: string;
  titleEn?: string;
  summary: string;
  origin: string;
  categoryId: ArchiveCategoryId;
  categoryName: string;
  provinceNames: string[];
  regionId?: RegionId;
  imageSrc: string;
  imageAlt: string;
  imageAspectRatio: string;
  imageFocalPoint?: { x: number; y: number };
  sourceStatus: "verified" | "reviewed" | "contributed" | "unverified" | "none";
  livingStatus?: ArchiveLivingStatus;
  contextLine: string;
  isSaved: boolean;
  editorialPriority: number;
};
