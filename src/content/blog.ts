// Server-only: the live blog posts (data/blog/*.json — the same files /blog and
// /blog/[slug] are built from), reduced to what the homepage tips section needs.
// Latest 3 per line. Line comes from the post's topic (slug keywords first,
// then its category); posts with a general topic are left out.

import { readdir, readFile } from "fs/promises";
import path from "path";
import type { Language, Mode } from "@/types";

export type TipTopic =
  | "flood" | "home" | "auto" | "renters" | "pet" | "umbrella"
  | "commercialAuto" | "gl" | "workersComp" | "contractors" | "cyber" | "commercial";

export interface TipPost {
  slug: string;
  date: string;
  topic: TipTopic;
  line: Mode;
  /** Globe artwork id in /public/2027/globes, or null for the line icon */
  globe: string | null;
  icon: string;
  text: Record<Language, { title: string; excerpt: string; readTime: string }>;
}

interface RawPost {
  slug: string;
  date: string;
  category: string;
  en: { title: string; excerpt: string; readTime: string };
  pt?: { title: string; excerpt: string; readTime: string };
  es?: { title: string; excerpt: string; readTime: string };
}

const PERSONAL_TOPICS: TipTopic[] = ["flood", "home", "auto", "renters", "pet", "umbrella"];

function topicOf(p: RawPost): TipTopic | null {
  const s = `${p.slug} ${p.en.title}`.toLowerCase();
  const c = p.category.toLowerCase();
  if (/fleet|commercial[- ]auto/.test(s)) return "commercialAuto";
  if (/workers|workers'? comp/.test(s)) return "workersComp";
  if (/general[- ]liability/.test(s)) return "gl";
  if (/builders|contractor/.test(s)) return "contractors";
  if (/cyber/.test(s) || c === "cyber") return "cyber";
  if (c === "commercial") return "commercial";
  if (/flood/.test(s) || c === "flood") return "flood";
  if (/renters/.test(s) || c === "renters") return "renters";
  if (/\bpet\b/.test(s) || c === "pet") return "pet";
  if (/umbrella/.test(s) || c === "umbrella") return "umbrella";
  if (c === "home") return "home";
  if (c === "auto") return "auto";
  return null;
}

const GLOBE: Partial<Record<TipTopic, string>> = {
  flood: "flood", home: "home", auto: "auto", renters: "renters", pet: "pet", umbrella: "umbrella",
  commercialAuto: "commercial-auto", gl: "gl", workersComp: "workers-comp", contractors: "contractors",
};

export async function getTips(): Promise<Record<Mode, TipPost[]>> {
  const dir = path.join(process.cwd(), "data", "blog");
  let files: string[] = [];
  try { files = (await readdir(dir)).filter((f) => f.endsWith(".json")).sort(); } catch { files = []; }
  const posts: TipPost[] = [];
  for (const f of files) {
    try {
      const raw = JSON.parse((await readFile(path.join(dir, f), "utf-8")).replace(/^﻿/, "")) as RawPost;
      const topic = topicOf(raw);
      if (!topic || !raw.en) continue;
      const line: Mode = PERSONAL_TOPICS.includes(topic) ? "personal" : "commercial";
      posts.push({
        slug: raw.slug, date: raw.date, topic, line,
        globe: GLOBE[topic] ?? null,
        icon: topic === "cyber" ? "eo" : "bop",
        text: { en: raw.en, pt: raw.pt ?? raw.en, es: raw.es ?? raw.en },
      });
    } catch { /* skip unreadable file */ }
  }
  posts.sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : b.date.localeCompare(a.date)));
  return {
    personal: posts.filter((p) => p.line === "personal").slice(0, 3),
    commercial: posts.filter((p) => p.line === "commercial").slice(0, 3),
  };
}
