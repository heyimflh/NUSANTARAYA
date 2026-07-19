import re

with open("src/lib/routes/readiness/resolveRouteCulinary.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Change verified to editorial
content = content.replace("confidence: \"verified\",", "confidence: \"editorial\",")

# Use itinerary provinces if available, else empty (wait, if itinerary is not available, we can use result provinces as fallback, but user said "Ambil daftar province ID unik dari itinerary aktif").
replacement = """export function resolveRouteCulinary(
  result: RouteRecommendation,
  itinerary: RouteItinerary | null
): RouteCulinaryItem[] {
  const items: RouteCulinaryItem[] = [];
  
  if (!itinerary) return items;

  let idCounter = 1;
  const uniqueProvinces = Array.from(new Set(itinerary.days.flatMap(day => day.provinceIds)));

  uniqueProvinces.forEach((provinceId, index) => {
    const provinceCulinary = FALLBACK_CULINARY_DB[provinceId];
    if (!provinceCulinary) return; // Do not create dummy fallbacks

    provinceCulinary.forEach((item) => {
      items.push({
        ...item,
        id: `rc-${result.id}-${idCounter++}`,
        provinceId,
        stopId: `stop-${index + 1}`,
        dayNumbers: [index + 1],
      });
    });
  });

  return items;
}"""

content = re.sub(
    r"export function resolveRouteCulinary\([\s\S]*?return items;\n\}",
    replacement,
    content
)

with open("src/lib/routes/readiness/resolveRouteCulinary.ts", "w", encoding="utf-8") as f:
    f.write(content)

