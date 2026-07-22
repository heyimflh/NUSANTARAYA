'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutPrinciples } from '@/data/about/principles';

const licenseFiles = [
  "ATTRIBUTION (1).md",
  "ATTRIBUTION.md",
  "LICENSE-ATTRIBUTION.md",
  "LICENSE-IMAGES-MALUKU-UTARA.md",
  "LICENSES-BENGKULU-IMAGES.md",
  "LICENSES-kalimantan-selatan.md",
  "LICENSES-kepulauan-bangka-belitung.md",
  "LICENSES-maluku-images.md",
  "LICENSES.md",
  "LISENSI-ASET-GAMBAR-PAPUA.md",
  "LISENSI-GAMBAR-JAWA-TENGAH.md",
  "LISENSI-GAMBAR-PAPUA-BARAT-DAYA.md",
  "LISENSI-GAMBAR-PAPUA-BARAT.md",
  "LISENSI-GAMBAR-PAPUA-PEGUNUNGAN.md",
  "LISENSI-GAMBAR-PAPUA-TENGAH.md",
  "LISENSI-GAMBAR-SUMATERA-SELATAN.md",
  "LISENSI-GAMBAR-jawa-timur.md",
  "LISENSI-GAMBAR-kalimantan-tengah.md",
  "LISENSI_GAMBAR_BANTEN.md",
  "LISENSI_GAMBAR_DI_YOGYAKARTA.md",
  "LISENSI_GAMBAR_DKI_JAKARTA.md",
  "LISENSI_GAMBAR_KALIMANTAN_BARAT.md",
  "LISENSI_GAMBAR_SULAWESI_UTARA.md",
  "LISENSI_GAMBAR_sulawesi-tenggara.md",
  "gorontalo-image-licenses.md",
  "lisensi-gambar-bali.md",
  "lisensi-gambar-jawa-barat.md",
  "lisensi-gambar-kalimantan-utara.md",
  "lisensi-gambar-sulawesi-selatan.md",
  "lisensi-gambar-sulawesi-tengah.md"
];

