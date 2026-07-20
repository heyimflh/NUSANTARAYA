# Planning Master — Perbaikan & Penyempurnaan Menyeluruh NUSANTARAYA

<aside>
🎯

**Tujuan utama:** membawa NUSANTARAYA dari MVP yang masih memiliki kontrak data tidak konsisten, fallback semu, dan integrasi parsial menjadi aplikasi yang type-safe, konsisten secara data, dapat diuji, dan tidak menghasilkan regresi lintas Homepage, Explore, Nusa Atlas, Nusa Route, Passport, dan RANI.

</aside>

## Prinsip Eksekusi Wajib

1. **Perbaiki akar masalah, bukan gejalanya.** Jangan menambahkan cast `as any`, optional chaining, atau fallback generik hanya untuk menghilangkan error.
2. **Satu sumber kebenaran.** Tipe, ID provinsi, route preset, itinerary, anchor, dan status route harus mempunyai registry canonical.
3. **Perubahan kecil dan terverifikasi.** Satu kelompok akar masalah diselesaikan per fase, lalu menjalankan type-check, lint, unit test, integration test, dan build sebelum lanjut.
4. **Tidak ada UI yang menjanjikan fungsi palsu.** Fitur yang belum benar-benar mengubah state harus diberi status preview atau dinonaktifkan.
5. **Tidak ada silent fallback lintas wilayah.** Rute Papua tidak boleh menampilkan itinerary Jawa.
6. **Backward compatibility terkontrol.** Data `localStorage` lama harus dimigrasikan, bukan langsung dihapus.
7. **Tidak ada merge bila quality gate gagal.** Setiap fase mempunyai acceptance criteria dan rollback point.

## Target Akhir

| Area | Kondisi target | Bukti kelulusan |
| --- | --- | --- |
| Type safety | Semua kontrak route konsisten tanpa `any` darurat | `npm run typecheck` lulus |
| Build | Build production berhasil | `npm run build` exit code 0 |
| Nusa Route | Result, itinerary, peta, readiness, dan save memakai route yang sama | Consistency tests untuk seluruh preset |
| Integrasi | Homepage, Explore, Atlas, Passport, dan RANI terhubung dua arah | E2E Playwright |
| Data | Semua ID memakai slug canonical | Validator menolak numeric/unknown ID |
| UX | Tidak ada CTA mati, 404, atau fitur no-op | Anchor/link contract test |

---

## Fase 0 — Baseline, Branch, dan Safety Net

### Tujuan

Membuat kondisi awal yang dapat diulang sehingga setiap regresi dapat diketahui dan perubahan dapat dibatalkan dengan aman.

### Langkah

- [ ]  Buat branch khusus, misalnya `fix/nusantaraya-root-cause-hardening`.
- [ ]  Pastikan menggunakan versi Node yang konsisten dengan Next.js 16.
- [ ]  Hapus `node_modules` dan hasil build lama, lalu jalankan instalasi bersih dari lockfile.
- [ ]  Catat output awal untuk `typecheck`, `lint`, seluruh validator, dan `build`.
- [ ]  Tambahkan script test khusus route ke `package.json`.
- [ ]  Jangan mengubah UI sebelum kontrak data canonical disepakati.

```json
{
  "scripts": {
    "test:route-engine": "tsx scripts/test-route-engine.ts",
    "test:route-integration": "tsx scripts/test-route-integration.ts",
    "validate:route-contracts": "tsx scripts/validate-route-contracts.ts",
    "qa:route": "npm run validate:route-presets && npm run validate:route-contracts && npm run test:route-engine && npm run test:route-integration && npm run typecheck && npm run lint && npm run build"
  }
}
```

### Baseline yang harus disimpan

- Daftar error TypeScript per file.
- Daftar warning ESLint.
- Daftar internal route dan anchor.
- Snapshot 10 preset route.
- Snapshot Passport versi saat ini.
- Screenshot desktop 1440 px dan mobile 390 px untuk `/`, `/explore`, `/routes`, dan satu halaman Atlas.

### Acceptance criteria

- Seluruh anggota tim menjalankan versi Node dan dependency yang sama.
- Baseline terdokumentasi.
- Tidak ada perubahan fitur pada fase ini.

