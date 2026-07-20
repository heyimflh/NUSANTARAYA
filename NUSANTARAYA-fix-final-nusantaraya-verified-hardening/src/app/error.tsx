"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Route Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      <h2 className="text-3xl font-playfair font-bold text-[#10233F]">
        Terjadi Kesalahan
      </h2>
      
      <p className="text-gray-600 max-w-md mx-auto">
        Maaf, halaman atau komponen yang Anda cari gagal dimuat. Kami telah mencatat masalah ini untuk diperbaiki.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#D8B56D] text-[#10233F] font-bold rounded-full hover:bg-[#c4a159] transition-colors shadow-sm"
        >
          Coba Muat Ulang
        </button>
        
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-white text-[#10233F] font-bold rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
