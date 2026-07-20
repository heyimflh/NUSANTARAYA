import React from "react";
import { ArchiveCategoryDefinition, ArchiveCategoryId, ArchiveItem } from "@/types/archive";

interface CategoryCabinetProps {
  categories: readonly ArchiveCategoryDefinition[];
  activeCategoryId: ArchiveCategoryId | null;
  onCategorySelect: (id: ArchiveCategoryId | null) => void;
  allItems: ArchiveItem[];
  t: (id: string, en: string) => string;
}

export function CategoryCabinet({
  categories,
  activeCategoryId,
  onCategorySelect,
  allItems,
  t,
}: CategoryCabinetProps) {
  
  // Calculate item counts per category
  const categoryCounts = React.useMemo(() => {
    const counts = new Map<ArchiveCategoryId, number>();
    categories.forEach(c => counts.set(c.id, 0));
    
    allItems.forEach(item => {
      if (item.status === "published") {
        const current = counts.get(item.categoryId) || 0;
        counts.set(item.categoryId, current + 1);
      }
    });
    
    return counts;
  }, [categories, allItems]);

  return (
    <section className="archive-surface-deep py-12 lg:py-20 border-b border-[var(--archive-line)]">
      <div className="archive-container">
        
        <div className="mb-10 lg:mb-14">
          <h2 className="archive-h2 mb-4">
            {t("Kabinet Kategori", "Category Cabinet")}
          </h2>
          <p className="archive-body text-[var(--archive-muted)]">
            {t(
              "Jelajahi 12 pilar kebudayaan yang merekam keragaman bentuk, bunyi, dan cerita Nusantara.",
              "Explore the 12 cultural pillars recording the diversity of forms, sounds, and stories of the archipelago."
            )}
          </p>
        </div>

        {/* Desktop Layout: Asymmetric Drawer Grid */}
        <div className="hidden md:grid grid-cols-12 gap-4 h-[500px]">
          {categories.map((category) => {
            const count = categoryCounts.get(category.id) || 0;
            const isActive = activeCategoryId === category.id;
            
            // Layout logic based on active state
            let colSpan = "col-span-1"; // default small strip
            
            if (activeCategoryId === null) {
              // Default grid: evenly distributed (each col-span-1)
              // We have 12 categories, so exactly 1 per column
            } else if (isActive) {
              colSpan = "col-span-6 bg-[var(--archive-paper)] shadow-sm"; 
            } else {
              // Remaining 11 items share 6 columns.
              // That's too tight. Let's do a simpler approach for the CSS grid:
              // Actually, flexbox is better for this accordion effect.
              return null; // Will rewrite below using flex
            }

            return null;
          })}
        </div>

        {/* Flex Accordion Layout (Works for both mobile & desktop) */}
        <div className="flex flex-col md:flex-row gap-2 md:h-[500px]">
          {categories.map((category) => {
            const count = categoryCounts.get(category.id) || 0;
            const isActive = activeCategoryId === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(isActive ? null : category.id)}
                className={`
                  relative flex flex-col items-start overflow-hidden rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  border border-[var(--archive-line)] text-left group
                  ${isActive 
                    ? "md:grow-[8] h-auto md:h-full bg-[var(--archive-paper)] shadow-md" 
                    : "md:grow-[1] h-14 md:h-full bg-[var(--archive-canvas)] hover:bg-[var(--archive-paper)]"
                  }
                `}
                style={{
                  borderLeftColor: isActive ? category.accentColor : "var(--archive-line)",
                  borderLeftWidth: isActive ? "4px" : "1px",
                }}
                aria-pressed={isActive}
              >
                {/* Vertical text for inactive desktop strips */}
                <div 
                  className={`
                    absolute inset-0 p-4 flex items-center md:items-end justify-between md:justify-start transition-opacity duration-300
                    ${isActive ? "opacity-0 pointer-events-none md:hidden" : "opacity-100"}
                  `}
                >
                  <div className="flex items-center gap-3 md:rotate-180 md:[writing-mode:vertical-rl] md:h-full">
                    <span 
                      className="font-playfair font-bold text-lg whitespace-nowrap text-[var(--archive-charcoal)] group-hover:text-[var(--archive-ink)]"
                    >
                      {t(category.name, category.nameEn)}
                    </span>
                    {count > 0 && (
                      <span className="archive-catalog-number text-[var(--archive-muted)]">
                        {count}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded content */}
                <div 
                  className={`
                    p-6 md:p-8 flex flex-col h-full w-full justify-between transition-opacity duration-500 delay-100
                    ${isActive ? "opacity-100 visible" : "opacity-0 invisible absolute inset-0 md:relative"}
                  `}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="archive-catalog-number">
                        {category.index.toString().padStart(2, '0')}
                      </span>
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: category.accentColor }} />
                      <span className="archive-eyebrow" style={{ color: category.accentColor }}>
                        {count} {t("Arsip", "Archives")}
                      </span>
                    </div>
                    
                    <h3 className="archive-h3 mb-4 md:mb-6" style={{ color: category.accentColor }}>
                      {t(category.name, category.nameEn)}
                    </h3>
                    
                    <p className="archive-body text-[var(--archive-charcoal)] mb-6 max-w-md">
                      {t(category.promise, category.promiseEn)}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div 
                      className="inline-flex items-center gap-2 font-medium text-sm px-4 py-2 rounded-full transition-colors"
                      style={{ 
                        backgroundColor: category.accentColorSoft,
                        color: category.accentColor
                      }}
                    >
                      {t("Lihat Koleksi", "View Collection")} &rarr;
                    </div>
                  </div>
                  
                  {/* Decorative faint icon */}
                  <div 
                    className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4"
                    style={{ color: category.accentColor }}
                  >
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4"/>
                      <path d="M12 8h.01"/>
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
