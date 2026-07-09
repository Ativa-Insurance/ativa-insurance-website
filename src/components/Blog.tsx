"use client";

import Link from "next/link";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface HeroArticle {
  slug:     string;
  title:    string;
  excerpt:  string;
  category: string;
  readTime: string;
  gradient: string;
}

const PERSONAL_ARTICLES: HeroArticle[] = [
  {
    slug:     "florida-flood-insurance-homeowners",
    title:    "5 Things Florida Homeowners Must Know About Flood Insurance",
    excerpt:  "Flood damage is rarely covered by standard homeowners policies. Here's what every Florida property owner needs to understand.",
    category: "HOME",
    readTime: "3 min read",
    gradient: "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
  },
  {
    slug:     "lower-auto-insurance-premium",
    title:    "How to Lower Your Auto Insurance Premium This Year",
    excerpt:  "Bundling, safe driver discounts, and shopping carriers are just the start. Learn what actually moves the needle on your rate.",
    category: "AUTO",
    readTime: "3 min read",
    gradient: "linear-gradient(135deg, #1E4D8C 0%, #3B82F6 100%)",
  },
  {
    slug:     "renters-insurance-worth-it",
    title:    "Renters Insurance: Why It Costs Less Than Your Netflix",
    excerpt:  "Most renters skip it. Most regret it. Here's exactly what renters insurance covers and why it's a no-brainer in Florida.",
    category: "RENTERS",
    readTime: "2 min read",
    gradient: "linear-gradient(135deg, #0B1F33 0%, #1B3A6B 100%)",
  },
];

const COMMERCIAL_ARTICLES: HeroArticle[] = [
  {
    slug:     "when-small-business-needs-general-liability",
    title:    "What Does General Liability Cover?",
    excerpt:  "From day one. If your business interacts with customers or the public, GL coverage is essential — and more affordable than you think.",
    category: "LIABILITY",
    readTime: "4 min read",
    gradient: "linear-gradient(135deg, #92400E 0%, #F5A623 100%)",
  },
  {
    slug:     "commercial-auto-fleet-insurance",
    title:    "Who Needs Commercial Auto Insurance?",
    excerpt:  "Find out if your business vehicles are covered. Personal auto policies often exclude business use — here's what to know.",
    category: "COMMERCIAL AUTO",
    readTime: "3 min read",
    gradient: "linear-gradient(135deg, #78350F 0%, #D97706 100%)",
  },
  {
    slug:     "workers-comp-requirements-florida",
    title:    "Understanding Workers Comp Requirements",
    excerpt:  "Stay compliant and protect your team. Florida has specific workers comp rules most business owners don't know about.",
    category: "WORKERS COMP",
    readTime: "3 min read",
    gradient: "linear-gradient(135deg, #451A03 0%, #92400E 100%)",
  },
];

