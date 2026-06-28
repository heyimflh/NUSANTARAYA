"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Language, AppMode, PassportData } from "@/lib/types";

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
  userId: "local",
  stamps: [],
  badges: [],
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
  addStamp: (provinceId: string) => void;
  addBadge: (badge: string) => void;
  addXP: (amount: number) => void;
  completeQuiz: (provinceId: string) => void;
  saveRoute: (routeId: string) => void;
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

// ─── Provider ────────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mode, setModeState] = useState<AppMode>("explore");
  const [passport, setPassport] = useState<PassportData>(DEFAULT_PASSPORT);
  const [audioEnabled, setAudioEnabledState] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setLanguageState(safeGetItem<Language>(LANG_KEY, "id"));
    setModeState(safeGetItem<AppMode>(MODE_KEY, "explore"));
    setPassport(safeGetItem<PassportData>(PASSPORT_KEY, DEFAULT_PASSPORT));
    setAudioEnabledState(safeGetItem<boolean>(AUDIO_KEY, false));
    setHydrated(true);
  }, []);

  // Persist language
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    safeSetItem(LANG_KEY, lang);
  }, []);

  // Bilingual helper
  const t = useCallback((id: string, en: string) => {
    return language === "en" ? en : id;
  }, [language]);

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
  const updatePassport = useCallback((updater: (prev: PassportData) => PassportData) => {
    setPassport((prev) => {
      const next = updater(prev);
      safeSetItem(PASSPORT_KEY, next);
      return next;
    });
  }, []);

  const addStamp = useCallback((provinceId: string) => {
    updatePassport((p) => {
      if (p.stamps.includes(provinceId)) return p;
      const stamps = [...p.stamps, provinceId];
      return {
        ...p,
        stamps,
        xp: p.xp + 10,
        level: computeLevel(stamps.length),
      };
    });
  }, [updatePassport]);

  const addBadge = useCallback((badge: string) => {
    updatePassport((p) => {
      if (p.badges.includes(badge as PassportData["badges"][number])) return p;
      return { ...p, badges: [...p.badges, badge as PassportData["badges"][number]], xp: p.xp + 25 };
    });
  }, [updatePassport]);

  const addXP = useCallback((amount: number) => {
    updatePassport((p) => ({ ...p, xp: p.xp + amount }));
  }, [updatePassport]);

  const completeQuiz = useCallback((provinceId: string) => {
    updatePassport((p) => {
      if (p.completedQuizzes.includes(provinceId)) return p;
      return {
        ...p,
        completedQuizzes: [...p.completedQuizzes, provinceId],
        xp: p.xp + 20,
      };
    });
  }, [updatePassport]);

  const saveRoute = useCallback((routeId: string) => {
    updatePassport((p) => {
      if (p.savedRoutes.includes(routeId)) return p;
      return { ...p, savedRoutes: [...p.savedRoutes, routeId], xp: p.xp + 15 };
    });
  }, [updatePassport]);

  const resetPassport = useCallback(() => {
    setPassport(DEFAULT_PASSPORT);
    safeSetItem(PASSPORT_KEY, DEFAULT_PASSPORT);
  }, []);

  // Prevent hydration mismatch: render nothing until hydrated
  if (!hydrated) {
    return (
      <AppContext.Provider
        value={{
          language: "id", setLanguage, t: (id) => id,
          mode: "explore", setMode,
          passport: DEFAULT_PASSPORT, addStamp, addBadge, addXP, completeQuiz, saveRoute, resetPassport,
          audioEnabled: false, setAudioEnabled,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }

  return (
    <AppContext.Provider
      value={{
        language, setLanguage, t,
        mode, setMode,
        passport, addStamp, addBadge, addXP, completeQuiz, saveRoute, resetPassport,
        audioEnabled, setAudioEnabled,
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
  const { passport, addStamp, addBadge, addXP, completeQuiz, saveRoute, resetPassport } = useAppContext();
  return { passport, addStamp, addBadge, addXP, completeQuiz, saveRoute, resetPassport };
}

/** Hook: audio on/off */
export function useAudio() {
  const { audioEnabled, setAudioEnabled } = useAppContext();
  return { audioEnabled, setAudioEnabled };
}
