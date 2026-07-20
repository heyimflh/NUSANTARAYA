"use client";

/**
 * NUSA ARCHIVE — The Living Memory House
 * Main page orchestrator component
 *
 * Creative Direction: Contemporary Indonesian Cultural Editorial
 * × Museum Archive Room × Curator's Field Notes
 * × Tactile Paper and Material Library × Cinematic Knowledge Journey
 */

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage, useMode } from "@/context/app-context";
import { getPublishedArchiveItems } from "@/data/archive/archiveItems";
import { archiveCategories } from "@/data/archive/archiveCategories";
import { archiveCollections } from "@/data/archive/archiveCollections";
import { archiveStoryThreads } from "@/data/archive/archiveStoryThreads";
import { regions } from "@/data/regions/regions";
import { provinceMapData } from "@/data/provinces/provinces";
import { searchArchiveItems } from "@/lib/archive/searchArchive";
import {
  filterArchiveItems,
  sortArchiveItems,
  parseArchiveQuery,
  buildArchiveQueryString,
  paginateItems,
  getActiveFilterCount,
  ITEMS_PER_PAGE,
} from "@/lib/archive/filterArchive";
import type { ArchiveFilterState, ArchiveCategoryId, ArchiveItem } from "@/types/archive";
import { DEFAULT_ARCHIVE_FILTER } from "@/types/archive";
import type { RegionId } from "@/types/region";

import { ArchiveHero } from "./ArchiveHero";
import { ArchiveHeroSection } from "./ArchiveHeroSection";
import { ArchiveNavbar } from "./ArchiveNavbar";
import { FinalCtaFooterSection } from "@/components/home/final-cta-footer";
import { DiscoveryDesk } from "./DiscoveryDesk";
import { CuratorSelection } from "./CuratorSelection";
import { CategoryCabinet } from "./CategoryCabinet";
import { ArchiveMosaic } from "./ArchiveMosaic";
import { RegionalMemoryIndex } from "./RegionalMemoryIndex";
import { StoryThreads } from "./StoryThreads";
import { SourceLearningDesk } from "./SourceLearningDesk";
import { PersonalShelf } from "./PersonalShelf";
import { FinalHandoff } from "./FinalHandoff";
import { ItemQuickView } from "./ItemQuickView";
import { trackEvent } from "@/lib/analytics";

import "./archive-page.css";

// ─── Province Name Map ───────────────────────────────────────────────────────
const provinceNameMap = new Map(
  provinceMapData.map((p) => [p.id, p.name])
);

