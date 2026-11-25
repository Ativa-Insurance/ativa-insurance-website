// Metadata and structured data for inner pages: title, description, canonical,
// hreflang alternates (en, pt, es, x-default → en), the draft gate (noindex),
// and JSON-LD (BreadcrumbList, WebPage, Service, FAQPage). Never aggregateRating
// or Review.

import type { Metadata } from "next";
import type { Language } from "@/types";
import { BASE_URL, AGENCY_ID, LICENSED_STATE_NAMES } from "@/content/site";
import { makeT, HTML_LANG } from "@/i18n/dict";
import { REGISTRY, homeHref, pathFor, type PageId } from "./registry";
import { CONTENT, alternatesFor, baseCopy } from "./index";
import type { LandingContent } from "./types";

const abs = (p: string) => `${BASE_URL}${p}`;

export function pageMetadata(id: PageId, lang: Language): Metadata {
  const c = CONTENT[id]!;
  const copy = baseCopy(id, lang);
  const hero = (c as LandingContent).hero;
  const alt = alternatesFor(id);
  const url = abs(alt[lang]);
  return {
    title: { absolute: copy.seo.title },
    description: copy.seo.description,
    alternates: {
      canonical: url,
      languages: { en: abs(alt.en), pt: abs(alt.pt), es: abs(alt.es), "x-default": abs(alt.en) },
    },
    robots: c.status === "approved" ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: copy.seo.title,
      description: copy.seo.description,
      url,
      siteName: "Ativa Insurance",
      type: "website",
      locale: HTML_LANG[lang].replace("-", "_"),
      ...(hero ? { images: [{ url: `/2027/landing/${hero.file}`, width: hero.w, height: hero.h, alt: copy.alt ?? copy.h1 }] } : {}),
    },
  };
}

export function breadcrumbs(id: PageId, lang: Language): Array<{ name: string; href?: string }> {
  const t = makeT(lang).t;
  const e = REGISTRY[id];
  const copy = baseCopy(id, lang);
  const items: Array<{ name: string; href?: string }> = [{ name: t("lp.crumbs.home"), href: homeHref(lang) }];
  if (e.line === "personal") items.push({ name: t("lp.crumbs.personal"), href: homeHref(lang, "personal") });
  if (e.line === "business") items.push({ name: t("lp.crumbs.business"), href: homeHref(lang, "commercial") });
  // Industries → the "By industry" group of the Coverages hub, when the hub is built
  if (e.template === "industry") items.push({ name: t("lp.crumbs.industries"), href: CONTENT.coverages ? `${pathFor("coverages", lang)}#idx-i` : undefined });
  if (e.line === "service") items.push({ name: t("lp.crumbs.service") });
  items.push({ name: e.template === "industry" ? t(`a27.items.business.${id}`) : copy.h1 });
  return items;
}

export function pageJsonLd(id: PageId, lang: Language): object[] {
  const copy = baseCopy(id, lang);
  const e = REGISTRY[id];
  const url = abs(pathFor(id, lang));
  const crumbs = breadcrumbs(id, lang);
  const out: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.href ? abs(b.href) : url,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: copy.h1,
      description: copy.seo.description,
      inLanguage: HTML_LANG[lang],
      isPartOf: { "@type": "WebSite", url: BASE_URL, name: "Ativa Insurance" },
      publisher: { "@id": AGENCY_ID },
    },
  ];
  if (e.template === "product" || e.template === "industry") {
    out.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: copy.h1,
      serviceType: copy.h1,
      description: copy.quick ?? copy.sub,
      url,
      provider: { "@id": AGENCY_ID },
      areaServed: LICENSED_STATE_NAMES.map((name) => ({ "@type": "State", name })),
      availableLanguage: ["en", "pt", "es"],
    });
  }
  const faq = [...(copy.quickQ && copy.quick ? [{ q: copy.quickQ, a: copy.quick }] : []), ...copy.faq];
  if (faq.length) out.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: HTML_LANG[lang],
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  });
  return out;
}
