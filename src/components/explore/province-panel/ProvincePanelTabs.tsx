import React, { useState, useEffect, useRef } from 'react';
import { ProvinceMapItem, ProvincePanelSummary } from '@/types/province';
import { Palette, Utensils, Mountain, Building2 } from 'lucide-react';
import { ExploreModeId } from '@/data/exploreControls';
import { getFocalPoint } from '@/data/provinces/focalPoints';
import { motion, AnimatePresence } from 'framer-motion';

type ProvincePanelTabsProps = {
  province: ProvinceMapItem;
  summary: ProvincePanelSummary;
  activeMode: ExploreModeId;
};

type TabId = 'budaya' | 'rasa' | 'destinasi' | 'masadepan';

export const ProvincePanelTabs: React.FC<ProvincePanelTabsProps> = ({ province, summary, activeMode }) => {
  const [activeTab, setActiveTab] = useState<TabId>('budaya');
  const tabListRef = useRef<HTMLDivElement>(null);

  // Reset tab to default mode when province or mode changes
  useEffect(() => {
    switch (activeMode) {
      case 'explore':
        setActiveTab('budaya');
        break;
      case 'tourist':
        setActiveTab('destinasi');
        break;
      case 'learn':
        setActiveTab('budaya');
        break;
      default:
        setActiveTab('budaya');
    }
  }, [province.id, activeMode]);

  const tabs = [
    { id: 'budaya', label: 'Budaya', icon: <Palette size={14} />, image: province.assets.culture, data: summary.cultureHighlights, focalKey: 'culture' as const },
    { id: 'rasa', label: 'Rasa', icon: <Utensils size={14} />, image: province.assets.food, data: summary.culinaryHighlights, focalKey: 'food' as const },
    { id: 'destinasi', label: 'Destinasi', icon: <Mountain size={14} />, image: province.assets.destination, data: summary.destinationHighlights, focalKey: 'destination' as const },
    { id: 'masadepan', label: 'Masa Depan', icon: <Building2 size={14} />, image: province.assets.modern, data: summary.modernHighlights, focalKey: 'modern' as const },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (newIndex !== index) {
      setActiveTab(tabs[newIndex].id as TabId);
      const tabButtons = tabListRef.current?.querySelectorAll('[role="tab"]');
      (tabButtons?.[newIndex] as HTMLElement)?.focus();
    }
  };

  const currentTab = tabs.find(t => t.id === activeTab)!;
  const currentFocalPoint = getFocalPoint(province.id, currentTab.focalKey);

  return (
    <div className="flex-1 flex flex-col bg-nusaWarm/30">
      {/* Tab Headers */}
      <div 
        ref={tabListRef}
        role="tablist" 
        aria-label="Kategori Informasi Provinsi"
        className="flex border-b border-nusaBorder shrink-0 bg-white"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id as TabId)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 text-[10px] font-medium transition-colors border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-nusaNavy focus-visible:ring-inset ${
                isActive 
                  ? 'text-nusaNavy border-nusaGold bg-nusaGold/5' 
                  : 'text-nusaNavy/50 border-transparent hover:text-nusaNavy/80 hover:bg-nusaWarm/50'
              }`}
            >
              {tab.icon}
              <span className="uppercase tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div 
        id={`panel-${currentTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentTab.id}`}
        tabIndex={0}
        className="p-6 flex-1 overflow-y-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-nusaNavy focus-visible:ring-inset"
      >
        <div className="rounded-xl overflow-hidden shadow-sm border border-nusaBorder bg-white mb-4 relative h-32">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentTab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={currentTab.image} 
              alt={currentTab.label} 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: `${currentFocalPoint.x}% ${currentFocalPoint.y}%` }}
              loading="lazy"
            />
          </AnimatePresence>
        </div>
        <ul className="space-y-2">
          {currentTab.data.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-nusaNavy/80 leading-relaxed">
              <span className="mt-1.5 text-nusaGold text-[8px]">&#9632;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
