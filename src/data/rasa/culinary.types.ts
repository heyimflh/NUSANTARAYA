export type FlavorId =
  | "pedas"
  | "gurih"
  | "manis"
  | "asam"
  | "rempah-kuat"
  | "segar"
  | "pahit"
  | "smoky";

export type DishCategoryId =
  | "makanan-utama"
  | "kudapan"
  | "minuman"
  | "sambal-pendamping"
  | "hidangan-upacara";

export type DishAvailability =
  | "common"
  | "seasonal"
  | "ceremonial"
  | "variable"
  | "unknown";

export type VerifiedDietaryClaim = {
  type: "halal" | "vegetarian" | "vegan" | "gluten-free" | "dairy-free";
  source: string;
  confidence: "high" | "medium" | "low";
  notes?: string;
};

export type VerifiedAllergenNote = {
  allergen: string;
  source: string;
  severity: "high" | "medium" | "low";
  notes?: string;
};

export type CulinaryMedia = {
  src: string;
  width: number;
  height: number;
  alt: string;
  focalPoint?: "center" | "top" | "bottom" | "left" | "right";
  credit?: string;
  type: "hero" | "card" | "macro" | "portrait";
};

export type CulinaryFeatureRef = {
  type: "archive" | "route" | "map" | "story";
  id: string;
  label: string;
};

export type DishLocaleContent = {
  title: string;
  summary: string;
  originContext: string;
  flavorNotes: string[];
  keyIngredients: string[];
  preparationContext?: string;
};

export type CulinarySensitivity = {
  isCeremonial?: boolean;
  isEndangered?: boolean;
  requiresSpecialHandling?: boolean;
  notes?: string;
};

export type CulinaryDish = {
  id: string;
  slug: string;
  status: "draft" | "review" | "published" | "archived";
  provinceIds: string[];
  regionIds: string[];
  communityIds?: string[];
  categoryId: DishCategoryId;
  localeContent: {
    id: DishLocaleContent;
    en?: DishLocaleContent;
  };
  aliases: string[];
  flavorIds: FlavorId[];
  ingredientIds: string[];
  spiceIds: string[];
  techniqueIds?: string[];
  textureIds?: string[];
  servingContextIds?: string[];
  dietaryClaims?: VerifiedDietaryClaim[];
  allergenNotes?: VerifiedAllergenNote[];
  media: CulinaryMedia[];
  sourceRefs: string[];
  relatedDishIds: string[];
  relatedStoryIds: string[];
  relatedFeatureRefs: CulinaryFeatureRef[];
  availability?: DishAvailability;
  sensitivity?: CulinarySensitivity;
  editorialPriority?: number;
  updatedAt: string;
  reviewedAt?: string;
};

export type FoodStoryChapter = {
  id: string;
  title: string;
  content: string;
  media?: CulinaryMedia;
};

export type FoodStory = {
  id: string;
  title: string;
  summary: string;
  chapters: FoodStoryChapter[];
  relatedDishIds: string[];
  relatedSpiceIds: string[];
  author?: string;
};

export type FoodBattleDimension = {
  id: string;
  label: string;
  dishAValue: string;
  dishBValue: string;
};

export type FoodBattlePair = {
  id: string;
  dishAId: string;
  dishBId: string;
  context: string;
  dimensions: FoodBattleDimension[];
};

export type CulinarySpice = {
  id: string;
  name: string;
  aliases: string[];
  flavorContribution: string;
  historicalNote: string;
  relatedDishIds: string[];
  relatedRegionIds: string[];
  sourceStatus: string;
  media?: CulinaryMedia;
};

export type TastingTrailDraft = {
  duration: 1 | 3 | 5 | 7;
  regionId?: string;
  provinceId?: string;
  flavorInterests: FlavorId[];
  pace: "Santai" | "Seimbang" | "Eksploratif";
  savedDishIds: string[];
};

export type TastingTrail = {
  id: string;
  title: string;
  description: string;
  dishes: CulinaryDish[];
  routeCta: string;
};
