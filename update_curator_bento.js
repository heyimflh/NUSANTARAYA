const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/CuratorSelection.tsx');

const content = `import React from "react";
import Image from "next/image";
import { ArchiveCollection, ArchiveCategoryId } from "@/types/archive";

interface CuratorSelectionProps {
  collections: readonly ArchiveCollection[];
  activeMode: "explore" | "tourist" | "learn";
  activeCategoryId: ArchiveCategoryId | null;
  onOpenCollection: (id: string) => void;
  t: (id: string, en: string) => string;
}

export function CuratorSelection({ collections, activeMode, activeCategoryId, onOpenCollection, t }: CuratorSelectionProps) {
  return (
    <section id="curator-selection" className="archive-surface-canvas py-16 lg:py-24 border-b border-[var(--archive-line)]">
      <div className="archive-container">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="font-playfair text-[32px] md:text-[42px] lg:text-[48px] text-[#29221B] font-medium mb-4">{t("Pilihan Kurator", "Curator's Selection")}</h2>
          <div className="w-16 h-[2px] bg-[#D4B56A] mb-6" />
          <p className="archive-body text-[#29221B]/70 max-w-2xl text-[16px] md:text-[18px]">
            {t(
              "Koleksi tematik yang disusun secara khusus untuk memberikan sudut pandang baru terhadap arsip budaya Nusantara.",
              "Thematic collections specially curated to provide new perspectives on the cultural archives of the archipelago."
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6 auto-rows-[280px] md:auto-rows-[300px]">
          {collections.map((col, index) => {
            // Abstract Aesthetic Bento Grid Layout Calculation
            let colSpan = "md:col-span-2 lg:col-span-2";
            let rowSpan = "row-span-1";
            
            if (index === 0) {
              colSpan = "md:col-span-2 lg:col-span-3";
              rowSpan = "md:row-span-2";
            } else if (index === 1) {
              colSpan = "md:col-span-2 lg:col-span-3";
              rowSpan = "row-span-1";
            } else if (index === 2) {
              colSpan = "md:col-span-2 lg:col-span-3";
              rowSpan = "row-span-1";
            } else if (index === 3) {
              colSpan = "md:col-span-2 lg:col-span-2";
              rowSpan = "md:row-span-2";
            } else if (index === 4) {
              colSpan = "md:col-span-2 lg:col-span-4";
              rowSpan = "row-span-1";
            } else if (index === 5) {
              colSpan = "md:col-span-2 lg:col-span-4";
              rowSpan = "row-span-1";
            }

            return (
              <div 
                key={col.id} 
                className={\`relative overflow-hidden rounded-[2rem] group cursor-pointer \${colSpan} \${rowSpan} shadow-sm hover:shadow-2xl transition-all duration-500\`}
                onClick={() => onOpenCollection(col.id)}
              >
                {/* Background Image */}
                {col.heroVisual ? (
                  <Image 
                    src={col.heroVisual}
                    alt={col.heroAlt || col.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#E8E1D3]" />
                )}
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#29221B]/90 via-[#29221B]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="font-playfair text-2xl md:text-3xl text-white font-medium mb-3 leading-tight drop-shadow-md">
                      {t(col.title, col.titleEn || col.title)}
                    </h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-[#F8F4EA]/90 text-sm md:text-[15px] leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                          {t(col.promise, col.promiseEn || col.promise)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Meta tags */}
                    <div className="flex items-center gap-3 mt-1">
                      <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-semibold text-white tracking-widest uppercase border border-white/20 group-hover:border-white/40 transition-colors">
                        {col.itemIds.length} {t("Item", "Items")}
                      </span>
                      <span className="px-4 py-1.5 bg-[#D4B56A]/80 backdrop-blur-md rounded-full text-[11px] font-semibold text-white tracking-widest uppercase border border-[#D4B56A]/50 group-hover:bg-[#D4B56A] transition-colors">
                        {col.provinceIds.length} {t("Provinsi", "Provinces")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(targetPath, content);
console.log('CuratorSelection.tsx has been updated with Bento Grid layout!');
