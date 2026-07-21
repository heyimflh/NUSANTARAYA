"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function FutureError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Future route error:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center p-6 text-center future-page-context">
      <div className="w-16 h-16 rounded-full bg-[#E6DDC9] flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8 text-[#983F34]" />
      </div>
      <h2 className="text-2xl font-playfair text-[#29231D] mb-4">
        Gagal Memuat Observatorium
      </h2>
      <p className="text-base text-[#766F63] max-w-md mb-8">
        Terjadi kendala saat memuat data Nusa Future. Silakan coba kembali atau pastikan koneksi Anda stabil.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#37332C] text-[#FFFDF6] rounded-full hover:bg-black transition-colors"
      >
        <RefreshCcw className="w-4 h-4" />
        Coba Lagi
      </button>
    </div>
  );
}
