"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Toggle from "@/components/Toggle";
import ProductCard from "@/components/ProductCard";
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
import ProductBottomSheet from "@/components/ProductBottomSheet";
import MobileFAB from "@/components/MobileFAB";
import LicensedStatesMap from "@/components/LicensedStatesMap";
import type { Mode } from "@/types";
import type { Language } from "@/types";

// ─── Sparkle stars ────────────────────────────────────────────────────────────

const SPARKLE_POS = [
  { top: "8%",  left: "3%",  size: 9,  delay: "0s",   dur: "2.1s" },
  { top: "18%", left: "49%", size: 7,  delay: "0.55s", dur: "1.9s" },
  { top: "5%",  left: "74%", size: 11, delay: "1.1s",  dur: "2.4s" },
  { top: "45%", left: "1%",  size: 6,  delay: "0.3s",  dur: "2.0s" },
  { top: "62%", left: "53%", size: 8,  delay: "1.65s", dur: "1.8s" },
  { top: "30%", left: "93%", size: 7,  delay: "0.85s", dur: "2.3s" },
  { top: "78%", left: "22%", size: 5,  delay: "2.2s",  dur: "2.0s" },
];

function SparkleStars({ color }: { color: string }) {
  return (
    <>
      {SPARKLE_POS.map((p, i) => (
        <div
          key={i}
          className="sparkle-star absolute pointer-events-none"
          style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        >
          <svg viewBox="0 0 10 10" width={p.size} height={p.size} fill={color}>
            <path d="M5 0 L5.9 3.8 L10 5 L5.9 6.2 L5 10 L4.1 6.2 L0 5 L4.1 3.8 Z" />
          </svg>
        </div>
      ))}
    </>
  );
}

// ─── Personal floating scene ──────────────────────────────────────────────────

function PersonalScene() {
  return (
    <svg viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Ground shadow */}
      <ellipse cx="190" cy="310" rx="150" ry="18" fill="#0F2E5E" opacity="0.25" />

      {/* House — back wall shadow */}
      <rect x="88" y="144" width="200" height="148" rx="3" fill="#0A2248" />
      {/* House — main wall */}
      <rect x="84" y="140" width="200" height="148" rx="3" fill="#E8F0FE" />
      {/* House — siding lines */}
      {[160,180,200,220,240,260].map(y => (
        <line key={y} x1="84" y1={y} x2="284" y2={y} stroke="#C7D2FE" strokeWidth="0.8" />
      ))}

      {/* Roof shadow */}
      <polygon points="72,148 192,68 312,148" fill="#0A2248" />
      {/* Roof main */}
      <polygon points="68,144 188,64 308,144" fill="#1B3A6B" />
      {/* Roof highlight ridge */}
      <line x1="188" y1="64" x2="188" y2="144" stroke="#2451A0" strokeWidth="2" strokeOpacity="0.4" />
      {/* Roof left face (depth) */}
      <polygon points="68,144 188,64 188,144" fill="#1B3A6B" opacity="0.6" />

      {/* Chimney */}
      <rect x="230" y="78" width="18" height="32" rx="2" fill="#12306B" />
      <rect x="228" y="74" width="22" height="8" rx="1" fill="#1B3A6B" />

      {/* Door */}
      <rect x="163" y="220" width="42" height="68" rx="3" fill="#1B3A6B" />
      <rect x="165" y="222" width="38" height="64" rx="2" fill="#1D4ED8" opacity="0.4" />
      {/* Door knob */}
      <circle cx="200" cy="256" r="3" fill="#E8F0FE" />
      {/* Door arch */}
      <path d="M163 232 Q184 216 205 232" stroke="#E8F0FE" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Windows */}
      <rect x="100" y="168" width="52" height="42" rx="3" fill="#1D4ED8" opacity="0.35" />
      <line x1="126" y1="168" x2="126" y2="210" stroke="#E8F0FE" strokeWidth="1.2" opacity="0.5" />
      <line x1="100" y1="189" x2="152" y2="189" stroke="#E8F0FE" strokeWidth="1.2" opacity="0.5" />

      <rect x="216" y="168" width="52" height="42" rx="3" fill="#1D4ED8" opacity="0.35" />
      <line x1="242" y1="168" x2="242" y2="210" stroke="#E8F0FE" strokeWidth="1.2" opacity="0.5" />
      <line x1="216" y1="189" x2="268" y2="189" stroke="#E8F0FE" strokeWidth="1.2" opacity="0.5" />

      {/* Garage door */}
      <rect x="98" y="232" width="52" height="56" rx="2" fill="#C7D2FE" opacity="0.35" />
      {[242,252,262,278].map(y => (
        <line key={y} x1="98" y1={y} x2="150" y2={y} stroke="#E8F0FE" strokeWidth="1" opacity="0.4" />
      ))}

      {/* Car */}
      <rect x="40" y="274" width="120" height="32" rx="8" fill="#1D4ED8" />
      <path d="M56 274 L72 252 L128 252 L144 274" fill="#1B3A6B" />
      <rect x="76" y="254" width="24" height="18" rx="2" fill="#93C5FD" opacity="0.6" />
      <rect x="106" y="254" width="24" height="18" rx="2" fill="#93C5FD" opacity="0.6" />
      <circle cx="70"  cy="308" r="12" fill="#0F172A" />
      <circle cx="70"  cy="308" r="5"  fill="#374151" />
      <circle cx="138" cy="308" r="12" fill="#0F172A" />
      <circle cx="138" cy="308" r="5"  fill="#374151" />

      {/* Family silhouettes */}
      {/* Adult */}
      <circle cx="310" cy="248" r="14" fill="#0F2E5E" />
      <path d="M296 288 Q296 268 310 268 Q324 268 324 288 L324 310 L296 310 Z" fill="#0F2E5E" />
      {/* Adult 2 */}
      <circle cx="340" cy="256" r="11" fill="#1B3A6B" />
      <path d="M329 290 Q329 272 340 272 Q351 272 351 290 L351 310 L329 310 Z" fill="#1B3A6B" />
      {/* Child */}
      <circle cx="291" cy="268" r="8"  fill="#0F2E5E" opacity="0.8" />
      <path d="M283 292 Q283 278 291 278 Q299 278 299 292 L299 310 L283 310 Z" fill="#0F2E5E" opacity="0.8" />

      {/* Palm trees */}
      <rect x="16" y="220" width="8" height="84" rx="3" fill="#14532D" opacity="0.7" />
      <ellipse cx="20" cy="220" rx="24" ry="14" fill="#15803D" opacity="0.7" />
      <ellipse cx="20" cy="216" rx="18" ry="10" fill="#16A34A" opacity="0.6" />
      <ellipse cx="20" cy="212" rx="13" ry="8"  fill="#22C55E" opacity="0.5" />

      <rect x="357" y="236" width="7" height="68" rx="3" fill="#14532D" opacity="0.6" />
      <ellipse cx="360" cy="236" rx="20" ry="12" fill="#15803D" opacity="0.6" />
      <ellipse cx="360" cy="232" rx="15" ry="9"  fill="#16A34A" opacity="0.5" />

      {/* Gold shield floating above */}
      <g className="hero-float">
        {/* Glow ring */}
        <circle cx="188" cy="38" r="22" fill="#F59E0B" opacity="0.12" />
        <circle cx="188" cy="38" r="16" fill="#F59E0B" opacity="0.16" />
        {/* Shield */}
        <path d="M188 18 C188 18 204 24 204 36 C204 46 196 54 188 58 C180 54 172 46 172 36 C172 24 188 18 188 18Z" fill="#F59E0B" />
        <path d="M188 22 C188 22 200 27 200 37 C200 45 194 52 188 56 C182 52 176 45 176 37 C176 27 188 22 188 22Z" fill="#FCD34D" />
        {/* Check */}
        <path d="M181 38 L185 43 L196 32" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

// ─── Commercial floating scene ────────────────────────────────────────────────

