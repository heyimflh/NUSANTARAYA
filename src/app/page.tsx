import Hero from '@/components/Hero';
import PreviewNusaMap from '@/components/PreviewNusaMap/PreviewNusaMap';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <div className="w-full flex justify-center bg-[#F8F4EA] pt-12 pb-4">
        <img
          src="/assets/branding/ornamen-divider.svg"
          alt=""
          aria-hidden="true"
          className="h-8 w-full max-w-[800px] opacity-80"
        />
      </div>
      <PreviewNusaMap />
    </div>
  );
}
