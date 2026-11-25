// Built pages = registry entries that have a content file. Routes, menus,
// related cards, sitemap and metadata all read from here.

import type { Language } from "@/types";
import { REGISTRY, pathFor, type PageId } from "./registry";
import type { AnyContent, BaseCopy, LandingContent } from "./types";
import { BUILT } from "./built";
import auto from "./auto";
import home from "./home";
import renters from "./renters";
import condo from "./condo";
import flood from "./flood";
import pet from "./pet";
import commercialAuto from "./commercial-auto";
import gl from "./gl";
import workersComp from "./workers-comp";
import trucking from "./trucking";
import bop from "./bop";
import commercialUmbrella from "./commercial-umbrella";
import eo from "./eo";
import coi from "./coi";
import claimsHelp from "./claims-help";
import idCards from "./id-cards";
import policyChanges from "./policy-changes";
import restaurants from "./restaurants";
import cleaning from "./cleaning";
import contractors from "./contractors";
import about from "./about";
import coverages from "./coverages";

export const CONTENT: Partial<Record<PageId, AnyContent>> = {
  auto,
  home,
  renters,
  condo,
  flood,
  pet,
  "commercial-auto": commercialAuto,
  gl,
  "workers-comp": workersComp,
  trucking,
  bop,
  "commercial-umbrella": commercialUmbrella,
  eo,
  coi,
  "claims-help": claimsHelp,
  "id-cards": idCards,
  "policy-changes": policyChanges,
  restaurants,
  cleaning,
  contractors,
  about,
  coverages,
};

// built.ts (used by client menus) must list exactly the pages that have content
{
  const a = [...BUILT].sort().join(","), b = Object.keys(CONTENT).sort().join(",");
  if (a !== b) throw new Error(`src/content/pages/built.ts (${a}) does not match CONTENT (${b})`);
}

export const LANGS: Language[] = ["en", "pt", "es"];

export { pageHref, isBuilt, withLang } from "./built";

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

/** Shared fields of a page in one language (metadata, breadcrumbs, structured data) */
export function baseCopy(id: PageId, lang: Language): BaseCopy {
  return CONTENT[id]!.copy[lang] as BaseCopy;
}

/** Product and service pages (landing template) */
export function landing(id: PageId): LandingContent {
  return CONTENT[id] as LandingContent;
}
