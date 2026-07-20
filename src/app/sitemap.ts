import type { MetadataRoute } from "next";
import { PROVINCE_IDS } from "@/data/provinces/provinceIds";

const BASE_URL = "https://nusantaraya.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/explore`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/routes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic province atlas routes
  const provinceRoutes: MetadataRoute.Sitemap = PROVINCE_IDS.map((slug) => ({
    url: `${BASE_URL}/provinsi/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...provinceRoutes];
}
