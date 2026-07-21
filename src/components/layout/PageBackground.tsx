"use client";

import { usePathname } from "next/navigation";
import { getBackgroundVariant, BACKGROUND_ASSETS } from "@/config/page-backgrounds";

export function PageBackground() {
  const pathname = usePathname();
  const variant = getBackgroundVariant(pathname);
  const assets = BACKGROUND_ASSETS[variant];

  return (
    <picture className="fixed inset-0 z-0 w-full h-[100dvh] pointer-events-none select-none">
      <source media="(max-width: 767px)" srcSet={assets.mobile} />
      <img 
        src={assets.desktop} 
        alt="" 
        aria-hidden="true" 
        className="w-full h-full object-cover object-center pointer-events-none select-none" 
      />
    </picture>
  );
}