---

## Fase 1 — Satukan Kontrak Data Nusa Route

<aside>
🚨

Ini fase P0. Jangan mengerjakan itinerary dinamis atau RANI sebelum kontrak ini lulus type-check.

</aside>

### Akar masalah

`RouteRecommendation`, `RouteStop`, `RoutePlannerFormValues`, snapshot Passport, dan RANI context memakai struktur berbeda. Beberapa file mengakses `version`, `regionId`, `id`, `partySize`, dan `travelerMode` yang tidak ada pada tipe canonical.

### File utama

- `src/types/route-planner.ts`
- `src/lib/routes/save-rani/buildRouteRaniContext.ts`
- `src/lib/routes/save-rani/buildRouteSaveSnapshot.ts`
- `src/lib/routes/save-rani/resolveRouteAdjustment.ts`
- `src/data/routes/routePresets.ts`
- `src/context/app-context.tsx`
- `src/lib/types/index.ts`

### Solusi akar masalah

1. Tentukan schema canonical berikut:
    - `RouteRecommendation.version` wajib.
    - `RouteStop.id` wajib dan stabil.
    - `RouteStop.regionId` tidak perlu diduplikasi bila dapat diturunkan secara aman dari `provinceId`; pilih satu pendekatan dan gunakan konsisten.
    - `title` tetap string bilingual yang sudah di-resolve, atau menjadi `{ id, en }`. Jangan mencampur keduanya.
    - `RoutePlannerFormValues` hanya berisi field yang benar-benar tersedia di form.
    - `partySize` dan `travelerMode` dihapus dari consumer jika belum menjadi input nyata. Jika diperlukan produk, tambahkan ke form, default, sanitasi, URL schema, dan UI dalam satu perubahan lengkap.
2. Tambahkan `ROUTE_SCHEMA_VERSION` dan version pada semua preset.
3. Buat factory `createRouteRecommendation()` agar semua output matcher mempunyai bentuk yang sama.
4. Buat helper `getRouteProvinceIds()` dan `getRouteRegionIds()` agar snapshot tidak mengambil properti yang tidak canonical.
5. Hilangkan seluruh `as any` pada area route-save-rani.

### Keputusan yang direkomendasikan

Untuk risiko terendah, pertahankan `title: string` pada `RouteRecommendation` karena komponen saat ini sudah menggunakannya sebagai string. Ubah snapshot menjadi:

```tsx
const titleSnapshot = result.title;
```

Tambahkan field berikut secara eksplisit:

```tsx
interface RouteRecommendation {
  id: string;
  version: string;
  // field existing lainnya
}

interface RouteStop {
  id: string;
  dayStart: number;
  dayEnd: number;
  provinceId: ProvinceId;
  cityOrCluster: string;
  highlights: string[];
}
```

### Perbaikan prop mismatch

- [ ]  Selaraskan `ItineraryTimeline` dengan `ItineraryDayCardProps`.
- [ ]  Selaraskan `PresetRoutesGrid` dengan `PresetRouteCardProps`.
- [ ]  Selaraskan `TransportSummaryPanel` dengan `TransferRowProps`.
- [ ]  Ubah `ChecklistModule` agar hasil persistence bertipe `string[]`, bukan `unknown[]`.
- [ ]  Beri tipe event eksplisit pada filter, combobox, canvas, transfer row, dan checklist.

### Test wajib

- [ ]  Factory recommendation menghasilkan seluruh field wajib.
- [ ]  Snapshot Passport tidak kehilangan judul.
- [ ]  Tidak ada stop tanpa ID.
- [ ]  Semua province ID valid.
- [ ]  Tidak ada properti consumer yang tidak ada pada tipe.

### Acceptance criteria

- `npm run typecheck` lulus tanpa error.
- Tidak ada `as any` baru.
- Semua 10 preset lolos contract validator.
- Passport test 69 assertion tetap lulus.

### Rollback point

Commit terpisah: `fix(route): unify canonical route contracts`.

---

## Fase 2 — Canonical Province ID dan Migrasi Data

### Akar masalah

Sebagian itinerary masih memakai kode numerik seperti `"33"` dan `"34"`, sementara sistem utama memakai slug seperti `jawa-tengah` dan `di-yogyakarta`.

