"use client";

// Applies ?lang=pt|es from the URL to the page's LanguageProvider, so links
// between pages keep the visitor's language (homepage, blog). Renders nothing.

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/types";

export default function LangFromQuery() {
  const { setLang } = useLanguage();
  useEffect(() => {
    const l = new URLSearchParams(window.location.search).get("lang");
    if (l === "en" || l === "pt" || l === "es") setLang(l as Language);
  }, [setLang]);
  return null;
}
