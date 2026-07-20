"use client";

import { useRasaState } from "./_hooks/useRasaState";

// Placeholders for the sections we will build
import RasaHero from "./_components/RasaHero";
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
import FinalHandoff from "./_components/FinalHandoff";

export default function RasaPage() {
  const { mode } = useRasaState();

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-12 flex flex-col gap-24 py-16 md:py-24">
        <RasaHero />
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
        <FinalHandoff />
      </div>
    </main>
  );
}
