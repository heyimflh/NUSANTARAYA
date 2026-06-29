'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <section className="relative w-full h-[100svh] min-h-[640px] md:min-h-[700px] lg:h-[100dvh] lg:min-h-0 overflow-hidden font-sans">
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

      {/* Gradient Overlay for Readability — Desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Enhanced Overlay for Mobile/Tablet readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/80 lg:hidden" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between hero-safe-padding px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:p-10 lg:px-16">
        
        {/* TOP NAVIGATION */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between w-full"
        >
          {/* Logo — responsive sizing */}
          <Link href="/">
            <img 
              src="/assets/branding/NUSANTARAYA_logo-full.png" 
              alt="Nusantaraya" 
              className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
            />
          </Link>

          {/* Nav Links - Center Pill — Only visible on desktop (lg+) */}
          <div className="hidden lg:flex items-center gap-2 px-2 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
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

          {/* Right Button — Full on desktop */}
          <Link
            href="#explore"
            className="hidden lg:flex group items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all text-white px-5 py-2.5 rounded-full text-sm font-medium active:scale-95"
            aria-label="Mulai Jelajah"
          >
            <span>Mulai Jelajah</span>
            <div className="bg-white text-black p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </Link>

          {/* Hamburger Menu Button — Mobile/Tablet */}
          <button 
            className="lg:hidden p-2 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full active:scale-95 transition-all"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka Menu"
          >
            <Menu size={20} />
          </button>
        </motion.nav>

        {/* CENTER TEXT — Repositioned for mobile/tablet to avoid card overlap */}
        <div className="absolute top-[38%] md:top-[35%] lg:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-full px-4 z-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-4 py-1.5 sm:px-5 sm:py-2 lg:px-6 lg:py-2 rounded-full text-[11px] sm:text-xs lg:text-sm mb-3 sm:mb-4 lg:mb-6 font-medium tracking-wide max-w-[90vw]">
              Pengalaman Digital Terbaik di Indonesia
            </div>
            <h1 
              className="text-[2.55rem] min-[390px]:text-[3rem] sm:text-6xl md:text-[4.25rem] lg:text-[85px] leading-[1.05] lg:leading-[1.1] tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-philosopher)', fontWeight: 700, color: '#ffffff' }}
            >
              Satu Peta, Ribuan<br />Cerita Nusantara
            </h1>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end w-full gap-4 md:gap-4 lg:gap-8 mt-auto z-10">
          
          {/* Left Info Panel — Tablet & Desktop (md+) */}
          <div className="w-full md:max-w-[280px] lg:max-w-[340px] text-white hidden md:block shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                style={{ color: '#ffffff' }}
              >
                <h3 className="text-xl lg:text-2xl font-medium mb-1 drop-shadow-md" style={{ fontFamily: 'var(--font-outfit)', color: '#ffffff' }}>
                  Jelajahi Indonesia Secara Interaktif
                </h3>
                <p className="text-xs lg:text-sm mb-4 lg:mb-5 font-light tracking-wide" style={{ color: 'rgba(255,255,255,0.8)' }}>Mulai Petualanganmu</p>
                
                {/* Feature Chips */}
                <div className="flex flex-wrap items-center gap-1.5 lg:gap-2 mb-4 lg:mb-5">
                  {['Peta Interaktif', 'Rute Wisata', 'Cerita Budaya'].map((chip) => (
                    <span key={chip} className="text-[9px] lg:text-[10px] font-medium bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full" style={{ color: '#ffffff' }}>
                      {chip}
                    </span>
                  ))}
                </div>
                
                <p className="text-xs lg:text-sm leading-relaxed font-light mb-6 lg:mb-8 drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Jelajahi keindahan budaya, sejarah, alam, dan kuliner Indonesia dalam satu sentuhan digital interaktif.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex items-center gap-2 lg:gap-3">
                  <button className="bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                    Eksplorasi Peta
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-semibold hover:bg-white/20 transition-colors duration-300 shadow-lg">
                    Lihat Rute
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <div className="mt-8 lg:mt-12 flex items-baseline gap-1" style={{ fontFamily: 'var(--font-outfit)' }}>
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

          {/* Mobile ONLY Location Info & Navigation — Tablet uses Left Info Panel */}
          <div className="md:hidden pointer-events-auto flex flex-col w-full mb-2 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mob-info-${currentSlide.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col drop-shadow-md"
              >
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest mb-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{currentSlide.subtitle}</span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-outfit)', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{currentSlide.title}</h3>
                <p className="text-xs sm:text-sm line-clamp-2 max-w-[90%] sm:max-w-[400px]" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{currentSlide.desc}</p>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-4 flex items-center gap-3">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-medium active:scale-95 transition-transform shadow-lg" aria-label="Eksplorasi Peta">
                Eksplorasi Peta
              </button>
            </div>
          </div>

          {/* Right Cards & Progress */}
          <div className="flex flex-col items-start lg:items-end gap-4 lg:gap-6 w-full md:w-auto overflow-hidden">
            {/* Cards Row — Tablet & Desktop */}
            <div className="hidden md:flex items-end gap-3 lg:gap-4 overflow-x-auto pb-2 hide-scrollbar w-full max-w-full">
              
              {/* Active/Main Card (current slide info) */}
              <div className="flex flex-col gap-2 sm:gap-3 min-w-[min(76vw,260px)] sm:min-w-[280px] lg:min-w-[280px]">
                <div className="w-full h-[128px] min-[390px]:h-[145px] sm:h-[160px] md:h-[150px] lg:h-[180px] rounded-[22px] lg:rounded-3xl overflow-hidden shadow-2xl relative group border border-white/20">
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
                <div className="flex justify-between items-start gap-2 sm:gap-3 drop-shadow-md" style={{ color: '#ffffff' }}>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-xs sm:text-sm lg:text-sm mb-0.5 sm:mb-1 truncate" style={{ fontFamily: 'var(--font-outfit)', color: '#ffffff' }}>{currentSlide.title}</h4>
                    <p className="text-[10px] sm:text-[11px] leading-tight max-w-[170px] sm:max-w-[200px] line-clamp-2" style={{ color: 'rgba(255,255,255,0.8)' }}>{currentSlide.desc}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium bg-white/20 backdrop-blur-md border border-white/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shrink-0 mt-0.5" style={{ color: '#ffffff' }}>{currentSlide.subtitle}</span>
                </div>
              </div>

              {/* Next Card 1 — Hidden on mobile */}
              <div 
                key={`next1-${nextSlide1.id}`}
                onClick={() => handleManualSlide((currentIndex + 1) % CAROUSEL_DATA.length)}
                className="hidden md:block w-[92px] lg:w-[120px] h-[160px] lg:h-[220px] rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-lg relative cursor-pointer group shrink-0 border border-white/20 active:scale-95 transition-transform"
                aria-label={`Lihat ${nextSlide1.title}`}
              >
                <video muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <source src={nextSlide1.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
              </div>

              {/* Next Card 2 — Only visible on desktop (lg+) */}
              <div 
                key={`next2-${nextSlide2.id}`}
                onClick={() => handleManualSlide((currentIndex + 2) % CAROUSEL_DATA.length)}
                className="w-[100px] sm:w-[120px] h-[180px] sm:h-[220px] rounded-[24px] overflow-hidden shadow-lg relative cursor-pointer group shrink-0 border border-white/20 hidden lg:block"
                aria-label={`Lihat ${nextSlide2.title}`}
              >
                <video muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <source src={nextSlide2.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
              </div>
            </div>

            {/* Pagination & Controls — Mobile only (Tablet uses left panel pagination) */}
            <div className="md:hidden flex items-center justify-between w-full mt-2 z-20">
              <div className="flex items-baseline gap-1" style={{ fontFamily: 'var(--font-outfit)' }}>
                <motion.span 
                  key={`mob-page-${currentIndex}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-light text-white"
                >
                  0{currentIndex + 1}
                </motion.span>
                <span className="text-white/50 text-sm">/0{CAROUSEL_DATA.length}</span>
              </div>
              
              {/* Mobile Navigation Arrows */}
              <div className="flex items-center gap-3 pointer-events-auto">
                <button 
                  onClick={() => handleManualSlide((currentIndex - 1 + CAROUSEL_DATA.length) % CAROUSEL_DATA.length)}
                  className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white active:scale-95 transition-transform"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={() => handleManualSlide((currentIndex + 1) % CAROUSEL_DATA.length)}
                  className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white active:scale-95 transition-transform"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Progress Line */}
            <div className="w-full max-w-[min(86vw,360px)] lg:max-w-[420px] h-[2px] bg-white/30 rounded-full overflow-hidden mt-1 lg:mt-2">
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

      {/* Mobile/Tablet Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black/80 lg:hidden"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 text-white bg-white/10 rounded-full active:scale-95 transition-all"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Tutup Menu"
            >
              <X size={24} />
            </button>
            
            {/* Menu Links */}
            <div className="flex flex-col items-center gap-8">
              {['Beranda', 'Eksplorasi', 'Rute', 'Kuliner', 'Tentang'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-3xl font-light tracking-widest hover:text-white/60 transition-colors"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {item}
                </Link>
              ))}
              
              <Link 
                href="#explore" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg active:scale-95 flex items-center gap-2"
              >
                Mulai Jelajah <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
