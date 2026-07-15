"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/app-context";

export function DocumentPreferenceSync() {
  const { language } = useLanguage();

  useEffect(() => {
    // Only update if it differs to prevent unnecessary DOM mutations
    if (document.documentElement.lang !== language) {
      document.documentElement.lang = language;
    }
  }, [language]);

  return null;
}
