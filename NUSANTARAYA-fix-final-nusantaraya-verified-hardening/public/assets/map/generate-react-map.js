import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, 'indonesia-fill.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Extract dMerged (from id="indonesia-fill")
const fillMatch = svgContent.match(/id="indonesia-fill"[\s\S]*?d="([^"]+)"/);
const dMerged = fillMatch ? fillMatch[1] : '';

// Extract province paths
const provRegex = /<path\s+class="province-path"\s+data-prov="([^"]+)"\s+data-name="([^"]+)"\s+d="([^"]+)"/g;
let match;
const provinces = [];

while ((match = provRegex.exec(svgContent)) !== null) {
  let name = match[2];
  let d = match[3];
  let id = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  // Custom mapping for some edge cases if necessary
  if (id === 'daerah-istimewa-yogyakarta') id = 'di-yogyakarta';
  if (id === 'dki-jakarta') id = 'dki-jakarta';
  
  provinces.push({ id, name, d });
}

// Write React Component
const componentContent = `
import React from 'react';
import { ProvinceMapItem } from '@/types/province';
import { ExploreLayerId, ExploreModeId } from '@/data/exploreControls';

type IndonesiaSvgMapProps = {
  provinces: ProvinceMapItem[];
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  hoveredProvinceId: string | null;
  focusedProvinceId: string | null;
  showFlagshipOnly: boolean;
  searchQuery: string;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
  onFocus: (id: string | null) => void;
};

// Extracted from indonesia-fill.svg
const dMerged = "${dMerged}";

const provincePaths: Record<string, string> = {
${provinces.map(p => `  "${p.id}": "${p.d}",`).join('\n')}
};

export const IndonesiaSvgMap: React.FC<IndonesiaSvgMapProps> = ({
  provinces,
  activeLayer,
  activeMode,
  selectedProvinceId,
  hoveredProvinceId,
  focusedProvinceId,
  showFlagshipOnly,
  searchQuery,
  onHover,
  onSelect,
  onFocus
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid meet"
      role="region"
      aria-label="Peta Interaktif Indonesia 38 Provinsi"
      className="w-full h-auto drop-shadow-xl"
    >
      <defs>
        <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="35%" stopColor="#0EA5E9" />
          <stop offset="70%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>

        <radialGradient id="shimmerGold" cx="48%" cy="52%" r="55%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.10" />
          <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>

        <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#0369A1" floodOpacity="0.35" />
        </filter>

        <filter id="edgeGlow" x="-6%" y="-6%" width="112%" height="112%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
          <feFlood floodColor="#38BDF8" floodOpacity="0.45" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Layer 1: Base Shadow */}
      <path
        aria-hidden="true"
        d={dMerged}
        fill="#0C4A6E"
        opacity="0.18"
        transform="translate(0, 7)"
        filter="url(#dropShadow)"
        className="transition-all duration-300"
      />

      {/* Layer 2: Main Fill */}
      <path
        id="indonesia-fill"
        d={dMerged}
        fill="url(#fillGradient)"
        stroke="rgba(56,189,248,0.45)"
        strokeWidth="0.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#edgeGlow)"
        className="transition-all duration-300"
      />

      {/* Layer 3: Shimmer Gold */}
      <path
        aria-hidden="true"
        d={dMerged}
        fill="url(#shimmerGold)"
      />

      {/* Layer 4: Interactive Provinces */}
      <g id="provinces-layer">
        {provinces.map((prov) => {
          const d = provincePaths[prov.id];
          if (!d) return null; // Fallback just in case

          const isSelected = selectedProvinceId === prov.id;
          const isHovered = hoveredProvinceId === prov.id;
          const isFocused = focusedProvinceId === prov.id;
          
          let isDimmed = false;
          if (showFlagshipOnly) {
            isDimmed = !prov.isFlagship;
          } else if (activeLayer !== "all") {
            isDimmed = !prov.categories.includes(activeLayer);
          }
          if (searchQuery) {
             const query = searchQuery.toLowerCase();
             const matchSearch = prov.name.toLowerCase().includes(query) || 
                                 prov.region.toLowerCase().includes(query) || 
                                 prov.capital.toLowerCase().includes(query);
             if (!matchSearch && !isSelected) isDimmed = true;
          }

          // State visual mapping
          let fillOpacity = 0;
          let fill = "transparent";
          let stroke = "rgba(255,255,255,0.10)";
          let strokeWidth = 0.5;

          if (isSelected) {
            fillOpacity = 0.6;
            fill = "#0D1B2A"; // nusaNavy
            stroke = "#C9A84C"; // nusaGold
            strokeWidth = 1.5;
          } else if (isHovered || isFocused) {
            fillOpacity = 0.2;
            fill = "#C9A84C"; // nusaGold
            stroke = "#C9A84C";
            strokeWidth = 1.2;
          } else if (isDimmed) {
            fillOpacity = 0.3;
            fill = "#000000";
            stroke = "rgba(255,255,255,0.05)";
          } else {
             // Default/Matching
             if (activeLayer !== "all" && !showFlagshipOnly && !searchQuery) {
               fillOpacity = 0.3;
               fill = "#FCD34D"; // slight gold tint for matching
             }
          }

          return (
            <path
              key={prov.id}
              id={\`path-\${prov.id}\`}
              className="province-path transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none"
              d={d}
              fill={fill}
              fillOpacity={fillOpacity}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
              onMouseEnter={() => onHover(prov.id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onSelect(prov.id)}
              onFocus={() => onFocus(prov.id)}
              onBlur={() => onFocus(null)}
              tabIndex={0}
              role="button"
              aria-label={prov.name}
              aria-pressed={isSelected}
            />
          );
        })}
      </g>

      {/* Layer 5: Top Crisp Edge */}
      <path
        aria-hidden="true"
        d={dMerged}
        fill="none"
        stroke="rgba(186,230,253,0.55)"
        strokeWidth="1.0"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="pointer-events-none"
      />
    </svg>
  );
};
`;

const destPath = path.join(__dirname, '../../../src/components/explore/interactive-map/IndonesiaSvgMap.tsx');
fs.mkdirSync(path.dirname(destPath), { recursive: true });
fs.writeFileSync(destPath, componentContent, 'utf8');

console.log('✅ Generated IndonesiaSvgMap.tsx');
