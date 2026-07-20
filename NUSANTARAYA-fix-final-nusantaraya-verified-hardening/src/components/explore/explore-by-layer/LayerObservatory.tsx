import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExploreLayerDefinition } from "@/types/explore-layer";
import { LayerProvinceRail } from "./LayerProvinceRail";
import { useLayerRecommendations } from "@/hooks/useLayerRecommendations";
import { countMatchingProvinces } from "@/lib/provinceMatch";
import { provinceMapData } from "@/data/provinces/provinces";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map, RefreshCcw } from "lucide-react";
import * as Icons from "lucide-react";


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

  const [imageErrorId, setImageErrorId] = useState<string | null>(null);
  const imageError = imageErrorId === layerData.id;

  const resultCount = useMemo(() => {
    return countMatchingProvinces(provinceMapData, "", layerData.id, false);
  }, [layerData.id]);

  const iconName = layerData.icon as keyof typeof Icons;
  const IconComponent = (Icons[iconName] || Icons.Map) as React.ElementType;

  // Animation variants
  const ease = [0.22, 1, 0.36, 1] as const;
  
  const contentVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    animate: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.1 : 0.4, ease } },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : -8, transition: { duration: shouldReduceMotion ? 0.1 : 0.25, ease } }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: shouldReduceMotion ? 1 : 1.025 },
    animate: { opacity: 1, scale: 1, transition: { duration: shouldReduceMotion ? 0.12 : 0.4, ease } },
    exit: { opacity: 0, scale: 1, transition: { duration: shouldReduceMotion ? 0.1 : 0.25, ease } }
  };

  return (
    <div className="relative w-full h-full bg-white/95 backdrop-blur-xl border border-[#E8E0CE] rounded-[28px] lg:rounded-[32px] p-6 lg:p-8 shadow-[0_20px_60px_-15px_rgba(13,27,42,0.05)] overflow-hidden flex flex-col">
      
      {/* Ambient Radial Glow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`glow-${layerData.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{
            background: `radial-gradient(circle at 70% -20%, ${layerData.accentColor}, transparent 70%)`
          }}
        />
      </AnimatePresence>

      {/* Decorative Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/heritage-future/old-map-texture.webp')", backgroundSize: "cover" }}
      />

      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 flex-1">
        
        {/* Visual Stage / Left Side */}
        <div className="lg:w-[50%] shrink-0 flex flex-col justify-center relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F4EA] border border-[#E8E0CE] shadow-inner group">
            
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`visual-${layerData.id}`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                {!imageError && layerData.visualAsset ? (
                  <Image
                    src={layerData.visualAsset}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    quality={90}
                    onError={() => setImageErrorId(layerData.id)}
                  />
                ) : (
                  // Fallback State
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{ background: `linear-gradient(135deg, ${layerData.accentColor}, transparent)` }}
                    />
                    <IconComponent className="w-24 h-24 text-nusaNavy/10 absolute -right-4 -bottom-4" />
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center border border-[#E8E0CE]">
                       <IconComponent className="w-8 h-8" style={{ color: layerData.accentColor }} />
                    </div>
                  </div>
                )}
                
                {/* Overlay Gradient Scrim */}
                <div 
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.68) 34%, rgba(10, 10, 10, 0.18) 66%, transparent 100%)"
                  }}
                />
                
                {/* Visual Typography */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6 lg:p-7 max-w-[85%] flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className="w-4 h-4" style={{ color: layerData.accentColor }} />
                    <span 
                      className="font-inter font-semibold text-[10px] uppercase tracking-widest"
                      style={{ color: "#FFFDF8" }}
                    >
                      0{layerData.index} <span style={{ color: layerData.accentColor }}>/</span> 06
                    </span>
                  </div>
                  <h3 
                    className="font-playfair text-3xl md:text-4xl font-bold mb-1 leading-tight line-clamp-2"
                    style={{ 
                      color: "#FFFDF8",
                      textShadow: "0 2px 8px rgba(0,0,0,.75), 0 8px 24px rgba(0,0,0,.45)" 
                    }}
                  >
                    {layerData.label}
                  </h3>
                  <p 
                    className="font-inter font-medium text-sm line-clamp-2"
                    style={{ 
                      color: "rgba(255, 253, 248, 0.90)",
                      textShadow: "0 2px 8px rgba(0,0,0,.72)" 
                    }}
                  >
                    {layerData.promise}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Editorial Content / Right Side */}
        <div className="lg:w-[50%] flex flex-col justify-center py-2 lg:py-6 relative z-10">
          
          {/* Active Status for 'All' */}
          {!isActive && (
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F4EA] border border-[#E8E0CE] text-xs font-semibold text-nusaNavy/70 w-fit">
              <Map className="w-3.5 h-3.5" />
              Semua Cerita Sedang Ditampilkan
            </div>
          )}

          <AnimatePresence mode="popLayout">
            <motion.div
              key={`text-${layerData.id}`}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col"
            >
              <p className="font-inter text-nusaNavy/80 text-[15px] md:text-[17px] leading-[1.6] mb-6 lg:mb-8">
                {layerData.description}
              </p>

              {/* Signals */}
              <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
                {layerData.signals.map((signal, idx) => (
                  <motion.div 
                    key={`${layerData.id}-sig-${idx}`}
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.1 + (idx * 0.035), duration: 0.3 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E0CE] bg-[#FFFDF8] text-nusaNavy font-inter text-xs md:text-sm font-medium shadow-sm"
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: layerData.accentColor }} 
                    />
                    {signal}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Result Summary & Actions */}
          <div className="mt-auto flex flex-col gap-5 border-t border-[#E8E0CE]/60 pt-5 lg:pt-6">
            
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`count-${layerData.id}`}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex flex-col mb-1">
                  <span className="font-inter text-[11px] font-bold text-nusaNavy/50 uppercase tracking-widest mb-1">
                    Terhubung
                  </span>
                  <span 
                    className="font-playfair font-bold text-3xl md:text-4xl leading-none"
                    style={{ color: layerData.accentColor }}
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {resultCount} Provinsi
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col xl:flex-row xl:items-center gap-3">
              <Button 
                aria-label={layerData.ctaAriaLabel}
                onClick={onApply}
                className="group min-h-12 w-full xl:flex-1 justify-between rounded-[14px] px-5 lg:px-6 text-sm font-semibold whitespace-nowrap text-[#FFFDF8] border-0 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md active:scale-[0.985] active:translate-y-0"
                style={{ backgroundColor: layerData.ctaBackground }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = layerData.ctaHoverBackground }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = layerData.ctaBackground }}
              >
                <span className="truncate">{layerData.ctaShortLabel}</span>
                <ArrowRight aria-hidden="true" className="ml-4 w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              
              {isActive && (
                <Button 
                  variant="ghost"
                  onClick={onReset}
                  className="xl:shrink-0 min-h-11 rounded-xl px-4 text-sm font-medium text-[#3F3A34] hover:bg-black/[0.04] focus-visible:ring-2 bg-transparent border-0"
                >
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Lihat Semua Cerita
                </Button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Recommendations strip */}
      <LayerProvinceRail 
        recommendations={recommendations} 
        onOpenSummary={onOpenSummary} 
      />

    </div>
  );
};
