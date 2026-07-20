const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/CategoryCabinet.tsx');

const content = `import React, { useRef } from "react";
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
  "tokoh-sejarah": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-11-tokoh-daerah-mohammad-hatta-l1-master-v01.webp",
  "sistem-kepercayaan": "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-12-kepercayaan-surau-lubuk-bauk-l1-master-v01.webp",
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
  // There are 12 items. If each item takes 100vw, the track is 1200vw wide.
  // We want to translate it by -(1200vw - 100vw) = -1100vw or ~ -91.666%.
  // A formula for N items: ((N - 1) / N) * 100
  // Note: we'll use a gap and padding, so calculating exact percentage might be tricky,
  // Using "-90%" as a rough estimate for 10-12 items. We'll fine-tune it based on the exact DOM structure.
  
  // Actually, a robust way is to just scroll the exact width of (number of cards * card width).
  // With 12 categories, let's make each panel 100vw. So 1200vw total width.
  // We need to move from 0 to -1100vw.
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-91.6666%"]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#161616]" id="category-cabinet">
      {/* Sticky Inner Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#111111]">
        
        {/* Header / Intro pinned at the top left */}
        <div className="absolute top-10 left-10 md:top-14 md:left-20 z-50 pointer-events-none">
          <h2 className="font-playfair text-xl md:text-2xl text-white/40 uppercase tracking-[0.2em] mb-2">
            {t("Kabinet Kategori", "Category Cabinet")}
          </h2>
          <div className="w-12 h-[1px] bg-[#D4B56A]/50" />
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
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-12 lg:p-24"
              >
                <div className={\`w-full max-w-7xl h-[85vh] flex flex-col \${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24\`}>
                  
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 h-[40vh] md:h-full relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => onCategorySelect(category.id)}>
                    <Image
                      src={imageUrl}
                      alt={t(category.name, category.nameEn)}
                      fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[#D4B56A] text-sm uppercase tracking-[0.3em] font-semibold">
                        {t("Warisan", "Heritage")} {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-[1px] bg-[#D4B56A]/30" />
                    </div>

                    <h3 className="font-playfair text-[3rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.1] text-white font-bold mb-8">
                      {t(category.name, category.nameEn)}
                    </h3>

                    <div className="border-l-2 border-[#D4B56A]/50 pl-6 md:pl-8 mb-10">
                      <p className="text-[#E8E1D3] text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed">
                        "{t(category.promise, category.promiseEn)}"
                      </p>
                    </div>

                    <ul className="space-y-4 mb-12">
                      <li className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#D4B56A]" />
                        <span className="text-white/70 text-sm md:text-base tracking-wide">
                          {count} {t("Koleksi Arsip", "Archive Collections")}
                        </span>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#D4B56A]" />
                        <span className="text-white/70 text-sm md:text-base tracking-wide">
                          {t("Tersebar di berbagai provinsi", "Spread across various provinces")}
                        </span>
                      </li>
                    </ul>

                    <div>
                      <button
                        onClick={() => onCategorySelect(category.id)}
                        className="group flex items-center gap-4 px-8 py-4 bg-transparent border border-[#D4B56A]/40 rounded-full hover:bg-[#D4B56A]/10 hover:border-[#D4B56A] transition-all duration-300 text-white font-medium tracking-widest text-xs md:text-sm uppercase"
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
`;

fs.writeFileSync(targetPath, content);
console.log('CategoryCabinet.tsx rewritten with Horizontal Scroll Taksu Bali Style!');
