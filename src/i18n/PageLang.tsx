"use client";

// Page language for pages whose language is set by the URL (landing, service
// and other inner pages). Shared chrome (Header, Footer, …) reads text through
// useSiteI18n(): on these pages it uses the URL language (so the server HTML
// is in that language); on the homepage and blog it falls back to the
// visitor-chosen LanguageContext. SyncLanguage also sets LanguageContext to
// the page language so the existing quote pop-ups open in it.

import { createContext, useContext, useEffect, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { makeT } from "@/i18n/dict";
import type { Language } from "@/types";

export interface PageLangValue {
  lang: Language;
  /** Same page in each language (absolute paths), for the language switch */
  alternates: Partial<Record<Language, string>>;
}

const PageLangContext = createContext<PageLangValue | null>(null);

export function PageLangProvider({ value, children }: { value: PageLangValue; children: React.ReactNode }) {
  return (
    <PageLangContext.Provider value={value}>
      <SyncLanguage lang={value.lang} />
      {children}
    </PageLangContext.Provider>
  );
}

function SyncLanguage({ lang }: { lang: Language }) {
  const { setLang } = useLanguage();
  useEffect(() => { setLang(lang); }, [lang, setLang]);
  return null;
}

export function usePageLang(): PageLangValue | null {
  return useContext(PageLangContext);
}

/** Translation for shared components: URL language on inner pages, LanguageContext elsewhere. */
export function useSiteI18n() {
  const ctx = useLanguage();
  const page = useContext(PageLangContext);
  const fixed = useMemo(() => (page ? makeT(page.lang) : null), [page]);
  if (!page || !fixed) return { ...ctx, page: null as PageLangValue | null };
  return { ...ctx, lang: page.lang, t: fixed.t, tRaw: fixed.tRaw, tProducts: fixed.tProducts, page };
}
