import React from 'react';
import { Sparkles } from 'lucide-react';

export const WhyItMatters = ({ text }: { text?: string }) => {
  if (!text) return null;
  return (
    <div className="flex items-start gap-3 bg-[#F8F4EA] p-4 rounded-2xl border-l-2 border-nusaGold shadow-sm mt-2">
      <div className="flex-shrink-0 mt-0.5 text-nusaGold">
        <Sparkles size={16} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-nusaNavy/50">
          Mengapa Provinsi Ini Penting
        </h3>
        <p className="text-[13px] text-nusaNavy/80 font-medium leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};
