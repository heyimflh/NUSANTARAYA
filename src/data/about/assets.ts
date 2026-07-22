import React from 'react';

export const aboutAssets = {
  hero: {
    focalLandscape: '/assets/pillars/alam.webp',
    heritageCrop: '/assets/pillars/tradisi.webp',
    futureCrop: '/assets/heritage-future/masa-depan.webp',
    mapOutline: '/assets/map/indonesia-outline.svg',
    fallbackPattern: '/assets/background/noise.webp',
  },
  panorama: {
    heritage: '/assets/heritage-future/warisan.webp',
    present: '/assets/heritage-future/masa-kini.webp',
    future: '/assets/heritage-future/masa-depan.webp',
  },
  journeys: {
    map: '/assets/features/nusa-map-preview-v2.webp',
    atlas: '/assets/explore/journeys/journey-budaya.webp',
    archive: '/assets/features/archive-preview-v2.webp',
    routes: '/assets/features/route-planner-preview-v2.webp',
    passport: '/assets/features/passport-preview-v2.webp',
    future: '/assets/features/future-preview-v2.webp',
    rani: '/assets/features/rani-chat-preview-v2.webp',
  },
  modes: {
    explore: '/assets/explore/journeys/journey-alam.webp',
    tourist: '/assets/explore/journeys/journey-sejarah.webp',
    learn: '/assets/pillars/aksara.webp',
  },
  editorial: {
    nodes: '/assets/heritage-future/digital-nodes.svg',
    mapTexture: '/assets/heritage-future/old-map-texture.webp',
    finalLandscape: '/assets/background-primary.webp',
  }
};

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  const target = e.target as HTMLImageElement;
  target.src = aboutAssets.hero.fallbackPattern;
  target.className = 'w-full h-full object-cover opacity-10 mix-blend-overlay';
}
