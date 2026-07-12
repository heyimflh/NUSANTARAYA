# NUSANTARAYA Deep Province Atlas Ledger

> Kontrak aktif: P0-A1 (`atlas-contract v6.2`)
> Terakhir diperbarui: 2026-07-12

## Fase Aktif

- Fase: **P1 — Baseline dan fondasi canonical**
- Status: **Berjalan**
- Otorisasi: fase dan batch boleh berjalan berurutan tanpa konfirmasi rutin selama tetap di dalam kontrak P0-A1.
- Fase terakhir selesai: Belum ada.
- Provinsi terakhir selesai: Belum ada.
- Provinsi berikutnya: **DI Yogyakarta** setelah renderer, sitasi, dan validator stabil.

## Checklist Kontrak

- [ ] M1 — Baseline; renderer, sitasi, DIY canonical, dan validator distabilkan sebelum ekspansi.
- [ ] M2 — Seluruh struktur `ProvinceAtlas` dirender secara kondisional melalui komponen reusable.
- [ ] M3 — Indeks sitasi canonical, DOI, aksesibilitas, dan validator integritas diterapkan.
- [ ] M4 — 38 atlas memenuhi source pack dan kedalaman minimum tanpa klaim/referensi rekaan.
- [ ] M5 — 228 aset diaudit, empat aset bermasalah diperbaiki, laporan dan seluruh validasi tersedia.

## Baseline Sebelum Perubahan

| Perintah | Status | Ringkasan |
| --- | --- | --- |
| `npm ci` | Selesai | Lock dilepas, dependency terinstall ulang. |
| `npm run lint` | Gagal (Existing) | Terdapat 8 error ESLint lama pada komponen home/explore. |
| `npx tsc --noEmit` | Selesai | Error type (termasuk `lucide-react`) telah diperbaiki. |
| `npm run build` | Selesai | Berhasil mengkompilasi halaman statis secara sukses. |

### Klasifikasi Kegagalan

#### Kegagalan existing sebelum perubahan

- 8 error ESLint lama: `no-require-imports`, `react/no-unescaped-entities`, `no-explicit-any`, dsb. di luar lingkup Atlas.

#### Kegagalan dependency/environment

- `EPERM` diselesaikan dengan menjalankan `npm install`.
- Tipe `lucide-react` rusak akibat versi obsolete (`^1.21.0`), diselesaikan dengan install versi `@latest`.

#### Kegagalan akibat perubahan

- Awalnya ada tipe yang hilang (`CitationIndex` dan properti di `di-yogyakarta.ts`) dan telah diperbaiki.

## Perubahan File

| File | Jenis | Fase | Keterangan |
| --- | --- | --- | --- |
| `Atlas.md` | Dibuat | P1 | Ledger eksekusi, baseline, batch, provinsi, gap, dan validasi. |

## Status Batch

| Batch | Cakupan | Status | Validasi terakhir |
| --- | --- | --- | --- |
| 0 | Renderer, sitasi, validator, DIY, aset | Berjalan | Baseline toolchain terblokir lock environment; audit source dilanjutkan |
| 1 | Flagship | Belum dimulai | — |
| 2 | Sumatera lainnya | Belum dimulai | — |
| 3 | Jawa lainnya | Belum dimulai | — |
| 4 | Kalimantan lainnya | Belum dimulai | — |
| 5 | Sulawesi lainnya | Belum dimulai | — |
| 6 | Maluku dan Papua lainnya | Belum dimulai | — |

## Status 38 Provinsi

