export const PROVINCE_IDS = [
  "aceh",
  "sumatera-utara",
  "sumatera-barat",
  "riau",
  "kepulauan-riau",
  "jambi",
  "sumatera-selatan",
  "bengkulu",
  "lampung",
  "kepulauan-bangka-belitung",
  "banten",
  "dki-jakarta",
  "jawa-barat",
  "jawa-tengah",
  "di-yogyakarta",
  "jawa-timur",
  "kalimantan-barat",
  "kalimantan-tengah",
  "kalimantan-selatan",
  "kalimantan-timur",
  "kalimantan-utara",
  "sulawesi-utara",
  "gorontalo",
  "sulawesi-tengah",
  "sulawesi-barat",
  "sulawesi-selatan",
  "sulawesi-tenggara",
  "bali",
  "nusa-tenggara-barat",
  "nusa-tenggara-timur",
  "maluku",
  "maluku-utara",
  "papua",
  "papua-barat",
  "papua-barat-daya",
  "papua-tengah",
  "papua-pegunungan",
  "papua-selatan",
] as const;

export type ProvinceId = typeof PROVINCE_IDS[number];

export const PROVINCE_ID_SET: ReadonlySet<string> = new Set(PROVINCE_IDS);

export function isValidProvinceId(value: unknown): value is ProvinceId {
  return typeof value === "string" && PROVINCE_ID_SET.has(value);
}
