"use client";

import { useState } from "react";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { useGoogleRating, GOOGLE_REVIEWS_URL, type GoogleReview } from "@/lib/useGoogleRating";

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

function StarRow({ count = 5, color = "#F59E0B", size = 14 }: { count?: number; color?: string; size?: number }) {
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

// Reviews come live from Google (see /api/google-rating). Text is shown exactly as
// written, with the author's name, photo and a link back to Google, per Google's rules.
function ReviewCard({ review, featured = false, postedLabel }: { review: GoogleReview; featured?: boolean; postedLabel: string }) {
  const [hovered, setHovered] = useState(false);
  const initial = review.author.charAt(0).toUpperCase();

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border:          "1px solid #E8EDF5",
        borderRadius:    "16px",
        padding:         featured ? "28px" : "22px",
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <StarRow count={Math.round(review.rating)} color="#F59E0B" size={featured ? 15 : 13} />
        <GoogleG size={15} />
      </div>

      <p style={{ color: "#374151", fontSize: featured ? "14px" : "13px", lineHeight: 1.7, margin: 0, flex: 1 }}>
        &ldquo;{review.text}&rdquo;
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "8px", borderTop: "1px solid #F1F5F9" }}>
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photo}
            alt=""
            width={featured ? 36 : 32}
            height={featured ? 36 : 32}
            referrerPolicy="no-referrer"
            style={{ borderRadius: "50%", flexShrink: 0 }}
          />
        ) : (
        <div
          style={{
            width:           featured ? "36px" : "32px",
            height:          featured ? "36px" : "32px",
            borderRadius:    "50%",
            backgroundColor: "#EEF4FF",
            border:          "1.5px solid #C7D7FD",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            fontSize:        featured ? "14px" : "12px",
            fontWeight:      700,
            color:           "#1B3A6B",
            flexShrink:      0,
          }}
        >
          {initial}
        </div>
        )}
        <div>
          <p style={{ margin: 0, fontSize: featured ? "14px" : "13px", fontWeight: 700, color: "#0B1F33", lineHeight: 1.2 }}>
            {review.authorUri ? (
              <a href={review.authorUri} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                {review.author}
              </a>
            ) : review.author}
          </p>
          <p style={{ margin: 0, fontSize: "11px", color: "#64748B", lineHeight: 1.3 }}>
            {review.relativeTime}{review.relativeTime ? " · " : ""}
            <a href={review.reviewUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#64748B" }}>
              {postedLabel}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  void mode; // same live Google reviews on both tabs; Google decides which ones it returns
  const google = useGoogleRating();
  const reviews = google?.reviews ?? [];
  const featured = reviews.slice(0, 3);
  const rest     = reviews.slice(3);
  const postedLabel = t("reviews.postedOnGoogle");

  return (
    <section
      style={{
        backgroundColor: "#F8F9FB",
        borderTop:       "1px solid rgba(0,0,0,0.06)",
        borderBottom:    "1px solid rgba(0,0,0,0.06)",
        padding:         "80px 24px",
      }}
    >
      <style>{`
        .reviews-featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        .reviews-rest-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .reviews-featured-grid { grid-template-columns: 1fr; }
          .reviews-rest-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .reviews-rest-grid { grid-template-columns: 1fr; }
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
              marginBottom:  "14px",
            }}
          >
            {t("reviews.eyebrow")}
          </p>

          {/* Google aggregate badge */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration:  "none",
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "10px",
              backgroundColor: "#FFFFFF",
              border:          "1px solid #E2E8F0",
              borderRadius:    "40px",
              padding:         "10px 20px",
              boxShadow:       "0 2px 12px rgba(0,0,0,0.06)",
              marginBottom:    "20px",
            }}
          >
            <GoogleG size={20} />
            {google ? (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <StarRow count={Math.round(google.rating)} color="#F59E0B" size={14} />
                <span style={{ fontSize: "14px", fontWeight: 800, color: "#0B1F33" }}>{google.rating.toFixed(1)}</span>
                <span style={{ fontSize: "13px", color: "#64748B" }}>· {google.count} {t("trust.googleReviewsWord")}</span>
              </div>
            ) : (
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#0B1F33" }}>{t("trust.reviewsFallback")} →</span>
            )}
          </a>

          <h2
            style={{
              fontSize:      "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight:    900,
              color:         "#0B1F33",
              margin:        0,
              lineHeight:    1.1,
              letterSpacing: "-0.025em",
            }}
          >
            {t("reviews.heading")}
          </h2>
        </div>

        {/* Featured 3 cards (only when Google returned reviews) */}
        {featured.length > 0 && (
          <div className="reviews-featured-grid">
            {featured.map((review, i) => (
              <ReviewCard key={i} review={review} featured postedLabel={postedLabel} />
            ))}
          </div>
        )}

        {/* Rest of cards */}
        {rest.length > 0 && (
          <div className="reviews-rest-grid">
            {rest.map((review, i) => (
              <ReviewCard key={i} review={review} postedLabel={postedLabel} />
            ))}
          </div>
        )}

        {/* Read more link */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "6px",
              color:          "#1B3A6B",
              fontWeight:     700,
              fontSize:       "14px",
              textDecoration: "none",
            }}
          >
            {t("reviews.readMore")} →
          </a>
        </div>

      </div>
    </section>
  );
}
