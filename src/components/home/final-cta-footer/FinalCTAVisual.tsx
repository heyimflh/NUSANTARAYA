"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FinalCTAVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 150' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 74L80 82C160 90 320 106 480 90C640 74 800 26 960 18C1120 10 1280 42 1360 58L1440 74V150H0Z' fill='black'/%3E%3C/svg%3E"), linear-gradient(black, black)`,
        WebkitMaskSize: "100% 120px, 100% calc(100% - 119px)",
        WebkitMaskPosition: "top left, bottom left",
        WebkitMaskRepeat: "no-repeat, no-repeat",
        maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 150' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 74L80 82C160 90 320 106 480 90C640 74 800 26 960 18C1120 10 1280 42 1360 58L1440 74V150H0Z' fill='black'/%3E%3C/svg%3E"), linear-gradient(black, black)`,
        maskSize: "100% 120px, 100% calc(100% - 119px)",
        maskPosition: "top left, bottom left",
        maskRepeat: "no-repeat, no-repeat",
      }}
    >
      <Image
        src="/assets/heritage-future/old-map-texture.webp"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="scale-[1.15] object-cover opacity-60 saturate-[1.2] contrast-[1.1] mix-blend-overlay"
        style={{ objectPosition: "center 40%" }}
      />

      <div className="absolute inset-0 bg-[#062c21]/40 backdrop-blur-[8px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,246,223,0.15),transparent_25%),radial-gradient(circle_at_54%_66%,rgba(173,255,107,0.08),transparent_35%),linear-gradient(180deg,rgba(4,40,31,0.1)_0%,rgba(6,44,33,0.85)_70%,#062c21_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,246,223,0.08)_0_1px,transparent_1px_100%),linear-gradient(180deg,rgba(255,246,223,0.06)_0_1px,transparent_1px_100%)] bg-[size:96px_96px] opacity-25 mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-x-0 bottom-3 h-28 w-full"
      >
        <Image
          src="/assets/branding/ornamen-batik.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
