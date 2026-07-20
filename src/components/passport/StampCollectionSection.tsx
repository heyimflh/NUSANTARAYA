"use client";

import { useState } from "react";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { LivingStampCanvas } from "@/components/explore/passport-progress/LivingStampCanvas";
import { getAllRegionIds, getRegionById } from "@/data/regions/regionProvinceMap";
import { provinceMapData } from "@/data/provinces/provinces";
import { getStampAsset } from "@/lib/passport/assetMap";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const StampCollectionSection = ({ identity }: { identity: PassportProgressSummary }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const regions = getAllRegionIds().map(getRegionById).filter(Boolean) as NonNullable<ReturnType<typeof getRegionById>>[];

  return (
    <section className="mt-16">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-serif text-[#2B211B] font-bold">Koleksi Jejak Nusantara</h2>
        <div className="h-[1px] flex-1 bg-[#DCCDB8]" />
      </div>

      <LivingStampCanvas summary={identity} />

      <div className="mt-8 text-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-[#7A302B] font-bold tracking-widest uppercase text-xs hover:bg-[#E5D7C3] px-6 py-3 rounded-full transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Tutup Koleksi Penuh" : "Lihat Seluruh Koleksi"}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-12"
          >
            <div className="bg-[#FFFCF6] border border-[#DCCDB8] rounded-xl p-8 lg:p-12 shadow-sm space-y-16">
              {regions.map((region) => {
                const provinces = region.provinceIds.map(id => provinceMapData.find(p => p.id === id)).filter(Boolean) as typeof provinceMapData;
                
                return (
                  <div key={region.id}>
                    <h3 className="text-lg font-serif font-bold text-[#2B211B] mb-6 flex items-center gap-4">
                      {region.label}
                      <span className="text-xs font-mono font-bold text-[#786B60] bg-[#F3EBDD] px-2 py-1 rounded">
                        {provinces.filter(p => identity.completed.includes(p.id)).length}/{provinces.length}
                      </span>
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                      {provinces.map((prov) => {
                        const isCompleted = identity.completed.includes(prov.id);
                        const stampSrc = getStampAsset(prov.id);
                        
                        return (
                          <div 
                            key={prov.id} 
                            className="flex flex-col items-center text-center group"
                          >
                            <div className={cn(
                              "w-24 h-24 sm:w-28 sm:h-28 relative mb-3 transition-all duration-300",
                              isCompleted ? "opacity-100 hover:scale-105" : "opacity-30 grayscale sepia hover:opacity-50"
                            )}>
                              {stampSrc ? (
                                <Image
                                  src={stampSrc}
                                  alt={`Stempel ${prov.name}`}
                                  fill
                                  className="object-contain drop-shadow-sm"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-[#A77B32] rounded-full">
                                  <span className="text-xs font-bold font-mono text-[#A77B32]">{prov.id.substring(0, 2).toUpperCase()}</span>
                                </div>
                              )}
                            </div>
                            <p className={cn(
                              "text-xs font-bold uppercase tracking-wider mb-1 line-clamp-2",
                              isCompleted ? "text-[#2B211B]" : "text-[#786B60]"
                            )}>
                              {prov.name}
                            </p>
                            {!isCompleted && (
                              <p className="text-[10px] text-[#A77B32] italic">
                                Belum ditemukan
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
