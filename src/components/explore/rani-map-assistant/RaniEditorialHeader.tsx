import React from "react";
import Image from "next/image";

export function RaniEditorialHeader() {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center w-full mb-12">
      {/* Editorial Content */}
      <div className="flex-1 max-w-2xl relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-sans font-bold tracking-[0.2em] text-[#C85A3E] uppercase text-[10px]">
            10 · RANI MAP ASSISTANT
          </span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#DED3C3] rounded-full text-[9px] font-bold tracking-[0.15em] text-[#746F67] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D6D] animate-pulse" />
            Panduan Lokal Siap
          </div>
        </div>
        
        <h2 
          id="rani-map-assistant-heading" 
          tabIndex={-1}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#292824] mb-6 leading-[1.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A3E] focus-visible:ring-offset-8 focus-visible:ring-offset-[#FBF7EF] rounded-sm"
        >
          Passport-mu Sudah Bercerita. <br className="hidden md:block"/>
          <span className="italic font-light">RANI Menentukan Kelanjutannya.</span>
        </h2>
        
        <p className="text-[15px] md:text-[17px] text-[#746F67] leading-relaxed max-w-xl">
          RANI menghubungkan progress Passport, pilihan peta, minat, dan journey-mu untuk memberikan satu rekomendasi yang jelas—lengkap dengan alasan dan tindakan berikutnya.
        </p>
        <p className="text-[13px] text-[#746F67]/80 mt-3 font-medium italic">
          Tidak perlu mulai dari pertanyaan kosong. RANI sudah menyiapkan langkah berdasarkan perjalanan digitalmu.
        </p>
      </div>

      {/* RANI Avatar Integration */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 z-0 hidden md:block">
        {/* Soft backdrop forms */}
        <div className="absolute top-4 -left-4 w-full h-full bg-[#FAEDC8] rounded-full mix-blend-multiply opacity-70" />
        <div className="absolute -bottom-4 right-2 w-32 h-32 bg-[#F4DDD3] rounded-full mix-blend-multiply opacity-80" />
        
        <div className="relative w-full h-full drop-shadow-[0_20px_30px_rgba(200,90,62,0.1)]">
          <Image 
            src="/assets/rani/rani-sapa.webp"
            alt="RANI Assistant"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        </div>
        
        <div className="absolute -bottom-2 -left-6 bg-white border border-[#DED3C3] px-3 py-1.5 shadow-sm transform -rotate-2">
          <span className="font-serif italic text-xs text-[#292824]">Pemandu Langkah</span>
        </div>
      </div>
    </div>
  );
}
