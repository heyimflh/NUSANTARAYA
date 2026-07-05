'use client';

import { mainFeatures } from '@/data/features';
import FeaturedRoutePlannerCard from './FeaturedRoutePlannerCard';
import FeatureCard from './FeatureCard';
import ConnectedFlowCard from './ConnectedFlowCard';

export function FeaturePreviewSection() {
  const featured = mainFeatures.find(f => f.featured);
  const others = mainFeatures.filter(f => !f.featured);

  return (
    <section className="relative w-full py-24 bg-[#F8F4EA] overflow-hidden">
      {/* Background Textures */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/branding/ornamen-batik.svg)',
          backgroundSize: '120px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-sm md:text-base font-bold tracking-widest uppercase text-[#C9A84C] mb-4">
            Ekosistem NUSANTARAYA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-[#0D1B2A] mb-6 leading-tight">
            Satu Platform, Banyak Cara Menjelajah Nusantara
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Dari peta interaktif, arsip budaya, atlas kuliner, itinerary, passport digital, hingga AI guide — semua terhubung dalam satu pengalaman eksplorasi Indonesia.
          </p>
          <img 
            src="/assets/branding/ornamen-divider.svg" 
            alt="" 
            aria-hidden="true"
            className="w-48 opacity-60 mt-8"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Featured Card */}
          {featured && <FeaturedRoutePlannerCard feature={featured} />}
          
          {/* Other Feature Cards */}
          {others.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}

          {/* Connected Flow Card */}
          <ConnectedFlowCard />
        </div>
      </div>
    </section>
  );
}
