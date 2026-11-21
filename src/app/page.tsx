"use client";

import { useState, useCallback, useEffect, useLayoutEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/home/Hero";
import ProductSelection from "@/components/home/ProductSelection";
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
import MobileFAB from "@/components/MobileFAB";
import LicensedStatesMap from "@/components/home/LicensedStatesMap";
import type { Mode } from "@/types";

// ─── Served States ────────────────────────────────────────────────────────────

const SERVED_STATES = [
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "SC", name: "South Carolina" },
  { code: "NC", name: "North Carolina" },
  { code: "TN", name: "Tennessee" },
  { code: "OH", name: "Ohio" },
  { code: "PA", name: "Pennsylvania" },
  { code: "MD", name: "Maryland" },
  { code: "NJ", name: "New Jersey" },
  { code: "CT", name: "Connecticut" },
];

function ServedStates() {
  const { t } = useLanguage();
  return (
    <section style={{
      backgroundColor: "#F8F9FB",
      padding:         "44px 24px",
      borderTop:       "1px solid rgba(0,0,0,0.06)",
      borderBottom:    "1px solid rgba(0,0,0,0.06)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{
          fontSize:      "11px",
          fontWeight:    700,
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          color:         "var(--eyebrow)",
          marginBottom:  "12px",
        }}>
          {t("states.eyebrow")}
        </p>
        <h2 style={{
          fontSize:      "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight:    900,
          color:         "#0B1F33",
          marginBottom:  "32px",
          lineHeight:    1.15,
          letterSpacing: "-0.025em",
        }}>
          {t("states.heading")}
        </h2>

        <LicensedStatesMap
          legendLicensed={t("map.legendLicensed")}
          legendUnavailable={t("map.legendUnavailable")}
        />

        <p style={{ fontSize: "14px", color: "#64748B", fontWeight: 500, marginTop: "20px" }}>
          {t("states.sub")}
        </p>
      </div>
    </section>
  );
}

// ─── Why Choose Ativa ─────────────────────────────────────────────────────────

// ─── Why Choose Ativa ─────────────────────────────────────────────────────────

const WHY_BENEFIT_ICONS = [
  /* shield-check — "we work for you" */
  <svg key="shield" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM13.707 7.293a1 1 0 00-1.414 0L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd"/>
  </svg>,
  /* clock — "same-day" */
  <svg key="clock" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
  </svg>,
  /* search — "compare carriers" */
  <svg key="search" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
  </svg>,
  /* star — "personalized" */
  <svg key="star" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>,
  /* user — "one advisor" */
  <svg key="user" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
  </svg>,
  /* globe — "bilingual" */
  <svg key="globe" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
  </svg>,
];

