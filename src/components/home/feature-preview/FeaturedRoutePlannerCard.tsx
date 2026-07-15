'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FeatureData } from '@/data/features';

interface FeaturedRoutePlannerCardProps {
  feature: FeatureData;
}

export default function FeaturedRoutePlannerCard({ feature }: FeaturedRoutePlannerCardProps) {
  return (
    <div className="relative col-span-12 flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.04]"
        style={{
          backgroundImage: 'url(/assets/branding/ornamen-batik.svg)',
          backgroundSize: '120px',
          backgroundPosition: 'center',
        }}
      />

      {/* Content Area */}
      <div className="relative z-10 flex flex-col p-10 md:p-14 lg:w-1/2 justify-center">
        {/* Eyebrow & Icon */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div
            whileHover={{ 
              rotate: [0, -10, 10, -5, 0],
              scale: 1.15,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            className="cursor-pointer"
          >
            <img 
              src={feature.icon} 
              alt="" 
              className="w-8 h-8" 
            />
          </motion.div>
          <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-gray-400">
            {feature.eyebrow}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-4xl md:text-5xl lg:text-[56px] font-black font-serif text-[#0D1B2A] mb-6 leading-[1.1] tracking-tight">
          {feature.title}
        </h3>
        
        <p className="text-gray-500 mb-10 text-lg md:text-xl leading-relaxed max-w-lg">
          {feature.description}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          {feature.chips.map((chip, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-100 transition-colors duration-300 group-hover:bg-white group-hover:border-gray-200 group-hover:shadow-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link 
            href={feature.href}
            onClick={(e) => {
              if (feature.status === 'soon') e.preventDefault();
            }}
            aria-disabled={feature.status === 'soon' ? true : undefined}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:gap-4 hover:-translate-y-1 hover:shadow-lg"
            style={{ 
              backgroundColor: feature.color,
              boxShadow: `0 10px 25px -5px ${feature.color}60`
            }}
          >
            Buat Rute
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Image / Mockup Area */}
      <div className="relative z-10 lg:w-1/2 p-10 md:p-14 lg:p-16 flex items-center justify-center bg-gray-50 border-l border-black/[0.02] overflow-hidden">
        {/* Subtle Glow Behind Image */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[80px] opacity-[0.08] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.15]"
          style={{ backgroundColor: feature.color }}
        />
        
        {/* The Frame (Uncropped) */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.12)] border border-black/[0.05] bg-white transform transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1 group-hover:shadow-[0_30px_60px_rgb(0,0,0,0.15)]">
          <Image
            src={feature.image}
            alt={`Preview antarmuka ${feature.title}`}
            width={1200}
            height={800}
            className="w-full h-auto object-contain block"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
