"use client";

import { useState, useEffect } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { FUTURE_THEMES } from "@/data/future/themes";
import { FutureSignalStatus, FutureThemeId } from "@/types/future";

export function FutureSignalDesk({
  initialQuery = "",
  initialTheme = null,
  initialStatus = null,
  onSearch,
}: {
  initialQuery?: string;
  initialTheme?: FutureThemeId | null;
  initialStatus?: FutureSignalStatus | null;
  onSearch?: (query: string, theme: FutureThemeId | null, status: FutureSignalStatus | null) => void;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [activeTheme, setActiveTheme] = useState<FutureThemeId | null>(initialTheme);
  const [activeStatus, setActiveStatus] = useState<FutureSignalStatus | null>(initialStatus);

  // Sync internal state if URL changes externally (e.g. Back button or clear filters)
  useEffect(() => {
    setQuery(initialQuery);
    setActiveTheme(initialTheme);
    setActiveStatus(initialStatus);
  }, [initialQuery, initialTheme, initialStatus]);

  // Debounce search
  useEffect(() => {
    // Only trigger if local state differs from initial props, 
    // to avoid infinite loops when syncing from URL
    if (query !== initialQuery || activeTheme !== initialTheme || activeStatus !== initialStatus) {
      const t = setTimeout(() => {
        onSearch?.(query, activeTheme, activeStatus);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [query, activeTheme, activeStatus, onSearch, initialQuery, initialTheme, initialStatus]);

  return (
    <section className="relative w-full z-30 -mt-8 pb-12 px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto future-glass rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 items-center pointer-events-auto">
        
        {/* Search Bar */}
        <div className="flex-1 relative w-full md:w-auto">
          <label htmlFor="future-search" className="sr-only">Cari sinyal masa depan</label>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[var(--future-muted)]" />
          </div>
          <input
            id="future-search"
            type="text"
            className="block w-full pl-12 pr-4 py-3 bg-[var(--future-paper)]/60 border border-[var(--future-line)] rounded-xl text-[var(--future-ink)] focus:outline-none focus:ring-1 focus:ring-[var(--future-solar)] transition-shadow placeholder:text-[var(--future-muted)] font-light"
            placeholder="Cari kota, provinsi, program, tantangan..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="w-[1px] h-10 bg-[var(--future-line)] hidden md:block opacity-50" />

        {/* Filters */}
        <div className="flex w-full md:w-auto items-center gap-3 overflow-x-auto scrollbar-hide shrink-0">
          <div className="flex items-center gap-2 bg-[var(--future-paper)]/60 border border-[var(--future-line)] rounded-xl p-1.5 focus-within:ring-1 focus-within:ring-[var(--future-solar)] transition-shadow">
            <SlidersHorizontal className="h-4 w-4 text-[var(--future-muted)] ml-2 shrink-0" />
            <select 
              className="bg-transparent border-none text-[var(--future-ink)] focus:outline-none text-sm font-medium pr-2 py-1.5 cursor-pointer"
              value={activeTheme || ""}
              onChange={(e) => setActiveTheme(e.target.value as FutureThemeId || null)}
              aria-label="Filter Sistem Masa Depan"
            >
              <option value="">Semua Sistem</option>
              {FUTURE_THEMES.map(t => (
                <option key={t.id} value={t.id}>{t.label.id}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 bg-[var(--future-paper)]/60 border border-[var(--future-line)] rounded-xl p-1.5 focus-within:ring-1 focus-within:ring-[var(--future-solar)] transition-shadow">
            <Filter className="h-4 w-4 text-[var(--future-muted)] ml-2 shrink-0" />
            <select 
              className="bg-transparent border-none text-[var(--future-ink)] focus:outline-none text-sm font-medium pr-2 py-1.5 cursor-pointer"
              value={activeStatus || ""}
              onChange={(e) => setActiveStatus(e.target.value as FutureSignalStatus || null)}
              aria-label="Filter Status Sinyal"
            >
              <option value="">Semua Status</option>
              <option value="current">Hadir Saat Ini</option>
              <option value="in-progress">Sedang Berjalan</option>
              <option value="official-target">Target Resmi</option>
              <option value="prototype">Prototipe</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
