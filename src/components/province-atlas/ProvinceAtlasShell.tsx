import React from 'react';
import { AtlasTopBar } from './AtlasTopBar';
import { NusantarayaNavbar } from '@/components/navigation/NusantarayaNavbar';

export const ProvinceAtlasShell = ({ children, provinceName }: { children: React.ReactNode, provinceName: string }) => {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8]/90 text-nusaNavy selection:bg-nusaGold/30 selection:text-nusaNavy">
      <NusantarayaNavbar forceScrolled={true} />
      <AtlasTopBar provinceName={provinceName} />
      <main className="pt-24 md:pt-32 pb-24 max-w-5xl mx-auto px-4 md:px-8">
        {children}
      </main>
    </div>
  );
};
