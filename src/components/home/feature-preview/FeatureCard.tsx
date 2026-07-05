'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    eyebrow: string;
    description: string;
    chips: string[];
    icon: string;
    image: string;
    color: string;
    href: string;
  };
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const isRani = feature.id === 'rani';

  return (
    <Link 
      href={feature.href}
      className={`relative col-span-12 md:col-span-6 lg:col-span-4 flex flex-col bg-white rounded-[24px] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-black/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 ${isRani ? 'lg:col-span-6' : ''}`}
    >
      {/* Image Container (Landscape Aspect Ratio) */}
      <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-gray-50 overflow-hidden shrink-0 border-b border-black/[0.03]">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] ${isRani ? 'object-center' : 'object-top'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none" />

        {/* RANI specific additions */}
        {isRani && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-100">
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

      {/* Content Area */}
      <div className="relative z-10 flex flex-col p-8 flex-grow bg-white">
        
        {/* Header: Icon + Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50 shadow-sm border border-gray-100 overflow-hidden shrink-0 transition-transform duration-500 group-hover:scale-110">
            <img 
              src={feature.icon} 
              alt="" 
              className="w-6 h-6" 
            />
          </div>
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400">
            {feature.eyebrow}
          </span>
        </div>
        
        {/* Title */}
        <h4 className="text-2xl font-bold font-serif text-[#0D1B2A] mb-4 transition-colors duration-300 group-hover:text-blue-900">
          {feature.title}
        </h4>
        
        {/* Description */}
        <p className="text-gray-500 mb-8 text-sm leading-[1.7] flex-grow">
          {feature.description}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {feature.chips.map((chip, idx) => (
            <span 
              key={idx}
              className="px-3 py-1.5 rounded-md text-[11px] font-semibold bg-gray-50 text-gray-600 border border-gray-100 transition-colors duration-300 group-hover:bg-white group-hover:border-gray-200"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      
      {/* Decorative Line on Hover */}
      <div 
        className="h-1.5 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out absolute bottom-0"
        style={{ backgroundColor: feature.color }}
      />
    </Link>
  );
}
