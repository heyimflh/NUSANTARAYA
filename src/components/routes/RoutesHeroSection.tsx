"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Map } from "lucide-react";

export const RoutesHeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center overflow-hidden [--wave-h:80px] md:[--wave-h:120px] lg:[--wave-h:160px]">
        {/* Masked Container for Video and Overlays */}
        <div 
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            maskImage: `linear-gradient(black, black), url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 160' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L1440,0 L1440,80 C1100,160 800,0 400,60 C200,90 0,60 0,60 L0,60 Z' fill='black'/%3E%3C/svg%3E")`,
            WebkitMaskImage: `linear-gradient(black, black), url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 160' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L1440,0 L1440,80 C1100,160 800,0 400,60 C200,90 0,60 0,60 L0,60 Z' fill='black'/%3E%3C/svg%3E")`,
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
            className="w-full h-full object-cover object-[center_30%]"
          >
            <source
              src="/assets/background/background-route.webm"
              type="video/webm"
            />
          </video>

          {/* Reduced Gradient Overlay to show more video */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-transparent w-full md:w-[60%] lg:w-[55%]" />
          
          {/* Additional gradient for bottom fade for seamless transition */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/50 via-transparent to-transparent h-[30%] mt-auto" />
        </div>

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
              Nusa Route Planner
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
              Rencanakan
              <br />
              Petualanganmu
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
              Susun rute perjalanan impianmu. Temukan destinasi tersembunyi, estimasi waktu, dan buat pengalaman wisata yang tak terlupakan di seluruh Nusantara.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a
                href="#route-planner"
                className="bg-[#D4B56A] text-[#0D1B2A] px-8 py-3.5 rounded-full font-inter font-medium text-[15px] flex items-center gap-3 hover:bg-[#C9A84C] transition-colors shadow-sm"
              >
                Buat Rute
                <ArrowRight className="w-[18px] h-[18px]" />
              </a>
              <a
                href="#inspirasi-rute"
                className="flex items-center gap-3 text-[#0D1B2A] font-inter text-[15px] font-medium group transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-[#0D1B2A]/20 flex items-center justify-center group-hover:bg-[#0D1B2A] group-hover:text-white transition-colors">
                  <Map className="w-[16px] h-[16px]" />
                </div>
                Inspirasi Rute
              </a>
            </motion.div>
          </div>
        </div>



        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none h-[80px] md:h-[120px] lg:h-[160px]">

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-auto"
          >
            <span className="font-inter text-[#0D1B2A]/50 text-[11px] md:text-xs tracking-wide mb-2">
              Scroll untuk merencanakan
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
