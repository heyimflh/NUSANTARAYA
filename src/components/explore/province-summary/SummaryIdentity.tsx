import React from 'react';
import { ProvinceMapItem } from '@/types/province';

export const SummaryIdentity = ({ province }: { province: ProvinceMapItem }) => {
  return (
    <div className="flex flex-col gap-1.5 mt-2">
      <h2 className="font-serif text-[28px] md:text-[34px] text-nusaNavy font-bold leading-tight tracking-tight">
        {province.name}
      </h2>
      <p className="text-[14px] md:text-[15px] font-medium text-nusaNavy/80 leading-snug">
        {province.tagline}
      </p>
      <p className="text-[12px] md:text-[13px] text-nusaNavy/50 font-medium mt-1 uppercase tracking-wide">
        {province.region} &middot; Ibu Kota {province.capital}
      </p>
    </div>
  );
};
