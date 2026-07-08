"use client";

import { useState } from "react";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ flexShrink: 0 }}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRow({ count = 5, color = "#F59E0B", size = 16 }: { count?: number; color?: string; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={color} width={size} height={size}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ReviewItem {
  name: string;
  stars: number;
  text: string;
}

// ─── Google aggregate badge ────────────────────────────────────────────────────

function GoogleAggregateBadge() {
  return (
    <div
      style={{
        display:         "inline-flex",
        alignItems:      "center",
        gap:             "10px",
        backgroundColor: "#FFFFFF",
        border:          "1px solid #E2E8F0",
        borderRadius:    "40px",
        padding:         "10px 20px",
        boxShadow:       "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <GoogleG size={20} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <StarRow count={5} color="#F59E0B" size={14} />
          <span style={{ fontSize: "14px", fontWeight: 800, color: "#0B1F33" }}>5.0</span>
        </div>
        <span style={{ fontSize: "12px", color: "#64748B", marginTop: "1px" }}>74 Google Reviews</span>
      </div>
    </div>
  );
}

// ─── Regular review card ──────────────────────────────────────────────────────

function ReviewCard({ review }: { review: ReviewItem }) {
  const [hovered, setHovered] = useState(false);
  const initial = review.name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border:          "1px solid #E8EDF5",
        borderRadius:    "16px",
        padding:         "24px",
        boxShadow:       hovered ? "0 10px 32px rgba(0,0,0,0.10)" : "0 2px 8px rgba(0,0,0,0.04)",
        transform:       hovered ? "translateY(-4px)" : "translateY(0)",
        transition:      "box-shadow 250ms ease, transform 250ms ease",
        cursor:          "default",
        display:         "flex",
        flexDirection:   "column",
        gap:             "12px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Stars + Google */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <StarRow count={review.stars} color="#F59E0B" size={15} />
        <GoogleG size={15} />
      </div>

      {/* Text */}
      <p
        style={{
          color:      "#374151",
          fontSize:   "14px",
          lineHeight: 1.7,
          margin:     0,
          flex:       1,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "4px", borderTop: "1px solid #F1F5F9" }}>
        <div
          style={{
            width:           "36px",
            height:          "36px",
            borderRadius:    "50%",
            backgroundColor: "#EEF4FF",
            border:          "1.5px solid #C7D7FD",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            fontSize:        "14px",
            fontWeight:      700,
            color:           "#1B3A6B",
            flexShrink:      0,
          }}
        >
          {initial}
        </div>
        <div>
          <p style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#0B1F33", lineHeight: 1.2 }}>
            {review.name}
          </p>
          <p style={{ margin: 0, fontSize: "11px", color: "#22C55E", fontWeight: 600, letterSpacing: "0.02em" }}>
            ✓ Verified Review
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Featured review card ─────────────────────────────────────────────────────

function FeaturedReview() {
  return (
    <div
      style={{
        backgroundColor: "#0B1F33",
        borderRadius:    "20px",
        padding:         "40px 44px",
        marginBottom:    "24px",
        position:        "relative",
        overflow:        "hidden",
      }}
    >
      {/* Decorative quote mark */}
      <div
        aria-hidden
        style={{
          position:   "absolute",
          top:        "-10px",
          left:       "32px",
          fontSize:   "120px",
          lineHeight: 1,
          color:      "rgba(245,166,35,0.12)",
          fontFamily: "Georgia, serif",
          fontWeight: 900,
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px", position: "relative" }}>
        <StarRow count={5} color="#F5A623" size={20} />
        <span
          style={{
            fontSize:        "11px",
            fontWeight:      600,
            color:           "rgba(255,255,255,0.55)",
            letterSpacing:   "0.05em",
            textTransform:   "uppercase",
          }}
        >
          Featured Review
        </span>
      </div>

      {/* Quote */}
      <p
        style={{
          color:         "#FFFFFF",
          fontSize:      "clamp(16px, 2vw, 19px)",
          fontWeight:    700,
          lineHeight:    1.65,
          marginBottom:  "10px",
          position:      "relative",
        }}
      >
        &ldquo;They saved me over $800 on my auto policy&rdquo;
      </p>
      <p
        style={{
          color:        "rgba(255,255,255,0.80)",
          fontSize:     "15px",
          lineHeight:   1.75,
          marginBottom: "28px",
          position:     "relative",
        }}
      >
        I was paying way too much with my old insurance. Ana helped me compare multiple options and found me a much better rate the same day. The process was fast, easy, and they actually speak Portuguese — which made everything so much easier for my family.
      </p>

      {/* Attribution */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          flexWrap:       "wrap",
          gap:            "12px",
          position:       "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width:           "44px",
              height:          "44px",
              borderRadius:    "50%",
              backgroundColor: "rgba(245,166,35,0.15)",
              border:          "1.5px solid rgba(245,166,35,0.35)",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              fontSize:        "17px",
              fontWeight:      800,
              color:           "#F5A623",
              flexShrink:      0,
            }}
          >
            C
          </div>
          <div>
            <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "15px", margin: 0, lineHeight: 1.2 }}>
              Carlos M.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", margin: 0 }}>
              Stuart, FL · Auto Insurance
            </p>
          </div>
        </div>

        {/* Verified badge */}
        <div
          style={{
            display:         "flex",
            alignItems:      "center",
            gap:             "6px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border:          "1px solid rgba(255,255,255,0.12)",
            borderRadius:    "20px",
            padding:         "6px 12px",
          }}
        >
          <GoogleG size={14} />
          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", fontWeight: 500 }}>
            Verified Google Review
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Reviews({ mode }: { mode: Mode }) {
  const { t, tRaw } = useLanguage();

  const items = (tRaw("reviews.items") as ReviewItem[] | undefined) ?? [];

  return (
    <section
      style={{
        backgroundColor: "#F8F9FB",
        borderTop:       "1px solid rgba(0,0,0,0.06)",
        borderBottom:    "1px solid rgba(0,0,0,0.06)",
        padding:         "80px 24px",
        position:        "relative",
        overflow:        "hidden",
      }}
    >
      {/* Subtle decorative circle */}
      <svg
        aria-hidden
        viewBox="0 0 1 1"
        style={{
          position:      "absolute",
          top:           "-80px",
          right:         "-80px",
          width:         "320px",
          height:        "320px",
          opacity:       0.04,
          pointerEvents: "none",
        }}
      >
        <circle cx="0.5" cy="0.5" r="0.5" fill="#1B3A6B" />
      </svg>

      <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative" }}>

        {/* ── Section header ── */}
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
            Client Stories
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
            {t("reviews.heading")}
          </h2>
          <p
            style={{
              fontSize:     "16px",
              color:        "#64748B",
              margin:       "0 0 20px",
              lineHeight:   1.5,
            }}
          >
            {t("reviews.sub")}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleAggregateBadge />
          </div>
        </div>

        {/* ── Featured review ── */}
        <FeaturedReview />

        {/* ── Regular review grid ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap:                 "20px",
          }}
        >
          {items.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

      </div>
    </section>
  );
}
