"use client";

import { useRasaState } from "./_hooks/useRasaState";

import TasteCompass from "./_components/TasteCompass";
import CulinaryCartography from "./_components/CulinaryCartography";
import DishOfTheMoment from "./_components/DishOfTheMoment";
import FlavorAtlas from "./_components/FlavorAtlas";
import TasteTrails from "./_components/TasteTrails";
import FoodStoryTheatre from "./_components/FoodStoryTheatre";
import FoodBattleTable from "./_components/FoodBattleTable";
import SpiceLedger from "./_components/SpiceLedger";
import HiddenTable from "./_components/HiddenTable";
import TastingTrailComposer from "./_components/TastingTrailComposer";
import TastingShelf from "./_components/TastingShelf";
import SourceSafetyDesk from "./_components/SourceSafetyDesk";
import RasaEcosystem from "./_components/RasaEcosystem";

import { RasaNavbar } from "./_components/RasaNavbar";
import { RasaHeroSection } from "./_components/RasaHeroSection";
import { FinalCtaFooterSection } from '@/components/home/final-cta-footer';

export default function RasaPage() {
  const { mode } = useRasaState();

  return (
    <main className="relative min-h-screen isolate overflow-x-clip max-w-full">
      <picture className="pointer-events-none fixed inset-0 z-0 block h-[100dvh] w-full select-none">
        <source media="(max-width: 767px)" srcSet="/assets/background/background-explore-mobile.webp" />
        <img src="/assets/background/background-explore-dekstop.webp" alt="" className="h-full w-full object-cover object-center" />
      </picture>

      <div className="relative z-10 overflow-x-clip max-w-full">
        <RasaNavbar />
        <RasaHeroSection />
        
        {/* Container for the remaining sections */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-12 flex flex-col gap-24 py-16 md:py-24">
            <TasteCompass />
            <CulinaryCartography />
            <DishOfTheMoment />
            <FlavorAtlas />
            <TasteTrails />
            <FoodStoryTheatre />
            <FoodBattleTable />
            <SpiceLedger />
            <HiddenTable />
            <TastingTrailComposer />
            <SourceSafetyDesk />
            <RasaEcosystem />
            <TastingShelf />
          </div>
        </div>

        <FinalCtaFooterSection />
      </div>
    </main>
  );
}
