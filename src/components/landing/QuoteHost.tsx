"use client";

// Mounts the EXISTING quote pop-ups (QuoteModal / CommercialQuoteModal,
// unchanged) on inner pages and lets any button open them. A target is
// { kind: "popup", line, product? } or the BOP application link (same tab).
// No form, input or submit call lives here.

import { createContext, useCallback, useContext, useState } from "react";
import QuoteModal from "@/components/QuoteModal";
import CommercialQuoteModal from "@/components/CommercialQuoteModal";
import { useLanguage } from "@/context/LanguageContext";
import { bopHref, type QuoteTarget } from "@/components/home/catalog";
import type { Mode } from "@/types";

interface QuoteApi {
  open: (target: QuoteTarget) => void;
  openLine: (line: Mode, product?: string) => void;
  isOpen: boolean;
}

const QuoteContext = createContext<QuoteApi | null>(null);

export function useQuote(): QuoteApi {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be inside QuoteHost");
  return ctx;
}

export default function QuoteHost({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  const [state, setState] = useState<{ line: Mode; product?: string } | null>(null);

  const openLine = useCallback((line: Mode, product?: string) => setState({ line, product }), []);
  const open = useCallback(
    (target: QuoteTarget) => {
      if (target.kind === "ams") window.location.href = bopHref(lang);
      else setState({ line: target.line, product: target.product });
    },
    [lang],
  );
  const close = () => setState(null);

  return (
    <QuoteContext.Provider value={{ open, openLine, isOpen: !!state }}>
      {children}
      {state?.line === "personal" && <QuoteModal mode="personal" initialProduct={state.product} onClose={close} />}
      {state?.line === "commercial" && <CommercialQuoteModal mode="commercial" initialProduct={state.product} onClose={close} />}
    </QuoteContext.Provider>
  );
}
