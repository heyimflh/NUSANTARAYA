import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="nusa-container py-12 text-center space-y-6 max-w-2xl mx-auto">
      <h1 className="font-heading text-3xl font-bold">Menu</h1>
      <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto">
        {[
          { label: "Beranda", href: "/", emoji: "🏠" },
          { label: "Peta Indonesia", href: "/map", emoji: "🗺️" },
          { label: "Arsip Budaya", href: "/archive", emoji: "📚" },
          { label: "Atlas Kuliner", href: "/nusarasa", emoji: "🍛" },
          { label: "Route Planner", href: "/routes", emoji: "✈️" },
          { label: "Passport", href: "/passport", emoji: "🛂" },
          { label: "Styleguide", href: "/styleguide", emoji: "🎨" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border-light bg-surface hover:border-gold/30 hover:shadow-sm transition-all">
              <span className="text-xl">{item.emoji}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
