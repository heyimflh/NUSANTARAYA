import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArchivePage() {
  return (
    <div className="nusa-container py-12 text-center space-y-6 max-w-2xl mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-merah/10 text-merah flex items-center justify-center mx-auto text-2xl">📚</div>
      <h1 className="font-heading text-3xl font-bold">Nusa Archive</h1>
      <p className="text-text-secondary">Ensiklopedia budaya Indonesia — rumah adat, tarian, alat musik, pakaian adat, upacara, cerita rakyat, aksara, dan kerajinan. Segera hadir.</p>
      <Link href="/map"><Button variant="outline">Kembali ke Peta</Button></Link>
    </div>
  );
}
