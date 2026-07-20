import React from 'react';
import { ProvinceMapItem } from '@/types/province';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

type ProvinceTooltipProps = {
  province: ProvinceMapItem | null;
  position: { x: number; y: number } | null;
};

export const ProvinceTooltip: React.FC<ProvinceTooltipProps> = ({ province, position }) => {
  if (!province || !position) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="fixed z-50 pointer-events-none bg-white/90 backdrop-blur-md border border-nusaBorder shadow-2xl rounded-2xl overflow-hidden min-w-[240px] max-w-[280px]"
        style={{
          left: position.x + 20,
          top: position.y - 120, // display slightly above
        }}
      >
        <div className="relative w-full h-24 bg-nusaWarm overflow-hidden">
          <Image
              src={province.assets.thumb}
            alt={province.name}
            className="w-full h-full object-cover"
            loading="lazy"
              width={0}
              height={0}
              sizes="100vw"
            />
          {province.isFlagship && (
            <div className="absolute top-2 right-2 bg-nusaGold text-nusaNavy text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Flagship
            </div>
          )}
        </div>
        <div className="p-3">
          <h4 className="font-serif text-nusaNavy text-lg leading-tight font-bold">
            {province.name}
          </h4>
          <p className="text-xs text-muted-foreground mb-2">
            {province.region} · {province.capital}
          </p>
          <div className="flex flex-wrap gap-1">
            {province.highlights.slice(0, 3).map((hl, i) => (
              <span key={i} className="bg-nusaWarm text-nusaNavy/80 text-[10px] px-1.5 py-0.5 rounded border border-nusaBorder/50">
                {hl}
              </span>
            ))}
          </div>
          <div className="mt-3 text-[10px] text-nusaGold font-medium flex items-center gap-1">
            Klik untuk membuka detail &rarr;
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
