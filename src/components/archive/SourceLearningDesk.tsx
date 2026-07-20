import React from "react";
import { archiveSourceRegistry } from "@/data/archive/archiveSourceRegistry";

interface SourceLearningDeskProps {
  t: (id: string, en: string) => string;
}

export function SourceLearningDesk({ t }: SourceLearningDeskProps) {
  return (
    <section className="archive-surface-canvas py-16 border-b border-[var(--archive-line)]">
      <div className="archive-container">
        <h2 className="archive-h2 mb-4">{t("Meja Pembelajaran & Sumber", "Source & Learning Desk")}</h2>
        <p className="archive-body text-[var(--archive-muted)] mb-10 max-w-2xl">
          {t("Daftar sumber institusi dan akademis yang memverifikasi data di Nusa Archive.", "List of institutional and academic sources verifying data in Nusa Archive.")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {archiveSourceRegistry.map(src => (
            <div key={src.id} className="p-4 bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-lg">
              <h4 className="font-bold text-sm text-[var(--archive-ink)] mb-1">{src.organization || src.title}</h4>
              <p className="text-xs text-[var(--archive-muted)] capitalize">{src.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
