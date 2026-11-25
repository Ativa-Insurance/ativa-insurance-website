"use client";

// Site v2 "Why an independent agency": benefit cards (replace the comparison
// table). Personal: 5 cards, the first is the midnight card spanning two rows.
// Commercial: 4 white cards. Heading keeps the live "Why clients choose Ativa"
// wording; card copy is the approved v2 copy (a27.benefits.*). Not links.

import { useLanguage } from "@/context/LanguageContext";
import type { Mode } from "@/types";

type Benefit = { icon?: string; t: string; d: string };

export default function Benefits({ mode }: { mode: Mode }) {
  const { t, tRaw } = useLanguage();
  const personal = mode === "personal";
  const items = (tRaw(`a27.benefits.${mode}`) ?? []) as Benefit[];

  return (
    <section className="a27-section" aria-labelledby="ind-title" data-section="why-ativa">
      <div className="a27-container">
        <div className="a27-ben__head">
          <h2 id="ind-title" className="a27-h2">{t("why.headline1")} {t("why.headline2")}</h2>
          <span aria-hidden className="a27-arc lp-head__arc" />
        </div>
        <ul className={`a27-ben__grid a27-ben__grid--${mode}`}>
          {items.map((b, i) => {
            const dark = personal && i === 0;
            return (
              <li key={b.t} className={`a27-ben${dark ? " a27-ben--dark" : ""}`}>
                <img src={dark ? "/2027/icons/ice/check.svg" : `/2027/icons/navy/${b.icon}.svg`} alt="" width={26} height={26} />
                <h3 className="a27-ben__t">{b.t}</h3>
                <p className="a27-ben__d">{b.d}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
