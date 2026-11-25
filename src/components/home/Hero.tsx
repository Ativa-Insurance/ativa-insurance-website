"use client";

// 2027 hero (site v2). Both lines: full-width photo that runs 150px (110px on
// phone) below the hero, behind the top of the product selection, and fades
// out. Text column on the right on desktop for both lines. No buttons in the
// hero itself — the product selection (children) overlaps its bottom edge.

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { Mode } from "@/types";

interface HeroProps {
  mode: Mode;
  children?: React.ReactNode;
}

export default function Hero({ mode, children }: HeroProps) {
  const { t } = useLanguage();
  const personal = mode === "personal";
  const line1 = personal ? t("hero.personal.findCoverage") : t("hero.commercial.protect");
  const line2 = personal ? t("hero.personal.shopMarket") : t("hero.commercial.weShop");

  return (
    <section className="a27-hero" aria-labelledby="hero-title" data-section="hero">
      <div className="a27-hero__stage">
        <div className="a27-hero__media" aria-hidden>
          <div className="a27-hero__img">
            <Image
              key={mode}
              src={personal ? "/2027/home/personal-hero-street-2027.webp" : "/2027/home/commercial-hero-logistics-2027.webp"}
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="a27-hero__veil" />
        </div>
        <div className="a27-hero__inner">
          <div className="a27-hero__col">
            <h1 id="hero-title" className="a27-hero__title">
              <span>{line1}</span>
              <span className="a27-hero__l2">{line2}</span>
            </h1>
            <span aria-hidden className={`a27-arc a27-hero__arc${personal ? "" : " a27-arc--orange"}`} />
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
