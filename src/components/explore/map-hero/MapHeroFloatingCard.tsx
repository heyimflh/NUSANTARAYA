"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MapHeroFloatingCardProps {
  province: string;

  badge: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export const MapHeroFloatingCard = ({
  province,

  badge,
  highlights,
  image,
  imageAlt,
}: MapHeroFloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
      animate={{ y: [0, -6, 0] }}
      className="hidden lg:flex absolute bottom-12 right-12 z-30 bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-3 shadow-xl max-w-[280px]"
      style={{
        boxShadow: "0 20px 40px rgba(13, 27, 42, 0.08)",
        transition: "transform 4s ease-in-out infinite",
      }}
    >
      <div className="flex gap-4 items-center">
        <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden shrink-0 border border-[#E8E0CE]/50">
          <Image
              src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-wider mb-0.5">
            {badge}
          </span>
          <h4 className="font-playfair font-bold text-[#0D1B2A] text-lg leading-tight mb-1">
            {province}
          </h4>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {highlights.map((highlight, i) => (
              <span
                key={i}
                className="text-[10px] text-[#0D1B2A]/70 bg-white/50 px-2 py-0.5 rounded-full border border-[#E8E0CE]/30"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
