"use client";

import { usePassportPageViewModel } from "@/hooks/usePassportPageViewModel";
import { NusantarayaNavbar } from "@/components/navigation/NusantarayaNavbar";
import { PassportHeroSection } from "./PassportHeroSection";
import { PassportMasthead } from "./PassportMasthead";
import { SavedRoutesArchive } from "./SavedRoutesArchive";
import { ProvinceProgressLedger } from "./ProvinceProgressLedger";
import { StampCollectionSection } from "./StampCollectionSection";
import { RegionalBadgeConstellation } from "./RegionalBadgeConstellation";
import { PassportNextExpedition } from "./PassportNextExpedition";
import { PassportDepartureDock } from "./PassportDepartureDock";
import PassportLoading from "@/app/passport/loading";
import { FinalCtaFooterSection } from "@/components/home/final-cta-footer";

export const PassportPageShell = () => {
  const vm = usePassportPageViewModel();

  if (!vm.hydrated) {
    return (
      <>
        <NusantarayaNavbar />
        <PassportLoading />
        <FinalCtaFooterSection />
      </>
    );
  }

  return (
    <main className="relative min-h-screen isolate bg-[#F3EBDD]/90 overflow-x-hidden">
      {/* Background Texture for the entire page */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />
      
      <div className="relative z-10 overflow-x-clip max-w-full">
        <NusantarayaNavbar />
        <PassportHeroSection />
        
        <div id="passport-content" className="w-full pt-16 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
            <PassportMasthead identity={vm.identity} />
            <SavedRoutesArchive savedRoutes={vm.savedRoutes} />
            <ProvinceProgressLedger provinces={vm.provinces} />
            <StampCollectionSection identity={vm.identity} />
            <RegionalBadgeConstellation regionalProgress={vm.regionalProgress} />
            <PassportNextExpedition milestone={vm.identity.nextMilestone} />
            <PassportDepartureDock />
          </div>
        </div>
        <FinalCtaFooterSection />
      </div>
    </main>
  );
};
