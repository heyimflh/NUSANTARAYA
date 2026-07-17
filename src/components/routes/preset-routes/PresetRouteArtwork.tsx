import React, { useId } from "react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";

interface PresetRouteArtworkProps {
  config?: RoutePresetDefinition["artworkConfig"];
  alt?: string;
  className?: string;
}

export function PresetRouteArtwork({ config, alt = "", className = "" }: PresetRouteArtworkProps) {
  const uniqueId = useId();
  const primary = config?.primaryColor || "#C9A84C";
  const secondary = config?.secondaryColor || "#2A241F";
  const patternType = config?.patternType || "geometric";
  
  // Safe ID without #
  const safePrimary = primary.replace("#", "");
  const patternId = `pattern-${patternType}-${safePrimary}-${uniqueId.replace(/:/g, "")}`;

  const renderPattern = () => {
    switch (patternType) {
      case "wave":
        return (
          <pattern id={patternId} x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke={primary} strokeWidth="1" strokeOpacity="0.2" />
            <path d="M0 20 Q25 10 50 20 T100 20" fill="none" stroke={secondary} strokeWidth="1" strokeOpacity="0.1" />
          </pattern>
        );
      case "topographic":
        return (
          <pattern id={patternId} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 Q30 40 80 20" fill="none" stroke={primary} strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M20 30 Q50 60 90 40" fill="none" stroke={secondary} strokeWidth="0.5" strokeOpacity="0.2" />
            <circle cx="50" cy="50" r="20" fill="none" stroke={primary} strokeWidth="0.5" strokeOpacity="0.2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke={secondary} strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
        );
      case "batik":
        return (
          <pattern id={patternId} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke={primary} strokeWidth="1" strokeOpacity="0.15" />
            <circle cx="20" cy="20" r="5" fill={secondary} fillOpacity="0.2" />
          </pattern>
        );
      case "geometric":
      default:
        return (
          <pattern id={patternId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="30" height="30" fill={primary} fillOpacity="0.1" />
            <rect x="30" y="30" width="30" height="30" fill={secondary} fillOpacity="0.1" />
            <circle cx="60" cy="0" r="10" fill={primary} fillOpacity="0.15" />
          </pattern>
        );
    }
  };


  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#F4EFE6] ${className}`} role="img" aria-label={alt}>
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${secondary}15 0%, ${primary}10 100%)`
        }}
      />
      
      {/* Pattern overlay */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {renderPattern()}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      
      {/* Route abstract nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 80 Q40 40 60 60 T80 20" fill="none" stroke={primary} strokeWidth="2" strokeOpacity="0.4" strokeDasharray="4 4" />
        <circle cx="20" cy="80" r="4" fill={secondary} stroke={primary} strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill={secondary} stroke={primary} strokeWidth="2" />
        <circle cx="80" cy="20" r="6" fill={primary} />
      </svg>

      {/* Lighting overlay to make it look premium */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay" />
    </div>
  );
}
