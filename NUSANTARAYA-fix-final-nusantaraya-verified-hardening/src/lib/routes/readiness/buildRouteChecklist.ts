import type { RouteChecklistTemplate, RouteChecklistItem } from "./routeReadinessSchema";
import type { RouteRecommendation } from "@/types/route-planner";

export function buildRouteChecklist(result: RouteRecommendation, routeVersion: string, itineraryVersion: string): RouteChecklistTemplate {
  const items: RouteChecklistItem[] = [
    {
      id: "chk-doc-id",
      groupId: "before-departure",
      labelId: "KTP/Identitas Diri",
      descriptionId: "Pastikan membawa kartu identitas asli yang masih berlaku.",
      priority: "required-check",
      phase: "before-departure",
      derivedFrom: [{ type: "route", id: result.id }],
    },
    {
      id: "chk-packing",
      groupId: "before-departure",
      labelId: "Cek Cuaca Destinasi",
      descriptionId: "Periksa prakiraan cuaca untuk menyiapkan pakaian yang sesuai.",
      priority: "recommended",
      phase: "before-departure",
      derivedFrom: [{ type: "route", id: result.id }],
    },
    {
      id: "chk-book-hotel",
      groupId: "before-booking",
      labelId: "Konfirmasi Pemesanan Akomodasi",
      descriptionId: "Periksa kembali tanggal dan lokasi penginapan.",
      priority: "required-check",
      phase: "before-booking",
      derivedFrom: [{ type: "route", id: result.id }],
    }
  ];

  if (result.provinceIds.length > 1) {
    items.push({
      id: "chk-transport-intercity",
      groupId: "transport",
      labelId: "Tiket Transportasi Antarkota",
      descriptionId: "Periksa jadwal dan e-tiket untuk perjalanan antarkota.",
      priority: "required-check",
      phase: "before-booking",
      derivedFrom: [{ type: "route", id: result.id }],
    });
  }

  if (result.interests.includes("budaya")) {
    items.push({
      id: "chk-culture-clothes",
      groupId: "activities",
      labelId: "Pakaian Sopan/Tertutup",
      descriptionId: "Siapkan pakaian berlengan dan celana panjang untuk mengunjungi tempat sakral/keraton.",
      priority: "required-check",
      phase: "before-departure",
      derivedFrom: [{ type: "route", id: result.id }],
    });
  }

  if (result.interests.includes("alam") || result.interests.includes("petualangan")) {
    items.push({
      id: "chk-nature-gear",
      groupId: "activities",
      labelId: "Sepatu Nyaman & Obat Pribadi",
      descriptionId: "Siapkan alas kaki anti-selip dan perlengkapan untuk aktivitas outdoor.",
      priority: "recommended",
      phase: "before-departure",
      derivedFrom: [{ type: "route", id: result.id }],
    });
  }

  return {
    id: `tpl-${result.id}`,
    routeId: result.id,
    routeVersion,
    itineraryVersion,
    version: "1.0",
    items,
  };
}
