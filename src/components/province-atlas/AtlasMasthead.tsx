import React from 'react';
import Image from 'next/image';
import { ProvinceMapItem } from '@/types/province';

export const AtlasMasthead = ({ province, materialCount = 42 }: { province: ProvinceMapItem, materialCount?: number }) => {
  return (
    <section className="flex flex-col gap-8 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-end">
        <div className="flex-1 flex flex-col gap-2">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-nusaGold">
            Atlas Provinsi
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-nusaNavy leading-tight">
            {province.name}
          </h1>
          <p className="text-lg md:text-xl text-nusaNavy/70 font-medium mt-2">
            {province.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-nusaNavy/50">Wilayah</span>
            <span className="text-sm font-semibold text-nusaNavy">{province.region}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-nusaNavy/50">Ibu Kota</span>
            <span className="text-sm font-semibold text-nusaNavy">{province.capital}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-nusaNavy/50">Materi</span>
            <span className="text-sm font-semibold text-nusaGold">{materialCount} Tersedia</span>
          </div>
        </div>
      </div>
      <div className="w-full aspect-[21/9] rounded-[32px] overflow-hidden relative shadow-2xl">
        <Image
          src={province.assets.hero}
          alt={`Lanskap ${province.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-nusaNavy/10 mix-blend-multiply" />
      </div>
    </section>
  );
};
