import { CANONICAL_DISHES, CANONICAL_SPICES } from "../src/data/rasa/culinary.data";
import { RasaAssetManifest, DISH_ASSETS } from "../src/data/rasa/asset-manifest";

function validateRasaContent() {
  const errors: string[] = [];

  const dishIds = new Set<string>();
  const dishSlugs = new Set<string>();

  for (const dish of CANONICAL_DISHES) {
    // 1. Slug unik & ID unik
    if (dishIds.has(dish.id)) errors.push(`[${dish.id}] Duplicate ID`);
    dishIds.add(dish.id);

    if (dishSlugs.has(dish.slug)) errors.push(`[${dish.id}] Duplicate slug: ${dish.slug}`);
    dishSlugs.add(dish.slug);

    // 2. Dummy data check
    if (dish.id.includes("hidangan-lokal-")) {
      errors.push(`[${dish.id}] Dummy dish detected`);
    }
    if (dish.localeContent.id.title.includes("Hidangan Lokal")) {
      errors.push(`[${dish.id}] Dummy title detected: ${dish.localeContent.id.title}`);
    }

    if (dish.status === "published") {
      // 3. Published dish must have explicit mapping, no region fallback
      const exactMapping = DISH_ASSETS[dish.id];
      if (!exactMapping) {
        errors.push(`[${dish.id}] Published dish missing explicit image mapping in DISH_ASSETS`);
      }

      // 4. Source refs must not be empty
      if (!dish.sourceRefs || dish.sourceRefs.length === 0) {
        errors.push(`[${dish.id}] Published dish missing sourceRefs`);
      }
    }
  }

  // Spices mapping check
  for (const spice of CANONICAL_SPICES) {
    if (!spice.media || spice.media.src.includes("fallback")) {
      errors.push(`Spice [${spice.id}] uses fallback media`);
    }
    if (spice.id === "pala" && spice.media?.src.includes("cengkeh")) {
      errors.push(`Spice pala maps to cengkeh image`);
    }
    if (spice.id === "cengkeh" && spice.media?.src.includes("pala")) {
      errors.push(`Spice cengkeh maps to pala image`);
    }
  }

  if (errors.length > 0) {
    console.error("Rasa Content Validation Failed:");
    errors.forEach((e) => console.error(e));
    process.exit(1);
  }

  console.log("Rasa Content Validated Successfully!");
}

validateRasaContent();
