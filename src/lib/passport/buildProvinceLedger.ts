import { provinceMapData } from "@/data/provinces/provinces";

export type PassportProvinceView = {
  id: string;
  name: string;
  region: string;
  status: "planned" | "started" | "completed";
  atlasUrl: string;
};

export function buildProvinceLedgerView(
  provinceIds: string[],
  status: "planned" | "started" | "completed"
): PassportProvinceView[] {
  return provinceIds.map((id) => {
    const p = provinceMapData.find((prov) => prov.id === id);
    return {
      id,
      name: p ? p.name : id,
      region: p ? p.region : "Tidak Diketahui",
      status,
      atlasUrl: `/provinsi/${id}`,
    };
  });
}
