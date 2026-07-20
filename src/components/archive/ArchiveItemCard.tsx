import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArchiveItem, ArchiveViewMode } from "@/types/archive";
import { getArchiveCategoryById, getArchiveCategoryName } from "@/data/archive/archiveCategories";
import { provinceMapData } from "@/data/provinces/provinces";

interface ArchiveItemCardProps {
  item: ArchiveItem;
  viewMode: ArchiveViewMode;
  isFeatured?: boolean;
  onOpenQuickView: () => void;
  t: (id: string, en: string) => string;
  language: "id" | "en";
}

// ─── Helper Maps ─────────────────────────────────────────────────────────────
const provinceNameMap = new Map(provinceMapData.map((p) => [p.id, p.name]));

export function ArchiveItemCard({
  item,
  viewMode,
  isFeatured = false,
  onOpenQuickView,
  t,
  language,
}: ArchiveItemCardProps) {
  const content = language === "en" && item.localeContent.en ? item.localeContent.en : item.localeContent.id;
  const category = getArchiveCategoryById(item.categoryId);
  const categoryName = getArchiveCategoryName(item.categoryId, language);
  
  const primaryProvinceId = item.provinceIds[0];
  const provinceName = provinceNameMap.get(primaryProvinceId) || primaryProvinceId;
  
  const mainMedia = item.media[0];
  
  // Format catalog number e.g. "ARC-ID-34-01"
  const catalogNumber = `ARC-${primaryProvinceId.substring(0, 3).toUpperCase()}-${category?.index.toString().padStart(2, '0')}`;

  if (viewMode === "compact") {
    return (
      <div 
        className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-[var(--archive-line)] bg-[var(--archive-paper)] hover:bg-[var(--archive-paper-deep)] transition-colors cursor-pointer"
        onClick={onOpenQuickView}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenQuickView();
          }
        }}
      >
        <div className="relative w-full sm:w-32 h-24 sm:h-auto shrink-0 bg-[var(--archive-canvas)] rounded-lg overflow-hidden">
          {mainMedia ? (
            <Image
              src={mainMedia.src}
              alt={mainMedia.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 128px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--archive-muted)]">
              {t("No Image", "No Image")}
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="archive-catalog-number">{catalogNumber}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--archive-line)]" />
            <span className="archive-caption truncate" style={{ color: category?.accentColor }}>{categoryName}</span>
          </div>
          <h3 className="text-lg font-bold font-playfair text-[var(--archive-ink)] truncate mb-1 group-hover:text-[var(--archive-saffron)] transition-colors">
            {content.title}
          </h3>
          <p className="text-sm text-[var(--archive-charcoal)] truncate">
            {provinceName}
          </p>
        </div>
        
        <div className="hidden sm:flex items-center px-4">
          <span className="text-sm font-medium text-[var(--archive-saffron)] opacity-0 group-hover:opacity-100 transition-opacity">
            {t("Lihat Ringkasan", "Quick View")} &rarr;
          </span>
        </div>
      </div>
    );
  }

  // Editorial Mode
  return (
    <div className="group flex flex-col h-full">
      <div 
        className={`relative w-full overflow-hidden bg-[var(--archive-paper-deep)] rounded-xl cursor-pointer ${
          isFeatured ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/5] sm:aspect-square"
        }`}
        onClick={onOpenQuickView}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenQuickView();
          }
        }}
      >
        {mainMedia ? (
          <Image
            src={mainMedia.src}
            alt={language === "en" ? mainMedia.altEn || mainMedia.alt : mainMedia.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes={
              isFeatured 
                ? "(max-width: 768px) 100vw, 66vw" 
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            }
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--archive-muted)]">
            {t("No Image", "No Image")}
          </div>
        )}
        
        {/* Overlay hover effect */}
        <div className="absolute inset-0 bg-[var(--archive-ink)]/0 group-hover:bg-[var(--archive-ink)]/10 transition-colors duration-300 pointer-events-none" />
        
        {/* Quick View Button overlay */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="bg-[var(--archive-paper)]/90 backdrop-blur-sm text-[var(--archive-ink)] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            {t("Lihat Ringkasan", "Quick View")}
          </span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="archive-catalog-number">{catalogNumber}</span>
          <span className="archive-eyebrow text-xs" style={{ color: category?.accentColor }}>
            {categoryName}
          </span>
        </div>
        
        <h3 className={`font-playfair font-bold text-[var(--archive-ink)] group-hover:text-[var(--archive-saffron)] transition-colors line-clamp-2 ${
          isFeatured ? "text-2xl lg:text-3xl mb-3" : "text-lg lg:text-xl mb-2"
        }`}>
          <Link href={`/archive/${item.slug}`} className="focus:outline-none" onClick={(e) => e.preventDefault()}>
            {content.title}
          </Link>
        </h3>
        
        <p className="archive-caption mb-3">
          {provinceName}
        </p>
        
        {isFeatured && (
          <p className="archive-body text-[var(--archive-charcoal)] line-clamp-3 mb-4">
            {content.summary}
          </p>
        )}
      </div>
    </div>
  );
}
