"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { flagshipProvinces } from "@/data/provinces/flagshipProvinces";
import { usePassport } from "@/context/app-context";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, BookmarkCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProvincePassportStatus } from "@/lib/passport/getProvincePassportStatus";
import { 
  motion, 
  AnimatePresence, 
  useReducedMotion, 
  useMotionValue, 
  useTransform, 
  useSpring,
  useMotionTemplate
} from "framer-motion";

type FlagshipProvincesSectionProps = {
  selectedProvinceId: string | null;
  onOpenSummary: (provinceId: string) => void;
  onOpenAtlas: (provinceId: string) => void;
};

export const FlagshipProvincesSection: React.FC<FlagshipProvincesSectionProps> = ({
  selectedProvinceId,
  onOpenSummary,
  onOpenAtlas,
}) => {
  const { passport, planProvince } = usePassport();
  const [activeId, setActiveId] = useState<string>("di-yogyakarta");
  const [hasInteracted, setHasInteracted] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const heroTranslateX = useTransform(springX, [-0.5, 0.5], ["-4px", "4px"]);
  const heroTranslateY = useTransform(springY, [-0.5, 0.5], ["-4px", "4px"]);
  const overlayTranslateX = useTransform(springX, [-0.5, 0.5], ["-8px", "8px"]);
  const overlayTranslateY = useTransform(springY, [-0.5, 0.5], ["-8px", "8px"]);
  
  const spotlightX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  useEffect(() => {
    if (selectedProvinceId && !hasInteracted) {
      const isFlagship = flagshipProvinces.some((p) => p.provinceId === selectedProvinceId);
      if (isFlagship) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveId(selectedProvinceId);
      }
    }
  }, [selectedProvinceId, hasInteracted]);

  const handleSelect = useCallback((id: string) => {
    setHasInteracted(true);
    setActiveId(id);
  }, []);

  const handlePassportToggle = useCallback((id: string) => {
    planProvince(id);
  }, [planProvince]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    if (shouldReduceMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const activeProvince = flagshipProvinces.find((p) => p.provinceId === activeId) || flagshipProvinces[0];
  const passportStatus = getProvincePassportStatus(passport, activeProvince.provinceId);
  const isSaved = passportStatus !== "unvisited";

  // Animation variants
  const sectionVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  const scaleUpVariant = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.992 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6 } 
    }
  };

  const slideLeftVariant = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 12 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5 } 
    }
  };

  const contentItemVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : -4, 
      transition: { duration: 0.15 } 
    }
  };

  return (
    <motion.section 
      id="flagship-provinces"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24"
      aria-labelledby="flagship-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <header className="mb-8 md:mb-12">
        <motion.h2 
          variants={fadeUpVariant}
          id="flagship-heading" 
          className="text-sm font-bold uppercase tracking-widest text-nusaGold mb-2"
        >
          Provinsi Unggulan
        </motion.h2>
        <motion.h3 
          variants={fadeUpVariant}
          className="font-serif text-3xl md:text-5xl text-nusaNavy font-bold"
        >
          Delapan Gerbang Menuju Cerita Nusantara
        </motion.h3>
        <motion.p 
          variants={fadeUpVariant}
          className="text-muted-foreground mt-3 max-w-2xl text-base md:text-lg"
        >
          Mulai perjalanan dari delapan provinsi dengan materi Atlas terdalam—mewakili budaya, rasa, alam, sejarah, maritim, dan masa depan Indonesia.
          Pilih satu provinsi untuk menemukan alasan, ikon, dan jalur Atlas terbaiknya.
        </motion.p>
      </header>

      {/* SR Only Status */}
      <div className="sr-only" aria-live="polite">
        Menampilkan {activeProvince.name}, provinsi unggulan {activeProvince.index} dari 8.
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        
        {/* Main Featured Stage */}
        <motion.div 
          variants={scaleUpVariant}
          className="flex-grow lg:w-[75%] flex flex-col md:flex-row bg-[#FFFDF8] rounded-[32px] border border-[#E8E0CE] shadow-[0_30px_90px_rgba(13,27,42,0.10)] overflow-hidden min-h-[640px]"
        >
          
          {/* Desktop Hero Image (Parallax) */}
          <div 
            className="w-full md:w-1/2 lg:w-3/5 h-64 md:h-auto relative overflow-hidden hidden md:block group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ touchAction: 'none' }}
          >
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={activeProvince.provinceId}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.015 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.5 }}
                className="absolute inset-[-10px]"
                style={{ 
                  x: shouldReduceMotion ? 0 : heroTranslateX,
                  y: shouldReduceMotion ? 0 : heroTranslateY
                }}
              >
                <Image
                  src={activeProvince.heroImage}
                  alt={activeProvince.heroAlt}
                  fill
                  sizes="(max-width: 1200px) 50vw, 60vw"
                  className="object-cover"
                  style={{ objectPosition: activeProvince.objectPosition || "center" }}
                  priority
                />
                
                {/* Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 md:from-transparent to-transparent via-black/20" 
                  style={{ 
                    x: shouldReduceMotion ? 0 : overlayTranslateX,
                    y: shouldReduceMotion ? 0 : overlayTranslateY
                  }}
                />
                
                {/* Spotlight Overlay */}
                {!shouldReduceMotion && (
                  <motion.div 
                    className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: useMotionTemplate`radial-gradient(circle 250px at ${spotlightX} ${spotlightY}, rgba(255,255,255,0.15), transparent 40%)`
                    }}
                  />
                )}
                
                <motion.div 
                  className="absolute top-0 left-[10px] right-[10px] h-1"
                  style={{ backgroundColor: activeProvince.regionalColor }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Mobile Hero (Static) */}
          <div className="w-full h-64 relative overflow-hidden block md:hidden">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={activeProvince.provinceId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProvince.heroImage}
                  alt={activeProvince.heroAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: activeProvince.objectPosition || "center" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent via-black/20" />
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: activeProvince.regionalColor }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Editorial Copy */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center h-full relative z-10 bg-[#FFFDF8]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeProvince.provinceId}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.05 } },
                  exit: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.03, staggerDirection: -1 } }
                }}
                className="flex flex-col h-full"
              >
                <motion.div variants={contentItemVariant} className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="text-nusaNavy">{activeProvince.index.toString().padStart(2, "0")}</span>
                  <span>&bull;</span>
                  <span className="text-nusaGold">Flagship</span>
                  <span>&bull;</span>
                  <span>{activeProvince.region}</span>
                </motion.div>

                <motion.h4 variants={contentItemVariant} className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-nusaNavy leading-tight mb-2">
                  {activeProvince.name}
                </motion.h4>
                <motion.p variants={contentItemVariant} className="text-base md:text-lg font-medium text-nusaNavy mb-4">
                  {activeProvince.tagline}
                </motion.p>

                <motion.p variants={contentItemVariant} className="text-sm md:text-base text-muted-foreground mb-6 line-clamp-4">
                  {activeProvince.whyFlagship}
                </motion.p>

                {/* Signatures */}
                <motion.div variants={contentItemVariant} className="flex flex-wrap gap-2 mb-8">
                  {activeProvince.signatures.map((sig, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-white border border-[#E8E0CE] text-xs font-medium rounded-full text-nusaNavy cursor-default transition-colors duration-150 hover:bg-[#FDFBF7] hover:border-nusaGold/30"
                      whileHover={shouldReduceMotion ? {} : { y: -1 }}
                    >
                      {sig}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Pillar & Actions */}
                <motion.div variants={contentItemVariant} className="mt-auto pt-6 border-t border-[#E8E0CE]">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pilar Dominan</div>
                      <div className="font-semibold text-nusaNavy">{activeProvince.dominantPillar}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Materi</div>
                      <div className="font-semibold text-nusaNavy">{activeProvince.materialCount} item</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <motion.div whileTap={{ scale: 0.985 }} className="w-full">
                      <Button 
                        variant="gold" 
                        size="lg" 
                        className="w-full justify-between group transition-transform hover:-translate-y-[1px] hover:shadow-md"
                        onClick={() => onOpenAtlas(activeProvince.provinceId)}
                      >
                        Buka Atlas Provinsi
                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                    
                    <div className="flex gap-3">
                      <motion.div whileTap={{ scale: 0.985 }} className="flex-1">
                        <Button 
                          variant="outline" 
                          className="w-full border-[#E8E0CE] text-nusaNavy hover:bg-[#F8F4EA] transition-colors"
                          onClick={() => onOpenSummary(activeProvince.provinceId)}
                        >
                          Lihat Ringkasan
                        </Button>
                      </motion.div>
                      <motion.div whileTap={{ scale: 0.985 }}>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className={cn(
                            "w-12 border-[#E8E0CE] relative overflow-hidden transition-colors",
                            isSaved ? "bg-nusaGold text-white border-nusaGold hover:bg-nusaGold/90" : "text-nusaNavy hover:bg-[#F8F4EA]"
                          )}
                          onClick={() => handlePassportToggle(activeProvince.provinceId)}
                          aria-label={isSaved ? "Tersimpan di Passport" : "Tambah ke Passport"}
                          aria-pressed={isSaved}
                        >
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={isSaved ? "saved" : "unsaved"}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ 
                                scale: shouldReduceMotion ? 1 : [0.8, 1.12, 1], 
                                rotate: shouldReduceMotion ? 0 : [0, -3, 3, 0], 
                                opacity: 1 
                              }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                            >
                              {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
                            </motion.div>
                          </AnimatePresence>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Side Rail Desktop / Horizontal Rail Tablet & Mobile */}
        <div className="lg:w-[25%] flex flex-col">
          {/* Progress Indicator Desktop */}
          <div className="hidden lg:block mb-4 h-px bg-[#E8E0CE] relative mt-2">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-nusaGold"
              initial={false}
              animate={{ width: `${(activeProvince.index / flagshipProvinces.length) * 100}%` }}
              transition={{ duration: 0.35 }}
            />
          </div>
          
          <motion.div 
            variants={slideLeftVariant}
            ref={railRef}
            className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-4 lg:pb-0 relative"
          >
            {flagshipProvinces.map((prov) => {
              const isActive = prov.provinceId === activeId;
              return (
                <motion.button
                  key={prov.provinceId}
                  onClick={() => handleSelect(prov.provinceId)}
                  aria-current={isActive ? "true" : "false"}
                  whileHover={!isActive && !shouldReduceMotion ? { scale: 1.02, x: 2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-2xl transition-colors duration-300 text-left min-w-[240px] lg:min-w-0 snap-center lg:snap-start shrink-0 group relative border-b",
                    !isActive ? "hover:bg-[#FFFDF8]/50 border-b-[#E8E0CE]/50 lg:border-b-transparent" : "border-b-transparent lg:border-b-transparent"
                  )}
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="flagship-active-indicator"
                      className="absolute inset-0 bg-[#FFFDF8] border border-[rgba(201,168,76,0.35)] rounded-2xl shadow-sm z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 z-10">
                    <Image
                      src={prov.thumbnail}
                      alt=""
                      fill
                      sizes="56px"
                      className={cn(
                        "object-cover transition-all duration-300",
                        isActive ? "opacity-100 scale-100" : "opacity-[0.72] scale-95 group-hover:opacity-100 group-hover:scale-100"
                      )}
                    />
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="absolute inset-0 border-2 border-nusaGold rounded-xl" 
                      />
                    )}
                    {/* Subtle Hover Hairline */}
                    {!isActive && (
                      <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className="flex-grow min-w-0 z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        {prov.index.toString().padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider truncate">
                        {prov.region}
                      </span>
                    </div>
                    <div className={cn(
                      "font-serif font-bold text-sm truncate transition-colors duration-300",
                      isActive ? "text-nusaNavy" : "text-nusaNavy/70 group-hover:text-nusaNavy"
                    )}>
                      {prov.name}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
        
      </div>
    </motion.section>
  );
};
