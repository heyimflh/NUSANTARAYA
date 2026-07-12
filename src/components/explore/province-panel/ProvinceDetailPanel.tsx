import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { provinceMapData, provincePanelData } from '@/data/provinces/provinces';
import { ProvincePanelHero } from './ProvincePanelHero';
import { ProvincePanelIdentity } from './ProvincePanelIdentity';
import { ProvincePanelTabs } from './ProvincePanelTabs';

type ProvinceDetailPanelProps = {
  selectedProvinceId: string | null;
  onClose: () => void;
};

export const ProvinceDetailPanel: React.FC<ProvinceDetailPanelProps> = ({ selectedProvinceId, onClose }) => {
  const province = selectedProvinceId ? provinceMapData.find(p => p.id === selectedProvinceId) : null;
  const summary = selectedProvinceId ? provincePanelData.find(p => p.provinceId === selectedProvinceId) : null;

  return (
    <AnimatePresence>
      {province && summary && (
        <motion.aside
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute top-0 right-0 h-full w-full md:w-1/3 bg-white border-l border-nusaBorder shadow-[-20px_0_40px_rgba(13,27,42,0.05)] z-40 flex flex-col overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-colors"
            aria-label="Tutup panel"
          >
            <X size={18} />
          </button>

          <ProvincePanelHero src={province.assets.hero} alt={province.name} />
          <ProvincePanelIdentity province={province} />
          <ProvincePanelTabs province={province} summary={summary} />

        </motion.aside>
      )}
    </AnimatePresence>
  );
};
