import { notFound } from "next/navigation";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function DishDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const dish = CANONICAL_DISHES.find(d => d.slug === resolvedParams.slug);

  if (!dish) {
    // We can render an editorial 404 here instead of the default Next.js notFound if we want,
    // but the requirement says "editorial 404; suggested dishes; kembali ke NusaRasa; no crash".
    // Let's return a custom UI.
    return (
      <main className="w-full min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-serif text-[var(--rasa-cacao)] mb-4">Piring Kosong</h1>
        <p className="text-[var(--rasa-muted)] max-w-md mb-8">
          Hidangan yang Anda cari mungkin belum tercatat di arsip kuliner kami, atau halamannya telah dipindahkan.
        </p>
        <Link 
          href="/rasa" 
          className="px-6 py-3 border border-[var(--rasa-chili)] text-[var(--rasa-chili)] hover:bg-[var(--rasa-paper-deep)] transition-colors"
        >
          Kembali ke NusaRasa
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full flex flex-col items-center pb-24">
      {/* 1. Editorial hero */}
      <section className="w-full max-w-[1440px] px-4 md:px-8 lg:px-12 pt-8 pb-16">
        <Link 
          href="/rasa" 
          className="inline-flex items-center gap-2 text-[var(--rasa-muted)] hover:text-[var(--rasa-chili)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Atlas Kuliner</span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
             {/* We will build this out fully, for now establishing layout */}
             <div className="aspect-[4/3] bg-[var(--rasa-paper-deep)] overflow-hidden relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={dish.media[0]?.src} 
                  alt={dish.media[0]?.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
             </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 pt-4 md:pt-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] block mb-2">{dish.categoryId.replace("-", " ")}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--rasa-cacao)] leading-tight">
                {dish.localeContent.id.title}
              </h1>
            </div>
            <p className="text-lg text-[var(--rasa-ink)] font-light leading-relaxed">
              {dish.localeContent.id.summary}
            </p>
            <div className="h-[1px] w-full bg-[var(--rasa-line)] my-2"></div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-3">Karakter Rasa</h3>
              <div className="flex flex-wrap gap-2">
                {dish.flavorIds.map(f => (
                  <span key={f} className="px-3 py-1 border border-[var(--rasa-line)] text-[var(--rasa-chili)] text-sm rounded-none bg-[var(--rasa-paper)] capitalize">
                    {f.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Identity ledger & Rasa */}
      <section className="w-full max-w-[900px] px-4 mx-auto py-12 flex flex-col gap-12">
        <div>
          <h2 className="text-2xl font-serif text-[var(--rasa-cacao)] mb-4">Konteks & Asal Usul</h2>
          <p className="text-[var(--rasa-ink)] leading-relaxed">
            {dish.localeContent.id.originContext}
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-serif text-[var(--rasa-cacao)] mb-4">Bahan Utama</h2>
          <ul className="list-disc pl-5 text-[var(--rasa-ink)] flex flex-col gap-2">
            {dish.localeContent.id.keyIngredients.map(ing => (
              <li key={ing} className="capitalize">{ing.replace("-", " ")}</li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Source and Reviewed Date */}
      <section className="w-full max-w-[900px] px-4 mx-auto py-12 border-t border-[var(--rasa-line)]">
         <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-sm text-[var(--rasa-muted)]">
            <div>
              <span className="font-semibold text-[var(--rasa-cacao)]">Sumber Validasi:</span> {dish.sourceRefs.join(", ")}
            </div>
            <div>
               Diperbarui pada {new Date(dish.updatedAt).toLocaleDateString("id-ID")}
            </div>
         </div>
         <p className="text-xs text-[var(--rasa-muted)] mt-6 italic">
           Bahan dan cara penyajian dapat berbeda menurut daerah, rumah tangga, atau penyaji. Jika memiliki alergi atau kebutuhan diet tertentu, konfirmasikan langsung kepada penyaji.
         </p>
      </section>
    </main>
  );
}
