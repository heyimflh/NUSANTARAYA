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
  onOpenAtlas: (provinceId: string) => void;
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
    // If we are showing a preview (activeLayer === "all"), apply it first
    if (activeLayer === "all") {
      onLayerChange(previewLayerId);
    }
    
    // Smooth scroll to map
    const mapHeading = document.getElementById("interactive-map-heading") || document.getElementById("interactive-map");
    if (mapHeading) {
      // Find sticky offset if needed, or just let scrollIntoView handle it. 
      // Many projects have sticky navbars, scrollIntoView might hide under it.
      // Assuming CSS scroll-margin-top is set on the map ID or we do custom offset.
      mapHeading.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
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
      className="relative w-full bg-background pt-24 pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        
        {/* Header */}
        <motion.div 
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-nusaNavy/60 font-inter font-semibold text-xs md:text-sm uppercase tracking-wider mb-3">
            Jelajah Berdasarkan Minat
          </p>
          <h2 id="explore-by-layer-heading" className="text-nusaNavy font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Enam Lensa untuk Melihat Nusantara
          </h2>
          <p className="text-nusaNavy/80 font-inter text-base md:text-lg max-w-2xl leading-relaxed">
            Pilih budaya, rasa, alam, sejarah, jalur rempah, atau masa depan—lalu temukan provinsi dan cerita yang terhubung melalui peta NUSANTARAYA.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          
          {/* Vertical Selector (Desktop) / Horizontal Rail (Tablet/Mobile) */}
          <div className="lg:w-[22%] shrink-0">
            <LayerSelector 
              activeLayer={activeLayer} 
              previewLayerId={previewLayerId}
              onSelect={onLayerChange} 
            />
          </div>

          {/* Active Observatory Stage */}
          <div className="lg:w-[78%] shrink-0 flex-1 min-h-[600px] lg:min-h-[680px]">
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
