"use client";

import { motion } from "framer-motion";
import { mapHeroPins, mapHeroFeaturedCard } from "@/data/mapHero";
import { MapHeroPin } from "./MapHeroPin";
import { MapHeroFloatingCard } from "./MapHeroFloatingCard";

export const MapHeroVisual = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[420px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[640px] h-full"
      >
        {/* Map Outline Base */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img
            src="/assets/map/indonesia-outline.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
          />
        </div>

        {/* Route Line (Decorative SVG) */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full opacity-50"
            style={{
              filter: "drop-shadow(0px 0px 4px rgba(201,168,76,0.4))",
            }}
          >
            <motion.path
              d="M 18 46 Q 30 65 42 70 Q 48 50 51 38 Q 65 50 76 62 Q 80 50 86 47"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Floating Pins */}
        {mapHeroPins.map((pin, index) => (
          <motion.div
            key={pin.id}
            initial={{ opacity: 0, scale: 0.6, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="pointer-events-auto w-full h-full relative">
              <MapHeroPin {...pin} isMobileOnly={pin.mobile} />
            </div>
          </motion.div>
        ))}

        {/* Floating Card */}
        <MapHeroFloatingCard {...mapHeroFeaturedCard} />
      </motion.div>
    </div>
  );
};
