"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { Mode } from "@/types";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ativainsurance/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ativainsurance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Google Reviews",
    href: "https://maps.app.goo.gl/Zd8AptfZe46v9ntj8",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
];

function SocialIcon({ label, href, icon }: typeof SOCIAL_LINKS[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="focus-ring-light touch-target"
      style={{
        color:      hovered ? "#F5A623" : "rgba(255,255,255,0.50)",
        transform:  hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "color 200ms ease, transform 200ms ease",
        display:    "flex",
        alignItems: "center",
        padding:    "10px",
        margin:     "-10px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
    </a>
  );
}

const LICENSED_STATES = ["CT","FL","GA","MA","MD","NC","NJ","OH","PA","SC","TN"];

export default function Footer({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  const isPersonal = mode === "personal";

  const bg       = isPersonal ? "#0D1829" : "#0B1F33";
  const logoSrc  = isPersonal ? "/logos/personal-logo.png" : "/logos/commercial-logo.png";

  return (
    <footer
      style={{
        backgroundColor: bg,
        borderTop:       "3px solid #F5A623",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px 40px" }}>

        {/* ── Three-column grid ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap:                 "40px",
            marginBottom:        "48px",
          }}
        >

          {/* Column 1 — Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src={logoSrc}
                alt="Ativa Insurance"
                width={160}
                height={48}
                style={{ height: "44px", width: "auto", objectFit: "contain" }}
                onError={() => {/* fallback handled by next/image */}}
              />
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", marginBottom: "20px", lineHeight: 1.55 }}>
              {t("footer.tagline")}
            </p>
            <a
              href="https://wa.me/13213448474"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                gap:             "8px",
                padding:         "10px 18px",
                borderRadius:    "10px",
                backgroundColor: "#25D366",
                color:           "#FFFFFF",
                fontSize:        "14px",
                fontWeight:      600,
                textDecoration:  "none",
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t("footer.whatsapp")}
            </a>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <p
              style={{
                fontSize:      "11px",
                letterSpacing: "2px",
                fontWeight:    700,
                textTransform: "uppercase",
                color:         "#F5A623",
                marginBottom:  "16px",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="tel:5619468261"
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            "8px",
                  color:          "rgba(255,255,255,0.80)",
                  fontSize:       "15px",
                  textDecoration: "none",
                  transition:     "color 150ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.80)"; }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                {t("footer.phone")}
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>{t("footer.address")}</span>
              </div>
              <a
                href="mailto:info@ativainsurance.com"
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            "8px",
                  color:          "rgba(255,255,255,0.65)",
                  fontSize:       "14px",
                  textDecoration: "none",
                  transition:     "color 150ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                info@ativainsurance.com
              </a>
            </div>
          </div>

          {/* Column 3 — Licensed States + Links */}
          <div>
            <p
              style={{
                fontSize:      "11px",
                letterSpacing: "2px",
                fontWeight:    700,
                textTransform: "uppercase",
                color:         "#F5A623",
                marginBottom:  "16px",
              }}
            >
              Licensed States
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
              {LICENSED_STATES.map((s) => (
                <span
                  key={s}
                  style={{
                    padding:         "4px 10px",
                    borderRadius:    "6px",
                    backgroundColor: "rgba(245,166,35,0.12)",
                    border:          "1px solid rgba(245,166,35,0.20)",
                    color:           "#F5A623",
                    fontSize:        "12px",
                    fontWeight:      700,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize:      "11px",
                letterSpacing: "2px",
                fontWeight:    700,
                textTransform: "uppercase",
                color:         "#F5A623",
                marginBottom:  "12px",
              }}
            >
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: t("footer.links.rce"),  href: "/rce-calculator" },
                { label: t("footer.links.blog"), href: "/blog" },
                { label: t("nav.faq"),           href: "/faq" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    color:          "rgba(255,255,255,0.60)",
                    fontSize:       "14px",
                    textDecoration: "none",
                    transition:     "color 150ms ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.60)"; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Social row ── */}
        <div
          style={{
            paddingBottom: "24px",
            marginBottom:  "24px",
            borderBottom:  "1px solid rgba(255,255,255,0.08)",
            display:       "flex",
            alignItems:    "center",
            justifyContent:"space-between",
            flexWrap:      "wrap",
            gap:           "16px",
          }}
        >
          <div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.40)", marginBottom: "10px", letterSpacing: "0.05em" }}>
              Follow us
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {SOCIAL_LINKS.map((s) => <SocialIcon key={s.label} {...s} />)}
            </div>
          </div>
          {/* Google rating badge */}
          <div
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "8px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border:          "1px solid rgba(255,255,255,0.10)",
              borderRadius:    "30px",
              padding:         "8px 14px",
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" style={{ flexShrink: 0 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.70)", fontWeight: 600 }}>
              ★ 5.0 · 74 Google Reviews
            </span>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div>
          <div
            style={{
              display:        "flex",
              flexWrap:       "wrap",
              alignItems:     "center",
              justifyContent: "space-between",
              gap:            "8px",
              marginBottom:   "10px",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
              {t("footer.rights", { year: new Date().getFullYear() })}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {[
                { key: "footer.privacy",    href: "/privacy-policy"     },
                { key: "footer.smsPrivacy", href: "/sms-privacy-policy" },
                { key: "footer.terms",      href: "/privacy-policy"     },
                { key: "footer.licenses",   href: "#"                   },
              ].map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  style={{
                    color:          "rgba(255,255,255,0.40)",
                    fontSize:       "13px",
                    textDecoration: "none",
                    transition:     "color 150ms ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.40)"; }}
                >
                  {t(key)}
                </a>
              ))}
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>
            {t("footer.disclaimer")}
          </p>
        </div>

      </div>
    </footer>
  );
}
