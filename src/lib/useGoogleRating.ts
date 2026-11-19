"use client";

import { useEffect, useState } from "react";

// Ativa's Google listing. Every reviews link on the site points here.
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/Zd8AptfZe46v9ntj8";

export interface GoogleReview {
  author: string;
  authorUri: string;
  photo: string;
  rating: number;
  relativeTime: string;
  text: string;
  reviewUri: string;
}

export interface GoogleRatingData {
  rating: number;
  count: number;
  mapsUri: string;
  reviews: GoogleReview[];
}

// One request per page load, shared by every component that asks.
let pending: Promise<GoogleRatingData | null> | null = null;

function loadGoogleRating(): Promise<GoogleRatingData | null> {
  if (!pending) {
    pending = fetch("/api/google-rating")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => (d && d.ok ? (d.data as GoogleRatingData) : null))
      .catch(() => null);
  }
  return pending;
}

/** Live Google rating, or null while loading / when unavailable. Never a typed fallback number. */
export function useGoogleRating(): GoogleRatingData | null {
  const [data, setData] = useState<GoogleRatingData | null>(null);
  useEffect(() => {
    let active = true;
    loadGoogleRating().then((d) => {
      if (active) setData(d);
    });
    return () => {
      active = false;
    };
  }, []);
  return data;
}
