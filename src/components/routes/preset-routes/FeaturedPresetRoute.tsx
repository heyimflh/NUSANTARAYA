import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ListPlus } from "lucide-react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { PresetRouteArtwork } from "./PresetRouteArtwork";
import { PresetRouteRibbon } from "./PresetRouteRibbon";

interface FeaturedPresetRouteProps {
  route: RoutePresetDefinition;
  isActive?: boolean;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
}

export function FeaturedPresetRoute({ route, isActive, onViewRoute, onPrefill }: FeaturedPresetRouteProps) {
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
      className={`group relative w-full h-[500px] md:h-[600px] bg-white/70 backdrop-blur-md rounded-[24px] md:rounded-[32px] overflow-hidden border ${isActive ? "border-[#C89A3D] ring-2 ring-[#C89A3D] ring-offset-2 ring-offset-[#F4EFE6]" : "border-[#E8E0CE]"} shadow-[0_8px_32px_rgba(42,36,31,0.06)] flex flex-col justify-end transition-all motion-reduce:transition-none hover:shadow-[0_12px_40px_rgba(42,36,31,0.12)] focus-within:ring-2 focus-within:ring-[#C89A3D]`}
    >
      {isActive && (
        <div className="absolute top-0 right-0 z-30 bg-[#C89A3D] text-[#2A241F] text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-sm">
          SEDANG DILIHAT
        </div>
      )}

      {/* Background Image / Artwork */}
      <div className="absolute inset-0 z-0 transition-transform duration-1000 motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100">
        {!showFallback && route.heroImage ? (
          <Image
            src={route.heroImage.src}
            alt={route.heroImage.alt}
            fill
            priority
            className={`object-cover ${route.heroImage.focalPosition || "object-center"}`}
            onError={() => setImgError(true)}
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
        ) : (
          <PresetRouteArtwork 
            config={route.artworkConfig} 
            alt={`Ilustrasi rute ${route.title}`}
          />
        )}
      </div>

      {/* Gradient Overlays for Readability — stronger to ensure white text on all backgrounds */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#2A241F]/95 via-[#2A241F]/60 to-[#2A241F]/20 md:bg-gradient-to-r md:from-[#2A241F]/95 md:via-[#2A241F]/65 md:to-[#2A241F]/10" />

      {/* Content Area */}
      <div className="relative z-20 w-full md:w-9/12 lg:w-7/12 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-end h-full">
        
        {/* Eyebrow & Stats */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F4EFE6]/90 mb-3">
          <span className="text-[#C89A3D]">{route.regionId.replace(/-/g, " ")}</span>
          <span aria-hidden="true" className="opacity-40">•</span>
          <span>{route.durationDays} Hari</span>
          <span aria-hidden="true" className="opacity-40">•</span>
          <span>{route.interests.join(", ")}</span>
        </div>

        {/* Title & Promise */}
        <h3 className="font-playfair text-3xl sm:text-4xl lg:text-6xl font-medium mb-3 sm:mb-4 leading-[1.1] transition-colors">
          <a href={`#${route.id}`} onClick={handleView} className="outline-none before:absolute before:inset-0 before:z-0 text-[#FFFCF7] hover:text-[#E8D48B] drop-shadow-md">
            {route.title}
          </a>
        </h3>
        
        <p className="text-sm sm:text-base text-[#F4EFE6]/80 leading-relaxed mb-6 max-w-2xl line-clamp-2 md:line-clamp-3">
          {route.summary}
        </p>

        {/* Ribbon & Metadata */}
        <div className="mb-6 max-w-sm">
          <PresetRouteRibbon stops={route.stops} isInverse={true} />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#F4EFE6]/70 mb-8">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm">
            <span className="font-medium text-white">Ritme:</span> {route.paceLabel}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm">
            <span className="font-medium text-white">Budget:</span> {route.budgetLabel}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-30">
          <button
            onClick={handleView}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#C89A3D] hover:bg-[#E8D48B] text-[#2A241F] text-[15px] font-bold tracking-wide rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_8px_24px_rgba(200,154,61,0.25)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2A241F] focus:ring-[#C89A3D]"
            aria-label={`Lihat detail rute ${route.title}`}
          >
            <span>Lihat Rute</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={handlePrefill}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#FFFCF7] hover:bg-white text-[#2A241F] text-[15px] font-bold tracking-wide rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2A241F] focus:ring-[#FFFCF7]"
            aria-label={`Gunakan preferensi dari rute ${route.title} ke form`}
          >
            <ListPlus className="w-4 h-4 text-[#C89A3D]" />
            <span>Gunakan Preferensi Ini</span>
          </button>
        </div>

      </div>
    </article>
  );
}
