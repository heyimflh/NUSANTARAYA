/**
 * NUSANTARAYA — Route Map Static Data
 * Section 6: Route Map + Transport Summary
 *
 * Schematic node positions for known preset stops.
 * These are LAYOUT POSITIONS for the SVG schematic diagram, NOT geographic coordinates.
 * Values are normalized 0–100 within the schematic canvas coordinate space.
 *
 * IMPORTANT:
 * - These positions are schematic / diagram coordinates, not geographic lat/lng.
 * - They represent approximate relative positions for visual clarity only.
 * - Never use these to claim geographic precision or distances.
 * - The field name "coordinates" here refers to schematic [x, y] within SVG viewBox.
 *
 * Geographic lat/lng for stop centers (for reference, NOT rendered):
 * - Yogyakarta: approx [-7.79, 110.37]
 * - Solo: approx [-7.56, 110.83]
 * - Semarang: approx [-6.97, 110.42]
 * - Jakarta: approx [-6.20, 106.82]
 * - Bandung: approx [-6.91, 107.61]
 * - Bali: approx [-8.34, 115.09]
 */

export interface RouteMapStopStaticData {
  /** Schematic [x, y] in SVG coordinate space (0-100). NOT geographic. */
  schematicPosition: [number, number];
  /** Optional real geographic coordinates — only for future interactive map use. */
  coordinates?: [number, number];
}

/**
 * Schematic positions for each canonical stop ID.
 * Extend this registry as new routes/stops are added.
 */
export const ROUTE_MAP_STOP_DATA: Record<string, RouteMapStopStaticData> = {
  "stop-yogya": {
    schematicPosition: [25, 50],
    // Geographic: Yogyakarta, DIY
  },
  "stop-solo": {
    schematicPosition: [50, 45],
    // Geographic: Surakarta, Jawa Tengah
  },
  "stop-semarang": {
    schematicPosition: [75, 35],
    // Geographic: Semarang, Jawa Tengah
  },
  "stop-jakarta": {
    schematicPosition: [15, 40],
    // Geographic: DKI Jakarta
  },
  "stop-bandung": {
    schematicPosition: [25, 55],
    // Geographic: Bandung, Jawa Barat
  },
  "stop-bali": {
    schematicPosition: [85, 60],
    // Geographic: Denpasar, Bali
  },
  "stop-malang": {
    schematicPosition: [60, 60],
    // Geographic: Malang, Jawa Timur
  },
  "stop-surabaya": {
    schematicPosition: [70, 50],
    // Geographic: Surabaya, Jawa Timur
  },
  "stop-labuan-bajo": {
    schematicPosition: [80, 70],
    // Geographic: Labuan Bajo, NTT
  },
  "stop-makassar": {
    schematicPosition: [75, 40],
    // Geographic: Makassar, Sulawesi Selatan
  },
  "stop-toraja": {
    schematicPosition: [80, 35],
    // Geographic: Tana Toraja, Sulawesi Selatan
  },
  "stop-raja-ampat": {
    schematicPosition: [90, 30],
    // Geographic: Raja Ampat, Papua Barat
  },
  "stop-manado": {
    schematicPosition: [85, 25],
    // Geographic: Manado, Sulawesi Utara
  },
  "stop-lombok": {
    schematicPosition: [88, 60],
    // Geographic: Mataram, Lombok
  },
  "stop-medan": {
    schematicPosition: [10, 25],
    // Geographic: Medan, Sumatera Utara
  },
  "stop-danau-toba": {
    schematicPosition: [12, 30],
    // Geographic: Danau Toba, Sumatera Utara
  },
  "stop-padang": {
    schematicPosition: [12, 50],
    // Geographic: Padang, Sumatera Barat
  },
  "stop-bukittinggi": {
    schematicPosition: [13, 45],
    // Geographic: Bukittinggi, Sumatera Barat
  },
  "stop-palembang": {
    schematicPosition: [20, 60],
    // Geographic: Palembang, Sumatera Selatan
  },
  "stop-pontianak": {
    schematicPosition: [40, 30],
    // Geographic: Pontianak, Kalimantan Barat
  },
  "stop-balikpapan": {
    schematicPosition: [60, 25],
    // Geographic: Balikpapan, Kalimantan Timur
  },
};
