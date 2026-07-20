# Planning Master — Halaman Nusa Passport /passport NUSANTARAYA

<aside>
🛂

**Source of truth untuk pembangunan halaman mandiri `/passport` NUSANTARAYA.** Halaman ini bukan Passport baru dari nol, melainkan perluasan terarah dari engine, context, hooks, aset, dan komponen Passport yang sudah berjalan di `/explore#passport-progress`. Fokus utamanya adalah memberi pengguna rumah permanen untuk melihat identitas explorer, rute tersimpan, progres provinsi, koleksi stempel, badge wilayah, dan ekspedisi berikutnya.

</aside>

---

## 1. Ringkasan Eksekutif

**Nusa Passport** adalah pusat memori perjalanan digital pengguna di NUSANTARAYA. Jika `/explore` menjawab *“Indonesia mana yang ingin saya jelajahi?”* dan `/routes` menjawab *“Bagaimana saya menyusun perjalanan?”*, maka `/passport` menjawab:

> “Apa yang sudah saya rencanakan, mulai, selesaikan, dan langkah apa yang paling relevan berikutnya?”
> 

Konsep pengalaman final:

```
Living Expedition Ledger × Digital Stamp Archive × Personal Journey Observatory
```

Tagline halaman:

```
Setiap Jelajah Meninggalkan Jejak.
```

Formula UX:

```
Kenali identitas explorer → lanjutkan rute tersimpan → pahami progres → telusuri koleksi → buka milestone → berangkat lagi
```

<aside>
🎯

**Keputusan utama:** `/passport` harus terasa seperti **arsip ekspedisi personal yang hidup**, bukan dashboard SaaS, bukan grid statistik generik, bukan replika paspor resmi, dan bukan salinan panjang Section Passport di `/explore`.

</aside>

### 1.1 Keputusan yang wajib dipertahankan

1. Reuse `AppProvider`, `usePassport`, `usePassportProgressSummary`, registry badge, asset map stempel, dan transition functions existing.
2. Reuse secara selektif `PassportManifesto`, `PassportHowItWorks`, `LivingStampCanvas`, `RegionalChapterIndex`, dan `NextExpeditionTicket`.
3. Jangan membuat store Passport kedua.
4. `passport.savedRoutes` adalah daftar ID canonical; `passport.savedRouteDetails` adalah sumber metadata card rute.
5. Saved Routes menjadi **utility utama** dan focal feature halaman.
6. Planned, started, dan completed tidak boleh dicampur.
7. Hanya completed yang dihitung sebagai stempel final dan progress `x/38`.
8. Semua mutasi harus idempotent dan tersimpan setelah refresh.
9. Halaman wajib tetap berguna saat Passport masih kosong.
10. Tidak ada login, leaderboard, streak, booking, transaksi, atau klaim perjalanan fisik.
11. Jangan mengubah kontrak Route/Passport hanya untuk kebutuhan presentasi UI.
12. CTA hanya menuju route yang benar-benar tersedia.
13. Bilingual boleh bertahap, tetapi struktur string harus siap ID/EN.
14. Halaman harus offline-friendly dan tidak membutuhkan API.
15. **Dilarang menggunakan warna navy di seluruh frontend halaman.**

---

## 2. Baseline Repository dan Aset yang Sudah Tersedia

### 2.1 Fondasi yang wajib dipakai ulang

```
src/context/app-context.tsx
src/lib/passport/transitions.ts
src/lib/passport/badges.ts
src/lib/passport/assetMap.ts
src/hooks/usePassportProgressSummary.ts
src/hooks/useRegionalPassportProgress.ts
src/components/explore/passport-progress/
src/components/routes/route-save-rani/PassportSaveLane.tsx
src/lib/routes/save-rani/buildRouteSaveSnapshot.ts
src/lib/routes.ts
```

### 2.2 Komponen existing yang dapat direuse

- `PassportManifesto` → adaptasi menjadi intro/identity narrative.
- `PassportHowItWorks` → ubah menjadi toggle bantuan, bukan section panjang di atas fold.
- `LivingStampCanvas` → reuse untuk koleksi stempel editorial.
- `RegionalChapterIndex` → reuse untuk progress dan badge tujuh wilayah.
- `NextExpeditionTicket` → reuse sebagai recommendation closure.
- `PassportProgressSection` → jangan ditanam utuh; pecah dan compose ulang agar `/passport` memiliki hierarki berbeda.

### 2.3 State existing yang harus dihormati

```tsx
passport.stamps
passport.startedProvinces
passport.plannedProvinces
passport.badges
passport.achievements
passport.xp
passport.level
passport.savedRoutes
passport.savedRouteDetails
```

### 2.4 Mutations existing

```tsx
planProvince()
startProvince()
completeProvince()
completeQuiz()
completeChapter()
saveRoute()
saveRouteWithDetails()
removeRouteWithDetails()
resetPassport()
```

<aside>
⚠️

Audit nama field dan interface aktual sebelum coding. Planning ini tidak mengizinkan pembuatan properti bayangan, cast `any`, atau duplikasi source of truth hanya untuk mempermudah UI.

</aside>

---

## 3. Tujuan Produk

### 3.1 Tujuan pengguna

Pengguna dapat:

1. Melihat identitas dan level explorer.
2. Mengetahui jumlah stempel, XP, progress nasional, dan achievement terbaru.
3. Melanjutkan rute yang sudah disimpan.
4. Menghapus saved route dengan aman.
5. Membedakan provinsi planned, started, dan completed.
6. Membuka Atlas provinsi dari daftar progres.
7. Menelusuri koleksi stempel tanpa memuat semua detail di awal.
8. Memahami badge yang terbuka dan syarat badge terkunci.
9. Mengetahui next milestone yang deterministik.
10. Kembali ke Explore atau membuat rute baru.
11. Memahami bahwa data tersimpan lokal di browser.
12. Memulihkan arah saat tidak ada data atau data parsial.

### 3.2 Tujuan emosional

```
Perjalanan digital saya terasa memiliki sejarah.
Rute yang saya simpan tidak hilang setelah meninggalkan halaman.
Saya dapat melihat pertumbuhan tanpa merasa dikejar angka.
Setiap stempel dan badge mempunyai alasan yang dapat dipahami.
Saya selalu tahu harus melanjutkan ke mana.
```

