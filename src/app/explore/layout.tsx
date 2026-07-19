import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "Jelajahi peta interaktif 38 provinsi di Indonesia dengan berbagai lapisan budaya, kuliner, dan destinasi.",
  alternates: {
    canonical: "/explore",
  }
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
