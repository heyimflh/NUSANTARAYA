import React from 'react';
import Image from 'next/image';
import type { CitedParagraph, ScientificReference } from '@/types/atlas';
import { InlineCitation } from './InlineCitation';
import { ChapterSourceFooter } from './ChapterSourceFooter';

type EditorialProps = {
  id: string;
  chapterNumber: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  reverse?: boolean;
  citedContent?: CitedParagraph[];
  chapterSources?: ScientificReference[];
  allReferences?: ScientificReference[];
};

export const EditorialMediaBlock = ({
  id, chapterNumber, title, description, imageSrc, imageAlt, imageCaption, reverse = false, citedContent, chapterSources, allReferences
}: EditorialProps) => {
  return (
    <section id={id} className="scroll-mt-36 mb-24 md:mb-32">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-bold tracking-widest text-nusaGold">BAB {chapterNumber}</span>
        <div className="h-px bg-[#E8E0CE] flex-1" />
      </div>
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
        <div className="w-full md:w-[48%] aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden relative shadow-lg">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-nusaNavy/80 to-transparent p-6 pt-20">
            <p className="text-white/90 text-sm font-medium">{imageCaption}</p>
          </div>
        </div>
        <div className="w-full md:w-[52%] flex flex-col gap-6">
          <h2 className="font-serif text-4xl md:text-5xl text-nusaNavy font-bold leading-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-nusaGold rounded-full" />
          
          <div className="flex flex-col gap-4 text-lg text-nusaNavy/80 leading-relaxed">
            {citedContent && citedContent.length > 0 && allReferences ? (
              citedContent.map(para => (
                <p key={para.id}>
                  {para.content}{' '}
                  {para.citationIds && para.citationIds.length > 0 && (
                    <InlineCitation ids={para.citationIds} references={allReferences} />
                  )}
                </p>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>

          {chapterSources && chapterSources.length > 0 && (
            <ChapterSourceFooter references={chapterSources} />
          )}
        </div>
      </div>
    </section>
  );
};
