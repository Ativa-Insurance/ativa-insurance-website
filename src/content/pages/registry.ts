// One registry for every inner page: template, line, the existing pop-up it
// opens, and its URL in each language (English at the root, Portuguese under
// /pt/, Spanish under /es/). A page is built only when it has a content file
// (see ./index.ts); until then menus keep their quote trigger.

import type { Language } from "@/types";
import type { QuoteTarget } from "@/components/home/catalog";

export type PageId =
  | "auto" | "home" | "renters" | "condo" | "flood" | "pet"
  | "commercial-auto" | "gl" | "workers-comp" | "trucking" | "bop" | "commercial-umbrella" | "eo"
  | "coi" | "claims-help" | "id-cards" | "policy-changes"
  | "restaurants" | "cleaning" | "contractors"
  | "about" | "coverages";

export type Template = "product" | "service" | "industry" | "about" | "hub";
export type PageLine = "personal" | "business" | "service" | "page";

export interface PageEntry {
  id: PageId;
  template: Template;
  line: PageLine;
  /** What the page's primary quote button opens (existing pop-up or BOP application link) */
  quote?: QuoteTarget;
  /** Path without the language prefix or leading slash */
  slugs: Record<Language, string>;
  /** Globe artwork in /public/2027/globes, if approved art exists */
  globe?: string;
  /** Navy line icon in /public/2027/icons/navy */
  icon: string;
}

const P = (line: "personal" | "commercial", product?: string): QuoteTarget => ({ kind: "popup", line, product });

