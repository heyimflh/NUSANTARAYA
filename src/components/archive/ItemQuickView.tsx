import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ArrowRight, Bookmark, BookmarkCheck } from "lucide-react";
import { ArchiveItem } from "@/types/archive";
import { getArchiveCategoryById, getArchiveCategoryName } from "@/data/archive/archiveCategories";
import { provinceMapData } from "@/data/provinces/provinces";

interface ItemQuickViewProps {
  item: ArchiveItem;
  onClose: () => void;
  onOpenDetail: (slug: string) => void;
  t: (id: string, en: string) => string;
  language: "id" | "en";
}

const provinceNameMap = new Map(provinceMapData.map((p) => [p.id, p.name]));

export function ItemQuickView({
  item,
  onClose,
  onOpenDetail,
  t,
  language,
}: ItemQuickViewProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    
    // Focus management - trap focus initially
    closeButtonRef.current?.focus();
    
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent scroll on body when drawer is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const content = language === "en" && item.localeContent.en ? item.localeContent.en : item.localeContent.id;
  const category = getArchiveCategoryById(item.categoryId);
  const categoryName = getArchiveCategoryName(item.categoryId, language);
  
  const primaryProvinceId = item.provinceIds[0];
  const provinceName = provinceNameMap.get(primaryProvinceId) || primaryProvinceId;
  const catalogNumber = `ARC-${primaryProvinceId.substring(0, 3).toUpperCase()}-${category?.index.toString().padStart(2, '0')}`;
  
  const mainMedia = item.media[0];

  return (
    <div 
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex justify-end bg-[var(--archive-ink)]/40 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div className="w-full sm:w-[480px] h-[100dvh] bg-[var(--archive-canvas)] shadow-2xl flex flex-col overflow-hidden animate-fade-in sm:animate-[slideLeft_0.3s_ease-out]">
        
        {/* Header Actions */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            className="w-10 h-10 rounded-full bg-[var(--archive-ink)]/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--archive-ink)] transition-colors"
            title={t("Simpan", "Save")}
            aria-label={t("Simpan", "Save")}
          >
            <Bookmark size={18} />
          </button>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[var(--archive-ink)]/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--archive-ink)] transition-colors"
            aria-label={t("Tutup", "Close")}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          
          {/* Hero Image */}
          <div className="relative w-full aspect-[4/3] bg-[var(--archive-paper-deep)]">
            {mainMedia && (
              <Image
                src={mainMedia.src}
                alt={language === "en" ? mainMedia.altEn || mainMedia.alt : mainMedia.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 480px"
                priority
              />
            )}
            
            {/* Gradient overlay for text readability if needed */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--archive-ink)]/60 to-transparent" />
            
            {/* Image Catalog Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium bg-[var(--archive-ink)]/50 backdrop-blur-md px-2 py-0.5 rounded-sm">
                  {catalogNumber}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="archive-eyebrow" style={{ color: category?.accentColor }}>
                {categoryName}
              </span>
              <span className="archive-caption text-[var(--archive-muted)]">
                {provinceName}
              </span>
            </div>

            <h2 id="quick-view-title" className="archive-h2 text-3xl mb-4">
              {content.title}
            </h2>

            <p className="archive-body mb-8">
              {content.summary}
            </p>

            <div className="space-y-6">
              {content.context && (
                <div>
                  <h4 className="archive-eyebrow text-[var(--archive-charcoal)] mb-2">
                    {t("Konteks Sosial", "Social Context")}
                  </h4>
                  <p className="text-[var(--archive-charcoal)] leading-relaxed text-sm">
                    {content.context}
                  </p>
                </div>
              )}
              
              {content.meaning && (
                <div>
                  <h4 className="archive-eyebrow text-[var(--archive-charcoal)] mb-2">
                    {t("Makna & Filosofi", "Meaning & Philosophy")}
                  </h4>
                  <p className="text-[var(--archive-charcoal)] leading-relaxed text-sm">
                    {content.meaning}
                  </p>
                </div>
              )}

              {content.funFacts && content.funFacts.length > 0 && (
                <div className="bg-[var(--archive-paper)] p-4 rounded-xl border border-[var(--archive-line)]">
                  <h4 className="archive-eyebrow text-[var(--archive-saffron)] mb-3">
                    {t("Fakta Menarik", "Fun Facts")}
                  </h4>
                  <ul className="list-disc pl-4 space-y-2 text-sm text-[var(--archive-charcoal)]">
                    {content.funFacts.map((fact, i) => (
                      <li key={i}>{fact}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-[var(--archive-line)]">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium uppercase tracking-wider text-[var(--archive-muted)]">
                {t("Status Referensi", "Source Status")}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-[var(--archive-success)]" />
                <span className="text-[var(--archive-charcoal)]">
                  {t("Terverifikasi oleh", "Verified by")} {item.sourceRefs.length} {t("sumber terdaftar", "registered sources")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 bg-[var(--archive-paper)] border-t border-[var(--archive-line)] flex items-center justify-between pb-safe">
          <button
            onClick={() => onOpenDetail(item.slug)}
            className="flex-1 flex items-center justify-between px-6 py-3 rounded-full bg-[var(--archive-ink)] text-[var(--archive-canvas)] font-medium hover:bg-[var(--archive-charcoal)] transition-colors"
          >
            {t("Baca Selengkapnya", "Read Full Entry")}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
