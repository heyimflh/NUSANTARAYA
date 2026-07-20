"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { mapPreviewLayers, type FeaturedProvince, type MapLayerId } from "@/data/preview-map";
import FloatingProvinceCard from "./FloatingProvinceCard";
import { reportAppError } from "@/lib/errorMonitor";

interface MapPreviewCardProps {
  provinces: FeaturedProvince[];
  activeLayer: MapLayerId;
}

export default function MapPreviewCard({
  provinces,
  activeLayer,
}: MapPreviewCardProps) {
  const [hoveredProvince, setHoveredProvince] =
    useState<FeaturedProvince | null>(null);
  const [selectedProvince, setSelectedProvince] =
    useState<FeaturedProvince | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [hoveredMapKode, setHoveredMapKode] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Fetch SVG Content
  useEffect(() => {
    const controller = new AbortController();
    fetch("/assets/map/indonesia-fill.svg", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!text.includes("<svg") || text.includes("<script") || text.includes("javascript:")) {
           throw new Error("Invalid SVG content");
        }
        // Fix gradient units so it maps continuously across all paths
        const modifiedSvg = text.replace(
          '<linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="100%">',
          '<linearGradient id="fillGradient" x1="0" y1="0" x2="1200" y2="600" gradientUnits="userSpaceOnUse">'
        );
        setSvgContent(modifiedSvg);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        reportAppError(err instanceof Error ? err : new Error("Failed to load map SVG"), { source: "MapPreviewCard" });
        setError(true);
      });
    return () => controller.abort();
  }, []);

  const displayProvince =
    selectedProvince ||
    hoveredProvince ||
    provinces.find((p) => p.id === "di-yogyakarta") ||
    provinces[0];

  const handleMapMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as SVGElement;
    const path = target.closest("[data-prov]") as SVGElement | null;
    if (path) {
      const kode = path.getAttribute("data-prov") || "";
      setHoveredMapKode((prev) => (prev !== kode ? kode : prev));
      
      if (tooltipRef.current && mainContainerRef.current) {
        const rect = mainContainerRef.current.getBoundingClientRect();
        tooltipRef.current.style.left = `${e.clientX - rect.left + 20}px`;
        tooltipRef.current.style.top = `${e.clientY - rect.top - 30}px`;
        tooltipRef.current.style.opacity = "1";
        
        const textSpan = tooltipRef.current.querySelector('span');
        if (textSpan) textSpan.textContent = path.getAttribute("data-name") || "";
      }
    } else {
      setHoveredMapKode(null);
      if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
    }
  }, []);

  const handleMapMouseLeave = useCallback(() => {
    setHoveredMapKode(null);
    if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
  }, []);

  // Hover Break-Apart Logic
  useEffect(() => {
    if (!svgContainerRef.current || !svgContent) return;
    
    const paths = svgContainerRef.current.querySelectorAll<SVGPathElement>(".province-path");
    const baseMap = svgContainerRef.current.querySelector<SVGPathElement>("#indonesia-fill");
    
    if (baseMap) {
      baseMap.style.transition = "opacity 0.4s ease";
      baseMap.style.opacity = !!hoveredMapKode ? "0.3" : "1";
    }
    
    paths.forEach((path) => {
      const kode = path.getAttribute("data-prov") || "";
      const isHovered = kode === hoveredMapKode;
      
      // First time setup
      if (!path.hasAttribute("data-initialized")) {
        path.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        path.style.transformBox = "fill-box";
        path.style.transformOrigin = "center";
        path.style.cursor = "pointer";
        path.setAttribute("data-initialized", "true");
      }
      
      if (isHovered) {
        // Bring to front
        path.parentNode?.appendChild(path);
        
        path.style.transform = "scale(1.02)";
        path.style.fill = "url(#fillGradient)";
        path.style.fillOpacity = "1";
        path.style.stroke = "#FFFFFF";
        path.style.strokeWidth = "2.5";
        path.style.filter = "drop-shadow(0 15px 25px rgba(0,0,0,0.4))";
        path.style.opacity = "1";
      } else {
        path.style.transform = "none";
        path.style.fill = "transparent";
        path.style.fillOpacity = "1";
        path.style.stroke = "transparent";
        path.style.strokeWidth = "0";
        path.style.filter = "none";
        path.style.opacity = "1";
      }
    });
  }, [hoveredMapKode, svgContent]);

  const handleMapClick = () => {
    setSelectedProvince(null);
  };

  if (error) {
    return (
      <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] md:aspect-auto bg-white/40 backdrop-blur-sm border border-white/50 rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-[#10233F]/5">
        <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <p className="font-bold text-[#10233F]">Peta Gagal Dimuat</p>
      </div>
    );
  }

  return (
    <div 
      ref={mainContainerRef}
      className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] md:aspect-auto bg-white/40 backdrop-blur-sm border border-white/50 rounded-3xl overflow-hidden shadow-2xl shadow-[#10233F]/5"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D8B56D]/10 via-transparent to-transparent opacity-60"></div>

      {/* Map Container */}
      <div
        className="absolute inset-0 p-4 md:p-8 flex items-center justify-center cursor-pointer"
        onClick={handleMapClick}
      >
        <motion.div
          className="relative w-full max-w-[800px] aspect-[2/1]"
          animate={
            selectedProvince
              ? {
                  scale: 2.2,
                  x: `${(50 - selectedProvince.previewPosition.x) * 1.5}%`,
                  y: `${(50 - selectedProvince.previewPosition.y) * 1.5}%`,
                }
              : { scale: 1, x: 0, y: 0 }
          }
          transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
        >
          {/* Interactive SVG Map */}
          <div 
            ref={svgContainerRef}
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(216,181,109,0.4)] opacity-90 transition-all duration-700 ease-in-out hover:drop-shadow-[0_0_25px_rgba(216,181,109,0.7)] hover:scale-[1.01] flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:max-w-full"
            onMouseMove={handleMapMouseMove}
            onMouseLeave={handleMapMouseLeave}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />

          {/* Pins */}
          {provinces.map((province) => {
            const isLayerActive =
              activeLayer === "all" || province.category.includes(activeLayer);
            const isHovered = hoveredProvince?.id === province.id;
            const isSelected = selectedProvince?.id === province.id;
            const isActive = isHovered || isSelected;

            // DYNAMIC PIN ICON: If a specific filter is active and this province matches,
            // show the filter's icon instead of the province's default icon, to avoid UX confusion.
            const activeLayerData = mapPreviewLayers.find(l => l.id === activeLayer);
            const displayPinIcon = (activeLayer !== "all" && isLayerActive && activeLayerData) 
              ? activeLayerData.icon 
              : province.pinIcon;

            return (
              <button
                key={province.id}
                onMouseEnter={() => setHoveredProvince(province)}
                onMouseLeave={() => setHoveredProvince(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProvince(
                    province === selectedProvince ? null : province,
                  );
                }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10
                  ${isLayerActive ? "opacity-100 scale-100" : "opacity-30 scale-[0.6] grayscale hover:opacity-50 hover:grayscale-0 pointer-events-none blur-[0.5px]"}
                  ${isActive ? "z-20" : ""}
                `}
                style={{
                  left: `${province.previewPosition.x}%`,
                  top: `${province.previewPosition.y}%`,
                }}
              >
                <div className="relative group w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  {/* Magis Glow when hovered/selected */}
                  <div
                    className={`absolute w-[180%] h-[180%] bg-[#D8B56D] blur-xl rounded-full transition-opacity duration-500 pointer-events-none ${isActive ? "opacity-40" : "opacity-0 group-hover:opacity-20"}`}
                  />

                  {/* Pulse effect */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pin-ring"
                      className="absolute w-[160%] h-[160%] rounded-full border border-[#D8B56D]/50 bg-[#D8B56D]/10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-full border border-[#D8B56D] animate-ping opacity-40"
                        style={{ animationDuration: "2s" }}
                      ></span>
                    </motion.div>
                  )}
                  <motion.img
                    key={displayPinIcon} // Force re-render animation when icon changes
                    src={displayPinIcon}
                    alt={province.name}
                    className="relative w-full h-full"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={
                      isActive
                        ? {
                            y: -6,
                            scale: 1.2,
                            opacity: 1,
                            filter:
                              "drop-shadow(0 8px 12px rgba(216,181,109,0.5))",
                          }
                        : {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
                          }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Hover Tooltip (DOM-driven for performance) */}
      <div
        ref={tooltipRef}
        className="absolute z-[60] pointer-events-none opacity-0 bg-white/95 backdrop-blur-md text-[#10233F] px-4 py-2.5 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] font-bold text-sm md:text-base border border-[#D8B56D]/40 whitespace-nowrap transition-opacity duration-200 flex items-center gap-2"
        style={{ left: 0, top: 0 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#D8B56D] animate-pulse"></div>
        <span></span>
      </div>

      {/* Floating Card */}
      <FloatingProvinceCard
        province={displayProvince}
        isZoomed={!!selectedProvince}
        onClose={() => setSelectedProvince(null)}
      />

      {/* Badge 38 Provinsi */}
      {!selectedProvince && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-2 z-20"
        >
          <div className="w-2 h-2 rounded-full bg-[#D8B56D] animate-pulse"></div>
          <span className="text-xs font-bold text-[#10233F]">38 Provinsi</span>
        </motion.div>
      )}

      {/* Legend Map */}
      {!selectedProvince && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-gray-100 shadow-sm hidden lg:block z-20"
        >
          <h5 className="text-[10px] uppercase font-bold text-gray-500 mb-2 tracking-wider">
            Kategori Highlight
          </h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2 max-w-[200px]">
            {mapPreviewLayers.filter(layer => layer.id !== "all").map(layer => {
              const LAYER_COLORS: Record<string, string> = {
                budaya: "#8B2020",
                kuliner: "#C9A84C",
                alam: "#2D5A27",
                sejarah: "#8A5A44",
                rempah: "#D4691E",
                future: "#6B3FA0",
              };
              return (
                <div key={layer.id} className="flex items-center gap-1.5">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: LAYER_COLORS[layer.id] || "#10233F" }}
                  ></div>
                  <span className="text-[10px] font-medium">{layer.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
