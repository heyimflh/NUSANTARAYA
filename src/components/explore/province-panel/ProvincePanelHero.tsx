import React from 'react';
import { getFocalPoint } from '@/data/provinces/focalPoints';

type ProvincePanelHeroProps = {
  provinceId: string;
  src: string;
  alt: string;
};

export const ProvincePanelHero: React.FC<ProvincePanelHeroProps> = ({ provinceId, src, alt }) => {
  const focalPoint = getFocalPoint(provinceId, 'hero');

  return (
    <div className="w-full h-48 md:h-[220px] relative overflow-hidden shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        style={{ objectPosition: `${focalPoint.x}% ${focalPoint.y}%` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-nusaNavy/60 to-transparent pointer-events-none" />
    </div>
  );
};
