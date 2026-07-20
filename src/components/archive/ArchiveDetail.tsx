"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, ExternalLink, Bookmark, Share2 } from "lucide-react";
import { ArchiveItem } from "@/types/archive";
import { useLanguage } from "@/context/app-context";
import { getArchiveCategoryById, getArchiveCategoryName } from "@/data/archive/archiveCategories";
import { archiveSourceRegistry, getSourceReliability } from "@/data/archive/archiveSourceRegistry";
import { provinceMapData } from "@/data/provinces/provinces";
import { trackEvent } from "@/lib/analytics";
import "./archive-page.css"; // Ensure tokens are loaded

interface ArchiveDetailProps {
  item: ArchiveItem;
}

const provinceNameMap = new Map(provinceMapData.map((p) => [p.id, p.name]));

export function ArchiveDetail({ item }: ArchiveDetailProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    trackEvent("archive_item_viewed", { itemId: item.id });
  }, [item.id]);

  const content = language === "en" && item.localeContent.en ? item.localeContent.en : item.localeContent.id;
  const category = getArchiveCategoryById(item.categoryId);
  const categoryName = getArchiveCategoryName(item.categoryId, language);
  
  const primaryProvinceId = item.provinceIds[0];
  const provinceName = provinceNameMap.get(primaryProvinceId) || primaryProvinceId;
  const catalogNumber = `ARC-${primaryProvinceId.substring(0, 3).toUpperCase()}-${category?.index.toString().padStart(2, '0')}`;
  
  const mainMedia = item.media[0];
  const galleryMedia = item.media.slice(1);

  const reliability = getSourceReliability(item.sourceRefs);
  const mappedSources = item.sourceRefs.map(ref => ({
    ref,
    registry: archiveSourceRegistry.find(r => r.id === ref)
  }));

  return (
    <div className="archive-page bg-[var(--archive-canvas)] min-h-screen pb-24">
      {/* ── Navigation Bar ── */}
      <div className="sticky top-0 z-40 bg-[var(--archive-canvas)]/90 backdrop-blur-md border-b border-[var(--archive-line)]">
        <div className="archive-container h-16 flex items-center justify-between">
          <Link 
            href="/archive"
            className="inline-flex items-center gap-2 text-[var(--archive-charcoal)] hover:text-[var(--archive-ink)] transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            {t("Kembali ke Arsip", "Back to Archive")}
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="text-[var(--archive-charcoal)] hover:text-[var(--archive-ink)] transition-colors">
              <Share2 size={18} />
            </button>
            <button className="text-[var(--archive-charcoal)] hover:text-[var(--archive-ink)] transition-colors">
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Header Section ── */}
      <header className="archive-container pt-8 lg:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 lg:order-2">
            <div className="relative w-full aspect-[4/5] sm:aspect-square bg-[var(--archive-paper-deep)] rounded-xl overflow-hidden shadow-sm">
              {mainMedia && (
                <Image
                  src={mainMedia.src}
                  alt={language === "en" ? mainMedia.altEn || mainMedia.alt : mainMedia.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              )}
            </div>
            
            {galleryMedia.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {galleryMedia.slice(0, 3).map((media, idx) => (
                  <div key={idx} className="relative aspect-square bg-[var(--archive-paper-deep)] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src={media.src}
                      alt={language === "en" ? media.altEn || media.alt : media.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 lg:order-1 flex flex-col pt-4 lg:pt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="archive-catalog-number text-[var(--archive-muted)] bg-[var(--archive-paper)] border border-[var(--archive-line)] px-2 py-1 rounded">
                {catalogNumber}
              </span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: category?.accentColor || 'var(--archive-muted)' }} />
              <span className="archive-eyebrow" style={{ color: category?.accentColor || 'inherit' }}>
                {categoryName}
              </span>
            </div>

            <h1 className="archive-display text-[var(--archive-ink)] mb-6 text-4xl lg:text-5xl lg:leading-tight">
              {content.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mb-8 border-y border-[var(--archive-line)] py-4">
              <div className="flex items-center gap-2 text-[var(--archive-charcoal)]">
                <MapPin size={16} />
                <span className="text-sm font-medium">{provinceName}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--archive-charcoal)]">
                <div className={`w-2 h-2 rounded-full ${reliability === 'verified' ? 'bg-[var(--archive-success)]' : 'bg-[var(--archive-warning)]'}`} />
                <span className="text-sm font-medium">
                  {reliability === 'verified' ? t("Terverifikasi", "Verified") : t("Dalam Peninjauan", "Under Review")}
                </span>
              </div>
            </div>

            <p className="archive-body text-lg text-[var(--archive-ink)] mb-8">
              {content.summary}
            </p>

            <div className="space-y-6 text-[var(--archive-charcoal)]">
              {content.context && (
                <div>
                  <h3 className="archive-eyebrow text-[var(--archive-ink)] mb-2">{t("Konteks Sosial", "Social Context")}</h3>
                  <p className="leading-relaxed">{content.context}</p>
                </div>
              )}
              {content.meaning && (
                <div>
                  <h3 className="archive-eyebrow text-[var(--archive-ink)] mb-2">{t("Makna & Filosofi", "Meaning & Philosophy")}</h3>
                  <p className="leading-relaxed">{content.meaning}</p>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              {primaryProvinceId && (
                <Link 
                  href={`/explore?province=${primaryProvinceId}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--archive-ink)] text-[var(--archive-canvas)] font-medium hover:bg-[var(--archive-charcoal)] transition-colors"
                >
                  <MapPin size={18} />
                  {t("Jelajahi di Peta Atlas", "Explore in Atlas Map")}
                </Link>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* ── Extended Context Section ── */}
      <section className="border-t border-[var(--archive-line)] bg-[var(--archive-surface-deep)] py-16">
        <div className="archive-container">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Details Table */}
            <div>
              <h3 className="archive-h3 mb-6">{t("Spesifikasi Arsip", "Archive Specifications")}</h3>
              <div className="bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[var(--archive-line)]">
                  <div className="p-4 bg-[var(--archive-paper-deep)] border-b sm:border-b-0 sm:border-r border-[var(--archive-line)]">
                    <span className="archive-eyebrow text-xs text-[var(--archive-muted)] block mb-1">{t("ID Berkas", "File ID")}</span>
                    <span className="font-mono text-sm text-[var(--archive-ink)]">{item.id}</span>
                  </div>
                  <div className="p-4 bg-[var(--archive-paper-deep)] border-b sm:border-b-0 sm:border-r border-[var(--archive-line)]">
                    <span className="archive-eyebrow text-xs text-[var(--archive-muted)] block mb-1">{t("Pembaruan Terakhir", "Last Updated")}</span>
                    <span className="font-mono text-sm text-[var(--archive-ink)]">{item.updatedAt}</span>
                  </div>
                  <div className="p-4 bg-[var(--archive-paper-deep)]">
                    <span className="archive-eyebrow text-xs text-[var(--archive-muted)] block mb-1">{t("Peringkat Kurasi", "Curation Priority")}</span>
                    <span className="font-mono text-sm text-[var(--archive-ink)]">{item.editorialPriority}/10</span>
                  </div>
                </div>
                
                {item.keywords.length > 0 && (
                  <div className="p-4">
                    <span className="archive-eyebrow text-xs text-[var(--archive-muted)] block mb-2">{t("Kata Kunci", "Keywords")}</span>
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map(kw => (
                        <span key={kw} className="px-2 py-1 bg-[var(--archive-canvas)] border border-[var(--archive-line)] rounded text-xs text-[var(--archive-charcoal)]">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {item.aliases.length > 0 && (
                  <div className="p-4 border-t border-[var(--archive-line)]">
                    <span className="archive-eyebrow text-xs text-[var(--archive-muted)] block mb-2">{t("Nama Lain / Alias", "Other Names / Aliases")}</span>
                    <div className="flex flex-wrap gap-2 text-sm text-[var(--archive-charcoal)]">
                      {item.aliases.join(", ")}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fun Facts */}
            {content.funFacts && content.funFacts.length > 0 && (
              <div>
                <h3 className="archive-h3 mb-6 text-[var(--archive-saffron)]">{t("Tahukah Anda?", "Did You Know?")}</h3>
                <div className="space-y-4">
                  {content.funFacts.map((fact, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-[var(--archive-saffron-soft)] rounded-xl border border-[var(--archive-saffron)]/20">
                      <span className="text-[var(--archive-saffron)] font-bold text-lg mt-0.5">{(idx + 1).toString().padStart(2, '0')}</span>
                      <p className="text-[var(--archive-ink)] leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Etiquette & Rules (if present) */}
            {content.etiquette && (
              <div>
                <h3 className="archive-h3 mb-6 flex items-center gap-2">
                  <span className="text-[var(--archive-warning)]">⚠️</span> 
                  {t("Adat & Etika", "Customs & Etiquette")}
                </h3>
                <div className="bg-[var(--archive-paper)] p-6 rounded-xl border border-[var(--archive-line)]">
                  <p className="text-[var(--archive-charcoal)] leading-relaxed">{content.etiquette}</p>
                </div>
              </div>
            )}

            {/* Trust & Source Verification */}
            <div>
              <h3 className="archive-h3 mb-6">{t("Daftar Pustaka & Verifikasi", "Bibliography & Verification")}</h3>
              <div className="bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--archive-line)]">
                  <div className={`w-3 h-3 rounded-full ${reliability === 'verified' ? 'bg-[var(--archive-success)]' : 'bg-[var(--archive-warning)]'}`} />
                  <div>
                    <h4 className="font-bold text-[var(--archive-ink)]">
                      {reliability === 'verified' ? t("Data Terverifikasi", "Verified Data") : t("Data Dalam Peninjauan", "Data Under Review")}
                    </h4>
                    <p className="text-sm text-[var(--archive-muted)]">
                      {t(`Disusun dari ${item.sourceRefs.length} sumber akademik dan kelembagaan.`, `Compiled from ${item.sourceRefs.length} academic and institutional sources.`)}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {mappedSources.map(({ ref, registry }, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-lg bg-[var(--archive-canvas)]">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--archive-paper-deep)] flex items-center justify-center text-xs font-bold text-[var(--archive-muted)]">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[var(--archive-ink)] leading-relaxed">
                          {registry ? registry.title : ref}
                        </p>
                        {registry && (
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-xs font-medium text-[var(--archive-muted)] bg-[var(--archive-paper)] px-2 py-1 rounded">
                              {registry.organization || registry.title}
                            </span>
                            <span className="text-xs text-[var(--archive-muted)]">({registry.type})</span>
                          </div>
                        )}
                        {registry?.url && (
                          <a 
                            href={registry.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[var(--archive-saffron)] hover:underline"
                          >
                            {t("Lihat Sumber Asli", "View Original Source")} <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
