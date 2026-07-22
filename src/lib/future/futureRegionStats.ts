import { FUTURE_SIGNALS } from "@/data/future/signals";
import { RegionId } from "@/types/region";
import { FutureSignal } from "@/types/future";

export interface RegionSignalStats {
  totalSignals: number;
  publishedSignals: number;
  themes: Record<string, number>;
  topThemes: string[]; // max 3 themes sorted by count
  latestSignal: FutureSignal | null;
}

export function getRegionSignalStats(regionId: RegionId): RegionSignalStats {
  const regionSignals = FUTURE_SIGNALS.filter(s => s.regionIds.includes(regionId));
  const publishedSignals = regionSignals.filter(s => s.status === "published");
  
  const themes: Record<string, number> = {};
  for (const signal of publishedSignals) {
    for (const themeId of signal.themeIds) {
      themes[themeId] = (themes[themeId] || 0) + 1;
    }
  }

  const sortedThemes = Object.entries(themes)
    .sort((a, b) => b[1] - a[1])
    .map(e => e[0]);

  const latestSignal = publishedSignals.sort((a, b) => {
    return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime();
  })[0] || null;

  return {
    totalSignals: regionSignals.length,
    publishedSignals: publishedSignals.length,
    themes,
    topThemes: sortedThemes.slice(0, 3),
    latestSignal,
  };
}

export function getOverallFutureStats() {
  const published = FUTURE_SIGNALS.filter(s => s.status === "published");
  
  return {
    totalSignals: FUTURE_SIGNALS.length,
    publishedSignals: published.length,
    inProgressSignals: published.filter(s => s.signalStatus === "in-progress").length,
    prototypeSignals: published.filter(s => s.signalStatus === "prototype").length,
    officialTargets: published.filter(s => s.signalStatus === "official-target").length,
    lastUpdate: published.sort((a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime())[0]?.updatedAt || null,
  };
}
