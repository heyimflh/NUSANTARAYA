"use client";

import { useState } from "react";
import { Info, HelpCircle, AlertTriangle } from "lucide-react";
import type { RouteBudgetEstimate } from "@/lib/routes/readiness/routeReadinessSchema";

interface BudgetModuleProps {
  budget?: RouteBudgetEstimate;
  locale: "id" | "en";
}

export function BudgetModule({ budget, locale }: BudgetModuleProps) {
  const [basis, setBasis] = useState<"per-person" | "party">(budget?.basis || "per-person");
  const [expanded, setExpanded] = useState(false);

  if (!budget) {
    return (
      <div id="readiness-budget" className="py-8 scroll-mt-24">
        <h3 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-4">Estimasi Anggaran</h3>
        <p className="text-[#5C6470]">Informasi anggaran belum tersedia untuk rute ini.</p>
      </div>
    );
  }

  const multiplier = basis === "party" ? budget.partySize : 1;
  const formatter = new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US", {
    style: "currency",
    currency: budget.total.currency,
    maximumFractionDigits: 0,
  });

  const displayMin = formatter.format(budget.total.min * multiplier);
  const displayMax = formatter.format(budget.total.max * multiplier);

  return (
    <div id="readiness-budget" className="py-8 scroll-mt-24 border-b border-[#E8E0CE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h3 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-2">Estimasi Anggaran</h3>
          <div className="flex items-center gap-2 mt-4 bg-[#F8F4EA] p-4 rounded-2xl border border-[#E8E0CE]">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#5C6470] uppercase tracking-wider mb-1">Total Kisaran</span>
              <span className="text-3xl font-bold text-[#27211C]">
                {displayMin} – {displayMax}
              </span>
              <span className="text-sm text-[#5C6470] mt-1">
                {basis === "per-person" ? "Per orang" : `Total rombongan (${budget.partySize} orang)`}
                {budget.confidence === "estimated" && " · Estimasi"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-[#E8E0CE] shrink-0">
          <button
            onClick={() => setBasis("per-person")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              basis === "per-person" ? "bg-[#27211C] text-white" : "text-[#5C6470] hover:bg-[#F8F4EA]"
            }`}
          >
            Per Orang
          </button>
          <button
            onClick={() => setBasis("party")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              basis === "party" ? "bg-[#27211C] text-white" : "text-[#5C6470] hover:bg-[#F8F4EA]"
            }`}
          >
            Total Rombongan
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-[#E8E0CE] overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between p-6 hover:bg-[#F8F4EA] transition-colors text-left"
          aria-expanded={expanded}
        >
          <span className="font-semibold text-[#0D1B2A]">Komposisi Biaya & Asumsi</span>
          <span className="text-sm text-[#5C6470] underline">
            {expanded ? "Tutup Rincian" : "Lihat Rincian"}
          </span>
        </button>

        {expanded && (
          <div className="p-6 pt-0 border-t border-[#E8E0CE]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="text-sm font-bold text-[#0D1B2A] uppercase tracking-wider mb-4">Rincian Kategori</h4>
                <div className="flex flex-col gap-3">
                  {budget.categories.map((cat) => (
                    <div key={cat.id} className="flex justify-between items-center py-2 border-b border-[#E8E0CE]/50 last:border-0">
                      <span className="text-sm text-[#5C6470]">{cat.label}</span>
                      <span className="text-sm font-semibold text-[#27211C]">
                        {cat.amount ? (
                          `${formatter.format(cat.amount.min * multiplier)} – ${formatter.format(cat.amount.max * multiplier)}`
                        ) : (
                          "Belum tersedia"
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#0D1B2A] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#C9A84C]" />
                    Termasuk (Asumsi)
                  </h4>
                  <ul className="text-sm text-[#5C6470] list-disc list-inside space-y-1">
                    {budget.assumptionIds.map((id) => (
                      <li key={id}>{id === "assume-shared-room" ? "Kamar berbagi (2 orang/kamar)" : "Transportasi umum/lokal standar"}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#0D1B2A] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#8B2020]" />
                    Belum Termasuk
                  </h4>
                  <ul className="text-sm text-[#5C6470] list-disc list-inside space-y-1">
                    {budget.exclusionIds.map((id) => (
                      <li key={id}>{id === "exclude-flights-to-origin" ? "Tiket pesawat ke titik awal" : "Belanja suvenir & asuransi"}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#FFFDF8] rounded-xl border border-[#E8E0CE] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <p className="text-xs text-[#5C6470] leading-relaxed">
                Estimasi ini adalah kisaran perencanaan berdasarkan kategori dan data yang tersedia—bukan harga pemesanan. Biaya aktual dapat berubah menurut musim, titik keberangkatan, jumlah traveler, akomodasi, kurs, dan pilihan aktivitas.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
