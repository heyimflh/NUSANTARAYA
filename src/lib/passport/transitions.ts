import { PassportData } from "@/lib/types";
import { evaluateBadges } from "./badges";
import { isValidProvinceId } from "@/data/provinces/provinceIds";

const LEGACY_PROVINCE_CODE_TO_SLUG: Record<string, string> = {
  "13": "sumatera-barat",
  "34": "di-yogyakarta",
  "51": "bali",
  "53": "nusa-tenggara-timur",
  "64": "kalimantan-timur",
  "73": "sulawesi-selatan",
  "81": "maluku",
  "82": "maluku-utara",
  "96": "papua-barat-daya",
};

export function migrateIds(ids: string[] | undefined): string[] {
  if (!Array.isArray(ids)) return [];
  const migrated = ids.map(id => LEGACY_PROVINCE_CODE_TO_SLUG[id] || id);
  return Array.from(new Set(migrated));
}

export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export function computeLevel(stampCount: number): string {
  if (stampCount >= 36) return "Pahlawan Nusantara";
  if (stampCount >= 26) return "Penjaga Warisan";
  if (stampCount >= 16) return "Pengembara Sejati";
  if (stampCount >= 6) return "Petualang Nusantara";
  return "Penjelajah Baru";
}

export const DEFAULT_PASSPORT: PassportData = {
  version: 3,
  userId: "local",
  stamps: [],
  startedProvinces: [],
  plannedProvinces: [],
  badges: [],
  achievements: [],
  xp: 0,
  level: "Penjelajah Baru",
  completedQuizzes: [],
  savedRoutes: [],
  completedChapters: {},
};

export function normalizeCompletedChapters(input: unknown): Record<string, string[]> {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return {};
  }
  const result: Record<string, string[]> = {};
  for (const [key, value] of Object.entries(input)) {
    const slug = LEGACY_PROVINCE_CODE_TO_SLUG[key] || key;
    if (!isValidProvinceId(slug)) continue;
    
    if (Array.isArray(value)) {
      const validChapters = value
        .filter(v => typeof v === "string" && v.trim() !== "")
        .map(v => v.trim());
      if (validChapters.length > 0) {
        if (!result[slug]) {
          result[slug] = [];
        }
        result[slug] = unique([...result[slug], ...validChapters]);
      }
    }
  }
  return result;
}

export function normalizePassportData(input: Partial<PassportData>): PassportData {
  const completed = unique(migrateIds(input.stamps)).filter(isValidProvinceId);
  const completedSet = new Set(completed);

  const started = unique(migrateIds(input.startedProvinces))
    .filter(isValidProvinceId)
    .filter(id => !completedSet.has(id));
  const startedSet = new Set(started);

  const planned = unique(migrateIds(input.plannedProvinces))
    .filter(isValidProvinceId)
    .filter(id => !completedSet.has(id) && !startedSet.has(id));

  const rawXp = input.xp;
  const xp = typeof rawXp === "number" && Number.isFinite(rawXp) && rawXp >= 0 ? rawXp : 0;

  return {
    ...DEFAULT_PASSPORT,
    ...input,
    version: 3,
    stamps: completed,
    startedProvinces: started,
    plannedProvinces: planned,
    achievements: input.achievements || [],
    badges: input.badges || [],
    xp,
    level: computeLevel(completed.length),
    completedQuizzes: unique(migrateIds(input.completedQuizzes)).filter(isValidProvinceId),
    savedRoutes: unique((input.savedRoutes || []).filter(r => typeof r === "string" && r.trim() !== "")),
    completedChapters: normalizeCompletedChapters(input.completedChapters),
  };
}

export function planProvinceTransition(passport: PassportData, provinceId: string): PassportData {
  if (!isValidProvinceId(provinceId)) return passport;
  if (passport.stamps.includes(provinceId)) return passport;
  if ((passport.startedProvinces || []).includes(provinceId)) return passport;
  if ((passport.plannedProvinces || []).includes(provinceId)) return passport;

  return {
    ...passport,
    plannedProvinces: [...(passport.plannedProvinces || []), provinceId]
  };
}

export function startProvinceTransition(passport: PassportData, provinceId: string): PassportData {
  if (!isValidProvinceId(provinceId)) return passport;
  if (passport.stamps.includes(provinceId)) return passport;
  if ((passport.startedProvinces || []).includes(provinceId)) return passport;

  return {
    ...passport,
    startedProvinces: [...(passport.startedProvinces || []), provinceId],
    plannedProvinces: (passport.plannedProvinces || []).filter(id => id !== provinceId)
  };
}

export function completeProvinceTransition(passport: PassportData, provinceId: string): PassportData {
  if (!isValidProvinceId(provinceId)) return passport;
  if (passport.stamps.includes(provinceId)) return passport;

  const stamps = [...passport.stamps, provinceId];
  
  const nextPassport = {
    ...passport,
    stamps,
    startedProvinces: (passport.startedProvinces || []).filter(id => id !== provinceId),
    plannedProvinces: (passport.plannedProvinces || []).filter(id => id !== provinceId),
    xp: passport.xp + 10,
    level: computeLevel(stamps.length)
  };

  return evaluateBadges(nextPassport);
}

export function completeQuizTransition(passport: PassportData, provinceId: string): PassportData {
  if (!isValidProvinceId(provinceId)) return passport;
  if (passport.completedQuizzes.includes(provinceId)) {
    return passport;
  }

  const p = {
    ...passport,
    completedQuizzes: [...passport.completedQuizzes, provinceId],
    xp: passport.xp + 20
  };

  return completeProvinceTransition(p, provinceId);
}

export function completeChapterTransition(passport: PassportData, provinceId: string, chapterId: string): PassportData {
  if (!isValidProvinceId(provinceId)) return passport;
  
  const normalizedChapterId = typeof chapterId === "string" ? chapterId.trim() : "";
  if (!normalizedChapterId) return passport;

  const chaptersMap = passport.completedChapters || {};
  const provChapters = chaptersMap[provinceId] || [];
  
  if (provChapters.includes(normalizedChapterId)) {
    return passport;
  }

  return {
    ...passport,
    completedChapters: {
      ...chaptersMap,
      [provinceId]: [...provChapters, normalizedChapterId]
    }
  };
}

export function saveRouteTransition(passport: PassportData, routeId: string, provinceIds: string[] = []): PassportData {
  const normalizedRouteId = typeof routeId === "string" ? routeId.trim() : "";
  if (!normalizedRouteId) return passport;

  const isNewRoute = !passport.savedRoutes.includes(normalizedRouteId);
  const nextSavedRoutes = isNewRoute ? [...passport.savedRoutes, normalizedRouteId] : passport.savedRoutes;
  const xp = isNewRoute ? passport.xp + 15 : passport.xp;

  const validStops = unique(provinceIds.filter(isValidProvinceId));
  
  const newPlanned = [...(passport.plannedProvinces || [])];
  validStops.forEach(id => {
    if (!passport.stamps.includes(id) && !(passport.startedProvinces || []).includes(id) && !newPlanned.includes(id)) {
      newPlanned.push(id);
    }
  });

  if (!isNewRoute && newPlanned.length === (passport.plannedProvinces || []).length) {
    return passport;
  }

  return {
    ...passport,
    savedRoutes: nextSavedRoutes,
    plannedProvinces: newPlanned,
    xp
  };
}

export function resetPassportTransition(): PassportData {
  return DEFAULT_PASSPORT;
}
