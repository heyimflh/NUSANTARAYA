import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getRelatedProvinces } from "@/lib/recommendation/relatedProvinces";

interface RelatedProvincesProps {
  currentProvinceId: string;
}

export function RelatedProvinces({ currentProvinceId }: RelatedProvincesProps) {
  const related = getRelatedProvinces(currentProvinceId, 3);

  if (related.length === 0) return null;

  return (
    <section className="w-full py-16 border-t border-[#DED3C3]/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-nusaNavy mb-2">Lanjutkan Penjelajahan</h3>
          <p className="text-sm text-nusaNavy/70">Provinsi lain yang mungkin menarik bagi Anda</p>
        </div>
        <Link 
          href="/explore"
          className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nusaGold hover:text-nusaNavy transition-colors"
        >
          Kembali ke Peta <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((province) => (
          <Link 
            href={`/provinsi/${province.id}`}
            key={province.id}
            className="group block relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-64 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={province.coverAsset} 
              alt={province.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
              <div className="flex items-center gap-1.5 text-nusaGold mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <MapPin size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{province.reason}</span>
              </div>
              <h4 className="text-xl font-bold font-serif text-white group-hover:text-nusaGold transition-colors">
                {province.name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 md:hidden flex justify-center">
        <Link 
          href="/explore"
          className="flex items-center justify-center gap-2 w-full py-4 border border-[#DED3C3] rounded-full text-xs font-bold uppercase tracking-widest text-nusaNavy hover:bg-[#DED3C3]/20 transition-colors"
        >
          Kembali ke Peta Nusantara <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
