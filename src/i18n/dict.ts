// Static translator over the locale JSON files (same files and lookup rules as
// LanguageContext). Used on the server and by pages whose language comes from
// the URL (/pt/…, /es/…), so their HTML is rendered in that language.

import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
import es from "@/locales/es.json";
import type { Language } from "@/types";

const DICTS: Record<Language, Record<string, unknown>> = { en, pt, es } as Record<Language, Record<string, unknown>>;

function get(obj: Record<string, unknown>, key: string): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && !Array.isArray(acc)) return (acc as Record<string, unknown>)[part];
    return undefined;
  }, obj);
}

export interface Translator {
  lang: Language;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tRaw: (key: string) => unknown;
  tProducts: (mode: "personal" | "commercial") => Array<{ id: string; title: string; description: string }>;
}

export function makeT(lang: Language): Translator {
  const d = DICTS[lang] ?? DICTS.en;
  return {
    lang,
    t: (key, vars) => {
      const v = get(d, key);
      if (typeof v !== "string") return key;
      return vars ? Object.entries(vars).reduce((s, [k, x]) => s.replace(`{${k}}`, String(x)), v) : v;
    },
    tRaw: (key) => get(d, key),
    tProducts: (mode) => {
      const v = get(d, `products.${mode}`);
      return Array.isArray(v) ? (v as Array<{ id: string; title: string; description: string }>) : [];
    },
  };
}

export const HTML_LANG: Record<Language, string> = { en: "en", pt: "pt-BR", es: "es" };
