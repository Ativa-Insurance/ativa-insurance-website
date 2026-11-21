"use client";

import { useState, useCallback, useEffect, useLayoutEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/home/Hero";
import ProductSelection from "@/components/home/ProductSelection";
import Comparison from "@/components/home/Comparison";
import LicensedStates from "@/components/home/LicensedStates";
import QuoteModal from "@/components/QuoteModal";
import CommercialQuoteModal from "@/components/CommercialQuoteModal";
import CarrierMarquee from "@/components/CarrierMarquee";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import ChatWidget from "@/components/ChatWidget";
import HowItWorks from "@/components/HowItWorks";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Mode } from "@/types";

// ─── Main site ────────────────────────────────────────────────────────────────

function AtivaSite() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  // Server and first client render agree on "personal"; ?tab= is applied
  // before the first paint (layout effect), so there is no hydration mismatch.
  const [mode, setMode]                             = useState<Mode>("personal");
  useLayoutEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("tab") === "commercial" || p.get("openQuote") === "commercial") setMode("commercial");
  }, []);
  const [quoteOpen, setQuoteOpen]                   = useState(false);
  const [quoteProduct, setQuoteProduct]             = useState<string | undefined>(undefined);
  const [quoteInitialData, setQuoteInitialData]     = useState<Record<string, string>>({});
  const [commercialQuoteOpen, setCommercialQuoteOpen]   = useState(false);
  const [commercialQuoteProduct, setCommercialQuoteProduct] = useState<string | undefined>(undefined);

  const isPersonal = mode === "personal";

  // Switch the Personal / Commercial view and keep the existing ?tab= URL in sync
  const handleModeChange = useCallback((newMode: Mode) => {
    setMode(newMode);
    window.history.replaceState(null, "", `?tab=${newMode}`);
  }, []);

  // Open the EXISTING quote pop-up for one line (+ optional product id, + optional pre-filled data)
  const openProduct = useCallback((line: Mode, product?: string, initialData?: Record<string, string>) => {
    setMode(line);
    if (line === "personal") {
      setCommercialQuoteOpen(false);
      setQuoteInitialData(initialData ?? {});
      setQuoteProduct(product);
      setQuoteOpen(true);
    } else {
      setQuoteOpen(false);
      setCommercialQuoteProduct(product);
      setCommercialQuoteOpen(true);
    }
  }, []);

  // "Get a quote": existing pop-up of the current line, no product preselected
  const openQuote = useCallback(() => {
    if (isPersonal) { setQuoteProduct(undefined); setQuoteOpen(true); }
    else             { setCommercialQuoteProduct(undefined); setCommercialQuoteOpen(true); }
  }, [isPersonal]);

  // <html lang> follows the page language
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  // Reactively sync tab + quote modals from URL search params.
  // Runs on mount AND whenever the URL changes (e.g. clicking nav links on other pages).
  useEffect(() => {
    const openQuoteParam = searchParams.get("openQuote");
    const tab            = searchParams.get("tab");
    const product        = searchParams.get("product") ?? undefined;
    if (openQuoteParam === "personal") {
      setMode("personal");
      setQuoteProduct(product);
      setQuoteOpen(true);
    } else if (openQuoteParam === "commercial") {
      setMode("commercial");
      setCommercialQuoteProduct(product);
      setCommercialQuoteOpen(true);
    } else if (tab === "commercial") {
      setMode("commercial");
    } else if (tab === "personal") {
      setMode("personal");
    }
  }, [searchParams]);

  // Listen for ativa:openQuote custom event dispatched by the Flow chat widget
  useEffect(() => {
    function handleChatQuote(e: Event) {
      const detail = (e as CustomEvent<string | { tab: string; productId?: string }>).detail;
      // Support both legacy string detail and new object detail { tab, productId }
      const tab       = typeof detail === "string" ? detail : detail.tab;
      const productId = typeof detail === "object" ? detail.productId : undefined;
      if (tab === "commercial") {
        setMode("commercial");
        setCommercialQuoteProduct(productId);
        setCommercialQuoteOpen(true);
      } else {
        setMode("personal");
        setQuoteProduct(productId);
        setQuoteOpen(true);
      }
    }
    window.addEventListener("ativa:openQuote", handleChatQuote);
    return () => window.removeEventListener("ativa:openQuote", handleChatQuote);
  }, []);

  return (
    <div id="top" data-mode={mode} data-line={mode} className="a27 a27-page">
      <div aria-hidden className="a27-wash"><span className="a27-wash__glow" /><span className="a27-wash__l" /><span className="a27-wash__r" /></div>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <Header mode={mode} onGetQuote={openQuote} onModeChange={handleModeChange} onOpenProduct={openProduct} />

      {/* ── Trust bar ────────────────────────────────────────────────────── */}
      <TrustBar />

      <main id="main" className="a27-main">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero mode={mode}>
        <ProductSelection mode={mode} onOpen={openProduct} onGetQuote={openQuote} />
      </Hero>

      {/* ── Carriers ──────────────────────────────────────────────────────── */}
      <CarrierMarquee mode={mode} />

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <HowItWorks mode={mode} />

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <Reviews mode={mode} />

      {/* ── Why an independent agency (comparison) ───────────────────────── */}
      <Comparison />

      {/* ── Licensed states (map) ─────────────────────────────────────────── */}
      <LicensedStates onGetQuote={openQuote} />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ mode={mode} />

      {/* ── Blog ──────────────────────────────────────────────────────────── */}
      <Blog mode={mode} />

      {/* ── Cross-line band ───────────────────────────────────────────────── */}
      <ContactCTA mode={mode} onSwitchMode={(m) => { handleModeChange(m); window.scrollTo({ top: 0, behavior: "smooth" }); }} />

      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <Footer mode={mode} onGetQuote={openQuote} onOpenProduct={openProduct} />

      {/* ── Flow chat widget (protected; its chat button stacks above the FAB) ── */}
      <ChatWidget mode={mode} />

      {/* ── Floating WhatsApp (+ phone chat button) ─────────────────────── */}
      <WhatsAppButton hidden={quoteOpen || commercialQuoteOpen} />

      {/* ── Personal quote modal ─────────────────────────────────────────── */}
      {quoteOpen && isPersonal && (
        <QuoteModal
          mode={mode}
          initialProduct={quoteProduct}
          initialData={quoteInitialData}
          onClose={() => { setQuoteOpen(false); setQuoteProduct(undefined); setQuoteInitialData({}); }}
        />
      )}

      {/* ── Commercial quote modal ────────────────────────────────────────── */}
      {commercialQuoteOpen && !isPersonal && (
        <CommercialQuoteModal
          mode={mode}
          initialProduct={commercialQuoteProduct}
          onClose={() => { setCommercialQuoteOpen(false); setCommercialQuoteProduct(undefined); }}
        />
      )}
    </div>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <Suspense fallback={null}>
        <AtivaSite />
      </Suspense>
    </LanguageProvider>
  );
}
