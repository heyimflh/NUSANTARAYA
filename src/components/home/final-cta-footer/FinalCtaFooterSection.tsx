import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function FinalCtaFooterSection() {
  return (
    <>
      <FinalCTA />
      <footer className="relative overflow-visible bg-[#062c21] text-[#fff6df]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(130,255,171,0.16),transparent_34%),linear-gradient(180deg,#0c6848_0%,#083d2d_48%,#062c21_100%)]" />
        <Footer />
        {/* Extender to fill any safe area padding at the bottom of the page */}
        <div className="absolute top-full left-0 right-0 h-[50vh] bg-[#062c21] pointer-events-none" />
      </footer>
    </>
  );
}
