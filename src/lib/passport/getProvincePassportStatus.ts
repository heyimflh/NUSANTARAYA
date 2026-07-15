import { PassportData } from "@/lib/types";

export type ProvincePassportStatus = "unvisited" | "planned" | "started" | "completed";

export function getProvincePassportStatus(
  passport: PassportData,
  provinceId: string
): ProvincePassportStatus {
  if (passport.stamps.includes(provinceId)) return "completed";
  if ((passport.startedProvinces || []).includes(provinceId)) return "started";
  if ((passport.plannedProvinces || []).includes(provinceId)) return "planned";
  return "unvisited";
}
