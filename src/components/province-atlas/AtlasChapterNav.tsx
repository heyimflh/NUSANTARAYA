"use client";

import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide navigation when user scrolls to the final CTA or footer
    const observer = new IntersectionObserver(
      (entries) => {
        // If the footer/CTA section is intersecting (visible on screen), hide the nav
        const isFooterVisible = entries.some(entry => entry.isIntersecting);
        setIsVisible(!isFooterVisible);
      },
      { rootMargin: '50px 0px 0px 0px', threshold: 0.05 }
    );

    const ctaSection = document.querySelector('[aria-labelledby="final-cta-title"]');
    const footer = document.querySelector('footer');
    
    if (ctaSection) observer.observe(ctaSection);
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border border-[#E8E0CE] shadow-2xl rounded-full px-4 md:px-8 py-2 overflow-x-auto hide-scrollbar ring-1 ring-black/5">
        <nav className="flex items-center gap-6 md:gap-8 h-12 min-w-max justify-center">
          {items.map(chapter => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="text-sm font-bold text-nusaNavy/60 hover:text-nusaGold transition-colors py-2 relative group"
            >
              {chapter.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nusaGold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
