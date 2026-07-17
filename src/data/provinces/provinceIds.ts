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

export function isProvinceId(value: unknown): value is ProvinceId {
  return typeof value === "string" && PROVINCE_ID_SET.has(value);
}

export const LEGACY_NUMERIC_PROVINCE_ID_MAP = {
  "11": "aceh",
  "12": "sumatera-utara",
  "13": "sumatera-barat",
  "14": "riau",
  "15": "jambi",
  "16": "sumatera-selatan",
  "17": "bengkulu",
  "18": "lampung",
  "19": "kepulauan-bangka-belitung",
  "21": "kepulauan-riau",
  "31": "dki-jakarta",
  "32": "jawa-barat",
  "33": "jawa-tengah",
  "34": "di-yogyakarta",
  "35": "jawa-timur",
  "36": "banten",
  "51": "bali",
  "52": "nusa-tenggara-barat",
  "53": "nusa-tenggara-timur",
  "61": "kalimantan-barat",
  "62": "kalimantan-tengah",
  "63": "kalimantan-selatan",
  "64": "kalimantan-timur",
  "65": "kalimantan-utara",
  "71": "sulawesi-utara",
  "72": "sulawesi-tengah",
  "73": "sulawesi-selatan",
  "74": "sulawesi-tenggara",
  "75": "gorontalo",
  "76": "sulawesi-barat",
  "81": "maluku",
  "82": "maluku-utara",
  "91": "papua",
  "92": "papua-barat",
  "93": "papua-selatan",
  "94": "papua-tengah",
  "95": "papua-pegunungan",
  "96": "papua-barat-daya"
} as const satisfies Readonly<Record<string, ProvinceId>>;

export function migrateLegacyProvinceId(value: unknown): ProvinceId | null {
  if (isProvinceId(value)) {
    return value;
  }
  const normalized = typeof value === "number" ? String(value) : value;
  if (
    typeof normalized === "string" &&
    Object.prototype.hasOwnProperty.call(LEGACY_NUMERIC_PROVINCE_ID_MAP, normalized)
  ) {
    return LEGACY_NUMERIC_PROVINCE_ID_MAP[normalized as keyof typeof LEGACY_NUMERIC_PROVINCE_ID_MAP];
  }
  return null;
}
