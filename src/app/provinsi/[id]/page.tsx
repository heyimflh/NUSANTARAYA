import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

/**
 * Province Detail Page — Dynamic Route /provinsi/[id]
 * Fase 0: placeholder sederhana. Fase 1: konten lengkap 12 section.
 */
export default async function ProvinceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // Format display name from id
  const displayName = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="nusa-container py-8 md:py-12">
      <Link href="/map" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Peta
      </Link>

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="font-heading text-3xl md:text-4xl font-bold">
          {displayName}
        </h1>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-sm font-medium">
          🏗️ Halaman detail provinsi sedang dikembangkan
        </div>

        <p className="text-text-secondary">
          Halaman ini akan menampilkan sejarah, budaya, kuliner, destinasi,
          potensi modern, itinerary, quiz, dan cerita dari {displayName}.
        </p>

        <div className="flex justify-center gap-3 pt-4">
          <Link href="/map">
            <Button variant="outline">Kembali ke Peta</Button>
          </Link>
          <Link href="/passport">
            <Button variant="gold">Buka Passport</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
