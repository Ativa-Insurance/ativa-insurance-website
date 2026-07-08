"use client";

import Link from "next/link";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

// ─── Article data ─────────────────────────────────────────────────────────────

interface HeroArticle {
  slug:     string;
  title:    string;
  excerpt:  string;
  category: string;
  readTime: string;
}

const PERSONAL_ARTICLES: HeroArticle[] = [
  {
    slug:     "florida-flood-insurance-homeowners",
    title:    "5 Things Florida Homeowners Must Know About Flood Insurance",
    excerpt:  "Flood damage is rarely covered by standard homeowners policies. Here's what every Florida property owner needs to understand.",
    category: "HOME",
    readTime: "3 min read",
  },
  {
    slug:     "lower-auto-insurance-premium",
    title:    "How to Lower Your Auto Insurance Premium This Year",
    excerpt:  "Bundling, safe driver discounts, and shopping carriers are just the start. Learn what actually moves the needle on your rate.",
    category: "AUTO",
    readTime: "3 min read",
  },
  {
    slug:     "renters-insurance-worth-it",
    title:    "Renters Insurance: Why It Costs Less Than Your Netflix",
    excerpt:  "Most renters skip it. Most regret it. Here's exactly what renters insurance covers and why it's a no-brainer in Florida.",
    category: "RENTERS",
    readTime: "2 min read",
  },
];

const COMMERCIAL_ARTICLES: HeroArticle[] = [
  {
    slug:     "when-small-business-needs-general-liability",
    title:    "When Does Your Small Business Need General Liability?",
    excerpt:  "From day one. If your business interacts with customers or the public, GL coverage is essential — and more affordable than you think.",
    category: "COMMERCIAL",
    readTime: "4 min read",
  },
  {
    slug:     "builders-risk-what-contractors-miss",
    title:    "Builders Risk Insurance: What Contractors Often Miss",
    excerpt:  "Most contractors think their GL covers the job site. It doesn't. Here's what Builders Risk actually protects — and when you need it.",
    category: "COMMERCIAL",
    readTime: "4 min read",
  },
  {
    slug:     "lower-commercial-auto-fleet-insurance",
    title:    "How to Lower Your Commercial Auto Insurance as a Fleet Owner",
    excerpt:  "Fleet size, driver records, and vehicle use all affect your rate. Here's how Florida fleet owners cut costs without cutting coverage.",
    category: "AUTO",
    readTime: "3 min read",
  },
];

// ─── Article card ─────────────────────────────────────────────────────────────

function ArticleCard({ post, accentColor }: { post: HeroArticle; accentColor: string }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <article
        className="group"
        style={{
          backgroundColor: "#FFFFFF",
          border:          "1px solid #E8EDF5",
          borderRadius:    "16px",
          overflow:        "hidden",
          display:         "flex",
          flexDirection:   "column",
          height:          "100%",
          boxShadow:       "0 2px 8px rgba(0,0,0,0.04)",
          transition:      "box-shadow 250ms ease, transform 250ms ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.10)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Accent top bar */}
        <div style={{ height: "4px", backgroundColor: accentColor, flexShrink: 0 }} />

        <div style={{ padding: "22px 22px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <span
              style={{
                fontSize:        "11px",
                fontWeight:      700,
                letterSpacing:   "1.5px",
                textTransform:   "uppercase",
                padding:         "4px 10px",
                borderRadius:    "20px",
                backgroundColor: accentColor === "#1B3A6B" ? "#EEF4FF" : "rgba(245,166,35,0.12)",
                color:           accentColor === "#1B3A6B" ? "#1B3A6B" : "#B45309",
              }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: "12px", color: "#94A3B8" }}>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize:      "16px",
              fontWeight:    800,
              color:         "#0B1F33",
              lineHeight:    1.3,
              margin:        "0 0 10px",
              letterSpacing: "-0.01em",
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontSize:   "14px",
              color:      "#64748B",
              lineHeight: 1.7,
              margin:     "0 0 auto",
              flex:       1,
            }}
          >
            {post.excerpt}
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop:     "18px",
              paddingTop:    "14px",
              borderTop:     "1px solid #F1F5F9",
              fontSize:      "14px",
              fontWeight:    700,
              color:         accentColor === "#1B3A6B" ? "#1B3A6B" : "#B45309",
              display:       "flex",
              alignItems:    "center",
              gap:           "4px",
            }}
          >
            <span className="group-hover:translate-x-1" style={{ display: "inline-block", transition: "transform 200ms ease" }}>
              Read article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Blog({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  const isPersonal  = mode === "personal";
  const posts       = isPersonal ? PERSONAL_ARTICLES : COMMERCIAL_ARTICLES;
  const accentColor = isPersonal ? "#1B3A6B" : "#F5A623";

  return (
    <section
      style={{
        backgroundColor: isPersonal ? "#F8F9FB" : "#F4F7FB",
        borderTop:       "1px solid rgba(0,0,0,0.06)",
        padding:         "80px 24px",
        position:        "relative",
        overflow:        "hidden",
      }}
    >
      {/* Decorative ring */}
      <svg
        aria-hidden
        viewBox="0 0 1 1"
        style={{
          position:      "absolute",
          bottom:        "-100px",
          left:          "-100px",
          width:         "380px",
          height:        "380px",
          opacity:       0.04,
          pointerEvents: "none",
        }}
      >
        <circle cx="0.5" cy="0.5" r="0.48" fill="none" stroke={isPersonal ? "#1E3A5F" : "#F5A623"} strokeWidth="0.04" />
        <circle cx="0.5" cy="0.5" r="0.38" fill="none" stroke={isPersonal ? "#1E3A5F" : "#F5A623"} strokeWidth="0.02" />
      </svg>

      <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative" }}>

        {/* ── Heading ── */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
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
            Insurance Insights
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
            {t("blog.heading")}
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
            {t("blog.sub")}
          </p>
        </div>

        {/* ── Cards ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap:                 "20px",
          }}
        >
          {posts.map((post, i) => (
            <ArticleCard key={i} post={post} accentColor={accentColor} />
          ))}
        </div>

        {/* ── View all link ── */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <Link
            href="/blog"
            style={{
              display:       "inline-flex",
              alignItems:    "center",
              gap:           "6px",
              fontSize:      "14px",
              fontWeight:    700,
              color:         isPersonal ? "#1B3A6B" : "#B45309",
              textDecoration: "none",
              borderBottom:  `2px solid ${isPersonal ? "rgba(27,58,107,0.25)" : "rgba(180,83,9,0.25)"}`,
              paddingBottom: "2px",
            }}
          >
            View all articles →
          </Link>
        </div>

      </div>
    </section>
  );
}
