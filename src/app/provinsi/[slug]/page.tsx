import React from 'react';
import { notFound } from 'next/navigation';
import { provinceMapData, provincePanelData } from '@/data/provinces/provinces';
import { getAtlasData, getAtlasReferences, getActiveChapters } from '@/data/atlas/utils';
import { 
  ProvinceAtlasShell, 
  AtlasMasthead, 
  AtlasChapterNav, 
  EditorialMediaBlock,
  ReferenceList,
  AtlasStatusBadge
} from '@/components/province-atlas';

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

  return (
    <ProvinceAtlasShell provinceName={province.name}>
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
          <EditorialMediaBlock
            id="ringkasan"
            chapterNumber="00"
            title={`Mengenal ${atlas.title}`}
            description=""
            citedContent={atlas.summary}
            imageSrc={province.assets.hero}
            imageAlt={`Ringkasan ${atlas.title}`}
            imageCaption={atlas.tagline}
            allReferences={references}
            chapterSources={references.filter(r => atlas.summary.some(p => p.citationIds.includes(r.id)))}
          />

          {atlas.geography && (
            <EditorialMediaBlock
              id="geografi"
              chapterNumber="01"
              title="Geografi dan Bentang Alam"
              description=""
              citedContent={atlas.geography.introduction}
              imageSrc={province.assets.destination}
              imageAlt={`Geografi ${atlas.title}`}
              imageCaption={`Bentang alam ${atlas.title}`}
              allReferences={references}
              chapterSources={references.filter(r => atlas.geography?.referenceIds.includes(r.id))}
              reverse
            />
          )}

          {atlas.history && (
            <EditorialMediaBlock
              id="sejarah"
              chapterNumber="02"
              title="Jejak Sejarah"
              description=""
              citedContent={atlas.history.introduction}
              imageSrc={province.assets.culture}
              imageAlt={`Sejarah ${atlas.title}`}
              imageCaption={`Jejak peradaban ${atlas.title}`}
              allReferences={references}
              chapterSources={references.filter(r => atlas.history?.referenceIds.includes(r.id))}
            />
          )}

          {atlas.culture && (
            <EditorialMediaBlock
              id="budaya"
              chapterNumber="04"
              title="Kekayaan Budaya"
              description=""
              citedContent={atlas.culture.introduction}
              imageSrc={province.assets.culture}
              imageAlt={`Budaya ${atlas.title}`}
              imageCaption={`Ekspresi budaya ${atlas.title}`}
              allReferences={references}
              chapterSources={references.filter(r => atlas.culture?.referenceIds.includes(r.id))}
              reverse
            />
          )}

          {atlas.language && (
            <EditorialMediaBlock
              id="bahasa"
              chapterNumber="05"
              title="Bahasa dan Sastra"
              description=""
              citedContent={atlas.language.introduction}
              imageSrc={province.assets.culture}
              imageAlt={`Bahasa ${atlas.title}`}
              imageCaption={`Aksara dan bahasa ${atlas.title}`}
              allReferences={references}
              chapterSources={references.filter(r => atlas.language?.referenceIds.includes(r.id))}
            />
          )}

          {atlas.culinary && (
            <EditorialMediaBlock
              id="kuliner"
              chapterNumber="06"
              title="Rasa Nusantara"
              description=""
              citedContent={atlas.culinary.introduction}
              imageSrc={province.assets.food}
              imageAlt={`Kuliner ${atlas.title}`}
              imageCaption={`Kekayaan cita rasa ${atlas.title}`}
              allReferences={references}
              chapterSources={references.filter(r => atlas.culinary?.referenceIds.includes(r.id))}
              reverse
            />
          )}

          {atlas.destinations && (
            <EditorialMediaBlock
              id="destinasi"
              chapterNumber="08"
              title="Destinasi Ikonik"
              description=""
              citedContent={atlas.destinations.introduction}
              imageSrc={province.assets.destination}
              imageAlt={`Destinasi ${atlas.title}`}
              imageCaption={`Daya tarik ${atlas.title}`}
              allReferences={references}
              chapterSources={references.filter(r => atlas.destinations?.referenceIds.includes(r.id))}
            />
          )}

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
                <ReferenceList references={references} />
              </div>
            </div>
          </section>
        </>
      ) : (
        // ─── FALLBACK GENERIC CONTENT ──────────────────────────────────────
        <>
          <EditorialMediaBlock
            id="ringkasan"
            chapterNumber="00"
            title={`Mengenal ${province.name}`}
            description={summary.whyItMatters || province.summary}
            imageSrc={province.assets.hero}
            imageAlt={`Ringkasan ${province.name}`}
            imageCaption={`Potret lanskap ${province.name}`}
          />

          <EditorialMediaBlock
            id="budaya"
            chapterNumber="01"
            title="Budaya dan Tradisi"
            description={`Eksplorasi kekayaan tradisi yang hidup di ${province.name}, mulai dari ${summary.signatures.join(', ')} hingga kearifan lokal lainnya yang masih dijaga.`}
            imageSrc={province.assets.culture}
            imageAlt={`Budaya ${province.name}`}
            imageCaption={`Ekspresi kebudayaan ${province.name}`}
            reverse
          />

          <EditorialMediaBlock
            id="kuliner"
            chapterNumber="02"
            title="Rasa Nusantara"
            description={`Mencicipi otentisitas kuliner ${province.name}. Rempah-rempah pilihan menciptakan harmoni rasa yang khas dan tak terlupakan.`}
            imageSrc={province.assets.food}
            imageAlt={`Kuliner ${province.name}`}
            imageCaption={`Sajian kuliner khas ${province.name}`}
          />

          <EditorialMediaBlock
            id="destinasi"
            chapterNumber="03"
            title="Alam dan Destinasi"
            description={`Jelajahi keajaiban alam dan destinasi unggulan di ${province.name}. Setiap sudut menyimpan keindahan yang menanti untuk ditemukan.`}
            imageSrc={province.assets.destination}
            imageAlt={`Destinasi ${province.name}`}
            imageCaption={`Keindahan alam ${province.name}`}
            reverse
          />
        </>
      )}
    </ProvinceAtlasShell>
  );
}
