"use client";

import { motion } from "framer-motion";
import { mapHeroStats } from "@/data/mapHero";

export const MapHeroStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8">
      {mapHeroStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="flex flex-col items-center md:items-start text-center md:text-left bg-white/40 md:bg-transparent border border-[#E8E0CE]/50 md:border-transparent rounded-2xl md:rounded-none p-4 md:p-0 backdrop-blur-md md:backdrop-blur-none"
        >
          <span className="font-playfair font-semibold text-3xl md:text-4xl lg:text-[40px] text-[#0D1B2A] leading-tight">
            {stat.value}
          </span>
          <span className="font-inter uppercase text-[10px] md:text-xs tracking-[0.16em] text-[#0D1B2A]/70 mt-1 md:mt-2">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
