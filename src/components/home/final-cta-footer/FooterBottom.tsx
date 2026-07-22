"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { footerMeta, footerSocials } from "@/data/footerLinks";
import { isRouteAvailable } from "@/lib/routes";

const WORDMARK = "NUSANTARAYA";

const wordmarkContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.055,
    },
  },
};

const wordmarkLetterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -130,
    rotateX: -65,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 105,
      damping: 18,
      mass: 0.72,
    },
  },
};

const SocialIcons: Record<string, React.ReactNode> = {
  instagram: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  github: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  mail: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

export function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderIcon = (iconName: string) => SocialIcons[iconName] ?? null;

  return (
    <div className="mt-16 md:mt-20">
      <div className="relative flex w-full justify-center overflow-visible px-2 py-5 md:px-8">
        <motion.p
          aria-label="NUSANTARAYA"
          variants={wordmarkContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.42 }}
          className="mx-auto flex w-fit max-w-full select-none flex-nowrap justify-center whitespace-nowrap font-heading text-[clamp(3rem,9.6vw,9.8rem)] font-black uppercase leading-[0.78] tracking-[-0.065em] text-[#fff6df]! drop-shadow-[0_30px_72px_rgba(1,18,12,0.36)]"
          style={{ perspective: 1200 }}
        >
          {WORDMARK.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              aria-hidden="true"
              variants={wordmarkLetterVariants}
              className="inline-block origin-top will-change-transform"
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-6 border-t border-white/10 pt-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl text-center text-[10px] font-medium leading-relaxed text-[#e5f2dc]/48 md:text-left">
          <p>{footerMeta.copyright}</p>
          <p className="mt-1 text-[#e5f2dc]/34">
            {footerMeta.disclaimer} {footerMeta.version}
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <div className="flex items-center gap-3">
            {footerSocials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.07] text-[#e5f2dc]/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#f4d88a]/50 hover:bg-[#f4d88a] hover:text-[#123527] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d88a]"
              >
                {renderIcon(social.icon)}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.07] text-sm font-black text-[#e5f2dc]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#adff6b]/60 hover:bg-[#adff6b] hover:text-[#123527] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#adff6b]"
            >
              ↑
            </button>
          </div>

          <div className="flex gap-5 text-[10px] font-semibold text-[#e5f2dc]/48">
            <a 
              href={isRouteAvailable("/privacy") ? "/privacy" : "#"} 
              onClick={(e) => { if (!isRouteAvailable("/privacy")) e.preventDefault(); }}
              aria-disabled={!isRouteAvailable("/privacy")}
              className="transition hover:text-[#f4d88a] aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:text-[#e5f2dc]/48"
            >
              Privasi
            </a>
            <a 
              href={isRouteAvailable("/terms") ? "/terms" : "#"} 
              onClick={(e) => { if (!isRouteAvailable("/terms")) e.preventDefault(); }}
              aria-disabled={!isRouteAvailable("/terms")}
              className="transition hover:text-[#f4d88a] aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:text-[#e5f2dc]/48"
            >
              Ketentuan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
