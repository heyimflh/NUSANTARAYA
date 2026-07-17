import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
export type RouteId = "jawa-budaya-kuliner-5" | "jawa-bali-heritage-7" | "maluku-spice-route-5" | "sumatra-heritage-7" | "kalimantan-nature-future-5" | "sulawesi-culture-nature-7" | "papua-wonder-7" | "bali-nusa-tenggara-5" | "yogyakarta-cultural-escape-3" | "bali-slow-journey-3";

import { jawaBudayaKuliner5 } from "./jawa-budaya-kuliner-5";
import { jawaBaliHeritage7 } from "./jawa-bali-heritage-7";
import { malukuSpiceRoute5 } from "./maluku-spice-route-5";
import { sumatraHeritage7 } from "./sumatra-heritage-7";
import { kalimantanNatureFuture5 } from "./kalimantan-nature-future-5";
import { sulawesiCultureNature7 } from "./sulawesi-culture-nature-7";
import { papuaWonder7 } from "./papua-wonder-7";
import { baliNusaTenggara5 } from "./bali-nusa-tenggara-5";
import { yogyakartaCulturalEscape3 } from "./yogyakarta-cultural-escape-3";
import { baliSlowJourney3 } from "./bali-slow-journey-3";

export const ITINERARIES_BY_ROUTE_ID = {
  "jawa-budaya-kuliner-5": jawaBudayaKuliner5,
  "jawa-bali-heritage-7": jawaBaliHeritage7,
  "maluku-spice-route-5": malukuSpiceRoute5,
  "sumatra-heritage-7": sumatraHeritage7,
  "kalimantan-nature-future-5": kalimantanNatureFuture5,
  "sulawesi-culture-nature-7": sulawesiCultureNature7,
  "papua-wonder-7": papuaWonder7,
  "bali-nusa-tenggara-5": baliNusaTenggara5,
  "yogyakarta-cultural-escape-3": yogyakartaCulturalEscape3,
  "bali-slow-journey-3": baliSlowJourney3,
} satisfies Record<RouteId, RouteItinerary>;