### 3.3 Tujuan demo lomba

- Membuktikan Homepage, Explore, Atlas, Route, dan Passport memakai state yang sama.
- Memperlihatkan persistence tanpa login.
- Menunjukkan rute tersimpan sebagai fungsi nyata, bukan CTA dekoratif.
- Menutup demo dengan visual koleksi dan milestone yang kuat.
- Menunjukkan gamifikasi yang explainable, tidak manipulatif.

---

## 4. Scope

### 4.1 Termasuk dalam MVP

- Route `/passport`.
- Metadata khusus halaman.
- Passport Header/Explorer Identity.
- Saved Routes Archive.
- Province Progress Board.
- Stamp Collection.
- Regional Badges.
- Next Expedition.
- CTA ke Explore, Routes, dan Atlas.
- Empty, loading, hydrated, partial, corrupted, asset-failure, dan maximum-saved states.
- Remove route dengan confirmation dan Undo bila aman.
- Persistence, migration compatibility, accessibility, responsive, dan tests.

### 4.2 Tidak termasuk

- Login/akun.
- Sinkronisasi cloud.
- Leaderboard.
- Streak harian.
- Social feed.
- Marketplace atau booking.
- Lokasi fisik real-time.
- Sertifikat kompleks.
- Export/import pada MVP deadline.
- WebGL passport book.
- Full-screen confetti.
- Pembuatan ulang store Passport.

---

## 5. Creative Direction — Tanpa Navy

### 5.1 Nama arah visual

```
Archipelago Expedition Ledger
```

Perpaduan visual:

```
Jurnal ekspedisi premium × arsip perangko × observatorium perjalanan × editorial museum modern
```

Halaman harus selaras dengan keunikan `/explore` dan kedalaman `/routes`, tetapi memiliki identitas sendiri:

- Explore terasa seperti observatorium peta.
- Routes terasa seperti atelier perjalanan.
- Passport harus terasa seperti **ruang arsip ekspedisi personal**.

### 5.2 Larangan warna mutlak

Jangan gunakan:

```
#0D1B2A
#10233A
navy
midnight blue
blue-black
navy gradient
navy card
navy text
```

Jangan mengganti navy dengan biru yang hanya sedikit lebih terang. Deep blue tetap tidak boleh menjadi dasar surface, text, background, header, footer, atau CTA.

### 5.3 Palet final yang direkomendasikan

```
Parchment Canvas       #F3EBDD
Warm Ivory             #FFF9EE
Bone Surface           #FFFCF6
Espresso Ink           #2B211B
Dark Cocoa             #3A281F
Terracotta Heritage    #B85C38
Saffron Gold           #C9973A
Antique Brass          #A77B32
Burgundy Stamp         #7A302B
Moss Explorer          #65705C
Deep Teal Accent       #1F6B62
Warm Border            #DCCDB8
Muted Clay             #786B60
Success Forest         #3F6B4F
Danger Brick           #9B3D32
```

### 5.4 Dominasi warna

- 55% parchment/ivory/bone.
- 20% espresso/dark cocoa untuk text dan structural rail.
- 10% terracotta/burgundy untuk stamp dan primary accents.
- 8% saffron/brass untuk foil dan milestones.
- 7% moss/teal/region accents.

### 5.5 Aturan penggunaan

- Teks utama memakai Espresso Ink, bukan biru gelap.
- CTA utama memakai Terracotta atau Dark Cocoa.
- Gold hanya untuk highlight, foil, separator, dan achievement.
- Region colors hanya sebagai hairline, tab mark, progress segment, atau badge rim.
- Surface gelap maksimal 15–20% area viewport agar halaman tetap hangat.
- Completed tidak boleh dibedakan hanya dengan warna; selalu sertakan label/icon.

### 5.6 Tipografi

- Display: Playfair Display untuk judul dan count besar.
- UI/body: Inter.
- Accent editorial: Philosopher hanya jika sudah dipakai konsisten; jangan menambah font baru.
- Heading desktop 56–80px.
- Heading mobile 38–46px.
- Body 15–17px, line-height 1.55–1.7.
- Metadata 11–13px dengan tracking terkontrol.

### 5.7 Motif dan tekstur

- Paper grain lokal yang sangat halus.
- Garis koordinat/route sebagai decorative thread.
- Perforated stamp edge.
- Emboss/foil tipis.
- Motif Nusantara abstrak global, bukan mengambil motif sakral sebagai dekorasi generik.
- Hindari glassmorphism generik berlebihan.

---

## 6. Arsitektur Informasi Halaman

```
/passport
├── 01 Expedition Masthead + Passport Header
├── 02 Saved Routes Archive — focal utility
├── 03 Province Progress Ledger
├── 04 Living Stamp Collection
├── 05 Regional Badge Constellation
├── 06 Next Expedition Ticket
└── 07 Departure Dock + Footer
```

### 6.1 Urutan UX

```
Identitas → sesuatu yang dapat dilanjutkan → progres → koleksi → pencapaian → rekomendasi → keberangkatan baru
```

Saved Routes ditempatkan sebelum koleksi stempel karena pengguna yang kembali biasanya ingin melanjutkan pekerjaan, bukan hanya melihat dekorasi progres.

---

## 7. Section 01 — Expedition Masthead / Passport Header

### 7.1 Tujuan

Memberi identitas personal dan gambaran progress dalam 5–8 detik pertama.

### 7.2 Konten wajib

- Eyebrow `Nusa Passport`.
- Heading `Setiap Jelajah Meninggalkan Jejak.`
- Subheading singkat.
- Nama current level.
- Jumlah stempel.
- XP.
- Progress `x/38`.
- Progress ke level berikutnya.
- Latest badge/achievement.
- Storage disclosure.
- CTA `Lanjutkan Jelajah`.

### 7.3 Konsep layout desktop

