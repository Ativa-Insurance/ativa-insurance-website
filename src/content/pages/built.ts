// Which pages are built (have a content file). Kept separate from the content
// files so client components (menus, footer) can link to pages without
// shipping page copy in their bundles. index.ts checks it matches CONTENT.

import type { Language } from "@/types";
import { pathFor, type PageId } from "./registry";

export const BUILT: readonly PageId[] = ["auto", "home", "renters", "condo", "flood", "pet",
  "commercial-auto", "gl", "workers-comp", "trucking", "bop", "commercial-umbrella", "eo",
  "coi", "claims-help", "id-cards", "policy-changes",
  "restaurants", "cleaning", "contractors", "about", "coverages"];

export function isBuilt(id: string): id is PageId {
  return (BUILT as readonly string[]).includes(id);
}

/** Link to a built page in a language, or null when the page doesn't exist yet */
export function pageHref(id: string, lang: Language): string | null {
  return isBuilt(id) ? pathFor(id, lang) : null;
}