function ArticleCard({ post, accent }: { post: HeroArticle; accent: "blue" | "orange" }) {
  const accentColor  = accent === "blue" ? "#1B3A6B" : "#B45309";
  const badgeBg      = accent === "blue" ? "#EEF4FF" : "rgba(245,166,35,0.12)";
  const badgeColor   = accentColor;

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          backgroundColor: "#FFFFFF",
          border:          "1px solid #E8EDF5",
          borderRadius:    "14px",
          overflow:        "hidden",
          display:         "flex",
          flexDirection:   "column",
          boxShadow:       "0 2px 8px rgba(0,0,0,0.04)",
          transition:      "box-shadow 250ms ease, transform 250ms ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(0,0,0,0.10)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Thumbnail block */}
        <div
          style={{
            height:     "80px",
            background: post.gradient,
            flexShrink: 0,
            display:    "flex",
            alignItems: "center",
            padding:    "0 18px",
          }}
        >
          <span
            style={{
              fontSize:        "10px",
              fontWeight:      700,
              letterSpacing:   "1.5px",
              textTransform:   "uppercase",
              padding:         "4px 10px",
              borderRadius:    "20px",
              backgroundColor: "rgba(255,255,255,0.18)",
              color:           "#FFFFFF",
            }}
          >
            {post.category}
          </span>
        </div>

        <div style={{ padding: "18px 18px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
          <h3
            style={{
              fontSize:      "14px",
              fontWeight:    800,
              color:         "#0B1F33",
              lineHeight:    1.35,
              margin:        "0 0 8px",
              letterSpacing: "-0.01em",
            }}
          >
            {post.title}
          </h3>

          <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.65, margin: "0 0 14px", flex: 1 }}>
            {post.excerpt}
          </p>

          <span
            style={{
              fontSize:   "13px",
              fontWeight: 700,
              color:      accentColor,
            }}
          >
            Read more →
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function Blog({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  const isPersonal = mode === "personal";

  // ── Commercial-only mode: single full-width section ──────────────────────
  if (!isPersonal) {
    return (
      <section style={{ backgroundColor: "#F8F9FB", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "2.5px", fontWeight: 700, textTransform: "uppercase", color: "var(--eyebrow)", marginBottom: "8px" }}>
                {t("blog.eyebrow")}
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "#0B1F33", margin: 0, letterSpacing: "-0.02em" }}>
                {t("blog.commercialLabel")}
              </h2>
            </div>
            <Link href="/blog" style={{ fontSize: "13px", fontWeight: 700, color: "#B45309", textDecoration: "none" }}>
              {t("blog.viewAllCommercial")} →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {COMMERCIAL_ARTICLES.map((post, i) => (
              <ArticleCard key={i} post={post} accent="orange" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Personal mode: 2-col split ────────────────────────────────────────────
  return (
    <section
      style={{
        backgroundColor: "#F8F9FB",
        borderTop:       "1px solid rgba(0,0,0,0.06)",
        padding:         "80px 24px",
      }}
    >
      <style>{`
        .blog-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .blog-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (max-width: 900px) {
          .blog-split-grid { grid-template-columns: 1fr; gap: 48px; }
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
            {t("blog.eyebrow")}
          </p>
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
            {t("blog.heading")}
          </h2>
        </div>

        {/* 2-col split */}
        <div className="blog-split-grid">

          {/* Personal column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0B1F33", margin: 0 }}>
                {t("blog.personalLabel")}
              </h3>
              <span
                style={{
                  fontSize:        "11px",
                  fontWeight:      700,
                  letterSpacing:   "0.8px",
                  padding:         "4px 10px",
                  borderRadius:    "20px",
                  backgroundColor: "#EEF4FF",
                  color:           "#1B3A6B",
                  whiteSpace:      "nowrap",
                }}
              >
                {t("blog.personalBadge")}
              </span>
            </div>

            <div className="blog-cards-grid">
              {PERSONAL_ARTICLES.map((post, i) => (
                <ArticleCard key={i} post={post} accent="blue" />
              ))}
            </div>

            <div style={{ marginTop: "20px" }}>
              <Link
                href="/blog"
                style={{
                  fontSize:       "13px",
                  fontWeight:     700,
                  color:          "#1B3A6B",
                  textDecoration: "none",
                }}
              >
                {t("blog.viewAllPersonal")} →
              </Link>
            </div>
          </div>

          {/* Commercial column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0B1F33", margin: 0 }}>
                {t("blog.commercialLabel")}
              </h3>
              <span
                style={{
                  fontSize:        "11px",
                  fontWeight:      700,
                  letterSpacing:   "0.8px",
                  padding:         "4px 10px",
                  borderRadius:    "20px",
                  backgroundColor: "rgba(245,166,35,0.12)",
                  color:           "#B45309",
                  whiteSpace:      "nowrap",
                }}
              >
                {t("blog.commercialBadge")}
              </span>
            </div>

            <div className="blog-cards-grid">
              {COMMERCIAL_ARTICLES.map((post, i) => (
                <ArticleCard key={i} post={post} accent="orange" />
              ))}
            </div>

            <div style={{ marginTop: "20px" }}>
              <Link
                href="/blog"
                style={{
                  fontSize:       "13px",
                  fontWeight:     700,
                  color:          "#B45309",
                  textDecoration: "none",
                }}
              >
                {t("blog.viewAllCommercial")} →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
