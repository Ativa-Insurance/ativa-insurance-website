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
  /** Hero photo alt text (pages with a photo) */
  alt?: string;
  quickQ: string;
  quick: string;
  protects?: Array<{ icon: string; t: string; d: string; items: string[] }>;
  explorer?: { title: string; lead: string; legend: string; items: ExplorerItem[] };
  scenarios: Array<{ t: string; parts: string[]; d: string }>;
  myths: Array<{ m: string; f: string }>;
  notCovered: string[];
  who: Array<{ t: string; d: string }>;
  factors: string[];
  faq: Array<{ q: string; a: string; sources?: Source[] }>;
  /** Service template only (site-v2 README 5.3 and 5.5) */
  service?: {
    /** Line under "Licensed in 10 states" */
    note?: string;
    howto: Array<{ t: string; d: string }>;
    ready: string[];
    /** One line, no guarantees */
    turnaround: string;
  };
}

export interface HeroPhoto {
  /** File in /public/2027/landing */
  file: string;
  w: number;
  h: number;
  /** "full": full-width panorama. "partial": 2:1 photo anchored right, fading in from its left edge */
  layout: "full" | "partial";
  /** "width": fit the photo to its full width (height capped at its ratio) so nothing is cropped */
  fit?: "width";
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
  /** Explorer scene (pages with an explorer) */
  scene?: SceneId;
  /** Hero photo; service pages without one get a light hero with no photo */
  hero?: HeroPhoto;
  related: PageId[];
  /** Service pages: which pre-filled WhatsApp message the primary button opens (a27.wa.<key>) */
  waKey?: "coi" | "idcards" | "changes" | "claims";
  copy: Record<Language, LandingCopy>;
}

/** Fields every inner page has (metadata, breadcrumbs, structured data) */
export interface BaseCopy {
  seo: { title: string; description: string };
  h1: string;
  sub: string;
  quickQ?: string;
  quick?: string;
  faq: Array<{ q: string; a: string; sources?: Source[] }>;
  alt?: string;
}

/** Industry page (site-v2 README 5.4 / 5.5): older inner-page hero with artwork on the right */
export interface IndustryCopy extends BaseCopy {
  quickQ: string;
  quick: string;
  /** One line for the Coverages hub index card */
  line: string;
  /** Coverage this kind of business usually needs: a product page + one "why" line */
  needed: Array<{ id: PageId; why: string }>;
  factors: Array<{ t: string; d: string }>;
}

export interface IndustryContent {
  id: PageId;
  status: Status;
  updated: string;
  copy: Record<Language, IndustryCopy>;
}

export interface AboutCopy extends BaseCopy {
  quickQ: string;
  quick: string;
  /** Fact tiles: only facts already on the live site */
  facts: string[];
  whatWeDo: Array<{ t: string; d: string }>;
}

export interface AboutContent {
  id: PageId;
  status: Status;
  updated: string;
  /** Team cards stay hidden until the owner supplies names, roles and photos */
  team: Array<{ name: string; role: string; langs: string }>;
  /** Office hours stay hidden until the owner supplies them */
  hours: Record<Language, string> | null;
  copy: Record<Language, AboutCopy>;
}

export interface HubCopy extends BaseCopy {
  glossary: Array<{ t: string; d: string }>;
}

export interface HubContent {
  id: PageId;
  status: Status;
  updated: string;
  indexP: PageId[];
  indexB: PageId[];
  indexI: PageId[];
  copy: Record<Language, HubCopy>;
}

export type AnyContent = LandingContent | IndustryContent | AboutContent | HubContent;
