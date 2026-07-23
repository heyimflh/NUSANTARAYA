import React from 'react';
import { notFound } from 'next/navigation';
import { provinceMapData, provincePanelData } from '@/data/provinces/provinces';
import { getAtlasData, getAtlasReferences, getActiveChapters } from '@/data/atlas/utils';
import { getChapterImages } from '@/data/atlas/chapterImages';
import { 
  ProvinceAtlasShell, 
  AtlasMasthead, 
  AtlasChapterNav, 
  EditorialMediaBlock,
  ReferenceList,
  AtlasStatusBadge
} from '@/components/province-atlas';
import { AtlasQuickFacts } from '@/components/province-atlas/AtlasQuickFacts';
import { AtlasTimeline } from '@/components/province-atlas/AtlasTimeline';
import { AtlasItemCollection } from '@/components/province-atlas/AtlasItemCollection';
import { AtlasSubsection } from '@/components/province-atlas/AtlasSubsection';
import { AtlasVocabulary } from '@/components/province-atlas/AtlasVocabulary';
import { AtlasBiodiversitySection } from '@/components/province-atlas/AtlasBiodiversitySection';
import { AtlasItinerary } from '@/components/province-atlas/AtlasItinerary';
import { AtlasEtiquette } from '@/components/province-atlas/AtlasEtiquette';
import { AtlasLifecycleBridge } from '@/components/province-atlas/AtlasLifecycleBridge';
import { AtlasCompletionAction } from '@/components/province-atlas/AtlasCompletionAction';
import { RelatedProvinces } from '@/components/province-atlas/RelatedProvinces';
import { FinalCtaFooterSection } from '@/components/home/final-cta-footer';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provinceData = provinceMapData.find((p) => p.id === slug);
  if (!provinceData) return { title: "Provinsi Tidak Ditemukan" };
  return {
    title: provinceData.name,
    description: `Jelajahi kebudayaan, kuliner, dan destinasi wisata di ${provinceData.name} melalui Atlas Nusantara.`,
    alternates: { canonical: `/provinsi/${slug}` }
  };
}

