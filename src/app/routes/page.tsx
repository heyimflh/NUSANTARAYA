"use client";
import { Suspense } from "react";

import { RoutesHeroSection } from "@/components/routes/RoutesHeroSection";
import { RoutesNavbar } from "@/components/routes/RoutesNavbar";
import { RouteAtelier } from "@/components/routes/route-planner-form";

export default function RoutesPage() {
  return (
    <main className="relative min-h-screen isolate">
      <picture
        className="pointer-events-none fixed inset-0 z-0 block h-[100dvh] w-full select-none"
      >
        <source
          media="(max-width: 767px)"
          srcSet="/assets/background/background-explore-mobile.webp"
        />
        <img
          src="/assets/background/background-explore-dekstop.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <div className="relative z-10">
        <RoutesNavbar />
        <RoutesHeroSection />
        <Suspense fallback={<div className="h-screen" />}>
          <RouteAtelier />
        </Suspense>
      </div>
    </main>
  );
}
