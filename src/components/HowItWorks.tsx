"use client";

// 2027 "How it works": centred heading + arc + lead, three numbered step
// cards (one column on phone). Wording is the live site's (now translated
// in the locale files instead of hardcoded English).

import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks({ mode }: { mode: Mode }) {
  const { t, tRaw } = useLanguage();
  const steps = (tRaw(`a27.how.${mode}`) ?? []) as Array<{ t: string; d: string }>;

  return (
    <section className="a27-section" aria-labelledby="how-title" data-section="how-it-works">
      <div className="a27-container">
        <div className="a27-how__head">
          <h2 id="how-title" className="a27-h2">{t("a27.how.heading")}</h2>
          <span aria-hidden className="a27-arc a27-h2-arc" />
          <p className="a27-lead">{t("a27.how.lead")}</p>
        </div>
        <ol className="a27-how__grid">
          {steps.map((s, i) => (
            <li key={i} className="a27-step">
              <span className="a27-step__n" aria-hidden>{i + 1}</span>
              <p className="a27-step__t">{s.t}</p>
              <p className="a27-step__d">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
