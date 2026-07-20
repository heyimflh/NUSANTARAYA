# Planning Lengkap — Section 9 Nusa Passport Progress NUSANTARAYA

<aside>
🛂

**Dokumen source of truth untuk Section 9 — Nusa Passport Progress pada halaman `/explore` / Nusa Map Full Page NUSANTARAYA.** Section ini mengubah jejak eksplorasi pengguna menjadi progress yang jelas, emosional, dapat dipercaya, dan mendorong tindakan berikutnya—tanpa memberi reward palsu hanya karena sebuah provinsi terlihat di layar.

</aside>

---

## 1. Ringkasan Eksekutif

**Nusa Passport Progress** adalah section kesembilan halaman Nusa Map Full Page `/explore`, ditempatkan setelah **Regional Explorer** dan sebelum **RANI Map Assistant**.

Section ini menjawab pertanyaan utama:

> “Seberapa jauh perjalanan digital saya di Nusantara, apa yang sudah saya capai, dan langkah paling bermakna apa yang sebaiknya saya lakukan berikutnya?”
> 

Konsep final:

```
Living Passport of Nusantara
```

Versi pengalaman:

```
Satu perjalanan, 38 provinsi, tujuh wilayah, dan jejak eksplorasi yang terus bertumbuh.
```

Section ini **bukan dashboard statistik generik**, **bukan daftar 38 stempel penuh**, dan **bukan pengganti halaman `/passport`**. Section harus menjadi **progress snapshot yang emosional dan actionable**: satu visual Passport utama, progress nasional, ringkasan tujuh wilayah, pencapaian terbaru, next milestone, dan CTA untuk melanjutkan eksplorasi atau membuka Passport lengkap.

<aside>
🎯

**Formula UX final:** lihat jejak → pahami progress → rayakan pencapaian → temukan milestone berikutnya → lanjutkan ke provinsi, wilayah, journey, atau Passport lengkap.

</aside>

### 1.1 Keputusan utama

1. Section memakai data Passport existing sebagai satu-satunya source of truth.
2. Bedakan state `planned`, `started`, dan `completed`.
3. Hanya `completed` yang dihitung sebagai stempel/progress utama.
4. Membuka section, memilih region, atau melihat provinsi **tidak otomatis** memberi stempel.
5. Progress nasional dihitung dari maksimal 38 provinsi.
6. Progress regional dihitung dari tujuh region canonical.
7. Badge dan level dihitung melalui rule engine deterministik, bukan hardcoded di UI.
8. Desktop memakai **Passport spread + national progress + regional trail**.
9. Tablet memakai stage bertumpuk dengan regional progress grid.
10. Mobile memakai Passport card compact, progress ring/bar, dan regional snap rail.
11. Section hanya menampilkan snapshot penting; koleksi penuh tetap di `/passport`.
12. Semua tindakan save/unlock harus idempotent dan tidak membuat duplikasi.
13. MVP disimpan di `localStorage`, tanpa login.
14. Empty state harus tetap menarik dan memberi langkah pertama yang konkret.
15. Reward animation tidak boleh memblokir navigasi atau terasa manipulatif.
16. Section harus tetap berfungsi tanpa API, akun, dan koneksi internet.
17. Progress tidak boleh hilang saat refresh atau pindah halaman.
18. Pengguna harus dapat memahami mengapa sebuah stempel, badge, atau level diperoleh.

---

## 2. Posisi dalam Halaman `/explore`

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Summary Panel + Deep Province Atlas
5. Flagship Provinces
6. Explore by Layer
7. Recommended Journey / Smart Suggestions
8. Regional Explorer
9. Nusa Passport Progress ← SECTION INI
10. RANI Map Assistant
11. Final CTA
```

### 2.1 Peran setiap section yang berdekatan

- Section 7 menjawab: **Jalur apa yang sebaiknya saya ikuti?**
- Section 8 menjawab: **Bagaimana karakter antarkawasan dapat dibandingkan?**
- Section 9 menjawab: **Seberapa jauh perjalanan saya sudah berkembang?**
- Section 10 menjawab: **Apa yang dapat RANI bantu berdasarkan konteks perjalanan saya?**

### 2.2 Handoff dari Section 8

Data yang diterima:

```tsx
{
  activeRegionId,
  selectedProvinceId,
  passportProvinceIds,
  plannedProvinceIds,
  activeLayer,
  activeMode,
}
```

Microcopy transisi:

```
Sudah menemukan wilayah yang ingin dijelajahi?
Lihat bagaimana pilihanmu melengkapi peta dan Passport Nusantara.
```

Jika pengguna menekan `Lihat Progress Passport` dari Regional Explorer:

1. Scroll ke `#passport-progress`.
2. Fokus ke heading section.
3. Region yang aktif menjadi region yang disorot.
4. Tidak ada stempel baru yang diberikan.
5. Announce ringkas: `Progress Passport wilayah Maluku ditampilkan.`

### 2.3 Handoff ke RANI Map Assistant

Section mengirim context minimal:

```tsx
{
  completedProvinceIds,
  plannedProvinceIds,
  latestAchievement,
  nextMilestone,
  highlightedRegionId,
  activeLayer,
  activeMode,
}
```

Microcopy transisi:

```
Belum yakin harus melanjutkan ke mana?
Tanya RANI untuk menemukan langkah berikutnya berdasarkan Passport-mu.
```

### 2.4 Anchor wajib

```
#passport-progress
```

---

## 3. Tujuan Produk dan UX

### 3.1 Tujuan pengguna

Pengguna dapat:

1. Mengetahui jumlah provinsi yang direncanakan, dimulai, dan diselesaikan.
2. Melihat progress nasional dari 38 provinsi.
3. Mengetahui level explorer saat ini.
4. Melihat level berikutnya dan kebutuhan yang tersisa.
5. Melihat progress pada tujuh wilayah.
6. Mengetahui badge wilayah atau tematik yang sudah terbuka.
7. Melihat pencapaian terbaru tanpa membuka dashboard penuh.
8. Memahami provinsi atau aksi berikutnya yang direkomendasikan.
9. Kembali ke Map dengan filter atau provinsi yang relevan.
10. Membuka halaman Passport lengkap.
11. Melanjutkan planned journey.
12. Menggunakan section melalui mouse, touch, keyboard, dan screen reader.

### 3.2 Tujuan emosional

```
Perjalanan saya terasa nyata dan terus bertumbuh.
Setiap provinsi yang saya selesaikan punya makna.
Saya tahu apa yang sudah dicapai tanpa merasa dikejar target.
Indonesia terasa luas, tetapi perjalanan berikutnya tetap jelas.
```

### 3.3 Tujuan kompetisi/demo

- Menunjukkan gamifikasi yang benar-benar terhubung dengan Map, Province, Quiz, dan Route Planner.
- Membuktikan persistensi state tanpa login.
- Memberikan wow moment melalui Passport visual dan unlock celebration.
- Menutup alur Map dengan reward loop yang masuk akal.
- Memperlihatkan perbedaan planned versus completed.
- Menjadi jembatan menuju RANI dan halaman Passport penuh.
- Menunjukkan bahwa produk bukan landing page statis.

### 3.4 KPI yang disarankan

Events utama:

