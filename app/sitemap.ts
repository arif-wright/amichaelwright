import type { MetadataRoute } from "next";
import { siteUrl } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/excerpt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
