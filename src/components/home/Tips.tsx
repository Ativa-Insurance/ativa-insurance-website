"use client";

// Site v2 "Helpful tips for you" / "Business resources": the 3 latest live
// blog posts of the current line (src/content/blog.ts), as article cards, plus
// a "view all" link. Labels are the live blog labels; category pills are
// a27.tips.cat.*. Links keep the page language (?lang=, read by the blog pages).

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { TipPost } from "@/content/blog";
import type { Language, Mode } from "@/types";

export default function Tips({ mode, posts }: { mode: Mode; posts: TipPost[] }) {
  const { t, lang } = useLanguage();
  const personal = mode === "personal";
  if (!posts.length) return null;
  const q = lang === "en" ? "" : `?lang=${lang}`;

  return (
    <section className="a27-tips" aria-labelledby="tips-title" data-section="tips">
      <div className="a27-container">
        <div className="a27-tips__head">
          <div>
            <h2 id="tips-title" className="a27-h2">{t(personal ? "blog.personalLabel" : "blog.commercialLabel")}</h2>
            <span aria-hidden className="a27-arc lp-head__arc" />
          </div>
          <Link href={`/blog${q}`} className="a27-tips__all">
            {t(personal ? "blog.viewAllPersonal" : "blog.viewAllCommercial")}
            <img src="/2027/icons/navy/arrow.svg" alt="" width={14} height={14} />
          </Link>
        </div>
        <ul className="a27-tips__grid">
          {posts.map((p) => {
            const tx = p.text[lang as Language] ?? p.text.en;
            return (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}${q}`} className="a27-art">
                  {p.globe ? (
                    <span aria-hidden className="a27-art__art">
                      <img src={`/2027/globes/${p.globe}.png`} alt="" width={88} height={88} loading="lazy" />
                    </span>
                  ) : (
                    <span aria-hidden className="a27-art__icon">
                      <img src={`/2027/icons/navy/${p.icon}.svg`} alt="" width={30} height={30} />
                    </span>
                  )}
                  <span className="a27-art__body">
                    <span className="a27-art__cat">{t(`a27.tips.cat.${p.topic}`)}</span>
                    <h3 className="a27-art__title">{tx.title}</h3>
                    {!personal && tx.excerpt && <p className="a27-art__desc">{tx.excerpt}</p>}
                    <span className="a27-art__meta">
                      {personal ? t("blog.readMore") : tx.readTime}
                      <img src="/2027/icons/navy/arrow.svg" alt="" width={14} height={14} />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
