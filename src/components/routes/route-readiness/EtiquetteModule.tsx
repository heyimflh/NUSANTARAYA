"use client";

import { BookOpen, Info } from "lucide-react";
import type { RouteEtiquetteItem } from "@/lib/routes/readiness/routeReadinessSchema";

interface EtiquetteModuleProps {
  etiquetteItems: RouteEtiquetteItem[];
}

export function EtiquetteModule({ etiquetteItems }: EtiquetteModuleProps) {
  if (!etiquetteItems || etiquetteItems.length === 0) return null;

  return (
    <div id="readiness-etiquette" className="py-8 scroll-mt-24 border-b border-[#E8E0CE]">
      <div className="mb-6">
        <h3 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-2 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-[#2D5A27]" />
          Etika yang Perlu Diketahui
        </h3>
        <p className="text-[#5C6470]">Konteks dan variasi lokal agar perjalanan Anda tetap nyaman dan menghormati lingkungan setempat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {etiquetteItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-[#E8E0CE] p-5 flex gap-4">
            <div className="shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-[#E3E5DF] flex items-center justify-center">
                <Info className="w-4 h-4 text-[#2D5A27]" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D1B2A] mb-1">{item.guidanceId}</h4>
              <p className="text-sm text-[#5C6470] mb-3">{item.whyItMattersId}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2D5A27] bg-[#E3E5DF]/50 px-2 py-1 rounded">
                  {item.contextType === "sacred-place" ? "Tempat Suci" : item.contextType === "environment" ? "Lingkungan" : "Fotografi"}
                </span>
                {item.sourceRefs.length > 0 && (
                  <span className="text-xs text-[#5C6470] underline cursor-pointer">Lihat Sumber</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#FFFDF8] rounded-xl border border-[#E8E0CE]">
        <p className="text-xs text-[#5C6470] leading-relaxed text-center">
          Panduan ini bersifat kontekstual dan tidak mewakili seluruh komunitas. Ikuti arahan tuan rumah, pengelola tempat, atau sumber resmi setempat.
        </p>
      </div>
    </div>
  );
}
