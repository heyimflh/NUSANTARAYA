import { useState } from "react";
import { Bookmark, CheckCircle, ExternalLink, AlertTriangle } from "lucide-react";
import { PassportSavedRoute } from "@/lib/types";
import { usePassport } from "@/context/app-context";
import Link from "next/link";

interface PassportSaveLaneProps {
  savedRoute: PassportSavedRoute;
  locale: "id" | "en";
}

export function PassportSaveLane({ savedRoute, locale }: PassportSaveLaneProps) {
  const { passport, saveRouteWithDetails, removeRouteWithDetails } = usePassport();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isSaved = passport.savedRoutes.includes(savedRoute.routeId);

  const handleSave = () => {
    try {
      setErrorMsg(null);
      if (isSaved) {
        removeRouteWithDetails(savedRoute.routeId);
      } else {
        saveRouteWithDetails(savedRoute);
      }
    } catch (e: any) {
      if (e.message === "QUOTA_EXCEEDED") {
        setErrorMsg(
          locale === "en"
            ? "You have saved 20 routes. Remove an old route from your Passport to save a new one."
            : "Kamu telah menyimpan 20 rute. Hapus salah satu rute lama dari Passport untuk menyimpan rute baru."
        );
      } else {
        setErrorMsg(locale === "en" ? "Failed to save route." : "Gagal menyimpan rute.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 border border-[#E8E0CE] rounded-2xl p-6 bg-white">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="font-display font-medium text-lg text-[#2C3E50]">
            Nusa Passport
          </h4>
          <p className="text-sm text-[#5C6D7E] leading-relaxed">
            {isSaved
              ? (locale === "en" ? "This route is saved in your Passport." : "Rute ini telah tersimpan di Passport kamu.")
              : (locale === "en" ? "Save this route to access it later and continue your journey planning." : "Simpan rute ini untuk diakses kembali dan melanjutkan rencana perjalananmu.")}
          </p>
        </div>
        <div className="p-3 bg-[#FAF8F5] rounded-full">
          <Bookmark className="w-6 h-6 text-[#D4AF37]" />
        </div>
      </div>

      {errorMsg && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-start gap-2 text-sm mt-2 border border-red-100">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
          <p>{errorMsg}</p>
        </div>
      )}

      <div className="mt-2 flex flex-col gap-3">
        <button
          onClick={handleSave}
          className={`w-full py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
            isSaved
              ? "bg-[#FAF8F5] text-[#2C3E50] border border-[#E8E0CE] hover:bg-[#F0EBE1]"
              : "bg-[#2C3E50] text-white hover:bg-[#1A252F]"
          }`}
        >
          {isSaved ? (
            <>
              <CheckCircle className="w-5 h-5" />
              {locale === "en" ? "Saved to Passport" : "Tersimpan di Passport"}
            </>
          ) : (
            <>
              <Bookmark className="w-5 h-5" />
              {locale === "en" ? "Save to Passport" : "Simpan ke Passport"}
            </>
          )}
        </button>

        {isSaved && (
          <Link
            href="/passport"
            className="w-full py-3 px-4 rounded-xl font-medium text-[#2C3E50] border border-[#E8E0CE] hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-2"
          >
            {locale === "en" ? "Open Passport" : "Buka Passport"}
            <ExternalLink className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