### Solusi akar masalah

- [ ]  Gunakan `ProvinceId` sebagai branded/union type dari registry `provinceIds.ts`.
- [ ]  Ganti semua ID numerik pada itinerary dengan slug canonical.
- [ ]  Tambahkan validator yang menolak numeric ID saat development dan CI.
- [ ]  Pertahankan migrator numeric → slug hanya untuk data `localStorage` lama.
- [ ]  Larang penulisan data runtime baru menggunakan numeric ID.
- [ ]  Validasi asset directory berdasarkan slug canonical.

### File utama

- `src/data/provinces/provinceIds.ts`
- `src/data/routes/presetItineraries.ts`
- `src/lib/passport/transitions.ts`
- `scripts/test-passport-logic.ts`
- `scripts/validate-route-contracts.ts`

### Test wajib

- [ ]  Seluruh `recommendation.provinceIds` valid.
- [ ]  Seluruh `stop.provinceId` valid.
- [ ]  Seluruh `itinerary.days[].provinceIds` valid.
- [ ]  Numeric ID hanya diterima oleh migration input, tidak oleh state baru.

### Acceptance criteria

- Tidak ada numeric province ID di `src/data/routes`.
- Validator gagal bila numeric ID ditambahkan kembali.
- Data Passport lama tetap berhasil dimigrasikan.

---

## Fase 3 — Registry Itinerary yang Benar untuk Semua Preset

<aside>
🧭

Rute aktif, itinerary, peta, readiness, dan Passport harus memiliki `routeId` dan version yang sama. Jika tidak sama, section lanjutan wajib berhenti dan menampilkan status partial—bukan fallback Jawa.

</aside>

### Akar masalah

Seluruh recommendation saat ini diselesaikan menggunakan `FALLBACK_ITINERARY_JAWA_5_HARI`. Dari 10 preset, hanya satu yang mempunyai itinerary lengkap.

### Arsitektur target

```tsx
export const ITINERARIES_BY_ROUTE_ID: Record<RouteId, RouteItinerary> = {
  "jawa-budaya-kuliner-5": jawaBudayaKuliner5,
  "jawa-bali-heritage-7": jawaBaliHeritage7,
  "maluku-spice-route-5": malukuSpiceRoute5,
  "sumatra-heritage-7": sumatraHeritage7,
  "kalimantan-nature-future-5": kalimantanNatureFuture5,
  "sulawesi-culture-nature-7": sulawesiCultureNature7,
  "papua-wonder-7": papuaWonder7,
  "bali-nusa-tenggara-5": baliNusaTenggara5,
  "yogyakarta-cultural-escape-3": yogyakartaCulturalEscape3,
  "bali-slow-journey-3": baliSlowJourney3
};
```

### Pemecahan file yang direkomendasikan

- `src/data/routes/itineraries/jawa-budaya-kuliner-5.ts`
- Satu file per route lainnya.
- `src/data/routes/itineraries/index.ts` sebagai registry.

### Resolver baru

`resolveRouteItinerary(result)` harus:

1. Mengambil itinerary berdasarkan `result.id`.
2. Memastikan `itinerary.routeId === result.id`.
3. Memastikan durasi sesuai.
4. Memastikan provinsi itinerary merupakan bagian dari recommendation.
5. Memastikan day number kontinu dari 1 sampai durasi.
6. Memastikan `stopId` dan transfer reference valid.
7. Mengembalikan structured result:

```tsx
type ItineraryResolution =
  | { status: "ready"; itinerary: RouteItinerary }
  | { status: "partial"; itinerary: null; reason: string }
  | { status: "invalid"; itinerary: null; errors: string[] };
```

### Aturan fallback

- Fallback hanya boleh digunakan untuk route ID yang sama.
- Tidak boleh fallback lintas region.
- Tidak boleh mengubah Papua menjadi Jawa.
- Jika itinerary belum ada, tampilkan status “Itinerary sedang dilengkapi” dan sembunyikan section yang bergantung padanya.

### Konten minimum setiap itinerary

