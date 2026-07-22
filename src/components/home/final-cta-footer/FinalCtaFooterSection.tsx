import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function FinalCtaFooterSection({ topBgClass = "bg-[#f4eee2]" }: { topBgClass?: string }) {
  return (
    <>
      <FinalCTA topBgClass={topBgClass} />
      <footer className="relative overflow-visible bg-[#062c21] text-[#fff6df]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(130,255,171,0.16),transparent_34%),linear-gradient(180deg,#0c6848_0%,#083d2d_48%,#062c21_100%)]" />
        <Footer />
      </footer>
    </>
  );
}
