import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LayerProvinceRecommendation } from "@/types/explore-layer";
import { ArrowRight, Sparkles } from "lucide-react";

interface LayerProvinceRailProps {
  recommendations: LayerProvinceRecommendation[];
  onOpenSummary: (provinceId: string) => void;
}

export const LayerProvinceRail: React.FC<LayerProvinceRailProps> = ({
  recommendations,
  onOpenSummary,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="w-full mt-auto pt-6 lg:pt-8 border-t border-[#E8E0CE]/60">
      <div className="flex items-center justify-between mb-4 lg:mb-5">
        <h4 className="text-nusaNavy font-inter font-semibold text-xs md:text-sm uppercase tracking-wider opacity-80">
          Titik Mulai Eksplorasi
        </h4>
      </div>

      <div className="flex overflow-x-auto gap-3 lg:gap-4 pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
        {recommendations.map((rec, i) => (
          <motion.button
            key={rec.provinceId}
            onClick={() => onOpenSummary(rec.provinceId)}
            className="group flex flex-col text-left snap-start shrink-0 w-[240px] lg:w-[calc(25%-12px)] outline-none focus-visible:ring-2 focus-visible:ring-nusaNavy focus-visible:ring-offset-4 rounded-xl"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : 0.4,
              delay: shouldReduceMotion ? 0 : i * 0.045,
              ease: [0.22, 1, 0.36, 1]
            }}
            aria-label={`Lihat provinsi ${rec.provinceName}`}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-[#F8F4EA] border border-[#E8E0CE]/50">
              <Image
                src={rec.thumbnail}
                alt={rec.provinceName}
                fill
                className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 240px, 25vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-nusaNavy/10 group-hover:bg-transparent transition-colors duration-300" />
              
              {rec.isFlagship && (
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-nusaGold" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-nusaNavy">Flagship</span>
                </div>
              )}
            </div>
            
            <div className="flex items-start justify-between gap-3 w-full">
              <div className="flex-1 min-w-0">
                <p className="font-inter text-[10px] uppercase tracking-wider text-nusaNavy/60 font-semibold mb-1 truncate">
                  {rec.region}
                </p>
                <h5 className="font-playfair font-bold text-nusaNavy text-base md:text-lg mb-1 truncate">
                  {rec.provinceName}
                </h5>
                <p className="font-inter text-nusaNavy/70 text-xs md:text-sm line-clamp-2 leading-relaxed">
                  {rec.reason}
                </p>
              </div>
              <div className="shrink-0 mt-3 w-7 h-7 rounded-full border border-[#E8E0CE] bg-white flex items-center justify-center group-hover:bg-nusaNavy group-hover:text-white group-hover:border-nusaNavy transition-all duration-300 shadow-sm">
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-[2px]" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
