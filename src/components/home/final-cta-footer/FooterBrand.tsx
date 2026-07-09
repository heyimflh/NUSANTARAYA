"use client";

import Image from "next/image";
import { footerMeta } from "@/data/footerLinks";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <Image
          src="/assets/branding/NUSANTARAYA_logo-full.png"
          alt="NUSANTARAYA"
          width={190}
          height={48}
          className="h-9 w-auto object-contain brightness-0 invert opacity-95 transition-opacity hover:opacity-100"
        />
      </div>

      <div>
        <p className="font-heading text-[11px] font-black uppercase tracking-[-0.01em] text-[#d6ff9b]!">
          {footerMeta.tagline}
        </p>
        <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-[#f1ead4]/68">
          {footerMeta.description}
        </p>
      </div>
    </div>
  );
}
