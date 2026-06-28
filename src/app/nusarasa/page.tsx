import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NusaRasaPage() {
  return (
    <div className="nusa-container py-12 text-center space-y-6 max-w-2xl mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-sulawesi/10 text-sulawesi flex items-center justify-center mx-auto text-2xl">🍛</div>
      <h1 className="font-heading text-3xl font-bold">NusaRasa</h1>
      <p className="text-text-secondary">Atlas Kuliner Nusantara — jelajahi ratusan kuliner Indonesia berdasarkan peta, rasa, sejarah, dan cerita. Segera hadir.</p>
      <Link href="/map"><Button variant="outline">Kembali ke Peta</Button></Link>
    </div>
  );
}
