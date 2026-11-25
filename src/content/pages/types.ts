// Content shape for inner pages. Each page has its own file (src/content/pages/<id>.ts)
// with EN / PT / ES copy mapped to the template's content slots (site-v2 README 5.7).
//
// Content rules: educational, plain sentences, no hype; never invent prices,
// statistics, testimonials or customer stories; a legal requirement or number
// carries an official source (.gov or statute) or is written generally; coverage
// depends on the policy and carrier; Ativa is an independent agency; never
// recommend an amount or a carrier. US policy terms stay in English in PT/ES.
//
// Publishing gate: status "draft" builds and shows on the preview with
// robots noindex,nofollow and is left out of the sitemap. Only the owner sets
// "approved".

import type { Language } from "@/types";
import type { PageId } from "./registry";
import type { SceneId } from "./scenes";

export type Status = "draft" | "approved";

export interface Source {
  label: string;
  href: string;
}

export interface ExplorerItem {
  t: string;
  /** PT/ES: the US policy term in English, shown beside the title in the detail panel */
  term?: string;
  d: string;
  rows: Array<{ k: string; v: string }>;
  sources?: Source[];
}

export interface LandingCopy {
  seo: { title: string; description: string };
  h1: string;
  /** Hero description */
  sub: string;
  /** Primary button label (also the final CTA heading) */
  cta: string;
  alt: string;
  quickQ: string;
  quick: string;
  protects?: Array<{ icon: string; t: string; d: string; items: string[] }>;
  explorer: { title: string; lead: string; legend: string; items: ExplorerItem[] };
  scenarios: Array<{ t: string; parts: string[]; d: string }>;
  myths: Array<{ m: string; f: string }>;
  notCovered: string[];
  who: Array<{ t: string; d: string }>;
  factors: string[];
  faq: Array<{ q: string; a: string; sources?: Source[] }>;
}

export interface HeroPhoto {
  /** File in /public/2027/landing */
  file: string;
  w: number;
  h: number;
  /** "full": full-width panorama. "partial": 2:1 photo anchored right, fading in from its left edge */
  layout: "full" | "partial";
  imgW?: string;
  subW?: string;
  side?: "left" | "right";
  /** Tablet band height */
  mdH?: number;
  pos: { lg: string; md: string; sm: string };
}

export interface LandingContent {
  id: PageId;
  status: Status;
  /** ISO date of the last content edit (shown only with a filled "Reviewed by" box) */
  updated: string;
  scene: SceneId;
  hero: HeroPhoto;
  related: PageId[];
  copy: Record<Language, LandingCopy>;
}
