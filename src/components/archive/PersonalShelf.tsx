import React from "react";
import { ArchiveItem } from "@/types/archive";

interface PersonalShelfProps {
  allItems: ArchiveItem[];
  onOpenQuickView: (id: string) => void;
  t: (id: string, en: string) => string;
}

export function PersonalShelf({ allItems, onOpenQuickView, t }: PersonalShelfProps) {
  return (
    <section className="archive-surface-deep py-16 border-b border-[var(--archive-line)] text-center">
      <div className="archive-container">
        <h2 className="archive-h2 mb-4">{t("Rak Personal", "Personal Shelf")}</h2>
        <p className="archive-body text-[var(--archive-muted)]">
          {t("Simpan arsip favorit Anda untuk dibaca nanti.", "Save your favorite archives to read later.")}
        </p>
      </div>
    </section>
  );
}
