// Ativa AMS application hand-off (see ativa-internal docs/website-handoff.md).
// One link for every product; the product goes in ?line=, the language in &lang=.
// Always opened in the SAME tab. Never put names, phones or emails in this URL.

export const AMS_APPLY_URL = "https://quote.ativainsurance.com/apply/s/website";
export const AMS_HOST = "quote.ativainsurance.com";

export type AmsLine =
  | "auto" | "home" | "renters"
  | "gl" | "wc" | "commercial_auto" | "business" | "commercial";

// Website pop-up product id -> AMS line. Products not listed keep the site's own
// success screen (the AMS application doesn't offer them yet).
export const PERSONAL_AMS_LINE: Record<string, AmsLine> = {
  auto: "auto",
  property: "home",
  renters: "renters",
};

export const COMMERCIAL_AMS_LINE: Record<string, AmsLine> = {
  gl: "gl",
  "workers-comp": "wc",
  "commercial-auto": "commercial_auto",
  trucking: "commercial_auto",
  cargo: "commercial_auto",
  // Everything else the commercial pop-up offers is "other business insurance"
  umbrella: "business",
  professional: "business",
  cyber: "business",
  "builders-risk": "business",
  "inland-marine": "business",
  surety: "business",
  do: "business",
  "liquor-liability": "business",
};

export function amsApplyUrl(line: AmsLine, lang: string): string {
  const url = new URL(AMS_APPLY_URL);
  url.searchParams.set("line", line);
  url.searchParams.set("lang", ["en", "pt", "es"].includes(lang) ? lang : "en");
  return url.toString();
}

/** Only accept apply links on the AMS host (the intake response is trusted, but checked anyway). */
export function isAmsApplyUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    const u = new URL(value);
    return u.protocol === "https:" && u.hostname === AMS_HOST;
  } catch {
    return false;
  }
}

/** First 5-digit ZIP found in the given strings, or "". */
export function findZip(...values: Array<string | undefined>): string {
  for (const v of values) {
    const m = v?.match(/\b\d{5}\b/);
    if (m) return m[0];
  }
  return "";
}
