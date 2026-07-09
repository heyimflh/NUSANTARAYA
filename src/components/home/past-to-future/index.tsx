"use client";

import { motion } from "framer-motion";
import React from "react";

const phases = [
  {
    id: "01",
    label: "WARISAN",
    title: "Warisan yang Dijaga",
    description:
      "NUSANTARAYA mengarsipkan sejarah, aksara, tradisi, cerita rakyat, rumah adat, jalur rempah, dan simbol budaya dari berbagai provinsi Indonesia.",
    chips: ["Nusa Archive", "Aksara Lab", "Jalur Rempah", "Stories"],
    image: "/assets/heritage-future/warisan.webp",
    icon: "/assets/ui/icons/icon-heritage.png",
    bgDecor: "/assets/heritage-future/old-map-texture.webp",
    accentColor: "#C9A84C",
    accentLight: "rgba(201, 168, 76, 0.12)",
  },
  {
    id: "02",
    label: "MASA KINI",
    title: "Kehidupan yang Dirasakan",
    description:
      "Budaya tidak hanya dibaca, tetapi dialami melalui destinasi wisata, kuliner, festival, desa wisata, UMKM, dan cerita lokal yang hidup hari ini.",
    chips: ["Nusa Map", "NusaRasa", "Route Planner", "Event Calendar"],
    image: "/assets/heritage-future/masa-kini.webp",
    icon: "/assets/ui/icons/icon-present.png",
    bgDecor: "/assets/heritage-future/old-map-texture-1.webp",
    accentColor: "#2D5A27",
    accentLight: "rgba(45, 90, 39, 0.12)",
  },
  {
    id: "03",
    label: "MASA DEPAN",
    title: "Masa Depan yang Dibangun",
    description:
      "NUSANTARAYA memperlihatkan bagaimana identitas daerah terhubung dengan IKN, smart city, UMKM digital, ekonomi kreatif, green tourism, dan desa wisata digital.",
    chips: ["Nusa Future", "RANI", "Smart City", "UMKM Digital"],
    image: "/assets/heritage-future/masa-depan.webp",
    icon: "/assets/ui/icons/icon-future.png",
    bgDecor: "/assets/heritage-future/old-map-texture-2.webp",
    accentColor: "#2D6BE4",
    accentLight: "rgba(45, 107, 228, 0.12)",
  },
];

