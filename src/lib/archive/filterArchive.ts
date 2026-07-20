/**
 * NUSA ARCHIVE — Filter & Sort Logic
 * Category AND, region filter, province filter, sort, pagination.
 * URL query parsing with allowlist validation.
 */

import type {
  ArchiveItem,
  ArchiveCategoryId,
  ArchiveFilterState,
  ArchiveSortOption,
  ArchiveViewMode,
  DEFAULT_ARCHIVE_FILTER,
} from "@/types/archive";
import { isArchiveCategoryId } from "@/types/archive";
import type { RegionId } from "@/types/region";
import { regions } from "@/data/regions/regions";
import { isProvinceId } from "@/data/provinces/provinceIds";

// ─── Allowlists ──────────────────────────────────────────────────────────────

const VALID_SORTS: ReadonlySet<string> = new Set(["relevance", "name", "updated"]);
const VALID_VIEWS: ReadonlySet<string> = new Set(["editorial", "compact"]);
const VALID_MODES: ReadonlySet<string> = new Set(["explore", "tourist", "learn"]);
const VALID_REGION_IDS: ReadonlySet<string> = new Set(regions.map((r) => r.id));

function isValidSort(v: unknown): v is ArchiveSortOption {
  return typeof v === "string" && VALID_SORTS.has(v);
}
function isValidView(v: unknown): v is ArchiveViewMode {
  return typeof v === "string" && VALID_VIEWS.has(v);
}
function isValidMode(v: unknown): v is "explore" | "tourist" | "learn" {
  return typeof v === "string" && VALID_MODES.has(v);
}
function isValidRegionId(v: unknown): v is RegionId {
  return typeof v === "string" && VALID_REGION_IDS.has(v);
}

// ─── URL Parsing ─────────────────────────────────────────────────────────────

export function parseArchiveQuery(searchParams: URLSearchParams): ArchiveFilterState {
  const q = searchParams.get("q") ?? "";
  const category = searchParams.get("category");
  const region = searchParams.get("region");
  const province = searchParams.get("province");
  const mode = searchParams.get("mode");
  const sort = searchParams.get("sort");
  const view = searchParams.get("view");
  const page = searchParams.get("page");

  return {
    query: q.slice(0, 200), // prevent extremely long queries
    categoryId: isArchiveCategoryId(category) ? category : null,
    regionId: isValidRegionId(region) ? region : null,
    provinceId: typeof province === "string" && isProvinceId(province) ? province : null,
    mode: isValidMode(mode) ? mode : "explore",
    sort: isValidSort(sort) ? sort : "relevance",
    viewMode: isValidView(view) ? view : "editorial",
    page: Math.max(1, parseInt(page ?? "1", 10) || 1),
  };
}

export function buildArchiveQueryString(filter: ArchiveFilterState): string {
  const params = new URLSearchParams();
  if (filter.query) params.set("q", filter.query);
  if (filter.categoryId) params.set("category", filter.categoryId);
  if (filter.regionId) params.set("region", filter.regionId);
  if (filter.provinceId) params.set("province", filter.provinceId);
  if (filter.mode !== "explore") params.set("mode", filter.mode);
  if (filter.sort !== "relevance") params.set("sort", filter.sort);
  if (filter.viewMode !== "editorial") params.set("view", filter.viewMode);
  if (filter.page > 1) params.set("page", String(filter.page));
  const str = params.toString();
  return str ? `?${str}` : "";
}

// ─── Filtering ───────────────────────────────────────────────────────────────

export function filterArchiveItems(
  items: ArchiveItem[],
  filter: ArchiveFilterState,
): ArchiveItem[] {
  let result = items.filter((item) => item.status === "published");

  // Category filter (AND)
  if (filter.categoryId) {
    result = result.filter((item) => item.categoryId === filter.categoryId);
  }

  // Region filter — match any province in the region
  if (filter.regionId) {
    const region = regions.find((r) => r.id === filter.regionId);
    if (region) {
      const regionProvinceSet = new Set(region.provinceIds);
      result = result.filter((item) =>
        item.provinceIds.some((pid) => regionProvinceSet.has(pid))
      );
    }
  }

  // Province filter (AND with region — further narrows)
  if (filter.provinceId) {
    result = result.filter((item) =>
      item.provinceIds.includes(filter.provinceId!)
    );
  }

  return result;
}

// ─── Sorting ─────────────────────────────────────────────────────────────────

export function sortArchiveItems(
  items: ArchiveItem[],
  sort: ArchiveSortOption,
): ArchiveItem[] {
  const sorted = [...items];

  switch (sort) {
    case "name":
      sorted.sort((a, b) =>
        a.localeContent.id.title.localeCompare(b.localeContent.id.title, "id")
      );
      break;
    case "updated":
      sorted.sort((a, b) =>
        b.updatedAt.localeCompare(a.updatedAt)
      );
      break;
    case "relevance":
    default:
      // relevance sort: editorial priority descending, then ID for stability
      sorted.sort((a, b) => {
        if (b.editorialPriority !== a.editorialPriority) {
          return b.editorialPriority - a.editorialPriority;
        }
        return a.id.localeCompare(b.id);
      });
      break;
  }

  return sorted;
}

// ─── Pagination ──────────────────────────────────────────────────────────────

export const ITEMS_PER_PAGE = 12;

export function paginateItems<T>(items: T[], page: number): { items: T[]; totalPages: number; hasMore: boolean } {
  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  return {
    items: items.slice(start, end),
    totalPages,
    hasMore: end < items.length,
  };
}

// ─── Active Filter Count ─────────────────────────────────────────────────────

export function getActiveFilterCount(filter: ArchiveFilterState): number {
  let count = 0;
  if (filter.query) count++;
  if (filter.categoryId) count++;
  if (filter.regionId) count++;
  if (filter.provinceId) count++;
  if (filter.mode !== "explore") count++;
  if (filter.sort !== "relevance") count++;
  return count;
}
