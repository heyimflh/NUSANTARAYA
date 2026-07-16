"use client";

/**
 * PlannerSectionHeader — Editorial intro for Route Planner Form
 * Displays eyebrow, heading (H2), subheading, and trust microcopy.
 */

import { motion } from "framer-motion";

export function PlannerSectionHeader() {
  return (
    <div className="mb-10 md:mb-14 max-w-2xl">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="font-inter text-[13px] font-bold tracking-[0.2em] uppercase text-[#C9A84C]">
          Nusa Route Planner
        </span>
        <div className="h-[1px] w-10 bg-[#C9A84C]/40" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="route-planner-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        className="font-playfair text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.15] text-[#0D1B2A] mb-5"
      >
        Rancang perjalanan yang sesuai dengan caramu menjelajah.
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="font-inter text-[15px] md:text-[16px] leading-[1.7] text-[#5C6470] mb-5"
      >
        Pilih durasi, wilayah, minat, anggaran, dan ritme perjalanan. NUSANTARAYA akan
        menyusun rekomendasi rute yang realistis, bermakna, dan mudah disesuaikan.
      </motion.p>

      {/* Trust microcopy */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] font-inter text-[#9DAEC2]"
      >
        <span>Tanpa login</span>
        <span aria-hidden="true">·</span>
        <span>Dapat diubah kapan saja</span>
        <span aria-hidden="true">·</span>
        <span>Estimasi awal, bukan harga pemesanan</span>
      </motion.div>
    </div>
  );
}
