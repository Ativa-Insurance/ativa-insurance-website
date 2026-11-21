"use client";

// Homepage blog section (no counterpart in the 2027 design — kept per
// DECISIONS.md D for internal links, restyled with the 2027 tokens: cards like
// the product tiles). Articles, labels and links are the live site's.

import Link from "next/link";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

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
    title:    "What Does General Liability Cover?",
    excerpt:  "From day one. If your business interacts with customers or the public, GL coverage is essential — and more affordable than you think.",
    category: "LIABILITY",
    readTime: "4 min read",
  },
  {
    slug:     "commercial-auto-fleet-insurance",
    title:    "Who Needs Commercial Auto Insurance?",
    excerpt:  "Find out if your business vehicles are covered. Personal auto policies often exclude business use — here's what to know.",
    category: "COMMERCIAL AUTO",
    readTime: "3 min read",
  },
  {
    slug:     "workers-comp-requirements-florida",
    title:    "Understanding Workers Comp Requirements",
    excerpt:  "Stay compliant and protect your team. Florida has specific workers comp rules most business owners don't know about.",
    category: "WORKERS COMP",
    readTime: "3 min read",
  },
];

function ArticleCard({ post }: { post: HeroArticle }) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`} className="a27-post">
        <span className="a27-post__cat">{post.category}</span>
        <h3 className="a27-post__title">{post.title}</h3>
        <p className="a27-post__excerpt">{post.excerpt}</p>
        <span className="a27-post__meta">{post.readTime}</span>
      </Link>
    </li>
  );
}

export default function Blog({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  const personal = mode === "personal";
  const articles = personal ? PERSONAL_ARTICLES : COMMERCIAL_ARTICLES;

  return (
    <section className="a27-section" aria-labelledby="blog-title" data-section="blog">
      <div className="a27-container">
        <div className="a27-blog__head">
          <h2 id="blog-title" className="a27-h2">{t(personal ? "blog.personalLabel" : "blog.commercialLabel")}</h2>
          <span aria-hidden className="a27-arc a27-h2-arc" />
        </div>
        <ul className="a27-blog__grid">
          {articles.map((post) => <ArticleCard key={post.slug} post={post} />)}
        </ul>
        <div className="a27-reviews__more">
          <Link href="/blog">{t(personal ? "blog.viewAllPersonal" : "blog.viewAllCommercial")}</Link>
        </div>
      </div>
    </section>
  );
}
