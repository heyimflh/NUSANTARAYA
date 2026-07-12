import React, { useState } from 'react';
import { ProvinceMapItem, ProvincePanelSummary } from '@/types/province';
import { Palette, Utensils, Mountain, Building2 } from 'lucide-react';

type ProvincePanelTabsProps = {
  province: ProvinceMapItem;
  summary: ProvincePanelSummary;
};

type TabId = 'budaya' | 'rasa' | 'destinasi' | 'masadepan';

export const ProvincePanelTabs: React.FC<ProvincePanelTabsProps> = ({ province, summary }) => {
  const [activeTab, setActiveTab] = useState<TabId>('budaya');

  const tabs = [
    { id: 'budaya', label: 'Budaya', icon: <Palette size={14} />, image: province.assets.culture, data: summary.cultureHighlights },
    { id: 'rasa', label: 'Rasa', icon: <Utensils size={14} />, image: province.assets.food, data: summary.culinaryHighlights },
    { id: 'destinasi', label: 'Destinasi', icon: <Mountain size={14} />, image: province.assets.destination, data: summary.destinationHighlights },
    { id: 'masadepan', label: 'Masa Depan', icon: <Building2 size={14} />, image: province.assets.modern, data: summary.modernHighlights },
  ];

  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <div className="flex-1 flex flex-col bg-nusaWarm/30">
      {/* Tab Headers */}
      <div className="flex border-b border-nusaBorder shrink-0 bg-white">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabId)}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 text-[10px] font-medium transition-colors border-b-2 ${
              activeTab === tab.id 
                ? 'text-nusaNavy border-nusaGold bg-nusaGold/5' 
                : 'text-nusaNavy/50 border-transparent hover:text-nusaNavy/80 hover:bg-nusaWarm/50'
            }`}
          >
            {tab.icon}
            <span className="uppercase tracking-wider">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 flex-1 overflow-y-auto">
        <div className="rounded-xl overflow-hidden shadow-sm border border-nusaBorder bg-white mb-4">
          <img 
            src={currentTab.image} 
            alt={currentTab.label} 
            className="w-full h-32 object-cover"
            loading="lazy"
          />
        </div>
        <ul className="space-y-2">
          {currentTab.data.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-nusaNavy/80">
              <span className="mt-1 text-nusaGold text-[10px]">&#9632;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
