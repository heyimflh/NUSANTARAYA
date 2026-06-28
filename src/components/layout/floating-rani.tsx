"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/app-context";
import { MessageCircle } from "lucide-react";

/**
 * FloatingRANI — Floating AI Guide Button
 * Muncul di semua device, pojok kanan bawah.
 * Belum fungsional — hanya visual placeholder.
 */
export function FloatingRANI() {
  const { t } = useLanguage();

  const pathname = usePathname();

  // Hide global RANI button on home page since Hero has its own
  if (pathname === "/") return null;

  return (
    <button
      className={cn(
        "fixed z-40",
        // Desktop: bottom-right
        "bottom-6 right-6",
        // Mobile: above bottom nav
        "md:bottom-8 md:right-8",
        // Bottom offset for mobile bottom nav
        "max-md:bottom-20",
        // Styling
        "group flex items-center gap-2",
        "bg-gold text-white",
        "rounded-full shadow-gold",
        "transition-all duration-300",
        "hover:scale-105 hover:shadow-lg",
        "active:scale-95",
        // Size: icon only on mobile, expandable on desktop hover
        "w-12 h-12 md:w-auto md:h-12 md:px-5",
      )}
      aria-label={t("Buka RANI AI Guide", "Open RANI AI Guide")}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="hidden md:inline text-sm font-semibold whitespace-nowrap">
        RANI
      </span>
    </button>
  );
}
