"use client";

import { useState, useEffect } from "react";
import { TastingTrailDraft } from "@/data/rasa/culinary.types";

export type TastingShelfState = {
  savedDishes: string[];
  recentlyViewed: string[];
  savedBattlePairs: string[];
  draftTrail: TastingTrailDraft | null;
};

const STORAGE_KEY = "nusarasa_tasting_shelf_v1";

const DEFAULT_STATE: TastingShelfState = {
  savedDishes: [],
  recentlyViewed: [],
  savedBattlePairs: [],
  draftTrail: null,
};

export function useTastingShelf() {
  const [shelf, setShelf] = useState<TastingShelfState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setShelf(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Failed to load tasting shelf from local storage", e);
    }
    setIsLoaded(true);
  }, []);

  const saveShelf = (newState: TastingShelfState) => {
    setShelf(newState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (e) {
      console.warn("Failed to save tasting shelf to local storage", e);
    }
  };

  const addRecentlyViewed = (dishId: string) => {
    saveShelf({
      ...shelf,
      recentlyViewed: [
        dishId,
        ...shelf.recentlyViewed.filter(id => id !== dishId)
      ].slice(0, 10) // Keep last 10
    });
  };

  const toggleSaveDish = (dishId: string) => {
    const isSaved = shelf.savedDishes.includes(dishId);
    saveShelf({
      ...shelf,
      savedDishes: isSaved
        ? shelf.savedDishes.filter(id => id !== dishId)
        : [dishId, ...shelf.savedDishes]
    });
  };

  const toggleSaveBattlePair = (pairId: string) => {
    const isSaved = shelf.savedBattlePairs.includes(pairId);
    saveShelf({
      ...shelf,
      savedBattlePairs: isSaved
        ? shelf.savedBattlePairs.filter(id => id !== pairId)
        : [pairId, ...shelf.savedBattlePairs]
    });
  };

  const saveDraftTrail = (draft: TastingTrailDraft) => {
    saveShelf({
      ...shelf,
      draftTrail: draft
    });
  };

  const clearDraftTrail = () => {
    saveShelf({
      ...shelf,
      draftTrail: null
    });
  };

  return {
    shelf,
    isLoaded,
    addRecentlyViewed,
    toggleSaveDish,
    isDishSaved: (dishId: string) => shelf.savedDishes.includes(dishId),
    toggleSaveBattlePair,
    isBattlePairSaved: (pairId: string) => shelf.savedBattlePairs.includes(pairId),
    saveDraftTrail,
    clearDraftTrail
  };
}
