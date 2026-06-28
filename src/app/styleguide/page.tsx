import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Styleguide Page
 * Menampilkan semua token warna, tipografi, dan komponen dasar.
 */
export default function StyleguidePage() {
  return (
    <div className="nusa-container py-12 space-y-16">
      <div className="space-y-2">
        <h1 className="font-heading text-4xl font-bold">Design System</h1>
        <p className="text-text-secondary">Sistem desain "Heritage Futuristic" (Light Mode)</p>
      </div>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold border-b border-border-light pb-2">1. Colors</h2>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">Background & Surface</h3>
          <div className="flex gap-4 flex-wrap">
            <ColorBox name="Background" color="bg-background" hex="#F8F4EA" />
            <ColorBox name="Surface" color="bg-surface" hex="#FFFFFF" />
            <ColorBox name="Border" color="bg-border" hex="#E8E0CE" />
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted pt-4">Text</h3>
          <div className="flex gap-4 flex-wrap">
            <ColorBox name="Primary" color="bg-text-primary" hex="#0D1B2A" />
            <ColorBox name="Secondary" color="bg-text-secondary" hex="#4A5568" />
            <ColorBox name="Muted" color="bg-text-muted" hex="#9DAEC2" />
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted pt-4">Accents</h3>
          <div className="flex gap-4 flex-wrap">
            <ColorBox name="Gold" color="bg-gold" hex="#C9A84C" />
            <ColorBox name="Merah" color="bg-merah" hex="#8B2020" />
            <ColorBox name="Biru" color="bg-biru" hex="#2D6BE4" />
            <ColorBox name="Hijau" color="bg-hijau" hex="#2D5A27" />
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted pt-4">Regions</h3>
          <div className="flex gap-4 flex-wrap">
            <ColorBox name="Sumatera" color="bg-sumatera" hex="#B85C38" />
            <ColorBox name="Jawa" color="bg-jawa" hex="#2B4C8C" />
            <ColorBox name="Kalimantan" color="bg-kalimantan" hex="#1A5C3A" />
            <ColorBox name="Sulawesi" color="bg-sulawesi" hex="#D4691E" />
            <ColorBox name="Bali & Nusa" color="bg-bali-nusa" hex="#6B3FA0" />
            <ColorBox name="Maluku" color="bg-maluku" hex="#1B7A7A" />
            <ColorBox name="Papua" color="bg-papua" hex="#1A4A7A" />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold border-b border-border-light pb-2">2. Typography</h2>
        <div className="space-y-6 max-w-2xl">
          <div>
            <p className="text-sm text-text-muted mb-1">Heading 1 (Playfair Display)</p>
            <h1>Satu Peta, Ribuan Cerita</h1>
          </div>
          <div>
            <p className="text-sm text-text-muted mb-1">Heading 2 (Playfair Display)</p>
            <h2>Jelajahi Pesona Nusantara</h2>
          </div>
          <div>
            <p className="text-sm text-text-muted mb-1">Heading 3 (Playfair Display)</p>
            <h3>Warisan Budaya Indonesia</h3>
          </div>
          <div>
            <p className="text-sm text-text-muted mb-1">Body Text (Inter)</p>
            <p>Jelajahi 38 provinsi Indonesia melalui peta interaktif, arsip budaya, atlas kuliner, route planner, dan digital passport dalam satu pengalaman premium yang menggabungkan warisan masa lalu dan masa depan.</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold border-b border-border-light pb-2">3. Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <Button variant="gold">Gold (Primary)</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="merah">Merah</Button>
          <Button variant="biru">Biru</Button>
          <Button variant="gold" size="sm">Small</Button>
          <Button variant="gold" size="lg">Large</Button>
          <Button variant="gold" disabled>Disabled</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold border-b border-border-light pb-2">4. Badges</h2>
        <div className="flex gap-3 flex-wrap">
          <Badge variant="gold">Gold</Badge>
          <Badge variant="merah">Merah</Badge>
          <Badge variant="biru">Biru</Badge>
          <Badge variant="hijau">Hijau</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className="flex gap-3 flex-wrap mt-4">
          <Badge variant="sumatera">Sumatera</Badge>
          <Badge variant="jawa">Jawa</Badge>
          <Badge variant="kalimantan">Kalimantan</Badge>
          <Badge variant="sulawesi">Sulawesi</Badge>
          <Badge variant="baliNusa">Bali & Nusa Tenggara</Badge>
          <Badge variant="maluku">Maluku</Badge>
          <Badge variant="papua">Papua</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold border-b border-border-light pb-2">5. Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Provinsi DI Yogyakarta</CardTitle>
              <CardDescription>Jawa • Daerah Istimewa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">
                Daerah Istimewa Yogyakarta adalah sebuah provinsi di Indonesia yang merupakan peleburan Negara Kesultanan Yogyakarta dan Negara Kadipaten Paku Alaman.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="gold" className="w-full">Lihat Detail</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}

function ColorBox({ name, color, hex }: { name: string; color: string; hex: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`w-24 h-24 rounded-2xl shadow-sm border border-border/50 ${color}`} />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-text-muted">{hex}</p>
      </div>
    </div>
  );
}
