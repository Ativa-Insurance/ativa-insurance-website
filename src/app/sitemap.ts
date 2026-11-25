import { MetadataRoute } from "next";
import { readdir } from "fs/promises";
import path from "path";
import { BASE_URL } from "@/content/site";
import { CONTENT, alternatesFor, isApproved } from "@/content/pages/index";
import type { PageId } from "@/content/pages/registry";

async function getBlogSlugs(): Promise<string[]> {
  try {
    const dataDir = path.join(process.cwd(), "data", "blog");
    const files = await readdir(dataDir);
    return files
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(".json", ""));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getBlogSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/rce-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Inner pages: only pages the owner marked "approved" (drafts are noindex and
  // left out), one entry per language with hreflang alternates.
  const pageRoutes: MetadataRoute.Sitemap = (Object.keys(CONTENT) as PageId[])
    .filter(isApproved)
    .flatMap((id) => {
      const alt = alternatesFor(id);
      const languages = { en: `${BASE_URL}${alt.en}`, pt: `${BASE_URL}${alt.pt}`, es: `${BASE_URL}${alt.es}`, "x-default": `${BASE_URL}${alt.en}` };
      return (["en", "pt", "es"] as const).map((l) => ({
        url: `${BASE_URL}${alt[l]}`,
        lastModified: new Date(CONTENT[id]!.updated),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages },
      }));
    });

  return [...staticRoutes, ...pageRoutes, ...blogRoutes];
}
