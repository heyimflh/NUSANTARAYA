import React, { useState } from "react";
import { BookOpen, X } from "lucide-react";

type Props = {
  sourceIds: string[];
};

export function RaniSourceReference({ sourceIds }: Props) {
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);

  if (!sourceIds || sourceIds.length === 0) return null;

  return (
    <div className="mt-6 pt-4 border-t border-[#DED3C3] border-dashed relative">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[9px] font-bold tracking-[0.2em] text-[#746F67] uppercase">Sumber Referensi:</span>
        {sourceIds.map((srcId) => (
          <button 
            key={srcId} 
            onClick={() => setActiveSourceId(activeSourceId === srcId ? null : srcId)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[11px] font-medium border transition-colors ${
              activeSourceId === srcId 
                ? "bg-[#2F7D6D] text-white border-[#2F7D6D]" 
                : "bg-[#DCEDE7] text-[#2F7D6D] border-[#2F7D6D]/20 hover:bg-[#2F7D6D]/20"
            }`}
            aria-expanded={activeSourceId === srcId}
          >
            <BookOpen className="w-3 h-3" />
            <span className="uppercase tracking-wider">{srcId.replace('src-', '').replace(/-/g, ' ')}</span>
          </button>
        ))}
      </div>
      
      {/* Editorial Citation Detail Popover */}
      {activeSourceId && (
        <div className="mt-3 w-full bg-[#FFFDFC] border border-[#DED3C3] p-4 flex flex-col gap-2 relative animate-[navSlideIn_0.2s_ease-out_both] shadow-sm">
           <div className="flex justify-between items-start">
             <div>
               <h5 className="font-serif font-medium text-sm text-[#292824] uppercase tracking-wider mb-1">
                 Materi Kurasi Budaya
               </h5>
               <p className="text-[12px] text-[#746F67]">
                 ID Referensi: {activeSourceId}
               </p>
             </div>
             <button 
               onClick={() => setActiveSourceId(null)} 
               className="text-[#746F67] hover:text-[#C85A3E] transition-colors p-1"
               aria-label="Tutup detail sumber"
             >
               <X className="w-4 h-4" />
             </button>
           </div>
           
           <div className="mt-2 pt-2 border-t border-[#DED3C3] border-dashed">
             <p className="text-[11px] text-[#746F67] leading-relaxed">
               Sumber ini diverifikasi oleh editor NUSANTARAYA. Semua informasi budaya telah dipastikan selaras dengan kurikulum pendidikan dan panduan konservasi kearifan lokal.
             </p>
           </div>
        </div>
      )}
    </div>
  );
}
