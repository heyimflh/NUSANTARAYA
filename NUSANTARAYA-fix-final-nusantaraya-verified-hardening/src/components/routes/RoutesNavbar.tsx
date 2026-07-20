"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RouteSectionLink } from "@/components/routes/RouteSectionLink";
import { useLanguage } from "@/context/app-context";

export const RoutesNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  // Force smart color mode from the start for Routes Page
  const isScrolled = true;

  return (
    <>
      {/* FIXED NAVBAR */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 transition-all duration-300 animate-[navSlideIn_0.8s_ease-out_both] ${ 
          isScrolled 
            ? 'bg-transparent py-3 lg:py-4' 
            : 'bg-transparent py-5 sm:py-6 md:py-8 lg:py-10'
        }`}
      >
        {/* Logo — responsive sizing */}
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/branding/NUSANTARAYA_logo-full.png" 
            alt="Nusantaraya" 
            className={`h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 ${
              isScrolled ? '' : 'brightness-0 invert'
            }`} 
          />
        </Link>

        {/* Nav Links - Center Pill — Only visible on desktop (lg+) */}
        <div className={`hidden lg:flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'bg-[#34291A]/5 border border-[#34291A]/10' : 'bg-white/10 border border-white/20'
        }`}>
          {['Beranda', 'Eksplorasi', 'Rute', 'Kuliner', 'Tentang'].map((item, idx) => (
            <Link 
              key={item} 
              href={
                idx === 0 ? "/" :
                idx === 1 ? "/explore" : 
                idx === 2 ? "/routes" : "#"
              }
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                idx === 2 // Set Rute as active
                  ? (isScrolled ? 'bg-[#C9A84C] text-white shadow-md' : 'bg-white text-black')
                  : (isScrolled ? 'text-[#5C4A26] hover:bg-[#34291A]/10' : 'text-white hover:bg-white/20')
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Button — Full on desktop */}
        <RouteSectionLink section="planner" className={`hidden lg:flex group items-center gap-3 backdrop-blur-md transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-medium active:scale-95 ${
            isScrolled 
              ? 'bg-[#34291A]/5 border border-[#34291A]/10 text-[#5C4A26] hover:bg-[#34291A]/10' 
              : 'bg-white/10 border border-white/20 text-white hover:bg-white/30'
          }`}
          aria-label="Buat Rute"
        >
          <span>Buat Rute</span>
          <div className={`p-1 rounded-full group-hover:rotate-45 transition-transform duration-300 ${
            isScrolled ? 'bg-[#C9A84C] text-white shadow-md' : 'bg-white text-black'
          }`}>
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </RouteSectionLink>

        {/* Hamburger Menu Button — Mobile/Tablet */}
        <button 
          className={`lg:hidden p-2 backdrop-blur-md rounded-full active:scale-95 transition-all duration-300 ${
            isScrolled ? 'bg-[#34291A]/5 border border-[#34291A]/10 text-[#5C4A26]' : 'bg-white/10 border border-white/20 text-white'
          }`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Buka Menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile/Tablet Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100000] flex flex-col bg-[#F8F4EA] bg-[url('/assets/background-primary-mobile.png')] bg-cover bg-center bg-no-repeat lg:hidden overflow-hidden"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-5 sm:py-6 relative z-10 border-b border-[#2D2419]/10">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/assets/branding/NUSANTARAYA_logo-full.png" 
                  alt="Nusantaraya" 
                  className="h-8 sm:h-9 w-auto object-contain drop-shadow-sm" 
                />
              </Link>
              <button
                className="p-2 text-[#2D2419] bg-[#2D2419]/5 hover:bg-[#2D2419]/10 border border-[#2D2419]/10 rounded-full active:scale-95 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-8 relative z-10">
              <div className="flex flex-col gap-6">
                {["Beranda", "Eksplorasi", "Rute", "Kuliner", "Tentang"].map(
                  (item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={
                          i === 0 ? "/" :
                          i === 1 ? "/explore" :
                          i === 2 ? "/routes" : "#"
                        }
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center gap-4 text-[#2D2419] hover:text-[#C9A84C] transition-colors"
                      >
                        <span className="text-[10px] font-mono text-[#2D2419]/40 group-hover:text-[#C9A84C]/70 transition-colors">
                          0{i + 1}
                        </span>
                        <span className="text-4xl sm:text-5xl font-serif font-medium tracking-wide">
                          {item}
                        </span>
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* Divider */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full h-[1px] bg-gradient-to-r from-[#2D2419]/20 to-transparent my-10 origin-left" 
              />

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col gap-8"
              >
                <RouteSectionLink section="planner" onNavigate={() => setIsMenuOpen(false)} className="group relative inline-flex items-center justify-between w-full sm:w-max bg-[#1A1A1A] text-white px-6 py-4 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden active:scale-95 transition-transform shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                  <span className="relative z-10">Buat Rute</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#C9A84C] group-hover:text-black transition-colors">
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-[#2D2419] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </RouteSectionLink>

                <div className="flex items-center gap-6 text-[#2D2419]/50 text-xs font-medium tracking-widest uppercase">
                  <button 
                    onClick={() => setLanguage("id")}
                    className={`hover:text-[#2D2419] transition-colors ${language === "id" ? "font-bold text-[#2D2419]" : ""}`}
                  >
                    ID
                  </button>
                  <span className="w-1 h-1 rounded-full bg-[#2D2419]/30" />
                  <button 
                    onClick={() => setLanguage("en")}
                    className={`hover:text-[#2D2419] transition-colors ${language === "en" ? "font-bold text-[#2D2419]" : ""}`}
                  >
                    EN
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



