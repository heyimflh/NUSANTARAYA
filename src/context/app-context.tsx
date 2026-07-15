"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Language, AppMode, PassportData } from "@/lib/types";
import { evaluateBadges } from "@/lib/passport/badges";

/* ═══════════════════════════════════════════════════════════════════════════
   NUSANTARAYA Global State — React Context

   Menyimpan state global app:
   - Bahasa (ID/EN)
   - Mode (Explore/Tourist/Learn)
   - Passport (stamps, badges, xp, level — persisted ke localStorage)
   - Audio (on/off)
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── Default Passport ────────────────────────────────────────────────────────
const DEFAULT_PASSPORT: PassportData = {
  version: 2,
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
};

const PASSPORT_KEY = "nusantaraya-passport";
const LANG_KEY = "nusantaraya-lang";
const MODE_KEY = "nusantaraya-mode";
const AUDIO_KEY = "nusantaraya-audio";

// ─── Context Types ───────────────────────────────────────────────────────────
interface AppContextType {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (id: string, en: string) => string; // quick bilingual helper

  // Mode
  mode: AppMode;
  setMode: (mode: AppMode) => void;

  // Passport
  passport: PassportData;
  completeProvince: (provinceId: string, source?: "atlas" | "quiz") => void;
  addStamp: (provinceId: string) => void;
  startProvince: (provinceId: string) => void;
  planProvince: (provinceId: string) => void;
  addBadge: (badge: string) => void;
  addXP: (amount: number) => void;
  completeQuiz: (provinceId: string) => void;
  saveRoute: (routeId: string, provinceIds?: string[]) => void;
  resetPassport: () => void;

  // Audio
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// ─── Helper: safe localStorage ──────────────────────────────────────────────
function safeGetItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function safeSetItem(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage might be full or unavailable
  }
}

// ─── Compute level from stamps count ─────────────────────────────────────────
function computeLevel(stampCount: number): string {
  if (stampCount >= 36) return "Pahlawan Nusantara";
  if (stampCount >= 26) return "Penjaga Warisan";
  if (stampCount >= 16) return "Pengembara Sejati";
  if (stampCount >= 6) return "Petualang Nusantara";
  return "Penjelajah Baru";
}

// ─── Type Validators ─────────────────────────────────────────────────────────
function isLanguage(value: unknown): value is Language {
  return value === "id" || value === "en";
}

function isAppMode(value: unknown): value is AppMode {
  return (
    value === "explore" ||
    value === "tourist" ||
    value === "learn"
  );
}

// ─── Migration Helper ────────────────────────────────────────────────────────
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

function migrateIds(ids: string[]): string[] {
  if (!Array.isArray(ids)) return [];
  const migrated = ids.map(id => LEGACY_PROVINCE_CODE_TO_SLUG[id] || id);
  return Array.from(new Set(migrated));
}

// ─── Provider ────────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mode, setModeState] = useState<AppMode>("explore");
  const [passport, setPassport] = useState<PassportData>(DEFAULT_PASSPORT);
  const [audioEnabled, setAudioEnabledState] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedLang = safeGetItem<unknown>(LANG_KEY, "id");
      setLanguageState(isLanguage(storedLang) ? storedLang : "id");
      
      const storedMode = safeGetItem<unknown>(MODE_KEY, "explore");
      setModeState(isAppMode(storedMode) ? storedMode : "explore");
      
      // Hydrate passport with backward compatibility
      const savedPassport = safeGetItem<Partial<PassportData>>(PASSPORT_KEY, {});
      setPassport({
        ...DEFAULT_PASSPORT,
        ...savedPassport,
        // Migrate numeric IDs to slugs and remove duplicates
        stamps: migrateIds(savedPassport.stamps || []),
        startedProvinces: migrateIds(savedPassport.startedProvinces || []),
        plannedProvinces: migrateIds(savedPassport.plannedProvinces || []),
        achievements: savedPassport.achievements || [],
      });
      
      setAudioEnabledState(safeGetItem<boolean>(AUDIO_KEY, false));
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  // Persist language
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    safeSetItem(LANG_KEY, lang);
  }, []);

  // Bilingual helper
  const t = useCallback(
    (id: string, en: string) => {
      return language === "en" ? en : id;
    },
    [language],
  );

  // Persist mode
  const setMode = useCallback((m: AppMode) => {
    setModeState(m);
    safeSetItem(MODE_KEY, m);
  }, []);

  // Persist audio
  const setAudioEnabled = useCallback((enabled: boolean) => {
    setAudioEnabledState(enabled);
    safeSetItem(AUDIO_KEY, enabled);
  }, []);

  // Passport mutations (all auto-persist)
  const updatePassport = useCallback(
    (updater: (prev: PassportData) => PassportData) => {
      setPassport((prev) => {
        let next = updater(prev);
        next = evaluateBadges(next); // Automatically evaluate badges on every mutation
        safeSetItem(PASSPORT_KEY, next);
        return next;
      });
    },
    [],
  );

  const completeProvince = useCallback(
    (provinceId: string, source?: "atlas" | "quiz") => {
      updatePassport((p) => {
        if (p.stamps.includes(provinceId)) return p;
        const stamps = [...p.stamps, provinceId];
        return {
          ...p,
          stamps,
          // Remove from started and planned if it exists
          startedProvinces: (p.startedProvinces || []).filter((id) => id !== provinceId),
          plannedProvinces: (p.plannedProvinces || []).filter((id) => id !== provinceId),
          xp: p.xp + 10,
          level: computeLevel(stamps.length),
        };
      });
    },
    [updatePassport],
  );

  const addStamp = useCallback(
    (provinceId: string) => completeProvince(provinceId),
    [completeProvince],
  );

  const startProvince = useCallback(
    (provinceId: string) => {
      updatePassport((p) => {
        if (p.stamps.includes(provinceId)) return p; // Already completed
        const started = p.startedProvinces || [];
        if (started.includes(provinceId)) return p; // Already started
        
        return {
          ...p,
          startedProvinces: [...started, provinceId],
          // Remove from planned if it exists
          plannedProvinces: (p.plannedProvinces || []).filter(id => id !== provinceId),
        };
      });
    },
    [updatePassport],
  );

  const planProvince = useCallback(
    (provinceId: string) => {
      updatePassport((p) => {
        if (p.stamps.includes(provinceId)) return p; // Already completed
        if ((p.startedProvinces || []).includes(provinceId)) return p; // Already started
        const planned = p.plannedProvinces || [];
        if (planned.includes(provinceId)) return p; // Already planned
        
        return {
          ...p,
          plannedProvinces: [...planned, provinceId],
        };
      });
    },
    [updatePassport],
  );

  const addBadge = useCallback(
    (badge: string) => {
      updatePassport((p) => {
        if (p.badges.includes(badge as PassportData["badges"][number]))
          return p;
        return {
          ...p,
          badges: [...p.badges, badge as PassportData["badges"][number]],
          xp: p.xp + 25,
        };
      });
    },
    [updatePassport],
  );

  const addXP = useCallback(
    (amount: number) => {
      updatePassport((p) => ({ ...p, xp: p.xp + amount }));
    },
    [updatePassport],
  );

  const completeQuiz = useCallback(
    (provinceId: string) => {
      updatePassport((p) => {
        if (p.completedQuizzes.includes(provinceId)) return p;
        return {
          ...p,
          completedQuizzes: [...p.completedQuizzes, provinceId],
          xp: p.xp + 20,
        };
      });
    },
    [updatePassport],
  );

  const saveRoute = useCallback(
    (routeId: string, provinceIds?: string[]) => {
      updatePassport((p) => {
        if (p.savedRoutes.includes(routeId)) return p;
        
        let newPlanned = [...(p.plannedProvinces || [])];
        if (provinceIds) {
          provinceIds.forEach(id => {
            if (!p.stamps.includes(id) && !(p.startedProvinces || []).includes(id) && !newPlanned.includes(id)) {
              newPlanned.push(id);
            }
          });
        }
        
        return {
          ...p,
          savedRoutes: [...p.savedRoutes, routeId],
          plannedProvinces: newPlanned,
          xp: p.xp + 15,
        };
      });
    },
    [updatePassport],
  );

  const resetPassport = useCallback(() => {
    setPassport(DEFAULT_PASSPORT);
    safeSetItem(PASSPORT_KEY, DEFAULT_PASSPORT);
  }, []);

  // Prevent hydration mismatch: render nothing until hydrated
  if (!hydrated) {
    return (
      <AppContext.Provider
        value={{
          language: "id",
          setLanguage,
          t: (id) => id,
          mode: "explore",
          setMode,
          passport: DEFAULT_PASSPORT,
          completeProvince,
          addStamp,
          startProvince,
          planProvince,
          addBadge,
          addXP,
          completeQuiz,
          saveRoute,
          resetPassport,
          audioEnabled: false,
          setAudioEnabled,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        mode,
        setMode,
        passport,
        completeProvince,
        addStamp,
        startProvince,
        planProvince,
        addBadge,
        addXP,
        completeQuiz,
        saveRoute,
        resetPassport,
        audioEnabled,
        setAudioEnabled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// ─── Custom Hooks ────────────────────────────────────────────────────────────

function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within <AppProvider>");
  }
  return context;
}

/** Hook: bahasa aktif & setter */
export function useLanguage() {
  const { language, setLanguage, t } = useAppContext();
  return { language, setLanguage, t };
}

/** Hook: mode aktif & setter */
export function useMode() {
  const { mode, setMode } = useAppContext();
  return { mode, setMode };
}

/** Hook: passport data & mutations — auto-persist ke localStorage */
export function usePassport() {
  const {
    passport,
    completeProvince,
    addStamp,
    startProvince,
    planProvince,
    addBadge,
    addXP,
    completeQuiz,
    saveRoute,
    resetPassport,
  } = useAppContext();
  return {
    passport,
    completeProvince,
    addStamp,
    startProvince,
    planProvince,
    addBadge,
    addXP,
    completeQuiz,
    saveRoute,
    resetPassport,
  };
}

/** Hook: audio on/off */
export function useAudio() {
  const { audioEnabled, setAudioEnabled } = useAppContext();
  return { audioEnabled, setAudioEnabled };
}
