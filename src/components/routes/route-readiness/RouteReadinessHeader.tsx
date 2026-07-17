"use client";

import { CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import type { ReadinessStatus } from "@/lib/routes/readiness/routeReadinessSchema";

interface RouteReadinessHeaderProps {
  status: ReadinessStatus;
}

export function RouteReadinessHeader({ status }: RouteReadinessHeaderProps) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold tracking-wider uppercase text-[#C9A84C]">
          Bekal Perjalanan
        </span>
        <span className="w-8 h-px bg-[#C9A84C]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="max-w-2xl">
          <h2 id="route-readiness-title" className="text-3xl md:text-4xl font-playfair font-bold text-[#0D1B2A] leading-tight mb-3">
            Siapkan biaya, rasa, etika, dan kebutuhan perjalananmu.
          </h2>
          <p className="text-[#5C6470] text-base md:text-lg leading-relaxed">
            Tinjau estimasi awal, temukan kuliner yang terhubung dengan rute, pahami panduan budaya yang relevan, dan selesaikan checklist sebelum perjalanan dimulai.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E0CE] bg-white">
            {status === "ready" && (
              <>
                <CheckCircle2 className="w-5 h-5 text-[#2D5A27]" />
                <span className="text-sm font-semibold text-[#0D1B2A]">Siap ditinjau</span>
              </>
            )}
            {status === "partial" && (
              <>
                <AlertTriangle className="w-5 h-5 text-[#C9A84C]" />
                <span className="text-sm font-semibold text-[#0D1B2A]">Sebagian siap</span>
              </>
            )}
            {status === "stale" && (
              <>
                <AlertCircle className="w-5 h-5 text-[#8B2020]" />
                <span className="text-sm font-semibold text-[#0D1B2A]">Perlu dilengkapi</span>
              </>
            )}
          </div>
          <p className="text-xs text-[#5C6470] max-w-[200px] text-left md:text-right">
            Estimasi awal · Informasi dapat berubah · Verifikasi terbaru
          </p>
        </div>
      </div>
    </div>
  );
}
