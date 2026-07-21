"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NavigationChild } from "./navigation.types";

interface NusaEcosystemDropdownProps {
  childrenItems: NavigationChild[];
  language: "id" | "en";
  isActive: boolean;
  activeChildId: string | null;
  isScrolled: boolean;
}

export function NusaEcosystemDropdown({
  childrenItems,
  language,
  isActive,
  activeChildId,
  isScrolled
}: NusaEcosystemDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Close when path changes (handled via props if needed, but since it's Next.js Link, it often unmounts or we can just rely on the user clicking)
  
  return (
    <div 
      ref={dropdownRef} 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] ${
          isActive
            ? (isScrolled ? 'bg-[#C9A84C] text-white shadow-md font-semibold' : 'bg-white text-[#C9A84C] font-semibold')
            : (isScrolled ? 'text-[#C9A84C] hover:bg-[#34291A]/10 font-bold' : 'text-white hover:bg-white/20 font-medium')
        }`}
      >
        {language === "id" ? "Ekosistem Nusa" : "Nusa Ecosystem"}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#34291A]/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden z-50 p-2"
            role="menu"
          >
            {childrenItems.map((item) => {
              const isChildActive = activeChildId === item.id;
              
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className={`flex flex-col gap-1 p-3 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:bg-[#34291A]/5 ${
                    isChildActive 
                      ? "bg-[#C9A84C]/10" 
                      : "hover:bg-[#34291A]/5"
                  }`}
                >
                  <span className={`text-sm font-semibold ${isChildActive ? "text-[#C9A84C]" : "text-[#2D2419]"}`}>
                    {item.label[language]}
                  </span>
                  {item.description && (
                    <span className="text-xs text-[#2D2419]/60 leading-tight">
                      {item.description[language]}
                    </span>
                  )}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