export const REGISTRY: Record<PageId, PageEntry> = {
  auto:      { id: "auto",    template: "product", line: "personal", quote: P("personal", "auto"),     globe: "auto",    icon: "auto",    slugs: { en: "auto-insurance",    pt: "seguro-auto",          es: "seguro-de-auto" } },
  home:      { id: "home",    template: "product", line: "personal", quote: P("personal", "property"), globe: "home",    icon: "home",    slugs: { en: "home-insurance",    pt: "seguro-residencial",   es: "seguro-de-hogar" } },
  renters:   { id: "renters", template: "product", line: "personal", quote: P("personal", "renters"),  globe: "renters", icon: "renters", slugs: { en: "renters-insurance", pt: "seguro-inquilino",     es: "seguro-de-inquilino" } },
  condo:     { id: "condo",   template: "product", line: "personal", quote: P("personal", "property"), globe: "condo",   icon: "condo",   slugs: { en: "condo-insurance",   pt: "seguro-condominio",    es: "seguro-de-condominio" } },
  flood:     { id: "flood",   template: "product", line: "personal", quote: P("personal", "flood"),    globe: "flood",   icon: "flood",   slugs: { en: "flood-insurance",   pt: "seguro-enchente",      es: "seguro-contra-inundaciones" } },
  pet:       { id: "pet",     template: "product", line: "personal", quote: P("personal", "pet"),      globe: "pet",     icon: "pet",     slugs: { en: "pet-insurance",     pt: "seguro-pet",           es: "seguro-de-mascotas" } },
  "commercial-auto":     { id: "commercial-auto",     template: "product", line: "business", quote: P("commercial", "commercial-auto"), globe: "commercial-auto",     icon: "commercial-auto",     slugs: { en: "business/commercial-auto-insurance",       pt: "empresas/seguro-auto-comercial",                es: "negocios/seguro-auto-comercial" } },
  gl:                    { id: "gl",                  template: "product", line: "business", quote: P("commercial", "gl"),              globe: "gl",                  icon: "gl",                  slugs: { en: "business/general-liability-insurance",     pt: "empresas/seguro-responsabilidade-civil-geral",  es: "negocios/seguro-responsabilidad-civil-general" } },
  "workers-comp":        { id: "workers-comp",        template: "product", line: "business", quote: P("commercial", "workers-comp"),    globe: "workers-comp",        icon: "workers-comp",        slugs: { en: "business/workers-compensation-insurance",  pt: "empresas/seguro-workers-comp",                  es: "negocios/seguro-compensacion-laboral" } },
  trucking:              { id: "trucking",            template: "product", line: "business", quote: P("commercial", "trucking"),        globe: "trucking",            icon: "trucking",            slugs: { en: "business/trucking-insurance",              pt: "empresas/seguro-caminhoes",                     es: "negocios/seguro-de-camiones" } },
  bop:                   { id: "bop",                 template: "product", line: "business", quote: { kind: "ams", line: "business" },                                         icon: "bop",                 slugs: { en: "business/bop-insurance",                   pt: "empresas/seguro-bop",                           es: "negocios/seguro-bop" } },
  "commercial-umbrella": { id: "commercial-umbrella", template: "product", line: "business", quote: P("commercial", "umbrella"),        globe: "commercial-umbrella", icon: "commercial-umbrella", slugs: { en: "business/commercial-umbrella-insurance",   pt: "empresas/seguro-umbrella-comercial",            es: "negocios/seguro-umbrella-comercial" } },
  eo:                    { id: "eo",                  template: "product", line: "business", quote: P("commercial", "professional"),                                           icon: "eo",                  slugs: { en: "business/errors-and-omissions-insurance",  pt: "empresas/seguro-erros-omissoes",                es: "negocios/seguro-errores-omisiones" } },
  coi:              { id: "coi",            template: "service", line: "service", icon: "coi",     slugs: { en: "certificate-of-insurance", pt: "certificado-de-seguro", es: "certificado-de-seguro" } },
  "claims-help":    { id: "claims-help",    template: "service", line: "service", icon: "claims",  slugs: { en: "claims-help",              pt: "ajuda-com-sinistros",   es: "ayuda-con-reclamos" } },
  "id-cards":       { id: "id-cards",       template: "service", line: "service", icon: "idcards", slugs: { en: "insurance-id-cards",       pt: "cartoes-de-seguro",     es: "tarjetas-de-seguro" } },
  "policy-changes": { id: "policy-changes", template: "service", line: "service", icon: "changes", slugs: { en: "policy-changes",           pt: "alteracoes-na-apolice", es: "cambios-en-la-poliza" } },
  restaurants: { id: "restaurants", template: "industry", line: "business", quote: P("commercial"),                          icon: "restaurants", slugs: { en: "business/restaurant-insurance",       pt: "empresas/seguro-restaurantes",      es: "negocios/seguro-para-restaurantes" } },
  cleaning:    { id: "cleaning",    template: "industry", line: "business", quote: P("commercial"),                          icon: "cleaning",    slugs: { en: "business/cleaning-business-insurance", pt: "empresas/seguro-empresas-limpeza",  es: "negocios/seguro-empresas-de-limpieza" } },
  contractors: { id: "contractors", template: "industry", line: "business", quote: P("commercial"), globe: "contractors", icon: "contractors", slugs: { en: "business/contractor-insurance",       pt: "empresas/seguro-construcao-reformas", es: "negocios/seguro-para-contratistas" } },
  about:     { id: "about",     template: "about", line: "page", icon: "users", slugs: { en: "about",     pt: "sobre-a-ativa",         es: "sobre-ativa" } },
  coverages: { id: "coverages", template: "hub",   line: "page", icon: "book",  slugs: { en: "coverages", pt: "coberturas-explicadas", es: "coberturas-explicadas" } },
};

/** Absolute path of a page in a language, e.g. /pt/seguro-auto */
export function pathFor(id: PageId, lang: Language): string {
  const slug = REGISTRY[id].slugs[lang];
  return lang === "en" ? `/${slug}` : `/${lang}/${slug}`;
}

/** Homepage link that keeps the language (and optionally the line view) */
export function homeHref(lang: Language, tab?: "personal" | "commercial"): string {
  const q = new URLSearchParams();
  if (tab) q.set("tab", tab);
  if (lang !== "en") q.set("lang", lang);
  const s = q.toString();
  return s ? `/?${s}` : "/";
}
