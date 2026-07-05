'use client';

import { motion } from 'framer-motion';
import { mainFeatures } from '@/data/features';
import FeaturedRoutePlannerCard from './FeaturedRoutePlannerCard';
import FeatureCard from './FeatureCard';
import ConnectedFlowCard from './ConnectedFlowCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } }
};

export function FeaturePreviewSection() {
  const featured = mainFeatures.find(f => f.featured);
  
  // Extract other features
  const nusaMap = mainFeatures.find(f => f.id === 'nusa-map');
  const archive = mainFeatures.find(f => f.id === 'archive');
  const nusaRasa = mainFeatures.find(f => f.id === 'nusarasa');
  const passport = mainFeatures.find(f => f.id === 'passport');
  const rani = mainFeatures.find(f => f.id === 'rani');
  const future = mainFeatures.find(f => f.id === 'future');

  return (
    <section className="relative w-full py-24 bg-[#F8F4EA] overflow-hidden">
      {/* Animated Background Textures */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/branding/ornamen-batik.svg)',
          backgroundSize: '120px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <span className="text-sm md:text-base font-bold tracking-widest uppercase text-[#C9A84C] mb-4">
            Ekosistem NUSANTARAYA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-[#0D1B2A] mb-6 leading-tight">
            Satu Platform, Banyak Cara Menjelajah Nusantara
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Dari peta interaktif, arsip budaya, atlas kuliner, itinerary, passport digital, hingga AI guide — semua terhubung dalam satu pengalaman eksplorasi Indonesia.
          </p>
          <motion.img 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src="/assets/branding/ornamen-divider.svg" 
            alt="" 
            aria-hidden="true"
            className="w-48 mt-8 origin-center"
          />
        </motion.div>

        {/* Premium Bento Grid with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-12 gap-6 md:gap-8"
        >
          
          {/* 1. Featured Route Planner (Full Width) */}
          {featured && (
            <motion.div variants={itemVariants} className="col-span-12">
              <FeaturedRoutePlannerCard feature={featured} />
            </motion.div>
          )}
          
          {/* 2. Row 1: Map (Wide Left) + Archive (Square Right) */}
          {nusaMap && (
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-7">
              <FeatureCard 
                feature={nusaMap} 
                layout="horizontal-left" 
              />
            </motion.div>
          )}
          {archive && (
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-5 h-full">
              <FeatureCard 
                feature={archive} 
                layout="vertical" 
                className="h-full"
              />
            </motion.div>
          )}

          {/* 3. Row 2: NusaRasa (Square Left) + Passport (Wide Right) */}
          {nusaRasa && (
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-5 h-full">
              <FeatureCard 
                feature={nusaRasa} 
                layout="vertical" 
                className="h-full"
              />
            </motion.div>
          )}
          {passport && (
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-7">
              <FeatureCard 
                feature={passport} 
                layout="horizontal-right" 
              />
            </motion.div>
          )}

          {/* 4. Row 3: RANI (Half Width) + Future (Half Width) */}
          {rani && (
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-6">
              <FeatureCard 
                feature={rani} 
                layout="vertical" 
              />
            </motion.div>
          )}
          {future && (
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-6">
              <FeatureCard 
                feature={future} 
                layout="vertical" 
              />
            </motion.div>
          )}

          {/* Connected Flow Card */}
          <motion.div variants={itemVariants} className="col-span-12">
            <ConnectedFlowCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
