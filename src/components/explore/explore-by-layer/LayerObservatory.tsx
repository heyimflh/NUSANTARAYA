import React, { useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExploreLayerDefinition } from "@/types/explore-layer";
import { LayerProvinceRail } from "./LayerProvinceRail";
import { useLayerRecommendations } from "@/hooks/useLayerRecommendations";
import { countMatchingProvinces } from "@/lib/provinceMatch";
import { provinceMapData } from "@/data/provinces/provinces";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map } from "lucide-react";

interface LayerObservatoryProps {
  layerData: ExploreLayerDefinition;
  isActive: boolean;
  onApply: () => void;
  onReset: () => void;
  onOpenSummary: (provinceId: string) => void;
}

export const LayerObservatory: React.FC<LayerObservatoryProps> = ({
  layerData,
  isActive,
  onApply,
  onReset,
  onOpenSummary,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const recommendations = useLayerRecommendations(layerData.id, 4);

  const resultCount = useMemo(() => {
    return countMatchingProvinces(provinceMapData, "", layerData.id, false);
  }, [layerData.id]);

  return (
    <div className="relative w-full h-full bg-white/90 backdrop-blur-md border border-[#E8E0CE] rounded-[32px] p-6 lg:p-10 xl:p-12 shadow-[0_28px_90px_rgba(13,27,42,0.06)] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={layerData.id}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.4 }}
          className="flex flex-col h-full"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Visual Mosaic / Left Side */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F4EA] border border-[#E8E0CE]">
                {layerData.visualAsset ? (
                  <Image
                    src={layerData.visualAsset}
                    alt={`Ilustrasi layer ${layerData.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ background: `linear-gradient(135deg, ${layerData.accentColor}, transparent)` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-nusaNavy/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-1 drop-shadow-md">
                    {layerData.label}
                  </h3>
                  <p className="font-inter font-medium text-sm md:text-base text-white/90 drop-shadow-md line-clamp-2">
                    {layerData.promise}
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Content / Right Side */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="font-inter text-nusaNavy/80 text-base md:text-lg leading-relaxed mb-6">
                {layerData.description}
              </p>

              {/* Signals */}
              <div className="flex flex-wrap gap-2 mb-8">
                {layerData.signals.map((signal, idx) => (
                  <div 
                    key={idx}
                    className="px-3 py-1.5 rounded-full border border-[#E8E0CE] bg-[#F8F4EA] text-nusaNavy font-inter text-xs md:text-sm font-medium"
                    style={{ borderLeftColor: layerData.accentColor, borderLeftWidth: 3 }}
                  >
                    {signal}
                  </div>
                ))}
              </div>

              {/* Result Summary & CTA */}
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="font-inter text-xs font-semibold text-nusaNavy/50 uppercase tracking-wider">
                      Terhubung
                    </span>
                    <span 
                      className="font-playfair font-bold text-2xl"
                      style={{ color: layerData.accentColor }}
                      aria-live="polite"
                    >
                      {resultCount} Provinsi
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={onApply}
                    className="flex-1 bg-nusaNavy text-white hover:bg-nusaNavy/90 group"
                  >
                    {layerData.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  {isActive && (
                    <Button 
                      variant="outline"
                      onClick={onReset}
                      className="border-[#E8E0CE] text-nusaNavy hover:bg-[#F8F4EA]"
                    >
                      <Map className="w-4 h-4 mr-2" />
                      Lihat Semua Cerita
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
          </div>

          <LayerProvinceRail 
            recommendations={recommendations} 
            onOpenSummary={onOpenSummary} 
          />

        </motion.div>
      </AnimatePresence>
    </div>
  );
};
