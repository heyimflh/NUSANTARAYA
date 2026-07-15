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

import {
  DEFAULT_PASSPORT,
  normalizePassportData,
  planProvinceTransition,
  startProvinceTransition,
  completeProvinceTransition,
  completeQuizTransition,
  completeChapterTransition,
  saveRouteTransition,
  resetPassportTransition,
} from "@/lib/passport/transitions";

/* ═══════════════════════════════════════════════════════════════════════════
   NUSANTARAYA Global State — React Context

   Menyimpan state global app:
   - Bahasa (ID/EN)
   - Mode (Explore/Tourist/Learn)
   - Passport (stamps, badges, xp, level — persisted ke localStorage)
   - Audio (on/off)
   ═══════════════════════════════════════════════════════════════════════════ */

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
  /** @deprecated Use planProvince or completeProvince instead */
  addStamp: (provinceId: string) => void;
  startProvince: (provinceId: string) => void;
  planProvince: (provinceId: string) => void;
  addBadge: (badge: string) => void;
  addXP: (amount: number) => void;
  completeQuiz: (provinceId: string) => void;
  completeChapter: (provinceId: string, chapterId: string) => void;
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
      
      // Hydrate passport using transition normalizer
      const savedPassport = safeGetItem<Partial<PassportData>>(PASSPORT_KEY, {});
      setPassport(normalizePassportData(savedPassport));
      
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
    (provinceId: string) => {
      updatePassport((p) => completeProvinceTransition(p, provinceId));
    },
    [updatePassport],
  );

  const addStamp = useCallback(
    (provinceId: string) => completeProvince(provinceId),
    [completeProvince],
  );

  const startProvince = useCallback(
    (provinceId: string) => {
      updatePassport((p) => startProvinceTransition(p, provinceId));
    },
    [updatePassport],
  );

  const planProvince = useCallback(
    (provinceId: string) => {
      updatePassport((p) => planProvinceTransition(p, provinceId));
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
      updatePassport((p) => completeQuizTransition(p, provinceId));
    },
    [updatePassport],
  );

  const completeChapter = useCallback(
    (provinceId: string, chapterId: string) => {
      updatePassport((p) => completeChapterTransition(p, provinceId, chapterId));
    },
    [updatePassport]
  );

  const saveRoute = useCallback(
    (routeId: string, provinceIds?: string[]) => {
      updatePassport((p) => saveRouteTransition(p, routeId, provinceIds));
    },
    [updatePassport],
  );

  const resetPassport = useCallback(() => {
    const fresh = resetPassportTransition();
    setPassport(fresh);
    safeSetItem(PASSPORT_KEY, fresh);
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
          completeChapter,
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
        completeChapter,
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
    completeChapter,
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
    completeChapter,
    saveRoute,
    resetPassport,
  };
}

/** Hook: audio on/off */
export function useAudio() {
  const { audioEnabled, setAudioEnabled } = useAppContext();
  return { audioEnabled, setAudioEnabled };
}
