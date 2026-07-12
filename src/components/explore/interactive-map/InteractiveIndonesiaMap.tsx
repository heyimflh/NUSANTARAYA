"use client";

import React, { useState, useRef, useCallback } from 'react';
import { ExploreLayerId, ExploreModeId } from '@/data/exploreControls';
import { ProvinceMapItem } from '@/types/province';
import { IndonesiaSvgMap } from './IndonesiaSvgMap';
import { MapStatusBar } from './MapStatusBar';
import { MapToolbar } from './MapToolbar';
import { ProvinceTooltip } from './ProvinceTooltip';
import { ProvinceDetailPanel } from '../province-panel/ProvinceDetailPanel';
import { MapLegend } from './MapLegend';

type InteractiveIndonesiaMapProps = {
  provinces: ProvinceMapItem[];
  searchQuery: string;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  showFlagshipOnly: boolean;
  resultCount: number;
  onProvinceSelect: (provinceId: string) => void;
  onReset: () => void;
};

export const InteractiveIndonesiaMap: React.FC<InteractiveIndonesiaMapProps> = ({
  provinces,
  searchQuery,
  activeLayer,
  activeMode,
  selectedProvinceId,
  showFlagshipOnly,
  resultCount,
  onProvinceSelect,
  onReset
}) => {
  const [hoveredProvinceId, setHoveredProvinceId] = useState<string | null>(null);
  const [focusedProvinceId, setFocusedProvinceId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (hoveredProvinceId) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  }, [hoveredProvinceId]);

  const handleHover = useCallback((id: string | null) => {
    setHoveredProvinceId(id);
    if (!id) setMousePos(null);
  }, []);

  const hoveredProvince = hoveredProvinceId 
    ? provinces.find(p => p.id === hoveredProvinceId) || null 
    : null;

  const handleZoomIn = () => setZoom(z => Math.min(z * 1.2, 3));
  const handleZoomOut = () => setZoom(z => Math.max(z / 1.2, 1));
  
  const handleResetMap = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    onReset();
  };

  const isPanelOpen = !!selectedProvinceId;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 md:pt-24 md:pb-12 relative animate-in fade-in slide-in-from-bottom-3 duration-[500ms] motion-reduce:animate-none z-10" aria-labelledby="interactive-map-heading">
      <header className="mb-6">
        <h2 id="interactive-map-heading" className="text-sm font-bold uppercase tracking-widest text-nusaGold mb-2">
          Peta Interaktif Nusantara
        </h2>
        <h3 className="font-serif text-3xl md:text-4xl text-nusaNavy font-bold">
          Jelajahi 38 Provinsi dalam Satu Peta
        </h3>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Pilih provinsi untuk menemukan budaya, rasa, destinasi, sejarah, dan potensi masa depan Indonesia.
          Hover untuk melihat ringkasan. Klik provinsi untuk membuka detail.
        </p>
        <MapStatusBar 
          activeMode={activeMode}
          activeLayer={activeLayer}
          resultCount={resultCount}
        />
      </header>

      <div className="relative w-full h-[600px] md:h-[700px] rounded-[32px] border border-nusaBorder/90 shadow-2xl bg-white/70 backdrop-blur-3xl overflow-hidden flex transition-all duration-500">
        {/* Map Canvas */}
        <div 
          ref={mapContainerRef}
          className={`relative w-full h-full transition-all duration-500 ease-in-out ${isPanelOpen ? 'md:w-2/3 pr-4' : 'w-full'}`}
          onMouseMove={handleMouseMove}
          style={{
            background: 'radial-gradient(circle at 18% 20%, rgba(201,168,76,0.13), transparent 32%), radial-gradient(circle at 82% 68%, rgba(45,107,228,0.08), transparent 34%), linear-gradient(180deg, #FFFDF8 0%, #F8F4EA 100%)'
          }}
        >
          <div 
            className="w-full h-full flex items-center justify-center transition-transform duration-300 origin-center"
            style={{ transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)` }}
          >
            <IndonesiaSvgMap 
              provinces={provinces}
              activeLayer={activeLayer}
              activeMode={activeMode}
              selectedProvinceId={selectedProvinceId}
              hoveredProvinceId={hoveredProvinceId}
              focusedProvinceId={focusedProvinceId}
              showFlagshipOnly={showFlagshipOnly}
              searchQuery={searchQuery}
              onHover={handleHover}
              onSelect={onProvinceSelect}
              onFocus={setFocusedProvinceId}
            />
          </div>
          <MapToolbar 
            onZoomIn={handleZoomIn} 
            onZoomOut={handleZoomOut} 
            onReset={handleResetMap} 
            canZoomIn={zoom < 3}
            canZoomOut={zoom > 1}
          />
          <MapLegend activeLayer={activeLayer} />
        </div>

        {/* Province Detail Panel */}
        <ProvinceDetailPanel 
          selectedProvinceId={selectedProvinceId}
          activeMode={activeMode}
          onClose={() => onProvinceSelect('')}
        />
      </div>

      <ProvinceTooltip 
        province={hoveredProvince}
        position={mousePos}
      />
    </section>
  );
};
