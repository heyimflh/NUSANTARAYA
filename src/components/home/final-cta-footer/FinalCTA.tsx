"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { finalCta } from "@/data/footerLinks";
import { FinalCTAVisual } from "./FinalCTAVisual";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden px-5 py-32 text-center md:py-48"
    >
      <FinalCTAVisual />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mb-6 inline-flex rounded-full border border-[#fff6df]/18 bg-[#fff6df]/8 px-5 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-[#f4d88a]! shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_60px_rgba(1,18,12,0.22)] backdrop-blur-2xl"
        >
          {finalCta.eyebrow}
        </motion.p>

        <motion.h2
          id="final-cta-title"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: 0.14,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-balance font-heading text-[clamp(3.2rem,8.4vw,7.8rem)] font-black uppercase leading-[0.8] tracking-[-0.078em] text-[#fff6df]! drop-shadow-[0_28px_60px_rgba(2,24,16,0.45)] md:leading-[0.76]"
        >
          {finalCta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-7 max-w-2xl text-balance text-sm font-semibold leading-relaxed text-[#f1ead4]/82 md:text-base"
        >
          {finalCta.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row"
        >
          <Link
            href={finalCta.primary.href}
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#adff6b] px-7 text-xs font-black uppercase tracking-[-0.02em] text-[#123527] shadow-[0_18px_44px_rgba(173,255,107,0.22)] transition hover:-translate-y-0.5 hover:bg-[#d4ff9f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#adff6b]"
          >
            {finalCta.primary.label}
          </Link>
          <Link
            href={finalCta.secondary.href}
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#fff6df]/20 bg-[#fff6df]/10 px-7 text-xs font-black uppercase tracking-[-0.02em] text-[#fff6df] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#f4d88a]/56 hover:bg-[#f4d88a] hover:text-[#123527] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d88a]"
          >
            {finalCta.secondary.label}
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="mt-5 text-xs font-medium text-[#f1ead4]/62"
        >
          {finalCta.microcopy}
        </motion.p>
      </div>
    </section>
  );
}
