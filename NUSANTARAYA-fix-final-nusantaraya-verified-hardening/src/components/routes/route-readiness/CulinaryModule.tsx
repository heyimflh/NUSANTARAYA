"use client";

import { Utensils, AlertTriangle, ArrowRight } from "lucide-react";
import type { RouteCulinaryItem } from "@/lib/routes/readiness/routeReadinessSchema";

interface CulinaryModuleProps {
  culinaryItems: RouteCulinaryItem[];
}

export function CulinaryModule({ culinaryItems }: CulinaryModuleProps) {
  if (!culinaryItems || culinaryItems.length === 0) return null;

  return (
    <div id="readiness-culinary" className="py-8 scroll-mt-24 border-b border-[#E8E0CE]">
      <div className="mb-6">
        <h3 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-2 flex items-center gap-3">
          <Utensils className="w-6 h-6 text-[#C75B3C]" />
          Jejak Rasa di Sepanjang Rute
        </h3>
        <p className="text-[#5C6470]">Rekomendasi kuliner yang relevan dengan hari dan lokasi persinggahan Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {culinaryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-[#E8E0CE] p-5 hover:border-[#C75B3C] transition-colors group flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#C75B3C] uppercase tracking-wider bg-[#F5E1D8] px-2 py-1 rounded">
                Hari {item.dayNumbers.join("-")}
              </span>
              <span className="text-xs text-[#5C6470]">{item.stopId}</span>
            </div>
            
            <h4 className="text-lg font-bold text-[#0D1B2A] mb-2">{item.culinaryId === "cul-gudeg" ? "Gudeg" : item.culinaryId === "cul-kopi-jos" ? "Kopi Jos" : item.culinaryId === "cul-sate-buntel" ? "Sate Buntel" : item.culinaryId === "cul-rawon" ? "Rawon" : "Sajian Lokal"}</h4>
            <p className="text-sm text-[#5C6470] mb-4 flex-grow">{item.contextNoteId}</p>

            {item.dietaryTags && item.dietaryTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.dietaryTags.map(tag => (
                  <span key={tag} className="text-xs text-[#6E785E] bg-[#E3E5DF] px-2 py-1 rounded-full">
                    {tag === "bisa-vegetarian" ? "Bisa Vegetarian" : tag === "daging-kambing" ? "Daging Kambing" : "Daging Sapi"}
                  </span>
                ))}
              </div>
            )}

            <button className="mt-auto text-sm font-semibold text-[#C75B3C] flex items-center gap-1 group-hover:gap-2 transition-all">
              Jelajahi di NusaRasa <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#FFFDF8] rounded-xl border border-[#E8E0CE] flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#C75B3C] shrink-0 mt-0.5" />
        <p className="text-xs text-[#5C6470] leading-relaxed">
          Komposisi, cara penyajian, status halal, dan risiko alergen dapat berbeda di setiap tempat. Konfirmasikan langsung kepada penjual atau penyedia makanan sesuai kebutuhanmu.
        </p>
      </div>
    </div>
  );
}