- `passport_progress_viewed`.
- `passport_region_selected`.
- `passport_next_action_clicked`.
- `passport_full_opened`.
- `passport_map_resumed`.
- `passport_badge_inspected`.
- `passport_level_inspected`.

Target awal:

- ≥40% pengguna yang mencapai section berinteraksi dengan satu elemen.
- ≥20% membuka Map, provinsi, journey, atau Passport penuh.
- ≥15% melihat detail badge/level.
- ≥50% pengguna demo memperoleh minimal satu stempel melalui aksi valid.
- Progress render lokal kurang dari 100ms.

---

## 4. Scope dan Batas Tanggung Jawab

### 4.1 Termasuk

- Snapshot Passport nasional.
- Count planned, started, dan completed.
- Progress 38 provinsi.
- Current level dan next level.
- Ringkasan tujuh wilayah.
- Badge wilayah dan badge tematik terbaru.
- Recent achievement.
- Next milestone dan recommended next action.
- CTA ke Map, Journey, Province, dan Passport penuh.
- Empty, partial, loading, hydration, corrupted-data, dan error states.
- Responsive, accessibility, analytics, privacy, dan performance.

### 4.2 Tidak termasuk

- Seluruh galeri 38 stempel dalam section.
- Seluruh daftar badge dan histori aktivitas.
- Editor profil pengguna.
- Login, sinkronisasi cloud, leaderboard, atau kompetisi antarpengguna.
- Reward yang bernilai uang.
- Penerbitan sertifikat kompleks di section.
- Sistem sosial, follow, komentar, atau ranking.
- Rekomendasi AI penuh; Section 10/RANI menangani percakapan.
- Data lokasi real-time.

### 4.3 Pembagian tanggung jawab

```
Map menemukan provinsi.
Province/Quiz/Journey menghasilkan aksi yang valid.
Passport store menyimpan state dan reward.
Section 9 merangkum progress dan langkah berikutnya.
Halaman /passport menampilkan koleksi lengkap.
RANI membantu memilih kelanjutan perjalanan.
```

---

## 5. Prinsip Gamifikasi yang Aman dan Jelas

1. **Meaningful action over passive view** — melihat UI bukan penyelesaian.
2. **No duplicate reward** — aksi sama tidak menambah stempel dua kali.
3. **Explainable unlock** — setiap reward memiliki alasan.
4. **Progress without pressure** — gunakan ajakan, bukan rasa bersalah.
5. **No fake scarcity** — tidak ada countdown atau streak palsu.
6. **No cultural ranking** — badge tidak menyatakan budaya terbaik.
7. **Celebrate learning** — quiz, archive, dan journey dapat menjadi bukti eksplorasi.
8. **Offline-first MVP** — reward dapat dihitung lokal.
9. **User control** — pengguna dapat menghapus/reset progress dari halaman Passport penuh, bukan tombol tersembunyi di section.
10. **Transparent storage** — jelaskan bahwa progress tersimpan di perangkat.

Copy transparansi:

```
Progress Passport disimpan di perangkat ini dan diperbarui dari aksi eksplorasi yang kamu selesaikan.
```

---

## 6. Definisi State Passport

### 6.1 Status provinsi

```tsx
type ProvincePassportStatus =
  | "not_started"
  | "planned"
  | "started"
  | "completed";
```

**`not_started`**

- Belum ada aksi tersimpan.
- Tidak masuk progress utama.

**`planned`**

- Provinsi masuk saved route/journey atau daftar rencana.
- Tidak dihitung sebagai stempel.
- Ditampilkan sebagai outline/dotted state.

**`started`**

- Pengguna telah melakukan aksi eksplorasi bermakna, tetapi syarat completion belum terpenuhi.
- Tidak dianggap stempel final kecuali kebijakan MVP menyederhanakan state.

**`completed`**

- Syarat completion valid terpenuhi.
- Menghasilkan satu stempel provinsi.
- Dihitung ke progress nasional dan regional.

### 6.2 Rekomendasi syarat completion

Pilih satu kebijakan dan gunakan konsisten.

**Recommended untuk demo:**

```
Completed jika pengguna menyelesaikan quiz provinsi
ATAU menyelesaikan misi provinsi yang tervalidasi.
```

**Started jika:**

- Membuka detail/Atlas provinsi.
- Membaca minimal satu chapter yang terukur secara lokal.
- Menyimpan provinsi untuk dieksplorasi.

**Planned jika:**

- Menyimpan route/journey berisi provinsi tersebut.

<aside>
⚠️

Jika produk lama sudah memberikan stempel melalui tombol `Tambah ke Passport`, jangan diam-diam mengubah perilaku. Audit store existing terlebih dahulu, lalu normalisasi copy agar `tersimpan` tidak otomatis diklaim sebagai `selesai` bila datanya sebenarnya hanya planned.

</aside>

### 6.3 Prioritas status

```
completed > started > planned > not_started
```

Status tidak boleh turun otomatis. Penurunan hanya terjadi jika pengguna menghapus aksi atau reset progress secara eksplisit.

---

## 7. Sistem Level Explorer

Gunakan lima level dari PRD:

| Level | Rentang Stempel | Makna |
| --- | --- | --- |
| Penjelajah Baru | 0–5 | Memulai jejak pertama di Nusantara. |
| Petualang Nusantara | 6–15 | Mulai menjelajahi banyak provinsi dan wilayah. |
| Pengembara Sejati | 16–25 | Perjalanan telah melintasi cakupan nasional yang luas. |
| Penjaga Warisan | 26–35 | Eksplorasi mendalam dan konsisten di banyak daerah. |
| Pahlawan Nusantara | 36–38 | Hampir atau telah menyelesaikan seluruh provinsi. |

### 7.1 Level calculation

```tsx
const EXPLORER_LEVELS = [
  { id: "new-explorer", label: "Penjelajah Baru", min: 0, max: 5 },
  { id: "nusantara-adventurer", label: "Petualang Nusantara", min: 6, max: 15 },
  { id: "true-wanderer", label: "Pengembara Sejati", min: 16, max: 25 },
  { id: "heritage-guardian", label: "Penjaga Warisan", min: 26, max: 35 },
  { id: "nusantara-hero", label: "Pahlawan Nusantara", min: 36, max: 38 },
] as const;
```

### 7.2 Next-level copy

Contoh:

```
3 stempel lagi menuju Petualang Nusantara.
```

Aturan:

- Gunakan count aktual.
- Jangan menyebut `hampir` jika jaraknya masih jauh.
- Pada level maksimal: `Seluruh tingkat utama telah terbuka.`
- Progress dalam level menggunakan rentang level, bukan selalu `completed / 38`.

---

## 8. Sistem Badge

### 8.1 Badge wilayah

- Sumatra Seeker.
- Java Heritage Keeper.
- Borneo Nature Guardian.
- Celebes Voyager.
- Bali–Nusa Wanderer.
- Maluku Spice Explorer.
- Papua Wonder Seeker.
- Indonesia Complete Explorer.

### 8.2 Badge tematik

- Spice Route Explorer.
- Heritage Trail Keeper.
- NusaRasa Hunter.
- Aksara Learner.
- Soundscape Listener.
- Future City Explorer.
- RANI Companion.

### 8.3 Aturan badge wilayah

