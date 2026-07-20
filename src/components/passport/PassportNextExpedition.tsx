"use client";

import { PassportNextMilestone } from "@/hooks/usePassportProgressSummary";
import Link from "next/link";
import { ArrowUpRight, Map } from "lucide-react";
import Image from "next/image";
import { provinceMapData } from "@/data/provinces/provinces";

export const PassportNextExpedition = ({ milestone }: { milestone: PassportNextMilestone | null }) => {
  if (!milestone) {
    return (
      <section className="mt-16 text-center">
        <div className="bg-[#FFFCF6] border border-[#DCCDB8] rounded-xl p-12">
          <h2 className="text-2xl font-serif text-[#2B211B] font-bold mb-4">Seluruh Provinsi Telah Tercatat</h2>
          <p className="text-[#3A281F]">
            Telusuri kembali koleksi, lanjutkan rute tersimpan, atau buat ekspedisi tematik baru.
          </p>
        </div>
      </section>
    );
  }

  const province = provinceMapData.find(p => p.id === milestone.provinceId);
  const heroImage = province?.assets?.hero || "/assets/placeholders/hero.webp"; // Fallback to safe asset

  return (
    <section className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-serif text-[#2B211B] font-bold">Keberangkatan Berikutnya Sudah Menunggu</h2>
        <div className="h-[1px] flex-1 bg-[#DCCDB8]" />
      </div>

      <div className="bg-[#FFFCF6] border border-[#DCCDB8] rounded-2xl p-2 relative overflow-hidden shadow-sm">
        <div className="flex flex-col lg:flex-row bg-[#F3EBDD] rounded-xl overflow-hidden">
          
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#A77B32] text-[#FFF9EE] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Rekomendasi
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#786B60] font-bold">
                {milestone.regionId.replace("-", " ")}
              </span>
            </div>
            
            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#2B211B] mb-4">
              {milestone.title}
            </h3>
            
            <p className="text-[#3A281F] text-base lg:text-lg mb-8 leading-relaxed max-w-lg">
              {milestone.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={milestone.href || `/provinsi/${milestone.provinceId}`}
                className="group relative inline-flex items-center justify-between bg-[#B85C38] text-[#FFF9EE] px-6 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden active:scale-95 transition-transform"
              >
                <span className="relative z-10">{milestone.ctaLabel}</span>
                <div className="relative z-10 w-7 h-7 ml-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#B85C38] transition-colors">
                  <ArrowUpRight size={14} className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform" />
                </div>
              </Link>
              <Link 
                href={`/routes`} 
                className="inline-flex items-center gap-2 text-[#7A302B] font-bold tracking-widest uppercase text-xs hover:bg-[#E5D7C3] px-6 py-3.5 rounded-full transition-colors"
              >
                <Map size={16} /> Buat Rute ke Sini
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 h-64 lg:h-auto relative min-h-[300px]">
            <Image
              src={heroImage}
              alt={milestone.title}
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src = "/assets/noise.webp";
              }}
            />
            {/* Overlay gradient to blend with the parchment */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#F3EBDD] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
