"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Map, Share2, Check } from 'lucide-react';
import { usePassport } from '@/context/app-context';
import { useShare } from '@/hooks/useShare';

export const AtlasTopBar = ({ provinceName }: { provinceName: string }) => {
  const { passport } = usePassport();
  const { share, hasCopied } = useShare();
  
  const handleShare = () => {
    share({
      title: `Atlas ${provinceName} - NUSANTARAYA`,
      text: `Jelajahi keindahan dan kekayaan ${provinceName} di NUSANTARAYA.`,
      url: window.location.href,
    });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#E8E0CE] h-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex items-center justify-between">
        <Link href="/explore" className="flex items-center gap-2 text-nusaNavy hover:text-nusaGold transition-colors font-medium text-sm">
          <ArrowLeft size={18} />
          <span className="hidden md:inline">Kembali ke Peta</span>
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <BookOpen size={16} className="text-nusaGold" />
          <span className="font-serif font-semibold text-base md:text-lg tracking-wide text-nusaNavy">
            Atlas {provinceName}
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={handleShare}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E8E0CE] bg-[#F8F4EA] text-nusaNavy hover:bg-nusaNavy hover:text-white transition-colors"
            title="Bagikan Atlas ini"
            aria-label={hasCopied ? "Tautan disalin ke clipboard" : "Bagikan Atlas ini"}
            aria-live="polite"
          >
            {hasCopied ? <Check size={14} className="text-green-600" aria-hidden="true" /> : <Share2 size={14} aria-hidden="true" />}
          </button>
          <div className="flex items-center gap-1.5 bg-[#F8F4EA] px-3 py-1.5 rounded-full border border-[#E8E0CE] text-xs font-semibold text-nusaNavy">
            <Map size={14} className="text-nusaGold" />
            <span className="hidden md:inline">{passport.stamps.length} Stamps</span>
          </div>
        </div>
      </div>
    </header>
  );
};