Rekomendasi:

- Badge wilayah terbuka jika seluruh provinsi dalam region `completed`.
- Jika terlalu berat untuk versi demo, buat `regional milestone badge` terpisah untuk 50%, tetapi jangan menyebutnya completion badge.
- Indonesia Complete Explorer terbuka pada 38/38.

### 8.4 Aturan badge tematik

Setiap badge wajib memiliki:

```tsx
type BadgeDefinition = {
  id: string;
  label: string;
  description: string;
  category: "region" | "theme" | "special";
  requirementText: string;
  evaluate: (state: PassportState) => boolean;
  icon: string;
  lockedIcon?: string;
  accentColor: string;
};
```

### 8.5 UI badge

Section hanya menampilkan:

- Latest unlocked badge.
- Badge region yang sedang disorot.
- Maksimal 2–3 badge preview.
- CTA `Lihat Semua Badge` ke `/passport#badges`.

Badge terkunci boleh terlihat sebagai silhouette, tetapi requirement harus dapat dibaca.

---

## 9. Konsep Pengalaman Final

### 9.1 Creative direction

```
Digital Passport Book × National Progress Atlas × Premium Achievement Journal
```

### 9.2 Komposisi informasi

1. Eyebrow dan heading.
2. Context note dari region/provinsi sebelumnya.
3. Visual Passport utama.
4. Progress nasional.
5. Current level dan next level.
6. Planned/started/completed summary.
7. Regional progress trail.
8. Recent achievement.
9. Next milestone.
10. Primary action.
11. CTA Passport penuh.

### 9.3 Yang harus dihindari

- Dashboard penuh angka.
- Semua 38 stempel tampil sekaligus.
- Confetti setiap render.
- Badge palsu atau belum punya requirement.
- Progress ring tanpa label numerik.
- Warna region memenuhi seluruh section.
- Copy manipulatif seperti `Jangan putuskan streak-mu`.
- Leaderboard.
- Reward hanya karena scroll.
- Auto-opening modal saat section terlihat.
- Animasi Passport 3D berat.
- Progress yang baru muncul setelah hydration tanpa skeleton, menyebabkan layout jump.

---

## 10. Copywriting Final

### Eyebrow

```
Nusa Passport
```

### Heading

```
Jejak Perjalananmu di Nusantara
```

### Subheading

```
Lihat provinsi yang telah kamu selesaikan, wilayah yang mulai terbuka, badge yang terkumpul, dan langkah berikutnya untuk melanjutkan perjalanan digitalmu.
```

### Supporting microcopy

```
Setiap stempel menandai aksi eksplorasi yang benar-benar kamu selesaikan.
```

### Label UI

- `Progress Nusantara`.
- `Provinsi selesai`.
- `Sedang dijelajahi`.
- `Direncanakan`.
- `Level saat ini`.
- `Menuju level berikutnya`.
- `Jejak per wilayah`.
- `Pencapaian terbaru`.
- `Langkah berikutnya`.
- `Tersimpan di perangkat ini`.

### CTA utama dinamis

- Empty: `Mulai dari Provinsi Pertama`.
- Planned available: `Lanjutkan Rencana Perjalanan`.
- Started available: `Selesaikan Eksplorasi`.
- Active region incomplete: `Lengkapi Wilayah Ini`.
- General: `Lanjutkan Jelajah di Peta`.
- Complete: `Lihat Koleksi Lengkap`.

### CTA sekunder

- `Buka Passport Lengkap`.
- `Lihat Semua Badge`.
- `Lanjutkan Journey`.
- `Tanya RANI`.

---

## 11. Arsitektur Visual Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ NUSA PASSPORT                                                               │
│ Jejak Perjalananmu di Nusantara                  [Tersimpan di perangkat]    │
│ Subheading                                                                  │
├───────────────────────────────────────┬──────────────────────────────────────┤
│ DIGITAL PASSPORT SPREAD               │ PROGRESS DOSSIER                     │
│                                       │ 12 / 38 provinsi                     │
│ [Cover/identity] [Indonesia progress] │ Progress ring/bar                    │
│ [latest stamp]   [regional marks]     │ Level: Petualang Nusantara           │
│                                       │ 4 lagi ke Pengembara Sejati          │
│ [Buka Passport Lengkap]               │ Planned 5 · Started 2 · Complete 12   │
├───────────────────────────────────────┴──────────────────────────────────────┤
│ JEJAK PER WILAYAH                                                           │
│ Sumatera 3/10 · Jawa 4/6 · Kalimantan 1/5 · ...                            │
├───────────────────────────────────────┬──────────────────────────────────────┤
│ PENCAPAIAN TERBARU                    │ LANGKAH BERIKUTNYA                    │
│ [Badge / stamp / date]                │ [Province suggestion + reason + CTA] │
└───────────────────────────────────────┴──────────────────────────────────────┘
```

### 11.1 Rasio desktop

- Outer max width: 1280–1440px.
- Passport visual: 55–62%.
- Progress dossier: 38–45%.
- Stage min height: 560–700px.
- Regional trail: full width.
- Bottom cards: 2 columns seimbang.

### 11.2 Passport visual

Elemen yang direkomendasikan:

- Cover navy dengan gold foil.
- Siluet Indonesia sederhana.
- Mini stamp slots maksimal 6–8 yang terlihat.
- Latest stamp sebagai focal detail.
- Watermark motif Nusantara global, bukan motif spesifik untuk seluruh Indonesia.
- Page edge dan binding ringan.

Tidak direkomendasikan:

- Realistic page-flip library.
- Canvas/WebGL berat.
- Seluruh 38 stamp artwork di initial payload.
- Passport yang terlihat seperti dokumen resmi pemerintah.

### 11.3 Hierarki visual

1. Count `completed / 38`.
2. Passport book/identity visual.
3. Level saat ini.
4. CTA utama.
5. Regional progress.
6. Latest achievement.
7. Planned/started metadata.

---

## 12. Blueprint Tablet

```
Section header
Context pill
Passport visual full width
National progress + level
Three-state summary
Regional grid 2 columns
Latest achievement
Next milestone
CTA row
```

Aturan:

- Jangan memaksakan spread dua kolom sempit.
- Passport visual dapat menjadi landscape card.
- Dossier diletakkan tepat di bawah visual.
- Regional cards 2 kolom.
- Badge preview maksimal dua.
- CTA primary dan secondary tetap terlihat tanpa horizontal overflow.

---

## 13. Blueprint Mobile

```
Eyebrow
Heading
Subheading
Storage note

Passport cover card
12 / 38
Progress bar
Current level
3-state summary

