"use client";

import { useState } from "react";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  q: string;
  a: string;
}

function FAQRow({ item, open, onToggle }: { item: FAQItem; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid #E8EDF5" }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        style={{
          width:          "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          gap:            "12px",
          padding:        "16px 0",
          background:     "none",
          border:         "none",
          cursor:         "pointer",
          textAlign:      "left",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#0B1F33", lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span
          style={{
            width:           "22px",
            height:          "22px",
            borderRadius:    "50%",
            backgroundColor: open ? "#1B3A6B" : "#EEF4FF",
            color:           open ? "#FFFFFF" : "#1B3A6B",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            flexShrink:      0,
            transition:      "background-color 200ms ease, color 200ms ease",
          }}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
            {open
              ? <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              : <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
            }
          </svg>
        </span>
      </button>

      {open && (
        <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.75, margin: "0 0 16px", paddingRight: "34px" }}>
          {item.a}
        </p>
      )}
    </div>
  );
}

function FAQColumn({
  heading,
  items,
  viewAllLabel,
  viewAllHref,
}: {
  heading:      string;
  items:        FAQItem[];
  viewAllLabel: string;
  viewAllHref:  string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0B1F33", marginBottom: "6px", letterSpacing: "-0.01em" }}>
        {heading}
      </h3>

      <div style={{ marginBottom: "8px" }}>
        {items.map((item, i) => (
          <FAQRow
            key={i}
            item={item}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </div>

      <a href={viewAllHref} style={{ fontSize: "13px", fontWeight: 700, color: "#1B3A6B", textDecoration: "none", display: "inline-block", marginTop: "8px" }}>
        {viewAllLabel} →
      </a>
    </div>
  );
}

function CommercialFAQSection({ items, t }: { items: FAQItem[]; t: (key: string) => string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "80px 24px" }}>
      <style>{`.faq-comm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
        @media (max-width: 768px) { .faq-comm-grid { grid-template-columns: 1fr; gap: 40px; } }`}</style>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "2.5px", fontWeight: 700, textTransform: "uppercase", color: "var(--eyebrow)", marginBottom: "10px" }}>
            {t("faq.eyebrow")}
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 900, color: "#0B1F33", margin: 0, letterSpacing: "-0.025em" }}>
            {t("faq.commercialHeading")}
          </h2>
        </div>
        <div className="faq-comm-grid">
          {/* Left: Commercial FAQs */}
          <div>
            {items.map((item, i) => (
              <FAQRow
                key={i}
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
            <a href="/faq#commercial" style={{ fontSize: "13px", fontWeight: 700, color: "#1B3A6B", textDecoration: "none", display: "inline-block", marginTop: "16px" }}>
              {t("faq.viewAllCommercial")} →
            </a>
          </div>

          {/* Right: Still have questions? */}
          <div style={{ backgroundColor: "#F8F9FB", border: "1px solid #E8EDF5", borderRadius: "20px", padding: "36px 32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0B1F33", margin: 0 }}>{t("faq.stillHave")}</h3>
            <p style={{ fontSize: "15px", color: "#64748B", margin: 0, lineHeight: 1.6 }}>
              {t("faq.stillSub")}
            </p>
            <a href="sms:5619468261" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "10px", backgroundColor: "#F5A623", color: "#0B1F33", fontSize: "15px", fontWeight: 800, textDecoration: "none" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd"/>
              </svg>
              {t("faq.textUs")}
            </a>
            <a href="tel:5619468261" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, color: "#64748B", textDecoration: "none" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
              </svg>
              561-946-8261
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FAQ({ mode }: { mode: Mode }) {
  const { t, tRaw } = useLanguage();
  const isPersonal = mode === "personal";

  const personalItems   = (tRaw("faq.personalItems")   as FAQItem[] | undefined) ?? [];
  const commercialItems = (tRaw("faq.commercialItems") as FAQItem[] | undefined) ?? [];

  if (!isPersonal) {
    return <CommercialFAQSection items={commercialItems} t={t} />;
  }

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderTop:       "1px solid rgba(0,0,0,0.06)",
        padding:         "80px 24px",
      }}
    >
      <style>{`
        .faq-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }
        @media (max-width: 768px) {
          .faq-split-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>

      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontSize:      "11px",
              letterSpacing: "2.5px",
              fontWeight:    700,
              textTransform: "uppercase",
              color:         "var(--eyebrow)",
              marginBottom:  "10px",
            }}
          >
            {t("faq.eyebrow")}
          </p>
          <h2
            style={{
              fontSize:      "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight:    900,
              color:         "#0B1F33",
              margin:        "0 0 10px",
              lineHeight:    1.1,
              letterSpacing: "-0.025em",
            }}
          >
            {t("faq.heading")}
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", margin: 0 }}>
            {t("faq.sub")}
          </p>
        </div>

        {/* 2-col split */}
        <div className="faq-split-grid">
          <FAQColumn
            heading={t("faq.personalHeading")}
            items={personalItems}
            viewAllLabel={t("faq.viewAllPersonal")}
            viewAllHref="/faq#personal"
          />
          <FAQColumn
            heading={t("faq.commercialHeading")}
            items={commercialItems}
            viewAllLabel={t("faq.viewAllCommercial")}
            viewAllHref="/faq#commercial"
          />
        </div>

        {/* Still have questions CTA */}
        <div
          style={{
            marginTop:       "56px",
            backgroundColor: "#F8F9FB",
            border:          "1px solid #E8EDF5",
            borderRadius:    "16px",
            padding:         "28px 32px",
            textAlign:       "center",
          }}
        >
          <p style={{ fontSize: "17px", fontWeight: 700, color: "#0B1F33", margin: "0 0 6px" }}>
            {t("faq.stillHave")}
          </p>
          <p style={{ fontSize: "15px", color: "#64748B", margin: "0 0 20px" }}>
            {t("faq.stillSub")}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="sms:5619468261"
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                gap:             "8px",
                padding:         "12px 24px",
                borderRadius:    "10px",
                backgroundColor: "#1B3A6B",
                color:           "#FFFFFF",
                fontSize:        "14px",
                fontWeight:      700,
                textDecoration:  "none",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd"/>
              </svg>
              {t("faq.textUs")}
            </a>
            <a
              href="tel:5619468261"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "8px",
                fontSize:       "14px",
                fontWeight:     600,
                color:          "#1B3A6B",
                textDecoration: "none",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
              </svg>
              561-946-8261
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