export function PastToFutureSection() {
  return (
    <section
      className="relative w-full overflow-hidden font-sans pt-[72px] pb-[72px] md:pt-[120px] md:pb-[120px]"
    >
      {/* Apple-style Premium Mesh Gradient Base */}
      <div className="absolute inset-0 z-0 bg-[#F5F5F7]">
        {/* Soft floating orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#E0E7FF] mix-blend-multiply filter blur-[100px] md:blur-[140px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[10%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#FEF3C7] mix-blend-multiply filter blur-[100px] md:blur-[130px] opacity-60"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[#E0F2FE] mix-blend-multiply filter blur-[120px] md:blur-[150px] opacity-70"></div>
        <div className="absolute top-[40%] right-[30%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-[#FCE7F3] mix-blend-multiply filter blur-[90px] md:blur-[120px] opacity-50" style={{ animation: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      </div>

      {/* Frosted Glass Overlay (Glassmorphism) */}
      <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[60px] md:backdrop-blur-[100px] border-t border-b border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"></div>

      {/* Very Subtle Texture for tactile premium feel */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('/assets/branding/ornamen-batik.svg')`,
          backgroundSize: "400px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#0D1B2A] opacity-70 mb-4"
          >
            Narasi Besar NUSANTARAYA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[36px] leading-[1.1] md:text-[56px] lg:text-[72px] text-[#0D1B2A] mb-6"
          >
            Dari Warisan Budaya
            <br className="hidden md:block" /> ke Masa Depan Digital
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] md:text-[18px] leading-relaxed text-[#0D1B2A]/70"
          >
            NUSANTARAYA menghubungkan sejarah, tradisi, wisata, kuliner, UMKM,
            dan kota digital dalam satu cerita besar Indonesia: dari masa lalu
            yang kaya menuju masa depan yang sedang dibangun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-8"
          >
            <img
              src="/assets/branding/ornamen-divider.svg"
              alt=""
              className="h-6 md:h-8 w-auto opacity-50"
            />
          </motion.div>
        </div>

        {/* Timeline Setup */}
        <div className="relative w-full">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[36px] left-[16.66%] right-[16.66%] h-[2px] z-0 overflow-hidden rounded-full">
            {/* Base dashed line */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0D1B2A 50%, transparent 50%)",
                backgroundSize: "12px 2px",
                backgroundRepeat: "repeat-x",
              }}
            />
            {/* Animated Gradient Glow Line overlay */}
            <motion.div
              className="absolute top-0 left-0 h-full w-[40%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), rgba(45,90,39,0.5), rgba(45,107,228,0.5), transparent)",
              }}
              animate={{ left: ["-40%", "100%"] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="flex flex-col relative"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center mb-10 relative z-10 group cursor-default">
                  <div className="relative w-[72px] h-[72px]">
                    {/* Elegant Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                      style={{ backgroundColor: phase.accentColor }}
                    />
                    {/* Dot itself */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center bg-white z-10 transition-transform duration-500 group-hover:-translate-y-1"
                      style={{
                        boxShadow: `0 8px 32px -8px ${phase.accentColor}60`,
                      }}
                    >
                      {/* Inner decorative border */}
                      <div
                        className="absolute inset-[6px] rounded-full border-[1.5px] border-dashed opacity-30 transition-transform duration-[15s] ease-linear group-hover:rotate-180 group-hover:opacity-50"
                        style={{ borderColor: phase.accentColor }}
                      />
                      <span
                        className="font-serif text-[26px] font-bold"
                        style={{ color: phase.accentColor }}
                      >
                        {phase.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white/80 backdrop-blur-md border border-[#C9A84C]/20 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-2 flex-1 flex flex-col group relative">
                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                    {/* Background Decor Layer (if any) */}
                    {phase.bgDecor && (
                      <div
                        className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-[0.10]"
                        style={{
                          backgroundImage: `url('${phase.bgDecor}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    )}

                    <div className="flex items-center gap-3 mb-4 md:hidden relative z-10">
                      <div
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
                        style={{
                          boxShadow: `0 4px 12px -4px ${phase.accentColor}60`,
                        }}
                      >
                        <span
                          className="font-serif text-sm font-bold"
                          style={{ color: phase.accentColor }}
                        >
                          {phase.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={phase.icon}
                          className="w-5 h-5 object-contain"
                          alt=""
                        />
                        <span
                          className="text-[11px] font-bold tracking-widest uppercase"
                          style={{ color: phase.accentColor }}
                        >
                          {phase.label}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-3 mb-4 relative z-10">
                      <img
                        src={phase.icon}
                        className="w-[22px] h-[22px] object-contain"
                        alt=""
                      />
                      <span
                        className="text-[12px] font-bold tracking-widest uppercase"
                        style={{ color: phase.accentColor }}
                      >
                        {phase.label}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-[28px] text-[#0D1B2A] mb-3 leading-tight relative z-10">
                      {phase.title}
                    </h3>

                    <p className="text-[#0D1B2A]/70 text-[14px] md:text-[15px] leading-relaxed mb-6 flex-1 relative z-10">
                      {phase.description}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {phase.chips.map((chip, chipIndex) => (
                        <span
                          key={chipIndex}
                          className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-[#0D1B2A]/10 text-[#0D1B2A]/70 bg-white"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full h-[220px] md:h-[260px] relative overflow-hidden bg-[#F8F4EA]">
                    <div className="absolute inset-0 bg-black/10 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Overlay Glow based on accentColor */}
                    <div
                      className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
                      style={{
                        background: `linear-gradient(to top, ${phase.accentLight}, transparent)`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 md:mt-32 text-center"
        >
          <p className="font-serif italic text-xl md:text-3xl text-[#0D1B2A] max-w-[800px] mx-auto leading-relaxed px-4">
            &ldquo;Warisan menjadi akar. Teknologi menjadi jembatan. Nusantara
            menjadi pengalaman.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
