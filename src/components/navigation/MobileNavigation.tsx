"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NavigationItem } from "./navigation.types";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  language: "id" | "en";
  setLanguage: (lang: "id" | "en") => void;
  activeId: string | null;
  activeChildId: string | null;
}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  language,
  setLanguage,
  activeId,
  activeChildId
}: MobileNavigationProps) {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const toggleDropdown = (id: string) => {
    setExpandedDropdown(expandedDropdown === id ? null : id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100000] flex flex-col bg-[#F8F4EA] bg-[url('/assets/background-primary-mobile.webp')] bg-cover bg-center bg-no-repeat lg:hidden overflow-hidden"
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-5 sm:py-6 relative z-10 border-b border-[#2D2419]/10 pt-safe-top">
            <Link href="/" onClick={onClose}>
              <Image
                src="/assets/branding/NUSANTARAYA_logo-full.webp"
                alt="Nusantaraya"
                className="h-8 sm:h-9 w-auto object-contain drop-shadow-sm"
                width={0}
                height={0}
                sizes="100vw"
              />
            </Link>
            <button
              className="p-2 text-[#2D2419] bg-[#2D2419]/5 hover:bg-[#2D2419]/10 border border-[#2D2419]/10 rounded-full active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
              onClick={onClose}
              aria-label="Tutup Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 flex flex-col px-8 relative z-10 overflow-y-auto pb-safe-bottom">
            <div className="flex flex-col gap-6 pt-8 pb-10">
              {items.map((item, i) => {
                const isActive = activeId === item.id;

                if (item.children) {
                  const isExpanded = expandedDropdown === item.id;
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col"
                    >
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className={`group flex items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-lg ${
                          isActive ? "text-[#C9A84C]" : "text-[#2D2419] hover:text-[#C9A84C]"
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono text-[#2D2419]/40 group-hover:text-[#C9A84C]/70 transition-colors">
                            0{i + 1}
                          </span>
                          <span className="text-4xl sm:text-5xl font-serif font-medium tracking-wide">
                            {item.label[language]}
                          </span>
                        </div>
                        <ChevronDown 
                          size={24} 
                          className={`text-[#2D2419]/50 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pt-6 pl-12">
                              {item.children.map((child) => (
                                <Link
                                  key={child.id}
                                  href={child.href}
                                  onClick={onClose}
                                  className={`text-xl sm:text-2xl font-serif tracking-wide transition-colors focus-visible:outline-none focus-visible:text-[#C9A84C] ${
                                    activeChildId === child.id ? "text-[#C9A84C]" : "text-[#2D2419]/80 hover:text-[#C9A84C]"
                                  }`}
                                >
                                  {child.label[language]}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href || "#"}
                      onClick={onClose}
                      className={`group flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-lg ${
                        isActive ? "text-[#C9A84C]" : "text-[#2D2419] hover:text-[#C9A84C]"
                      }`}
                    >
                      <span className="text-[10px] font-mono text-[#2D2419]/40 group-hover:text-[#C9A84C]/70 transition-colors">
                        0{i + 1}
                      </span>
                      <span className="text-4xl sm:text-5xl font-serif font-medium tracking-wide">
                        {item.label[language]}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full h-[1px] bg-gradient-to-r from-[#2D2419]/20 to-transparent my-6 origin-left mt-auto" 
            />

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-6 pb-8"
            >
              <Link
                href="/explore"
                onClick={onClose}
                className="group relative inline-flex items-center justify-between w-full sm:w-max bg-[#1A1A1A] text-white px-6 py-4 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden active:scale-95 transition-transform shadow-[0_8px_30px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2"
              >
                <span className="relative z-10">{language === "id" ? "Mulai Jelajah" : "Start Exploring"}</span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#C9A84C] group-hover:text-black transition-colors">
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-[#2D2419] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>

              <div className="flex items-center gap-6 text-[#2D2419]/50 text-xs font-medium tracking-widest uppercase">
                <button 
                  onClick={() => setLanguage("id")}
                  className={`hover:text-[#2D2419] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded px-1 ${language === "id" ? "font-bold text-[#2D2419]" : ""}`}
                >
                  ID
                </button>
                <span className="w-1 h-1 rounded-full bg-[#2D2419]/30" />
                <button 
                  onClick={() => setLanguage("en")}
                  className={`hover:text-[#2D2419] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded px-1 ${language === "en" ? "font-bold text-[#2D2419]" : ""}`}
                >
                  EN
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
