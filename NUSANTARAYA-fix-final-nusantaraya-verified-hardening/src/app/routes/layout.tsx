import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nusa Route Planner",
  description: "Rencanakan perjalanan impian Anda di Indonesia berdasarkan anggaran, waktu, dan preferensi wisata dengan Nusa Route Planner.",
  alternates: {
    canonical: "/routes",
  }
};

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
