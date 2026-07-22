'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AboutGoldenThreadProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export function AboutGoldenThread({ className = '', orientation = 'vertical' }: AboutGoldenThreadProps) {
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={`relative flex items-center justify-center ${
        isVertical ? 'h-full w-px' : 'w-full h-px'
      } ${className}`}
      aria-hidden="true"
    >
      <motion.div
        initial={isVertical ? { height: 0 } : { width: 0 }}
        whileInView={isVertical ? { height: '100%' } : { width: '100%' }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className={`bg-about-saffron ${isVertical ? 'w-px h-full' : 'h-px w-full'}`}
      />
    </div>
  );
}