- Route ID dan version.
- 3/5/7 hari sesuai preset.
- Day ID stabil.
- Stop ID stabil.
- Province ID canonical.
- Aktivitas utama.
- Rest/flex window.
- Transfer segment yang realistis.
- Culinary moment.
- Confidence dan validation status.
- Updated date dan source references.

### Test wajib per 10 preset

- [ ]  Route ID cocok.
- [ ]  Durasi cocok.
- [ ]  Jumlah hari cocok.
- [ ]  Day number kontinu.
- [ ]  Semua stop valid.
- [ ]  Semua transfer mengacu pada stop yang tersedia.
- [ ]  Semua provinsi cocok dengan recommendation.
- [ ]  Tidak ada itinerary Jawa untuk route non-Jawa.

### Acceptance criteria

- Seluruh 10 preset memiliki itinerary sendiri.
- Consistency validator lulus 10/10.
- Route Map menampilkan stop yang sama dengan itinerary.

---

## Fase 4 — Perbaiki Mesin Recommendation agar Tidak Menipu

### Akar masalah

Mesin disebut dinamis, tetapi sebenarnya memilih preset terdekat dan mengubah durasi stop. Adaptasi durasi saat ini dapat memperpanjang stop terakhir tanpa menyusun aktivitas tambahan.

### Solusi efektif jangka pendek

- [ ]  Ganti istilah internal/UI dari “dynamic generated route” menjadi “personalized preset recommendation” selama composer dinamis belum tersedia.
- [ ]  Pisahkan `matchType`: `exact-preset`, `adapted-preset`, `fallback-preset`.
- [ ]  Jangan memperpanjang hari hanya dengan menaikkan `dayEnd`.
- [ ]  Buat adaptation policy per preset untuk durasi 3, 5, dan 7 hari.
- [ ]  Jika kombinasi durasi tidak didukung, tampilkan alternatif yang tersedia secara jujur.
- [ ]  Region tetap menjadi hard constraint. Region lain tidak boleh dipilih diam-diam.

### Solusi jangka menengah: composer berbasis aturan

Bangun pipeline:

```
Preferences → Candidate provinces → Candidate stops → Constraint validation → Stop ordering → Day allocation → Transfer validation → Readiness → Result
```

Constraint minimum:

- Region.
- Durasi.
- Maksimal aktivitas per pace.
- Transfer antarkota/pulau.
- Budget compatibility.
- Rest window.
- Minat utama.
- Tidak ada provinsi duplikat yang tidak disengaja.

### Acceptance criteria

- Label UI sesuai kemampuan sebenarnya.
- Tidak ada klaim itinerary “dibuat khusus” bila hanya preset.
- Setiap adaptation mempunyai aturan dan test eksplisit.

---

## Fase 5 — Sinkronisasi Section 4 sampai Section 8

### Akar masalah

Section sudah tersusun dalam pipeline UI, tetapi belum mempunyai shared resolved state yang menjamin semua section memakai entity/version yang sama.

### Solusi akar masalah

Pindahkan resolved state ke `RouteAtelier` atau hook `useActiveRouteWorkspace()`:

```tsx
interface ActiveRouteWorkspace {
  recommendation: RouteRecommendation | null;
  itinerary: RouteItinerary | null;
  mapModel: RouteMapModel | null;
  readiness: RouteReadinessDossier | null;
  status: "idle" | "resolving" | "ready" | "partial" | "error";
  errors: RouteWorkspaceError[];
}
```

### Aturan derivasi

- Recommendation berubah → invalidate itinerary, map, readiness, dan adjustment draft lama.
- Itinerary resolve sukses → baru bangun map dan readiness.
- Version mismatch → status error/partial, jangan render data lama.
- Save Passport hanya aktif jika snapshot valid.
- RANI adjustment hanya aktif jika recommendation dan itinerary ready.

### Hapus state coupling tersembunyi

- Jangan mengandalkan callback child untuk membentuk source of truth utama.
- Jangan menyimpan itinerary hanya di `DayByDayItinerarySection`.
- Komponen section harus menerima resolved data dan hanya bertugas merender/interaksi lokal.

### Acceptance criteria

- Semua section menunjukkan route ID yang sama.
- Mengganti preset menghapus data route sebelumnya sebelum route baru tampil.
- Tidak ada flash itinerary lama.
- Error pada itinerary tidak membuat peta menampilkan route lain.

