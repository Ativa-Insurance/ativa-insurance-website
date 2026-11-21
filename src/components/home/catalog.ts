// 2027 homepage catalog: which product ids appear where, which icon/globe
// they use, and which EXISTING quote pop-up product each one opens.
// Pop-up ids come from QuoteModal.tsx (PERSONAL_CARD_MAP) and
// CommercialQuoteModal.tsx (COMMERCIAL_CARD_MAP) — read-only references.
// Tiles with no pop-up product follow DECISIONS.md section C.

import { amsApplyUrl } from "@/config/quote";
import type { Mode } from "@/types";

export const PHONE_DISPLAY = "561-946-8261";
export const PHONE_HREF = "tel:+15619468261";
export const WHATSAPP_DISPLAY = "+1 561-946-8261";
export const WHATSAPP_BASE = "https://wa.me/15619468261";

export function whatsappHref(message?: string): string {
  return message ? `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE;
}

/** What a product trigger does: open an existing pop-up, or go to the AMS application. */
export type QuoteTarget =
  | { kind: "popup"; line: Mode; product?: string }
  | { kind: "ams"; line: "business" };

export interface CatalogItem {
  /** Design id — also the i18n key under a27.items.<group>.<id> */
  id: string;
  /** Line icon in /public/2027/icons/navy */
  icon: string;
  target: QuoteTarget;
}

const popup = (line: Mode, product?: string): QuoteTarget => ({ kind: "popup", line, product });

// Header / phone menu / footer — Personal column
export const PERSONAL_MENU: CatalogItem[] = [
  { id: "auto",     icon: "auto",     target: popup("personal", "auto") },
  { id: "home",     icon: "home",     target: popup("personal", "home") },
  { id: "renters",  icon: "renters",  target: popup("personal", "renters") },
  { id: "condo",    icon: "condo",    target: popup("personal", "property") }, // DECISIONS C
  { id: "flood",    icon: "flood",    target: popup("personal", "flood") },
  { id: "umbrella", icon: "umbrella", target: popup("personal", "umbrella") },
];

// Header / phone menu / footer — Business column
export const BUSINESS_MENU: CatalogItem[] = [
  { id: "commercial-auto",     icon: "commercial-auto",     target: popup("commercial", "commercial-auto") },
  { id: "trucking",            icon: "trucking",            target: popup("commercial", "trucking") },
  { id: "cargo",               icon: "cargo",               target: popup("commercial", "cargo") },
  { id: "gl",                  icon: "gl",                  target: popup("commercial", "gl") },
  { id: "bop",                 icon: "bop",                 target: { kind: "ams", line: "business" } }, // DECISIONS C
  { id: "property",            icon: "property",            target: popup("commercial") },
  { id: "contractors",         icon: "contractors",         target: popup("commercial", "gl") }, // DECISIONS B8 / C
  { id: "workers-comp",        icon: "workers-comp",        target: popup("commercial", "workers-comp") },
  { id: "commercial-umbrella", icon: "commercial-umbrella", target: popup("commercial", "umbrella") },
  { id: "eo",                  icon: "eo",                  target: popup("commercial", "professional") },
  { id: "restaurants",         icon: "restaurants",         target: popup("commercial") },
  { id: "cleaning",            icon: "cleaning",            target: popup("commercial") },
  { id: "fleet",               icon: "fleet",               target: popup("commercial", "trucking") },
];

export const SERVICE_ITEMS = ["claims", "idcards", "coi", "changes"] as const;
export type ServiceId = (typeof SERVICE_ITEMS)[number];

// Product selection grid. `globe` is the 3D artwork in /public/2027/globes;
// BOP and E&O use the line icon instead (DECISIONS D: their globes are not used).
export interface TileItem {
  id: string;
  /** i18n source: "live" = products.<line>[id] in the locale files, "new" = a27.tiles.<line>.<id> */
  copy: { source: "live"; liveId: string } | { source: "new" };
  globe?: string;
  icon?: string;
  target: QuoteTarget;
}

export const PERSONAL_TILES: TileItem[] = [
  { id: "auto",    copy: { source: "live", liveId: "auto" },  globe: "auto",    target: popup("personal", "auto") },
  { id: "home",    copy: { source: "live", liveId: "home" },  globe: "home",    target: popup("personal", "home") },
  { id: "renters", copy: { source: "new" },                   globe: "renters", target: popup("personal", "renters") },
  { id: "condo",   copy: { source: "new" },                   globe: "condo",   target: popup("personal", "property") },
  { id: "flood",   copy: { source: "live", liveId: "flood" }, globe: "flood",   target: popup("personal", "flood") },
  { id: "pet",     copy: { source: "live", liveId: "pet" },   globe: "pet",     target: popup("personal", "pet") },
];

export const COMMERCIAL_TILES: TileItem[] = [
  { id: "commercial-auto",     copy: { source: "live", liveId: "commercial-auto" }, globe: "commercial-auto",     target: popup("commercial", "commercial-auto") },
  { id: "trucking",            copy: { source: "live", liveId: "trucking" },        globe: "trucking",            target: popup("commercial", "trucking") },
  { id: "bop",                 copy: { source: "new" },                             icon: "bop",                  target: { kind: "ams", line: "business" } },
  { id: "contractors",         copy: { source: "new" },                             globe: "contractors",         target: popup("commercial", "gl") },
  { id: "workers-comp",        copy: { source: "live", liveId: "workers-comp" },    globe: "workers-comp",        target: popup("commercial", "workers-comp") },
  { id: "commercial-umbrella", copy: { source: "live", liveId: "umbrella" },        globe: "commercial-umbrella", target: popup("commercial", "umbrella") },
  { id: "eo",                  copy: { source: "new" },                             icon: "eo",                   target: popup("commercial", "professional") },
];

export const LICENSED_STATES = ["FL", "GA", "SC", "NC", "TN", "OH", "PA", "MD", "NJ", "CT"] as const;

/** Business owner's policy goes to the AMS application, same tab, in the page language. */
export function bopHref(lang: string): string {
  return amsApplyUrl("business", lang);
}

/** Rating with the decimal separator of the page language ("4.9" EN, "4,9" PT/ES). */
export function formatRating(rating: number, lang: string): string {
  const locale = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en-US";
  return new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(rating);
}

/** Strip a leading decorative glyph (✓, ⚡, 🔒 …) from a live string the design renders with its own icon. */
export function stripGlyph(text: string): string {
  return text.replace(/^[^\p{L}\p{N}]+/u, "").trim();
}
