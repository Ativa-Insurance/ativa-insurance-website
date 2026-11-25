// Shared route helpers for the three language catch-all routes
// (src/app/(en)/[...slug], (pt)/pt/[...slug], (es)/es/[...slug]).
// Static generation only: unknown URLs 404 (dynamicParams = false in each route).

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Language } from "@/types";
import { REGISTRY } from "@/content/pages/registry";
import { findPage, staticParams } from "@/content/pages/index";
import { pageMetadata } from "@/content/pages/seo";
import LandingPage from "./LandingPage";
import InnerPage from "./InnerPage";

export { staticParams };

export function innerMetadata(lang: Language, slug: string[]): Metadata {
  const id = findPage(lang, slug);
  return id ? pageMetadata(id, lang) : {};
}

export function InnerRoute({ lang, slug }: { lang: Language; slug: string[] }) {
  const id = findPage(lang, slug);
  if (!id) notFound();
  switch (REGISTRY[id].template) {
    case "product":
    case "service":
      return <LandingPage id={id} lang={lang} />;
    case "industry":
    case "about":
    case "hub":
      return <InnerPage id={id} lang={lang} />;
    default:
      notFound();
  }
}