---

## Fase 6 — Perbaiki Seluruh Anchor dan Internal Navigation

### Akar masalah

Link dan target memakai string berbeda: `#route-planner` vs `route-atelier`, `#inspirasi-rute` vs `preset-routes`, dan `route-map` vs `route-map-transport-summary`.

### Solusi akar masalah

Buat registry:

```tsx
export const ROUTE_SECTION_IDS = {
  planner: "route-atelier",
  presets: "preset-routes",
  result: "route-recommendation-result",
  itinerary: "day-by-day-itinerary",
  map: "route-map-transport-summary",
  readiness: "route-readiness",
  saveRani: "route-save-rani-section"
} as const;
```

Gunakan registry pada:

- `RoutesNavbar.tsx`
- `RoutesHeroSection.tsx`
- `RouteResultActions.tsx`
- `RouteMapTransportSection.tsx`
- Semua `getElementById()` dan href internal.

### Tambahkan helper

```tsx
export function getRouteSectionHref(key: keyof typeof ROUTE_SECTION_IDS) {
  return `#${ROUTE_SECTION_IDS[key]}`;
}
```

### Test wajib

- Setiap href hash memiliki elemen target.
- Tidak ada duplicate ID.
- Focus diarahkan ke heading target setelah scroll.
- Reduced motion memakai behavior `auto`.

### Acceptance criteria

Semua CTA navbar, hero, result, itinerary, map, dan save berpindah ke section yang benar di desktop maupun mobile.

---

## Fase 7 — Integrasi Homepage, Explore, Atlas, Route, dan Passport

### 7A. Homepage → Nusa Route

- [ ]  Pertahankan `/routes` sebagai route canonical.
- [ ]  Tambahkan `source=home-feature` pada CTA Homepage.
- [ ]  Pastikan source tampil pada analytics dan tidak mengubah form tanpa data.

Contoh:

```
/routes?source=home-feature
```

### 7B. Explore Journey → Nusa Route

#### Akar masalah

Explore hanya mengirim `journeyId`, sehingga form tidak terisi walaupun UI mengatakan kerangka perjalanan sudah disusun.

#### Solusi

Buat `mapJourneyToPlannerValues(journey)` yang menghasilkan:

- Region.
- Durasi.
- Interests.
- Pace.
- Budget jika tersedia.
- Source `recommended-journey`.

URL target:

```
/routes?source=recommended-journey&journeyId=...&region=...&duration=...&interests=...
```

Jika mapping tidak lengkap, UI harus mengatakan “Journey digunakan sebagai konteks” dan tidak mengklaim form sudah lengkap.

### 7C. Nusa Route → Atlas

- [ ]  Setiap stop mempunyai CTA “Buka Atlas Provinsi”.
- [ ]  Sebelum membuka Atlas, panggil `startProvince()` atau `planProvince()` sesuai tindakan pengguna.
- [ ]  Bawa `routeId`, `day`, dan `returnTo` pada query.
- [ ]  Atlas menyediakan CTA kembali ke route aktif.
- [ ]  Jangan kehilangan draft planner.

Contoh:

```
/provinsi/bali?from=route&routeId=bali-slow-journey-3&day=2
```

### 7D. Nusa Route → Passport

#### Akar masalah

Tombol “Buka Passport” menuju `/passport`, padahal Passport berada di `/explore#passport-progress`.

#### Solusi jangka pendek

Ganti link menjadi:

```
/explore#passport-progress
```

Gunakan `APP_ROUTES.passportSection`, jangan hard-code.

#### Solusi jangka panjang

Buat halaman `/passport` hanya jika memang akan menjadi feature mandiri. Sampai halaman tersedia, `ROUTE_AVAILABILITY["/passport"]` tetap false dan tidak boleh digunakan oleh komponen.

### 7E. RANI Navigation

Hapus redirect `/?rani=true&routeId=...` kecuali Homepage benar-benar memiliki query consumer. Rekomendasi terbaik adalah mempertahankan RANI pada halaman Route dan membuka section RANI yang sama.

### Acceptance criteria

