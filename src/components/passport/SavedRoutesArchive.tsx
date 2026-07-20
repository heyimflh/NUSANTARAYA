"use client";

import { useState } from "react";
import { SavedRoutePassportView } from "@/lib/passport/buildSavedRouteView";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, ArrowUpRight, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePassport } from "@/context/app-context";
import { Button } from "@/components/ui/button";

export const SavedRoutesArchive = ({ savedRoutes }: { savedRoutes: SavedRoutePassportView[] }) => {
  const { removeRouteWithDetails } = usePassport();
  const [routeToRemove, setRouteToRemove] = useState<string | null>(null);

  const handleRemoveConfirm = () => {
    if (routeToRemove) {
      removeRouteWithDetails(routeToRemove);
      setRouteToRemove(null);
    }
  };

  if (savedRoutes.length === 0) {
    return (
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-serif text-[#2B211B] font-bold">Rute yang Menunggu untuk Dilanjutkan</h2>
          <div className="h-[1px] flex-1 bg-[#DCCDB8]" />
        </div>
        <div className="bg-[#FFFCF6] border border-dashed border-[#DCCDB8] rounded-xl p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[#F3EBDD] rounded-full flex items-center justify-center mb-6">
            <FolderOpen className="text-[#A77B32] w-8 h-8" />
          </div>
          <p className="text-[#3A281F] text-lg max-w-md mx-auto mb-8">
            Belum ada rute yang disimpan. Mulai dari satu wilayah, pilih ritme perjalananmu, lalu simpan hasilnya ke Passport.
          </p>
          <Link
            href="/routes"
            className="bg-[#B85C38] text-[#FFF9EE] hover:bg-[#9B3D32] px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors"
          >
            Buat Rute Pertama
          </Link>
        </div>
      </section>
    );
  }

  const featuredRoute = savedRoutes[savedRoutes.length - 1]; // Last saved route
  const archiveList = savedRoutes.slice(0, -1).reverse();

  return (
    <section className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-serif text-[#2B211B] font-bold">Rute yang Menunggu untuk Dilanjutkan</h2>
        <div className="h-[1px] flex-1 bg-[#DCCDB8]" />
      </div>
      <p className="text-[#786B60] text-sm mb-8 -mt-4">
        Setiap rute tersimpan membawa preferensi, wilayah, dan jejak provinsi yang dapat kamu buka kembali.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Featured Route (Left) */}
        {featuredRoute && (
          <div className="w-full lg:w-5/12 bg-[#FFFCF6] border border-[#DCCDB8] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="absolute top-0 right-8 w-10 h-12 bg-[#B85C38] flex items-center justify-center rounded-b-md shadow-md z-10">
              <span className="text-[#FFF9EE] text-xs font-bold font-mono">01</span>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-[10px] uppercase tracking-widest text-[#786B60] font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A77B32]" />
                {featuredRoute.regionLabel}
              </div>
              <h3 className="text-2xl font-serif text-[#2B211B] font-bold mb-4 line-clamp-2">
                {featuredRoute.title}
              </h3>
              
              {featuredRoute.status === "legacy" ? (
                <p className="text-sm text-[#B85C38] mb-6 italic">
                  Rute ini tersimpan dari versi Passport sebelumnya.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredRoute.provinceLabels.map(p => (
                    <span key={p} className="bg-[#F3EBDD] text-[#3A281F] text-[11px] font-medium px-2 py-1 rounded">
                      {p}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-6 border-t border-[#DCCDB8] flex items-center justify-between">
                <div className="text-xs text-[#786B60]">
                  {featuredRoute.durationDays ? `${featuredRoute.durationDays} Hari` : "Durasi tidak diketahui"}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRouteToRemove(featuredRoute.routeId)}
                    className="p-2 text-[#9B3D32] hover:bg-[#9B3D32]/10 rounded-full transition-colors"
                    aria-label="Hapus rute"
                  >
                    <Trash2 size={16} />
                  </button>
                  <Link
                    href={featuredRoute.resumeHref}
                    className="bg-[#2B211B] text-[#FFF9EE] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#3A281F] transition-colors"
                  >
                    Lanjutkan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Archive List (Right) */}
        {archiveList.length > 0 && (
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            {archiveList.map((route, idx) => (
              <div key={route.routeId} className="group bg-[#FFFCF6] border border-[#DCCDB8] hover:border-[#A77B32] rounded-lg p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-colors shadow-sm hover:shadow relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DCCDB8] group-hover:bg-[#A77B32] transition-colors" />
                <div className="flex-1 pl-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#786B60] mb-1">{route.regionLabel}</p>
                  <h4 className="font-serif text-lg text-[#2B211B] font-bold line-clamp-1">{route.title}</h4>
                  <p className="text-xs text-[#786B60] mt-2">
                    {route.provinceLabels.length} Provinsi • {route.durationDays ? `${route.durationDays} Hari` : "Durasi N/A"}
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setRouteToRemove(route.routeId)}
                    className="p-2 text-[#9B3D32] hover:bg-[#9B3D32]/10 rounded-full transition-colors"
                    aria-label="Hapus rute"
                  >
                    <Trash2 size={16} />
                  </button>
                  <Link
                    href={route.resumeHref}
                    className="flex items-center gap-2 bg-[#F3EBDD] text-[#2B211B] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#DCCDB8] transition-colors"
                  >
                    Buka <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Remove Confirmation Dialog */}
      <AnimatePresence>
        {routeToRemove && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#2B211B]/40 backdrop-blur-sm"
              onClick={() => setRouteToRemove(null)}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-[#FFFCF6] border border-[#DCCDB8] rounded-xl p-8 max-w-sm w-full relative z-10 shadow-2xl"
            >
              <h3 className="text-xl font-serif font-bold text-[#2B211B] mb-2">Hapus rute dari Passport?</h3>
              <p className="text-[#3A281F] text-sm mb-6">
                Rute tersimpan akan dihapus. Stempel provinsi yang sudah selesai tidak akan hilang.
              </p>
              <div className="flex justify-end gap-3">
                <Button 
                  variant="outline"
                  onClick={() => setRouteToRemove(null)}
                  className="border-[#DCCDB8] text-[#3A281F] hover:bg-[#F3EBDD] font-bold tracking-widest uppercase text-xs"
                >
                  Batal
                </Button>
                <Button 
                  onClick={handleRemoveConfirm}
                  className="bg-[#9B3D32] text-[#FFF9EE] hover:bg-[#7A302B] font-bold tracking-widest uppercase text-xs"
                >
                  Hapus
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
