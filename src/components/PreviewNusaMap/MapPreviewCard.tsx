"use client";

import { FeaturedProvince } from "@/data/preview-map";
import { useState } from "react";
import FloatingProvinceCard from "./FloatingProvinceCard";
import { motion, AnimatePresence } from "framer-motion";

interface MapPreviewCardProps {
  provinces: FeaturedProvince[];
  activeLayer: string;
}

export default function MapPreviewCard({ provinces, activeLayer }: MapPreviewCardProps) {
  const [hoveredProvince, setHoveredProvince] = useState<FeaturedProvince | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<FeaturedProvince | null>(null);

  const displayProvince = selectedProvince || hoveredProvince || provinces.find((p) => p.id === "di-yogyakarta") || provinces[0];

  const handleMapClick = () => {
    setSelectedProvince(null);
  };

  return (
    <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] md:aspect-auto bg-white/40 backdrop-blur-sm border border-white/50 rounded-3xl overflow-hidden shadow-2xl shadow-[#10233F]/5">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D8B56D]/10 via-transparent to-transparent opacity-60"></div>
      
      {/* Map Container */}
      <div 
        className="absolute inset-0 p-4 md:p-8 flex items-center justify-center cursor-pointer"
        onClick={handleMapClick}
      >
        <motion.div 
          className="relative w-full h-full max-w-[800px]"
          animate={
            selectedProvince 
              ? { 
                  scale: 2.2, 
                  x: `${(50 - selectedProvince.previewPosition.x) * 1.5}%`, 
                  y: `${(50 - selectedProvince.previewPosition.y) * 1.5}%` 
                } 
              : { scale: 1, x: 0, y: 0 }
          }
          transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
        >
          <img 
            src="/assets/map/indonesia-fill.svg" 
            alt="Peta Indonesia" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(216,181,109,0.4)] opacity-90 transition-all duration-700 ease-in-out hover:drop-shadow-[0_0_25px_rgba(216,181,109,0.7)] hover:scale-[1.01]"
          />
          
          {/* Pins */}
          {provinces.map((province) => {
            const isLayerActive = activeLayer === "all" || province.category.includes(activeLayer as any);
            const isHovered = hoveredProvince?.id === province.id;
            const isSelected = selectedProvince?.id === province.id;
            const isActive = isHovered || isSelected;
            
            return (
              <button
                key={province.id}
                onMouseEnter={() => setHoveredProvince(province)}
                onMouseLeave={() => setHoveredProvince(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProvince(province === selectedProvince ? null : province);
                }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 
                  ${isLayerActive ? "opacity-100 scale-100" : "opacity-30 scale-75"}
                  ${isActive ? "z-20" : ""}
                `}
                style={{
                  left: `${province.previewPosition.x}%`,
                  top: `${province.previewPosition.y}%`,
                }}
              >
                <div className="relative group w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  {/* Magis Glow when hovered/selected */}
                  <div className={`absolute w-[180%] h-[180%] bg-[#D8B56D] blur-xl rounded-full transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'}`} />
                  
                  {/* Pulse effect */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pin-ring"
                      className="absolute w-[160%] h-[160%] rounded-full border border-[#D8B56D]/50 bg-[#D8B56D]/10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <span className="absolute inset-0 rounded-full border border-[#D8B56D] animate-ping opacity-40" style={{ animationDuration: '2s' }}></span>
                    </motion.div>
                  )}
                  <motion.img 
                    src={province.pinIcon} 
                    alt={province.name}
                    className="relative w-full h-full"
                    animate={isActive ? { y: -6, scale: 1.2, filter: "drop-shadow(0 8px 12px rgba(216,181,109,0.5))" } : { y: 0, scale: 1, filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>
      
      {/* Floating Card */}
      <FloatingProvinceCard province={displayProvince} isZoomed={!!selectedProvince} onClose={() => setSelectedProvince(null)} />
      
      {/* Badge 38 Provinsi */}
      {!selectedProvince && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-2 z-20"
        >
          <div className="w-2 h-2 rounded-full bg-[#D8B56D] animate-pulse"></div>
          <span className="text-xs font-bold text-[#10233F]">38 Provinsi</span>
        </motion.div>
      )}
      
      {/* Legend Map */}
      {!selectedProvince && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-gray-100 shadow-sm hidden lg:block z-20"
        >
          <h5 className="text-[10px] uppercase font-bold text-gray-500 mb-2 tracking-wider">Kategori Highlight</h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2 max-w-[200px]">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#8B2020]"></div><span className="text-[10px] font-medium">Budaya</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#C9A84C]"></div><span className="text-[10px] font-medium">Kuliner</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#2D5A27]"></div><span className="text-[10px] font-medium">Alam</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#6B3FA0]"></div><span className="text-[10px] font-medium">Future</span></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
