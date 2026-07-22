import { Metadata } from "next";
import { Suspense } from "react";
import { FutureHero } from "@/components/future/FutureHero";
import { FutureClient } from "./FutureClient";
import { IknDossier } from "@/components/future/IknDossier";
import { FutureSystems } from "@/components/future/FutureSystems";
import { CivicNetwork } from "@/components/future/CivicNetwork";
import { VillageFutures } from "@/components/future/VillageFutures";
import { CreativeEconomy } from "@/components/future/CreativeEconomy";
import { GreenBlue } from "@/components/future/GreenBlue";
import { MobilityNetwork } from "@/components/future/MobilityNetwork";
import { PeopleStories } from "@/components/future/PeopleStories";
import { ScenarioStudio } from "@/components/future/ScenarioStudio";
import { NusantarayaNavbar } from '@/components/navigation/NusantarayaNavbar';
import { FinalCtaFooterSection } from '@/components/home/final-cta-footer';
import "./future.css";

export const metadata: Metadata = {
  title: "Nusa Future — Dari Warisan Menuju Nusantara Digital",
  description: "Jelajahi IKN, smart city, desa digital, ekonomi kreatif, mobilitas, lingkungan, dan masa depan berbagai wilayah Indonesia melalui Nusa Future."
};

export default function FuturePage() {
  return (
    <div className="w-full min-h-screen pb-0 future-page-context font-inter">
      <NusantarayaNavbar />
      <FutureHero />
      <Suspense fallback={<div className="p-8 text-center">Memuat observatorium...</div>}>
        <FutureClient />
      </Suspense>
      <IknDossier />
      <FutureSystems />
      <CivicNetwork />
      <VillageFutures />
      <CreativeEconomy />
      <GreenBlue />
      <MobilityNetwork />
      <PeopleStories />
      <ScenarioStudio />
      <FinalCtaFooterSection />
    </div>
  );
}
