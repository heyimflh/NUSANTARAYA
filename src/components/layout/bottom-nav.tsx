"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/app-context";
import { Home, Map, Route, Stamp, Menu } from "lucide-react";

/**
 * BottomNav — Mobile Bottom Navigation (PRD §14.2)
 * 5 items: Home, Map, Routes, Passport, Menu
 * Hanya muncul di mobile (< md).
 */

const NAV_ITEMS = [
  { label: "Beranda", labelEn: "Home", href: "/", icon: Home },
  { label: "Peta", labelEn: "Map", href: "/map", icon: Map },
  { label: "Rute", labelEn: "Routes", href: "/routes", icon: Route },
  { label: "Passport", labelEn: "Passport", href: "/passport", icon: Stamp },
  { label: "Menu", labelEn: "Menu", href: "/menu", icon: Menu },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border-light bg-background/90 backdrop-blur-lg safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 min-w-[52px] py-1.5 rounded-xl",
                "transition-all duration-150",
                isActive
                  ? "text-gold"
                  : "text-text-muted hover:text-text-secondary"
              )}
            >
              <div className={cn(
                "relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-200",
                isActive && "bg-gold/10"
              )}>
                <Icon className={cn("w-5 h-5", isActive && "stroke-[2.5]")} />
                {/* Active dot indicator */}
                {isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-gold" />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium leading-none",
                isActive && "font-semibold"
              )}>
                {language === "en" ? item.labelEn : item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