export default async function ProvinceAtlasPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const province = provinceMapData.find(p => p.id === resolvedParams.slug);
  const summary = provincePanelData.find(p => p.provinceId === resolvedParams.slug);

  if (!province || !summary) {
    notFound();
  }

  // Attempt to load dynamic atlas data
  const atlas = await getAtlasData(resolvedParams.slug);
  const references = await getAtlasReferences(resolvedParams.slug);
  const chapters = atlas ? getActiveChapters(atlas) : undefined;
  
  const citationIndex: Record<string, number> = {};
  references.forEach((ref, index) => {
    citationIndex[ref.id] = index + 1;
  });

  // Load per-chapter images from nusa-archive + nusarasa assets
  const chapterImgs = getChapterImages(resolvedParams.slug);

  return (
    <>
      <ProvinceAtlasShell provinceName={province.name}>
        <AtlasLifecycleBridge provinceId={resolvedParams.slug} />
        <AtlasMasthead province={province} materialCount={summary.materialCount} />
        
        {atlas && (
          <div className="mb-8">
            <AtlasStatusBadge 
              lastReviewedAt={atlas.lastReviewedAt}
              contentStatus={atlas.contentStatus}
              referenceCount={references.length}
            />
          </div>
        )}

        <AtlasChapterNav chapters={chapters} />
        
        {atlas ? (
          // ─── DYNAMIC ATLAS CONTENT ───────────────────────────────────────
          <>
            {/* ── BAB 00: Ringkasan ─────────────────────────────────────── */}
            <EditorialMediaBlock
              id="ringkasan"
              chapterNumber="00"
              title={`Mengenal ${atlas.title}`}
              description=""
              citedContent={atlas.summary}
              imageSrc={chapterImgs.ringkasan ?? province.assets.hero}
              imageAlt={`Ringkasan ${atlas.title}`}
              imageCaption={atlas.tagline}
              allReferences={references}
              citationIndex={citationIndex}
              chapterSources={references.filter(r => atlas.summary.some(p => p.citationIds.includes(r.id)))}
            />

            {/* Quick Facts (sub-section of Ringkasan) */}
            {atlas.quickFacts && atlas.quickFacts.length > 0 && (
              <div className="mb-24 md:mb-32 -mt-12">
                <AtlasQuickFacts
                  facts={atlas.quickFacts}
                  references={references}
                  citationIndex={citationIndex}
                />
              </div>
            )}

            {/* ── BAB 01: Geografi ──────────────────────────────────────── */}
            {atlas.geography && (
              <EditorialMediaBlock
                id="geografi"
                chapterNumber="01"
                title="Geografi dan Bentang Alam"
                description=""
                citedContent={atlas.geography.introduction}
                imageSrc={chapterImgs.geografi ?? province.assets.destination}
                imageAlt={`Geografi ${atlas.title}`}
                imageCaption={`Bentang alam ${atlas.title}`}
                allReferences={references}
                citationIndex={citationIndex}
                chapterSources={references.filter(r => atlas.geography?.referenceIds.includes(r.id))}
                reverse
              />
            )}

            {/* ── BAB 02: Sejarah ──────────────────────────────────────── */}
            {atlas.history && (
              <>
                <EditorialMediaBlock
                  id="sejarah"
                  chapterNumber="02"
                  title="Jejak Sejarah"
                  description=""
                  citedContent={atlas.history.introduction}
                  imageSrc={chapterImgs.sejarah ?? province.assets.culture}
                  imageAlt={`Sejarah ${atlas.title}`}
                  imageCaption={`Jejak peradaban ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.history?.referenceIds.includes(r.id))}
                />
                {/* Timeline sub-section */}
                {(() => {
                  const timelineItems = atlas.history.timeline || atlas.history.eras;
                  return timelineItems && timelineItems.length > 0 ? (
                    <div className="mb-24 md:mb-32 -mt-12">
                      <AtlasTimeline
                        items={timelineItems}
                        references={references}
                        citationIndex={citationIndex}
                      />
                    </div>
                  ) : null;
                })()}
              </>
            )}

            {/* ── BAB 03: Masyarakat ────────────────────────────────────── */}
            {atlas.society && (
              <>
                <EditorialMediaBlock
                  id="masyarakat"
                  chapterNumber="03"
                  title="Masyarakat dan Tatanan Sosial"
                  description=""
                  citedContent={atlas.society.introduction}
                  imageSrc={chapterImgs.masyarakat ?? province.assets.culture}
                  imageAlt={`Masyarakat ${atlas.title}`}
                  imageCaption={`Kehidupan sosial ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.society?.referenceIds.includes(r.id))}
                  reverse
                />
                {/* Sub-sections: Social Structure & Communities */}
                {(atlas.society.socialStructure || atlas.society.communities) && (
                  <div className="mb-24 md:mb-32 -mt-12 grid gap-10">
                    <AtlasSubsection
                      title="Struktur Sosial"
                      paragraphs={atlas.society.socialStructure}
                      references={references}
                      citationIndex={citationIndex}
                    />
                    <AtlasSubsection
                      title="Komunitas"
                      paragraphs={atlas.society.communities}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 04: Budaya ────────────────────────────────────────── */}
            {atlas.culture && (
              <>
                <EditorialMediaBlock
                  id="budaya"
                  chapterNumber="04"
                  title="Kekayaan Budaya"
                  description=""
                  citedContent={atlas.culture.introduction}
                  imageSrc={chapterImgs.budaya ?? province.assets.culture}
                  imageAlt={`Budaya ${atlas.title}`}
                  imageCaption={`Ekspresi budaya ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.culture?.referenceIds.includes(r.id))}
                  reverse
                />
                {/* Culture items sub-section */}
                {atlas.culture.items && atlas.culture.items.length > 0 && (
                  <div className="mb-24 md:mb-32 -mt-12">
                    <AtlasItemCollection
                      title="Warisan Budaya"
                      items={atlas.culture.items}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 05: Bahasa ────────────────────────────────────────── */}
            {atlas.language && (
              <>
                <EditorialMediaBlock
                  id="bahasa"
                  chapterNumber="05"
                  title="Bahasa dan Sastra"
                  description=""
                  citedContent={atlas.language.introduction}
                  imageSrc={chapterImgs.bahasa ?? province.assets.culture}
                  imageAlt={`Bahasa ${atlas.title}`}
                  imageCaption={`Aksara dan bahasa ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.language?.referenceIds.includes(r.id))}
                />
                {/* Vocabulary sub-section */}
                {atlas.language.vocabulary && atlas.language.vocabulary.length > 0 && (
                  <div className="mb-24 md:mb-32 -mt-12">
                    <AtlasVocabulary
                      items={atlas.language.vocabulary}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 06: Kuliner ───────────────────────────────────────── */}
            {atlas.culinary && (
              <>
                <EditorialMediaBlock
                  id="kuliner"
                  chapterNumber="06"
                  title="Rasa Nusantara"
                  description=""
                  citedContent={atlas.culinary.introduction}
                  imageSrc={chapterImgs.kuliner ?? province.assets.food}
                  imageAlt={`Kuliner ${atlas.title}`}
                  imageCaption={`Kekayaan cita rasa ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.culinary?.referenceIds.includes(r.id))}
                  reverse
                />
                {/* Culinary items sub-section */}
                {atlas.culinary.items && atlas.culinary.items.length > 0 && (
                  <div className="mb-24 md:mb-32 -mt-12">
                    <AtlasItemCollection
                      title="Hidangan Khas"
                      items={atlas.culinary.items}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 07: Alam / Biodiversity ───────────────────────────── */}
            {atlas.biodiversity && (
              <>
                <EditorialMediaBlock
                  id="alam"
                  chapterNumber="07"
                  title="Keanekaragaman Hayati"
                  description=""
                  citedContent={atlas.biodiversity.introduction}
                  imageSrc={chapterImgs.alam ?? province.assets.destination}
                  imageAlt={`Alam ${atlas.title}`}
                  imageCaption={`Kekayaan alam ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.biodiversity?.referenceIds.includes(r.id))}
                />
                {/* Biodiversity ecosystems & species sub-section */}
                {(atlas.biodiversity.ecosystems || atlas.biodiversity.species) && (
                  <div className="mb-24 md:mb-32 -mt-12">
                    <AtlasBiodiversitySection
                      chapter={atlas.biodiversity}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 08: Destinasi ─────────────────────────────────────── */}
            {atlas.destinations && (
              <>
                <EditorialMediaBlock
                  id="destinasi"
                  chapterNumber="08"
                  title="Destinasi Ikonik"
                  description=""
                  citedContent={atlas.destinations.introduction}
                  imageSrc={chapterImgs.destinasi ?? province.assets.destination}
                  imageAlt={`Destinasi ${atlas.title}`}
                  imageCaption={`Daya tarik ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.destinations?.referenceIds.includes(r.id))}
                  reverse
                />
                {/* Destination items sub-section */}
                {atlas.destinations.items && atlas.destinations.items.length > 0 && (
                  <div className="mb-24 md:mb-32 -mt-12">
                    <AtlasItemCollection
                      title="Tempat yang Wajib Dikunjungi"
                      items={atlas.destinations.items}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 09: Cerita ────────────────────────────────────────── */}
            {atlas.stories && (
              <>
                <EditorialMediaBlock
                  id="cerita"
                  chapterNumber="09"
                  title="Cerita dan Legenda"
                  description=""
                  citedContent={atlas.stories.introduction}
                  imageSrc={chapterImgs.cerita ?? province.assets.culture}
                  imageAlt={`Cerita rakyat ${atlas.title}`}
                  imageCaption={`Legenda dan kisah ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.stories?.referenceIds.includes(r.id))}
                />
                {/* Stories items sub-section */}
                {atlas.stories.stories && atlas.stories.stories.length > 0 && (
                  <div className="mb-24 md:mb-32 -mt-12">
                    <AtlasItemCollection
                      title="Kisah Rakyat"
                      items={atlas.stories.stories}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 10: Masa Kini / Contemporary ──────────────────────── */}
            {atlas.contemporary && (
              <>
                <EditorialMediaBlock
                  id="masa-depan"
                  chapterNumber="10"
                  title="Dinamika Masa Kini"
                  description=""
                  citedContent={atlas.contemporary.introduction}
                  imageSrc={chapterImgs.masaKini ?? province.assets.hero}
                  imageAlt={`Masa kini ${atlas.title}`}
                  imageCaption={`Wajah modern ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.contemporary?.referenceIds.includes(r.id))}
                  reverse
                />
                {/* Economy & Development sub-sections */}
                {(atlas.contemporary.economy || atlas.contemporary.development) && (
                  <div className="mb-24 md:mb-32 -mt-12 grid gap-10">
                    <AtlasSubsection
                      title="Ekonomi"
                      paragraphs={atlas.contemporary.economy}
                      references={references}
                      citationIndex={citationIndex}
                    />
                    <AtlasSubsection
                      title="Pembangunan"
                      paragraphs={atlas.contemporary.development}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 11: Perjalanan / Travel ────────────────────────────── */}
            {atlas.travel && (
              <>
                <EditorialMediaBlock
                  id="perjalanan"
                  chapterNumber="11"
                  title="Panduan Perjalanan"
                  description=""
                  citedContent={atlas.travel.introduction}
                  imageSrc={chapterImgs.perjalanan ?? province.assets.destination}
                  imageAlt={`Perjalanan ke ${atlas.title}`}
                  imageCaption={`Tips perjalanan ${atlas.title}`}
                  allReferences={references}
                  citationIndex={citationIndex}
                  chapterSources={references.filter(r => atlas.travel?.referenceIds.includes(r.id))}
                />
                {/* Itineraries & Etiquette sub-sections */}
                {(atlas.travel.itineraries || atlas.travel.etiquette) && (
                  <div className="mb-24 md:mb-32 -mt-12 grid gap-10">
                    <AtlasItinerary
                      itineraries={atlas.travel.itineraries}
                      references={references}
                      citationIndex={citationIndex}
                    />
                    <AtlasEtiquette
                      paragraphs={atlas.travel.etiquette}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </div>
                )}
              </>
            )}

            {/* ── BAB 12: Referensi ─────────────────────────────────────── */}
            <section id="referensi" className="scroll-mt-36 mb-24 md:mb-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-bold tracking-widest text-nusaGold">BAB 12</span>
                <div className="h-px bg-[#E8E0CE] flex-1" />
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="w-full md:w-[35%]">
                  <h2 className="font-serif text-4xl text-nusaNavy font-bold leading-tight mb-6">
                    Referensi Ilmiah
                  </h2>
                  <p className="text-nusaNavy/70 leading-relaxed mb-6">
                    Materi pada halaman ini disusun secara objektif berdasarkan publikasi ilmiah, data statistik resmi, arsip sejarah, dan lembaga pemerintah terkait untuk memastikan akurasi dan meminimalisasi halusinasi AI.
                  </p>
                </div>
                <div className="w-full md:w-[65%]">
                  <ReferenceList references={references} citationIndex={citationIndex} />
                </div>
              </div>
            </section>

            <AtlasCompletionAction provinceId={resolvedParams.slug} provinceName={province.name} />
            <RelatedProvinces currentProvinceId={resolvedParams.slug} />
          </>
        ) : (
          // ─── FALLBACK GENERIC CONTENT ──────────────────────────────────────
          <>
            <EditorialMediaBlock
              id="ringkasan"
              chapterNumber="00"
              title={`Mengenal ${province.name}`}
              description={summary.whyItMatters || province.summary}
              imageSrc={chapterImgs.ringkasan ?? province.assets.hero}
              imageAlt={`Ringkasan ${province.name}`}
              imageCaption={`Potret lanskap ${province.name}`}
            />

            <EditorialMediaBlock
              id="budaya"
              chapterNumber="01"
              title="Budaya dan Tradisi"
              description={`Eksplorasi kekayaan tradisi yang hidup di ${province.name}, mulai dari ${summary.signatures.join(', ')} hingga kearifan lokal lainnya yang masih dijaga.`}
              imageSrc={chapterImgs.budaya ?? province.assets.culture}
              imageAlt={`Budaya ${province.name}`}
              imageCaption={`Ekspresi kebudayaan ${province.name}`}
              reverse
            />

            <EditorialMediaBlock
              id="kuliner"
              chapterNumber="02"
              title="Rasa Nusantara"
              description={`Mencicipi otentisitas kuliner ${province.name}. Rempah-rempah pilihan menciptakan harmoni rasa yang khas dan tak terlupakan.`}
              imageSrc={chapterImgs.kuliner ?? province.assets.food}
              imageAlt={`Kuliner ${province.name}`}
              imageCaption={`Sajian kuliner khas ${province.name}`}
            />

            <EditorialMediaBlock
              id="destinasi"
              chapterNumber="03"
              title="Alam dan Destinasi"
              description={`Jelajahi keajaiban alam dan destinasi unggulan di ${province.name}. Setiap sudut menyimpan keindahan yang menanti untuk ditemukan.`}
              imageSrc={chapterImgs.destinasi ?? province.assets.destination}
              imageAlt={`Destinasi ${province.name}`}
              imageCaption={`Keindahan alam ${province.name}`}
              reverse
            />

            <AtlasCompletionAction provinceId={resolvedParams.slug} provinceName={province.name} />
            <RelatedProvinces currentProvinceId={resolvedParams.slug} />
          </>
        )}
      </ProvinceAtlasShell>
      <FinalCtaFooterSection topBgClass="bg-[#f4f0e8]" />
    </>
  );
}
