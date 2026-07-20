"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MapHeroPinProps {
  id: string;
  label: string;
  category: string;
  icon: string;
  position: { x: number; y: number };
  isMobileOnly?: boolean;
}

export const MapHeroPin = ({
  label,
  category,
  icon,
  position,
  isMobileOnly,
}: MapHeroPinProps) => {
  return (
    <div
      className={`absolute z-20 group ${
        isMobileOnly === false ? "hidden md:block" : ""
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative cursor-pointer"
        role="button"
        aria-label={`${label}, kategori ${category}`}
        tabIndex={0}
      >
        <div className="absolute inset-0 bg-[#C9A84C]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
              src={icon}
          alt=""
          aria-hidden="true"
          className="w-8 h-8 md:w-10 md:h-10 relative z-10 drop-shadow-md"
              width={0}
              height={0}
              sizes="100vw"
            />
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md border border-[#E8E0CE] px-3 py-1.5 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-xs font-semibold text-[#0D1B2A]">{label}</span>
            <span className="text-[10px] text-[#C9A84C] font-medium uppercase tracking-wider">{category}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
