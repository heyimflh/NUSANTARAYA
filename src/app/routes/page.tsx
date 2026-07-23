"use client";
import { Suspense } from "react";

import { RoutesHeroSection } from "@/components/routes/RoutesHeroSection";
import { NusantarayaNavbar } from "@/components/navigation/NusantarayaNavbar";
import { RouteAtelier } from "@/components/routes/route-planner-form";
import { FinalCtaFooterSection } from '@/components/home/final-cta-footer';

export default function RoutesPage() {
  return (
    <main className="relative min-h-screen isolate overflow-x-clip max-w-full">
      <div className="relative z-10 overflow-x-clip max-w-full">
        <NusantarayaNavbar />
        <RoutesHeroSection />
        <Suspense fallback={<div className="h-screen" />}>
          <RouteAtelier />
        </Suspense>
        <FinalCtaFooterSection topBgClass="bg-transparent" />
      </div>
    </main>
  );
}
