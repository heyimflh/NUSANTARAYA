"use client";

import React, { useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { provinceMapData } from '@/data/provinces/provinces';
import { provincePanelData } from '@/data/provinces/provinces';
import { SummaryHero } from './SummaryHero';
import { SummaryIdentity } from './SummaryIdentity';
import { SummaryFacts } from './SummaryFacts';
import { SignatureChips } from './SignatureChips';
import { AtlasPreviewList } from './AtlasPreviewList';
import { WhyItMatters } from './WhyItMatters';
import { SummaryActions } from './SummaryActions';

type ProvinceSummaryPanelProps = {
  selectedProvinceId: string | null;
  onClose: () => void;
};

export const ProvinceSummaryPanel: React.FC<ProvinceSummaryPanelProps> = ({ selectedProvinceId, onClose }) => {
  const province = selectedProvinceId ? provinceMapData.find(p => p.id === selectedProvinceId) : null;
  const summary = selectedProvinceId ? provincePanelData.find(p => p.provinceId === selectedProvinceId) : null;
  const constraintsRef = useRef(null);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {province && summary && (
        <>
          {/* Backdrop for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-nusaNavy/40 backdrop-blur-[2px] z-40 md:hidden"
          />

          {/* Drag constraints area for mobile */}
          <div className="fixed inset-0 pointer-events-none z-50 md:hidden" ref={constraintsRef} />

          <motion.aside
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 32 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed md:absolute bottom-0 md:top-4 md:bottom-4 right-0 md:right-4 h-[75vh] md:h-[calc(100vh-32px)] w-full md:w-[380px] lg:w-[400px] xl:w-[420px] bg-[#FFFDF8] border border-[#E8E0CE] shadow-[0_-20px_60px_rgba(13,27,42,0.12)] md:shadow-[-20px_0_60px_rgba(13,27,42,0.12)] z-50 flex flex-col overflow-hidden rounded-t-3xl md:rounded-3xl"
            style={{ touchAction: 'none' }}
          >
            {/* Mobile drag handle indicator */}
            <div className="w-full flex justify-center pt-3 pb-2 md:hidden absolute top-0 z-50 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-white/50 backdrop-blur-md rounded-full shadow-sm" />
            </div>

            {/* Scrollable Content Area */}
            <div 
              className="flex-1 overflow-y-auto hide-scrollbar flex flex-col pb-32" 
              style={{ touchAction: 'pan-y' }}
            >
              <SummaryHero province={province} onClose={onClose} />
              
              <div className="flex flex-col p-5 gap-6">
                <SummaryIdentity province={province} />
                <SummaryFacts facts={summary.facts} isFlagship={province.isFlagship} />
                <SignatureChips signatures={summary.signatures} />
                <AtlasPreviewList previews={summary.atlasPreviews} provinceAssets={province.assets} />
                <WhyItMatters text={summary.whyItMatters} />
              </div>
            </div>

            {/* Sticky Action Bar */}
            <SummaryActions province={province} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
