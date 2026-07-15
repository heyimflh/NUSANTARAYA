"use client";

import React from 'react';
import Link from 'next/link';
import { Plus, MessageSquare, ArrowRight } from 'lucide-react';
import { ProvinceMapItem } from '@/types/province';
import { usePassport } from '@/context/app-context';
import { useRouter } from 'next/navigation';
import { getProvincePassportStatus } from '@/lib/passport/getProvincePassportStatus';

export const SummaryActions = ({ province }: { province: ProvinceMapItem }) => {
  const { passport, planProvince, startProvince } = usePassport();
  const router = useRouter();
  const status = getProvincePassportStatus(passport, province.id);

  const handleOpenAtlas = () => {
    startProvince(province.id);
    router.push(`/provinsi/${province.id}`);
  };

  return (
    <div className="absolute bottom-0 inset-x-0 p-5 pt-8 bg-gradient-to-t from-[#FFFDF8] via-[#FFFDF8] to-transparent pointer-events-none z-10">
      <div className="pointer-events-auto flex flex-col gap-3">
        <button 
          onClick={handleOpenAtlas}
          className="group w-full flex items-center justify-center gap-2 h-[52px] bg-[#0D1B2A] hover:bg-[#0D1B2A]/90 text-white rounded-2xl font-semibold transition-all shadow-md"
        >
          Buka Atlas Provinsi
          <ArrowRight size={18} className="text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="flex gap-3">
          <button 
            onClick={() => planProvince(province.id)}
            data-passport-status={status}
            aria-pressed={status !== 'unvisited'}
            className="flex-1 flex items-center justify-center gap-2 h-[44px] border border-[#E8E0CE] hover:border-[#0D1B2A]/20 bg-[#FFFDF8] hover:bg-[#F8F4EA] rounded-xl text-[13px] font-bold text-[#0D1B2A] transition-colors shadow-sm data-[passport-status=completed]:text-[#C9A84C]"
          >
            <Plus size={16} className="text-[#C9A84C]" />
            Passport
          </button>
          
          <button 
            onClick={() => {
              const raniSection = document.getElementById("rani-map-assistant");
              const raniHeading = document.getElementById("rani-map-assistant-heading");
              if (raniSection && raniHeading) {
                raniHeading.focus();
                raniSection.scrollIntoView({ 
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", 
                  block: "start" 
                });
              }
            }}
            className="flex-1 flex items-center justify-center gap-2 h-[44px] border border-transparent hover:border-[#E8E0CE] bg-transparent hover:bg-[#F8F4EA] rounded-xl text-[13px] font-bold text-[#0D1B2A]/80 hover:text-[#0D1B2A] transition-colors"
          >
            <MessageSquare size={16} />
            Tanya RANI
          </button>
        </div>
      </div>
    </div>
  );
};
