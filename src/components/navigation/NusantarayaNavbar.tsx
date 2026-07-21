"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/app-context";
import { NAVIGATION_ITEMS, getActiveNavigationId, getActiveChildId } from "@/config/navigation";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

interface NusantarayaNavbarProps {
  forceScrolled?: boolean;
}

export const NusantarayaNavbar = ({ forceScrolled = false }: NusantarayaNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const activeId = getActiveNavigationId(pathname);
  const activeChildId = getActiveChildId(pathname);
  const useGoldTheme = pathname !== "/" || isScrolled;

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      // Switch to scrolled mode when scrolled down
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 transition-all duration-300 animate-[navSlideIn_0.8s_ease-out_both] ${ 
          isScrolled 
            ? 'bg-transparent py-3 lg:py-4' 
            : 'bg-transparent py-5 sm:py-6 md:py-8 lg:py-10'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-lg">
          <Image
            src="/assets/branding/NUSANTARAYA_logo-full.webp" 
            alt="Nusantaraya" 
            className={`h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 ${
              !useGoldTheme ? 'brightness-0 invert' : ''
            }`}
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation 
          items={NAVIGATION_ITEMS}
          language={language}
          activeId={activeId}
          activeChildId={activeChildId}
          isScrolled={useGoldTheme}
        />

        {/* Right Button & CTA — Desktop only */}
        <Link
          href="/explore"
          className={`hidden lg:flex group items-center gap-3 backdrop-blur-md transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-medium active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] ${
            useGoldTheme 
              ? 'bg-[#34291A]/5 border border-[#34291A]/10 text-[#C9A84C] hover:bg-[#34291A]/10 font-bold' 
              : 'bg-white/10 border border-white/20 text-white hover:bg-white/30'
          }`}
        >
          <span>{language === "id" ? "Mulai Jelajah" : "Start Exploring"}</span>
          <div className={`p-1 rounded-full group-hover:rotate-45 transition-transform duration-300 ${
            useGoldTheme ? 'bg-[#C9A84C] text-white shadow-md' : 'bg-white text-[#C9A84C]'
          }`}>
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </Link>

        {/* Hamburger Menu Button — Mobile/Tablet */}
        <button 
          className={`lg:hidden p-2 backdrop-blur-md rounded-full active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] ${
            useGoldTheme ? 'bg-[#34291A]/5 border border-[#34291A]/10 text-[#C9A84C]' : 'bg-white/10 border border-white/20 text-white'
          }`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Buka Menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={NAVIGATION_ITEMS}
        language={language}
        setLanguage={setLanguage}
        activeId={activeId}
        activeChildId={activeChildId}
      />
    </>
  );
};