```
┌───────────────────────────────────────────────────────────────────────────┐
│ BREADCRUMB / NUSA PASSPORT                    [Local · Tersimpan otomatis] │
├───────────────────────────────────┬───────────────────────────────────────┤
│ EXPEDITION IDENTITY               │ PROGRESS INSTRUMENT                   │
│ Level: Petualang Nusantara        │           12 / 38                     │
│ Short editorial statement        │ segmented arc / route line            │
│ [Latest Badge] [XP 480]           │ 4 lagi ke level berikutnya            │
│ [Lanjutkan Jelajah]               │ Planned · Started · Completed         │
└───────────────────────────────────┴───────────────────────────────────────┘
```

### 7.4 Visual unik

Bukan passport cover navy. Gunakan:

- Parchment identity folio.
- Dark Cocoa binding strip.
- Terracotta stamp seal.
- Brass number plate untuk `12/38`.
- Route line tipis yang menghubungkan planned → started → completed.
- Latest badge muncul seperti pin enamel pada folio.

### 7.5 Mobile

- Identity dan progress ditumpuk.
- `x/38` terlihat sebelum fold kedua.
- Progress bar horizontal lebih diutamakan daripada ring.
- CTA full width.
- Metadata menjadi 2×2 mini ledger, bukan empat card terpisah.

### 7.6 States

**Empty**

```
Level: Penjelajah Baru
0 / 38
Passport-mu siap menerima jejak pertama.
```

**Progress**

```
12 / 38 provinsi selesai
4 stempel lagi menuju Pengembara Sejati
```

**Complete**

```
38 / 38
Jejak Nusantara lengkap—koleksi tetap dapat kamu telusuri kembali.
```

---

## 8. Section 02 — Saved Routes Archive

<aside>
🧭

**Ini adalah fitur terpenting halaman `/passport`.** Section harus membuat aksi “Simpan ke Passport” dari `/routes` terasa nyata, dapat ditemukan kembali, dan dapat dilanjutkan.

</aside>

### 8.1 Source of truth

```tsx
passport.savedRoutes
passport.savedRouteDetails
```

### 8.2 Aturan resolusi

1. Iterasi berdasarkan `savedRoutes` agar urutan canonical dan legacy tetap dihormati.
2. Resolve detail dari `savedRouteDetails[routeId]`.
3. Jika detail hilang tetapi ID valid, resolve ringkasan dari registry preset bila tersedia.
4. Jika tetap tidak ada, tampilkan recovery card jujur—jangan membuat metadata palsu.
5. Jangan menampilkan route ID mentah sebagai judul kecuali fallback terakhir.
6. Remove harus menggunakan `removeRouteWithDetails(routeId)`.
7. Maksimum saved route mengikuti constant existing.

### 8.3 Saved Route View Model

```tsx
export type SavedRoutePassportView = {
  routeId: string;
  title: string;
  regionLabel: string;
  durationDays: number | null;
  provinceIds: string[];
  provinceLabels: string[];
  version: string | null;
  savedAt: string | null;
  status: "ready" | "legacy" | "partial" | "unavailable";
  resumeHref: string;
  coverAsset?: string;
};
```

### 8.4 Card content wajib

- Judul rute.
- Region/wilayah.
- Durasi.
- Daftar atau count provinsi.
- Versi.
- Waktu disimpan.
- Status data.
- CTA `Lanjutkan Rute`.
- Action `Hapus`.
- Optional `Buka Provinsi Pertama`.

### 8.5 Layout desktop — Route Archive Rail

Gunakan satu featured route besar dan sisanya sebagai expedition files:

```
┌───────────────────────────────────────┬───────────────────────────────────┐
│ LAST ACTIVE / FEATURED ROUTE          │ SAVED EXPEDITION FILES            │
│ Large map-thread visual               │ Route 02                          │
│ Title, duration, provinces            │ Route 03                          │
│ [Lanjutkan Rute]                      │ Route 04                          │
│ [Buka Atlas Stop]                     │ scroll/list, bukan card grid SaaS │
└───────────────────────────────────────┴───────────────────────────────────┘
```

### 8.6 Visual route card

- Bentuk expedition folder/dossier.
- Sisi kiri berupa numbered tab.
- Garis itinerary mini, bukan map palsu.
- Province chips menggunakan warm neutral + region hairline.
- Saved date seperti stamp metadata.
- Hover hanya lift 2–4px dan reveal route thread.
- Jangan gunakan kartu seragam 3 kolom dengan gradient acak.

### 8.7 Resume URL

Preferred:

```
/routes?preset=<routeId>&source=passport
```

Jika snapshot memiliki context/version yang memerlukan query lain, gunakan helper canonical. Jangan membangun URL dengan string tersebar di komponen.

### 8.8 Remove flow

```
Klik Hapus
→ dialog kecil menjelaskan hanya rute tersimpan yang dihapus
→ provinsi planned tidak otomatis dihapus jika masih direferensikan rute lain
→ konfirmasi
→ removeRouteWithDetails(routeId)
→ card collapse
→ toast + Undo jika transition aman tersedia
```

CTA berbahaya tidak boleh menjadi tombol utama.

### 8.9 Empty state

```
Belum ada rute yang disimpan.
Susun perjalanan berdasarkan wilayah, durasi, minat, dan ritmemu—lalu simpan hasilnya di Passport.
[Buat Rute Pertama] → /routes?source=passport-empty
```

### 8.10 Partial/legacy state

```
Rute ini tersimpan dari versi Passport sebelumnya. Detail lengkap belum tersedia, tetapi kamu tetap dapat membuka Route Planner untuk menyusunnya kembali.
```

### 8.11 Mobile

- Featured route menjadi dossier full width.
- Route lain berupa accordion/list.
- Resume CTA selalu terlihat.
- Remove berada di overflow menu atau secondary danger action.
- Tidak ada horizontal carousel untuk informasi penting.

---

## 9. Section 03 — Province Progress Ledger

### 9.1 Tujuan

Membedakan tiga status perjalanan secara jelas:

- Direncanakan.
- Sedang dijelajahi.
- Selesai.

### 9.2 Sumber

```tsx
passport.plannedProvinces
passport.startedProvinces
passport.stamps
```

Gunakan selector existing agar status saling eksklusif dengan prioritas:

```
completed > started > planned
```

### 9.3 Layout unik — Three-Chapter Ledger

Bukan tiga stat cards. Gunakan tiga chapter vertikal yang saling terhubung route line:

