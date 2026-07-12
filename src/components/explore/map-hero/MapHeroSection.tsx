"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ArrowDown, Compass } from "lucide-react";

export const MapHeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center overflow-hidden bg-background">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[center_30%]"
          >
            <source
              src="/assets/background/background-explorer.webm"
              type="video/webm"
            />
          </video>
        </div>


        {/* Reduced Gradient Overlay to show more video */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-transparent w-full md:w-[60%] lg:w-[55%]" />
        
        {/* Additional gradient for bottom fade for seamless transition */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/50 via-transparent to-transparent h-[30%] mt-auto" />

        {/* Main Content Container */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-[500px] mt-12 lg:mt-16">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-4 text-[#C9A84C] font-inter tracking-[0.25em] text-[13px] font-bold uppercase mb-6"
            >
              Peta Interaktif
              <div className="flex items-center opacity-80">
                <div className="h-[1px] w-12 bg-[#C9A84C]"></div>
                {/* Small cross icon similar to design */}
                <div className="relative w-3 h-3 ml-1 flex items-center justify-center text-[#C9A84C]">
                  <div className="w-[1px] h-full bg-current absolute"></div>
                  <div className="h-[1px] w-full bg-current absolute"></div>
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-playfair text-[48px] md:text-[64px] lg:text-[76px] text-[#0D1B2A] font-semibold leading-[1.05] mb-8"
            >
              Jelajahi 38 Provinsi
              <br />
              dari Satu Peta
            </motion.h1>

            {/* Gold Divider Line with Diamond */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex items-center justify-start mb-8 origin-left"
            >
              <div className="h-[1px] w-full max-w-[320px] bg-[#C9A84C]/40 relative">
                <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#C9A84C]"></div>
              </div>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="font-inter text-[#0D1B2A]/70 text-[15px] md:text-[17px] leading-[1.7] mb-12 max-w-[480px]"
            >
              Pilih provinsi, temukan budaya, kuliner, destinasi, sejarah, jalur
              rempah, dan potensi masa depan Indonesia dalam satu pengalaman peta
              digital interaktif.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a
                href="#interactive-map"
                className="bg-[#D4B56A] text-[#0D1B2A] px-8 py-3.5 rounded-full font-inter font-medium text-[15px] flex items-center gap-3 hover:bg-[#C9A84C] transition-colors shadow-sm"
              >
                Mulai Jelajah
                <ArrowRight className="w-[18px] h-[18px]" />
              </a>
              <a
                href="#flagship-provinces"
                className="flex items-center gap-3 text-[#0D1B2A] font-inter text-[15px] font-medium group transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-[#0D1B2A]/20 flex items-center justify-center group-hover:bg-[#0D1B2A] group-hover:text-white transition-colors">
                  <Compass className="w-[16px] h-[16px]" />
                </div>
                Lihat Unggulan
              </a>
            </motion.div>
          </div>
        </div>

        {/* Ornaments - Elegant Gold Lotus (Bleeding off bottom-left corner to avoid overlap) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 15 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="absolute -bottom-16 -left-16 md:-bottom-24 md:-left-24 z-10 opacity-30 pointer-events-none w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            {/* Center petal */}
            <path d="M100 40 C 120 70, 130 110, 100 160 C 70 110, 80 70, 100 40 Z" fill="url(#goldGradient)" opacity="0.7"/>
            <path d="M100 40 C 120 70, 130 110, 100 160 C 70 110, 80 70, 100 40 Z" stroke="#C9A84C" strokeWidth="1.5" opacity="0.9"/>
            
            {/* Side petals 1 */}
            <path d="M100 160 C 80 150, 40 120, 30 80 C 60 70, 80 90, 100 120" fill="url(#goldGradient)" opacity="0.5"/>
            <path d="M100 160 C 80 150, 40 120, 30 80 C 60 70, 80 90, 100 120" stroke="#C9A84C" strokeWidth="1.5" opacity="0.8"/>
            <path d="M100 160 C 120 150, 160 120, 170 80 C 140 70, 120 90, 100 120" fill="url(#goldGradient)" opacity="0.5"/>
            <path d="M100 160 C 120 150, 160 120, 170 80 C 140 70, 120 90, 100 120" stroke="#C9A84C" strokeWidth="1.5" opacity="0.8"/>
            
            {/* Side petals 2 */}
            <path d="M100 160 C 70 165, 20 150, 10 110 C 40 100, 70 130, 90 150" fill="url(#goldGradient)" opacity="0.3"/>
            <path d="M100 160 C 70 165, 20 150, 10 110 C 40 100, 70 130, 90 150" stroke="#C9A84C" strokeWidth="1" opacity="0.6"/>
            <path d="M100 160 C 130 165, 180 150, 190 110 C 160 100, 130 130, 110 150" fill="url(#goldGradient)" opacity="0.3"/>
            <path d="M100 160 C 130 165, 180 150, 190 110 C 160 100, 130 130, 110 150" stroke="#C9A84C" strokeWidth="1" opacity="0.6"/>

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="goldGradient" x1="100" y1="40" x2="100" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#D4B56A"/>
                <stop offset="100%" stopColor="#8C6D23"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Bottom Wave & Scroll Indicator */}
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
          {/* Wave SVG matching the image's smooth wave */}
          <div className="relative w-full h-[80px] md:h-[120px] lg:h-[160px]">
            <svg
              viewBox="0 0 1440 160"
              className="absolute bottom-0 w-full h-full text-background fill-current preserve-3d"
              preserveAspectRatio="none"
            >
              <path d="M0,160 L1440,160 L1440,80 C1100,160 800,0 400,60 C200,90 0,60 0,60 Z" />
            </svg>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-auto"
          >
            <span className="font-inter text-[#0D1B2A]/50 text-[11px] md:text-xs tracking-wide mb-2">
              Scroll untuk jelajah
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-[14px] h-[14px] md:w-4 md:h-4 text-[#C9A84C]" />
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
