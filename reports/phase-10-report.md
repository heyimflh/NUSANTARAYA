# Phase 10 Report: Legacy Cleanup

## 1. Registry Route Canonical
Source of truth data route saat ini sepenuhnya bergantung pada registry canonical di `src/data/routes/routePresets.ts`, beserta resolver terkait (`itineraries`, `mapRouteToViewModel`, dsb).
File `src/data/routes.json` (legacy data) sudah dipastikan tidak memiliki satu pun consumer di seluruh runtime, build, maupun testing script.

## 2. Status Akhir routes.json
`src/data/routes.json` telah **dihapus sepenuhnya** karena sudah tidak digunakan. Tidak ada migrasi consumer baru karena registry canonical sudah mengambil alih keseluruhan logic aplikasi sejak Fase 1.

## 3. Aturan Local Asset
Setiap referensi path `heroImage`, `soundscape`, atau aset media lain dalam registry (seperti di `provinces.json`) **wajib** merujuk pada file lokal riil yang ada di folder `public/`.

## 4. Penyelesaian Aset Unavailable
- **heroImage (Yogyakarta)**: `/assets/placeholder-jogja.jpg` yang sebelumnya menyebabkan request tidak valid, kini telah dikoreksi menggunakan aset aktual yang sudah tersedia: `/assets/province/di-yogyakarta/hero.webp`.
- **soundscape (Yogyakarta)**: File `/assets/audio/jogja-gamelan.mp3` belum tersedia di folder `public/assets/audio/` (folder tersebut kosong/tidak ada). Atribut `soundscape` untuk "di-yogyakarta" telah **dihapus** dari `provinces.json` untuk mencegah broken link.

## 5. UI/UX Untuk Aset Unavailable
Frontend secara _graceful_ merender province yang belum memiliki `soundscape` tanpa menampilkan error atau UI audio player abal-abal, sesuai dengan null check bawaan TypeScript yang mengontrol kemunculan komponen tersebut.

## 6. Validator Aset
Telah ditambahkan file `scripts/validate-assets.ts` dan script package `"validate:assets"`.
Validator ini mem-parsing objek data `provinces.json` dan `ROUTE_PRESETS`, lalu memastikan setiap path lokal yang diawali dengan `/assets/` memang eksis di sistem direktori (`public/...`).

Cara penggunaan:
`npm run validate:assets`