- Homepage membuka Route.
- Explore mem-prefill Route dengan data nyata.
- Route stop membuka Atlas yang benar.
- Kembali dari Atlas mempertahankan route context.
- Saved route terlihat di Passport section.
- Tidak ada link menuju route 404.

---

## Fase 8 — Implementasikan RANI Adjustment yang Benar

<aside>
🤖

Jangan menyebut perubahan “diterapkan” bila `proposedRoute` dan `proposedItinerary` masih sama dengan base state.

</aside>

### Akar masalah

`resolveRouteAdjustment()` menghasilkan draft no-op dan callback Apply hanya `console.log`.

### Solusi akar masalah

1. Buat pure functions:
    - `reduceRouteBudget()`
    - `slowRoutePace()`
    - `reduceRouteTransfers()`
2. Setiap fungsi menghasilkan recommendation dan itinerary baru dengan version baru.
3. Validasi hasil menggunakan validator yang sama dengan route normal.
4. Tampilkan diff nyata.
5. Apply mengganti active workspace state.
6. Simpan previous state untuk Undo.
7. Rebuild map dan readiness dari itinerary hasil adjustment.
8. Save Passport menyimpan version hasil adjustment.

### Definisi tiap intent

**REDUCE_BUDGET**

- Mengubah budget level.
- Memprioritaskan aktivitas gratis/biaya rendah.
- Mengganti transfer premium jika alternatif terverifikasi tersedia.
- Tidak mengubah provinsi tanpa konfirmasi.

**SLOWER_PACE**

- Menurunkan jumlah aktivitas per hari.
- Menambahkan rest/flex window.
- Menjaga durasi total.
- Menjelaskan highlight yang dihapus.

**REDUCE_TRANSFERS**

- Mengurangi jumlah stop/cluster.
- Mengalokasikan waktu tambahan pada stop utama.
- Menghapus transfer beserta aktivitas dependent.
- Memvalidasi ulang day continuity.

### State machine

```
idle → resolving → preview → validating → applied
                         ↘ invalid
applied → undo → idle/previous-version
```

### Failure handling

- Draft invalid tidak dapat diterapkan.
- Error harus terlihat, bukan hanya di console.
- Timeout harus dibersihkan saat unmount.
- Klik prompt ganda harus diblokir.
- Apply draft stale ditolak jika base version sudah berubah.

### Acceptance criteria

- Setiap intent menghasilkan diff nyata.
- Apply mengubah itinerary dan section turunannya.
- Undo memulihkan state sebelumnya.
- Tidak ada `console.log("Applying draft")` sebagai implementasi.

---

## Fase 9 — Readiness, Budget, Transport, dan Sumber

### Akar masalah

Readiness masih mempunyai version dummy dan sebagian informasi dapat tampil tanpa sumber/validasi memadai.

### Solusi

- [ ]  Version readiness diturunkan dari route dan itinerary version aktual.
- [ ]  Budget mempunyai range, currency, basis per orang/per kelompok, dan confidence.
- [ ]  Transport menyimpan mode, durasi, source, verifiedAt, dan confidence.
- [ ]  Informasi yang belum tersedia ditampilkan sebagai unavailable, bukan angka buatan.
- [ ]  Culinary dan etiquette diturunkan dari provinsi aktif.
- [ ]  Checklist key memasukkan route ID dan version agar progress route lama tidak tertukar.

### Data confidence

Gunakan status:

- `verified`
- `editorial`
- `estimated`
- `unavailable`

Jangan memakai istilah `verified` jika belum ada source dan waktu verifikasi.

### Acceptance criteria

- Tidak ada dummy version.
- Tidak ada biaya atau durasi palsu.
- Checklist terisolasi per route version.
- Readiness konsisten dengan provinsi itinerary.

---

## Fase 10 — Bersihkan Data Legacy dan Aset

### Akar masalah

`src/data/routes.json` tidak menjadi sumber utama dan `src/data/provinces.json` mereferensikan aset yang tidak tersedia.

### Langkah