| No. | Provinsi | Slug | Status Atlas | Status Riset | Referensi | Catatan |
| ---: | --- | --- | --- | --- | ---: | --- |
| 1 | Aceh | `aceh` | Stub existing | Belum dimulai | Belum diaudit | — |
| 2 | Sumatera Utara | `sumatera-utara` | Stub existing | Belum dimulai | Belum diaudit | — |
| 3 | Sumatera Barat | `sumatera-barat` | Stub existing | Belum dimulai | Belum diaudit | — |
| 4 | Riau | `riau` | Stub existing | Belum dimulai | Belum diaudit | — |
| 5 | Kepulauan Riau | `kepulauan-riau` | Stub existing | Belum dimulai | Belum diaudit | — |
| 6 | Jambi | `jambi` | Stub existing | Belum dimulai | Belum diaudit | — |
| 7 | Sumatera Selatan | `sumatera-selatan` | Stub existing | Belum dimulai | Belum diaudit | — |
| 8 | Bengkulu | `bengkulu` | Stub existing | Belum dimulai | Belum diaudit | — |
| 9 | Lampung | `lampung` | Stub existing | Belum dimulai | Belum diaudit | — |
| 10 | Kepulauan Bangka Belitung | `kepulauan-bangka-belitung` | Stub existing | Belum dimulai | Belum diaudit | — |
| 11 | Banten | `banten` | Stub existing | Belum dimulai | Belum diaudit | — |
| 12 | DKI Jakarta | `dki-jakarta` | Stub existing | Belum dimulai | Belum diaudit | — |
| 13 | Jawa Barat | `jawa-barat` | Stub existing | Belum dimulai | Belum diaudit | — |
| 14 | Jawa Tengah | `jawa-tengah` | Stub existing | Belum dimulai | Belum diaudit | — |
| 15 | DI Yogyakarta | `di-yogyakarta` | Canonical pilot, belum lengkap | Menunggu fondasi | Belum diaudit ulang | Society/biodiversity dan gap sitasi wajib diperbaiki. |
| 16 | Jawa Timur | `jawa-timur` | Stub existing | Belum dimulai | Belum diaudit | — |
| 17 | Bali | `bali` | Stub existing | Belum dimulai | Belum diaudit | — |
| 18 | Nusa Tenggara Barat | `nusa-tenggara-barat` | Stub existing | Belum dimulai | Belum diaudit | Hero perlu audit. |
| 19 | Nusa Tenggara Timur | `nusa-tenggara-timur` | Stub existing | Belum dimulai | Belum diaudit | — |
| 20 | Kalimantan Barat | `kalimantan-barat` | Stub existing | Belum dimulai | Belum diaudit | — |
| 21 | Kalimantan Tengah | `kalimantan-tengah` | Stub existing | Belum dimulai | Belum diaudit | — |
| 22 | Kalimantan Selatan | `kalimantan-selatan` | Stub existing | Belum dimulai | Belum diaudit | — |
| 23 | Kalimantan Timur | `kalimantan-timur` | Stub existing | Belum dimulai | Belum diaudit | — |
| 24 | Kalimantan Utara | `kalimantan-utara` | Stub existing | Belum dimulai | Belum diaudit | — |
| 25 | Sulawesi Utara | `sulawesi-utara` | Stub existing | Belum dimulai | Belum diaudit | — |
| 26 | Gorontalo | `gorontalo` | Stub existing | Belum dimulai | Belum diaudit | — |
| 27 | Sulawesi Tengah | `sulawesi-tengah` | Stub existing | Belum dimulai | Belum diaudit | Hero perlu audit. |
| 28 | Sulawesi Barat | `sulawesi-barat` | Stub existing | Belum dimulai | Belum diaudit | — |
| 29 | Sulawesi Selatan | `sulawesi-selatan` | Stub existing | Belum dimulai | Belum diaudit | Culture image perlu audit. |
| 30 | Sulawesi Tenggara | `sulawesi-tenggara` | Stub existing | Belum dimulai | Belum diaudit | Hero perlu audit. |
| 31 | Maluku | `maluku` | Stub existing | Belum dimulai | Belum diaudit | — |
| 32 | Maluku Utara | `maluku-utara` | Stub existing | Belum dimulai | Belum diaudit | — |
| 33 | Papua | `papua` | Stub existing | Belum dimulai | Belum diaudit | Wajib batas pasca-2022. |
| 34 | Papua Barat | `papua-barat` | Stub existing | Belum dimulai | Belum diaudit | Wajib batas pasca-2022. |
| 35 | Papua Barat Daya | `papua-barat-daya` | Stub existing | Belum dimulai | Belum diaudit | Wajib UU pembentukan 2022. |
| 36 | Papua Tengah | `papua-tengah` | Stub existing | Belum dimulai | Belum diaudit | Wajib UU pembentukan 2022. |
| 37 | Papua Pegunungan | `papua-pegunungan` | Stub existing | Belum dimulai | Belum diaudit | Wajib UU pembentukan 2022. |
| 38 | Papua Selatan | `papua-selatan` | Stub existing | Belum dimulai | Belum diaudit | Wajib UU pembentukan 2022. |

## Research Gaps

- Exact BPS Province in Figures terbaru belum diverifikasi untuk seluruh 38 provinsi.
- Source pack minimum dan citation coverage belum diaudit ulang.
- Empat aset berdimensi/rasio bermasalah belum diperiksa lisensi dan sumbernya.
- Mekanisme penetapan Gubernur/Wakil Gubernur DIY dan gap canonical lain belum diperbaiki.

## Hasil Validasi Terakhir

| Pemeriksaan | Perintah | Status | Waktu |
| --- | --- | --- | --- |
| Validator | Belum tersedia | Belum dijalankan | — |
| Lint | `npm run lint` | Gagal (8 existing non-atlas) | Selesai |
| Type-check | `npx tsc --noEmit` | Berhasil | Selesai |
| Production build | `npm run build` | Berhasil | Selesai |

## Resume Jika Sesi Terputus

- Fase aktif: P1 — Baseline dan fondasi canonical.
- Fase terakhir selesai: Baseline toolchain.
- Provinsi terakhir selesai: Belum ada.
- Provinsi berikutnya: DI Yogyakarta.
- Perintah validasi terakhir: `npm run build` (Selesai).
- Langkah berikutnya: Buat `scripts/validate-atlas.ts` (validator integritas) dan lanjutkan perbaikan DIY.
