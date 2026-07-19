"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { sanitizeRouteReturnTo } from "@/lib/routes/buildProvinceAtlasHref";

export function AtlasRouteReturnCTA() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const from = searchParams.get("from");
  const routeId = searchParams.get("routeId");
  const returnToParam = searchParams.get("returnTo");

  if (from !== "route" || !routeId) return null;

  const handleReturn = () => {
    if (returnToParam) {
      const sanitized = sanitizeRouteReturnTo(returnToParam);
      router.push(sanitized);
    } else {
      router.push(`/routes?source=atlas-return&routeId=${encodeURIComponent(routeId)}`);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-8">
      <button
        onClick={handleReturn}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D1B2A] text-white font-bold text-sm shadow-xl hover:bg-[#1a304d] hover:-translate-y-1 transition-all focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Rute
      </button>
    </div>
  );
}

