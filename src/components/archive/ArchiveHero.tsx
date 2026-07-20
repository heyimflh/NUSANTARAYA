import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ArchiveHeroProps {
  itemCount: number;
  categoryCount: number;
  onStartExploring: () => void;
  onOpenCollection: () => void;
  t: (id: string, en: string) => string;
}

export function ArchiveHero({
  itemCount,
  categoryCount,
  onStartExploring,
  onOpenCollection,
  t,
}: ArchiveHeroProps) {
  return (
    <section className="archive-surface-paper border-b border-[var(--archive-line)] relative overflow-hidden pb-12 pt-safe lg:pb-0 lg:min-h-[80vh] flex flex-col justify-center">
      <div className="archive-container relative z-10 py-8 lg:py-16">
        <div className="archive-grid items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1 mt-8 lg:mt-0">
            <div>
              <p className="archive-eyebrow mb-4">
                {t("Nusa Archive", "Nusa Archive")}
              </p>
              <h1 className="archive-display mb-6">
                {t("Rumah Ingatan yang Hidup.", "The Living Memory House.")}
              </h1>
              <p className="archive-body text-lg">
                {t(
                  "Bukan sekadar etalase masa lalu, melainkan ruang tamu tempat tradisi, aksara, cerita, dan bentuk bertemu dengan masa kini.",
                  "Not merely a showcase of the past, but a living room where traditions, scripts, stories, and forms meet the present."
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                variant="gold"
                size="lg"
                onClick={onStartExploring}
                className="w-full sm:w-auto font-medium"
              >
                {t("Mulai Menjelajah", "Start Exploring")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onOpenCollection}
                className="w-full sm:w-auto font-medium border-[var(--archive-line)] text-[var(--archive-ink)] hover:bg-[var(--archive-paper-deep)]"
              >
                {t("Lihat Pilihan Kurator", "View Curator's Selection")}
              </Button>
            </div>

            <div className="pt-8 border-t border-[var(--archive-line)] mt-4">
              <div className="flex items-center gap-8">
                <div>
                  <p className="archive-catalog-number text-[var(--archive-ink)] text-xl font-medium mb-1">
                    {itemCount}+
                  </p>
                  <p className="archive-caption uppercase">
                    {t("Arsip Budaya", "Cultural Archives")}
                  </p>
                </div>
                <div>
                  <p className="archive-catalog-number text-[var(--archive-ink)] text-xl font-medium mb-1">
                    {categoryCount}
                  </p>
                  <p className="archive-caption uppercase">
                    {t("Kategori", "Categories")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Memory Collage */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] max-h-[600px] mx-auto rounded-xl overflow-hidden bg-[var(--archive-paper-deep)]">
              {/* Collage composition - representing various cultural pillars */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-04-pakaian-adat-paes-ageng-kanigaran.webp"
                    alt="Paes Ageng"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-01-rumah-adat-tongkonan-toraja.webp"
                    alt="Tongkonan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-09-aksara-aksara-jawa-hanacaraka.webp"
                    alt="Aksara Jawa"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-02-tarian-tari-piring-l1-master-v01.webp"
                    alt="Tari Piring"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Overlay accent line */}
              <div className="absolute inset-0 pointer-events-none border border-[var(--archive-line)]/50 rounded-xl m-4" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