function CommercialScene() {
  return (
    <svg viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Ground shadow */}
      <ellipse cx="190" cy="312" rx="155" ry="16" fill="#F59E0B" opacity="0.12" />

      {/* Warehouse/building back */}
      <rect x="30"  y="100" width="110" height="200" rx="2" fill="#1F2937" />
      <rect x="28"  y="96"  width="110" height="200" rx="2" stroke="#374151" strokeWidth="1.5" fill="#1E2940" />
      {/* Building windows */}
      {[112,136,160,184,208,232].map(y =>
        [40,62,84,106].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="16" height="14" rx="1" fill="#F59E0B" opacity="0.15" />
        ))
      )}
      {/* Rollup doors */}
      <rect x="38" y="256" width="44" height="44" rx="1" fill="#374151" />
      {[260,268,276,284,292].map(y => (
        <line key={y} x1="38" y1={y} x2="82" y2={y} stroke="#4B5563" strokeWidth="1" />
      ))}
      <rect x="88" y="256" width="44" height="44" rx="1" fill="#374151" />

      {/* Warehouse roof overhang */}
      <rect x="22" y="92" width="126" height="10" rx="1" fill="#374151" />

      {/* Truck trailer */}
      <rect x="62"  y="226" width="188" height="56" rx="4" fill="#1F2937" />
      <rect x="64"  y="228" width="184" height="52" rx="3" stroke="#374151" strokeWidth="1.5" fill="#243040" />
      {/* Trailer side stripe */}
      <rect x="64" y="250" width="184" height="4" fill="#F59E0B" opacity="0.4" />
      {/* Trailer ventilation lines */}
      {[80,100,120,140,160,180,200,220].map(x => (
        <line key={x} x1={x} y1="228" x2={x} y2="282" stroke="#374151" strokeWidth="1" />
      ))}

      {/* Truck cab */}
      <path d="M250 282 L250 218 L296 218 L326 248 L326 282 Z" fill="#1F2937" />
      <path d="M252 282 L252 220 L294 220 L322 248 L322 280 Z" stroke="#374151" strokeWidth="1.5" fill="#243040" />
      {/* Cab window */}
      <path d="M258 220 L290 220 L316 246 L258 246 Z" fill="#F59E0B" opacity="0.2" />
      {/* Cab window divider */}
      <line x1="274" y1="220" x2="287" y2="246" stroke="#374151" strokeWidth="1.2" />
      {/* Cab door line */}
      <line x1="258" y1="248" x2="316" y2="248" stroke="#374151" strokeWidth="1" />
      {/* Cab exhaust */}
      <rect x="318" y="200" width="7" height="48" rx="3" fill="#374151" />
      <rect x="316" y="197" width="11" height="6" rx="2" fill="#4B5563" />

      {/* Wheels */}
      {[
        { cx: 94, big: true },
        { cx: 148, big: true },
        { cx: 208, big: true },
        { cx: 268, big: false },
        { cx: 308, big: false },
      ].map(({ cx, big }) => (
        <g key={cx}>
          <circle cx={cx} cy={296} r={big ? 18 : 16} fill="#111827" />
          <circle cx={cx} cy={296} r={big ? 12 : 10} fill="#1F2937" />
          <circle cx={cx} cy={296} r={big ? 5  : 4}  fill="#374151" />
          <circle cx={cx} cy={296} r={big ? 18 : 16} fill="none" stroke="#374151" strokeWidth="1.5" />
        </g>
      ))}

      {/* Gold shield + glow */}
      <g className="hero-float">
        <circle cx="188" cy="42" r="26" fill="#F59E0B" opacity="0.10" />
        <circle cx="188" cy="42" r="18" fill="#F59E0B" opacity="0.14" />
        <path d="M188 18 C188 18 208 26 208 42 C208 56 198 66 188 72 C178 66 168 56 168 42 C168 26 188 18 188 18Z" fill="#F59E0B" />
        <path d="M188 24 C188 24 204 30 204 43 C204 55 196 63 188 68 C180 63 172 55 172 43 C172 30 188 24 188 24Z" fill="#FCD34D" />
        <path d="M180 44 L185 50 L198 36" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

// ─── Hero background layers ───────────────────────────────────────────────────

function PersonalHeroBg() {
  return (
    <div aria-hidden>
      <style>{`
        .pers-hero-section {
          padding: 40px 0 40px;
        }
        @media (max-width: 768px) {
          .pers-hero-section { padding: 40px 16px; }
        }
      `}</style>
    </div>
  );
}

function CommercialHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <style>{`
        .comm-hero-section {
          min-height: 0;
          padding: 0;
        }
        @media (max-width: 768px) {
          .comm-hero-section { min-height: 0; padding: 0; }
        }
      `}</style>
    </div>
  );
}

// ─── Stats bar ─────────────────────────────────────────────────────────────────

const STAT_ICONS = [
  <svg key="fam" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
  </svg>,
  <svg key="star" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>,
  <svg key="map" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
  </svg>,
  <svg key="bolt" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
  </svg>,
];

