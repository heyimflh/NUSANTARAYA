import React from "react";
import { ArchiveCollection, ArchiveCategoryId } from "@/types/archive";

interface CuratorSelectionProps {
  collections: readonly ArchiveCollection[];
  activeMode: "explore" | "tourist" | "learn";
  activeCategoryId: ArchiveCategoryId | null;
  onOpenCollection: (id: string) => void;
  t: (id: string, en: string) => string;
}

export function CuratorSelection({ collections, activeMode, activeCategoryId, onOpenCollection, t }: CuratorSelectionProps) {
  // Simple implementation for now
  return (
    <section id="curator-selection" className="archive-surface-canvas py-16 border-b border-[var(--archive-line)]">
      <div className="archive-container">
        <div className="mb-10">
          <h2 className="archive-h2 mb-4">{t("Pilihan Kurator", "Curator's Selection")}</h2>
          <p className="archive-body text-[var(--archive-muted)] max-w-2xl">
            {t(
              "Koleksi tematik yang disusun secara khusus untuk memberikan sudut pandang baru terhadap arsip budaya Nusantara.",
              "Thematic collections specially curated to provide new perspectives on the cultural archives of the archipelago."
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(col => (
            <div 
              key={col.id} 
              className="bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-xl p-6 hover:shadow-md hover:border-[var(--archive-charcoal)] transition-all cursor-pointer group"
              onClick={() => onOpenCollection(col.id)}
            >
              <h3 className="archive-h3 mb-3 group-hover:text-[var(--archive-saffron)] transition-colors">
                {t(col.title, col.titleEn || col.title)}
              </h3>
              <p className="archive-body text-[var(--archive-charcoal)] text-sm mb-6">
                {t(col.promise, col.promiseEn || col.promise)}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs font-medium text-[var(--archive-muted)]">{col.itemIds.length} {t("Item", "Items")}</span>
                <span className="text-[var(--archive-line)]">&bull;</span>
                <span className="text-xs font-medium text-[var(--archive-muted)]">{col.provinceIds.length} {t("Provinsi", "Provinces")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
