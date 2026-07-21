import { FutureSignal, FutureThemeId, FutureSignalStatus } from "@/types/future";
import { FUTURE_SIGNALS } from "@/data/future/signals";
import { RegionId } from "@/types/region";

export type FutureFilterParams = {
  query?: string;
  themeIds?: FutureThemeId[];
  regionId?: RegionId;
  provinceId?: string;
  status?: FutureSignalStatus;
};

export function searchFutureSignals(params: FutureFilterParams): FutureSignal[] {
  return FUTURE_SIGNALS.filter(signal => {
    // published only for public viewing
    if (signal.status !== "published") return false;

    // Filter by Region
    if (params.regionId && !signal.regionIds.includes(params.regionId)) {
      return false;
    }

    // Filter by Province
    if (params.provinceId && !signal.provinceIds.includes(params.provinceId)) {
      return false;
    }

    // Filter by Theme
    if (params.themeIds && params.themeIds.length > 0) {
      const hasTheme = params.themeIds.some(t => signal.themeIds.includes(t));
      if (!hasTheme) return false;
    }

    // Filter by Status
    if (params.status && signal.signalStatus !== params.status) {
      return false;
    }

    // Filter by Query (Deterministic local text search)
    if (params.query) {
      const q = params.query.toLowerCase().trim();
      const contentId = signal.localeContent.id;
      const contentEn = signal.localeContent.en;
      
      const textToSearch = [
        contentId.title,
        contentId.summary,
        contentId.challenge,
        contentId.response,
        contentEn?.title || "",
        contentEn?.summary || "",
        ...(signal.aliases || [])
      ].join(" ").toLowerCase();

      if (!textToSearch.includes(q)) {
        return false;
      }
    }

    return true;
  });
}
