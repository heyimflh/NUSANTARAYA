'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('About Page Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-about-canvas flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-about-error/10 flex items-center justify-center text-about-error mb-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h2 className="text-3xl font-serif text-about-ink mb-4">Gagal Membaca Halaman</h2>
      <p className="text-about-charcoal max-w-md mb-8">
        Maaf, terjadi kesalahan saat menyusun bagian cerita ini. Anda dapat mencoba memuat ulang atau kembali ke beranda.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-about-ink text-about-paper rounded font-medium hover:bg-about-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron"
        >
          Coba Muat Ulang
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-about-ink text-about-ink rounded font-medium hover:bg-about-paper hover:border-about-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-about-saffron"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
