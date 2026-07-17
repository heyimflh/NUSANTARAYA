import React, { useState } from "react";
import Image from "next/image";
import { ListPlus } from "lucide-react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { PresetRouteArtwork } from "./PresetRouteArtwork";
import { PresetRouteRibbon } from "./PresetRouteRibbon";

interface PresetRouteCardProps {
  route: RoutePresetDefinition;
  isActive?: boolean;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
  className?: string;
}

export function PresetRouteCard({ route, isActive, onViewRoute, onPrefill, className = "" }: PresetRouteCardProps) {
  const [imgError, setImgError] = useState(false);

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    onViewRoute(route);
  };

  const handlePrefill = (e: React.MouseEvent) => {
    e.preventDefault();
    onPrefill(route);
  };

  const showFallback = !route.heroImage || imgError;

  return (
    <article 
      aria-current={isActive ? "true" : undefined}
      className={`group relative w-full bg-[#FFFCF7] rounded-[20px] overflow-hidden border ${isActive ? "border-[#C89A3D] ring-2 ring-[#C89A3D] ring-offset-2 ring-offset-[#F4EFE6]" : "border-[#E8E0CE]"} shadow-sm flex flex-col transition-all motion-reduce:transition-none hover:shadow-[0_8px_24px_rgba(42,36,31,0.06)] hover:-translate-y-1 motion-reduce:hover:translate-y-0 focus-within:ring-2 focus-within:ring-[#C89A3D] ${className}`}
    >
      {isActive && (
        <div className="absolute top-0 right-0 z-20 bg-[#C89A3D] text-[#2A241F] text-[10px] font-bold px-3 py-1 rounded-bl-lg">
          SEDANG DILIHAT
        </div>
      )}
      
      {/* Visual Side */}
      <div className="w-full relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-[#F4EFE6] border-b border-[#E8E0CE]">
        <div className="absolute inset-0 transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100">
          {!showFallback && route.heroImage ? (
            <Image
              src={route.heroImage.src}
              alt={route.heroImage.alt}
              fill
              className={`object-cover ${route.heroImage.focalPosition || "object-center"}`}
              onError={() => setImgError(true)}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <PresetRouteArtwork 
              config={route.artworkConfig} 
              alt={`Ilustrasi rute ${route.title}`}
            />
          )}
        </div>
        
        {route.badge && (
          <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E8E0CE] text-[10px] font-bold uppercase tracking-wider text-[#2A241F] shadow-sm">
            {route.badge}
          </div>
        )}
        <div className="absolute bottom-3 right-3 z-10 bg-[#2A241F]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-sm">
          {route.durationDays} Hari
        </div>
      </div>

      {/* Content Side */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Eyebrow & Stats */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#71675E] mb-2">
          <span className="text-[#C89A3D]">{route.regionId.replace(/-/g, " ")}</span>
          <span aria-hidden="true" className="text-[#E8E0CE]">•</span>
          <span className="truncate max-w-[150px]">{route.interests.slice(0, 2).join(", ")}</span>
        </div>

        {/* Title & Promise */}
        <h3 className="font-playfair text-xl font-medium text-[#2A241F] mb-3 leading-snug group-hover:text-[#B94C32] transition-colors line-clamp-2">
          <a href={`#${route.id}`} onClick={handleView} className="outline-none before:absolute before:inset-0 before:z-0">
            {route.title}
          </a>
        </h3>
        
        <p className="text-sm text-[#71675E] leading-relaxed mb-5 line-clamp-2 relative z-10">
          {route.summary}
        </p>

        {/* Ribbon & Metadata */}
        <div className="mb-5 relative z-10 scale-95 origin-left">
          <PresetRouteRibbon stops={route.stops} isInverse={false} />
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#71675E] mb-6 relative z-10">
          <div><span className="font-medium text-[#2A241F]">Ritme:</span> {route.paceLabel}</div>
          <span className="text-[#E8E0CE] hidden xs:inline">•</span>
          <div><span className="font-medium text-[#2A241F]">Budget:</span> {route.budgetLabel}</div>
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3 relative z-10">
          <button
            onClick={handleView}
            className="flex-1 px-4 py-2.5 bg-[#F4EFE6] hover:bg-[#E8E0CE] text-[#2A241F] border border-[#E8E0CE] text-xs sm:text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#C89A3D]"
            aria-label={`Lihat detail rute ${route.title}`}
          >
            <span>Lihat Rute</span>
          </button>
          
          <button
            onClick={handlePrefill}
            className="flex-1 px-4 py-2.5 bg-transparent hover:bg-[#F4EFE6] border border-[#C89A3D] text-[#2A241F] text-xs sm:text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#C89A3D]"
            aria-label={`Gunakan preferensi dari rute ${route.title} ke form`}
          >
            <ListPlus className="w-4 h-4 text-[#C89A3D]" />
            <span>Gunakan</span>
          </button>
        </div>
      </div>
    </article>
  );
}