function WhyChooseAtiva({ onGetQuote }: { onGetQuote: () => void }) {
  const { t } = useLanguage();
  const benefitKeys = ["benefit1","benefit2","benefit3","benefit4","benefit5","benefit6"] as const;

  return (
    <section style={{
      backgroundColor: "#FFFFFF",
      borderTop:    "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      padding:      "80px 24px",
    }}>
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 460px;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .why-benefit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 32px;
        }
        @media (max-width: 480px) {
          .why-benefit-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="why-grid max-w-7xl mx-auto">

        {/* Left: headline + benefit grid */}
        <div>
          <h2 style={{
            fontSize:      "clamp(2rem, 3.5vw, 2.75rem)",
            fontWeight:    900,
            color:         "#0B1F33",
            lineHeight:    1.1,
            letterSpacing: "-0.03em",
            marginBottom:  "40px",
          }}>
            {t("why.headline1")}{" "}
            <span style={{ color: "#1B3A6B" }}>{t("why.headline2")}</span>
          </h2>

          <div className="why-benefit-grid">
            {benefitKeys.map((key, i) => (
              <div key={key} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{
                  width:           "36px",
                  height:          "36px",
                  borderRadius:    "10px",
                  backgroundColor: "#EEF4FF",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  flexShrink:      0,
                  color:           "#1B3A6B",
                }}>
                  {WHY_BENEFIT_ICONS[i]}
                </div>
                <p style={{
                  fontSize:   "15px",
                  color:      "#334155",
                  lineHeight: 1.5,
                  fontWeight: 500,
                  margin:     0,
                }}>
                  {t(`why.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dark navy advisor card */}
        <div style={{
          backgroundColor: "#0B1F33",
          borderRadius:    "24px",
          padding:         "48px 40px",
          position:        "relative",
          overflow:        "hidden",
        }}>
          {/* Decorative glow */}
          <div aria-hidden style={{
            position:      "absolute",
            top:           "-60px",
            right:         "-60px",
            width:         "200px",
            height:        "200px",
            borderRadius:  "50%",
            background:    "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <p style={{
            fontSize:      "11px",
            fontWeight:    700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color:         "#F5A623",
            marginBottom:  "16px",
          }}>
            {t("why.eyebrow")}
          </p>

          <h3 style={{
            fontSize:      "clamp(1.4rem, 2.5vw, 1.85rem)",
            fontWeight:    900,
            color:         "#FFFFFF",
            lineHeight:    1.15,
            letterSpacing: "-0.025em",
            marginBottom:  "20px",
          }}>
            {t("why.cardHeadline")}
          </h3>

          <p style={{
            fontSize:     "15px",
            color:        "rgba(255,255,255,0.72)",
            lineHeight:   1.75,
            marginBottom: "24px",
          }}>
            {t("why.cardBody")}
          </p>

          <p style={{
            fontSize:      "15px",
            color:         "#FFFFFF",
            fontStyle:     "italic",
            fontWeight:    600,
            marginBottom:  "36px",
            borderLeft:    "3px solid #F5A623",
            paddingLeft:   "16px",
            lineHeight:    1.5,
          }}>
            &ldquo;{t("why.cardQuote")}&rdquo;
          </p>

          <button
            type="button"
            onClick={onGetQuote}
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "8px",
              padding:         "14px 28px",
              borderRadius:    "10px",
              backgroundColor: "#FFFFFF",
              color:           "#0B1F33",
              fontSize:        "15px",
              fontWeight:      700,
              border:          "none",
              cursor:          "pointer",
              transition:      "opacity 200ms ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
          >
            {t("why.cta")} →
          </button>
        </div>

      </div>
    </section>
  );
}

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

  // Scroll-reveal for the sections not yet on the 2027 design
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll("[data-reveal],[data-row-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [mode]);

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
      <div data-reveal><HowItWorks mode={mode} /></div>

      {/* ── Why Choose Ativa ──────────────────────────────────────────────── */}
      <div data-reveal><WhyChooseAtiva onGetQuote={openQuote} /></div>

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <div data-reveal><Reviews mode={mode} /></div>

      {/* ── Served States ─────────────────────────────────────────────────── */}
      <div data-reveal><ServedStates /></div>

      {/* ── Blog ──────────────────────────────────────────────────────────── */}
      <div data-reveal><Blog mode={mode} /></div>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <div data-reveal><FAQ mode={mode} /></div>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <div data-reveal><ContactCTA mode={mode} onGetQuote={openQuote} onSwitchMode={() => handleModeChange("commercial")} /></div>

      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      {/* Spacer so FAB doesn't overlap footer content on mobile */}
      <div className="md:hidden" style={{ height: "96px" }} />
      <Footer mode={mode} />

      {/* ── Chat widget (desktop floating buttons live here) ─────────────── */}
      <ChatWidget mode={mode} />

      {/* ── Mobile FAB (replaces sticky bar + floating buttons on mobile) ── */}
      <MobileFAB
        mode={mode}
        onGetQuote={openQuote}
        anyModalOpen={quoteOpen || commercialQuoteOpen}
      />

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
