import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { AtlasPreview, ProvinceAssets } from '@/types/province';

export const AtlasPreviewList = ({ previews, provinceAssets }: { previews: AtlasPreview[], provinceAssets: ProvinceAssets }) => {
  if (!previews || previews.length === 0) return null;
  
  const getImageForCategory = (category: string) => {
    const catLower = category.toLowerCase();
    if (catLower.includes('budaya')) return provinceAssets.culture || provinceAssets.thumb;
    if (catLower.includes('rasa') || catLower.includes('kuliner')) return provinceAssets.food || provinceAssets.thumb;
    if (catLower.includes('alam') || catLower.includes('destinasi')) return provinceAssets.destination || provinceAssets.thumb;
    return provinceAssets.thumb;
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-nusaNavy/40">
        Pilihan Dari Atlas
      </h3>
      <div className="flex flex-col gap-3">
        {previews.map((preview, i) => (
          <Link 
            key={i} 
            href={preview.href}
            className="group flex items-center gap-4 p-2 -mx-2 rounded-2xl hover:bg-[#F8F4EA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nusaGold"
          >
            <div className="relative w-[84px] h-[64px] md:w-[72px] md:h-[58px] rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-nusaNavy/5">
              <Image 
                src={getImageForCategory(preview.category)} 
                alt={preview.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="84px"
              />
            </div>
            
            <div className="flex flex-col flex-1 justify-center">
              <span className="text-[11px] font-bold text-nusaGold uppercase tracking-wide mb-0.5">
                {preview.category}
              </span>
              <span className="text-[14px] font-semibold text-nusaNavy">
                {preview.title}
              </span>
            </div>
            
            <div className="pr-2 text-nusaNavy/30 group-hover:text-nusaGold group-hover:translate-x-0.5 transition-all">
              <ChevronRight size={18} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
