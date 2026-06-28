import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function HeroNavbar() {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 md:px-6">
      <div className="flex items-center justify-between rounded-full bg-black/20 px-6 py-3 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-heading tracking-wide text-white drop-shadow-md">
          NUSAN<span className="text-amber-400">TARAYA</span>
        </Link>

        {/* Center Menu (Desktop only) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <Link href="/map" className="relative group transition-colors hover:text-white drop-shadow-sm">
            Peta
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/arsip" className="relative group transition-colors hover:text-white drop-shadow-sm">
            Arsip Budaya
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/routes" className="relative group transition-colors hover:text-white drop-shadow-sm">
            Route Planner
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/cerita" className="relative group transition-colors hover:text-white drop-shadow-sm">
            Cerita Rakyat
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-white hover:text-amber-400 transition">
            <Search size={20} />
          </button>
          <div className="hidden md:flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-xs font-semibold text-white border border-white/10">
            <button className="hover:text-amber-400 transition">ID</button>
            <span className="opacity-40">|</span>
            <button className="opacity-50 hover:opacity-100 hover:text-amber-400 transition">EN</button>
          </div>
          <button className="md:hidden text-white hover:text-amber-400 transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
