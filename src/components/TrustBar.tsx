"use client";

// 2027 trust bar: full-width midnight strip under the header.
// Rating text is always live Google data (useGoogleRating) — never typed.
// Phone: rating + 2 facts. Tablet and desktop: rating + 4 facts.

import { useLanguage } from "@/context/LanguageContext";
import { useGoogleRating, GOOGLE_REVIEWS_URL } from "@/lib/useGoogleRating";
import { formatRating, stripGlyph } from "@/components/home/catalog";

export default function TrustBar() {
  const { t, lang } = useLanguage();
  const google = useGoogleRating();

  const facts = [
    t("a27.trust.independent"),
    stripGlyph(t("trust.states")),
    stripGlyph(t("trust.carriers")),
    t("a27.trust.agents"),
  ];

  return (
    <div className="a27-trust a27-on-dark">
      <ul className="a27-trust__list" aria-label={t("a27.trust.label")}>
        <li className="a27-trust__item">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="a27-trust__rating">
            {google ? (
              <>
                <span aria-hidden className="a27-trust__stars">{"★".repeat(Math.round(google.rating))}</span>
                {formatRating(google.rating, lang)} · {google.count} {t("trust.googleReviewsWord")}
              </>
            ) : (
              t("trust.reviewsFallback")
            )}
          </a>
        </li>
        {facts.map((f, i) => (
          <li key={i} className="a27-trust__item" data-wide={i >= 2 ? "true" : undefined}>
            <img src="/2027/icons/ice/check.svg" alt="" width={13} height={13} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