function StatsBar({ mode }: { mode: Mode }) {
  const { tRaw } = useLanguage();
  const isPersonal = mode === "personal";
  const stats = (tRaw("stats") ?? []) as Array<{ value: string; label: string }>;

  return (
    <div className={isPersonal ? "stats-band-personal" : "stats-band-commercial"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map(({ value, label }, i) => {
            const isGoogleStat = label.toLowerCase().includes("google");
            const inner = (
              <>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: isPersonal ? "rgba(255,255,255,0.08)" : "rgba(245,158,11,0.12)",
                    color: isPersonal ? "#93C5FD" : "#F59E0B",
                  }}>
                  {STAT_ICONS[i]}
                </div>
                <div>
                  <p className="text-xl font-black leading-none mb-0.5"
                    style={{ color: isPersonal ? "#FFFFFF" : "#F59E0B" }}>
                    {value}
                  </p>
                  <p className="text-xs font-medium leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {label}
                  </p>
                </div>
              </>
            );
            return isGoogleStat ? (
              <a
                key={i}
                href="https://maps.app.goo.gl/Zd8AptfZe46v9ntj8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="flex items-center gap-3">{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
  { code: "MA", name: "Massachusetts" },
];

function ServedStates() {
  const { t } = useLanguage();
  return (
    <section style={{
      backgroundColor: "#F8F9FB",
      padding:         "72px 24px",
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
          marginBottom:  "48px",
          lineHeight:    1.15,
          letterSpacing: "-0.025em",
        }}>
          {t("states.heading")}
        </h2>

        {/* Real US map — licensed states highlighted */}
        <div style={{ marginBottom: "40px" }}>
          <LicensedStatesMap />
        </div>

        <p style={{ fontSize: "15px", color: "#64748B", marginBottom: "6px" }}>
          {t("states.sub")}
        </p>
        <p style={{ fontSize: "15px", color: "#1B3A6B", fontWeight: 700 }}>
          {t("states.langs")}
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

// ─── Trust badges ─────────────────────────────────────────────────────────────

// ─── Mobile card carousel ────────────────────────────────────────────────────

interface MobileCardCarouselProps {
  products: Array<{ id: string; title: string; description: string }>;
  mode: Mode;
  onClick: (id: string) => void;
  onCardHoverEnter: (id: string) => void;
  onCardHoverLeave: () => void;
}

function MobileCardCarousel({ products, mode, onClick, onCardHoverEnter, onCardHoverLeave }: MobileCardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    // card min-width (240) + gap (12) = 252
    const index = Math.round(el.scrollLeft / 252);
    setActiveIndex(Math.max(0, Math.min(index, products.length - 1)));
  };

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        className="mobile-card-scroll"
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "12px",
          paddingBottom: "8px",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{ scrollSnapAlign: "start", minWidth: "240px", flexShrink: 0 }}
          >
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              mode={mode}
              onClick={onClick}
              onCardHoverEnter={onCardHoverEnter}
              onCardHoverLeave={onCardHoverLeave}
            />
          </div>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "12px" }}>
        {products.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === activeIndex ? "18px" : "6px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor: i === activeIndex ? "#0F2A44" : "#CBD5E1",
              transition: "width 200ms ease, background-color 200ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Sticky bottom bar (mobile only) ─────────────────────────────────────────

function StickyBottomBar({ onGetQuote }: { onGetQuote: () => void }) {
  const { t } = useLanguage();
  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        padding: "12px 16px",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        display: "flex",
        gap: "10px",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <button
          type="button"
          onClick={onGetQuote}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            backgroundColor: "#0F2A44",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t("sticky.cta")}
        </button>
        <span style={{ fontSize: "11px", color: "#94A3B8", textAlign: "center" }}>
          {t("sticky.sub")}
        </span>
      </div>
      <a
        href="sms:5619468261"
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "12px",
          backgroundColor: "#F5A623",
          color: "#0B1F33",
          fontWeight: 700,
          fontSize: "14px",
          textDecoration: "none",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {t("sticky.textUs")}
      </a>
    </div>
  );
}

// ─── Main site ────────────────────────────────────────────────────────────────

// ─── Hero CTA hover-label maps ────────────────────────────────────────────────

const HERO_CTA_HOVER: Record<string, Record<string, string>> = {
  personal: {
    auto:     "Get Covered Today →",
    home:     "Find My Best Rate →",
    flood:    "Check Flood Risk →",
    bundle:   "Show My Savings →",
    umbrella: "Get Extra Protection →",
    pet:      "Cover My Pet →",
  },
  commercial: {
    gl:                "See My Business Rate →",
    "workers-comp":    "Get WC Coverage →",
    "commercial-auto": "Cover My Fleet →",
    trucking:          "Cover My Trucks →",
    cargo:             "Protect My Cargo →",
    umbrella:          "Get Umbrella Quote →",
  },
};

// ─── Hero product IDs (trimmed to 3 per mode) ─────────────────────────────────
const HERO_PERSONAL_IDS   = ["auto", "home", "bundle"];
const HERO_COMMERCIAL_IDS = ["commercial-auto", "gl", "workers-comp"];

// ─── Commercial quote widget ──────────────────────────────────────────────────

const WIDGET_PRODUCTS = [
  { id: "gl",               label: "General Liability",           icon: "/icons/general-liability.png?v=2"      },
  { id: "workers-comp",     label: "Workers' Compensation",       icon: "/icons/workers-comp.png?v=2"           },
  { id: "commercial-auto",  label: "Commercial Auto",             icon: "/icons/commercial-auto.png?v=2"        },
  { id: "trucking",         label: "Trucking / Fleet",            icon: "/icons/commercial-auto.png?v=2"        },
  { id: "cargo",            label: "Cargo Insurance",             icon: "/icons/inland-marine.png?v=2"          },
  { id: "umbrella",         label: "Commercial Umbrella",         icon: "/icons/umbrella.png?v=2"               },
  { id: "professional",     label: "Professional Liability",      icon: "/icons/professional-liability.png?v=2" },
  { id: "cyber",            label: "Cyber Liability",             icon: "/icons/cyber-liability.png?v=2"        },
  { id: "builders-risk",    label: "Builders Risk",               icon: "/icons/builders-risk.png?v=2"          },
  { id: "inland-marine",    label: "Inland Marine",               icon: "/icons/inland-marine.png?v=2"          },
  { id: "surety",           label: "Surety Bond",                 icon: "/icons/surety-bond.png?v=2"            },
];

const WIDGET_CTA_LABELS: Record<string, string> = {
  "gl":               "Get My GL Quote →",
  "workers-comp":     "Get My WC Quote →",
  "commercial-auto":  "Get My Commercial Auto Quote →",
  "trucking":         "Get My Trucking Quote →",
  "cargo":            "Get My Cargo Quote →",
  "umbrella":         "Get My Umbrella Quote →",
  "professional":     "Get My PL Quote →",
  "cyber":            "Get My Cyber Quote →",
  "builders-risk":    "Get My Builders Quote →",
  "inland-marine":    "Get My Inland Marine Quote →",
  "surety":           "Get My Bond Quote →",
};

// ─── Mobile hero card maps (icon path + CTA label per hero product) ────────────
const MOBILE_HERO_ICONS: Record<string, string> = {
  auto:              "/icons/auto-insurance.png?v=2",
  home:              "/icons/property-insurance.png?v=2",
  bundle:            "/icons/bundle-save.png?v=2",
  "commercial-auto": "/icons/commercial-auto.png?v=2",
  gl:                "/icons/general-liability.png?v=2",
  "workers-comp":    "/icons/workers-compensation.png?v=2",
};
const MOBILE_HERO_CTA: Record<string, string> = {
  auto:              "Get Covered Today →",
  home:              "Find My Best Rate →",
  bundle:            "Show My Savings →",
  "commercial-auto": "Cover My Fleet →",
  gl:                "See My Rate →",
  "workers-comp":    "Get WC Quote →",
};


// ─── Commercial quote widget component ───────────────────────────────────────

function CommercialQuoteWidget({ onOpen }: { onOpen: (productId: string) => void }) {
  const { t } = useLanguage();
  const [product, setProduct]         = useState("commercial-auto");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [zip, setZip]                 = useState("");
  const [zipError, setZipError]       = useState("");
  const [zipShake, setZipShake]       = useState(false);
  const dropdownRef                   = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  const selectedProduct = WIDGET_PRODUCTS.find(p => p.id === product) ?? WIDGET_PRODUCTS[0];

  const handleSubmit = () => {
    if (!/^\d{5}$/.test(zip)) {
      setZipError(t("form.errors.zipCode"));
      setZipShake(true);
      setTimeout(() => setZipShake(false), 500);
      return;
    }
    setZipError("");
    onOpen(product);
  };

  return (
    <>
      <style>{`
        @keyframes widget-entrance {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes widget-zip-shake {
          0%,100% { transform: translateX(0);  }
          20%     { transform: translateX(-6px); }
          40%     { transform: translateX(6px);  }
          60%     { transform: translateX(-4px); }
          80%     { transform: translateX(4px);  }
        }
        @keyframes dropdown-reveal {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .widget-zip-shake  { animation: widget-zip-shake 0.45s ease-in-out; }
        .widget-input:focus { border-color: #F5A623 !important; outline: none; box-shadow: 0 0 0 3px rgba(245,166,35,0.12) !important; }
        .widget-cta:hover   { background: #FFB84D !important; transform: translateY(-1px) !important; box-shadow: 0 6px 24px rgba(245,166,35,0.45) !important; }
        .widget-cta:active  { transform: translateY(0) !important; }
        .widget-dd-trigger:hover { border-color: #F5A623 !important; }
        .widget-dd-option:hover  { background: #F7FAFC !important; }
      `}</style>

      <div style={{
        background:    "#FFFFFF",
        borderRadius:  "20px",
        padding:       "32px",
        boxShadow:     "0 8px 40px rgba(15,42,68,0.12)",
        border:        "1px solid #E2E8F0",
        maxWidth:      "420px",
        width:         "100%",
        animation:     "widget-entrance 400ms ease-out both",
      }}>

        {/* Header */}
        <p style={{ fontSize: "18px", fontWeight: 700, color: "#0B1F33", marginBottom: "6px" }}>
          {t("hero.commercial.widgetTitle")}
        </p>
        <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "24px" }}>
          {t("hero.commercial.widgetSub")}
        </p>

        {/* Row 1 — Product custom dropdown */}
        <div style={{ marginBottom: "0" }}>
          <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#64748B", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase" }}>
            {t("hero.commercial.productLabel")}
          </p>
          <div ref={dropdownRef} style={{ position: "relative" }}>

            {/* Trigger — selected state display */}
            <button
              type="button"
              className="widget-dd-trigger"
              onClick={() => setDropdownOpen(o => !o)}
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            "12px",
                width:          "100%",
                padding:        "12px 16px",
                background:     "#F7FAFC",
                border:         `1.5px solid ${dropdownOpen ? "#F5A623" : "#E2E8F0"}`,
                borderRadius:   "12px",
                cursor:         "pointer",
                transition:     "border-color 150ms ease, box-shadow 150ms ease",
                boxShadow:      dropdownOpen ? "0 0 0 3px rgba(245,166,35,0.12)" : "none",
                textAlign:      "left",
              }}
            >
              <Image
                src={selectedProduct.icon}
                alt={selectedProduct.label}
                width={40} height={40}
                style={{ width: "40px", height: "40px", objectFit: "contain", flexShrink: 0 }}
              />
              <span style={{ flex: 1, fontSize: "16px", fontWeight: 600, color: "#0B1F33", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {selectedProduct.label}
              </span>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0, transition: "transform 150ms ease", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path d="M4 6l4 4 4-4"/>
              </svg>
            </button>

            {/* Dropdown list */}
            {dropdownOpen && (
              <div style={{
                position:    "absolute",
                top:         "calc(100% + 6px)",
                left:        0,
                width:       "100%",
                background:  "#FFFFFF",
                border:      "1.5px solid #E2E8F0",
                borderRadius: "12px",
                boxShadow:   "0 8px 24px rgba(0,0,0,0.10)",
                zIndex:      50,
                maxHeight:   "320px",
                overflowY:   "auto",
                animation:   "dropdown-reveal 150ms ease-out both",
              }}>
                {WIDGET_PRODUCTS.map(p => {
                  const isSelected = p.id === product;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      className="widget-dd-option"
                      onClick={() => { setProduct(p.id); setDropdownOpen(false); }}
                      style={{
                        display:         "flex",
                        alignItems:      "center",
                        gap:             "12px",
                        width:           "100%",
                        padding:         "12px 16px",
                        background:      isSelected ? "#FFFBF0" : "transparent",
                        border:          "none",
                        borderLeft:      isSelected ? "3px solid #F5A623" : "3px solid transparent",
                        cursor:          "pointer",
                        textAlign:       "left",
                        transition:      "background 100ms ease",
                      }}
                    >
                      <Image
                        src={p.icon}
                        alt={p.label}
                        width={32} height={32}
                        style={{ width: "32px", height: "32px", objectFit: "contain", flexShrink: 0 }}
                      />
                      <span style={{ fontSize: "15px", color: "#0B1F33", fontWeight: isSelected ? 600 : 400 }}>
                        {p.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#F1F5F9", margin: "16px 0" }} />

        {/* Row 2 — ZIP */}
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#64748B", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase" }}>
            {t("hero.commercial.locationLabel")}
          </p>
          <div className={zipShake ? "widget-zip-shake" : ""}>
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              className="widget-input"
              placeholder="ZIP Code"
              value={zip}
              onChange={e => {
                const v = e.target.value.replace(/\D/g, "").slice(0, 5);
                setZip(v);
                if (zipError) setZipError("");
              }}
              onKeyDown={e => { if (e.key === "Enter") handleSubmit(); }}
              style={{
                width:        "100%",
                height:       "52px",
                padding:      "0 16px",
                fontSize:     "16px",
                fontWeight:   500,
                color:        "#0B1F33",
                background:   "#F7FAFC",
                border:       `1.5px solid ${zipError ? "#DC2626" : "#E2E8F0"}`,
                borderRadius: "12px",
                transition:   "border-color 150ms ease, box-shadow 150ms ease",
                outline:      "none",
              }}
            />
            {zipError && (
              <p style={{ fontSize: "13px", color: "#DC2626", marginTop: "6px" }}>{zipError}</p>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="widget-cta"
          onClick={handleSubmit}
          style={{
            width:        "100%",
            height:       "56px",
            background:   "#F5A623",
            color:        "#0B1F33",
            fontSize:     "17px",
            fontWeight:   700,
            borderRadius: "14px",
            border:       "none",
            cursor:       "pointer",
            transition:   "background 150ms ease, transform 150ms ease, box-shadow 150ms ease",
            boxShadow:    "0 4px 16px rgba(245,166,35,0.35)",
          }}
        >
          {WIDGET_CTA_LABELS[product] ?? "Get My Commercial Quote →"}
        </button>

        {/* Reassurance line */}
        <p style={{ fontSize: "13px", color: "#94A3B8", textAlign: "center", marginTop: "12px" }}>
          {t("hero.commercial.reassurance")}
        </p>
      </div>
    </>
  );
}

function AtivaSite() {
  const { t, tProducts, lang } = useLanguage();
  const searchParams = useSearchParams();
  const [mode, setMode]                             = useState<Mode>(() => {
    // SSR-safe: initialise from URL if available
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search);
      if (p.get("tab") === "commercial") return "commercial";
    }
    return "personal";
  });
  const [quoteOpen, setQuoteOpen]                   = useState(false);
  const [quoteProduct, setQuoteProduct]             = useState<string | undefined>(undefined);
  const [quoteInitialData, setQuoteInitialData]     = useState<Record<string, string>>({});
  const [commercialQuoteOpen, setCommercialQuoteOpen]   = useState(false);
  const [commercialQuoteProduct, setCommercialQuoteProduct] = useState<string | undefined>(undefined);
  // Mobile product-picker bottom sheets
  const [personalSheetOpen, setPersonalSheetOpen]     = useState(false);
  const [commercialSheetOpen, setCommercialSheetOpen] = useState(false);
  const [hoveredCard, setHoveredCard]               = useState<string | null>(null);
  const [userState,  setUserState]                  = useState<string | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // ZIP quick-start (personal)
  const [heroZip, setHeroZip]     = useState("");
  const [zipShake, setZipShake]   = useState(false);
  const [zipErrMsg, setZipErrMsg] = useState("");
  // Mobile commercial widget state
  const [mobCommProduct, setMobCommProduct]       = useState("commercial-auto");
  const [mobCommDropOpen, setMobCommDropOpen]     = useState(false);
  const [mobCommZip, setMobCommZip]               = useState("");
  const [mobCommZipError, setMobCommZipError]     = useState("");
  const [mobCommZipShake, setMobCommZipShake]     = useState(false);
  const mobCommDropRef                            = useRef<HTMLDivElement>(null);

  const products            = tProducts(mode);
  const personalProducts   = tProducts("personal");
  const commercialProducts = tProducts("commercial");
  const isPersonal = mode === "personal";

  // ── Geo-detection: personalise hero sub with user's state ─────────────────
  const LICENSED_STATES = [
    "Connecticut",
    "Florida",
    "Georgia",
    "Maryland",
    "Massachusetts",
    "New Jersey",
    "North Carolina",
    "Ohio",
    "Pennsylvania",
    "South Carolina",
    "Tennessee",
  ];
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data: { region?: string }) => {
        const state = data?.region ?? "";
        if (state && LICENSED_STATES.includes(state)) {
          setUserState(state);
        }
      })
      .catch(() => {}); // silent fail — neutral copy stays
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const heroSub: Record<Mode, string> = {
    personal:   userState
      ? `Coverage built for ${userState} families — we shop multiple top-rated carriers to get you the best rate.`
      : t("hero.personal.sub"),
    commercial: userState
      ? `Coverage built for ${userState} businesses — fleets, contractors, and growing companies trust Ativa.`
      : t("hero.commercial.sub"),
  };

  const heroProductIds = isPersonal ? HERO_PERSONAL_IDS : HERO_COMMERCIAL_IDS;
  const heroProducts   = products.filter(p => heroProductIds.includes(p.id));

  const handleModeChange = useCallback((newMode: Mode) => {
    setMode(newMode);
  }, []);

  const handleProductClick = useCallback((id: string) => {
    if (isPersonal) {
      setQuoteProduct(id);
      setQuoteOpen(true);
    } else {
      setCommercialQuoteProduct(id);
      setCommercialQuoteOpen(true);
    }
  }, [isPersonal]);

  const handlePersonalProductClick = useCallback((id: string) => {
    setQuoteProduct(id);
    setQuoteOpen(true);
  }, []);

  const handleCommercialProductClick = useCallback((id: string) => {
    setCommercialQuoteProduct(id);
    setCommercialQuoteOpen(true);
  }, []);

  const openQuote = useCallback(() => {
    if (isPersonal) { setQuoteProduct(undefined); setQuoteOpen(true); }
    else             { setCommercialQuoteProduct(undefined); setCommercialQuoteOpen(true); }
  }, [isPersonal]);

  const handleCardHoverEnter = useCallback((id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHoveredCard(id);
  }, []);

  const handleCardHoverLeave = useCallback(() => {
    hoverTimer.current = setTimeout(() => setHoveredCard(null), 800);
  }, []);

  const handleZipSubmit = useCallback(() => {
    if (/^\d{5}$/.test(heroZip)) {
      setZipErrMsg("");
      setQuoteInitialData({ garageZip: heroZip });
      setQuoteProduct("auto");
      setQuoteOpen(true);
    } else {
      setZipErrMsg(t("form.errors.zipCode"));
      setZipShake(true);
      setTimeout(() => setZipShake(false), 500);
    }
  }, [heroZip]);

  const handleCommercialZipSubmit = useCallback(() => {
    if (/^\d{5}$/.test(heroZip)) {
      setZipErrMsg("");
      setCommercialQuoteProduct(undefined);
      setCommercialQuoteOpen(true);
    } else {
      setZipErrMsg(t("form.errors.zipCode"));
      setZipShake(true);
      setTimeout(() => setZipShake(false), 500);
    }
  }, [heroZip]);

  // Reactively sync tab + quote modals from URL search params.
  // Runs on mount AND whenever the URL changes (e.g. clicking nav Home/Commercial links).
  useEffect(() => {
    const openQuote = searchParams.get("openQuote");
    const tab       = searchParams.get("tab");
    if (openQuote === "personal") {
      setMode("personal");
      setQuoteOpen(true);
    } else if (openQuote === "commercial") {
      setMode("commercial");
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

  // Close mobile commercial dropdown on outside click
  useEffect(() => {
    if (!mobCommDropOpen) return;
    const handler = (e: MouseEvent) => {
      if (mobCommDropRef.current && !mobCommDropRef.current.contains(e.target as Node)) {
        setMobCommDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobCommDropOpen]);

  // Reset hover state on mode switch and clean up on unmount
  useEffect(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHoveredCard(null);
  }, [mode]);
  useEffect(() => () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); }, []);

  // Derive dynamic CTA text from hovered card
  const defaultCtaText = t(`hero.${mode}.cta1`);
  const heroCta = (hoveredCard && HERO_CTA_HOVER[mode]?.[hoveredCard]) ?? defaultCtaText;

  // Comparison section row reveal
  useEffect(() => {
    const rows = document.querySelectorAll("[data-row-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    rows.forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, [mode]);

  // Scroll-reveal for sections and card grids
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
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div data-mode={mode} className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--bg)", transition: "background-color 0.35s ease" }}>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <Header mode={mode} onGetQuote={openQuote} />

      {/* ── Trust credentials strip ──────────────────────────────────────── */}
      <TrustBar mode={mode} />

      {/* ── Hero — everything above the fold ────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
      <section className={`relative ${isPersonal ? "hero-bg-personal" : "hero-bg-commercial comm-hero-section"}`}>
        {/* Background illustration — hidden on mobile (performance) */}
        <div className="hidden md:block">
          {!isPersonal && <CommercialHeroBg />}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          {/* ══════════════ MOBILE HERO (hidden md+) ══════════════════════ */}
          <div className="md:hidden" style={{ paddingTop: "12px", paddingBottom: "16px" }}>
          {isPersonal ? (

            /* ── PERSONAL MOBILE HERO ─────────────────────────────────── */
            <div key="mobile-personal" className="mode-fade-in">
              <style>{`
                .mob-zip-shake { animation: zip-shake 0.45s ease-in-out; }
                .mob-zip-input:focus  { outline: none; box-shadow: 0 0 0 3px rgba(245,166,35,0.15) !important; border-color: #F5A623 !important; }
                .mob-zip-btn:hover    { background: #1E3A5F !important; }
                .mob-prod-card:hover  { border-color: #F5A623 !important; box-shadow: 0 4px 12px rgba(245,166,35,0.12) !important; }
              `}</style>

              {/* 1 · Toggle block — TOP on mobile */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
                <p style={{ fontSize: "13px", color: "#64748B", textAlign: "center", margin: 0 }}>
                  {t("toggle.headline")}
                </p>
                <div style={{ width: "100%", maxWidth: "280px" }}>
                  <Toggle mode={mode} onChange={handleModeChange} />
                </div>
                <p style={{ fontSize: "12px", color: "#94A3B8", textAlign: "center", margin: 0 }}>
                  {t("toggle.switchToCommercial")}
                </p>
              </div>

              {/* 2 · Headline */}
              <h1 style={{
                fontSize: "clamp(1.7rem, 6vw, 2.1rem)",
                fontWeight: 900,
                textAlign: "center",
                color: "#0B1F33",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                padding: "0 12px",
                marginBottom: "8px",
              }}>
                {t("hero.personal.findCoverage")}{" "}
                <span style={{ color: "#1B3A6B" }}>{t("hero.personal.shopMarket")}</span>
              </h1>

              {/* 3 · Subheadline */}
              <p style={{ textAlign: "center", fontSize: "13px", color: "#4A5568", padding: "0 16px", marginBottom: "14px", lineHeight: 1.5 }}>
                {t("hero.personal.heroSub")}
              </p>

              {/* 4 · Auto Insurance widget — compact */}
              <div style={{
                margin: "0 16px",
                background: "#FFFFFF",
                border: "2px solid #F5A623",
                borderRadius: "14px",
                padding: "16px",
                boxShadow: "0 4px 16px rgba(245,166,35,0.10)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                  <Image
                    src="/icons/auto-insurance.png?v=2"
                    alt="Auto Insurance"
                    width={64} height={64}
                    style={{ width: "64px", height: "64px", objectFit: "contain", flexShrink: 0 }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "16px", fontWeight: 700, color: "#0B1F33", marginBottom: "2px" }}>
                      {t("hero.personal.autoWidgetTitle")}
                    </p>
                    <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.3 }}>
                      {t("hero.personal.autoWidgetSavings")}
                    </p>
                  </div>
                </div>

                <div className={zipShake ? "mob-zip-shake" : ""}>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    className="mob-zip-input"
                    placeholder={t("form.labels.zipCode")}
                    value={heroZip}
                    onChange={e => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 5);
                      setHeroZip(v);
                      if (zipErrMsg) setZipErrMsg("");
                    }}
                    onKeyDown={e => { if (e.key === "Enter") handleZipSubmit(); }}
                    style={{
                      width: "100%", height: "48px",
                      padding: "0 14px", fontSize: "16px",
                      border: `1.5px solid ${zipErrMsg ? "#DC2626" : "#E2E8F0"}`,
                      borderRadius: "10px", background: "#F7FAFC",
                      color: "#0B1F33", marginBottom: "8px", display: "block",
                      outline: "none",
                    }}
                  />
                  {zipErrMsg && (
                    <p style={{ fontSize: "12px", color: "#DC2626", marginBottom: "6px", marginTop: "-4px" }}>{zipErrMsg}</p>
                  )}
                  <button
                    type="button"
                    className="mob-zip-btn"
                    onClick={handleZipSubmit}
                    style={{
                      width: "100%", height: "48px",
                      background: "#1B3A6B", color: "#FFFFFF",
                      fontSize: "15px", fontWeight: 700,
                      border: "none", borderRadius: "10px",
                      cursor: "pointer", transition: "background 150ms ease",
                    }}
                  >
                    {t("hero.personal.getQuoteCta")}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => { setQuoteProduct("auto"); setQuoteOpen(true); }}
                  style={{
                    display: "block", width: "100%", background: "none", border: "none",
                    cursor: "pointer", fontSize: "12px", color: "#64748B",
                    textAlign: "center", marginTop: "8px", padding: 0,
                  }}
                >
                  {t("hero.personal.wantMoreInfo")}{" "}
                  <span style={{ color: "#F5A623", textDecoration: "underline" }}>{t("hero.personal.autoWidgetTitle")}</span> →
                </button>
              </div>

              {/* 6 · 2×2 mini product grid — compact */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "8px", padding: "8px 16px 0",
              }}>
                {[
                  { id: "bundle",   label: t("hero.personal.bundleSave"),  icon: "/icons/bundle-save.png?v=2"        },
                  { id: "home",     label: t("hero.personal.propertyIns"), icon: "/icons/property-insurance.png?v=2" },
                  { id: "flood",    label: t("hero.personal.floodIns"),    icon: "/icons/flood-insurance.png?v=2"    },
                  { id: "umbrella", label: t("hero.personal.umbrellaIns"), icon: "/icons/umbrella.png?v=2"           },
                ].map(card => (
                  <button
                    key={card.id}
                    type="button"
                    className="mob-prod-card"
                    onClick={() => { setQuoteProduct(card.id); setQuoteOpen(true); }}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E8EDF3",
                      borderRadius: "12px",
                      padding: "10px 8px",
                      textAlign: "center",
                      cursor: "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center",
                      transition: "border-color 150ms ease, box-shadow 150ms ease",
                    }}
                  >
                    <Image
                      src={card.icon}
                      alt={card.label}
                      width={56} height={56}
                      style={{ width: "56px", height: "56px", objectFit: "contain", marginBottom: "6px" }}
                    />
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#0B1F33", lineHeight: 1.2 }}>
                      {card.label}
                    </span>
                  </button>
                ))}
              </div>
              {/* Pet — text link */}
              <button
                type="button"
                onClick={() => { setQuoteProduct("pet"); setQuoteOpen(true); }}
                style={{
                  display: "block", width: "100%", background: "none", border: "none",
                  cursor: "pointer", fontSize: "12px", color: "#64748B",
                  textAlign: "center", marginTop: "8px", padding: "4px 0",
                }}
              >
                {t("hero.personal.alsoAvailable")}{" "}
                <span style={{ color: "#1B3A6B", fontWeight: 600, textDecoration: "underline" }}>
                  {t("hero.personal.petIns")}
                </span>{" →"}
              </button>
            </div>

          ) : (

            /* ── COMMERCIAL MOBILE HERO ───────────────────────────────── */
            (() => {
              const mobSelected = WIDGET_PRODUCTS.find(p => p.id === mobCommProduct) ?? WIDGET_PRODUCTS[0];
              const handleMobSubmit = () => {
                if (/^\d{5}$/.test(mobCommZip)) {
                  setMobCommZipError("");
                  setCommercialQuoteProduct(mobCommProduct);
                  setCommercialQuoteOpen(true);
                } else {
                  setMobCommZipError(t("form.errors.zipCode"));
                  setMobCommZipShake(true);
                  setTimeout(() => setMobCommZipShake(false), 500);
                }
              };
              return (
                <div key="mobile-commercial" className="mode-fade-in">
                  <style>{`
                    @keyframes mob-dd-reveal {
                      from { opacity: 0; transform: translateY(-4px); }
                      to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes mob-comm-shake {
                      0%,100% { transform: translateX(0);   }
                      20%     { transform: translateX(-5px); }
                      40%     { transform: translateX(5px);  }
                      60%     { transform: translateX(-3px); }
                      80%     { transform: translateX(3px);  }
                    }
                    .mob-comm-shake   { animation: mob-comm-shake 0.45s ease-in-out; }
                    .mob-comm-dd-opt:hover  { background: #F7FAFC !important; }
                    .mob-comm-cta:hover     { background: #FFB84D !important; }
                    .mob-comm-dd-trig:hover { border-color: #F5A623 !important; }
                  `}</style>

                  {/* 1 · Eyebrow + Headline */}
                  <div style={{ padding: "20px 16px 12px", textAlign: "center" }}>
                    <span style={{
                      display: "inline-block",
                      fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
                      color: "#F5A623", textTransform: "uppercase",
                      marginBottom: "8px",
                    }}>
                      Business Insurance
                    </span>
                    <h1 style={{
                      fontSize: "clamp(1.8rem, 6vw, 2.2rem)",
                      fontWeight: 900, textAlign: "center",
                      color: "#FFFFFF", lineHeight: 1.08,
                      letterSpacing: "-0.025em", margin: 0,
                    }}>
                      {t("hero.commercial.headline")}
                    </h1>
                    <p style={{ textAlign: "center", fontSize: "14px", color: "rgba(255,255,255,0.65)", marginTop: "8px", marginBottom: 0, lineHeight: 1.5 }}>
                      {t("hero.commercial.mobileSub")}
                    </p>
                  </div>

                  {/* 2 · Commercial quote widget */}
                  <div style={{
                    margin: "0 16px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "20px",
                    boxShadow: "0 4px 20px rgba(15,42,68,0.10)",
                    border: "1px solid #E2E8F0",
                  }}>
                    <p style={{ fontSize: "17px", fontWeight: 700, color: "#0B1F33", marginBottom: "4px" }}>
                      {t("hero.commercial.widgetTitle")}
                    </p>
                    <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "16px" }}>
                      {t("hero.commercial.widgetSub")}
                    </p>

                    {/* Product dropdown */}
                    <div ref={mobCommDropRef} style={{ position: "relative", marginBottom: "12px" }}>
                      <button
                        type="button"
                        className="mob-comm-dd-trig"
                        onClick={() => setMobCommDropOpen(o => !o)}
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          width: "100%", height: "52px",
                          padding: "0 14px",
                          background: "#F7FAFC",
                          border: `1.5px solid ${mobCommDropOpen ? "#F5A623" : "#E2E8F0"}`,
                          borderRadius: "10px", cursor: "pointer",
                          boxShadow: mobCommDropOpen ? "0 0 0 3px rgba(245,166,35,0.12)" : "none",
                          transition: "border-color 150ms ease",
                          textAlign: "left",
                        }}
                      >
                        <Image
                          src={mobSelected.icon}
                          alt={mobSelected.label}
                          width={32} height={32}
                          style={{ width: "32px", height: "32px", objectFit: "contain", flexShrink: 0 }}
                        />
                        <span style={{ flex: 1, fontSize: "16px", fontWeight: 600, color: "#0B1F33", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {mobSelected.label}
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          style={{ flexShrink: 0, transition: "transform 150ms ease", transform: mobCommDropOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                          <path d="M4 6l4 4 4-4"/>
                        </svg>
                      </button>

                      {mobCommDropOpen && (
                        <div style={{
                          position: "absolute", top: "calc(100% + 4px)", left: 0,
                          width: "100%", background: "#FFFFFF",
                          border: "1.5px solid #E2E8F0", borderRadius: "10px",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                          zIndex: 60, maxHeight: "280px", overflowY: "auto",
                          animation: "mob-dd-reveal 150ms ease-out both",
                        }}>
                          {WIDGET_PRODUCTS.map(p => {
                            const isSel = p.id === mobCommProduct;
                            return (
                              <button
                                key={p.id}
                                type="button"
                                className="mob-comm-dd-opt"
                                onClick={() => { setMobCommProduct(p.id); setMobCommDropOpen(false); }}
                                style={{
                                  display: "flex", alignItems: "center", gap: "10px",
                                  width: "100%", padding: "10px 14px",
                                  background: isSel ? "#FFFBF0" : "transparent",
                                  border: "none",
                                  borderLeft: isSel ? "3px solid #F5A623" : "3px solid transparent",
                                  cursor: "pointer", textAlign: "left",
                                  transition: "background 100ms ease",
                                }}
                              >
                                <Image
                                  src={p.icon}
                                  alt={p.label}
                                  width={28} height={28}
                                  style={{ width: "28px", height: "28px", objectFit: "contain", flexShrink: 0 }}
                                />
                                <span style={{ fontSize: "15px", color: "#0B1F33", fontWeight: isSel ? 600 : 400 }}>
                                  {p.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* ZIP input */}
                    <div className={mobCommZipShake ? "mob-comm-shake" : ""} style={{ marginBottom: "12px" }}>
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        placeholder="ZIP Code"
                        value={mobCommZip}
                        onChange={e => {
                          const v = e.target.value.replace(/\D/g, "").slice(0, 5);
                          setMobCommZip(v);
                          if (mobCommZipError) setMobCommZipError("");
                        }}
                        onKeyDown={e => { if (e.key === "Enter") handleMobSubmit(); }}
                        style={{
                          width: "100%", height: "52px",
                          padding: "0 16px", fontSize: "16px",
                          border: `1.5px solid ${mobCommZipError ? "#DC2626" : "#E2E8F0"}`,
                          borderRadius: "10px", background: "#F7FAFC",
                          color: "#0B1F33", outline: "none", display: "block",
                        }}
                      />
                      {mobCommZipError && (
                        <p style={{ fontSize: "13px", color: "#DC2626", marginTop: "6px" }}>{mobCommZipError}</p>
                      )}
                    </div>

                    {/* CTA button */}
                    <button
                      type="button"
                      className="mob-comm-cta"
                      onClick={handleMobSubmit}
                      style={{
                        width: "100%", height: "56px",
                        background: "#F5A623", color: "#0B1F33",
                        fontSize: "16px", fontWeight: 700,
                        border: "none", borderRadius: "12px",
                        cursor: "pointer",
                        transition: "background 150ms ease",
                        boxShadow: "0 4px 16px rgba(245,166,35,0.35)",
                      }}
                    >
                      {WIDGET_CTA_LABELS[mobCommProduct] ?? "Get My Commercial Quote →"}
                    </button>

                    {/* Reassurance */}
                    <p style={{ fontSize: "12px", color: "#94A3B8", textAlign: "center", marginTop: "10px" }}>
                      {t("hero.commercial.reassurance")}
                    </p>
                  </div>

                  {/* 6 · Agent link */}
                  <div style={{ textAlign: "center", marginTop: "12px" }}>
                    <a
                      href="sms:5619468261"
                      style={{ fontSize: "14px", color: "#64748B", textDecoration: "none", transition: "color 150ms ease" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#0F2A44"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748B"; }}
                    >
                      {t("hero.commercial.notSure")}
                    </a>
                  </div>

                  {/* 7 · Toggle block */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginTop: "16px", paddingBottom: "8px" }}>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", fontWeight: 500, margin: 0 }}>
                      {t("toggle.headline")}
                    </p>
                    <div style={{ width: "100%", maxWidth: "300px" }}>
                      <Toggle mode={mode} onChange={handleModeChange} />
                    </div>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                      {t("toggle.switchToPersonal")}
                    </p>
                  </div>
                </div>
              );
            })()

          )}
          </div>
          {/* ══════════════ END MOBILE HERO ════════════════════════════════ */}

          {/* ══════════════ DESKTOP HERO (hidden on mobile) ════════════════ */}
          <div className="hidden md:block">

          {/* ── PERSONAL: Centered headline + product grid ── */}
          {isPersonal ? (
            <div key="personal-hero-v3" className="mode-fade-in"
              style={{
                marginLeft:          "calc(-50vw + 50%)",
                marginRight:         "calc(-50vw + 50%)",
                width:               "100vw",
                display:             "grid",
                gridTemplateColumns: "1fr 1fr",
                minHeight:           "480px",
              }}
            >
              <style>{`
                @keyframes zip-shake {
                  0%,100% { transform: translateX(0); }
                  20%     { transform: translateX(-6px); }
                  40%     { transform: translateX(6px); }
                  60%     { transform: translateX(-4px); }
                  80%     { transform: translateX(4px); }
                }
                .zip-shake { animation: zip-shake 0.45s ease-in-out; }
              `}</style>

              {/* Left: hero photo */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/personal-hero-bg.png"
                  alt=""
                  fill
                  style={{ objectFit: "cover", objectPosition: "right center" }}
                  priority
                />
                {/* Soft gradient blend toward text area */}
                <div style={{
                  position: "absolute",
                  inset:    0,
                  background: "linear-gradient(to right, transparent 55%, rgba(244,248,255,0.85) 100%)",
                }} />
              </div>

              {/* Right: headline + ZIP widget */}
              <div style={{
                display:         "flex",
                flexDirection:   "column",
                justifyContent:  "center",
                padding:         "64px clamp(24px, 5vw, 64px)",
                backgroundColor: "#F4F8FF",
              }}>
                <h1 style={{
                  fontSize:      "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight:    900,
                  color:         "#0B1F33",
                  lineHeight:    1.1,
                  letterSpacing: "-0.03em",
                  marginBottom:  "14px",
                }}>
                  {t("hero.personal.findCoverage")}
                  <br />
                  <span style={{ color: "#1B3A6B" }}>{t("hero.personal.shopMarket")}</span>
                </h1>

                <p style={{
                  fontSize:     "16px",
                  color:        "#4A5568",
                  lineHeight:   1.65,
                  marginBottom: "36px",
                  maxWidth:     "420px",
                }}>
                  {t("hero.personal.heroSub")}
                </p>

                <p style={{
                  fontSize:      "11px",
                  fontWeight:    700,
                  color:         "#64748B",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom:  "10px",
                }}>
                  {t("hero.personal.preferToStart")}
                </p>

                <div style={{ display: "flex", gap: "10px", marginBottom: "12px", alignItems: "stretch" }}>
                  <input
                    className={zipShake ? "zip-shake" : ""}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder={t("hero.personal.enterZip")}
                    value={heroZip}
                    onChange={e => setHeroZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                    onKeyDown={e => e.key === "Enter" && handleZipSubmit()}
                    style={{
                      flex:            "0 0 auto",
                      width:           "160px",
                      padding:         "13px 16px",
                      borderRadius:    "10px",
                      border:          `1.5px solid ${zipErrMsg ? "#EF4444" : "#CBD5E1"}`,
                      fontSize:        "15px",
                      fontWeight:      500,
                      color:           "#0B1F33",
                      backgroundColor: "#FFFFFF",
                      outline:         "none",
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleZipSubmit}
                    style={{
                      flex:            "0 0 auto",
                      padding:         "13px 22px",
                      borderRadius:    "10px",
                      backgroundColor: "#1B3A6B",
                      color:           "#FFFFFF",
                      fontSize:        "15px",
                      fontWeight:      700,
                      border:          "none",
                      cursor:          "pointer",
                      whiteSpace:      "nowrap",
                      transition:      "opacity 200ms ease",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                  >
                    {t("hero.personal.seeMyRate")} →
                  </button>
                </div>

                {zipErrMsg && (
                  <p style={{ color: "#EF4444", fontSize: "13px", marginBottom: "10px" }}>
                    {zipErrMsg}
                  </p>
                )}

                <a
                  href="sms:5619468261"
                  style={{
                    fontSize:       "14px",
                    color:          "#64748B",
                    fontWeight:     500,
                    textDecoration: "none",
                    transition:     "color 150ms ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#1B3A6B"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748B"; }}
                >
                  {t("hero.personal.notSureText")}{" "}
                  <span style={{ color: "#1B3A6B", fontWeight: 600 }}>
                    {t("hero.personal.talkToAdvisor")} →
                  </span>
                </a>
              </div>
            </div>

          ) : (

            /* ── COMMERCIAL HERO v4: Full-bleed image + in-flow 2-col grid ── */
            <div
              key="commercial-hero-v3"
              className="mode-fade-in"
              style={{
                marginLeft:  "calc(-50vw + 50%)",
                marginRight: "calc(-50vw + 50%)",
                width:       "100vw",
                position:    "relative",
                minHeight:   "500px",
                overflow:    "hidden",
                display:     "flex",
                alignItems:  "center",
              }}
            >
              {/* Full-bleed background image */}
              <Image
                src="/images/commercial-hero-bg.jpg"
                alt=""
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
                priority
              />

              {/* Dark gradient: dense left → translucent right, image visible in center */}
              <div style={{
                position:   "absolute",
                inset:      0,
                background: "linear-gradient(105deg, rgba(11,31,51,0.96) 0%, rgba(11,31,51,0.84) 35%, rgba(11,31,51,0.52) 58%, rgba(11,31,51,0.22) 100%)",
              }} />

              {/* Content grid: text left (~55%) · card right (~340px fixed) */}
              <div style={{
                position:            "relative",
                zIndex:              1,
                width:               "100%",
                maxWidth:            "1280px",
                margin:              "0 auto",
                padding:             "64px clamp(24px, 5vw, 64px)",
                display:             "grid",
                gridTemplateColumns: "1fr 340px",
                gap:                 "52px",
                alignItems:          "center",
              }}>

                {/* LEFT: eyebrow · headline · sub · trust badges */}
                <div>
                  <p style={{
                    fontSize:      "11px",
                    fontWeight:    700,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color:         "#F5A623",
                    marginBottom:  "18px",
                  }}>
                    {t("hero.commercial.eyebrow")}
                  </p>

                  <h1 style={{
                    fontSize:      "clamp(2.2rem, 3.5vw, 3.2rem)",
                    fontWeight:    900,
                    color:         "#FFFFFF",
                    lineHeight:    1.05,
                    letterSpacing: "-0.03em",
                    marginBottom:  "4px",
                  }}>
                    {t("hero.commercial.protect")}
                  </h1>
                  <h1 style={{
                    fontSize:      "clamp(2.2rem, 3.5vw, 3.2rem)",
                    fontWeight:    900,
                    color:         "#F5A623",
                    lineHeight:    1.05,
                    letterSpacing: "-0.03em",
                    marginBottom:  "22px",
                  }}>
                    {t("hero.commercial.weShop")}
                  </h1>

                  <p style={{
                    fontSize:     "15px",
                    color:        "rgba(255,255,255,0.65)",
                    lineHeight:   1.65,
                    marginBottom: "36px",
                    maxWidth:     "460px",
                  }}>
                    {t("hero.commercial.heroSub")}
                  </p>

                  {/* Trust badges */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {[
                      t("hero.commercial.badge1"),
                      t("hero.commercial.badge2"),
                      t("hero.commercial.badge3"),
                      t("hero.commercial.badge4"),
                      t("hero.commercial.badge5"),
                    ].map((badge) => (
                      <div key={badge} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                        <div style={{
                          width:           "28px",
                          height:          "28px",
                          borderRadius:    "8px",
                          backgroundColor: "rgba(245,166,35,0.15)",
                          border:          "1px solid rgba(245,166,35,0.30)",
                          display:         "flex",
                          alignItems:      "center",
                          justifyContent:  "center",
                        }}>
                          <svg viewBox="0 0 16 16" fill="#F5A623" width="12" height="12">
                            <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.60)", fontWeight: 500, lineHeight: 1.3, maxWidth: "90px" }}>
                          {badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: in-flow white quote card */}
                <div style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius:    "16px",
                  padding:         "28px 28px 22px",
                  boxShadow:       "0 24px 60px rgba(0,0,0,0.35)",
                  flexShrink:      0,
                }}>
                  <p style={{ fontSize: "15px", fontWeight: 800, color: "#0B1F33", marginBottom: "16px" }}>
                    {t("hero.commercial.getStarted")}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "12px" }}>
                    <div style={{ position: "relative" }}>
                      <svg viewBox="0 0 20 20" fill="#94A3B8" width="16" height="16"
                        style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <input
                        className={zipShake ? "zip-shake" : ""}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder={t("hero.commercial.enterZip")}
                        value={heroZip}
                        onChange={e => setHeroZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                        onKeyDown={e => e.key === "Enter" && handleCommercialZipSubmit()}
                        style={{
                          width:           "100%",
                          padding:         "12px 12px 12px 36px",
                          borderRadius:    "10px",
                          border:          `1.5px solid ${zipErrMsg ? "#EF4444" : "#E2E8F0"}`,
                          fontSize:        "14px",
                          color:           "#0B1F33",
                          backgroundColor: "#F8FAFE",
                          outline:         "none",
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleCommercialZipSubmit}
                      style={{
                        width:           "100%",
                        padding:         "13px",
                        borderRadius:    "10px",
                        backgroundColor: "#F5A623",
                        color:           "#0B1F33",
                        fontSize:        "15px",
                        fontWeight:      800,
                        border:          "none",
                        cursor:          "pointer",
                        transition:      "opacity 200ms ease",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.90"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                    >
                      {t("hero.commercial.seeMyRate")} →
                    </button>
                  </div>

                  {zipErrMsg && (
                    <p style={{ color: "#EF4444", fontSize: "12px", marginBottom: "8px" }}>{zipErrMsg}</p>
                  )}

                  <p style={{ fontSize: "12px", color: "#94A3B8", marginBottom: "4px" }}>
                    {t("hero.commercial.preferTalk")}
                  </p>
                  <a
                    href="sms:5619468261"
                    style={{ fontSize: "13px", color: "#F5A623", fontWeight: 600, textDecoration: "none" }}
                  >
                    {t("hero.commercial.speakAgent")} →
                  </a>
                </div>

              </div>
            </div>
          )}

          </div>{/* end desktop hero */}
        </div>

      </section>

      </div>{/* end hero wrapper */}

      {/* ── Commercial credibility bar ────────────────────────────────────── */}
      {!isPersonal && (
        <div
          style={{
            background: "#0F2A44",
            padding:    "20px 0",
            width:      "100%",
          }}
        >
          <div
            className="max-w-7xl mx-auto px-6"
            style={{
              display:     "flex",
              alignItems:  "center",
              gap:         "24px",
              flexWrap:    "wrap",
            }}
          >
            {/* Left — trust statement */}
            <p
              style={{
                fontSize:   "14px",
                color:      "rgba(255,255,255,0.85)",
                fontWeight: 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
                flex:       "0 0 auto",
              }}
            >
              {t("trust.carriers")} · Licensed in 11 States
            </p>

            {/* Divider */}
            <div
              className="hidden sm:block"
              style={{
                width:      "1px",
                height:     "28px",
                background: "rgba(255,255,255,0.15)",
                flexShrink: 0,
              }}
            />

            {/* Right — badge pills */}
            <div
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        "10px",
                flexWrap:   "wrap",
              }}
            >
              {[
                { label: "A+ Rated Carriers",      mobileHide: false },
                { label: "Licensed in 11 States",  mobileHide: false },
                { label: "Independent Agent",       mobileHide: true  },
                { label: "Same-Day Certificates",   mobileHide: true  },
              ].map(badge => (
                <span
                  key={badge.label}
                  className={badge.mobileHide ? "hidden sm:inline-flex" : "inline-flex"}
                  style={{
                    alignItems:      "center",
                    background:      "rgba(255,255,255,0.08)",
                    border:          "1px solid rgba(255,255,255,0.15)",
                    borderRadius:    "8px",
                    padding:         "6px 14px",
                    fontSize:        "12px",
                    color:           "rgba(255,255,255,0.90)",
                    fontWeight:      500,
                    whiteSpace:      "nowrap",
                  }}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Product Marketplace ───────────────────────────────────────────── */}
      <section
        data-reveal
        id="products"
        style={{
          backgroundColor: "#FFFFFF",
          borderTop:    "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          padding:      "48px 0",
          marginTop:    "-80px",
          position:     "relative",
          zIndex:       10,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Personal Insurance row (personal mode only) ── */}
          {isPersonal && <div style={{ marginBottom: "48px" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(27,58,107,0.15)", maxWidth: "100px" }} />
                <p style={{
                  fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px",
                  textTransform: "uppercase", color: "#1B3A6B",
                }}>
                  {t("products.personalRowLabel")}
                </p>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(27,58,107,0.15)", maxWidth: "100px" }} />
              </div>
              <p style={{ fontSize: "13px", color: "#94A3B8", marginTop: "6px" }}>
                {t("products.personalSub")}
              </p>
            </div>
            <div
              className="hidden md:grid"
              style={{ gridTemplateColumns: "repeat(6, 1fr)", gap: "14px" }}
            >
              {personalProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  mode="personal"
                  onClick={handlePersonalProductClick}
                  onCardHoverEnter={handleCardHoverEnter}
                  onCardHoverLeave={handleCardHoverLeave}
                />
              ))}
            </div>
            <div className="md:hidden">
              <MobileCardCarousel
                products={personalProducts}
                mode="personal"
                onClick={handlePersonalProductClick}
                onCardHoverEnter={handleCardHoverEnter}
                onCardHoverLeave={handleCardHoverLeave}
              />
            </div>
          </div>}

          {/* ── Commercial Insurance row (commercial mode only) ── */}
          {!isPersonal && <div>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(180,83,9,0.2)", maxWidth: "100px" }} />
                <p style={{
                  fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px",
                  textTransform: "uppercase", color: "#B45309",
                }}>
                  {t("products.commercialRowLabel")}
                </p>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(180,83,9,0.2)", maxWidth: "100px" }} />
              </div>
            </div>
            <div
              className="hidden md:grid"
              style={{ gridTemplateColumns: "repeat(6, 1fr)", gap: "14px" }}
            >
              {commercialProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  mode="commercial"
                  onClick={handleCommercialProductClick}
                  onCardHoverEnter={handleCardHoverEnter}
                  onCardHoverLeave={handleCardHoverLeave}
                />
              ))}
            </div>
            <div className="md:hidden">
              <MobileCardCarousel
                products={commercialProducts}
                mode="commercial"
                onClick={handleCommercialProductClick}
                onCardHoverEnter={handleCardHoverEnter}
                onCardHoverLeave={handleCardHoverLeave}
              />
            </div>
          </div>}

        </div>
      </section>

      {/* ── Why Choose Ativa ──────────────────────────────────────────────── */}
      <div data-reveal><WhyChooseAtiva onGetQuote={openQuote} /></div>

      {/* ── Served States ─────────────────────────────────────────────────── */}
      <div data-reveal><ServedStates /></div>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <div data-reveal><HowItWorks mode={mode} /></div>

      {/* ── Carriers ──────────────────────────────────────────────────────── */}
      <div data-reveal><CarrierMarquee mode={mode} /></div>

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <div data-reveal><Reviews mode={mode} /></div>

      {/* ── Blog ──────────────────────────────────────────────────────────── */}
      <div data-reveal><Blog mode={mode} /></div>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <div data-reveal><FAQ mode={mode} /></div>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <div data-reveal><ContactCTA mode={mode} onGetQuote={openQuote} onSwitchMode={() => setMode("commercial")} /></div>

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
        anyModalOpen={quoteOpen || commercialQuoteOpen || personalSheetOpen || commercialSheetOpen}
      />

      {/* ── Mobile product-picker bottom sheets ──────────────────────────── */}
      {personalSheetOpen && (
        <ProductBottomSheet
          mode="personal"
          onSelect={(id) => {
            setPersonalSheetOpen(false);
            setQuoteProduct(id);
            setMode("personal");
            setQuoteOpen(true);
          }}
          onClose={() => setPersonalSheetOpen(false)}
        />
      )}
      {commercialSheetOpen && (
        <ProductBottomSheet
          mode="commercial"
          onSelect={(id) => {
            setCommercialSheetOpen(false);
            setCommercialQuoteProduct(id);
            setMode("commercial");
            setCommercialQuoteOpen(true);
          }}
          onClose={() => setCommercialSheetOpen(false)}
        />
      )}

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
