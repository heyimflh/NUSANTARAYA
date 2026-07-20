export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-label="Memuat halaman...">
      <div className="flex flex-col items-center gap-6">
        {/* Animated pulse rings */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-[#2D2419]/10 animate-ping" />
          <div className="absolute inset-2 rounded-full border-2 border-[#C4A35A]/30 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-[#2D2419]/5 animate-pulse" />
        </div>

        {/* Loading text */}
        <p
          className="text-sm text-[#2D2419]/40 tracking-[0.3em] uppercase animate-pulse"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Memuat...
        </p>
      </div>
    </div>
  );
}
