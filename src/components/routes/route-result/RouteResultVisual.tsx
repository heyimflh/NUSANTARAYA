"use client";

/**
 * RouteResultVisual — Section 4 Editorial Route Image + Duration Badge
 * Uses canonical heroImage from preset if available, otherwise derives
 * from province IDs. Has CSS fallback pattern if all images fail.
 * Decorative image is aria-hidden; meaningful alt text on img element.
 */

import { useState } from "react";
import Image from "next/image";
import type { RouteRecommendation } from "@/types/route-planner";
import { ROUTE_PRESETS } from "@/data/routes/routePresets";

interface RouteResultVisualProps {
  result: RouteRecommendation;
  locale?: "id" | "en";
}

function getRouteImage(result: RouteRecommendation): { src: string; alt: string } {
  // 1. Try canonical heroImage from preset
  const preset = ROUTE_PRESETS.find((p) => p.id === result.id);
  if (preset?.heroImage) {
    return { src: preset.heroImage.src, alt: preset.heroImage.alt };
  }

  // 2. Derive from first province stop
  const firstProvince = result.stops[0]?.provinceId || result.provinceIds[0];
  if (firstProvince) {
    return {
      src: `/assets/province/${firstProvince}/hero.webp`,
      alt: `Pemandangan ${result.stops[0]?.cityOrCluster || firstProvince}`,
    };
  }

  // 3. Fallback to first province in list
  const province = result.provinceIds[0];
  return {
    src: `/assets/province/${province || "bali"}/hero.webp`,
    alt: `Pemandangan rute ${result.title}`,
  };
}

export function RouteResultVisual({ result, locale = "id" }: RouteResultVisualProps) {
  const [imgError, setImgError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const { src, alt } = getRouteImage(result);
  const fallbackSrc = `/assets/province/bali/hero.webp`;

  const durationLabel =
    locale === "en"
      ? `${result.durationDays} Days`
      : `${result.durationDays} Hari`;

  // If both image sources fail, show CSS art fallback
  const showCssArt = fallbackError;

  return (
    <div
      className="relative w-full aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_8px_32px_rgba(13,27,42,0.08)] ring-1 ring-[#0D1B2A]/5"
      aria-hidden="true"
    >
      {showCssArt ? (
        /* CSS Art Fallback — no broken images */
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            background: `linear-gradient(135deg, #2A241F 0%, #3A2B1A 40%, #C9A84C22 100%)`,
          }}
        >
          {/* Batik-like geometric pattern overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <pattern id="batik-result" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="6" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
                <line x1="4" y1="10" x2="16" y2="10" stroke="#C9A84C" strokeWidth="0.3" />
                <line x1="10" y1="4" x2="10" y2="16" stroke="#C9A84C" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#batik-result)" />
          </svg>
          <span className="relative font-playfair text-[#C9A84C] text-[20px] font-bold text-center px-6">
            {result.title}
          </span>
        </div>
      ) : (
        <Image
          src={imgError ? fallbackSrc : src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-center transition-transform duration-700"
          onError={() => {
            if (!imgError) {
              setImgError(true);
            } else {
              setFallbackError(true);
            }
          }}
        />
      )}

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/80 via-[#1A1410]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#FFFDF8]/20"
        aria-hidden="true"
      />

      {/* Duration badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1410]/70 backdrop-blur-sm border border-[#C9A84C]/30 font-inter text-[12px] font-bold text-[#C9A84C] uppercase tracking-wider">
          {durationLabel}
        </span>
      </div>

      {/* Subtle Nusantara pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
