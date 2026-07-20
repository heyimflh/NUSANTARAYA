const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/province-atlas/AtlasItemCollection.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

// Add imports
const importsToAdd = `import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getArchiveItemBySlug } from "@/data/archive/archiveItems";

// Helper to slugify title to match archive slug
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\\s+/g, '-')
    .replace(/[^\\w\\-]+/g, '')
    .replace(/\\-\\-+/g, '-');
};
`;

content = content.replace('import { InlineCitation } from "./InlineCitation";', 'import { InlineCitation } from "./InlineCitation";\n' + importsToAdd);

// Modify the render of each item to include the Archive link if available
const cardStart = `            <article
              key={item.id}
              className="overflow-hidden rounded-3xl border border-[#E8E0CE] bg-white/75"
            >`;

const cardReplacement = `            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-[#E8E0CE] bg-white/75 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#D0A331]/50"
            >`;

content = content.replace(cardStart, cardReplacement);

// Insert the Archive button
const h4Start = `<h4 className="mt-1 font-serif text-2xl font-bold text-nusaNavy">`;
const h4Replacement = `
                {(() => {
                  const slug = slugify(displayName);
                  const archiveItem = getArchiveItemBySlug(slug) || getArchiveItemBySlug(item.id);
                  if (archiveItem) {
                    return (
                      <Link 
                        href={\`/archive/\${archiveItem.slug}\`}
                        className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-[#2A211A] text-[#F3EBDD] rounded-full text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-[#B65D43]"
                      >
                        Buka Arsip <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    );
                  }
                  return null;
                })()}
                <h4 className="mt-1 font-serif text-2xl font-bold text-nusaNavy group-hover:text-[#B65D43] transition-colors duration-300">`;

content = content.replace(h4Start, h4Replacement);

fs.writeFileSync(targetPath, content);
console.log('AtlasItemCollection updated with Archive links!');
