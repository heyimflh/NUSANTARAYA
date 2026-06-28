"use client";

import dynamic from "next/dynamic";

// Lazy load the map component (heavy SVG rendering) 
const IndonesiaMap = dynamic(
  () => import("@/components/map/indonesia-map").then((mod) => mod.IndonesiaMap),
  {
    ssr: false,
    loading: () => (
      <div className="nusa-container py-12 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto" />
          <p className="text-text-secondary text-sm">Memuat Peta Indonesia...</p>
        </div>
      </div>
    ),
  }
);

export default function MapPage() {
  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <div className="nusa-container pt-6 pb-4">
        <h1 className="font-heading text-2xl md:text-3xl font-bold">
          Nusa Map — <span className="text-gold">38 Provinsi</span>
        </h1>
        <p className="text-text-secondary text-sm mt-1">
          Klik provinsi untuk menjelajahi budaya, kuliner, dan destinasi wisata.
        </p>
      </div>

      {/* Interactive Map */}
      <IndonesiaMap />
    </div>
  );
}
