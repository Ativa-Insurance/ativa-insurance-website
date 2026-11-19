import { NextResponse } from "next/server";

// Live Google rating + reviews for Ativa, from Google Places API (New).
// Server-only env vars (set in Vercel): GOOGLE_PLACES_SERVER_KEY, GOOGLE_PLACE_ID.
// Cached for 24h. If not configured or Google fails, returns { ok: false } and
// the site shows only a "See our reviews on Google" link — never a typed number.

export const revalidate = 86400;

interface PlacesReview {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
}

export async function GET() {
  const key = process.env.GOOGLE_PLACES_SERVER_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    return NextResponse.json({ ok: false, reason: "not_configured" });
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) {
      return NextResponse.json({ ok: false, reason: `google_${res.status}` });
    }

    const place = (await res.json()) as PlacesResponse;
    if (typeof place.rating !== "number" || typeof place.userRatingCount !== "number") {
      return NextResponse.json({ ok: false, reason: "no_rating" });
    }

    const reviews = (place.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "",
        authorUri: r.authorAttribution?.uri ?? "",
        photo: r.authorAttribution?.photoUri ?? "",
        rating: r.rating ?? 0,
        relativeTime: r.relativePublishTimeDescription ?? "",
        // Show the review in the language it was written in, unedited.
        text: r.originalText?.text ?? r.text?.text ?? "",
        reviewUri: r.googleMapsUri ?? "",
      }))
      .filter((r) => r.text && r.author);

    return NextResponse.json({
      ok: true,
      data: {
        rating: place.rating,
        count: place.userRatingCount,
        mapsUri: place.googleMapsUri ?? "",
        reviews,
      },
    });
  } catch {
    return NextResponse.json({ ok: false, reason: "fetch_failed" });
  }
}
