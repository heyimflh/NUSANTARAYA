import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { provinceMapData, provincePanelData } from '@/data/provinces/provinces';
import { ProvincePanelHero } from './ProvincePanelHero';
import { ProvincePanelIdentity } from './ProvincePanelIdentity';
import { ProvincePanelTabs } from './ProvincePanelTabs';
import { ExploreModeId } from '@/data/exploreControls';

type ProvinceDetailPanelProps = {
  selectedProvinceId: string | null;
  activeMode: ExploreModeId;
  onClose: () => void;
};

export const ProvinceDetailPanel: React.FC<ProvinceDetailPanelProps> = ({ selectedProvinceId, activeMode, onClose }) => {
  const province = selectedProvinceId ? provinceMapData.find(p => p.id === selectedProvinceId) : null;
  const summary = selectedProvinceId ? provincePanelData.find(p => p.provinceId === selectedProvinceId) : null;

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
            className="fixed inset-0 bg-nusaNavy/40 backdrop-blur-sm z-40 md:hidden"
          />

          <motion.aside
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed md:absolute bottom-0 md:top-4 md:bottom-4 right-0 md:right-4 h-[85vh] md:h-auto w-full md:w-[400px] bg-white border border-nusaBorder shadow-[0_-20px_60px_rgba(13,27,42,0.12)] md:shadow-[-20px_0_60px_rgba(13,27,42,0.12)] z-50 flex flex-col overflow-hidden rounded-t-3xl md:rounded-3xl"
          >
            {/* Mobile drag handle indicator */}
            <div className="w-full flex justify-center pt-3 pb-2 md:hidden absolute top-0 z-50">
              <div className="w-12 h-1.5 bg-black/20 backdrop-blur-md rounded-full shadow-sm" />
            </div>

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors"
              aria-label="Tutup panel"
            >
              <X size={18} />
            </button>

            <ProvincePanelHero provinceId={province.id} src={province.assets.hero} alt={province.name} />
            
            <div className="flex-1 overflow-y-auto hide-scrollbar bg-white">
              <ProvincePanelIdentity province={province} />
              <ProvincePanelTabs province={province} summary={summary} activeMode={activeMode} />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