Regional snap rail
Latest achievement card
Next milestone card
Primary CTA full width
Open full Passport
```

### 13.1 Mobile rules

- Padding 20–24px.
- Passport card ratio 4:5 atau compact portrait.
- Heading 34–42px.
- Count harus terlihat tanpa scroll internal.
- Progress tidak bergantung pada ring kecil.
- Regional rail memakai native horizontal scroll + snap.
- Tampilkan partial next card sebagai affordance.
- Primary CTA full width.
- Secondary CTA maksimal dua per row.
- Touch target minimal 44×44px.
- Tidak ada nested vertical scroll.
- Tidak ada hover-only detail.

### 13.2 Mobile kecil ≤390px

- Gunakan progress bar horizontal, bukan ring besar.
- Tiga status menjadi stacked mini rows.
- Nama level maksimal dua baris.
- Region card lebar 170–210px.
- Badge artwork diperkecil; requirement tetap readable.
- Ornament dan foil effect dikurangi.

---

## 14. Regional Progress Trail

Gunakan tujuh region canonical yang sama dengan Regional Explorer:

| Region | Total | Accent |
| --- | --- | --- |
| Sumatera | 10 | `#B85C38` |
| Jawa | 6 | `#2B4C8C` |
| Kalimantan | 5 | `#1A5C3A` |
| Sulawesi | 6 | `#D4691E` |
| Bali–Nusa Tenggara | 3 | `#6B3FA0` |
| Maluku | 2 | `#1B7A7A` |
| Papua | 6 | `#1A4A7A` |

### 14.1 Region item

Setiap item berisi:

- Nama region.
- Completed/total.
- Progress bar atau segmented marks.
- State: belum dimulai, berjalan, hampir lengkap, lengkap.
- Badge wilayah jika unlocked.
- Next incomplete province optional.
- CTA `Lihat di Peta` atau `Lengkapi Wilayah`.

### 14.2 State copy

- 0: `Belum dimulai`.
- 1 hingga sebelum total: `Sedang dijelajahi`.
- Sisa 1: `Satu provinsi lagi`.
- Full: `Wilayah lengkap`.

### 14.3 Selection behavior

```
Klik Maluku
→ highlightedRegionId = maluku
→ detail next milestone memperbarui context
→ tidak mengubah Map otomatis
→ CTA eksplisit membawa pengguna ke Map
```

Jika datang dari Section 8, `activeRegionId` menjadi highlight awal sebelum user berinteraksi.

---

## 15. Next Milestone Engine

### 15.1 Tujuan

Memberi satu langkah berikutnya yang jelas tanpa membuat recommendation engine baru yang kompleks.

### 15.2 Prioritas rekomendasi

```
1. Started province yang belum completed
2. Planned province dari active journey
3. Sisa terakhir untuk badge wilayah
4. Selected province yang belum completed
5. Province baru dalam active region
6. Flagship dengan data lengkap
7. Editorial fallback
```

### 15.3 Reason codes

```tsx
type PassportNextReason =
  | "CONTINUE_STARTED_PROVINCE"
  | "CONTINUE_PLANNED_JOURNEY"
  | "COMPLETES_REGION_BADGE"
  | "MATCHES_SELECTED_PROVINCE"
  | "MATCHES_ACTIVE_REGION"
  | "NEW_FOR_PASSPORT"
  | "FLAGSHIP_CONTENT_DEPTH"
  | "EDITORIAL_STARTER";
```

### 15.4 Explainable copy

- `Lanjutkan karena provinsi ini sudah kamu mulai.`
- `Selesaikan satu provinsi lagi untuk membuka badge Maluku.`
- `Provinsi ini ada dalam journey yang kamu simpan.`
- `Pilihan ini sesuai wilayah yang sedang aktif.`
- `Tambahkan wilayah baru ke Passport-mu.`

### 15.5 Aturan aman

- Maksimal satu primary suggestion dan dua alternatives.
- Tidak random pada setiap render.
- Tie-break stabil.
- Jika route/Atlas belum valid, fallback ke Map.
- Tourist Mode tidak menampilkan klaim perjalanan tanpa data tervalidasi.

---

## 16. State Contract dan Data Model

```tsx
export type PassportProvinceEntry = {
  provinceId: string;
  status: ProvincePassportStatus;
  plannedAt?: string;
  startedAt?: string;
  completedAt?: string;
  completionSource?:
    | "quiz"
    | "province-mission"
    | "journey"
    | "archive-learning"
    | "manual-legacy";
  journeyIds?: string[];
};

export type PassportAchievement = {
  id: string;
  type: "stamp" | "badge" | "level";
  referenceId: string;
  unlockedAt: string;
  source: string;
};

export type PassportState = {
  version: number;
  provinceEntries: PassportProvinceEntry[];
  unlockedBadgeIds: string[];
  achievements: PassportAchievement[];
  savedJourneyIds: string[];
  completedQuizIds: string[];
  lastUpdatedAt: string;
};
```

### 16.1 Derived summary

```tsx
export type PassportProgressSummary = {
  plannedCount: number;
  startedCount: number;
  completedCount: number;
  totalProvinceCount: 38;
  nationalPercent: number;
  currentLevel: ExplorerLevel;
  nextLevel: ExplorerLevel | null;
  stampsToNextLevel: number;
  regionalProgress: RegionalProgress[];
  latestAchievement: PassportAchievement | null;
  nextMilestone: PassportNextMilestone | null;
};
```

### 16.2 Source of truth

- Province IDs dan region mapping berasal dari province dataset.
- Status berasal dari Passport store existing.
- Badge definitions berasal dari satu registry.
- Level definitions berasal dari satu constant.
- Counts selalu derived.
- UI tidak menyimpan count terpisah.
- Timestamps disimpan ISO string.

### 16.3 Validator

- Maksimal 38 unique province IDs.
- Tidak ada province ID asing.
- Satu provinsi hanya punya satu entry canonical.
- Status valid.
- Completed memiliki `completedAt` bila migrasi memungkinkan.
- Badge IDs valid.
- Achievements tidak duplicate berdasarkan unique key.
- Count region menjumlah ke 38.
- Percent dibatasi 0–100.

---

## 17. localStorage, Hydration, dan Migrasi

### 17.1 Storage key

Rekomendasi:

```
nusantaraya-passport-v1
```

Jika key existing berbeda, reuse key existing dan buat migration layer. Jangan membuat dua store Passport aktif.

### 17.2 Hydration flow

```
SSR/render awal
→ tampilkan shell stabil
→ client membaca localStorage
→ parse + validate + migrate
→ derive summary
→ tampilkan progress
```

### 17.3 Mencegah hydration mismatch

- Jangan membaca `localStorage` saat server render.
- Gunakan hydrated flag.
- Skeleton harus memiliki tinggi mendekati final.
- Jangan merender angka 0 lalu melompat ke angka aktual tanpa loading state.

### 17.4 Migration

```tsx
type PassportMigration = {
  fromVersion: number;
  toVersion: number;
  migrate: (input: unknown) => PassportState;
};
```

Kasus migrasi:

- Array stamp lama menjadi province entries `completed` atau `started` sesuai arti legacy.
- Badge lama dinormalisasi ke IDs canonical.
- Duplicate IDs dihapus.
- Unknown fields diabaikan, bukan merusak seluruh state.
- State korup dipulihkan ke backup aman bila tersedia.

### 17.5 Backup lokal optional

Sebelum migrasi besar:

```
nusantaraya-passport-backup-v1
```

Jangan menyimpan data sensitif.

---

## 18. Interaction Flows

### 18.1 Empty Passport

```
completed = 0
planned = 0
started = 0
→ tampilkan Passport kosong yang mengundang
→ next milestone = editorial flagship starter
→ CTA Mulai dari Provinsi Pertama
→ klik CTA scroll ke #interactive-map
```

### 18.2 Planned journey tersedia

