# Laporan Fase 6: Perbaiki Seluruh Anchor dan Internal Navigation

Fase 6 telah selesai diimplementasikan. Halaman Nusa Route kini menggunakan satu registry canonical untuk seluruh anchor dan navigasi internal, serta memperbaiki isu aksesibilitas terkait manajemen focus dan animasi scroll.

## Perubahan Utama

### 1. Canonical Route Section Registry (`src/lib/routes/routeSections.ts`)
Semua ID section kini terpusat pada satu file konstan:
```typescript
export const ROUTE_SECTION_IDS = {
  planner: "route-atelier",
  presets: "preset-routes",
  result: "route-recommendation-result",
  itinerary: "day-by-day-itinerary",
  map: "route-map-transport-summary",
  readiness: "route-readiness",
  saveRani: "route-save-rani-section",
} as const;
```
ID literal string yang tersebar di komponen (seperti `#route-planner`) telah diganti.

### 2. Helper Navigasi & Aksesibilitas (`src/lib/routes/navigateToRouteSection.ts`)
Fungsi `navigateToRouteSection(key)` dibuat untuk menangani scroll internal:
- **`prefers-reduced-motion`**: Membaca setting device (`window.matchMedia`) dan otomatis mematikan smooth scrolling ("auto") jika fitur ini menyala, sesuai standar WCAG.
- **Focus Management**: Setelah window selesai scroll, DOM focus dipindahkan ke heading section (elemen dengan atribut `data-route-section-heading` atau section wrapper itu sendiri) menggunakan `tabIndex={-1}` agar screen reader merespons perpindahan bagian.
- Menghindari konflik dengan animasi/transisi page Next.js.

### 3. Komponen `RouteSectionLink` (`src/components/routes/RouteSectionLink.tsx`)
Komponen abstrak ini menggantikan penggunaan `<a href="#...">` dan `next/link` untuk link jangkar internal. 
Komponen ini diimplementasikan di `RoutesNavbar.tsx` dan `RoutesHeroSection.tsx` untuk menyederhanakan kode dan menjamin konsistensi navigasi.

### 4. Perbaikan Komponen Section Halaman
Seluruh section berikut telah diupdate menggunakan ID dari registry dan properti `tabIndex={-1} data-route-section-heading` pada header masing-masing:
- `RouteAtelier.tsx`
- `PresetRoutesSection.tsx`
- `RouteRecommendationResultSection.tsx`
- `DayByDayItinerarySection.tsx`
- `RouteMapTransportSection.tsx`
- `RouteReadinessSection.tsx`
- `RouteSaveRaniSection.tsx`

### 5. Pengujian Integrasi
Pengujian statis diupdate untuk memeriksa konsistensi rute dan anchor:
- `scripts/validate-route-contracts.ts` (menguji kelengkapan 7 key section tanpa duplikat).
- `scripts/test-route-integration.ts` (menguji helper URL behavior).

Seluruh pengecekan `typecheck`, contract validation, dan integration test **BERHASIL PASS**.

## Rollback Point
Anda dapat kembali ke kondisi ini di branch `fix/nusantaraya-root-cause-hardening` dengan commit:
`fix(routes): unify section anchors and navigation`
