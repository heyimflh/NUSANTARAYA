import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ProvinceMapItem } from '@/types/province';

export const SummaryHero = ({ province, onClose }: { province: ProvinceMapItem, onClose: () => void }) => {
  return (
    <div className="relative w-full h-[190px] md:h-[180px] bg-nusaNavy/5 flex-shrink-0">
      <Image
        src={province.assets.thumb}
        alt={province.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 420px"
        priority
      />
      {/* Subtle bottom gradient (vignette) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(13, 27, 42, 0.02) 20%, rgba(13, 27, 42, 0.75) 100%)'
        }}
      />
      
      {/* Top action row */}
      <div className="absolute top-4 inset-x-4 flex items-start justify-between z-10 pointer-events-none">
        <div>
          {province.isFlagship && (
            <div className="inline-block px-3 py-1.5 bg-nusaGold/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm pointer-events-auto">
              Atlas Unggulan
            </div>
          )}
        </div>
        
        <button 
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFFDF8]/90 text-nusaNavy backdrop-blur-md shadow-sm hover:bg-white transition-colors pointer-events-auto"
          aria-label="Tutup panel"
        >
          <X size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
