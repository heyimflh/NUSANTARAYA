'use client';

import Link from 'next/link';
import { mainFeatures } from '@/data/features';

export default function ConnectedFlowCard() {
  return (
    <div className="col-span-12 bg-[#0D1B2A] rounded-[32px] overflow-hidden relative group p-10 md:p-14 lg:p-16 mt-6 shadow-2xl">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/branding/ornamen-batik.svg)',
          backgroundSize: '120px',
        }}
      />
      
      {/* Top Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-serif text-white mb-6 leading-tight tracking-tight">
            Semua fitur bekerja sebagai satu alur.
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            Pilih provinsi di Nusa Map, baca ceritanya di Archive, cicipi rasanya lewat NusaRasa, rancang rute perjalanan, kumpulkan stempel Passport, lalu tanya RANI untuk rekomendasi berikutnya.
          </p>
        </div>
        
        <Link 
          href="/demo"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#0D1B2A] font-bold transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] shrink-0"
        >
          Lihat Alur Demo
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Flow Visualization Desktop */}
      <div className="relative z-10 py-10 hidden md:block">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-[4%] right-[4%] h-[2px] bg-gray-800 -translate-y-1/2 rounded-full overflow-hidden">
          {/* Animated glowing bar */}
          <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60 animate-[flow-line_3s_linear_infinite]" />
        </div>

        {/* Nodes */}
        <div className="relative flex justify-between items-center w-full">
          {mainFeatures.map((feature, idx) => (
            <div key={feature.id} className="relative group/node flex flex-col items-center gap-5">
              {/* Outer Ring */}
              <div className="w-20 h-20 rounded-full bg-[#0D1B2A] flex items-center justify-center z-10">
                {/* Inner Icon Container */}
                <div 
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_0_2px_#1F2937] transition-all duration-500 group-hover/node:shadow-[0_0_0_4px_#C9A84C,0_10px_25px_rgba(201,168,76,0.4)] group-hover/node:-translate-y-2"
                >
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-8 h-8 transition-transform duration-500 group-hover/node:scale-110"
                  />
                </div>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover/node:text-white transition-colors duration-300">
                {feature.title.replace('Nusa ', '').replace(' Guide', '')}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Flow Visualization */}
      <div className="relative z-10 md:hidden flex flex-col gap-8 pl-6 border-l-[2px] border-gray-800 ml-4 py-4">
          {mainFeatures.map((feature, idx) => (
            <div key={feature.id} className="relative flex items-center gap-6 group/mobile">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-gray-800 border-4 border-[#0D1B2A] transition-colors duration-300 group-hover/mobile:bg-[#C9A84C]" />
              
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 shrink-0"
              >
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="w-7 h-7"
                />
              </div>
              
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-1">Step 0{idx + 1}</span>
                <span className="text-base font-bold text-gray-200">
                  {feature.title}
                </span>
              </div>
            </div>
          ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow-line {
          0% { left: -33%; }
          100% { left: 100%; }
        }
      `}} />
    </div>
  );
}
