/**
 * generate-svg.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Script untuk menghasilkan DUA file SVG dari TopoJSON 38 Provinsi Indonesia:
 *
 *   1. indonesia-outline.svg  — Siluet garis tepi (stroke only, no fill)
 *   2. indonesia-fill.svg     — Siluet terisi penuh (solid fill + gradient)
 *
 * Dependencies : topojson-client, d3-geo
 * Module system: ESM (package.json "type": "module")
 * Penulis      : NUSANTARAYA Asset Pipeline
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs            from "fs";
import path          from "path";
import { fileURLToPath } from "url";
import * as topojson from "topojson-client";
import * as d3geo    from "d3-geo";

// Resolve __dirname untuk ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ─── 1. Baca file TopoJSON ───────────────────────────────────────────────────
const topoPath = path.join(__dirname, "indonesia-38-provinces.topo.json");

if (!fs.existsSync(topoPath)) {
  console.error("❌  File tidak ditemukan:", topoPath);
  console.error("    Pastikan 'indonesia-38-provinces.topo.json' ada di folder yang sama.");
  process.exit(1);
}

let topoData;
try {
  topoData = JSON.parse(fs.readFileSync(topoPath, "utf8"));
} catch (e) {
  console.error("❌  Gagal parse JSON:", e.message);
  process.exit(1);
}

// ─── 2. Deteksi key object secara otomatis (tidak hardcode) ──────────────────
const objectKeys = Object.keys(topoData.objects ?? {});
if (objectKeys.length === 0) {
  console.error("❌  Tidak ada object di dalam topo.objects. File mungkin rusak.");
  process.exit(1);
}
const objectKey = objectKeys[0];
console.log(`🔍  Object key terdeteksi: "${objectKey}"`);

const topoObject = topoData.objects[objectKey];
if (!topoObject?.geometries?.length) {
  console.error(`❌  Object "${objectKey}" tidak memiliki geometries.`);
  process.exit(1);
}
console.log(`✅  Jumlah provinsi: ${topoObject.geometries.length}`);

// ─── 3. Konversi TopoJSON → GeoJSON ─────────────────────────────────────────
// feature()  → FeatureCollection semua provinsi (untuk fitExtent & per-path)
// merge()    → Satu MultiPolygon gabungan (garis internal hilang)
const featureCollection = topojson.feature(topoData, topoObject);
const mergedGeometry    = topojson.merge(topoData, topoObject.geometries);
const mergedFeature     = { type: "Feature", geometry: mergedGeometry, properties: {} };

// ─── 4. Setup proyeksi & path generator ─────────────────────────────────────
const WIDTH   = 1200;
const HEIGHT  = 600;
const PADDING = 28;   // px ruang kosong di tepi agar tidak mepet

// geoMercator + fitExtent: peta presisi, proporsional, dan terpusat di canvas
const projection = d3geo.geoMercator().fitExtent(
  [[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]],
  featureCollection
);

// Generator string path SVG "d" dari GeoJSON
const pathGen = d3geo.geoPath().projection(projection);

// ─── 5. Helper: bulatkan koordinat ke N desimal agar file ringan & bersih ───
function roundPath(dAttr, dec = 2) {
  return dAttr.replace(/(\d+\.\d{3,})/g, (m) => parseFloat(m).toFixed(dec));
}

// ─── 6. Generate path merged (satu siluet tunggal) ──────────────────────────
const rawMerged = pathGen(mergedFeature);
if (!rawMerged) {
  console.error("❌  Gagal generate path SVG dari merged geometry.");
  process.exit(1);
}
const dMerged = roundPath(rawMerged);

// ─── 7. Generate path per-provinsi (untuk data-prov attribute) ───────────────
const provPaths = featureCollection.features
  .map((feat) => {
    const raw  = pathGen(feat);
    if (!raw) return null;
    return {
      d   : roundPath(raw),
      kode: feat.properties?.KODE_PROV ?? "",
      nama: (feat.properties?.PROVINSI  ?? "").replace(/"/g, "&quot;"),
    };
  })
  .filter(Boolean);

// ─────────────────────────────────────────────────────────────────────────────
// SVG #1 — indonesia-outline.svg
//   • Stroke gradient biru laut → biru tua
//   • fill="none", hanya garis tepi
//   • Layer per-provinsi tersembunyi (opacity rendah) untuk CSS/animasi
// ─────────────────────────────────────────────────────────────────────────────
const outlineProvPaths = provPaths.map(({ d, kode, nama }) => `    <path
      class="province-path"
      data-prov="${kode}"
      data-name="${nama}"
      d="${d}"
      fill="none"
      stroke="url(#outlineGradient)"
      stroke-width="0.6"
      stroke-linejoin="round"
      stroke-linecap="round"
      opacity="0.30"
    />`).join("\n");

const svgOutline = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  indonesia-outline.svg
  Siluet garis tepi Indonesia — 38 Provinsi (merged, tanpa batas internal)
  Gradient: #0EA5E9 → #1E3A8A | Stroke-only | NUSANTARAYA Asset
-->
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 ${WIDTH} ${HEIGHT}"
  preserveAspectRatio="xMidYMid meet"
  role="img"
  aria-label="Peta Outline Indonesia 38 Provinsi"
>
  <title>Peta Outline Indonesia — 38 Provinsi</title>

  <defs>
    <!-- Gradient biru laut → biru tua: kesan premium, tajam, dan modern -->
    <linearGradient id="outlineGradient" x1="0%" y1="20%" x2="100%" y2="80%">
      <stop offset="0%"   stop-color="#0EA5E9" />
      <stop offset="45%"  stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>

    <!-- Glow halus agar garis terlihat "bercahaya" -->
    <filter id="outlineGlow" x="-8%" y="-8%" width="116%" height="116%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Layer 1: Garis batas per-provinsi (tipis, siap animasi hover CSS/JS) -->
  <g id="provinces-layer" aria-hidden="true">
${outlineProvPaths}
  </g>

  <!-- Layer 2: Siluet garis tepi utama (merged — tanpa batas antar-provinsi) -->
  <path
    id="indonesia-outline"
    class="indonesia-shape"
    d="${dMerged}"
    fill="none"
    stroke="url(#outlineGradient)"
    stroke-width="1.8"
    stroke-linejoin="round"
    stroke-linecap="round"
    filter="url(#outlineGlow)"
  />
</svg>`;

// ─────────────────────────────────────────────────────────────────────────────
// SVG #2 — indonesia-fill.svg
//   • Fill gradient: biru langit tropis → biru Nusantara dalam
//   • Shimmer emas subtle (nuansa kultural Nusantara)
//   • Drop-shadow untuk efek floating/depth premium
//   • Garis batas per-provinsi transparan untuk CSS/JS interaktif
// ─────────────────────────────────────────────────────────────────────────────
const fillProvPaths = provPaths.map(({ d, kode, nama }) => `    <path
      class="province-path"
      data-prov="${kode}"
      data-name="${nama}"
      d="${d}"
      fill="transparent"
      stroke="rgba(255,255,255,0.10)"
      stroke-width="0.5"
      stroke-linejoin="round"
      stroke-linecap="round"
    />`).join("\n");

const svgFill = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  indonesia-fill.svg
  Siluet terisi penuh Indonesia — 38 Provinsi (gradient + drop-shadow)
  Gradient: #38BDF8 → #1E3A8A + shimmer emas | NUSANTARAYA Asset
-->
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 ${WIDTH} ${HEIGHT}"
  preserveAspectRatio="xMidYMid meet"
  role="img"
  aria-label="Peta Indonesia 38 Provinsi"
>
  <title>Peta Indonesia — 38 Provinsi</title>

  <defs>
    <!-- Gradient utama: biru langit tropis → biru Nusantara dalam -->
    <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#38BDF8" />
      <stop offset="35%"  stop-color="#0EA5E9" />
      <stop offset="70%"  stop-color="#1D4ED8" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>

    <!-- Shimmer emas Nusantara: lembut, dekoratif, bernilai kultural -->
    <radialGradient id="shimmerGold" cx="48%" cy="52%" r="55%">
      <stop offset="0%"   stop-color="#FCD34D" stop-opacity="0.10" />
      <stop offset="55%"  stop-color="#F59E0B" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"    />
    </radialGradient>

    <!-- Drop-shadow: efek floating, memberikan depth premium -->
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow
        dx="0" dy="5"
        stdDeviation="10"
        flood-color="#0369A1"
        flood-opacity="0.35"
      />
    </filter>

    <!-- Edge glow biru: kesan digital/futuristik untuk web app modern -->
    <filter id="edgeGlow" x="-6%" y="-6%" width="112%" height="112%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
      <feFlood flood-color="#38BDF8" flood-opacity="0.45" result="color" />
      <feComposite in="color" in2="blur" operator="in" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Layer 1: Bayangan di bawah (drop-shadow render terpisah agar tajam) -->
  <path
    aria-hidden="true"
    d="${dMerged}"
    fill="#0C4A6E"
    opacity="0.18"
    transform="translate(0, 7)"
    filter="url(#dropShadow)"
  />

  <!-- Layer 2: Siluet terisi utama dengan gradient biru Nusantara -->
  <path
    id="indonesia-fill"
    class="indonesia-shape"
    d="${dMerged}"
    fill="url(#fillGradient)"
    stroke="rgba(56,189,248,0.45)"
    stroke-width="0.8"
    stroke-linejoin="round"
    stroke-linecap="round"
    filter="url(#edgeGlow)"
  />

  <!-- Layer 3: Shimmer emas Nusantara (overlay dekoratif) -->
  <path
    aria-hidden="true"
    d="${dMerged}"
    fill="url(#shimmerGold)"
  />

  <!-- Layer 4: Batas per-provinsi (transparan, siap dipakai hover/klik CSS/JS) -->
  <g id="provinces-layer">
${fillProvPaths}
  </g>

  <!-- Layer 5: Garis tepi akhir (crisp edge, sedikit terang) -->
  <path
    aria-hidden="true"
    d="${dMerged}"
    fill="none"
    stroke="rgba(186,230,253,0.55)"
    stroke-width="1.0"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
</svg>`;

// ─── 8. Tulis kedua file SVG ke disk ─────────────────────────────────────────
const outlineDest = path.join(__dirname, "indonesia-outline.svg");
const fillDest    = path.join(__dirname, "indonesia-fill.svg");

fs.writeFileSync(outlineDest, svgOutline, "utf8");
fs.writeFileSync(fillDest,    svgFill,    "utf8");

// ─── 9. Konfirmasi sukses + ukuran file ──────────────────────────────────────
const kb = (p) => (fs.statSync(p).size / 1024).toFixed(1);
console.log("");
console.log("╔══════════════════════════════════════════════════════╗");
console.log("║       ✅  SVG NUSANTARAYA BERHASIL DIBUAT!           ║");
console.log("╠══════════════════════════════════════════════════════╣");
console.log(`║  📄 indonesia-outline.svg   →  ${kb(outlineDest).padStart(6)} KB               ║`);
console.log(`║  📄 indonesia-fill.svg      →  ${kb(fillDest).padStart(6)} KB               ║`);
console.log("╠══════════════════════════════════════════════════════╣");
console.log(`║  🗺️  Proyeksi : geoMercator (fitExtent)               ║`);
console.log(`║  🖼️  ViewBox  : 0 0 ${WIDTH} ${HEIGHT}                       ║`);
console.log(`║  🏝️  Provinsi : ${provPaths.length} provinsi (38 termasuk Papua baru)  ║`);
console.log("╚══════════════════════════════════════════════════════╝");
console.log("");
console.log("🚀  SVG siap digunakan di web app NUSANTARAYA!");