```
I. DIRANCANG       → province entries dari saved routes
II. DITELUSURI     → Atlas/chapter telah dimulai
III. DICAP         → eksplorasi selesai dan stempel diperoleh
```

Desktop:

- Tiga chapter dalam editorial spread 3 kolom.
- Kolom completed sedikit lebih lebar.
- Setiap province row memiliki status, region mark, dan CTA Atlas.

Tablet:

- Planned + Started dua kolom, Completed full width.

Mobile:

- Segmented tabs dengan count.
- Hanya satu panel aktif, tanpa nested scroll.

### 9.4 Province item

- Nama provinsi.
- Region.
- Status label.
- Updated/completed date bila tersedia.
- Source singkat bila aman.
- CTA `Buka Atlas`.
- Optional route reference untuk planned.

### 9.5 Empty state per chapter

- Planned: `Belum ada provinsi dalam rencana perjalanan.`
- Started: `Belum ada Atlas yang sedang kamu lanjutkan.`
- Completed: `Stempel pertama masih menunggu.`

### 9.6 Filter

MVP cukup:

- Semua wilayah.
- Region.
- Search provinsi jika daftar panjang.

Jangan menambahkan sort/filter kompleks yang tidak dibutuhkan.

---

## 10. Section 04 — Living Stamp Collection

### 10.1 Reuse

Gunakan `LivingStampCanvas`, tetapi tambah mode:

```tsx
variant?: "explore-preview" | "passport-full"
```

Jangan duplikasi komponen.

### 10.2 Full-page behavior

- Preview 8–12 stempel secara visual.
- Toggle `Lihat seluruh koleksi` membuka grid/ledger 38 slot.
- Locked slot tetap menampilkan nama provinsi dan region secara accessible.
- Completed stamp dapat dibuka untuk menuju Atlas.
- Planned/started tidak boleh terlihat seperti stamp final.

### 10.3 Grid 38 slot

- Dikelompokkan per tujuh region.
- Gunakan perforated stamp frames.
- Locked memakai line-art/initials, bukan blur gambar.
- Completed memiliki tanggal/label.
- Tidak ada random rotation berlebihan yang menurunkan readability.

### 10.4 Performance

- Initial load hanya current level + visible stamps.
- Lazy-load full grid setelah intent.
- Gunakan dimensions eksplisit.
- Asset failure fallback ke CSS seal + province initials.

---

## 11. Section 05 — Regional Badge Constellation

### 11.1 Reuse

Gunakan registry badge existing dan logic `evaluateBadges`. `RegionalChapterIndex` dapat menjadi fondasi, tetapi halaman penuh menambahkan requirement dan state detail.

### 11.2 Konsep visual

```
Seven Regional Seals arranged as an archipelago constellation
```

- Tujuh seal dihubungkan garis perjalanan tipis.
- Completed seal tampil embossed.
- Locked seal tampil outline dengan requirement.
- Indonesia Complete Explorer berada sebagai central/special seal.
- Bukan game inventory gelap.

### 11.3 Konten badge

- Label.
- Region.
- Progress `x/total`.
- Requirement.
- State locked/unlocked.
- Unlock date bila ada.
- CTA ke region di Explore.

### 11.4 Interaksi

Klik badge:

- membuka popover/dialog detail,
- menjelaskan syarat,
- menawarkan `Lihat Wilayah di Peta`,
- tidak memberi reward baru.

### 11.5 Mobile

Gunakan list seal + progress, bukan constellation absolut yang rapuh.

---

## 12. Section 06 — Next Expedition

### 12.1 Reuse

Gunakan `NextExpeditionTicket` dan `usePassportProgressSummary().nextMilestone`.

### 12.2 Priority engine

```
1. Started province belum completed
2. Planned province dari saved route
3. Sisa terakhir untuk regional badge
4. Province yang dipilih sebelumnya
5. Province baru pada region aktif
6. Flagship dengan Atlas lengkap
7. Editorial fallback
```

### 12.3 Ticket content

- Province tujuan.
- Region.
- Reason yang explainable.
- Target achievement.
- CTA `Buka Atlas`.
- Secondary `Lihat di Peta`.
- Optional `Buat Rute ke Sini`.

### 12.4 Complete state

Jika 38/38:

```
Seluruh provinsi telah tercatat. Telusuri kembali koleksi, lanjutkan rute tersimpan, atau buat ekspedisi tematik baru.
```

---

## 13. Section 07 — Departure Dock

### 13.1 Tujuan

Menutup halaman dengan tiga jalur yang jelas, bukan footer CTA generik.

### 13.2 CTA

1. **Lanjut Jelajah** → `/explore?source=passport`.
2. **Buat Rute Baru** → `/routes?source=passport`.
3. **Buka Atlas Rekomendasi** → `/provinsi/[slug]` berdasarkan next milestone.

### 13.3 Layout

Desktop berupa tiga departure gates dengan satu primary gate dinamis. Mobile berupa stacked action list.

### 13.4 Copy

```
Passport menyimpan jejak. NUSANTARAYA membantumu menentukan keberangkatan berikutnya.
```

---

## 14. Navigasi dan Routing

### 14.1 Route

Tambahkan:

```
src/app/passport/page.tsx
src/app/passport/loading.tsx
src/app/passport/error.tsx atau recovery boundary lokal
```

### 14.2 Registry

Setelah halaman benar-benar siap:

```tsx
APP_ROUTES.passport = "/passport"
ROUTE_AVAILABILITY["/passport"] = true
```

Jangan mengaktifkan availability sebelum page dan tests siap.

### 14.3 Link migration

Ubah link `Buka Passport` yang tepat dari:

```
/explore#passport-progress
```

menjadi:

```
/passport
```

Tetap pertahankan section preview di Explore dan CTA `Buka Passport Lengkap`.

### 14.4 Sitemap dan metadata

Tambahkan `/passport` ke sitemap.

Metadata:

```
Title: Nusa Passport — Jejak Perjalanan Nusantaramu
Description: Lihat rute tersimpan, progres 38 provinsi, koleksi stempel, badge wilayah, dan ekspedisi berikutnya di NUSANTARAYA.
```