```
plannedProvinceIds > 0
→ tampilkan planned count
→ pilih stop pertama yang belum started/completed
→ CTA Lanjutkan Rencana Perjalanan
```

### 18.3 Started province tersedia

```
startedProvinceIds > 0
→ prioritaskan started paling baru
→ tampilkan requirement completion
→ CTA Selesaikan Eksplorasi
```

### 18.4 Satu provinsi lagi menuju badge

```
regional completed = total - 1
→ tampilkan badge silhouette + label Satu provinsi lagi
→ next milestone menunjuk sisa provinsi
→ CTA Lengkapi Wilayah
```

### 18.5 Badge unlock

```
aksi valid selesai
→ store idempotent update
→ evaluator badge berjalan
→ achievement baru dicatat satu kali
→ toast/celebration ringkas
→ section memperbarui progress
```

### 18.6 Level up

```
completed count melewati threshold
→ level dihitung ulang
→ achievement level dicatat
→ announce Level baru terbuka
→ animasi ringan, tidak memblokir UI
```

### 18.7 Open full Passport

```
Klik Buka Passport Lengkap
→ route /passport
→ simpan return snapshot /explore#passport-progress
→ Browser Back memulihkan scroll dan highlighted region
```

### 18.8 Resume Map

```
Klik Lanjutkan Jelajah di Peta
→ set regional/province context jika relevan
→ pertahankan activeLayer dan activeMode
→ scroll #interactive-map
→ focus map status
```

---

## 19. Integrasi dengan Map, Province, Journey, Route Planner, dan RANI

### 19.1 Interactive Map

Map membaca status untuk visual optional:

- Completed: stamp/check mark kecil.
- Started: partial ring.
- Planned: dotted outline.
- Not started: default.

Status Passport tidak boleh mengalahkan selected/hover/focus state Map.

### 19.2 Province Summary dan Atlas

- `Tambah ke Passport` harus menjelaskan apakah hasilnya planned atau started.
- Quiz/misi dapat menyelesaikan stamp.
- CTA tidak boleh menduplikasi entry.
- Setelah completion, panel dapat menampilkan `Stempel diperoleh`.

### 19.3 Recommended Journey

- Save journey menambah province sebagai `planned`, bukan otomatis `completed`.
- Journey completion yang valid dapat mengubah state berdasarkan aturan.
- Section 9 memprioritaskan journey yang belum selesai.

### 19.4 Regional Explorer

- Mengirim active region.
- Menampilkan snapshot regional dari store yang sama.
- CTA ke Passport scroll dan highlight region yang sesuai.

### 19.5 Route Planner

- Saved route menambah planned province IDs.
- Route result tidak memberi stempel sebelum aksi completion.
- Resume CTA membuka route canonical jika tersedia.

### 19.6 RANI

RANI dapat menerima summary, bukan full history.

Contoh prompt context internal:

```tsx
{
  currentLevel: "Petualang Nusantara",
  completedCount: 8,
  highlightedRegionId: "maluku",
  nextMilestoneReason: "COMPLETES_REGION_BADGE",
  nextProvinceId: "maluku-utara",
}
```

RANI tidak boleh mengklaim pengguna pernah mengunjungi lokasi fisik; gunakan istilah `menjelajahi secara digital` kecuali pengguna menyatakan perjalanan nyata.

---

## 20. Empty, Loading, Partial, dan Error States

### 20.1 Loading/hydration

Copy:

```
Menyiapkan jejak Passport-mu…
```

Skeleton:

- Passport card.
- National progress line.
- Tiga mini stats.
- Regional placeholders.

### 20.2 Empty

Heading card:

```
Passport-mu siap untuk stempel pertama.
```

Body:

```
Pilih satu provinsi, pelajari ceritanya, lalu selesaikan quiz atau misi untuk memperoleh stempel pertama.
```

CTA:

```
Mulai dari Peta
```

### 20.3 Partial legacy data

- Tampilkan entry valid.
- Abaikan unknown ID.
- Beri nonblocking note jika migrasi diperlukan.
- Jangan menghapus data diam-diam.

### 20.4 Corrupted storage

```
Progress Passport tidak dapat dibaca sepenuhnya di perangkat ini.
```

Actions:

- `Coba Pulihkan`.
- `Buka Passport`.
- Reset hanya setelah konfirmasi eksplisit di halaman lengkap.

### 20.5 Asset failure

- Gunakan badge/stamp CSS fallback.
- Tampilkan nama provinsi sebagai teks.
- Jangan menampilkan broken image icon.

### 20.6 Route unavailable

Ganti CTA dengan:

```
Lanjutkan melalui Peta
```

Section tidak boleh kosong atau hilang total.

---

## 21. Visual Design System

### 21.1 Brand base

```
Ivory Background  #FFFDF8
Warm Canvas       #F8F4EA
Navy Ink          #0D1B2A
Flagship Gold     #C9A84C
Warm Border       #E8E0CE
Muted Text        #5E6570
Heritage Red      #8B2020
```

### 21.2 Passport-specific tokens

```
Passport Cover    #10233A
Gold Foil         #D6B85B
Stamp Ink         #8B2020
Paper             #FFF9EC
Locked Surface    #E9E4D9
Success           #2D6A4F
```

### 21.3 Aturan warna

- Navy, ivory, gold mendominasi.
- Region colors hanya aksen progress.
- Gold tidak dipakai untuk semua border.
- Completed harus dibedakan dengan icon/label, bukan warna saja.
- Locked badge tetap readable.
- Pastikan gold text memenuhi contrast atau gunakan sebagai dekorasi.

### 21.4 Surface

```css
background: rgba(255, 253, 248, 0.97);
border: 1px solid #E8E0CE;
border-radius: 32px;
box-shadow: 0 30px 100px rgba(13, 27, 42, 0.10);
```

### 21.5 Tipografi

- Section heading: Playfair Display 52–72px desktop.
- Main progress count: Playfair Display 56–88px.
- Level name: Playfair/Inter SemiBold 24–34px.
- Body: Inter 15–17px, line-height 1.6.
- Metadata: Inter Medium 12–13px.
- Stamp label: Inter/serif mix dengan readability terjaga.

---

## 22. Asset Strategy

### 22.1 Struktur folder rekomendasi

```
public/assets/passport/
  cover/
    passport-cover.webp
    passport-emblem.svg
  stamps/
    aceh.svg
    sumatera-utara.svg
    ...38 provinsi
  badges/
    regions/
    themes/
    special/
  levels/
    new-explorer.svg
    nusantara-adventurer.svg
    true-wanderer.svg
    heritage-guardian.svg
    nusantara-hero.svg
  patterns/
    passport-watermark.svg
    paper-noise.webp
  effects/
    sparkle.svg
```

### 22.2 Initial loading

Load awal:

- Passport cover.
- Current level icon.
- Latest stamp/badge.
- Visible regional icons.

Lazy-load:

- Badge detail on intent.
- Additional stamp preview.
- Full collection hanya di `/passport`.

### 22.3 Fallback

Jika artwork belum lengkap:

- Stamp circular CSS.
- Province initials.
- Region color hairline.
- Indonesia silhouette.
- Text label canonical.

### 22.4 Asset metadata

Setiap aset memiliki:

