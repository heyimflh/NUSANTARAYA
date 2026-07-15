import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExploreLayerId } from "@/data/exploreControls";
import { layerEditorialData } from "@/data/layers/layerEditorial";
import { LayerSelector } from "./LayerSelector";
import { LayerObservatory } from "./LayerObservatory";


interface ExploreByLayerSectionProps {
  activeLayer: ExploreLayerId;
  onLayerChange: (layer: ExploreLayerId) => void;
  onOpenSummary: (provinceId: string) => void;
}

export const ExploreByLayerSection: React.FC<ExploreByLayerSectionProps> = ({
  activeLayer,
  onLayerChange,
  onOpenSummary,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // If activeLayer is "all", preview falls back to "budaya" but without modifying shared state.
  const previewLayerId = activeLayer === "all" ? "budaya" : activeLayer;
  const currentLayerData = layerEditorialData[previewLayerId];

  const handleApplyToMap = () => {
    if (activeLayer === "all") {
      onLayerChange(previewLayerId);
    }
    
    // Smooth scroll to map
    const mapHeading = document.getElementById("interactive-map-heading");
    const mapSection = document.getElementById("interactive-map");
    
    if (mapSection) {
      const yOffset = -80; // approximate sticky navbar offset
      const y = mapSection.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: shouldReduceMotion ? "auto" : "smooth"
      });

      // Shift focus for accessibility without jumping
      if (mapHeading) {
        mapHeading.focus({ preventScroll: true });
      }
    }
  };

  const handleReset = () => {
    onLayerChange("all");
  };

  return (
    <section 
      id="explore-by-layer" 
      ref={sectionRef}
      aria-labelledby="explore-by-layer-heading"
      className="relative w-full bg-[rgba(255,253,248,0.20)] pt-24 pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        
        {/* Header */}
        <motion.div 
          className="mb-8 md:mb-14 max-w-3xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-nusaGold" />
            <p className="text-nusaNavy/60 font-inter font-bold text-[11px] md:text-xs uppercase tracking-[0.2em]">
              Jelajah Berdasarkan Minat
            </p>
          </div>
          
          <h2 id="explore-by-layer-heading" className="text-nusaNavy font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
            Enam Lensa untuk <br className="hidden md:block" />Melihat Nusantara
          </h2>
          <p className="text-nusaNavy/70 font-inter text-base md:text-lg leading-[1.6]">
            Pilih budaya, rasa, alam, sejarah, jalur rempah, atau masa depan—lalu temukan provinsi dan cerita yang terhubung melalui peta NUSANTARAYA.
            <span className="block mt-2 font-medium text-nusaNavy/90">Satu peta, enam cara memulai perjalanan.</span>
          </p>
        </motion.div>

        {/* Outer Shell for Desktop */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 xl:bg-white/80 xl:backdrop-blur-sm xl:border xl:border-[#E8E0CE] xl:rounded-[36px] xl:p-3 xl:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-colors duration-500 min-h-[580px]">
          
          {/* Vertical Selector (Desktop) / Horizontal Rail (Tablet/Mobile) */}
          <div className="xl:w-[22%] shrink-0 xl:pr-3 xl:py-3 z-20">
            <LayerSelector 
              activeLayer={activeLayer} 
              previewLayerId={previewLayerId}
              onSelect={onLayerChange} 
            />
          </div>

          {/* Active Observatory Stage */}
          <div className="xl:w-[78%] shrink-0 flex-1 z-10">
            <LayerObservatory 
              layerData={currentLayerData}
              isActive={activeLayer !== "all"}
              onApply={handleApplyToMap}
              onReset={handleReset}
              onOpenSummary={onOpenSummary}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};