Jangan memasukkan progress personal ke metadata atau structured data publik.

### 14.5 Return context

Dukung query ringan:

```
/passport?source=route
/passport?source=explore
/passport?tab=routes
/passport?tab=stamps
```

Jangan membuat URL menyimpan seluruh Passport state.

---

## 15. Component Architecture

```
src/app/passport/
  page.tsx
  loading.tsx

src/components/passport/
  PassportPageShell.tsx
  PassportPageNavbar.tsx
  PassportMasthead.tsx
  ExplorerIdentityFolio.tsx
  PassportProgressInstrument.tsx
  PassportLatestBadge.tsx
  SavedRoutesArchive.tsx
  SavedRouteFeaturedDossier.tsx
  SavedRouteFileRow.tsx
  SavedRoutesEmptyState.tsx
  RemoveSavedRouteDialog.tsx
  ProvinceProgressLedger.tsx
  ProvinceProgressChapter.tsx
  ProvinceProgressRow.tsx
  StampCollectionSection.tsx
  RegionalBadgeConstellation.tsx
  RegionalBadgeSeal.tsx
  PassportNextExpedition.tsx
  PassportDepartureDock.tsx
  PassportHydrationSkeleton.tsx
  PassportRecoveryState.tsx
  index.ts

src/hooks/
  usePassportSavedRoutes.ts
  usePassportProvinceLedger.ts
  usePassportPageViewModel.ts

src/lib/passport/
  buildSavedRouteView.ts
  buildProvinceLedger.ts
```

### 15.1 Aturan arsitektur

- Page shell compose sections saja.
- Selector/adapter berada di hooks/lib, bukan di JSX besar.
- Komponen presentational menerima view model.
- Mutations tetap melalui context/transitions existing.
- Jangan memindahkan seluruh page menjadi client component jika hanya beberapa bagian yang interaktif.
- Server page memegang metadata dan shell; client island memegang state personal.

---

## 16. Page View Model

```tsx
export type PassportPageViewModel = {
  hydrated: boolean;
  identity: {
    level: string;
    xp: number;
    completedCount: number;
    totalCount: 38;
    nationalPercent: number;
    nextLevel: string | null;
    stampsToNextLevel: number;
    latestAchievement: PassportAchievement | null;
  };
  savedRoutes: SavedRoutePassportView[];
  provinces: {
    planned: PassportProvinceView[];
    started: PassportProvinceView[];
    completed: PassportProvinceView[];
  };
  regionalProgress: RegionalProgressView[];
  nextMilestone: PassportNextMilestone | null;
};
```

### 16.1 Prinsip derivasi

- Count tidak disimpan ulang.
- Labels province di-resolve dari canonical province registry.
- Region di-resolve dari canonical region mapping.
- Route title/duration/version di-resolve dari snapshot atau registry.
- Invalid IDs difilter dan dilaporkan dalam development.
- Tidak ada random sorting saat render.

---

## 17. Hydration, Persistence, dan Recovery

### 17.1 Flow

```
Server shell
→ skeleton dengan tinggi stabil
→ AppProvider hydrate localStorage
→ normalize/migrate
→ derive page view model
→ render data personal
```

### 17.2 Rules

- Jangan baca localStorage saat SSR.
- Jangan flash `0/38` sebelum hydration selesai.
- Skeleton harus menyerupai masthead + route archive + progress ledger.
- Jangan memanggil state mutation hanya karena page dilihat.
- Refresh harus mempertahankan state.

### 17.3 Corrupted state

```
Sebagian jejak Passport tidak dapat dibaca.
Data yang masih valid tetap ditampilkan.
```

Actions:

- `Coba Muat Ulang`.
- `Lanjutkan lewat Explore`.
- Reset hanya melalui confirmation eksplisit dan tidak menjadi primary action.

### 17.4 Storage disclosure

```
Jejak Passport tersimpan secara lokal di browser ini. Tidak ada akun atau data perjalanan pribadi yang diperlukan.
```

---

## 18. Motion System

### 18.1 Prinsip

Motion harus terasa seperti membuka arsip perjalanan, bukan template landing page.

### 18.2 Entrance choreography

1. Parchment masthead fade 0 → 1, y 18 → 0.
2. Binding line draw 450–650ms.
3. Progress number crossfade setelah hydration.
4. Latest badge settle scale 0.96 → 1.
5. Saved route featured dossier slide 16px.
6. Route file rows stagger maksimal 40–60ms per item.
7. Sections berikutnya muncul saat mendekati viewport, once only.

### 18.3 Microinteractions

- Stamp hover: ink edge sharpen, scale ≤1.03.
- Saved route hover: tab bergeser 4px.
- Resume CTA: route line bergerak 6–10px.
- Badge unlock: emboss highlight 600ms.
- Remove: collapse 180–240ms setelah confirmation.
- Progress update: width 250–400ms, tidak animasi dari nol setiap reload.

### 18.4 Dilarang

- Parallax berat.
- Cursor-following glow.
- Blob gradient acak.
- Infinite floating cards.
- Auto-rotating carousel.
- Page flip library.
- Full-screen confetti.
- Animasi yang menunda CTA.

### 18.5 Reduced motion

- Semua transform besar dimatikan.
- Scroll menggunakan `auto`.
- Count update instan/crossfade ≤100ms.
- Stamp/badge celebration statis.

---

## 19. Responsive Blueprint

### Desktop ≥1280px

- Masthead 2 kolom.
- Saved Routes featured + archive list.
- Province ledger 3 chapter.
- Stamp canvas editorial.
- Badge constellation penuh.
- Next Expedition + Departure Dock lebar.

### Desktop 1024–1279px

- Masthead 55/45.
- Route archive 60/40.
- Province ledger 2+1.
- Badge grid 4+3 bila constellation terlalu rapat.

### Tablet 768–1023px

- Semua stage stacked.
- Featured route full width.
- Route list 2 kolom ringan atau list.
- Province progress tabs/2 kolom.
- Badge grid 2 kolom.

### Mobile 430–767px

- Padding 20–24px.
- Progress bar horizontal.
- Saved routes accordion/list.
- Province status segmented tabs.
- Stamp collection 2 kolom saat expanded.
- Badge list.
- CTA full width.

