import { MapHeroSection } from "@/components/explore/map-hero";
import { ExploreNavbar } from "@/components/explore/ExploreNavbar";

export default function ExplorePage() {
  return (
    <main className="relative bg-[#FAFAFA]">
      <ExploreNavbar />
      <MapHeroSection />
    </main>
  );
}
