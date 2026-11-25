// One card model for every link to an inner page: related coverages, industry
// "coverage this business usually needs", Coverages hub index. A page without
// a content file returns null (left out, never a dead link).

import type { Language } from "@/types";
import { makeT } from "@/i18n/dict";
import { REGISTRY, type PageId } from "@/content/pages/registry";
import { CONTENT, pageHref } from "@/content/pages/index";
import type { IndustryContent } from "@/content/pages/types";

export interface PageCard {
  id: PageId;
  href: string;
  t: string;
  d: string;
  globe?: string;
  icon: string;
  service: boolean;
}

// Service page ids → their key in a27.items.service
const SVC: Partial<Record<PageId, string>> = { coi: "coi", "claims-help": "claims", "id-cards": "idcards", "policy-changes": "changes" };

export function pageCard(rid: PageId, lang: Language): PageCard | null {
  const href = pageHref(rid, lang);
  if (!href) return null;
  const tr = makeT(lang);
  const t = tr.t;
  const r = REGISTRY[rid];
  const svc = SVC[rid];
  if (svc) return { id: rid, href, t: t(`a27.items.service.${svc}`), d: "", icon: r.icon, service: true };
  if (r.template === "industry") {
    const ind = CONTENT[rid] as IndustryContent;
    return { id: rid, href, t: t(`a27.items.business.${rid}`), d: ind.copy[lang].line, globe: r.globe, icon: r.icon, service: false };
  }
  // One neutral line per product from the design's inner-page content (lp.cardLine); empty when none
  const line = (tr.tRaw("lp.cardLine") ?? {}) as Record<string, string>;
  const group = r.line === "business" ? "business" : "personal";
  return { id: rid, href, t: t(`a27.items.${group}.${rid}`), d: line[rid] ?? "", globe: r.globe, icon: r.icon, service: false };
}

export function pageCards(ids: PageId[], lang: Language): PageCard[] {
  return ids.map((id) => pageCard(id, lang)).filter((x): x is PageCard => !!x);
}
