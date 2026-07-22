import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { WhyNusantaraya } from '@/components/about/WhyNusantaraya';
import { LivingManifesto } from '@/components/about/LivingManifesto';
import { SevenPillarInstrument } from '@/components/about/SevenPillarInstrument';
import { EcosystemAtlas } from '@/components/about/EcosystemAtlas';
import { ProductJourney } from '@/components/about/ProductJourney';
import { ExplorationModes } from '@/components/about/ExplorationModes';
import { PersonaJourneys } from '@/components/about/PersonaJourneys';
import { HeritageFuturePanorama } from '@/components/about/HeritageFuturePanorama';
import { TrustStewardshipDesk } from '@/components/about/TrustStewardshipDesk';
import { BehindTheWork } from '@/components/about/BehindTheWork';
import { RoadmapHorizons } from '@/components/about/RoadmapHorizons';
import { EcosystemHandoff } from '@/components/about/EcosystemHandoff';
import { FinalManifesto } from '@/components/about/FinalManifesto';
import { NusantarayaNavbar } from '@/components/navigation/NusantarayaNavbar';
import { FinalCtaFooterSection } from '@/components/home/final-cta-footer';
import { aboutAssets } from '@/data/about/assets';

export const metadata: Metadata = {
  title: 'Tentang NUSANTARAYA — Satu Peta, Ribuan Cerita',
  description: 'NUSANTARAYA adalah Digital Twin Nusantara yang menghubungkan 38 provinsi, tujuh pilar, budaya, peta, rasa, perjalanan, pembelajaran, dan masa depan digital.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'Tentang NUSANTARAYA — Satu Peta, Ribuan Cerita',
    description: 'NUSANTARAYA adalah Digital Twin Nusantara yang menghubungkan 38 provinsi, tujuh pilar, budaya, peta, rasa, perjalanan, pembelajaran, dan masa depan digital.',
    url: 'https://nusantaraya.com/about',
    siteName: 'NUSANTARAYA',
    images: [
      {
        url: '/assets/about/hero/focal-landscape.webp',
        width: 1200,
        height: 630,
        alt: 'Nusantaraya Ecosystem Panorama',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="bg-about-canvas selection:bg-about-saffron-soft selection:text-about-ink overflow-x-hidden w-full">
      {/* 
        NOTE ON FIXED BACKGROUND:
        The PRD requests a fixed background for the About page. 
        We apply 'bg-about-canvas' globally to the main tag. 
        If texture is needed, we add it here as a fixed div, strictly without any navy tones. 
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay opacity-30" 
        style={{ backgroundImage: `url(${aboutAssets.editorial.mapTexture})`, backgroundSize: 'cover', backgroundAttachment: 'scroll' }} 
        aria-hidden="true" 
      />

      <div className="relative z-10 w-full max-w-[100vw] overflow-hidden">
        {/* SECTION 1: The Archipelago Threshold */}
        <NusantarayaNavbar />
        <AboutHero />

        {/* SECTION 2: Why NUSANTARAYA Exists */}
        <WhyNusantaraya />

        {/* SECTION 3: A Living Manifesto */}
        <LivingManifesto />

        {/* SECTION 4: One Map, Seven Ways to Read Indonesia */}
        <SevenPillarInstrument />

        {/* SECTION 5: The NUSANTARAYA Ecosystem Atlas */}
        <EcosystemAtlas />

        {/* SECTION 6: From Curiosity to Journey */}
        <ProductJourney />

        {/* SECTION 7: Three Ways to Explore */}
        <ExplorationModes />

        {/* SECTION 8: Built for Many People */}
        <PersonaJourneys />

        {/* SECTION 9: From Heritage to Digital Future */}
        <HeritageFuturePanorama />

        {/* SECTION 10: Trust, Sources, and Cultural Integrity */}
        <TrustStewardshipDesk />

        {/* SECTION 12: Behind the Work */}
        <BehindTheWork />

        {/* SECTION 13: Roadmap as Horizons */}
        <RoadmapHorizons />

        {/* SECTION 14: Open the Ecosystem */}
        <EcosystemHandoff />

        {/* SECTION 15: Final Manifesto */}
        <FinalManifesto />

        <FinalCtaFooterSection />
      </div>
    </main>
  );
}
