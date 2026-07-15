import React from "react";
import { RaniMapContext } from "@/types/rani";
import { provinceMapData } from "@/data/provinces/provinces";

type Props = {
  context: RaniMapContext;
};

export function RaniPassportJourneyPath({ context }: Props) {
  // Derive a narrative from the context
  let title = "Mulai Ekspedisi Pertamamu";
  let description = "Pilih provinsi atau aktifkan layer budaya untuk memulai jejak di Passport-mu.";
  let startNode = "Awal";
  let endNode = "Pilih Tujuan";

  if (context.nextMilestone) {
    const isCompleted = context.completedProvinceIds.length > 0;
    
    // Example narrative: "Kamu telah membuka 1 provinsi. Satu langkah lagi melengkapi Maluku."
    title = isCompleted ? `Melanjutkan Jejak Nusantara` : `Langkah Pertama`;
    
    // Get last visited or fallback to "Passport"
    const lastVisitedId = context.completedProvinceIds.length > 0 
      ? context.completedProvinceIds[context.completedProvinceIds.length - 1] 
      : null;
      
    const lastProv = lastVisitedId ? provinceMapData.find(p => p.id === lastVisitedId) : null;
    
    startNode = lastProv ? lastProv.name : "Passport";
    
    // Determine target based on context
    if (context.selectedProvinceId) {
      const selectedProv = provinceMapData.find(p => p.id === context.selectedProvinceId);
      endNode = selectedProv ? selectedProv.name : context.nextMilestone.title;
      description = `Fokus eksplorasi saat ini ada di ${endNode}.`;
    } else {
      endNode = context.nextMilestone.title;
      description = context.nextMilestone.description;
    }
    
    // Add layer context if active
    if (context.activeLayer !== "all") {
      const layerMap: Record<string, string> = {
        budaya: "Budaya", kuliner: "Kuliner", alam: "Alam",
        sejarah: "Sejarah", rempah: "Jalur Rempah", future: "Kota Masa Depan"
      };
      description += ` Layer ${layerMap[context.activeLayer]} sedang aktif.`;
    }
  } else if (context.activeJourneyId) {
    title = "Menjalani Rute Perjalanan";
    description = `Kamu sedang mengikuti rekomendasi perjalanan. Lanjutkan ke pemberhentian berikutnya.`;
    startNode = "Titik Singgah";
    endNode = "Tujuan Berikutnya";
  }

  return (
    <div className="flex flex-col gap-5 bg-[#FFFDFC] border border-[#DED3C3] p-6 lg:p-8 relative overflow-hidden">
      {/* Decorative Stamp */}
      <div className="absolute -right-12 -top-12 w-32 h-32 border border-[#E3AD3F]/20 rounded-full flex items-center justify-center opacity-50 pointer-events-none transform rotate-12">
        <span className="font-serif text-[#E3AD3F]/40 text-xs tracking-widest uppercase">Passport</span>
      </div>

      <div className="relative z-10">
        <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C85A3E] uppercase mb-2">Jejakmu Sekarang</h4>
        
        {/* Route Line Visualization */}
        <div className="flex items-center gap-3 my-5 w-full max-w-sm">
          <div className="flex flex-col items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#667653]" />
            <span className="text-[10px] font-medium text-[#746F67] uppercase tracking-wider">{startNode}</span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#667653] to-[#E3AD3F] border-b border-dashed border-[#DED3C3] mt-[-16px]" />
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-3 rounded-full border-2 border-[#E3AD3F] bg-white flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#E3AD3F] animate-pulse" />
            </div>
            <span className="text-[10px] font-bold text-[#292824] uppercase tracking-wider">{endNode}</span>
          </div>
        </div>

        <p className="text-[14px] text-[#746F67] leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
