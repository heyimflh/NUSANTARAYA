const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/DiscoveryDesk.tsx');

const content = `import React, { useState, useEffect, useRef } from "react";
import { Search, X, Filter } from "lucide-react";
import type { ArchiveFilterState } from "@/types/archive";
import type { ArchiveCategoryDefinition } from "@/types/archive";
import type { RegionalProfile } from "@/types/region";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFloatingExpanded, setIsFloatingExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Click outside to close filter or floating modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  // Scroll detection for floating mode
  useEffect(() => {
    const handleScroll = () => {
      // Threshold where the search bar would normally leave the viewport
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsFloatingExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery !== filter.query) {
      onFilterChange({ query: localQuery });
    }
  };

  // Reusable Search UI block
  const SearchInterface = ({ isFloatingMode }: { isFloatingMode: boolean }) => (
    <div className="pointer-events-auto relative w-full max-w-3xl" ref={isFloatingMode ? dropdownRef : undefined}>
      <div className="bg-[var(--archive-paper)]/95 backdrop-blur-2xl border border-[var(--archive-line)] rounded-full shadow-[0_8px_32px_rgb(0,0,0,0.08)] p-1.5 flex flex-col sm:flex-row items-center gap-1 transition-all duration-300">
        <form 
          onSubmit={handleSearchSubmit}
          className="flex-1 relative flex items-center w-full group"
          role="search"
        >
          <div className="absolute left-4 text-[var(--archive-muted)] pointer-events-none transition-colors group-focus-within:text-[var(--archive-saffron)]">
            <Search size={16} strokeWidth={2.5} />
          </div>
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder={t("Cari arsip, daerah, atau kata kunci...", "Search archives, regions, or keywords...")}
            className="w-full bg-transparent h-10 sm:h-12 pl-12 pr-10 text-[var(--archive-ink)] placeholder-[var(--archive-muted)] text-[14px] font-medium focus:outline-none transition-colors"
            aria-label={t("Cari arsip budaya", "Search cultural archives")}
            autoFocus={isFloatingMode}
          />
          {localQuery && (
            <button
              type="button"
              onClick={() => {
                setLocalQuery("");
                onFilterChange({ query: "" });
              }}
              className="absolute right-3 text-[var(--archive-muted)] hover:bg-[var(--archive-line)] hover:text-[var(--archive-ink)] rounded-full p-1 transition-colors"
              aria-label={t("Hapus pencarian", "Clear search")}
            >
              <X size={14} strokeWidth={3} />
            </button>
          )}
        </form>

        <div className="hidden sm:block w-[1px] h-6 bg-[var(--archive-line)] mx-1" />

        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={\`flex items-center justify-center gap-2 h-10 sm:h-12 px-6 rounded-full font-medium text-[13px] transition-all duration-300 w-full sm:w-auto \${
            activeFilterCount > 0 
              ? "bg-[var(--archive-saffron)] text-white shadow-md shadow-[#C9A84C]/30" 
              : "bg-transparent hover:bg-[var(--archive-line)] text-[var(--archive-charcoal)]"
          }\`}
          aria-expanded={isFilterOpen}
        >
          <Filter size={16} strokeWidth={2.5} />
          <span>{t("Filter", "Filter")}</span>
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white/20 text-white text-[10px] font-bold ml-0.5">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter Drawer */}
      {isFilterOpen && (
        <div className="absolute top-full left-0 mt-3 w-full bg-[var(--archive-paper)]/98 backdrop-blur-3xl border border-[var(--archive-line)] rounded-[1.5rem] shadow-[0_12px_40px_rgb(0,0,0,0.12)] p-5 sm:p-6 animate-fade-in z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="group">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--archive-muted)] mb-2 block">
                {t("Kategori", "Category")}
              </label>
              <select
                value={filter.categoryId || ""}
                onChange={(e) => onFilterChange({ categoryId: e.target.value as any || null })}
                className="w-full bg-transparent border-b border-[var(--archive-line)] rounded-none h-9 px-1 text-[var(--archive-ink)] text-[13px] font-medium focus:outline-none focus:border-[var(--archive-saffron)] transition-colors appearance-none cursor-pointer"
              >
                <option value="">{t("Semua Kategori", "All Categories")}</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{t(c.name, c.nameEn)}</option>
                ))}
              </select>
            </div>

            <div className="group">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--archive-muted)] mb-2 block">
                {t("Wilayah", "Region")}
              </label>
              <select
                value={filter.regionId || ""}
                onChange={(e) => onFilterChange({ regionId: e.target.value as any || null, provinceId: null })}
                className="w-full bg-transparent border-b border-[var(--archive-line)] rounded-none h-9 px-1 text-[var(--archive-ink)] text-[13px] font-medium focus:outline-none focus:border-[var(--archive-saffron)] transition-colors appearance-none cursor-pointer"
              >
                <option value="">{t("Semua Wilayah", "All Regions")}</option>
                {regions.map((r) => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </div>

            <div className="group">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--archive-muted)] mb-2 block">
                {t("Urutkan", "Sort By")}
              </label>
              <select
                value={filter.sort}
                onChange={(e) => onFilterChange({ sort: e.target.value as any })}
                className="w-full bg-transparent border-b border-[var(--archive-line)] rounded-none h-9 px-1 text-[var(--archive-ink)] text-[13px] font-medium focus:outline-none focus:border-[var(--archive-saffron)] transition-colors appearance-none cursor-pointer"
              >
                <option value="relevance">{t("Relevansi", "Relevance")}</option>
                <option value="name">{t("Nama (A-Z)", "Name (A-Z)")}</option>
                <option value="updated">{t("Terbaru", "Recently Updated")}</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-5 mt-5 border-t border-[var(--archive-line)]/50">
            <button
              onClick={onReset}
              disabled={activeFilterCount === 0}
              className="px-5 py-2 rounded-full text-[12px] font-semibold tracking-wide text-[var(--archive-muted)] hover:bg-[var(--archive-line)] hover:text-[var(--archive-ink)] disabled:opacity-40 disabled:hover:bg-transparent transition-all"
            >
              {t("Reset Filter", "Reset Filters")}
            </button>
          </div>
        </div>
      )}

      {/* Result Count Badge */}
      <div className={\`absolute -bottom-14 left-1/2 -translate-x-1/2 pointer-events-auto transition-all duration-500 \${(isSearchActive || activeFilterCount > 0) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 hidden'}\`}>
        <div className="bg-[var(--archive-paper)]/80 backdrop-blur-md border border-[var(--archive-line)] px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
          <p className="text-[11px] font-semibold text-[var(--archive-charcoal)] tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--archive-saffron)] inline-block animate-pulse"></span>
            {t(\`Menemukan \${resultCount} arsip\`, \`Found \${resultCount} archives\`)}
            {filter.query && <span className="text-[var(--archive-muted)] font-normal"> {t(\`untuk "\${filter.query}"\`, \`for "\${filter.query}"\`)}</span>}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Inline Search Bar (Visible when NOT scrolled past threshold) */}
      <div ref={containerRef} className="relative z-30 w-full px-4 sm:px-6 flex flex-col items-center pb-12 pt-4">
        {/* We keep it mounted but hide it visually to maintain layout space and avoid layout shifts */}
        <div className={\`w-full max-w-3xl flex justify-center transition-opacity duration-300 \${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}\`}>
          <SearchInterface isFloatingMode={false} />
        </div>
      </div>

      {/* 2. Floating Action Button (FAB) (Visible when SCROLLED and NOT expanded) */}
      <AnimatePresence>
        {isScrolled && !isFloatingExpanded && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setIsFloatingExpanded(true)}
            className="fixed bottom-8 right-6 md:bottom-12 md:right-12 z-[90] flex items-center justify-center bg-[var(--archive-paper)]/90 backdrop-blur-xl border border-[var(--archive-line)] text-[var(--archive-ink)] shadow-[0_8px_32px_rgb(0,0,0,0.15)] rounded-full w-14 h-14 hover:scale-105 hover:bg-[var(--archive-paper-deep)] transition-all group"
            aria-label={t("Buka Pencarian", "Open Search")}
          >
            <Search size={20} strokeWidth={2.5} className="group-hover:text-[var(--archive-saffron)] transition-colors" />
            {(activeFilterCount > 0 || isSearchActive) && (
              <div className="absolute top-0 right-0 w-4 h-4 bg-[var(--archive-saffron)] rounded-full flex items-center justify-center text-[9px] text-white font-bold translate-x-1/4 -translate-y-1/4">
                {activeFilterCount > 0 ? activeFilterCount : "!"}
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* 3. Floating Expanded Search Modal (Visible when SCROLLED and EXPANDED) */}
      <AnimatePresence>
        {isScrolled && isFloatingExpanded && (
          <>
            {/* Dark Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsFloatingExpanded(false);
                setIsFilterOpen(false);
              }}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[99]"
              aria-hidden="true"
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 flex flex-col items-center z-[100]"
            >
              <SearchInterface isFloatingMode={true} />
              
              {/* Close Modal Button below */}
              <button 
                onClick={() => {
                  setIsFloatingExpanded(false);
                  setIsFilterOpen(false);
                }}
                className="mt-16 bg-[var(--archive-paper)]/90 backdrop-blur-md border border-[var(--archive-line)] text-[var(--archive-muted)] hover:text-[var(--archive-ink)] px-6 py-2 rounded-full text-sm font-medium shadow-sm transition-colors"
              >
                {t("Tutup Pencarian", "Close Search")}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
`;

fs.writeFileSync(targetPath, content);
console.log('Added floating animation and FAB mode to DiscoveryDesk.tsx');
