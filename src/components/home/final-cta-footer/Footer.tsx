"use client";

import { footerLinkGroups } from "@/data/footerLinks";
import { FooterBrand } from "./FooterBrand";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <div className="relative z-10 w-full bg-[#062c21]/94 px-5 pb-8 pt-14 backdrop-blur-2xl md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,246,223,0.12),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(173,255,107,0.09),transparent_26%),linear-gradient(180deg,rgba(255,246,223,0.045)_0%,rgba(255,246,223,0)_44%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#fff6df]/32 to-transparent" />

      <div className="relative mx-auto max-w-310">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.35fr_0.9fr] lg:gap-14">
          <FooterBrand />

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:pt-1"
          >
            {footerLinkGroups.map((group, idx) => (
              <FooterLinkGroup key={idx} group={group} />
            ))}
          </nav>

          <div className="border-t border-[#fff6df]/12 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="font-heading text-[11px] font-black uppercase tracking-[-0.01em] text-[#fff6df]!">
              Gabung Nusa Club
            </p>
            <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-[#f1ead4]/72">
              Terima cerita, itinerary budaya, dan rilis fitur baru dari
              NUSANTARAYA. Gratis untuk penjelajah awal.
            </p>
            <form
              className="mt-5 flex gap-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="nusa-club-email" className="sr-only">
                Email untuk Nusa Club
              </label>
              <input
                id="nusa-club-email"
                type="email"
                className="min-w-0 flex-1 rounded-full border border-[#fff6df]/14 bg-[#fff6df]/12 px-4 py-2.5 text-xs font-semibold text-[#fff6df] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition placeholder:text-[#f1ead4]/46 focus:border-[#f4d88a]/70 focus:bg-[#fff6df]/18"
                placeholder="Email"
              />
              <button
                type="submit"
                className="rounded-full bg-[#adff6b] px-4 py-2.5 text-[10px] font-black uppercase text-[#123527] shadow-[0_14px_34px_rgba(173,255,107,0.16)] transition hover:-translate-y-0.5 hover:bg-[#d4ff9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#adff6b]"
              >
                Submit
              </button>
            </form>
            <p className="mt-3 text-[10px] leading-relaxed text-[#f1ead4]/44">
              Dengan bergabung, kamu setuju menerima update pilihan dari
              NUSANTARAYA.
            </p>
          </div>
        </div>

        <FooterBottom />
      </div>
    </div>
  );
}
