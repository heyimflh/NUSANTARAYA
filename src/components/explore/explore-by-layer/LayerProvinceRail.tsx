import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LayerProvinceRecommendation } from "@/types/explore-layer";
import { ArrowRight } from "lucide-react";

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
    <div className="w-full mt-6 lg:mt-10 border-t border-[#E8E0CE] pt-6 lg:pt-8">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <h4 className="text-nusaNavy font-inter font-semibold text-sm uppercase tracking-wider">
          Provinsi untuk Dimulai
        </h4>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-none snap-x snap-mandatory">
        {recommendations.map((rec, i) => (
          <motion.button
            key={rec.provinceId}
            onClick={() => onOpenSummary(rec.provinceId)}
            className="group flex flex-col text-left snap-start shrink-0 w-[220px] lg:w-[calc(25%-12px)] outline-none focus-visible:ring-2 focus-visible:ring-nusaNavy focus-visible:ring-offset-2 rounded-xl"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : i * 0.05 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-[#E8E0CE]">
              <Image
                src={rec.thumbnail}
                alt={`Thumbnail provinsi ${rec.provinceId}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 220px, 25vw"
              />
              <div className="absolute inset-0 bg-nusaNavy/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            
            <div className="flex items-start justify-between gap-2">
              <div>
                <h5 className="font-playfair font-bold text-nusaNavy text-lg capitalize mb-1">
                  {rec.provinceId.replace(/-/g, " ")}
                </h5>
                <p className="font-inter text-nusaNavy/70 text-xs line-clamp-1">
                  {rec.reason}
                </p>
              </div>
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#F8F4EA] flex items-center justify-center group-hover:bg-nusaGold group-hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
