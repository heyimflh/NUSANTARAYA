'use client';

import Link from 'next/link';
import { mainFeatures } from '@/data/features';
import { isRouteAvailable } from '@/lib/routes';

export default function ConnectedFlowCard() {
  return (
    <div className="col-span-12 relative overflow-hidden rounded-[40px] mt-12 group bg-white/60 backdrop-blur-3xl border border-white shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
      
      {/* Premium Light Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C9A84C15] to-transparent blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-white to-transparent blur-[80px] pointer-events-none" />

      {/* Subtle Grid Pattern for Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 lg:py-24">
        
        {/* Typographic Hierarchy - Header Section */}
        <div className="max-w-[800px] mb-24 flex flex-col items-center">
          
          {/* Glassmorphism Eyebrow Badge */}
          <div className="flex items-center justify-center px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_20px_rgba(0,0,0,0.03)] mb-8 transition-transform duration-500 hover:scale-105 cursor-default">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C]">
              Ecosystem Integration
            </span>
          </div>
          
          {/* Main Title (High Contrast Dark Serif) */}
          <h3 className="text-4xl md:text-5xl lg:text-[64px] font-medium font-serif text-[#0D1B2A] mb-8 leading-[1.1] tracking-[-0.02em]">
            Satu alur eksplorasi. <br className="hidden sm:block" />
            <span className="text-gray-400">Tanpa hambatan.</span>
          </h3>
          
          {/* Paragraph */}
          <p className="text-gray-600 text-lg md:text-xl leading-[1.8] max-w-2xl font-light">
            Pilih provinsi di Nusa Map, baca sejarahnya di Archive, cicipi lewat NusaRasa, rancang rute, kumpulkan stempel Passport, dan biarkan RANI memandu langkah Anda selanjutnya.
          </p>
        </div>

        {/* Apple-style Dock / Flow (Desktop) */}
        <div className="hidden md:flex relative w-full max-w-[1000px] items-center justify-between mb-24 px-8">
          
          {/* Connecting Line */}
          <div className="absolute top-[36px] left-[6%] right-[6%] h-[1.5px] bg-gray-200/80" />
          
          {/* Animated Particle on the line */}
          <div className="absolute top-[36px] left-[6%] right-[6%] h-[1.5px] overflow-hidden">
            <div className="absolute top-0 left-0 w-[150px] h-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-80 animate-[flow-particle_4s_ease-in-out_infinite]" />
          </div>

          {/* Nodes (App Icons) */}
          {mainFeatures.map((feature) => (
            <div key={feature.id} className="relative z-10 flex flex-col items-center gap-6 group/icon cursor-pointer">
              
              {/* App Icon Squircles (Light Theme) */}
              <div className="relative w-[72px] h-[72px] rounded-[22px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover/icon:scale-110 group-hover/icon:-translate-y-2 border border-gray-100 group-hover/icon:border-gray-200 group-hover/icon:shadow-[0_20px_40px_rgba(0,0,0,0.1)] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              {/* Highly Readable Labels */}
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] group-hover/icon:text-[#0D1B2A] transition-colors duration-300 text-center">
                {feature.title.replace('Nusa ', '').replace(' Guide', '')}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Flow (Vertical) */}
        <div className="flex md:hidden flex-col gap-8 w-full max-w-[280px] mb-20 relative">
          {/* Vertical Line */}
          <div className="absolute top-8 bottom-8 left-[31px] w-[2px] bg-gray-200/80" />
          
          {mainFeatures.map((feature, idx) => (
            <div key={feature.id} className="relative z-10 flex items-center gap-6 group/mobile">
              {/* App Icon */}
              <div className="relative w-16 h-16 rounded-[20px] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-gray-100 shrink-0 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C9A84C] mb-1.5">
                  Step 0{idx + 1}
                </span>
                <span className="text-sm font-bold text-[#0D1B2A] tracking-wide">
                  {feature.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Elegant CTA Button (Dark on Light) */}
        <Link 
          href={isRouteAvailable("/demo") ? "/demo" : "#"}
          onClick={(e) => {
            if (!isRouteAvailable("/demo")) e.preventDefault();
          }}
          aria-disabled={!isRouteAvailable("/demo")}
          className="relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-[#0D1B2A] text-white font-bold text-[15px] tracking-wide transition-all duration-500 hover:scale-105 hover:bg-[#1A2942] shadow-[0_15px_40px_rgba(13,27,42,0.25)] overflow-hidden group/btn aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:scale-100 aria-disabled:hover:bg-[#0D1B2A]"
        >
          {/* Button Shine Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-[shine_1.5s_ease-in-out] group-aria-disabled/btn:hidden" />
          
          Lihat Alur Demo
          <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      <style>{`
        @keyframes flow-particle {
          0% { left: -150px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

