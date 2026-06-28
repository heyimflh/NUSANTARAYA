"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage, useMode } from "@/context/app-context";
import { DESKTOP_NAV_ITEMS } from "@/lib/constants";
import { Globe, Search, Menu, X } from "lucide-react";

/**
 * Navbar — Desktop/Tablet Navigation
 * Logo NUSANTARAYA + menu items + language toggle + search icon.
 * Hidden di mobile (< md), replaced oleh BottomNav.
 */
export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { mode } = useMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide global navbar on home page since it uses HeroNavbar
  if (pathname === "/") return null;

  return (
    <header className="hidden md:block sticky top-0 z-50 w-full border-b border-border-light bg-background/80 backdrop-blur-lg">
      <nav className="nusa-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/assets/branding/NUSANTARAYA-full-Logo.svg"
            alt="NUSANTARAYA"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {DESKTOP_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                    isActive
                      ? "text-gold bg-gold/5"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface"
                  )}
                >
                  {language === "en" ? item.labelEn : item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
            aria-label={t("Cari", "Search")}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold",
              "border border-border hover:border-gold transition-all duration-150",
              "hover:shadow-sm"
            )}
            aria-label={t("Ganti bahasa", "Switch language")}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === "id" ? "EN" : "ID"}</span>
          </button>

          {/* Mode indicator */}
          <span className="hidden xl:inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gold/10 text-gold-dark">
            {mode}
          </span>

          {/* Tablet menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Tablet dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-light bg-background/95 backdrop-blur-lg animate-fade-in">
          <ul className="nusa-container py-3 space-y-1">
            {DESKTOP_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-gold bg-gold/5"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface"
                    )}
                  >
                    {language === "en" ? item.labelEn : item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
