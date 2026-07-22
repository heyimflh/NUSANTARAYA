import { FutureSignal } from "@/types/future";
import { FUTURE_SIGNALS } from "@/data/future/signals";
import { FutureExplorerState } from "./futureSearchParams";

export function searchFutureSignals(params: Partial<FutureExplorerState>): FutureSignal[] {
  const filtered = FUTURE_SIGNALS.filter(signal => {
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
    if (params.themeId && !signal.themeIds.includes(params.themeId)) {
      return false;
    }

    // Filter by Status
    if (params.signalStatus && signal.signalStatus !== params.signalStatus) {
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

  // Basic sorting by mode (if applicable), currently deterministic by updatedAt
  // Mode affects UI more than raw search result in this phase, but we prepare it.
  return filtered.sort((a, b) => {
    // Sort by updatedAt descending
    const dateA = new Date(a.updatedAt || 0).getTime();
    const dateB = new Date(b.updatedAt || 0).getTime();
    if (dateA !== dateB) return dateB - dateA;
    // Tie breaker
    return a.id.localeCompare(b.id);
  });
}
