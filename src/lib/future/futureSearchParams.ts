import { FutureSignalStatus, FutureThemeId } from "@/types/future";
import { RegionId } from "@/types/region";

export type FutureMode = "explore" | "learn" | "travel" | "maker";

export type FutureExplorerState = {
  query: string;
  themeId: FutureThemeId | null;
  regionId: RegionId | null;
  provinceId: string | null;
  signalStatus: FutureSignalStatus | null;
  mode: FutureMode;
};

const VALID_MODES: FutureMode[] = ["explore", "learn", "travel", "maker"];
const VALID_THEMES: FutureThemeId[] = [
  "civic-life",
  "connected-mobility",
  "regenerative-environment",
  "creative-economy",
  "digital-villages",
  "food-ocean-resilience",
  "living-heritage",
];
const VALID_STATUSES: FutureSignalStatus[] = [
  "current",
  "in-progress",
  "official-target",
  "prototype",
  "editorial-scenario",
];
const VALID_REGIONS: string[] = [
  "sumatera",
  "jawa",
  "kalimantan",
  "sulawesi",
  "bali-nusa-tenggara",
  "maluku",
  "papua"
];

export function parseFutureSearchParams(searchParams: URLSearchParams): FutureExplorerState {
  const query = searchParams.get("q") || "";
  
  const rawTheme = searchParams.get("theme");
  const themeId = VALID_THEMES.includes(rawTheme as FutureThemeId) ? (rawTheme as FutureThemeId) : null;
  
  const rawRegion = searchParams.get("region");
  const regionId = VALID_REGIONS.includes(rawRegion as string) ? (rawRegion as RegionId) : null;
  
  const provinceId = searchParams.get("province"); // no strict enum for now, assume string is ok if present
  
  const rawStatus = searchParams.get("status");
  const signalStatus = VALID_STATUSES.includes(rawStatus as FutureSignalStatus) ? (rawStatus as FutureSignalStatus) : null;
  
  const rawMode = searchParams.get("mode");
  const mode = VALID_MODES.includes(rawMode as FutureMode) ? (rawMode as FutureMode) : "explore";

  return {
    query,
    themeId,
    regionId,
    provinceId: provinceId || null,
    signalStatus,
    mode,
  };
}

export function serializeFutureSearchParams(state: Partial<FutureExplorerState>): URLSearchParams {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.themeId) params.set("theme", state.themeId);
  if (state.regionId) params.set("region", state.regionId);
  if (state.provinceId) params.set("province", state.provinceId);
  if (state.signalStatus) params.set("status", state.signalStatus);
  if (state.mode && state.mode !== "explore") params.set("mode", state.mode);
  return params;
}
