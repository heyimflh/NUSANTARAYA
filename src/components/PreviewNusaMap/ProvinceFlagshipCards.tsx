"use client";

import { FeaturedProvince } from "@/data/preview-map";
import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface ProvinceFlagshipCardsProps {
  provinces: FeaturedProvince[];
}

export default function ProvinceFlagshipCards({ provinces }: ProvinceFlagshipCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numCards = provinces.length;
    const index = Math.min(numCards - 1, Math.floor(latest * numCards));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  // Preload all thumbnails for instant swapping
  const thumbnails = useMemo(() => provinces.map(p => p.thumbnail), [provinces]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full" 
      style={{ height: `${provinces.length * 50}vh` }}
    >
      {/* Preload images for instant transitions */}
      <div className="hidden">
        {thumbnails.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>

      {/* Pinned Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Background Video — clearer with strategic gradients */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover will-change-transform"
          >
            <source src="/assets/map/video_optimized-flagship.webm" type="video/webm" />
          </video>
          {/* Teal base overlay for clear video but good contrast */}
          <div className="absolute inset-0 bg-[#0D9488]/20 mix-blend-multiply"></div>
          {/* Gradient to darken the right side where text sits, using deep teal */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#062B35]/70 to-[#062B35]/95"></div>
          {/* Gradient to frame top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#062B35]/80 via-transparent to-[#062B35]/70"></div>
        {/* Subtle cyan glow at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#22D3EE]/15 to-transparent"></div>
      </div>

      {/* Bulletproof gap filler: covers any 1px sub-pixel rendering gap at the very top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F8F4EA] z-40"></div>

      {/* The Wave Divider */}
      <div className="custom-shape-divider-top-1782978684 pointer-events-none z-30">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

        {/* Scroll Indicator Hint */}
        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-30 flex flex-col items-center gap-3 pointer-events-none opacity-70 hidden md:flex">
          <span className="text-[9px] font-extrabold tracking-[0.3em] text-[#67E8F9] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Scroll to Explore
          </span>
          <div className="w-[1px] h-12 bg-[#22D3EE]/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-[#67E8F9]"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-5 md:px-12 flex flex-col h-full pt-16 sm:pt-20 md:pt-32 pb-6 sm:pb-12">
          
          {/* Header Section */}
          <div className="flex-shrink-0 mb-4 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-4 relative z-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                <span className="w-6 md:w-12 h-[2px] bg-[#67E8F9]"></span>
                <span className="text-[9px] md:text-xs font-extrabold tracking-[0.35em] text-[#67E8F9] uppercase">
                  Destinasi Pilihan
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4 leading-tight drop-shadow-lg">
                Provinsi <span className="italic font-light text-[#22D3EE]">Flagship</span>
              </h3>
              <p className="text-[#ECFDF5] text-sm md:text-base lg:text-lg hidden sm:block max-w-lg leading-relaxed font-light">
                Jelajahi 8 provinsi unggulan dengan pilar cerita terdalam yang memukau.
              </p>
            </div>
            
            <button className="hidden lg:flex items-center gap-3 text-sm font-bold text-[#67E8F9] hover:text-white transition-colors uppercase tracking-widest pb-2 border-b-2 border-[#67E8F9]/40 hover:border-white group">
              Lihat Semua Provinsi
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Progress indicator */}
          <div className="flex-shrink-0 flex items-center gap-2 mb-4 md:mb-8">
            {provinces.map((_, i) => (
              <div
                key={i}
                className={`h-[3px] rounded-full transition-all duration-500 will-change-[width,background-color] ${
                  i === activeIndex 
                    ? 'w-8 bg-[#67E8F9]' 
                    : i < activeIndex 
                      ? 'w-3 bg-[#22D3EE]/50' 
                      : 'w-3 bg-white/20'
                }`}
              />
            ))}
            <span className="text-[10px] md:text-xs text-white/50 ml-2 md:ml-3 tabular-nums font-mono">
              {String(activeIndex + 1).padStart(2, '0')} / {String(provinces.length).padStart(2, '0')}
            </span>
          </div>

          {/* Split Layout */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16 relative flex-1 min-h-0 items-center justify-between w-full pb-4 md:pb-8">
            
            {/* Left: Card Stack Visual */}
            <div className="hidden lg:block w-[45%] h-full max-h-[55vh] relative perspective-1000">
              {/* Decorative background cards to enhance the stack illusion */}
              <div className="absolute inset-0 rounded-3xl bg-[#062B35]/40 border border-[#22D3EE]/20 transform rotate-[-4deg] translate-y-4 scale-95 shadow-xl will-change-transform" />
              <div className="absolute inset-0 rounded-3xl bg-[#062B35]/60 border border-[#67E8F9]/30 transform rotate-[-2deg] translate-y-2 scale-[0.98] shadow-2xl will-change-transform" />
              
              {/* Main card container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(6,43,53,0.5)] border border-white/10 bg-[#062B35] group cursor-default">
                <AnimatePresence mode="popLayout" custom={activeIndex}>
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: "15%", scale: 0.9, zIndex: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1, zIndex: 10 }}
                    exit={{ opacity: 0, y: "-15%", scale: 1.05, zIndex: 20 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
                    className="absolute inset-0 will-change-transform"
                  >
                    <img
                      src={provinces[activeIndex]?.thumbnail}
                      alt={provinces[activeIndex]?.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                    {/* Gradient overlay on image to make text pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
                    
                    {/* Inner glowing border on hover */}
                    <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-[#67E8F9]/30 rounded-3xl transition-colors duration-700 pointer-events-none" />
                    
                    {/* Province name overlay on the card */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 pointer-events-none flex flex-col items-start transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                      >
                        <span className="inline-block px-3 py-1.5 mb-3 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-extrabold tracking-[0.25em] text-white border border-white/40 uppercase shadow-lg">
                          {provinces[activeIndex]?.region}
                        </span>
                        <h4 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md leading-tight" style={{ color: '#67E8F9', textShadow: '0px 4px 12px rgba(0,0,0,0.8)' }}>
                          {provinces[activeIndex]?.name}
                        </h4>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>            {/* Right: Shifting Text Column */}
            <div className="w-full lg:w-[55%] flex flex-col h-full min-h-0 lg:min-h-[500px] max-h-full lg:max-h-[80vh] relative justify-start lg:justify-center pr-2 md:pr-4 overflow-hidden lg:overflow-visible pb-2 lg:pb-10 pt-2 lg:pt-0">
              
              <AnimatePresence mode="popLayout">
                {provinces.slice(activeIndex, Math.min(activeIndex + 4, provinces.length)).map((province, i) => {
                  const isFirst = i === 0;

                  return (
                    <motion.div
                      key={province.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isFirst ? 1 : Math.max(0.2, 0.5 - i * 0.15), 
                        y: 0,
                        scale: isFirst ? 1 : 0.98 - i * 0.02,
                      }}
                      exit={{ opacity: 0, y: -20, scale: 1.02 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.16, 1, 0.3, 1], // clean swift ease
                        layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                      }}
                      className="flex flex-col origin-left mb-4 md:mb-6 will-change-transform"
                    >
                      {/* Mobile image fallback */}
                      <AnimatePresence>
                        {isFirst && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden w-full overflow-hidden shrink-0"
                          >
                            <div className="w-full h-40 sm:h-48 md:h-64 rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-5 mt-1 relative shadow-lg md:shadow-[0_10px_30px_rgba(6,43,53,0.5)] border border-white/10">
                              <img 
                                src={province.thumbnail} 
                                alt={province.name} 
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#062B35]/70 to-transparent pointer-events-none" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <h4 className={`font-serif font-bold leading-tight transition-all duration-500 ${
                        isFirst 
                          ? 'text-2xl sm:text-4xl md:text-6xl lg:text-[4rem] text-white drop-shadow-md' 
                          : 'text-lg sm:text-2xl md:text-4xl lg:text-[2.75rem] text-[#ECFDF5]/40 hover:text-[#ECFDF5]/60'
                      }`}>
                        {province.name}
                      </h4>
                      
                      {/* Accordion Content */}
                      <AnimatePresence>
                        {isFirst && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#67E8F9] text-sm md:text-2xl font-medium mt-1 md:mt-4 mb-2 leading-relaxed max-w-2xl">
                              {province.tagline}
                            </p>
                            
                            <p className="text-[#ECFDF5]/80 text-xs md:text-base font-light mb-3 md:mb-6 leading-relaxed max-w-2xl line-clamp-3 md:line-clamp-none">
                              {province.description}
                            </p>
                            
                            <div className="flex items-center gap-1.5 md:gap-3 flex-wrap mb-4">
                              {province.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-1 md:gap-2 bg-[#22D3EE]/10 backdrop-blur-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full border border-[#22D3EE]/30 hover:border-[#67E8F9]/60 transition-colors shadow-sm">
                                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#67E8F9] shadow-[0_0_8px_rgba(103,232,249,0.8)]"></div>
                                  <span className="text-[9px] md:text-[13px] font-semibold text-white tracking-wide">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-1 pb-4 md:pt-2 md:pb-6">
                              <a 
                                href={province.href}
                                className="group/btn relative inline-flex items-center gap-2 md:gap-3 px-5 py-2 md:px-9 md:py-4 rounded-full text-[9px] md:text-[13px] font-bold tracking-[0.2em] uppercase overflow-hidden border border-[#14B8A6]/40 shadow-lg"
                              >
                                {/* Inner animated background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0D9488] to-[#0F766E] transition-transform duration-500 ease-out group-hover/btn:scale-110" />
                                
                                {/* Shimmer Sweep Effect */}
                                <div className="absolute top-0 bottom-0 left-[-100%] w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out" />
                                
                                <span className="relative z-10 text-white group-hover/btn:text-white transition-colors duration-300 drop-shadow-sm">
                                  Jelajahi {province.name}
                                </span>
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10 text-white transform transition-transform duration-500 ease-out group-hover/btn:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
