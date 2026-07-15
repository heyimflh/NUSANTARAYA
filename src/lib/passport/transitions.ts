import { PassportData } from "@/lib/types";
import { evaluateBadges } from "./badges";

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

export function normalizePassportData(input: Partial<PassportData>): PassportData {
  const completed = unique(migrateIds(input.stamps));
  const completedSet = new Set(completed);

  const started = unique(migrateIds(input.startedProvinces)).filter(id => !completedSet.has(id));
  const startedSet = new Set(started);

  const planned = unique(migrateIds(input.plannedProvinces)).filter(id => !completedSet.has(id) && !startedSet.has(id));

  return {
    ...DEFAULT_PASSPORT,
    ...input,
    version: 3,
    stamps: completed,
    startedProvinces: started,
    plannedProvinces: planned,
    achievements: input.achievements || [],
    badges: input.badges || [],
    xp: input.xp || 0,
    level: computeLevel(completed.length),
    completedQuizzes: unique(migrateIds(input.completedQuizzes)),
    savedRoutes: unique(input.savedRoutes || []),
    completedChapters: input.completedChapters || {},
  };
}

export function planProvinceTransition(passport: PassportData, provinceId: string): PassportData {
  if (passport.stamps.includes(provinceId)) return passport;
  if ((passport.startedProvinces || []).includes(provinceId)) return passport;
  if ((passport.plannedProvinces || []).includes(provinceId)) return passport;

  return {
    ...passport,
    plannedProvinces: [...(passport.plannedProvinces || []), provinceId]
  };
}

export function startProvinceTransition(passport: PassportData, provinceId: string): PassportData {
  if (passport.stamps.includes(provinceId)) return passport;
  if ((passport.startedProvinces || []).includes(provinceId)) return passport;

  return {
    ...passport,
    startedProvinces: [...(passport.startedProvinces || []), provinceId],
    plannedProvinces: (passport.plannedProvinces || []).filter(id => id !== provinceId)
  };
}

export function completeProvinceTransition(passport: PassportData, provinceId: string): PassportData {
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
  if (passport.completedQuizzes.includes(provinceId)) {
    return passport;
  }

  let p = {
    ...passport,
    completedQuizzes: [...passport.completedQuizzes, provinceId],
    xp: passport.xp + 20
  };

  return completeProvinceTransition(p, provinceId);
}

export function completeChapterTransition(passport: PassportData, provinceId: string, chapterId: string): PassportData {
  const chaptersMap = passport.completedChapters || {};
  const provChapters = chaptersMap[provinceId] || [];
  
  if (provChapters.includes(chapterId)) {
    return passport;
  }

  return {
    ...passport,
    completedChapters: {
      ...chaptersMap,
      [provinceId]: [...provChapters, chapterId]
    }
  };
}

export function saveRouteTransition(passport: PassportData, routeId: string, provinceIds: string[] = []): PassportData {
  const isNewRoute = !passport.savedRoutes.includes(routeId);
  const nextSavedRoutes = isNewRoute ? [...passport.savedRoutes, routeId] : passport.savedRoutes;
  const xp = isNewRoute ? passport.xp + 15 : passport.xp;

  const validStops = provinceIds.filter(id => typeof id === "string" && id.trim() !== "" && isNaN(Number(id)));
  
  let newPlanned = [...(passport.plannedProvinces || [])];
  validStops.forEach(id => {
    if (!passport.stamps.includes(id) && !(passport.startedProvinces || []).includes(id) && !newPlanned.includes(id)) {
      newPlanned.push(id);
    }
  });

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
