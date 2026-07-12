"use client";

import React from 'react';
import Link from 'next/link';
import { Plus, MessageSquare, ArrowRight } from 'lucide-react';
import { ProvinceMapItem } from '@/types/province';
import { usePassport } from '@/context/app-context';

export const SummaryActions = ({ province }: { province: ProvinceMapItem }) => {
  const { addStamp } = usePassport();

  return (
    <div className="absolute bottom-0 inset-x-0 p-5 pt-8 bg-gradient-to-t from-[#FFFDF8] via-[#FFFDF8] to-transparent pointer-events-none z-10">
      <div className="pointer-events-auto flex flex-col gap-3">
        <Link 
          href={`/provinsi/${province.id}`}
          className="group w-full flex items-center justify-center gap-2 h-[52px] bg-[#0D1B2A] hover:bg-[#0D1B2A]/90 text-white rounded-2xl font-semibold transition-all shadow-md"
        >
          Buka Atlas Provinsi
          <ArrowRight size={18} className="text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <div className="flex gap-3">
          <button 
            onClick={() => addStamp(province.id)}
            className="flex-1 flex items-center justify-center gap-2 h-[44px] border border-[#E8E0CE] hover:border-[#0D1B2A]/20 bg-[#FFFDF8] hover:bg-[#F8F4EA] rounded-xl text-[13px] font-bold text-[#0D1B2A] transition-colors shadow-sm"
          >
            <Plus size={16} className="text-[#C9A84C]" />
            Passport
          </button>
          
          <button 
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
