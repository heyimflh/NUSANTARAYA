"use client";

import { useState } from "react";
import { featuredProvinces } from "@/data/preview-map";
import FilterChips from "./FilterChips";
import MapPreviewCard from "./MapPreviewCard";
import ProvinceFlagshipCards from "./ProvinceFlagshipCards";

export default function PreviewNusaMap() {
  const [activeLayer, setActiveLayer] = useState<string>("all");

  return (
    <>
    <section className="relative overflow-hidden bg-[#F8F4EA] py-16 md:py-24">
      {/* Background Batik Ornament */}
      <img
        src="/assets/branding/ornamen-batik.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06] mix-blend-multiply"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Split Layout Header and Map */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-8 items-center lg:items-start">
          
          {/* Left Column: Text & Header */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center pt-2 md:pt-4 lg:pt-12">
            
            {/* Editorial Eyebrow */}
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="w-6 md:w-8 h-[2px] bg-[#D8B56D]"></span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-[#D8B56D] uppercase">
                Peta Interaktif
              </span>
            </div>
            
            {/* Typography Header */}
            <h2 className="font-serif text-[2.25rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[4.2rem] lg:leading-[1.05] text-[#10233F] tracking-tight mb-6 md:mb-8">
              Singkap <span className="italic font-light text-[#D8B56D]">Magisnya</span> Nusantara dari Satu Peta.
            </h2>
            
            {/* Description with a delicate left indent line */}
            <div className="pl-4 md:pl-6 border-l border-[#D8B56D]/30 mb-8 md:mb-10">
              <p className="text-[#10233F]/75 text-base md:text-[1.1rem] leading-[1.8] max-w-[40ch] font-medium">
                Setiap titik di peta menyimpan cerita unik—merangkai rasa, tradisi, alam, aksara, hingga visi masa depan digital Nusantara.
              </p>
            </div>
            
            {/* Minimalist Premium Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 mb-8 md:mb-16">
              <button className="w-full sm:w-auto bg-[#10233F] text-white px-9 py-4 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-500 ease-out hover:bg-[#1a365d] hover:shadow-[0_10px_30px_rgba(16,35,63,0.2)] hover:-translate-y-1 flex items-center justify-center">
                Mulai Penjelajahan
              </button>
              
              <button className="group relative text-[#10233F] text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-2 pb-1.5">
                Lihat Unggulan
                <svg className="w-4 h-4 transform transition-transform duration-500 ease-out group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                {/* Elegant underline animation */}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D8B56D] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </button>
            </div>
            
            {/* Categories - Editorial List Style */}
            <div className="hidden lg:block pt-8 border-t border-[#10233F]/10">
              <h5 className="text-[10px] font-bold text-[#10233F]/40 uppercase tracking-[0.25em] mb-5">
                Kategori Eksplorasi
              </h5>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-500">
                <FilterChips activeLayer={activeLayer} onLayerChange={setActiveLayer} />
              </div>
            </div>
          </div>
          
          {/* Right Column: Map Preview */}
          <div className="w-full lg:w-[55%] relative">
            <MapPreviewCard provinces={featuredProvinces} activeLayer={activeLayer} />
            
            {/* Mobile Filter Chips */}
            <div className="lg:hidden mt-8 w-full overflow-x-auto pb-4 hide-scrollbar">
              <FilterChips activeLayer={activeLayer} onLayerChange={setActiveLayer} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Flagship Cards Row */}
    <ProvinceFlagshipCards provinces={featuredProvinces} />
    
    {/* Mini Stats */}
    <section className="bg-[#F8F4EA] relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden -mt-6 md:-mt-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.15)] z-30">
      {/* Subtle Background Pattern */}
      <img
        src="/assets/branding/ornamen-batik.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.03] mix-blend-multiply"
      />
      
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-20">
        {/* Intro for Stats */}
        <div className="flex flex-col items-center mb-10 md:mb-14">
          <div className="w-[1px] h-10 md:h-14 bg-gradient-to-b from-transparent via-[#D8B56D]/50 to-[#D8B56D] mb-6"></div>
          <p className="text-[10px] font-bold tracking-[0.3em] text-[#D8B56D] uppercase mb-3 text-center">
            Skala Ekosistem
          </p>
          <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-[#10233F] text-center max-w-2xl leading-relaxed">
            Menyatukan <span className="italic font-light text-[#D8B56D]">kekayaan</span> Nusantara dalam satu jendela <span className="font-medium">digital</span>.
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
          {[
            { value: "38", label: "Provinsi" },
            { value: "7", label: "Pilar Eksplorasi" },
            { value: "8", label: "Flagship Content" },
            { value: "120+", label: "Arsip Budaya" },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 group relative">
              {/* Vertical Divider for Desktop */}
              {i !== 0 && (
                <div className="hidden md:block absolute top-1/2 left-0 w-[1px] h-14 bg-[#10233F]/10 -translate-y-1/2"></div>
              )}
              
              <div className="relative overflow-hidden h-[45px] md:h-[60px] lg:h-[70px] mb-3 w-full flex justify-center">
                <h4 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#10233F] absolute inset-0 flex items-center justify-center transform transition-transform duration-700 group-hover:-translate-y-full">
                  {stat.value}
                </h4>
                <h4 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#D8B56D] absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-700 group-hover:translate-y-0">
                  {stat.value}
                </h4>
              </div>
              
              <div className="h-[2px] w-6 bg-[#10233F]/10 mx-auto mb-3 transition-all duration-700 group-hover:w-12 group-hover:bg-[#D8B56D]"></div>
              
              <p className="text-[9px] md:text-[11px] font-bold text-[#10233F]/60 group-hover:text-[#10233F] uppercase tracking-[0.2em] transition-colors duration-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
      `}} />
    </section>
    </>
  );
}
