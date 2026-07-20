import React from "react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";
import { PresetRouteCard } from "./PresetRouteCard";

interface PresetRoutesGridProps {
  routes: RoutePresetDefinition[];
  activePresetId?: string;
  onViewRoute: (route: RoutePresetDefinition) => void;
  onPrefill: (route: RoutePresetDefinition) => void;
}

export function PresetRoutesGrid({ routes, activePresetId, onViewRoute, onPrefill }: PresetRoutesGridProps) {
  if (routes.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto px-4 mb-16">
      {routes.map((route) => (
        <PresetRouteCard
          key={route.id}
          route={route}
          onViewRoute={onViewRoute}
          onPrefill={onPrefill}
          isActive={route.id === activePresetId}
        />
      ))}
    </div>
  );
}