export function TrustStewardshipDesk() {
  const [isCorrectionOpen, setIsCorrectionOpen] = useState(false);

  return (
    <section id="trust" className="relative py-24 md:py-32 bg-about-canvas">
      <div className="nusa-container relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-about-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">Integritas Data</span>
          <h2 className="text-3xl md:text-5xl font-serif text-about-ink mb-6">Kepercayaan, Sumber, & Transparansi</h2>
          <p className="text-about-charcoal/80 text-lg leading-relaxed">
            Membangun kembaran digital dari warisan budaya yang nyata membutuhkan tanggung jawab yang besar. Kami berkomitmen untuk selalu transparan mengenai dari mana data kami berasal, bagaimana kami mengkurasinya, dan siapa yang memiliki hak cipta aslinya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Content Area (8 columns) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
             
             {/* Transparency & Licenses Card */}
             <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-about-line/40 overflow-hidden relative h-full flex flex-col">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                
                <h3 className="text-2xl font-serif text-about-ink mb-4 relative z-10">Atribusi & Lisensi Terbuka (Open Source)</h3>
                <p className="text-about-charcoal/80 mb-6 relative z-10 leading-relaxed">
                  Semua aset visual, ilustrasi, dan foto yang digunakan di dalam platform NUSANTARAYA bersumber dari kreator, lembaga pemerintah, dan kontributor Wikimedia Commons. Kami telah menyiapkan puluhan dokumen lisensi yang mencakup atribusi spesifik untuk seluruh 38 Provinsi di Indonesia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 mb-8">
                   <div className="bg-[#F8F7F4] p-4 rounded-xl border border-about-line/30 flex items-start gap-4 hover:border-about-saffron transition-colors">
                      <div className="w-10 h-10 rounded-full bg-about-saffron/10 flex items-center justify-center shrink-0">
                         <span className="text-about-saffron font-bold">30+</span>
                      </div>
                      <div>
                         <h4 className="font-semibold text-about-ink text-sm mb-1">Dokumen Lisensi</h4>
                         <p className="text-xs text-about-muted">Akses publik bebas di repositori kami.</p>
                      </div>
                   </div>
                   <div className="bg-[#F8F7F4] p-4 rounded-xl border border-about-line/30 flex items-start gap-4 hover:border-about-saffron transition-colors">
                      <div className="w-10 h-10 rounded-full bg-about-terracotta/10 flex items-center justify-center shrink-0">
                         <span className="text-about-terracotta font-bold">CC</span>
                      </div>
                      <div>
                         <h4 className="font-semibold text-about-ink text-sm mb-1">Creative Commons</h4>
                         <p className="text-xs text-about-muted">Kepatuhan ketat lisensi CC-BY/SA.</p>
                      </div>
                   </div>
                </div>

                {/* File Explorer UI for Licenses */}
                <div className="mt-auto border border-about-line/50 rounded-2xl overflow-hidden bg-[#FBFBF9] relative z-10">
                  <div className="bg-about-paper border-b border-about-line/50 px-4 py-3 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-about-muted">
                        <svg className="w-4 h-4 text-about-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        /public/assets/licence
                     </div>
                     <span className="text-[10px] sm:text-xs text-about-muted font-medium bg-about-line/30 px-2 py-1 rounded">{licenseFiles.length} files</span>
                  </div>
                  <div className="p-2 h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-about-line scrollbar-track-transparent">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {licenseFiles.map(file => (
                          <a 
                            key={file} 
                            href={`/assets/licence/${file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-about-line/30 transition-all text-sm group"
                          >
                             <svg className="w-4 h-4 text-about-muted group-hover:text-about-terracotta transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                             </svg>
                             <span className="text-about-charcoal truncate font-mono text-[11px] sm:text-xs">{file}</span>
                          </a>
                        ))}
                     </div>
                  </div>
                </div>

             </div>
          </div>

          {/* Sidebar / Correction Desk (4 columns) */}
          <div className="lg:col-span-4 h-full">
             
             <div className="bg-about-ink p-8 rounded-3xl shadow-xl text-white h-full flex flex-col">
                <div className="flex-grow">
                   <h3 className="text-2xl font-serif mb-4">Temukan Kekeliruan?</h3>
                   <p className="text-white/70 text-sm mb-6 leading-relaxed">
                     Nusantara terlalu luas untuk luput dari salah. Kami sangat terbuka untuk koreksi berbasis bukti untuk terus menyempurnakan ensiklopedia hidup ini.
                   </p>
                   
                   <div className="bg-white/5 rounded-2xl p-5 mb-8 border border-white/10">
                      <p className="text-white/80 text-sm font-medium mb-3">Tingkat Kurasi Data:</p>
                      <ul className="space-y-2">
                        {['Lembaga Pemerintah', 'Jurnal Akademik', 'Arsip Museum Nasional', 'Tetua Adat & Komunitas Lokal'].map((src, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-about-saffron mt-1 shrink-0"></span>
                            {src}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                
                <div className="mt-auto">
                   <button
                     onClick={() => setIsCorrectionOpen(!isCorrectionOpen)}
                     aria-expanded={isCorrectionOpen}
                     className="w-full text-left bg-white/10 backdrop-blur border border-white/20 px-6 py-4 rounded-xl text-white font-medium hover:bg-white/20 transition-all flex items-center justify-between group"
                   >
                     Ajukan Koreksi
                     <span className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transform transition-all duration-300 group-hover:bg-about-saffron ${isCorrectionOpen ? 'rotate-180' : ''}`}>↓</span>
                   </button>

                   <AnimatePresence>
                     {isCorrectionOpen && (
                       <motion.div
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         className="overflow-hidden mt-4"
                       >
                         <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-sm">
                           <ol className="list-decimal pl-4 space-y-3 text-white/80 mb-4">
                             <li>Pilih jenis isu (Geografis, Sejarah, Hak Cipta, dll).</li>
                             <li>Sertakan referensi dari sumber valid.</li>
                             <li>Tim kurator lokal akan meninjau laporan.</li>
                           </ol>
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