### Mobile ≤390px

- Count tidak boleh terpotong.
- Route title maksimal 3 baris.
- Metadata route menjadi stacked rows.
- Tidak ada horizontal page overflow.
- Region/badge label panjang harus wrap.
- Decorative texture dikurangi.

### Viewport QA

```
375×667
390×844
430×932
768×1024
1024×768
1280×800
1440×900
1920×1080
```

---

## 20. Accessibility

### 20.1 Semantik

- Satu H1 pada page masthead.
- H2 per section.
- Saved routes berupa list/article.
- Province progress memakai tabs semantic bila mobile tabs digunakan.
- Progress memakai `<progress>` atau `role="progressbar"` lengkap.
- Link untuk navigasi; button untuk mutasi.

### 20.2 Progress

```html
<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="38"
  aria-valuenow="12"
  aria-valuetext="12 dari 38 provinsi selesai"
/>
```

### 20.3 Keyboard dan focus

- Skip link ke Saved Routes dan Province Progress.
- Focus visible berkontras tinggi.
- Dialog remove memiliki focus trap dan focus return.
- Escape menutup dialog/popover.
- Accordion dapat dioperasikan Enter/Space.
- Setelah route dihapus, focus pindah ke item berikutnya atau heading section.

### 20.4 Screen reader

- Achievement baru diumumkan satu kali.
- Decorative foil, route thread, grain, dan constellation `aria-hidden`.
- Jangan membacakan 38 locked stamps sekaligus saat section masuk viewport.
- Alt text stamp menyebut provinsi dan status.

### 20.5 Kontras

- Espresso on ivory harus WCAG AA.
- Gold tidak menjadi body text kecil.
- Region color tidak menjadi satu-satunya status.
- Zoom 200% tidak memotong CTA atau dialog.
- Touch target minimal 44×44px.

---

## 21. Copywriting

### Masthead

**Eyebrow:** `Nusa Passport`

**Heading:** `Setiap Jelajah Meninggalkan Jejak.`

**Subheading:** `Lanjutkan rute yang tersimpan, lihat provinsi yang sedang kamu telusuri, dan buka pencapaian baru dari perjalanan digitalmu di Nusantara.`

### Saved Routes

**Heading:** `Rute yang Menunggu untuk Dilanjutkan`

**Supporting:** `Setiap rute tersimpan membawa preferensi, wilayah, dan jejak provinsi yang dapat kamu buka kembali.`

### Province Progress

**Heading:** `Tiga Tahap dalam Satu Perjalanan`

**Supporting:** `Rencana belum menjadi stempel. Stempel menandai eksplorasi yang benar-benar selesai.`

### Stamp Collection

**Heading:** `Koleksi Jejak Nusantara`

### Regional Badges

**Heading:** `Tujuh Wilayah, Tujuh Cerita Pencapaian`

### Next Expedition

**Heading:** `Keberangkatan Berikutnya Sudah Menunggu`

### Empty Saved Routes

```
Belum ada rute yang disimpan.
Mulai dari satu wilayah, pilih ritme perjalananmu, lalu simpan hasilnya ke Passport.
```

### Remove confirmation

```
Hapus rute dari Passport?
Rute tersimpan akan dihapus. Stempel provinsi yang sudah selesai tidak akan hilang.
```

### Storage note

```
Tersimpan di perangkat ini · Tanpa akun
```

---

## 22. Analytics Contract

Events:

```
passport_page_viewed
passport_saved_route_resumed
passport_saved_route_removed
passport_saved_route_remove_undone
passport_province_status_selected
passport_province_atlas_opened
passport_stamp_collection_expanded
passport_stamp_opened
passport_badge_inspected
passport_region_opened
passport_next_expedition_clicked
passport_explore_clicked
passport_new_route_clicked
passport_recovery_shown
passport_asset_failed
```

Payload minimal:

```tsx
type PassportPageAnalytics = {
  source?: "home" | "explore" | "route" | "atlas" | "direct";
  completedCount: number;
  plannedCount: number;
  startedCount: number;
  savedRouteCount: number;
  currentLevelId: string;
  actionTargetId?: string;
  viewport: "desktop" | "tablet" | "mobile";
};
```

Jangan kirim:

- raw localStorage,
- seluruh province history,
- itinerary penuh,
- data pribadi,
- event berulang setiap re-render.

---

## 23. Performance Budget

- Hydrated summary ideal <50ms.
- Interaction feedback <100ms.
- Tidak ada long task >200ms.
- No significant CLS.
- Above-fold Passport assets ideal <350KB.
- Full 38 stamp grid lazy-loaded.
- Saved routes maksimal 20; render tetap ringan.
- Gunakan memoized selectors.
- Gunakan `Set` untuk status lookup.
- Gunakan Next Image dan explicit dimensions.
- Jangan preload seluruh stamp/badge assets.
- Jangan menambah animation library baru.

---

## 24. Error dan Edge States

### Wajib diuji

1. Passport kosong total.
2. Hanya planned provinces.
3. Hanya started provinces.
4. 1 completed stamp.
5. 38 completed stamps.
6. Saved route tanpa detail.
7. Saved route ID unknown.
8. Maksimum 20 saved routes.
9. Corrupted localStorage.
10. Legacy snapshot.
11. Stamp asset gagal.
12. Badge asset gagal.
13. Route registry mismatch.
14. Next milestone null.
15. Remove gagal karena storage quota/error.
16. Dua tab browser mengubah state.

### Recovery rules

- Tampilkan data valid yang masih dapat dipulihkan.
- Jangan blank page.
- Jangan menghapus state secara otomatis.
- Route unavailable fallback ke `/routes` atau `/explore`.
- Asset failure fallback ke CSS seal.

---

## 25. Testing Plan

### 25.1 Unit tests

- Saved route adapter.
- Route detail fallback.
- Province status exclusivity.
- Level boundaries 0/5/6/15/16/25/26/35/36/38.
- National percent.
- Regional totals = 38.
- Unknown province filtering.
- Next milestone determinism.
- Remove route transition.

### 25.2 Integration tests

