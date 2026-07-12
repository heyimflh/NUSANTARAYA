import React from 'react';
import { ProvinceMapItem } from '@/types/province';
import { MapPin, Compass } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ProvincePanelIdentityProps = {
  province: ProvinceMapItem;
};

export const ProvincePanelIdentity: React.FC<ProvincePanelIdentityProps> = ({ province }) => {
  return (
    <div className="px-6 py-5 shrink-0 bg-white border-b border-nusaBorder">
      <div className="flex justify-between items-start gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1 text-xs font-semibold uppercase tracking-wider text-nusaGold">
            <MapPin size={12} />
            <span>{province.region}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-nusaNavy leading-none">
            {province.name}
          </h3>
        </div>
        {province.isFlagship && (
          <div className="flex items-center gap-1 bg-nusaGold/10 text-nusaGold px-2.5 py-1 rounded-full text-xs font-bold border border-nusaGold/20">
            <Compass size={12} />
            FLAGSHIP
          </div>
        )}
      </div>
      
      <p className="text-sm text-nusaNavy/70 mb-4 leading-relaxed line-clamp-3" title={province.summary}>
        {province.summary}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {province.isFlagship ? (
          <Link 
            href={province.href}
            className="flex-1 text-center bg-nusaNavy text-white py-2.5 rounded-xl font-medium text-sm hover:bg-nusaNavy/90 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-nusaNavy focus:ring-offset-2"
          >
            Jelajahi Detail
          </Link>
        ) : (
          <button 
            disabled
            aria-disabled="true"
            className="flex-1 flex justify-center items-center gap-2 bg-nusaNavy/5 text-nusaNavy/40 py-2.5 rounded-xl font-medium text-sm cursor-not-allowed border border-nusaNavy/10"
          >
            Jelajahi Detail
            <span className="bg-nusaNavy/10 text-nusaNavy/50 text-[10px] uppercase px-1.5 py-0.5 rounded-full font-bold">
              Soon
            </span>
          </button>
        )}
        
        <button 
          disabled
          aria-disabled="true"
          className="flex-1 flex justify-center items-center gap-2 bg-white text-nusaNavy/40 border border-nusaBorder py-2.5 rounded-xl font-medium text-sm cursor-not-allowed"
        >
          Buka Passport
          <span className="bg-nusaBorder text-nusaNavy/50 text-[10px] uppercase px-1.5 py-0.5 rounded-full font-bold">
            Soon
          </span>
        </button>
      </div>
    </div>
  );
};
