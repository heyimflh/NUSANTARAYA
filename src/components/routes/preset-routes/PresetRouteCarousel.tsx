import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { PresetRouteCard } from "./PresetRouteCard";

interface PresetRouteCarouselProps {
  routes: RoutePresetDefinition[];
  activePresetId?: string;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
  hiddenOnDesktopCount?: number;
}

export function PresetRouteCarousel({ routes, activePresetId, onViewRoute, onPrefill, hiddenOnDesktopCount = 0 }: PresetRouteCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2); // 2px buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [routes]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const clientWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (routes.length === 0) return null;

  return (
    <div className="relative w-full mt-12 mb-8">
      {/* Header & Controls */}
      <div className="flex items-end justify-between mb-6 px-4 md:px-0">
        <div>
          <h4 className="text-xl md:text-2xl font-playfair font-medium text-[#2A241F]">
            Eksplorasi Rute Lainnya
          </h4>
          <p className="text-sm text-[#71675E] mt-1">
            Geser untuk melihat inspirasi perjalanan tambahan.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Geser ke kiri"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E0CE] bg-[#FFFCF7] text-[#2A241F] transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F4EFE6] focus:outline-none focus:ring-2 focus:ring-[#C89A3D]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Geser ke kanan"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E8E0CE] bg-[#FFFCF7] text-[#2A241F] transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F4EFE6] focus:outline-none focus:ring-2 focus:ring-[#C89A3D]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track - Break out of parent padding on mobile */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {routes.map((route, index) => (
          <div 
            key={route.id} 
            className={`snap-start snap-always shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] ${index < hiddenOnDesktopCount ? "lg:hidden" : ""}`}
          >
            <PresetRouteCard 
              route={route}
              isActive={route.id === activePresetId}
              onViewRoute={onViewRoute}
              onPrefill={onPrefill}
              className="h-full"
            />
          </div>
        ))}
      </div>

      {/* CSS to hide scrollbar for webkit */}
      <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
    </div>
  );
}

