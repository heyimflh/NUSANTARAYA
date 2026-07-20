import Link from "next/link";

export default function ArchiveNotFound() {
  return (
    <div className="archive-page min-h-screen bg-[var(--archive-canvas)] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <h1 className="archive-display text-[var(--archive-ink)] mb-4">404</h1>
        <h2 className="archive-h3 mb-4">Arsip Tidak Ditemukan</h2>
        <p className="archive-body text-[var(--archive-muted)] mb-8">
          Arsip yang Anda cari mungkin telah dipindahkan, dihapus, atau masih dalam tahap kurasi.
        </p>
        <Link
          href="/archive"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--archive-ink)] text-[var(--archive-canvas)] font-medium hover:bg-[var(--archive-charcoal)] transition-colors"
        >
          Kembali ke Nusa Archive
        </Link>
      </div>
    </div>
  );
}
