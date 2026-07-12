import React from 'react';
import { ProvinceMapItem } from '@/types/province';
import { MapPin, Compass } from 'lucide-react';
import Link from 'next/link';

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
      
      <p className="text-sm text-nusaNavy/70 mb-4 leading-relaxed">
        {province.summary}
      </p>

      <div className="flex items-center gap-3">
        <Link 
          href={province.href}
          className="flex-1 text-center bg-nusaNavy text-white py-2.5 rounded-xl font-medium text-sm hover:bg-nusaNavy/90 transition-colors shadow-sm"
        >
          Jelajahi Provinsi
        </Link>
        <button className="flex-1 bg-nusaWarm text-nusaNavy border border-nusaBorder py-2.5 rounded-xl font-medium text-sm hover:bg-nusaBorder/50 transition-colors">
          Tambah ke Passport
        </button>
      </div>
    </div>
  );
};
