import React from "react";
import { ArrowRight, ListPlus } from "lucide-react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { PresetRouteArtwork } from "./PresetRouteArtwork";
import { PresetRouteRibbon } from "./PresetRouteRibbon";

interface FeaturedPresetRouteProps {
  route: RoutePresetDefinition;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
}

export function FeaturedPresetRoute({ route, onViewRoute, onPrefill }: FeaturedPresetRouteProps) {
  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    onViewRoute(route);
  };

  const handlePrefill = (e: React.MouseEvent) => {
    e.preventDefault();
    onPrefill(route);
  };

  return (
    <article className="group relative w-full bg-[var(--planner-paper)] rounded-[24px] md:rounded-[32px] overflow-hidden border border-[var(--planner-warm-border)]/60 shadow-[0_8px_32px_rgba(58,43,34,0.04)] mb-12 flex flex-col md:flex-row transition-all hover:shadow-[0_12px_40px_rgba(58,43,34,0.06)] focus-within:ring-2 focus-within:ring-[var(--planner-saffron)]">
      {/* Visual Side */}
      <div className="w-full md:w-5/12 lg:w-6/12 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-[var(--planner-canvas)]">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
          <PresetRouteArtwork 
            config={route.artworkConfig} 
            alt={`Ilustrasi rute ${route.title}`}
          />
        </div>
        {route.badge && (
          <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[var(--planner-warm-border)]/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--planner-ink)] shadow-sm">
            {route.badge}
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className="w-full md:w-7/12 lg:w-6/12 flex flex-col p-6 sm:p-8 lg:p-10 xl:p-12">
        {/* Eyebrow & Stats */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--planner-muted)] mb-3">
          <span className="text-[var(--planner-saffron)]">{route.regionId.replace(/-/g, " ")}</span>
          <span aria-hidden="true" className="text-[var(--planner-warm-border)]">•</span>
          <span>{route.durationDays} Hari</span>
          <span aria-hidden="true" className="text-[var(--planner-warm-border)]">•</span>
          <span>{route.interests.join(", ")}</span>
        </div>

        {/* Title & Promise */}
        <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--planner-ink)] mb-4 leading-tight group-hover:text-[var(--planner-primary)] transition-colors">
          <a href={`#${route.id}`} onClick={handleView} className="outline-none before:absolute before:inset-0 before:z-0">
            {route.title}
          </a>
        </h3>
        
        <p className="text-sm sm:text-base text-[var(--planner-earth)] leading-relaxed mb-6 lg:mb-8 line-clamp-2 md:line-clamp-3 relative z-10">
          {route.summary}
        </p>

        {/* Ribbon & Metadata */}
        <div className="mb-8 relative z-10">
          <PresetRouteRibbon stops={route.stops} />
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--planner-muted)] mb-8 relative z-10">
          <div className="flex items-center gap-1.5 bg-[var(--planner-canvas)] px-3 py-1.5 rounded-md border border-[var(--planner-warm-border)]/40">
            <span className="font-medium">Ritme:</span> {route.paceLabel}
          </div>
          <div className="flex items-center gap-1.5 bg-[var(--planner-canvas)] px-3 py-1.5 rounded-md border border-[var(--planner-warm-border)]/40">
            <span className="font-medium">Budget:</span> {route.budgetLabel}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-10">
          <button
            onClick={handleView}
            className="w-full sm:w-auto px-6 py-3 bg-[var(--planner-primary)] hover:bg-[var(--planner-primary-hover)] text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--planner-primary)]"
            aria-label={`Lihat detail rute ${route.title}`}
          >
            <span>Lihat Rute</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={handlePrefill}
            className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-[var(--planner-canvas)] border border-[var(--planner-warm-border)] text-[var(--planner-ink)] text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--planner-saffron)]"
            aria-label={`Gunakan preferensi dari rute ${route.title} ke form`}
          >
            <ListPlus className="w-4 h-4 text-[var(--planner-saffron)]" />
            <span>Gunakan Preferensi Ini</span>
          </button>
        </div>
      </div>
    </article>
  );
}