```
Route generate → Save → /passport → route terlihat
/passport → Lanjutkan Rute → /routes dengan preset/context benar
/passport → Hapus → state dan UI sinkron
Atlas opened → planned/started terlihat di /passport
Atlas completed → stamp terlihat di /passport
Explore Section Passport → Buka Passport Lengkap
/passport → Next Expedition → Atlas benar
```

### 25.3 E2E desktop

1. Buka `/routes`.
2. Pilih preset.
3. Simpan ke Passport.
4. Buka `/passport?source=route&tab=routes`.
5. Verifikasi judul, durasi, provinsi, version, saved time.
6. Klik Lanjutkan Rute.
7. Kembali ke Passport.
8. Hapus route.
9. Verifikasi empty/reduced list.

### 25.4 E2E mobile

- 390×844.
- Tidak ada horizontal page overflow.
- Saved route CTA dapat disentuh.
- Remove dialog tidak terpotong.
- Province tabs berfungsi.
- Stamp expansion tidak mengunci scroll.
- Bottom action tidak menutupi content.

### 25.5 Accessibility tests

- Keyboard-only full flow.
- Screen reader labels.
- Focus return dialog.
- Reduced motion.
- Contrast.
- Zoom 200%.

### 25.6 Quality gate

```
validate:foundation
validate:regions
validate:atlas
validate:route-presets
validate:route-contracts
validate:assets
test:passport
test:route-engine
test:route-integration
lint
typecheck
build
test:e2e:smoke
passport page E2E
```

---

## 26. Tahapan Implementasi

### Fase 0 — Baseline

- [ ]  Buat branch atomic.
- [ ]  Jalankan quality gate existing.
- [ ]  Simpan screenshot `/explore#passport-progress`, `/routes`, dan mobile.
- [ ]  Audit interface `PassportSavedRoute` aktual.
- [ ]  Audit link `/passport` existing.

### Fase 1 — Route dan shell

- [ ]  Buat `/passport` page, loading, metadata.
- [ ]  Buat page shell dan navbar konsisten.
- [ ]  Terapkan palette tanpa navy.
- [ ]  Jangan aktifkan route registry sebelum shell aman.

### Fase 2 — Page view model

- [ ]  Buat saved route adapter.
- [ ]  Buat province ledger selector.
- [ ]  Reuse progress summary.
- [ ]  Tambahkan validator development.
- [ ]  Pastikan tidak ada duplicate store.

### Fase 3 — Passport Header

- [ ]  Explorer Identity Folio.
- [ ]  XP, level, x/38.
- [ ]  Latest achievement.
- [ ]  Empty/hydration states.

### Fase 4 — Saved Routes

- [ ]  Featured route.
- [ ]  Archive list.
- [ ]  Resume canonical URL.
- [ ]  Partial/legacy recovery.
- [ ]  Remove confirmation.
- [ ]  Empty state.

### Fase 5 — Province Progress

- [ ]  Planned chapter.
- [ ]  Started chapter.
- [ ]  Completed chapter.
- [ ]  Atlas CTA.
- [ ]  Region filter.

### Fase 6 — Collection dan Badges

- [ ]  Reuse Living Stamp Canvas.
- [ ]  Full collection expansion.
- [ ]  Regional badge constellation/grid.
- [ ]  Requirement details.

### Fase 7 — Next Expedition dan Dock

- [ ]  Reuse milestone engine.
- [ ]  Atlas CTA.
- [ ]  Explore/Routes departure actions.
- [ ]  Complete state.

### Fase 8 — Responsive dan motion

- [ ]  Desktop.
- [ ]  Tablet.
- [ ]  Mobile 390px.
- [ ]  Reduced motion.
- [ ]  Asset performance.

### Fase 9 — Integrasi route

- [ ]  Tambahkan APP_ROUTES.passport.
- [ ]  Aktifkan route availability.
- [ ]  Update Route Save link.
- [ ]  Update Explore preview CTA.
- [ ]  Update navigation dan sitemap.

### Fase 10 — QA

- [ ]  Unit/integration.
- [ ]  E2E desktop/mobile.
- [ ]  Accessibility.
- [ ]  Production build.
- [ ]  Demo rehearsal.

---

## 27. Prioritas Deadline

### P0 — Wajib

- Page dapat dibuka.
- Header akurat.
- Saved Routes tampil dan dapat dilanjutkan.
- Remove aman.
- Planned/started/completed benar.
- Stamp collection existing tampil.
- Next milestone berfungsi.
- Mobile aman.
- Build hijau.

### P1 — Sangat penting

- Regional badges detail.
- Empty/legacy/recovery states.
- Motion halus.
- Accessibility penuh.
- Metadata/sitemap/nav.

### P2 — Jika waktu tersedia

- Full 38 stamp expansion.
- Undo remove.
- Cross-tab live sync polish.
- Share progress card.
- Export/import lokal.

### Jangan dikerjakan hari ini

- Login.
- Cloud sync.
- Certificate generator kompleks.
- Social/leaderboard.
- New animation framework.
- 3D passport.

---

## 28. Estimasi Pengerjaan

| Fase | Estimasi | Prioritas |
| --- | --- | --- |
| Audit dan baseline | 1–2 jam | P0 |
| Route, shell, dan view model | 2–4 jam | P0 |
| Passport Header | 2–3 jam | P0 |
| Saved Routes Archive | 3–5 jam | P0 |
| Province Progress | 2–4 jam | P0 |
| Reuse Stamp + Badge | 2–4 jam | P1 |
| Next Expedition + CTA | 1–2 jam | P0 |
| Responsive, a11y, motion | 3–5 jam | P0/P1 |
| Integrasi dan QA | 3–5 jam | P0 |

**MVP deadline realistis:** 10–16 jam bila reuse berjalan mulus.

**Versi polished:** 19–34 jam.

---

