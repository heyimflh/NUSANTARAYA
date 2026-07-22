import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArchiveCategoryDefinition, ArchiveCategoryId, ArchiveItem } from "@/types/archive";
import { ChevronRight } from "lucide-react";

interface CategoryCabinetProps {
  categories: readonly ArchiveCategoryDefinition[];
  activeCategoryId: ArchiveCategoryId | null;
  onCategorySelect: (id: ArchiveCategoryId | null) => void;
  allItems: ArchiveItem[];
  t: (id: string, en: string) => string;
}

// Static image mapping based on existing assets
const categoryImages: Record<ArchiveCategoryId, string> = {
  "rumah-adat": "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-01-rumah-adat-tongkonan-toraja.webp",
  "tarian": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-02-tarian-tari-piring-l1-master-v01.webp",
  "alat-musik": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-03-alat-musik-talempong-l1-master-v01.webp",
  "pakaian-adat": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-04-pakaian-adat-bundo-kanduang-l1-master-v01.webp",
  "upacara-adat": "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-05-upacara-tradisi-rambu-solo-toraja.webp",
  "cerita-rakyat": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-06-cerita-rakyat-malin-kundang-l1-master-v01.webp",
  "senjata-tradisional": "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-07-senjata-tradisional-badik-bugis.webp",
  "kerajinan": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-08-kerajinan-tenun-pandai-sikek-l1-master-v01.webp",
  "bahasa-aksara": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-09-aksara-arab-melayu-minangkabau-l1-master-v01.webp",
  "motif-kain": "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-10-motif-kain-ragam-motif-lipa-sabbe-sengkang.webp",
  "tokoh-daerah": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-11-tokoh-daerah-mohammad-hatta-l1-master-v01.webp",
  "kosmologi": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-12-kepercayaan-surau-lubuk-bauk-l1-master-v01.webp",
};

export function CategoryCabinet({
  categories,
  activeCategoryId,
  onCategorySelect,
  allItems,
  t,
}: CategoryCabinetProps) {
  
  const containerRef = useRef<HTMLDivElement>(null);

  // We use Framer Motion's useScroll to track progress through the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate total items per category
  const categoryCounts = React.useMemo(() => {
    const counts = new Map<ArchiveCategoryId, number>();
    categories.forEach(c => counts.set(c.id, 0));
    
    allItems.forEach(item => {
      if (item.status === "published") {
        const current = counts.get(item.categoryId) || 0;
        counts.set(item.categoryId, current + 1);
      }
    });
    
    return counts;
  }, [categories, allItems]);

  // Translate horizontal track from 0 to negative equivalent of its full overflow width.
  // Instead of percentage which depends on computed element width, we use exact vw units.
  const maxScrollVw = (categories.length - 1) * 100;
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0vw", `-${maxScrollVw}vw`]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-transparent" id="category-cabinet">
      {/* Sticky Inner Container with Premium Background */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center pt-16 md:pt-24">
        
        {/* --- Premium Aesthetic Background --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F6F2E9] to-[#FDFBF7]" />
          
          {/* Elegant glowing orbs */}
          <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-[#D4B56A]/[0.08] rounded-full blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[#8C7A5B]/[0.05] rounded-full blur-[100px]" />
          <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-[#E6D5B8]/[0.15] rounded-full blur-[80px] mix-blend-multiply" />
          
          {/* Subtle grid pattern for texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,181,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,181,106,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
        </div>

        {/* Header / Intro pinned at the top left */}
        <div className="absolute top-20 md:top-24 left-8 md:left-20 z-50 pointer-events-none">
          <h2 className="font-playfair text-lg md:text-xl text-[#29221B]/60 uppercase tracking-[0.3em] font-bold">
            {t("Kabinet Kategori", "Category Cabinet")}
          </h2>
          <div className="w-12 h-[1px] bg-[#D4B56A]/70 mt-4" />
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div 
          style={{ x: xTransform }} 
          className="flex h-full"
        >
          {categories.map((category, index) => {
            const count = categoryCounts.get(category.id) || 0;
            const imageUrl = categoryImages[category.id] || "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-01-rumah-adat-tongkonan-toraja.webp";
            const isEven = index % 2 === 0;

            return (
              <div 
                key={category.id} 
                className="w-screen h-full flex-shrink-0 flex items-center justify-center p-6 md:p-12 lg:p-24"
              >
                <div className={`w-full max-w-7xl h-[65vh] md:h-[70vh] flex flex-col mt-12 md:mt-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 h-[35vh] md:h-full relative rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer" onClick={() => onCategorySelect(category.id)}>
                    <Image
                      src={imageUrl}
                      alt={t(category.name, category.nameEn)}
                      fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center bg-[var(--archive-canvas)]/68 backdrop-blur-sm border border-[var(--archive-line)]/50 p-6 md:p-10 rounded-3xl">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[#D4B56A] text-sm uppercase tracking-[0.3em] font-semibold">
                        {t("Warisan", "Heritage")} {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-[1px] bg-[#D4B56A]/30" />
                    </div>

                    <h3 className="font-playfair text-[3rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.1] text-[#29221B] font-bold mb-8">
                      {t(category.name, category.nameEn)}
                    </h3>

                    <div className="border-l-2 border-[#D4B56A]/50 pl-6 md:pl-8 mb-10">
                      <p className="text-[#3A332D] text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed">
                        "{t(category.promise, category.promiseEn)}"
                      </p>
                    </div>

                    <ul className="space-y-4 mb-12">
                      <li className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#D4B56A]" />
                        <span className="text-[#29221B]/80 font-medium text-sm md:text-base tracking-wide">
                          {count} {t("Koleksi Arsip", "Archive Collections")}
                        </span>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#D4B56A]" />
                        <span className="text-[#29221B]/80 font-medium text-sm md:text-base tracking-wide">
                          {t("Tersebar di berbagai provinsi", "Spread across various provinces")}
                        </span>
                      </li>
                    </ul>

                    <div>
                      <button
                        onClick={() => onCategorySelect(category.id)}
                        className="group flex items-center gap-4 px-8 py-4 bg-transparent border border-[#D4B56A] rounded-full hover:bg-[#D4B56A] hover:border-[#D4B56A] hover:text-white transition-all duration-300 text-[#29221B] font-bold tracking-widest text-xs md:text-sm uppercase"
                      >
                        {t("Telusuri Tradisi", "Explore Tradition")}
                        <ChevronRight size={16} className="text-[#D4B56A] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
