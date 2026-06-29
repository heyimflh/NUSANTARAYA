'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CAROUSEL_DATA = [
  {
    id: 1,
    title: "Eksplorasi Gunung Rinjani",
    subtitle: "Nusa Tenggara",
    desc: "Mendaki puncak Rinjani dan rasakan keindahan Danau Segara Anak dari ketinggian.",
    video: "/assets/video/video4_gunungrinjani.mp4",
  },
  {
    id: 2,
    title: "Jelajah Borobudur",
    subtitle: "Jawa",
    desc: "Temukan kemegahan candi Buddha terbesar di dunia peninggalan masa lalu.",
    video: "/assets/video/video3_borobudur.mp4",
  },
  {
    id: 3,
    title: "Keajaiban Raja Ampat",
    subtitle: "Papua",
    desc: "Menyelami surga bawah laut dan gugusan pulau karang yang menakjubkan.",
    video: "/assets/video/video2_rajaampat.mp4",
  },
  {
    id: 4,
    title: "Pesona Pantai Kelingking",
    subtitle: "Bali & Nusa",
    desc: "Saksikan tebing ikonik berbentuk T-Rex di lautan biru yang jernih.",
    video: "/assets/video/video1_pantaikelingkingbali.mp4",
  },
  {
    id: 5,
    title: "Harmoni Persawahan",
    subtitle: "Nusantara",
    desc: "Nikmati ketenangan alam dengan hamparan terasering persawahan hijau membentang.",
    video: "/assets/video/video5_persawahan.mp4",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause inactive videos to prevent decoder leaks while keeping them in DOM
  useEffect(() => {
    bgVideoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) video.play().catch(() => {});
        else video.pause();
      }
    });
    cardVideoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) video.play().catch(() => {});
        else video.pause();
      }
    });
  }, [currentIndex]);

  // Auto slide every 8 seconds, but pause if tab is inactive to prevent video memory leaks
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setCurrentIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleManualSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = CAROUSEL_DATA[currentIndex];
  
  // Calculate next slides for the small cards
  const nextSlide1 = CAROUSEL_DATA[(currentIndex + 1) % CAROUSEL_DATA.length];
  const nextSlide2 = CAROUSEL_DATA[(currentIndex + 2) % CAROUSEL_DATA.length];

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden font-sans">
      {/* Background Videos (Persistent DOM to prevent decoder leaks, only active plays) */}
      {CAROUSEL_DATA.map((slide, index) => (
        <video
          key={`bg-${slide.id}`}
          ref={el => { bgVideoRefs.current[index] = el; }}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ))}

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-10 lg:px-16">
        
        {/* TOP NAVIGATION */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between w-full"
        >
          {/* Logo pure white for clean look */}
          <Link href="/">
            <img 
              src="/assets/branding/NUSANTARAYA_logo-full.png" 
              alt="Nusantaraya" 
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
            />
          </Link>

          {/* Nav Links - Center Pill */}
          <div className="hidden md:flex items-center gap-2 px-2 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            {['Beranda', 'Eksplorasi', 'Rute', 'Kuliner', 'Tentang'].map((item, idx) => (
              <Link 
                key={item} 
                href="#" 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${idx === 0 ? 'bg-white text-black' : 'text-white hover:bg-white/20'}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Button */}
          <Link href="#explore" className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all text-white px-5 py-2.5 rounded-full text-sm font-medium">
            <span className="hidden sm:inline">Mulai Jelajah</span>
            <span className="sm:hidden">Jelajah</span>
            <div className="bg-white text-black p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </Link>
        </motion.nav>

        {/* CENTER TEXT */}
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-full px-4 z-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 font-medium tracking-wide">
              Pengalaman Digital Terbaik di Indonesia
            </div>
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[1.1] tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-philosopher)', fontWeight: 700, color: '#ffffff' }}
            >
              Satu Peta, Ribuan<br />Cerita Nusantara
            </h1>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-8 mt-auto z-10">
          
          {/* Left Info Panel */}
          <div className="w-full max-w-[340px] text-white hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                style={{ color: '#ffffff' }}
              >
                <h3 className="text-2xl font-medium mb-1 drop-shadow-md" style={{ fontFamily: 'var(--font-outfit)', color: '#ffffff' }}>
                  Jelajahi Indonesia Secara Interaktif
                </h3>
                <p className="text-sm mb-5 font-light tracking-wide" style={{ color: 'rgba(255,255,255,0.8)' }}>Mulai Petualanganmu</p>
                
                {/* Feature Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {['Peta Interaktif', 'Rute Wisata', 'Cerita Budaya'].map((chip) => (
                    <span key={chip} className="text-[10px] sm:text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full" style={{ color: '#ffffff' }}>
                      {chip}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm leading-relaxed font-light mb-8 drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Jelajahi keindahan budaya, sejarah, alam, dan kuliner Indonesia dalam satu sentuhan digital interaktif.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex items-center gap-3">
                  <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                    Eksplorasi Peta
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors duration-300 shadow-lg">
                    Lihat Rute
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <div className="mt-12 flex items-baseline gap-1" style={{ fontFamily: 'var(--font-outfit)' }}>
              <motion.span 
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-light"
              >
                0{currentIndex + 1}
              </motion.span>
              <span className="text-white/50 text-sm">/0{CAROUSEL_DATA.length}</span>
            </div>
          </div>

          {/* Right Cards & Progress */}
          <div className="flex flex-col items-end gap-6 w-full lg:w-auto">
            {/* Cards Row */}
            <div className="flex items-end gap-3 md:gap-4 overflow-x-auto pb-2 hide-scrollbar w-full max-w-[100vw]">
              
              {/* Active/Main Card (current slide info) */}
              <div className="flex flex-col gap-3 min-w-[260px] sm:min-w-[280px]">
                <div className="w-full h-[160px] sm:h-[180px] rounded-3xl overflow-hidden shadow-2xl relative group border border-white/20">
                  {CAROUSEL_DATA.map((slide, index) => (
                    <video 
                      key={`card-video-${slide.id}`}
                      ref={el => { cardVideoRefs.current[index] = el; }}
                      loop 
                      muted 
                      playsInline 
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
                        index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                      }`}
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>
                  ))}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-start gap-3 drop-shadow-md" style={{ color: '#ffffff' }}>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: 'var(--font-outfit)', color: '#ffffff' }}>{currentSlide.title}</h4>
                    <p className="text-[11px] leading-tight max-w-[180px] sm:max-w-[200px]" style={{ color: 'rgba(255,255,255,0.8)' }}>{currentSlide.desc}</p>
                  </div>
                  <span className="text-xs font-medium bg-white/20 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-md shrink-0 mt-0.5" style={{ color: '#ffffff' }}>{currentSlide.subtitle}</span>
                </div>
              </div>

              {/* Next Card 1 */}
              <div 
                key={`next1-${nextSlide1.id}`}
                onClick={() => handleManualSlide((currentIndex + 1) % CAROUSEL_DATA.length)}
                className="w-[100px] sm:w-[120px] h-[180px] sm:h-[220px] rounded-[24px] overflow-hidden shadow-lg relative cursor-pointer group shrink-0 border border-white/20"
              >
                <video muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <source src={nextSlide1.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
              </div>

              {/* Next Card 2 */}
              <div 
                key={`next2-${nextSlide2.id}`}
                onClick={() => handleManualSlide((currentIndex + 2) % CAROUSEL_DATA.length)}
                className="w-[100px] sm:w-[120px] h-[180px] sm:h-[220px] rounded-[24px] overflow-hidden shadow-lg relative cursor-pointer group shrink-0 border border-white/20 hidden md:block"
              >
                <video muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <source src={nextSlide2.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
              </div>
            </div>

            {/* Progress Line */}
            <div className="w-full max-w-[420px] h-[2px] bg-white/30 rounded-full overflow-hidden mt-2">
              <motion.div 
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
