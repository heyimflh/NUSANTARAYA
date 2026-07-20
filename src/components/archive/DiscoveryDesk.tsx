import React, { useState, useEffect } from "react";
import { Search, X, Filter } from "lucide-react";
import type { ArchiveFilterState } from "@/types/archive";
import type { ArchiveCategoryDefinition } from "@/types/archive";
import type { RegionalProfile } from "@/types/region";

interface DiscoveryDeskProps {
  filter: ArchiveFilterState;
  onFilterChange: (updates: Partial<ArchiveFilterState>) => void;
  onReset: () => void;
  resultCount: number;
  activeFilterCount: number;
  categories: readonly ArchiveCategoryDefinition[];
  regions: RegionalProfile[];
  isSearchActive: boolean;
  t: (id: string, en: string) => string;
}

export function DiscoveryDesk({
  filter,
  onFilterChange,
  onReset,
  resultCount,
  activeFilterCount,
  categories,
  regions,
  isSearchActive,
  t,
}: DiscoveryDeskProps) {
  const [localQuery, setLocalQuery] = useState(filter.query);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sync external filter changes to local state
  useEffect(() => {
    setLocalQuery(filter.query);
  }, [filter.query]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localQuery !== filter.query) {
        onFilterChange({ query: localQuery });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [localQuery, filter.query, onFilterChange]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery !== filter.query) {
      onFilterChange({ query: localQuery });
    }
  };

  return (
    <section className="archive-surface-canvas border-b border-[var(--archive-line)] sticky top-0 z-40 bg-[var(--archive-canvas)]/95 backdrop-blur-md">
      <div className="archive-container py-4">
        
        {/* Search Bar Row */}
        <div className="flex items-center gap-3">
          <form 
            onSubmit={handleSearchSubmit}
            className="flex-1 relative flex items-center"
            role="search"
          >
            <div className="absolute left-4 text-[var(--archive-muted)] pointer-events-none">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder={t("Cari arsip, daerah, kategori, atau kata kunci...", "Search archives, regions, categories, or keywords...")}
              className="w-full bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-full h-12 pl-12 pr-12 text-[var(--archive-ink)] focus:outline-none focus:border-[var(--archive-saffron)] focus:ring-1 focus:ring-[var(--archive-saffron)] transition-colors archive-body"
              aria-label={t("Cari arsip budaya", "Search cultural archives")}
            />
            {localQuery && (
              <button
                type="button"
                onClick={() => {
                  setLocalQuery("");
                  onFilterChange({ query: "" });
                }}
                className="absolute right-4 text-[var(--archive-muted)] hover:text-[var(--archive-ink)] transition-colors p-1"
                aria-label={t("Hapus pencarian", "Clear search")}
              >
                <X size={18} />
              </button>
            )}
          </form>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center justify-center gap-2 h-12 px-5 rounded-full border transition-colors ${
              activeFilterCount > 0 
                ? "bg-[var(--archive-saffron-soft)] border-[var(--archive-saffron)] text-[var(--archive-ink)]" 
                : "bg-[var(--archive-paper)] border-[var(--archive-line)] text-[var(--archive-charcoal)] hover:bg-[var(--archive-paper-deep)]"
            }`}
            aria-expanded={isFilterOpen}
          >
            <Filter size={18} />
            <span className="hidden sm:inline font-medium">
              {t("Filter", "Filter")}
            </span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[var(--archive-saffron)] text-[var(--archive-canvas)] text-xs font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Filter Drawer */}
        {isFilterOpen && (
          <div className="mt-4 pt-4 border-t border-[var(--archive-line)] animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Category Filter */}
            <div>
              <label className="archive-eyebrow block mb-3">
                {t("Kategori", "Category")}
              </label>
              <select
                value={filter.categoryId || ""}
                onChange={(e) => onFilterChange({ categoryId: e.target.value as any || null })}
                className="w-full bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-lg h-10 px-3 text-[var(--archive-charcoal)] focus:outline-none focus:border-[var(--archive-saffron)]"
              >
                <option value="">{t("Semua Kategori", "All Categories")}</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {t(c.name, c.nameEn)}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className="archive-eyebrow block mb-3">
                {t("Wilayah", "Region")}
              </label>
              <select
                value={filter.regionId || ""}
                onChange={(e) => onFilterChange({ regionId: e.target.value as any || null, provinceId: null })}
                className="w-full bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-lg h-10 px-3 text-[var(--archive-charcoal)] focus:outline-none focus:border-[var(--archive-saffron)]"
              >
                <option value="">{t("Semua Wilayah", "All Regions")}</option>
                {regions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort & Mode Row */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="archive-eyebrow block mb-3">
                  {t("Urutkan", "Sort By")}
                </label>
                <select
                  value={filter.sort}
                  onChange={(e) => onFilterChange({ sort: e.target.value as any })}
                  className="w-full bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-lg h-10 px-3 text-[var(--archive-charcoal)] focus:outline-none focus:border-[var(--archive-saffron)]"
                >
                  <option value="relevance">{t("Relevansi", "Relevance")}</option>
                  <option value="name">{t("Nama (A-Z)", "Name (A-Z)")}</option>
                  <option value="updated">{t("Terbaru", "Recently Updated")}</option>
                </select>
              </div>
            </div>

            {/* Action Row */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end gap-3 pt-2">
              <button
                onClick={onReset}
                disabled={activeFilterCount === 0}
                className="px-4 py-2 text-sm font-medium text-[var(--archive-muted)] hover:text-[var(--archive-ink)] disabled:opacity-50 transition-colors"
              >
                {t("Reset Filter", "Reset Filters")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Result Count Banner (if active filter/search) */}
      {(isSearchActive || activeFilterCount > 0) && (
        <div 
          className="bg-[var(--archive-paper-deep)] border-t border-[var(--archive-line)] py-2 text-center"
          aria-live="polite"
        >
          <p className="archive-caption text-[var(--archive-charcoal)]">
            {t(`Menemukan ${resultCount} arsip`, `Found ${resultCount} archives`)}
            {filter.query && <span> {t(`untuk "${filter.query}"`, `for "${filter.query}"`)}</span>}
          </p>
        </div>
      )}
    </section>
  );
}