export function ArchivePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();
  const { mode: globalMode } = useMode();

  // ─── Filter State from URL ─────────────────────────────────────────────────
  const filterFromUrl = useMemo(
    () => parseArchiveQuery(searchParams),
    [searchParams]
  );

  const [filter, setFilter] = useState<ArchiveFilterState>({
    ...filterFromUrl,
    mode: filterFromUrl.mode || globalMode,
  });

  const [quickViewItemId, setQuickViewItemId] = useState<string | null>(null);
  const [loadedPages, setLoadedPages] = useState(1);

  // Sync mode from global
  useEffect(() => {
    if (filter.mode !== globalMode && !searchParams.has("mode")) {
      setFilter((prev) => ({ ...prev, mode: globalMode }));
    }
  }, [globalMode, filter.mode, searchParams]);

  // ─── Track page view ──────────────────────────────────────────────────────
  useEffect(() => {
    trackEvent("archive_page_viewed", { mode: filter.mode, locale: language });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Data Pipeline ─────────────────────────────────────────────────────────
  const allItems = useMemo(() => getPublishedArchiveItems(), []);

  const { filteredItems, searchResultCount, isSearchActive } = useMemo(() => {
    let items = allItems;
    let isSearch = false;

    // Search
    if (filter.query.trim()) {
      const searchResult = searchArchiveItems(
        items,
        filter.query,
        filter.mode,
        provinceNameMap
      );
      items = searchResult.items;
      isSearch = true;
    }

    // Filter
    items = filterArchiveItems(items, filter);

    // Sort (only if not search — search has its own ranking)
    if (!isSearch) {
      items = sortArchiveItems(items, filter.sort);
    }

    return {
      filteredItems: items,
      searchResultCount: items.length,
      isSearchActive: isSearch,
    };
  }, [allItems, filter]);

  // Paginated items — "Load more" approach
  const paginatedItems = useMemo(() => {
    const count = loadedPages * ITEMS_PER_PAGE;
    return filteredItems.slice(0, count);
  }, [filteredItems, loadedPages]);

  const hasMore = paginatedItems.length < filteredItems.length;

  // Quick View item
  const quickViewItem = useMemo(() => {
    if (!quickViewItemId) return null;
    return allItems.find((item) => item.id === quickViewItemId) ?? null;
  }, [quickViewItemId, allItems]);

  // ─── Update URL ────────────────────────────────────────────────────────────
  const updateFilter = useCallback(
    (updates: Partial<ArchiveFilterState>) => {
      const newFilter = { ...filter, ...updates, page: 1 };
      setFilter(newFilter);
      setLoadedPages(1);

      const queryString = buildArchiveQueryString(newFilter);
      router.replace(`/archive${queryString}`, { scroll: false });

      if (updates.query !== undefined) {
        trackEvent("archive_search_submitted", { mode: newFilter.mode });
      }
      if (updates.categoryId !== undefined) {
        trackEvent("archive_filter_changed", {
          categoryId: newFilter.categoryId ?? "all",
        });
      }
    },
    [filter, router]
  );

  const resetFilters = useCallback(() => {
    setFilter({ ...DEFAULT_ARCHIVE_FILTER, mode: globalMode });
    setLoadedPages(1);
    router.replace("/archive", { scroll: false });
  }, [globalMode, router]);

  const handleLoadMore = useCallback(() => {
    setLoadedPages((prev) => prev + 1);
  }, []);

  const handleOpenQuickView = useCallback(
    (itemId: string) => {
      setQuickViewItemId(itemId);
      trackEvent("archive_item_quick_viewed", { itemId });
    },
    []
  );

  const handleCloseQuickView = useCallback(() => {
    setQuickViewItemId(null);
  }, []);

  const handleCategorySelect = useCallback(
    (categoryId: ArchiveCategoryId | null) => {
      updateFilter({ categoryId });
      trackEvent("archive_category_selected", {
        categoryId: categoryId ?? "all",
      });
      
      // Smooth scroll to the results section
      setTimeout(() => {
        const resultsSection = document.getElementById("archive-results");
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    },
    [updateFilter]
  );

  const handleRegionSelect = useCallback(
    (regionId: RegionId | null) => {
      updateFilter({ regionId, provinceId: null });
      trackEvent("archive_region_selected", {
        regionId: regionId ?? "all",
      });
    },
    [updateFilter]
  );

  const activeFilterCount = getActiveFilterCount(filter);

  // ─── Scroll to results when filter changes ────────────────────────────────
  const handleScrollToResults = useCallback(() => {
    const el = document.getElementById("archive-results");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <main className="relative min-h-screen isolate overflow-x-clip max-w-full archive-page">
      <ArchiveNavbar />
      
      {/* ── Section 0: Main Video Hero ─────────────────────────────────────── */}
      <ArchiveHeroSection />
      
      {/* ── Section 1: Archive Threshold / Editorial Hero ────────────────── */}
      <ArchiveHero
        itemCount={allItems.length}
        categoryCount={archiveCategories.length}
        onStartExploring={handleScrollToResults}
        onOpenCollection={() => {
          const el = document.getElementById("curator-selection");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        t={t}
      />

      {/* ── Section 2: Discovery Desk ──────────────────────────────────────── */}
      <DiscoveryDesk
        filter={filter}
        onFilterChange={updateFilter}
        onReset={resetFilters}
        resultCount={searchResultCount}
        activeFilterCount={activeFilterCount}
        categories={archiveCategories}
        regions={regions}
        isSearchActive={isSearchActive}
        t={t}
      />

      {/* ── Section 3: Curator's Selection ─────────────────────────────────── */}
      <CuratorSelection
        collections={archiveCollections}
        activeMode={filter.mode}
        activeCategoryId={filter.categoryId}
        onOpenCollection={(collectionId) => {
          trackEvent("archive_collection_opened", { collectionId });
        }}
        t={t}
      />

      {/* ── Section 4: Cabinet of Categories ───────────────────────────────── */}
      <CategoryCabinet
        categories={archiveCategories}
        activeCategoryId={filter.categoryId}
        onCategorySelect={handleCategorySelect}
        allItems={allItems}
        t={t}
      />

      {/* ── Section 5: Archive Mosaic / Results ────────────────────────────── */}
      <ArchiveMosaic
        items={paginatedItems}
        totalCount={searchResultCount}
        viewMode={filter.viewMode}
        onViewModeChange={(viewMode) => updateFilter({ viewMode })}
        onOpenQuickView={handleOpenQuickView}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
        isSearchActive={isSearchActive}
        query={filter.query}
        filter={filter}
        onReset={resetFilters}
        t={t}
        language={language}
      />

      {/* ── Section 6: Regional Memory Index ───────────────────────────────── */}
      <RegionalMemoryIndex
        regions={regions}
        allItems={allItems}
        activeRegionId={filter.regionId}
        onRegionSelect={handleRegionSelect}
        t={t}
      />

      {/* ── Section 7: Story Threads ───────────────────────────────────────── */}
      <StoryThreads
        threads={archiveStoryThreads}
        onOpenThread={(threadId) => {
          trackEvent("archive_thread_opened", { threadId });
        }}
        t={t}
      />

      {/* ── Section 9: Source & Learning Desk ──────────────────────────────── */}
      <SourceLearningDesk t={t} />

      {/* ── Section 12: Personal Shelf ─────────────────────────────────────── */}
      <PersonalShelf
        allItems={allItems}
        onOpenQuickView={handleOpenQuickView}
        t={t}
      />

      {/* ── Section 13: Final Editorial Handoff ────────────────────────────── */}
      <FinalHandoff t={t} />

      <FinalCtaFooterSection />

      {/* ── Quick View Drawer ──────────────────────────────────────────────── */}
      {quickViewItem && (
        <ItemQuickView
          item={quickViewItem}
          onClose={handleCloseQuickView}
          onOpenDetail={(slug) => {
            router.push(`/archive/${slug}`);
          }}
          t={t}
          language={language}
        />
      )}
    </main>
  );
}