- ID canonical.
- Source/creator.
- License.
- Alt text.
- Cultural sensitivity note.
- Dark/light variant bila dibutuhkan.

---

## 23. Motion dan Celebration System

### 23.1 Entrance

1. Header fade-up.
2. Passport cover reveal.
3. Progress bar mengisi dari 0 ke nilai aktual hanya setelah hydration, maksimal 500–700ms.
4. Stats muncul sebagai group.
5. Regional trail terakhir.

### 23.2 Unlock animation

- Stamp press 300–450ms.
- Ink bloom ringan.
- Sparkle maksimal 600–900ms.
- Badge scale 0.96 → 1.
- Tidak ada full-screen confetti default.

### 23.3 Progress update

- Count crossfade.
- Bar width transition 250–400ms.
- Latest achievement card highlight sekali.
- Layout height stabil.

### 23.4 Reduced motion

- Tidak ada stamp press, sparkle, parallax, atau count animation.
- State update instan atau crossfade ≤100ms.
- Tidak ada smooth scroll paksa.

### 23.5 Replay policy

- Celebration hanya untuk achievement baru dalam sesi.
- Reload tidak memutar unlock animation berulang.
- Achievement memiliki `seenAt` optional jika diperlukan.

---

## 24. Accessibility

### 24.1 Semantik

```html
<section id="passport-progress" aria-labelledby="passport-progress-heading">
```

- H2 untuk section.
- H3 untuk level, regional progress, latest achievement, dan next milestone.
- Progress memakai `<progress>` atau `role="progressbar"` lengkap.
- Region list memakai list semantic.
- CTA navigasi berupa link; action state berupa button.

### 24.2 Progress label

```html
<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="38"
  aria-valuenow="12"
  aria-valuetext="12 dari 38 provinsi selesai"
/>
```

### 24.3 Keyboard

- Semua region reachable.
- Focus visible.
- Badge detail dapat dibuka via Enter/Space.
- Escape menutup popover/modal.
- Focus kembali ke trigger.
- Horizontal rail tidak bergantung drag.

### 24.4 Screen reader

- Announce achievement baru satu kali dengan `aria-live="polite"`.
- Jangan membaca seluruh 38 provinsi saat section masuk viewport.
- Decorative book, foil, dan watermark `aria-hidden`.
- Alt text menjelaskan stamp/badge, bukan nama file.

### 24.5 Contrast dan zoom

- Body 4.5:1.
- Large text 3:1.
- Touch target 44×44px.
- Zoom 200% tidak memotong progress atau CTA.
- Status tidak bergantung warna.

---

## 25. Performance Budget

### 25.1 Target

- Derive summary lokal <50ms.
- Interaction feedback <100ms.
- Tidak ada long task >200ms.
- No significant CLS.
- Initial Passport assets ideal <300KB.
- Tidak memuat seluruh 38 stamp SVG jika tidak terlihat.

### 25.2 Teknik

- Memoize selectors.
- Gunakan Set/Map untuk lookup province IDs.
- Lazy-load detail badge.
- Hindari full animation library khusus section jika Framer Motion sudah tersedia.
- Gunakan image dimensions eksplisit.
- Debounce storage event antar-tab.
- Gunakan transform/opacity untuk motion.

### 25.3 Payload principle

```
Load the summary, not the full history.
Load the latest achievement, not every reward.
Load visible stamps, not all 38 artworks.
```

---

## 26. Privacy, Trust, dan Cross-Tab Sync

1. MVP tidak membutuhkan login.
2. Jangan menyimpan lokasi fisik, identitas, atau data sensitif.
3. Jelaskan penyimpanan lokal.
4. Jika browser storage dibersihkan, progress dapat hilang.
5. Reset harus membutuhkan konfirmasi.
6. Tidak ada leaderboard.
7. Jangan menyebut planned journey sebagai perjalanan nyata.
8. Gunakan `storage` event untuk sinkronisasi antar-tab.
9. Jangan mengirim full Passport history ke analytics.
10. Ekspor/import progress hanya di halaman Passport penuh jika nanti tersedia.

Copy:

```
Progress tersimpan secara lokal di browser ini. Tidak ada akun atau data perjalanan pribadi yang diperlukan.
```

---

## 27. Analytics Contract

```tsx
type PassportAnalyticsPayload = {
  completedCount: number;
  plannedCount: number;
  startedCount: number;
  currentLevelId: string;
  highlightedRegionId?: string | null;
  nextReason?: PassportNextReason | null;
  source:
    | "section-view"
    | "regional-handoff"
    | "map-resume"
    | "passport-open"
    | "badge"
    | "level"
    | "rani";
  viewport: "desktop" | "tablet" | "mobile";
};
```

Events:

```
passport_progress_viewed
passport_region_selected
passport_badge_inspected
passport_level_inspected
passport_next_action_clicked
passport_map_resumed
passport_full_opened
passport_rani_clicked
passport_asset_failed
passport_storage_recovered
```

Aturan:

- Jangan kirim province history lengkap.
- Jangan kirim event hydration sebagai achievement.
- Jangan duplicate event view karena re-render.
- Jangan kirim localStorage raw value.

---

## 28. SEO dan Content Semantics

- Heading menyebut Passport dan perjalanan Nusantara secara natural.
- Progress personal tidak perlu diindeks sebagai konten statis.
- Gunakan server-rendered copy umum; data personal dihydrate client-side.
- Link `/passport` canonical.
- Jangan memasukkan angka progress ke metadata halaman.
- Semua CTA memiliki label deskriptif.

---

## 29. Component Architecture

```
src/components/explore/passport-progress/
  PassportProgressSection.tsx
  PassportSectionHeader.tsx
  PassportBookVisual.tsx
  PassportNationalProgress.tsx
  PassportStatusSummary.tsx
  PassportLevelCard.tsx
  PassportRegionalTrail.tsx
  PassportRegionCard.tsx
  PassportLatestAchievement.tsx
  PassportNextMilestone.tsx
  PassportActions.tsx
  PassportEmptyState.tsx
  PassportHydrationSkeleton.tsx
  PassportErrorState.tsx
  PassportStampPreview.tsx
  PassportBadgePreview.tsx
  index.ts

src/store/
  passportStore.ts
  passportStorage.ts
  passportMigrations.ts

src/data/passport/
  levels.ts
  badges.ts
  completionRules.ts

src/hooks/
  usePassportProgress.ts
  usePassportHydration.ts
  usePassportRegionalProgress.ts
  usePassportNextMilestone.ts
  usePassportStorageSync.ts

src/types/
  passport.ts

src/animations/
  passportMotion.ts
```

### 29.1 Tanggung jawab komponen

**`PassportProgressSection.tsx`**

- Compose section.
- Membaca shared context.
- Tidak melakukan kalkulasi reward langsung di render.

**`PassportBookVisual.tsx`**

- Visual Passport.
- Hanya preview aset visible.
- Fallback aman.

**`PassportNationalProgress.tsx`**

- Completed/38.
- Progress semantic.
- Planned/started tidak dicampur.

**`PassportRegionalTrail.tsx`**

- Tujuh region.
- Highlight dari Section 8.
- CTA eksplisit ke Map.

**`PassportNextMilestone.tsx`**