- [ ]  Tentukan apakah `routes.json` masih digunakan.
- [ ]  Jika tidak digunakan, hapus setelah memastikan tidak ada import.
- [ ]  Jika digunakan, migrasikan isinya ke registry route canonical.
- [ ]  Hapus atau perbaiki referensi `/assets/placeholder-jogja.jpg`.
- [ ]  Hapus atau sediakan `/assets/audio/jogja-gamelan.mp3`.
- [ ]  Tambahkan script `validate-assets.ts` untuk static path dan generated path.
- [ ]  Dokumentasikan aset yang sengaja belum digunakan.

### Acceptance criteria

- Tidak ada sumber data route ganda.
- Tidak ada asset 404.
- Validator aset lulus.

---

## Fase 11 — Error Handling, Security, dan Resilience

### Langkah

- [ ]  Semua `fetch()` memeriksa `response.ok`.
- [ ]  SVG fetch mempunyai catch dan fallback UI.
- [ ]  `dangerouslySetInnerHTML` hanya menerima SVG asset internal yang sudah disanitasi/terkontrol.
- [ ]  Clipboard mempunyai fallback dan feedback accessible.
- [ ]  `localStorage` quota error ditangani konsisten.
- [ ]  Error boundary ditambahkan pada area Explore, Route Result, Map, dan Atlas.
- [ ]  Jangan menelan error kritis tanpa telemetry atau pesan pengguna.
- [ ]  Hilangkan full reload `window.location.href` bila Next Router cukup.
- [ ]  Tambahkan Content Security Policy sebelum production.

### Acceptance criteria

- Network/asset failure tidak membuat halaman blank.
- Error state dapat dipulihkan.
- Tidak ada HTML eksternal yang dimasukkan tanpa sanitasi.

---

## Fase 12 — Accessibility dan Responsive QA

### Checklist keyboard

- [ ]  Form dapat diselesaikan tanpa mouse.
- [ ]  Combobox mempunyai role, active descendant, Escape, Arrow Up/Down, dan Enter.
- [ ]  Focus pindah ke result setelah submit.
- [ ]  Focus tidak terperangkap pada sticky mobile navigation.
- [ ]  Modal/menu mengembalikan focus ke trigger.

### Reduced motion

Buat helper tunggal untuk scroll behavior. Semua `scrollIntoView({ behavior: "smooth" })` harus menghormati `prefers-reduced-motion`.

### Responsive viewport

Uji minimal:

- 390 × 844.
- 768 × 1024.
- 1024 × 768.
- 1440 × 900.

### State visual yang wajib diuji

- Empty planner.
- Validation error.
- Loading.
- Exact preset.
- Adapted preset.
- Partial itinerary.
- Saved Passport.
- RANI preview.
- RANI applied.
- Offline/error asset.

### Acceptance criteria

- Tidak ada overlap atau horizontal page scroll.
- Target interaktif minimal 44 × 44 px.
- Kontras WCAG AA.
- Semua state dapat dipahami tanpa hanya mengandalkan warna.

---

## Fase 13 — Test Pyramid dan CI Quality Gate

### Unit test

- Route schema dan sanitasi.
- Matcher scoring.
- Duration adaptation.
- Province ID normalization.
- Itinerary resolver.
- Route adjustment pure functions.
- Readiness resolver.
- Passport transitions.

### Contract test

Untuk setiap preset:

```
preset.id === recommendation.id
recommendation.id === itinerary.routeId
recommendation.version compatible dengan itinerary.routeVersion
recommendation.durationDays === itinerary.durationDays
itinerary province ⊆ recommendation province
map.routeId === recommendation.id
readiness.routeId === recommendation.id
savedRoute.routeId === recommendation.id
```

### Integration test

- Explore journey → Route query → form prefill.
- Route submit → result → itinerary → map → readiness.
- Save route → Explore Passport.
- Route stop → Atlas → kembali ke Route.
- RANI adjustment → Apply → Undo.

### E2E Playwright

1. Buka Homepage.
2. Klik Nusa Route Planner.
3. Isi region, interests, budget, pace, dan durasi.
4. Generate route.
5. Verifikasi title dan route ID.
6. Buka tiap hari itinerary.
7. Klik “Lihat di Peta”.
8. Verifikasi map selection.
9. Simpan ke Passport.
10. Buka Passport section.
11. Kembali ke Route.
12. Terapkan RANI adjustment.
13. Undo.
14. Buka Atlas dari stop.

