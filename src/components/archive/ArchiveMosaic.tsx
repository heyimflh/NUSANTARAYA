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
      <section id="archive-results" className="bg-transparent py-20 border-b border-[var(--archive-line)]/60 text-center">
        <div className="archive-container max-w-2xl mx-auto bg-[var(--archive-paper)]/90 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[var(--archive-line)]/50 shadow-sm">
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
    <section id="archive-results" className="relative z-10 bg-transparent py-12 lg:py-16 border-b border-[var(--archive-line)]/60">
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

          <div className="flex items-center gap-1 bg-[var(--archive-paper-deep)] p-1 rounded-full border border-[var(--archive-line)]/50">
            <button
              onClick={() => onViewModeChange("editorial")}
              className={`p-2 rounded-full transition-all duration-300 ${
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
              className={`p-2 rounded-full transition-all duration-300 ${
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

        {/* Bento Grid */}
        <div className={
          viewMode === "editorial" 
            ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense gap-4 md:gap-5 lg:gap-6 auto-rows-[280px] lg:auto-rows-[320px]"
            : "flex flex-col gap-4"
        }>
          {items.map((item, index) => {
            
            // Abstract Bento Grid Mapping Logic
            // We create a perfectly tileable 6-item block for 4 columns
            let layoutType: "large" | "tall" | "wide" | "standard" = "standard";
            let spanClass = "";
            
            if (viewMode === "editorial") {
              const pos = index % 6;
              if (pos === 0) {
                layoutType = "large";
                spanClass = "md:col-span-2 md:row-span-2";
              } else if (pos === 1) {
                layoutType = "tall";
                spanClass = "md:col-span-1 md:row-span-2";
              } else if (pos === 2) {
                layoutType = "standard";
                spanClass = "md:col-span-1 md:row-span-1";
              } else if (pos === 3) {
                layoutType = "standard";
                spanClass = "md:col-span-1 md:row-span-1";
              } else if (pos === 4) {
                layoutType = "wide";
                spanClass = "md:col-span-2 md:row-span-1";
              } else if (pos === 5) {
                layoutType = "wide";
                spanClass = "md:col-span-2 md:row-span-1";
              }
            }
            
            return (
              <div 
                key={item.id} 
                className={spanClass}
              >
                <ArchiveItemCard
                  item={item}
                  viewMode={viewMode}
                  layoutType={layoutType}
                  onOpenQuickView={() => onOpenQuickView(item.id)}
                  t={t}
                  language={language}
                />
              </div>
            );
          })}
        </div>

        
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
