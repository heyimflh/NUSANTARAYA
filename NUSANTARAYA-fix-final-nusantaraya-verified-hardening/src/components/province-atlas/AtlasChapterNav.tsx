import React from 'react';
import type { ChapterMeta } from '@/types/atlas';

const DEFAULT_CHAPTERS: ChapterMeta[] = [
  { id: 'ringkasan', number: '00', label: 'Ringkasan' },
  { id: 'budaya', number: '01', label: 'Budaya' },
  { id: 'kuliner', number: '02', label: 'Rasa' },
  { id: 'destinasi', number: '03', label: 'Destinasi' },
];

type AtlasChapterNavProps = {
  chapters?: ChapterMeta[];
};

export const AtlasChapterNav = ({ chapters }: AtlasChapterNavProps) => {
  const items = chapters && chapters.length > 0 ? chapters : DEFAULT_CHAPTERS;

  return (
    <div className="sticky top-16 z-40 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#E8E0CE] mb-12 -mx-4 md:-mx-8 px-4 md:px-8 overflow-x-auto hide-scrollbar">
      <nav className="flex items-center gap-6 md:gap-8 h-14 min-w-max">
        {items.map(chapter => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="text-sm font-semibold text-nusaNavy/60 hover:text-nusaGold transition-colors py-4 border-b-2 border-transparent hover:border-nusaGold"
          >
            {chapter.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
