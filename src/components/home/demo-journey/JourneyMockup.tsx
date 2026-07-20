"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { MockupType } from "@/data/demoJourney.types";

type JourneyMockupProps = {
  type: MockupType;
};

const windowVariants: Variants = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: {
      clipPath: { duration: 0.7, ease: [0.77, 0, 0.175, 1] },
    },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.4, ease: [0.77, 0, 0.175, 1] },
  },
};

const contentVariants: Variants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1.01,
    transition: { duration: 4, ease: "easeOut" },
  },
  exit: { scale: 1.01 },
};

function MockupWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={windowVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative w-full h-full min-h-75 md:min-h-120 rounded-[20px] overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/4 flex flex-col origin-bottom"
    >
      {/* Fake Browser/Window header for premium feel */}
      <div className="h-8 w-full bg-muted/40 border-b border-border/50 flex items-center px-4 gap-1.5 shrink-0 relative z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-sm" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-sm" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-sm" />
      </div>
      <div className="relative grow w-full bg-background overflow-hidden">
        <motion.div
          variants={contentVariants}
          className="absolute inset-0 w-full h-full"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function JourneyMockup({ type }: JourneyMockupProps) {
  switch (type) {
    case "map":
      return (
        <MockupWrapper>
          <Image
            src="/assets/features/nusa-map-previe.webp"
            alt="Nusa Map Preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </MockupWrapper>
      );
    case "province":
      // Custom CSS Mockup since we don't have a direct screenshot
      return (
        <MockupWrapper>
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center">
            <div className="w-full max-w-sm bg-card rounded-2xl overflow-hidden shadow-xl border border-muted">
              <div className="relative w-full h-48">
                <Image
                  src="/assets/province/di-yogyakarta/thumb.webp"
                  alt="DI Yogyakarta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                    Jawa
                  </span>
                  <h4 className="text-2xl font-serif font-bold">
                    DI Yogyakarta
                  </h4>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    Keraton
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    Batik
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    Gudeg
                  </span>
                </div>
                <div className="w-full h-10 mt-2 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-medium">
                  Jelajahi Provinsi
                </div>
              </div>
            </div>
          </div>
        </MockupWrapper>
      );
    case "detail":
      // Custom CSS Mockup for Detail page
      return (
        <MockupWrapper>
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm p-4 md:p-8 flex flex-col items-center justify-start overflow-hidden pt-12">
            <div className="w-full max-w-sm flex flex-col gap-4">
              {/* Hero strip fake */}
              <div className="w-full h-16 bg-muted rounded-xl animate-pulse" />

              {/* Timeline row fake */}
              <div className="w-full bg-card border border-muted rounded-xl p-4 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 shrink-0" />
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary rounded-full" />
                </div>
                <div className="w-8 h-8 rounded-full bg-muted shrink-0" />
                <div className="w-8 h-8 rounded-full bg-muted shrink-0" />
              </div>

              {/* Culture cards fake */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-muted rounded-xl animate-pulse" />
                <div className="h-32 bg-muted rounded-xl animate-pulse delay-75" />
              </div>

              {/* Quiz badge */}
              <div className="w-full h-12 bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-xl flex items-center justify-center text-sm font-medium">
                Quiz Mini Tersedia
              </div>
            </div>
          </div>
        </MockupWrapper>
      );
    case "cultureRasa":
      return (
        <MockupWrapper>
          <Image
            src="/assets/features/archive-preview.webp"
            alt="Culture and Rasa Preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </MockupWrapper>
      );
    case "route":
      return (
        <MockupWrapper>
          <Image
            src="/assets/features/route-planner-preview.webp"
            alt="Route Planner Preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </MockupWrapper>
      );
    case "passport":
      return (
        <MockupWrapper>
          <Image
            src="/assets/features/passport-preview.webp"
            alt="Passport Preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </MockupWrapper>
      );
    case "rani":
      return (
        <MockupWrapper>
          <Image
            src="/assets/features/rani-chat-preview.webp"
            alt="RANI AI Chat Preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </MockupWrapper>
      );
    default:
      return null;
  }
}
