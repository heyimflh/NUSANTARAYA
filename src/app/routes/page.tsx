import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RoutesPage() {
  return (
    <div className="nusa-container py-12 text-center space-y-6 max-w-2xl mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-biru/10 text-biru flex items-center justify-center mx-auto text-2xl">🗺️</div>
      <h1 className="font-heading text-3xl font-bold">Nusa Route Planner</h1>
      <p className="text-text-secondary">Buat rute perjalanan Indonesia berdasarkan durasi, minat, budget, dan tipe traveler. Segera hadir.</p>
      <Link href="/map"><Button variant="outline">Kembali ke Peta</Button></Link>
    </div>
  );
}
