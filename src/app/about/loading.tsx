export const metadata = {
  title: 'Tentang NUSANTARAYA — Satu Peta, Ribuan Cerita',
  description: 'NUSANTARAYA adalah Digital Twin Nusantara yang menghubungkan 38 provinsi, tujuh pilar, budaya, peta, rasa, perjalanan, pembelajaran, dan masa depan digital.',
};

export default function Loading() {
  return (
    <div className="min-h-screen bg-about-canvas flex flex-col items-center justify-center">
      {/* Simple animated loading state using about theme colors */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-2 border-about-line rounded-full"></div>
        <div className="absolute inset-0 border-2 border-t-about-saffron border-r-about-terracotta border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-about-charcoal font-serif text-xl animate-pulse">Membuka lembaran Nusantara...</p>
    </div>
  );
}
