import React from 'react';

type ProvincePanelHeroProps = {
  src: string;
  alt: string;
};

export const ProvincePanelHero: React.FC<ProvincePanelHeroProps> = ({ src, alt }) => {
  return (
    <div className="w-full h-48 md:h-56 relative overflow-hidden shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-nusaNavy/60 to-transparent pointer-events-none" />
    </div>
  );
};