### CI gate

Urutan wajib:

```
install clean
→ validate foundation
→ validate regions
→ validate atlas
→ validate route presets
→ validate route contracts
→ passport tests
→ route engine tests
→ route integration tests
→ lint
→ typecheck
→ build
→ E2E smoke
```

Tidak boleh deploy bila satu langkah gagal.

---

## Fase 14 — Performance dan Production Hardening

### Langkah

- [ ]  Ukur bundle size per route.
- [ ]  Lazy-load section di bawah fold yang berat.
- [ ]  Dynamic import untuk peta/RANI jika tepat.
- [ ]  Gunakan Next Image untuk gambar yang mendukung.
- [ ]  Optimalkan video dan sediakan poster.
- [ ]  Pastikan font tidak berlebihan; evaluasi enam family pada root layout.
- [ ]  Hindari semua halaman menjadi client component jika tidak diperlukan.
- [ ]  Tambahkan metadata khusus `/explore`, `/routes`, dan `/provinsi/[slug]`.
- [ ]  Tambahkan error monitoring dan Web Vitals.

### Target

- Tidak ada long task besar pada interaksi planner.
- Tidak ada layout shift signifikan.
- Route page tetap responsif pada perangkat menengah.

---

## Urutan Implementasi yang Aman

| Urutan | Fase | Alasan dependency |
| --- | --- | --- |
| 1 | Baseline | Menyediakan rollback dan bukti regresi |
| 2 | Kontrak tipe | Semua fitur lain bergantung pada schema |
| 3 | Canonical province ID | Mencegah data baru memperpanjang masalah lama |
| 4 | Itinerary registry | Map, readiness, Passport, dan RANI bergantung padanya |
| 5 | Shared route workspace | Menyinkronkan semua section |
| 6 | Navigation dan integrasi halaman | Baru aman setelah state canonical stabil |
| 7 | RANI adjustment | Memerlukan route dan itinerary yang valid |
| 8 | Readiness dan source confidence | Memerlukan hasil route final |
| 9 | QA, accessibility, performance | Final hardening setelah fungsi stabil |

## Definition of Done Global

- [ ]  Seluruh error TypeScript selesai tanpa bypass.
- [ ]  ESLint lulus.
- [ ]  Build production lulus.
- [ ]  10/10 preset mempunyai itinerary yang cocok.
- [ ]  Tidak ada fallback itinerary lintas region.
- [ ]  Semua province ID canonical.
- [ ]  Semua CTA dan anchor bekerja.
- [ ]  Tidak ada link menuju route yang tidak tersedia.
- [ ]  Explore benar-benar mem-prefill Route.
- [ ]  Route dapat membuka Atlas dan kembali dengan context utuh.
- [ ]  Saved route terlihat pada Passport.
- [ ]  RANI adjustment menghasilkan perubahan nyata, Apply, dan Undo.
- [ ]  Semua section memakai route ID/version yang sama.
- [ ]  Network dan asset error mempunyai fallback.
- [ ]  E2E desktop dan mobile lulus.
- [ ]  Tidak ada overlap, overflow, atau horizontal scroll.
- [ ]  Dokumentasi arsitektur dan migration diperbarui.

## Checklist Anti-Regresi per Pull Request

- [ ]  Perubahan hanya menyelesaikan satu kelompok akar masalah.
- [ ]  Tipe canonical tidak diduplikasi.
- [ ]  Tidak ada `as any` baru.
- [ ]  Tidak ada hard-coded route/anchor baru di luar registry.
- [ ]  Test baru gagal sebelum fix dan lulus setelah fix.
- [ ]  Passport migration tetap lulus.
- [ ]  Route lain tidak berubah tanpa sengaja.
- [ ]  Screenshot sebelum/sesudah ditinjau.
- [ ]  Build dan E2E lulus sebelum merge.
- [ ]  Rollback commit jelas.

<aside>
✅

**Hasil akhir yang diharapkan:** Nusa Route tidak sekadar terlihat terhubung, tetapi seluruh result, itinerary, peta, readiness, Passport, Atlas, dan RANI benar-benar bekerja di atas kontrak dan data yang sama, terverifikasi oleh test otomatis dan build production.

</aside>