## 29. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Membuat store kedua | State pecah | Reuse AppProvider/transitions |
| Saved route detail hilang | Card kosong | Registry fallback + partial state |
| Remove menghapus progress | Kehilangan jejak | Gunakan transition existing; test references |
| Planned dihitung stamp | Gamifikasi palsu | Status eksklusif dan selectors |
| Hydration flash 0/38 | UI terasa rusak | Stable skeleton |
| Semua 38 aset dimuat | Halaman berat | Lazy expansion |
| Route diaktifkan terlalu awal | Broken navigation | Availability terakhir |
| Visual kembali ke navy | Melanggar direction | Token lint/review dan forbidden palette |
| Terlalu banyak cards | Generic AI dashboard | Editorial dossier/ledger composition |
| Motion berat | Jank mobile | Transform/opacity only |
| Legacy data rusak | Progress hilang | Normalize/migrate, jangan auto-reset |

---

## 30. Acceptance Criteria

### Functional

- [ ]  `/passport` tersedia.
- [ ]  Header menampilkan level, stamp, XP, x/38, latest achievement.
- [ ]  Saved routes berasal dari state existing.
- [ ]  Setiap route menampilkan metadata yang tersedia secara jujur.
- [ ]  Resume membuka route benar.
- [ ]  Remove idempotent dan tidak menghapus completed stamps.
- [ ]  Planned/started/completed terpisah.
- [ ]  Atlas CTA benar.
- [ ]  Stamp collection memakai aset existing.
- [ ]  Badge memakai registry existing.
- [ ]  Next milestone deterministik.
- [ ]  Refresh mempertahankan data.
- [ ]  Empty/partial/error states tersedia.

### Visual

- [ ]  Tidak menggunakan navy sama sekali.
- [ ]  Dominasi parchment, espresso, terracotta, brass, moss.
- [ ]  Terlihat seperti expedition ledger, bukan dashboard template.
- [ ]  Saved Routes menjadi focal utility.
- [ ]  Tidak ada grid card SaaS generik.
- [ ]  Motif dan tekstur halus.
- [ ]  Selaras dengan craft `/explore` dan `/routes` tanpa menirunya.

### Responsive

- [ ]  390px tidak overflow.
- [ ]  Route CTA selalu reachable.
- [ ]  Dialog remove aman.
- [ ]  Label panjang wrap.
- [ ]  Stamp grid lazy dan usable.

### Accessibility

- [ ]  H1/H2 benar.
- [ ]  Progress semantic.
- [ ]  Keyboard full flow.
- [ ]  Focus return.
- [ ]  Reduced motion.
- [ ]  WCAG AA.
- [ ]  Zoom 200% aman.

### Quality

- [ ]  Tidak ada `any` baru.
- [ ]  Tidak ada `eslint-disable` baru tanpa alasan kuat.
- [ ]  Tidak ada hardcoded route di luar registry/helper.
- [ ]  Tests lulus.
- [ ]  Build production lulus.

---

## 31. Demo Juri 60–90 Detik

```
1. Dari Route Planner, simpan satu rute ke Passport.
2. Klik Buka Passport.
3. Masthead menampilkan level, XP, dan progress nasional.
4. Saved Routes langsung menampilkan rute yang baru disimpan.
5. Klik Lanjutkan Rute untuk membuktikan round-trip.
6. Kembali ke Passport dan buka Province Progress.
7. Tunjukkan planned, started, completed yang berbeda.
8. Buka koleksi stempel dan regional badge.
9. Next Expedition menjelaskan provinsi berikutnya dan alasannya.
10. Klik Buka Atlas rekomendasi.
```

Nilai yang terbukti:

- Shared state.
- Persistence.
- Saved route utility.
- Gamification yang jujur.
- Integrasi Route–Passport–Atlas–Explore.
- UI premium tanpa ketergantungan API.

---

## 32. Definition of Done

Halaman `/passport` selesai jika:

1. Menggunakan store dan transitions existing.
2. Tidak ada warna navy pada page, komponen, loading, error, dialog, footer, atau responsive state.
3. Header menampilkan identitas explorer secara akurat.
4. Saved Routes tampil, dapat dilanjutkan, dan dapat dihapus.
5. Missing detail memiliki recovery state jujur.
6. Planned, started, completed terpisah.
7. Stamp collection dan regional badges memakai registry existing.
8. Next milestone deterministik dan menuju Atlas valid.
9. Link dari Route dan Explore menuju `/passport`.
10. Sitemap dan navigation diperbarui setelah route siap.
11. Hydration stabil tanpa flash angka palsu.
12. Empty, loading, partial, corrupted, dan asset-failure states tersedia.
13. Desktop, tablet, dan mobile aman.
14. Keyboard, screen reader, reduced motion, contrast, dan zoom aman.
15. Tidak ada reward karena page view atau scroll.
16. Tidak ada duplicate store, count, stamp, badge, atau route.
17. Tidak ada CTA mati.
18. Quality gate dan production build hijau.
19. Demo round-trip Route → Passport → Route/Atlas dapat diulang.
20. Halaman terasa unik, editorial, hangat, dan tidak generic AI.

---

## 33. Dokumen Terkait

- [Planning Lengkap — Section 9 Nusa Passport Progress NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-9-Nusa-Passport-Progress-NUSANTARAYA-b75c374d3e40411da8345aa3d894a0bb?pvs=21)
- [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21)
- [Roadmap & Workflow Pengembangan NUSANTARAYA](https://app.notion.com/p/Roadmap-Workflow-Pengembangan-NUSANTARAYA-02a098210a3c83dfb7688147846399f4?pvs=21)
- [FLOWCHART NUSANTARAYA WEB](https://app.notion.com/p/FLOWCHART-NUSANTARAYA-WEB-d9e098210a3c82ef846c01b2b673e84f?pvs=21)
- [Planning Master — Perbaikan & Penyempurnaan Menyeluruh NUSANTARAYA](https://app.notion.com/p/Planning-Master-Perbaikan-Penyempurnaan-Menyeluruh-NUSANTARAYA-b6d06f9ee7414eb29d215276fb01aa17?pvs=21)

<aside>
🏆

**Target akhir:** `/passport` membuat pengguna merasa bahwa seluruh aksi di NUSANTARAYA—memilih provinsi, membuka Atlas, menyusun rute, menyimpan perjalanan, menyelesaikan eksplorasi, dan membuka badge—menjadi satu sejarah personal yang utuh. Halaman ini harus menjadi bukti bahwa NUSANTARAYA adalah web app yang hidup, bukan kumpulan halaman terpisah.

</aside>