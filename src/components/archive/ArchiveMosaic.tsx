import React from "react";
import { ArchiveItem } from "@/types/archive";
import { ArchiveItemCard } from "./ArchiveItemCard";
import type { ArchiveFilterState, ArchiveViewMode } from "@/types/archive";
import { LayoutGrid, List } from "lucide-react";

interface ArchiveMosaicProps {
  items: ArchiveItem[];
  totalCount: number;
  viewMode: ArchiveViewMode;
  onViewModeChange: (mode: ArchiveViewMode) => void;
  onOpenQuickView: (itemId: string) => void;
  onLoadMore: () => void;
  hasMore: boolean;
  isSearchActive: boolean;
  query: string;
  filter: ArchiveFilterState;
  onReset: () => void;
  t: (id: string, en: string) => string;
  language: "id" | "en";
}

export function ArchiveMosaic({
  items,
  totalCount,
  viewMode,
  onViewModeChange,
  onOpenQuickView,
  onLoadMore,
  hasMore,
  isSearchActive,
  query,
  filter,
  onReset,
  t,
  language,
}: ArchiveMosaicProps) {
  
  if (items.length === 0) {
    return (
      <section id="archive-results" className="archive-surface-paper py-20 border-b border-[var(--archive-line)] text-center">
        <div className="archive-container max-w-2xl mx-auto">
          <h3 className="archive-h3 mb-4">
            {t("Tidak ada arsip ditemukan", "No archives found")}
          </h3>
          <p className="archive-body mx-auto mb-8 text-[var(--archive-muted)]">
            {isSearchActive
              ? t(
                  `Kami tidak dapat menemukan arsip yang cocok dengan pencarian "${query}". Coba kata kunci yang berbeda atau kurangi filter.`,
                  `We couldn't find any archives matching "${query}". Try different keywords or reduce filters.`
                )
              : t(
                  "Tidak ada arsip yang cocok dengan kriteria filter saat ini.",
                  "No archives match the current filter criteria."
                )}
          </p>
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[var(--archive-ink)] text-[var(--archive-canvas)] font-medium hover:bg-[var(--archive-charcoal)] transition-colors"
          >
            {t("Reset Filter", "Reset Filters")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="archive-results" className="archive-surface-paper py-12 lg:py-16 border-b border-[var(--archive-line)]">
      <div className="archive-container">
        
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="archive-h3">
              {isSearchActive ? t("Hasil Pencarian", "Search Results") : t("Koleksi Arsip", "Archive Collection")}
            </h2>
            <p className="archive-caption mt-1">
              {t(`Menampilkan ${items.length} dari ${totalCount} item`, `Showing ${items.length} of ${totalCount} items`)}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[var(--archive-paper-deep)] p-1 rounded-lg border border-[var(--archive-line)]">
            <button
              onClick={() => onViewModeChange("editorial")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "editorial"
                  ? "bg-[var(--archive-paper)] shadow-sm text-[var(--archive-ink)]"
                  : "text-[var(--archive-muted)] hover:text-[var(--archive-ink)]"
              }`}
              aria-label={t("Tampilan Editorial", "Editorial View")}
              title={t("Tampilan Editorial", "Editorial View")}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => onViewModeChange("compact")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "compact"
                  ? "bg-[var(--archive-paper)] shadow-sm text-[var(--archive-ink)]"
                  : "text-[var(--archive-muted)] hover:text-[var(--archive-ink)]"
              }`}
              aria-label={t("Tampilan Padat", "Compact View")}
              title={t("Tampilan Padat", "Compact View")}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className={
          viewMode === "editorial" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
            : "flex flex-col gap-4"
        }>
          {items.map((item, index) => {
            // In editorial mode, make the first item larger if it's the very first page
            const isFeatured = viewMode === "editorial" && index === 0 && filter.page === 1 && !isSearchActive;
            
            return (
              <div 
                key={item.id} 
                className={isFeatured ? "sm:col-span-2 lg:col-span-2 row-span-2" : ""}
              >
                <ArchiveItemCard
                  item={item}
                  viewMode={viewMode}
                  isFeatured={isFeatured}
                  onOpenQuickView={() => onOpenQuickView(item.id)}
                  t={t}
                  language={language}
                />
              </div>
            );
          })}
        </div>

        {/* Pagination / Load More */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onLoadMore}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-[var(--archive-line)] bg-[var(--archive-paper)] text-[var(--archive-ink)] font-medium hover:bg-[var(--archive-paper-deep)] hover:border-[var(--archive-charcoal)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--archive-saffron)]"
            >
              {t("Muat Lebih Banyak", "Load More")}
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
}
