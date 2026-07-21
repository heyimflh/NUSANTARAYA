"use client";

import Link from "next/link";
import { NavigationItem } from "./navigation.types";
import { NusaEcosystemDropdown } from "./NusaEcosystemDropdown";

interface DesktopNavigationProps {
  items: NavigationItem[];
  language: "id" | "en";
  activeId: string | null;
  activeChildId: string | null;
  isScrolled: boolean;
}

export function DesktopNavigation({
  items,
  language,
  activeId,
  activeChildId,
  isScrolled
}: DesktopNavigationProps) {
  return (
    <div className={`hidden lg:flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'bg-[#34291A]/5 border border-[#34291A]/10' : 'bg-white/10 border border-white/20'
    }`}>
      {items.map((item) => {
        const isActive = activeId === item.id;

        if (item.children) {
          return (
            <NusaEcosystemDropdown
              key={item.id}
              childrenItems={item.children}
              language={language}
              isActive={isActive}
              activeChildId={activeChildId}
              isScrolled={isScrolled}
            />
          );
        }

        return (
          <Link
            key={item.id}
            href={item.href || "#"}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] ${
              isActive
                ? (isScrolled ? 'bg-[#C9A84C] text-white shadow-md font-semibold' : 'bg-white text-[#C9A84C] font-semibold')
                : (isScrolled ? 'text-[#C9A84C] hover:bg-[#34291A]/10 font-bold' : 'text-white hover:bg-white/20 font-medium')
            }`}
          >
            {item.label[language]}
          </Link>
        );
      })}
    </div>
  );
}
