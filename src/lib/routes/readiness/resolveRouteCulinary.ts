import type { RouteCulinaryItem } from "./routeReadinessSchema";
import type { RouteRecommendation } from "@/types/route-planner";
import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";

const FALLBACK_CULINARY_DB: Record<string, Omit<RouteCulinaryItem, "id" | "stopId" | "dayNumbers" | "provinceId">[]> = {
  "di-yogyakarta": [
    {
      culinaryId: "cul-gudeg",
      category: "main",
      tasteProfileIds: ["manis", "gurih"],
      contextNoteId: "Ikon kuliner Yogyakarta yang dimasak lambat dengan krecek.",
      dietaryTags: ["bisa-vegetarian"],
      allergenRefs: ["kacang-tanah"],
      confidence: "editorial",
    },
    {
      culinaryId: "cul-kopi-jos",
      category: "drink",
      tasteProfileIds: ["pahit", "unik"],
      contextNoteId: "Kopi hitam panas yang disajikan dengan arang membara.",
      confidence: "editorial",
    }
  ],
  "jawa-tengah": [
    {
      culinaryId: "cul-sate-buntel",
      category: "main",
      tasteProfileIds: ["gurih", "manis"],
      contextNoteId: "Sate kambing cincang khas Solo yang dibungkus lemak.",
      dietaryTags: ["daging-kambing"],
      confidence: "editorial",
    }
  ],
  "jawa-timur": [
    {
      culinaryId: "cul-rawon",
      category: "main",
      tasteProfileIds: ["gurih", "kaya-rempah"],
      contextNoteId: "Sup daging berkuah hitam legam dari kluwek khas Jawa Timur.",
      dietaryTags: ["daging-sapi"],
      confidence: "editorial",
    }
  ]
};

export function resolveRouteCulinary(
  result: RouteRecommendation,
  itinerary: RouteItinerary | null
): RouteCulinaryItem[] {
  const items: RouteCulinaryItem[] = [];
  
  // If we have an itinerary, we could extract from itinerary.days[].culinaryMoments
  // But for the demo/fallback, we will generate based on provinceIds.
  
  let idCounter = 1;

  result.provinceIds.forEach((provinceId, index) => {
    const provinceCulinary = FALLBACK_CULINARY_DB[provinceId] || [
      {
        culinaryId: `cul-local-${provinceId}`,
        category: "main",
        tasteProfileIds: ["autentik-lokal"],
        contextNoteId: "Sajian khas lokal dari provinsi ini.",
        confidence: "estimated",
      }
    ];

    provinceCulinary.forEach((item) => {
      items.push({
        ...item,
        id: `rc-item-${idCounter++}`,
        provinceId,
        stopId: result.stops[index]?.cityOrCluster || "unknown-stop",
        dayNumbers: result.stops[index] ? [result.stops[index].dayStart, result.stops[index].dayEnd] : [1],
      });
    });
  });

  // Limit to 6 items to avoid overcrowding
  return items.slice(0, 6);
}
