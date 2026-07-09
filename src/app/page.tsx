import Hero from '@/components/Hero';
import PreviewNusaMap from '@/components/PreviewNusaMap/PreviewNusaMap';
import { SevenPillarsSection } from '@/components/home/seven-pillars';
import { FeaturePreviewSection } from '@/components/home/feature-preview';
import { PastToFutureSection } from '@/components/home/past-to-future';
import { DemoJourneySection } from '@/components/home/demo-journey';
import { FinalCtaFooterSection } from '@/components/home/final-cta-footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <div className="w-full flex justify-center pt-12 pb-4">
        <img
          src="/assets/branding/ornamen-divider.svg"
          alt=""
          aria-hidden="true"
          className="h-8 w-full max-w-[800px] opacity-80"
        />
      </div>
      <PreviewNusaMap />
      <SevenPillarsSection />
      <FeaturePreviewSection />
      <PastToFutureSection />
      <DemoJourneySection />
      <FinalCtaFooterSection />
    </div>
  );
}
