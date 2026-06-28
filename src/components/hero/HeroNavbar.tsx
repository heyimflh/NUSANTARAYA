"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, ArrowUpRight, Search, Menu, Globe } from "lucide-react";
import { useState } from "react";

export default function HeroNavbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"ID" | "EN">("ID");

  const menuItems = [
    { name: "Peta", href: "/map" },
    { name: "Arsip Budaya", href: "/archive" },
    { name: "Route Planner", href: "/routes" },
    { name: "Cerita Rakyat", href: "/cerita" },
  ];

  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6 md:px-8">
      <div className="flex items-center justify-between rounded-full bg-black/15 px-6 py-2.5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20 group-hover:bg-[#C9A84C]/25 group-hover:border-[#C9A84C]/50 transition-all duration-300">
            <Compass size={18} className="text-[#C9A84C] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <span className="text-lg font-black font-heading tracking-[0.1em] text-white drop-shadow-md">
            NUSAN<span className="text-[#C9A84C] transition-colors duration-300 group-hover:text-white">TARAYA</span>
          </span>
        </Link>

        {/* Center Menu (Desktop only) */}
        <div className="hidden md:flex items-center gap-1.5 rounded-full bg-white/5 p-1 border border-white/5">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-md scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Menu / CTA */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center gap-1.5 bg-black/40 rounded-full px-3 py-1 text-xs font-semibold text-white/95 border border-white/10">
            <button
              onClick={() => setLang("ID")}
              className={`transition-all duration-200 cursor-pointer ${
                lang === "ID" ? "text-[#C9A84C] font-bold" : "opacity-50 hover:opacity-100"
              }`}
            >
              ID
            </button>
            <span className="opacity-30">|</span>
            <button
              onClick={() => setLang("EN")}
              className={`transition-all duration-200 cursor-pointer ${
                lang === "EN" ? "text-[#C9A84C] font-bold" : "opacity-50 hover:opacity-100"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mulai Jelajah CTA (BromoRise Book Now style) */}
          <Link
            href="/map"
            className="bg-white hover:bg-[#F0EAD9] text-black text-xs md:text-sm font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] group hover:scale-105 active:scale-95"
          >
            <span>Mulai Jelajah</span>
            <span className="flex h-5 w-5 md:h-5.5 md:w-5.5 items-center justify-center rounded-full bg-black text-white group-hover:bg-[#C9A84C] group-hover:text-black transition-all duration-300">
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white hover:text-[#C9A84C] transition p-1">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}