- Satu rekomendasi utama.
- Reason code dan fallback.

**`passportStore.ts`**

- Idempotent upsert.
- Unlock evaluation.
- Persistence.
- Tidak bergantung komponen visual.

---

## 30. Store API Rekomendasi

```tsx
type PassportActions = {
  planProvince: (provinceId: string, source?: string) => void;
  startProvince: (provinceId: string, source?: string) => void;
  completeProvince: (provinceId: string, source: string) => void;
  saveJourney: (journeyId: string, provinceIds: string[]) => void;
  completeQuiz: (quizId: string, provinceId: string) => void;
  evaluateAchievements: () => PassportAchievement[];
  markAchievementSeen: (achievementId: string) => void;
  hydrate: () => void;
  recover: () => void;
};
```

### 30.1 Idempotency

```
completeProvince("maluku") dipanggil dua kali
→ entry tetap satu
→ completedAt pertama dipertahankan
→ achievement stamp hanya satu
→ count tidak bertambah dua kali
```

### 30.2 Transaction order

```
Validate input
→ read latest state
→ upsert province
→ evaluate badge/level
→ append unique achievements
→ persist once
→ notify UI
```

---

## 31. Responsive Matrix

| Viewport | Main Stage | Regional Progress | Bottom Cards |
| --- | --- | --- | --- |
| ≥1280px | Passport + dossier 2 kolom | 7-item trail | 2 kolom |
| 1024–1279px | 2 kolom compact | 4+3 grid | 2 kolom |
| 768–1023px | Stacked | 2 kolom | Stacked |
| 430–767px | Single compact | Snap rail | Stacked |
| ≤390px | Cover + bar | Compact snap | Stacked compact |

Viewport QA:

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

## 32. Testing Plan

### 32.1 Data tests

- Total provinsi 38.
- Unique province IDs.
- Region total 10+6+5+6+3+2+6 = 38.
- Level boundary 0, 5, 6, 15, 16, 25, 26, 35, 36, 38.
- Badge requirement deterministic.
- Percent 0–100.
- Unknown IDs tidak merusak summary.

### 32.2 Store tests

- Upsert idempotent.
- Planned → started → completed.
- Completed tidak turun otomatis.
- Duplicate action tidak duplicate achievement.
- Migration legacy.
- Corrupted JSON recovery.
- Cross-tab update.
- Refresh persistence.

### 32.3 Functional tests

- Empty state CTA.
- Resume started province.
- Resume planned journey.
- Complete last province for region.
- Badge unlock.
- Level up.
- Open Passport full.
- Return via Browser Back.
- Regional handoff.
- RANI handoff.
- Broken route fallback.

### 32.4 Responsive tests

- Count tidak terpotong.
- Passport visual tidak terlalu tinggi.
- Regional rail usable.
- Long label `Bali–Nusa Tenggara` aman.
- No horizontal page overflow.
- CTA mudah disentuh.

### 32.5 Accessibility tests

- Keyboard-only.
- Screen reader progress announcement.
- Live region satu kali.
- Focus return.
- Contrast.
- Reduced motion.
- Zoom 200%.
- Touch targets.

### 32.6 Performance tests

- Cold hydration.
- 38 entries penuh.
- Many achievements history.
- Low-end mobile.
- localStorage parse/migration.
- Image decode.
- CLS.

### 32.7 Build validation

```
lint
type-check
passport data validator
province coverage validator
badge rule tests
migration tests
asset manifest check
unit/integration tests
production build
```

---

## 33. Acceptance Criteria

### Functional

- [ ]  Section berada setelah Regional Explorer.
- [ ]  Anchor `#passport-progress` tersedia.
- [ ]  Planned, started, completed dibedakan.
- [ ]  Completed/38 akurat.
- [ ]  Level akurat pada seluruh boundary.
- [ ]  Regional progress akurat.
- [ ]  Latest achievement akurat.
- [ ]  Next milestone deterministik.
- [ ]  Store idempotent.
- [ ]  Refresh mempertahankan data.
- [ ]  Empty dan error state tersedia.
- [ ]  CTA Map, Journey, RANI, dan Passport aman.

### Visual

- [ ]  Terlihat seperti Passport premium, bukan dashboard generik.
- [ ]  Satu progress nasional menjadi focal point.
- [ ]  Navy/ivory/gold dominan.
- [ ]  Region colors hanya aksen.
- [ ]  Maksimal 6–8 stamp preview terlihat.
- [ ]  Tidak ada visual dokumen resmi pemerintah.
- [ ]  Motion terkendali.

### Responsive

- [ ]  Desktop stage seimbang.
- [ ]  Tablet stacked nyaman.
- [ ]  Mobile progress langsung terbaca.
- [ ]  Regional rail tidak menyebabkan page overflow.
- [ ]  Long labels aman.
- [ ]  Touch target ≥44px.

### Accessibility

- [ ]  Progress semantic.
- [ ]  Focus visible.
- [ ]  Achievement announce satu kali.
- [ ]  Status tidak hanya warna.
- [ ]  Reduced motion bekerja.
- [ ]  Contrast WCAG AA.
- [ ]  Zoom 200% aman.

### Data dan trust

- [ ]  Tidak ada reward karena view/scroll.
- [ ]  Planned tidak dihitung completed.
- [ ]  Badge requirement explainable.
- [ ]  Tidak ada duplicate reward.
- [ ]  Storage lokal dijelaskan.
- [ ]  Tidak ada data sensitif.

---

## 34. Tahapan Implementasi

### Fase 1 — Audit Passport existing

1. Temukan store/context/hook existing.
2. Audit localStorage key dan schema.
3. Catat semua trigger stempel saat ini.
4. Audit planned/started/completed support.
5. Audit badge dan level logic.
6. Audit route `/passport`.
7. Audit aset Passport.
8. Tentukan compatibility policy.

### Fase 2 — Normalisasi data dan rules

1. Buat canonical types.
2. Buat level registry.
3. Buat badge registry.
4. Buat completion rules.
5. Buat selector regional.
6. Buat next milestone selector.
7. Buat validators.
8. Buat migrations.

### Fase 3 — Store reliability

1. Idempotent province upsert.
2. Journey save as planned.
3. Completion action.
4. Achievement evaluator.
5. Persistence.
6. Hydration.
7. Cross-tab sync.
8. Recovery.

### Fase 4 — Desktop static

1. Header.
2. Passport visual.
3. National progress.
4. Level card.
5. Three-state summary.
6. Regional trail.
7. Latest achievement.
8. Next milestone.
9. Actions.

### Fase 5 — Shared state integration

1. Regional handoff.
2. Selected province context.
3. Journey resume.
4. Map action.
5. Passport full route.
6. RANI context.
7. Browser Back restore.

### Fase 6 — Tablet dan mobile

1. Stacked stage.
2. Compact Passport card.
3. Progress bar.
4. Regional snap rail.
5. CTA hierarchy.
6. Small-screen QA.

### Fase 7 — Motion dan accessibility

1. Entrance.
2. Unlock celebration.
3. Reduced motion.
4. Progress semantics.
5. Keyboard/focus.
6. Live region.
7. Contrast/zoom.

### Fase 8 — QA dan demo polish

