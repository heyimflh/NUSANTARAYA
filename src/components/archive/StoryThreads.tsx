import React from "react";
import { ArchiveStoryThread } from "@/types/archive";

interface StoryThreadsProps {
  threads: readonly ArchiveStoryThread[];
  onOpenThread: (id: string) => void;
  t: (id: string, en: string) => string;
}

export function StoryThreads({ threads, onOpenThread, t }: StoryThreadsProps) {
  return (
    <section className="archive-surface-paper py-16 border-b border-[var(--archive-line)]">
      <div className="archive-container">
        <h2 className="archive-h2 mb-4">{t("Benang Merah Cerita", "Story Threads")}</h2>
        <p className="archive-body text-[var(--archive-muted)] mb-10 max-w-2xl">
          {t("Jelajahi alur cerita tematik yang menghubungkan berbagai arsip.", "Explore thematic storylines connecting various archives.")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {threads.map(tData => (
            <div 
              key={tData.id} 
              className="p-6 bg-[var(--archive-canvas)] border border-[var(--archive-line)] rounded-xl cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onOpenThread(tData.id)}
            >
              <div className="archive-eyebrow text-[var(--archive-saffron)] mb-2">{tData.primaryPillar}</div>
              <h3 className="archive-h3 mb-3">{t(tData.title, tData.titleEn || tData.title)}</h3>
              <p className="text-sm text-[var(--archive-charcoal)]">{t(tData.promise, tData.promiseEn || tData.promise)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
