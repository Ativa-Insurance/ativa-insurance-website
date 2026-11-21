"use client";

// 2027 reviews: centred heading + arc, a pill with the Google "G" and the live
// rating, and solid review cards. Reviews come live from Google
// (/api/google-rating) and are shown exactly as written, with the author's
// name, photo and a link back to Google, per Google's rules. Nothing typed.

import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { useGoogleRating, GOOGLE_REVIEWS_URL, type GoogleReview } from "@/lib/useGoogleRating";
import { formatRating } from "@/components/home/catalog";

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} style={{ flexShrink: 0 }}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function ReviewCard({ review, postedLabel }: { review: GoogleReview; postedLabel: string }) {
  return (
    <li className="a27-review">
      <div className="a27-review__top">
        <span className="a27-review__stars" aria-label={`${review.rating}/5`}>{"★".repeat(Math.round(review.rating))}</span>
        <GoogleG size={16} />
      </div>
      <p className="a27-review__text">&ldquo;{review.text}&rdquo;</p>
      <div className="a27-review__who">
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={review.photo} alt="" width={32} height={32} referrerPolicy="no-referrer" className="a27-review__photo" />
        ) : (
          <span aria-hidden className="a27-review__initial">{review.author.charAt(0).toUpperCase()}</span>
        )}
        <span className="a27-review__meta">
          {review.authorUri ? (
            <a href={review.authorUri} target="_blank" rel="noopener noreferrer" className="a27-review__name">{review.author}</a>
          ) : (
            <span className="a27-review__name">{review.author}</span>
          )}
          <span className="a27-review__src">
            {review.relativeTime}{review.relativeTime ? " · " : ""}
            <a href={review.reviewUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">{postedLabel}</a>
          </span>
        </span>
      </div>
    </li>
  );
}

export default function Reviews({ mode }: { mode: Mode }) {
  const { t, lang } = useLanguage();
  void mode; // same live Google reviews on both tabs; Google decides which ones it returns
  const google = useGoogleRating();
  const reviews = google?.reviews ?? [];

  return (
    <section className="a27-section" aria-labelledby="reviews-title" data-section="reviews">
      <div className="a27-container">
        <div className="a27-reviews__head">
          <h2 id="reviews-title" className="a27-h2">{t("reviews.heading")}</h2>
          <span aria-hidden className="a27-arc a27-h2-arc" />
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="a27-reviews__pill">
            <GoogleG />
            <span>
              {google ? `${formatRating(google.rating, lang)} · ${google.count} ${t("trust.googleReviewsWord")}` : t("trust.reviewsFallback")}
            </span>
          </a>
        </div>
        {reviews.length > 0 && (
          <ul className="a27-reviews__grid">
            {reviews.map((r, i) => (
              <ReviewCard key={r.reviewUri || i} review={r} postedLabel={t("reviews.postedOnGoogle")} />
            ))}
          </ul>
        )}
        <div className="a27-reviews__more">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            {t("reviews.readMore")}
            <img src="/2027/icons/navy/external.svg" alt="" width={14} height={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
