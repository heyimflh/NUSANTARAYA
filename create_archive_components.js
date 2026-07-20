const fs = require('fs');
const path = require('path');

const navbarPath = path.resolve('src/components/archive/ArchiveNavbar.tsx');
let code = fs.readFileSync(navbarPath, 'utf-8');

// Replace component name
code = code.replace(/RoutesNavbar/g, 'ArchiveNavbar');

// Replace active state and links array
code = code.replace(
  /\['Beranda', 'Eksplorasi', 'Rute', 'Passport', 'Kuliner', 'Tentang'\]/g,
  "['Beranda', 'Eksplorasi', 'Rute', 'Passport', 'Arsip']"
);

code = code.replace(
  /idx === 1 \? "\/explore" :/g,
  'idx === 1 ? "/explore" :\n                idx === 2 ? "/routes" :\n                idx === 3 ? "/passport" :\n                idx === 4 ? "/archive" :'
);
code = code.replace(/idx === 2 \? "\/routes" :/g, '');
code = code.replace(/idx === 3 \? "\/passport" :/g, '');

code = code.replace(/idx === 2 \/\/ Set Rute as active/g, 'idx === 4 // Set Arsip as active');

// Replace the right button text and href
code = code.replace(/<RouteSectionLink section="planner"/g, '<Link href="#search"');
code = code.replace(/<\/RouteSectionLink>/g, '</Link>');
code = code.replace(/import \{ RouteSectionLink \} from "@\/components\/routes\/RouteSectionLink";/g, '');
code = code.replace(/Buat Rute/g, 'Cari Arsip');

// Write back
fs.writeFileSync(navbarPath, code);

// Now create ArchiveHeroSection.tsx
const heroContent = `"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/app-context";
import { ArrowDown } from "lucide-react";

export const ArchiveHeroSection = () => {
  const { language } = useLanguage();
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center overflow-hidden [--wave-h:80px] md:[--wave-h:120px] lg:[--wave-h:160px]">
        {/* Masked Container for Video and Overlays */}
        <div 
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            maskImage: \`linear-gradient(black, black), url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 160' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L1440,0 L1440,80 C1100,160 800,0 400,60 C200,90 0,60 0,60 L0,60 Z' fill='black'/%3E%3C/svg%3E")\`,
            WebkitMaskImage: \`linear-gradient(black, black), url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 160' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L1440,0 L1440,80 C1100,160 800,0 400,60 C200,90 0,60 0,60 L0,60 Z' fill='black'/%3E%3C/svg%3E")\`,
            maskSize: "100% calc(100% - var(--wave-h)), 100% var(--wave-h)",
            WebkitMaskSize: "100% calc(100% - var(--wave-h)), 100% var(--wave-h)",
            maskPosition: "top left, bottom left",
            WebkitMaskPosition: "top left, bottom left",
            maskRepeat: "no-repeat, no-repeat",
            WebkitMaskRepeat: "no-repeat, no-repeat",
          }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/background-primary.webp"
            className="w-full h-full object-cover object-[center_30%]"
          >
            <source
              src="/assets/background/background-archive.webm"
              type="video/webm"
            />
          </video>

          {/* Overlays */}
          <div className="absolute inset-0 z-10 bg-[#34291A]/30 w-full" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1A150D]/90 via-[#1A150D]/70 to-transparent w-full md:w-[60%] lg:w-[55%]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--archive-surface)] via-transparent to-transparent h-[30%] mt-auto" />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-[600px] mt-12 lg:mt-16">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-4 text-[#C9A84C] font-inter tracking-[0.25em] text-[13px] font-bold uppercase mb-6"
            >
              Nusa Archive
              <div className="flex items-center opacity-80">
                <div className="h-[1px] w-12 bg-[#C9A84C]"></div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg"
            >
              {language === 'id' ? "Rumah Ingatan yang Hidup" : "The Living Memory House"}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/80 font-inter font-light leading-relaxed mb-10 max-w-lg drop-shadow"
            >
              {language === 'id' 
                ? "Telusuri rekam jejak identitas kebudayaan Nusantara. Arsitektur, tarian, manuskrip, dan bunyi yang merangkai jalinan cerita kita."
                : "Trace the records of Nusantara's cultural identity. Architecture, dances, manuscripts, and sounds that weave our collective story."}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-16 lg:bottom-24 left-6 md:left-12 lg:left-20 flex items-center gap-3 text-white/60 text-sm font-medium tracking-widest uppercase cursor-pointer hover:text-white transition-colors"
            onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="p-2 border border-white/20 rounded-full animate-bounce">
              <ArrowDown size={14} />
            </div>
            {language === 'id' ? "Jelajahi Arsip" : "Explore Archive"}
          </motion.div>
        </div>
    </section>
  );
};
`;
fs.writeFileSync(path.resolve('src/components/archive/ArchiveHeroSection.tsx'), heroContent);

console.log('Created components');
