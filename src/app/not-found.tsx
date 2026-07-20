import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-lg mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/assets/branding/NUSANTARAYA_logo-full.webp"
            alt="NUSANTARAYA"
            width={200}
            height={48}
            className="opacity-60"
          />
        </div>

        {/* 404 Number */}
        <div className="relative">
          <h1
            className="text-[120px] sm:text-[160px] font-bold leading-none tracking-tighter opacity-[0.07] select-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <p
                className="text-2xl sm:text-3xl font-semibold text-[#2D2419]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Halaman Tidak Ditemukan
              </p>
              <p className="text-sm text-[#2D2419]/60 max-w-xs mx-auto leading-relaxed">
                Sepertinya kamu tersesat di peta Nusantara.
                Jalan ini belum terbuka — tapi masih banyak cerita yang menunggu.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Image
          src="/assets/branding/ornamen-divider.svg"
          alt=""
          aria-hidden
          width={300}
          height={16}
          className="mx-auto opacity-40"
          unoptimized
        />

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#2D2419] rounded-full hover:bg-[#2D2419]/90 transition-colors"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2D2419] border border-[#2D2419]/20 rounded-full hover:bg-[#2D2419]/5 transition-colors"
          >
            Jelajahi Peta
          </Link>
        </div>
      </div>
    </div>
  );
}
