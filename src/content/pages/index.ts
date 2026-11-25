// Built pages = registry entries that have a content file. Routes, menus,
// related cards, sitemap and metadata all read from here.

import type { Language } from "@/types";
import { REGISTRY, pathFor, type PageId } from "./registry";
import type { LandingContent } from "./types";
import { BUILT } from "./built";
import auto from "./auto";

export const CONTENT: Partial<Record<PageId, LandingContent>> = {
  auto,
};

// built.ts (used by client menus) must list exactly the pages that have content
{
  const a = [...BUILT].sort().join(","), b = Object.keys(CONTENT).sort().join(",");
  if (a !== b) throw new Error(`src/content/pages/built.ts (${a}) does not match CONTENT (${b})`);
}

export const LANGS: Language[] = ["en", "pt", "es"];

export { pageHref, isBuilt } from "./built";

/** The same page in every language (for the language switch and hreflang) */
export function alternatesFor(id: PageId): Record<Language, string> {
  return { en: pathFor(id, "en"), pt: pathFor(id, "pt"), es: pathFor(id, "es") };
}

/** Resolve a URL slug (without the language prefix) to a built page */
export function findPage(lang: Language, slug: string[]): PageId | null {
  const joined = slug.map((s) => decodeURIComponent(s)).join("/");
  for (const id of Object.keys(CONTENT) as PageId[]) {
    if (REGISTRY[id].slugs[lang] === joined) return id;
  }
  return null;
}

/** generateStaticParams for one language's catch-all route */
export function staticParams(lang: Language): Array<{ slug: string[] }> {
  return (Object.keys(CONTENT) as PageId[]).map((id) => ({ slug: REGISTRY[id].slugs[lang].split("/") }));
}

export function isApproved(id: PageId): boolean {
  return CONTENT[id]?.status === "approved";
}
