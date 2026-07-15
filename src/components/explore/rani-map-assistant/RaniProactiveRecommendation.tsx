import React from "react";
import { RaniResponse, RaniAction } from "@/types/rani";
import { ArrowRight, Info } from "lucide-react";

type Props = {
  response: RaniResponse | null;
  onAction: (action: RaniAction) => void;
};

export function RaniProactiveRecommendation({ response, onAction }: Props) {
  if (!response) return null;

  // We assume the first response block/reason codes are the recommendation
  // This component handles the "WHY THIS FITS" editorial annotation.

  return (
    <div className="flex flex-col gap-6 bg-[#F4EBDD] border border-[#DED3C3] p-6 lg:p-8 h-full relative">
      <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#FFFDFC] rounded-full mix-blend-overlay opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C85A3E] uppercase mb-4">Rekomendasi RANI</h4>
        
        <h3 className="font-serif text-3xl md:text-4xl text-[#292824] mb-3 leading-tight">
          {response.title}
        </h3>
        
        <p className="text-[15px] text-[#746F67] leading-relaxed mb-8">
          {response.summary}
        </p>

        {response.reasonCodes && response.reasonCodes.length > 0 && (
          <div className="mb-8">
            <h5 className="text-[9px] font-bold tracking-[0.2em] text-[#746F67] uppercase mb-3">Why This Fits</h5>
            <ul className="space-y-2">
              {response.reasonCodes.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[13px] text-[#292824]">
                  <span className="font-serif italic text-[#C85A3E] font-medium shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{formatReasonCode(reason)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-[#DED3C3] flex flex-col sm:flex-row items-center gap-3">
          {response.primaryAction && (
            <div className="w-full">
              <button
                onClick={() => onAction(response.primaryAction!)}
                className="w-full flex justify-between items-center px-6 py-4 bg-[#C85A3E] text-white font-medium hover:bg-[#A9452D] transition-colors shadow-sm group"
              >
                <span>{response.primaryAction.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[11px] text-[#746F67] mt-2 flex items-center gap-1.5">
                <Info className="w-3 h-3" />
                Membuka detail tujuan tanpa mengubah state peta saat ini.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Simple formatter for reason codes for presentation
function formatReasonCode(code: string): string {
  const map: Record<string, string> = {
    "MATCHES_EXPLICIT_QUERY": "Sesuai dengan pencarian aktifmu",
    "MATCHES_SELECTED_PROVINCE": "Berdasarkan wilayah yang sedang difokuskan",
    "MATCHES_ACTIVE_LAYER": "Relevan dengan layer informasi aktif",
    "MATCHES_ACTIVE_MODE": "Cocok dengan mode penjelajahanmu",
    "ADVANCES_NEXT_LEVEL": "Melengkapi target Passport berikutnya",
    "MATCHES_ACTIVE_REGION": "Berada di regional yang sedang disorot",
    "CONTINUES_ACTIVE_JOURNEY": "Langkah logis dari rutemu",
    "FLAGSHIP_CONTENT_DEPTH": "Memiliki cerita kurasi yang kaya",
    "SOURCE_COMPLETE": "Didukung oleh sumber dan data terpercaya",
    "EDITORIAL_FALLBACK": "Rekomendasi editorial standar",
  };
  return map[code] || "Sesuai dengan profil perjalananmu";
}
