'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FeatureData } from '@/data/features';

interface FeatureCardProps {
  feature: FeatureData;
  layout?: 'vertical' | 'horizontal-left' | 'horizontal-right';
  className?: string;
}

export default function FeatureCard({ feature, layout = 'vertical', className = '' }: FeatureCardProps) {
  const isHorizontal = layout.startsWith('horizontal');
  const isImageRight = layout === 'horizontal-left'; // Image on the right, text on the left

  return (
    <Link 
      href={feature.href}
      onClick={(e) => {
        if (feature.status === 'soon') e.preventDefault();
      }}
      aria-disabled={feature.status === 'soon' ? true : undefined}
      className={`relative flex ${isHorizontal ? (isImageRight ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse') : 'flex-col'} bg-white rounded-[32px] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-black/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 ${className}`}
    >
      {/* Content Area */}
      <div className={`relative z-10 flex flex-col ${isHorizontal ? 'p-10 md:p-14 md:w-[45%] justify-center' : 'p-10 flex-grow'} bg-white order-2 ${isHorizontal ? (isImageRight ? 'md:order-1' : 'md:order-2') : ''}`}>
        
        {/* Header: Icon + Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
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
              className="w-6 h-6" 
            />
          </motion.div>
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400">
            {feature.eyebrow}
          </span>
        </div>
        
        {/* Title */}
        <h4 className={`${isHorizontal ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'} font-black font-serif text-[#0D1B2A] mb-4 transition-colors duration-300 group-hover:text-blue-900 leading-[1.2]`}>
          {feature.title}
        </h4>
        
        {/* Description */}
        <p className={`text-gray-500 mb-8 ${isHorizontal ? 'text-base' : 'text-sm'} leading-[1.7] flex-grow max-w-sm`}>
          {feature.description}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {feature.chips.map((chip, idx) => (
            <span 
              key={idx}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-gray-50 text-gray-600 border border-gray-100 transition-colors duration-300 group-hover:bg-white group-hover:border-gray-200"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      
      {/* Image Container */}
      <div className={`relative flex items-center justify-center ${isHorizontal ? 'w-full md:w-[55%] p-8 md:p-12' : 'w-full p-8 pt-10'} bg-[#F8F9FA] overflow-hidden shrink-0 border-black/[0.03] ${isHorizontal ? (isImageRight ? 'border-b md:border-b-0 md:border-l' : 'border-b md:border-b-0 md:border-r') : 'border-b'} order-1 ${isHorizontal ? (isImageRight ? 'md:order-2' : 'md:order-1') : ''}`}>
        
        {/* Decorative Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[80px] opacity-[0.05] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.1]"
          style={{ backgroundColor: feature.color }}
        />

        {/* The Image (Uncropped, Fully Visible) */}
        <div className="relative w-full shadow-[0_15px_40px_rgb(0,0,0,0.1)] rounded-[16px] overflow-hidden border border-black/[0.04] bg-white transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
          {/* Using next/image with intrinsic sizing layout to prevent any cropping */}
          <Image
            src={feature.image}
            alt={feature.title}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Subtle inner shadow on the container for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.015)] pointer-events-none" />

        {/* RANI specific additions */}
        {feature.id === 'rani' && (
          <div className="absolute top-6 right-6 z-10 flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-100">
            <div className="relative w-6 h-6 rounded-full overflow-hidden shadow-sm">
              <Image 
                src="/assets/rani/rani-avatar.webp" 
                alt="RANI Avatar" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-xs font-bold text-[#6B3FA0] tracking-wide">RANI Online</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          </div>
        )}
      </div>

      {/* Decorative Line on Hover */}
      <div 
        className="h-1.5 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out absolute bottom-0 z-20"
        style={{ backgroundColor: feature.color }}
      />
    </Link>
  );
}