1. Data boundaries.
2. Migration/recovery.
3. Responsive.
4. Accessibility.
5. Performance.
6. Demo rehearsal.
7. Production build.

---

## 35. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit store, trigger, route, dan aset | 4–7 jam |
| Data model, rules, validator, migration | 5–9 jam |
| Store reliability dan persistence | 5–9 jam |
| Desktop Passport stage | 7–12 jam |
| Regional, Map, Journey, RANI integration | 5–9 jam |
| Tablet dan mobile | 4–7 jam |
| Motion dan accessibility | 4–7 jam |
| QA, migration, performance, polish | 5–9 jam |

Total realistis:

```
39–69 jam kerja efektif
```

Versi demo recommended:

```
National progress + 7 region + level + latest achievement + next milestone + localStorage
24–38 jam
```

MVP minimum:

```
Completed/38 + level + regional progress + CTA Map/Passport + persistence
14–22 jam
```

---

## 36. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Planned dianggap completed | Reward tidak kredibel | Status terpisah dan copy eksplisit |
| Duplicate stamp | Count salah | Idempotent upsert + unique achievement key |
| localStorage schema lama | Progress hilang | Versioned migration + backup |
| Hydration mismatch | UI lompat/error | Client hydration shell stabil |
| Section terlalu padat | Terlihat seperti dashboard | Snapshot terbatas + full page CTA |
| Semua aset dimuat | Payload berat | Latest/visible only + lazy-load |
| Celebration berulang | Mengganggu | Session/seen guard |
| Badge rule tidak jelas | User bingung | Requirement text + deterministic evaluator |
| Region count tidak sinkron | Progress salah | Canonical 38-province mapping |
| Reset tidak sengaja | Kehilangan data | Reset hanya di full page + confirmation |
| UI menyerupai paspor resmi | Misleading | Digital exploration branding yang jelas |
| RANI menerima terlalu banyak data | Privacy/payload | Kirim summary minimal |
| Route target belum siap | CTA rusak | Fallback ke Map |

---

## 37. Strategi Demo Juri

Flow 60–90 detik:

```
1. Masuk dari Regional Explorer dengan Maluku aktif.
2. Passport Progress menyorot Maluku: 1/2 selesai.
3. Tunjukkan national progress dan level saat ini.
4. Jelaskan planned, started, completed secara ringkas.
5. Tunjukkan latest stamp yang diperoleh dari quiz/mission valid.
6. Next milestone menampilkan Maluku Utara.
7. Klik Lengkapi Wilayah Ini.
8. Map kembali aktif dengan Maluku terfilter.
9. Selesaikan aksi demo yang telah disiapkan.
10. Kembali ke Passport: progress menjadi 2/2.
11. Badge Maluku Spice Explorer terbuka dengan animasi ringan.
12. Klik Buka Passport Lengkap atau Tanya RANI.
```

Nilai yang terlihat:

- Shared state nyata.
- Persistence lokal.
- Reward loop explainable.
- Region ↔ Map ↔ Passport terhubung.
- Badge unlock yang bermakna.
- Tidak bergantung API.

### 37.1 Demo fallback

Jika unlock animation belum stabil:

```
Tampilkan state preloaded 1/2 → klik CTA Map → kembali ke state 2/2 melalui preset demo yang aman → badge tampil statis.
```

Jangan mendemokan migration/recovery kecuali ditanya.

---

## 38. Checklist Handoff

### Desain

- [ ]  Desktop Passport spread.
- [ ]  Tablet stacked.
- [ ]  Mobile compact.
- [ ]  Empty, progress, complete states.
- [ ]  Level states 1–5.
- [ ]  Regional states.
- [ ]  Badge locked/unlocked.
- [ ]  Reduced motion.
- [ ]  Focus states.

### Konten

- [ ]  Heading/subheading.
- [ ]  Status definitions.
- [ ]  Level descriptions.
- [ ]  Badge requirements.
- [ ]  Empty/error copy.
- [ ]  Next milestone reasons.
- [ ]  Storage disclosure.
- [ ]  Bilingual strings.

### Data

- [ ]  38 province IDs.
- [ ]  Seven region mapping.
- [ ]  Level boundaries.
- [ ]  Badge registry.
- [ ]  Completion rules.
- [ ]  Migration path.
- [ ]  Asset manifest.

### Engineering

- [ ]  Store ownership.
- [ ]  Idempotent actions.
- [ ]  Hydration.
- [ ]  Persistence.
- [ ]  Cross-tab sync.
- [ ]  Recovery.
- [ ]  Selectors.
- [ ]  Analytics.
- [ ]  Tests.

---

## 39. Definition of Done

Nusa Passport Progress selesai jika:

1. Section tampil di posisi ke-9 halaman `/explore`.
2. Data berasal dari Passport store existing.
3. Planned, started, dan completed dibedakan.
4. Progress nasional memakai completed/38.
5. Tujuh region dihitung dari mapping canonical.
6. Level dan next level akurat.
7. Badge dibuka melalui rule deterministik.
8. Tidak ada duplicate stamp/reward.
9. Progress tersimpan setelah refresh.
10. Legacy data dapat dimigrasikan dengan aman.
11. Empty, loading, partial, corrupted, dan error states tersedia.
12. Regional Explorer dapat meng-highlight region yang sama.
13. CTA Map mempertahankan layer dan mode.
14. Journey tersimpan sebagai planned.
15. RANI menerima summary minimal.
16. Desktop, tablet, dan mobile nyaman.
17. Keyboard, focus, live region, contrast, zoom, dan reduced motion bekerja.
18. Section tidak memuat seluruh koleksi Passport.
19. Tidak ada broken asset/link.
20. Production build dan tests lulus.
21. Demo unlock dapat diulang tanpa merusak state.
22. Copy menjelaskan penyimpanan lokal dan arti progress.
23. Tidak ada reward karena view atau scroll.
24. Pengguna selalu mendapat langkah berikutnya yang jelas.

---

## 40. Dokumen Terkait

- [Planning Lengkap — Section 8 Regional Explorer NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-8-Regional-Explorer-NUSANTARAYA-4a47555d65e449e5a19452074a9215f7?pvs=21)
- [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21)
- [Planning Lengkap — Section 7 Recommended Journey / Smart Suggestions NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-7-Recommended-Journey-Smart-Suggestions-NUSANTARAYA-089f6287462940a48452cf4298e6a706?pvs=21)
- [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21)
- [Roadmap & Workflow Pengembangan NUSANTARAYA](https://app.notion.com/p/Roadmap-Workflow-Pengembangan-NUSANTARAYA-02a098210a3c83dfb7688147846399f4?pvs=21)
- [FLOWCHART NUSANTARAYA WEB](https://app.notion.com/p/FLOWCHART-NUSANTARAYA-WEB-d9e098210a3c82ef846c01b2b673e84f?pvs=21)

<aside>
🏆

**Target akhir:** Nusa Passport Progress harus membuat pengguna merasa bahwa setiap eksplorasi di NUSANTARAYA meninggalkan jejak yang nyata, dapat dipahami, dan mendorong rasa ingin tahu berikutnya—sekaligus membuktikan kepada juri bahwa Map, Province, Journey, Quiz, Passport, dan RANI bekerja sebagai satu produk digital yang utuh.

</aside>