import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArchiveItem, ArchiveViewMode } from "@/types/archive";
import { getArchiveCategoryById, getArchiveCategoryName } from "@/data/archive/archiveCategories";
import { provinceMapData } from "@/data/provinces/provinces";

interface ArchiveItemCardProps {
  item: ArchiveItem;
  viewMode: ArchiveViewMode;
  layoutType?: "large" | "tall" | "wide" | "standard";
  onOpenQuickView: () => void;
  t: (id: string, en: string) => string;
  language: "id" | "en";
}

// ─── Helper Maps ─────────────────────────────────────────────────────────────
const provinceNameMap = new Map(provinceMapData.map((p) => [p.id, p.name]));

export function ArchiveItemCard({
  item,
  viewMode,
  layoutType = "standard",
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
        <div className="relative w-full sm:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--archive-canvas)]">
          {mainMedia ? (
            <Image
              src={mainMedia.src}
              alt={language === "en" ? mainMedia.altEn || mainMedia.alt : mainMedia.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 192px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--archive-muted)] text-sm">
              {t("No Image", "No Image")}
            </div>
          )}
        </div>
        
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex items-center justify-between mb-1">
            <span className="archive-catalog-number">{catalogNumber}</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: category?.accentColor }}>
              {categoryName}
            </span>
          </div>
          
          <h3 className="font-playfair font-bold text-lg text-[var(--archive-ink)] mb-1 group-hover:text-[var(--archive-saffron)] transition-colors line-clamp-1">
            <Link href={`/archive/${item.slug}`} className="focus:outline-none" onClick={(e) => e.preventDefault()}>
              {content.title}
            </Link>
          </h3>
          
          <p className="text-[var(--archive-charcoal)] text-sm line-clamp-2 mb-2">
            {content.summary}
          </p>
          
          <p className="text-[var(--archive-muted)] text-xs font-medium mt-auto">
            {provinceName}
          </p>
        </div>
      </div>
    );
  }

  // ─── PREMIUM ABSTRACT BENTO GRID OVERLAY CARD ────────────────────────────────
  
  // Dynamic sizing based on layoutType
  const titleSize = layoutType === "large" || layoutType === "wide" 
    ? "text-2xl md:text-3xl lg:text-4xl" 
    : "text-xl md:text-2xl";

  return (
    <div 
      className="group relative w-full h-full min-h-[250px] flex flex-col rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-[var(--archive-paper-deep)]"
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
      {/* Background Image filling the entire card */}
      {mainMedia ? (
        <Image
          src={mainMedia.src}
          alt={language === "en" ? mainMedia.altEn || mainMedia.alt : mainMedia.alt}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          sizes={
            layoutType === "large" 
              ? "(max-width: 768px) 100vw, 50vw" 
              : "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          }
        />
      ) : (
        <div className="absolute inset-0 bg-[#E8E1D3]" />
      )}
      
      {/* Cinematic Gradient Overlay - Lighter for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Top Meta Data (Catalog Number & Province) */}
      <div className="absolute top-0 left-0 right-0 p-5 md:p-6 flex justify-between items-start z-10">
        <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-mono text-white border border-white/20 tracking-widest transition-colors duration-300 group-hover:bg-white/20">
          {catalogNumber}
        </span>
        <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-semibold text-white uppercase border border-white/20 tracking-wider transition-colors duration-300 group-hover:bg-white/20">
          {provinceName}
        </span>
      </div>

      {/* Content Positioned at Bottom */}
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          
          {/* Category Eyebrow */}
          <span 
            className="block text-[10px] font-bold uppercase tracking-widest mb-1.5"
            style={{ color: category?.accentColorSoft || "#F3EBDD" }}
          >
            {categoryName}
          </span>
          
          {/* Title */}
          <h3 className={`font-playfair font-bold !text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-tight ${titleSize}`}>
            {content.title}
          </h3>
          
          {/* Summary strictly hidden until hover to keep it clean like the reference */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
            <div className="overflow-hidden">
              <p className="!text-white/80 text-sm leading-relaxed mt-3 mb-2 line-clamp-2">
                {content.summary}
              </p>
            </div>
          </div>
          
          {/* Quick View Interactive Button */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-2">
            <div className="h-[1px] w-6 bg-white/60" />
            <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-semibold">
              {t("Lihat Ringkasan", "Quick View")}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
