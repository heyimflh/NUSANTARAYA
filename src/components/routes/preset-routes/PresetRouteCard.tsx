import React from "react";
import { ListPlus } from "lucide-react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { PresetRouteArtwork } from "./PresetRouteArtwork";
import { PresetRouteRibbon } from "./PresetRouteRibbon";

interface PresetRouteCardProps {
  route: RoutePresetDefinition;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
}

export function PresetRouteCard({ route, onViewRoute, onPrefill }: PresetRouteCardProps) {
  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    onViewRoute(route);
  };

  const handlePrefill = (e: React.MouseEvent) => {
    e.preventDefault();
    onPrefill(route);
  };

  return (
    <article className="group relative w-full bg-[var(--planner-paper)] rounded-[20px] overflow-hidden border border-[var(--planner-warm-border)]/60 shadow-sm flex flex-col transition-all hover:shadow-[0_8px_24px_rgba(58,43,34,0.06)] hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[var(--planner-saffron)]">
      {/* Visual Side */}
      <div className="w-full relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-[var(--planner-canvas)] border-b border-[var(--planner-warm-border)]/40">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
          <PresetRouteArtwork 
            config={route.artworkConfig} 
            alt={`Ilustrasi rute ${route.title}`}
          />
        </div>
        {route.badge && (
          <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[var(--planner-warm-border)]/50 text-[10px] font-bold uppercase tracking-wider text-[var(--planner-ink)] shadow-sm">
            {route.badge}
          </div>
        )}
        <div className="absolute bottom-3 right-3 z-10 bg-[var(--planner-ink)]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
          {route.durationDays} Hari
        </div>
      </div>

      {/* Content Side */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Eyebrow & Stats */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--planner-muted)] mb-2">
          <span className="text-[var(--planner-saffron)]">{route.regionId.replace(/-/g, " ")}</span>
          <span aria-hidden="true" className="text-[var(--planner-warm-border)]">•</span>
          <span className="truncate max-w-[150px]">{route.interests.slice(0, 2).join(", ")}</span>
        </div>

        {/* Title & Promise */}
        <h3 className="font-playfair text-xl font-medium text-[var(--planner-ink)] mb-3 leading-snug group-hover:text-[var(--planner-primary)] transition-colors line-clamp-2">
          <a href={`#${route.id}`} onClick={handleView} className="outline-none before:absolute before:inset-0 before:z-0">
            {route.title}
          </a>
        </h3>
        
        <p className="text-sm text-[var(--planner-earth)] leading-relaxed mb-5 line-clamp-2 relative z-10">
          {route.summary}
        </p>

        {/* Ribbon & Metadata */}
        <div className="mb-5 relative z-10 scale-95 origin-left">
          <PresetRouteRibbon stops={route.stops} />
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[var(--planner-muted)] mb-6 relative z-10">
          <div><span className="font-medium text-[var(--planner-ink)]">Ritme:</span> {route.paceLabel}</div>
          <span className="text-[var(--planner-warm-border)] hidden xs:inline">•</span>
          <div><span className="font-medium text-[var(--planner-ink)]">Budget:</span> {route.budgetLabel}</div>
        </div>

        {/* CTAs */}
        <div className="mt-auto flex items-center gap-2 sm:gap-3 relative z-10">
          <button
            onClick={handleView}
            className="flex-1 px-4 py-2.5 bg-[var(--planner-primary)] hover:bg-[var(--planner-primary-hover)] text-white text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--planner-primary)]"
            aria-label={`Lihat detail rute ${route.title}`}
          >
            <span>Lihat Rute</span>
          </button>
          
          <button
            onClick={handlePrefill}
            className="flex-shrink-0 w-[42px] h-[42px] flex items-center justify-center bg-transparent hover:bg-[var(--planner-canvas)] border border-[var(--planner-warm-border)] text-[var(--planner-ink)] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--planner-saffron)]"
            aria-label={`Gunakan preferensi dari rute ${route.title} ke form`}
            title="Gunakan Preferensi Ini"
          >
            <ListPlus className="w-4 h-4 text-[var(--planner-saffron)]" />
          </button>
        </div>
      </div>
    </article>
  );
}
