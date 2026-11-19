import { NextResponse } from "next/server";

// Live Google rating + reviews for Ativa, from Google Places API (New).
// Server-only env vars (set in Vercel): GOOGLE_PLACES_SERVER_KEY, GOOGLE_PLACE_ID.
// A good answer is cached 24h at Vercel's edge; a failure is never cached, so a
// fixed key or setting shows up on the next visit. On failure the site shows only
// a "See our reviews on Google" link — never a typed number. `reason` says why.

export const dynamic = "force-dynamic";

const CACHE_OK = { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600" };
const NO_CACHE = { "Cache-Control": "no-store" };

function fail(reason: string, detail?: string) {
  return NextResponse.json({ ok: false, reason, ...(detail ? { detail } : {}) }, { headers: NO_CACHE });
}

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
    return fail(!key && !placeId ? "missing_key_and_place_id" : !key ? "missing_key" : "missing_place_id");
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
        },
        cache: "no-store",
      }
    );
    if (!res.ok) {
      // Google's own error message (e.g. API not enabled, key restricted). No secrets in it.
      const err = (await res.json().catch(() => null)) as { error?: { message?: string } } | null;
      return fail(`google_${res.status}`, err?.error?.message?.slice(0, 300));
    }

    const place = (await res.json()) as PlacesResponse;
    if (typeof place.rating !== "number" || typeof place.userRatingCount !== "number") {
      return fail("no_rating_on_listing");
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
    }, { headers: CACHE_OK });
  } catch {
    return fail("fetch_failed");
  }
}
