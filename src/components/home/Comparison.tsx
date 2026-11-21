"use client";

// 2027 "Why an independent agency": heading + lead (the live "Why clients
// choose Ativa" wording), then a comparison table — desktop/tablet: 4-column
// grid with the Ativa column on a midnight block; phone: one card per row.

import { useLanguage } from "@/context/LanguageContext";

type Row = { label: string; a: string; b: string; c: string };

export default function Comparison() {
  const { t, tRaw } = useLanguage();
  const cols = (tRaw("a27.compare.cols") ?? []) as string[];
  const rows = (tRaw("a27.compare.rows") ?? []) as Row[];
  const [colA, colB, colC] = cols;

  return (
    <section className="a27-section" aria-labelledby="ind-title" data-section="why-ativa">
      <div className="a27-container">
        <div className="a27-split a27-cmp__head">
          <h2 id="ind-title" className="a27-h2 a27-cmp__title">{t("why.headline1")} {t("why.headline2")}</h2>
          <p className="a27-lead a27-cmp__lead">{t("why.cardBody")}</p>
        </div>

        <div role="table" aria-labelledby="ind-title" className="a27-cmp__table">
          <div aria-hidden className="a27-cmp__block" style={{ gridRow: `1 / span ${rows.length + 1}` }} />
          <div role="row" className="a27-cmp__row">
            <span role="columnheader" style={{ gridColumn: 1, gridRow: 1 }} />
            <span role="columnheader" className="a27-cmp__ch" style={{ gridColumn: 2, gridRow: 1 }}>{colA}</span>
            <span role="columnheader" className="a27-cmp__ch" style={{ gridColumn: 3, gridRow: 1 }}>{colB}</span>
            <span role="columnheader" className="a27-cmp__ch a27-cmp__ch--ativa" style={{ gridColumn: 4, gridRow: 1 }}>{colC}</span>
          </div>
          {rows.map((r, i) => {
            const gr = i + 2;
            const line = i > 0 ? " a27-cmp__line" : "";
            return (
              <div role="row" key={i} className="a27-cmp__row">
                <span role="rowheader" className={`a27-cmp__label${line}`} style={{ gridColumn: 1, gridRow: gr }}>{r.label}</span>
                <span role="cell" className={`a27-cmp__cell${line}`} style={{ gridColumn: 2, gridRow: gr }}>{r.a}</span>
                <span role="cell" className={`a27-cmp__cell${line}`} style={{ gridColumn: 3, gridRow: gr }}>{r.b}</span>
                <span role="cell" className="a27-cmp__ativa" style={{ gridColumn: 4, gridRow: gr }}>
                  <img src="/2027/icons/ice/check.svg" alt="" width={16} height={16} />
                  {r.c}
                </span>
              </div>
            );
          })}
        </div>

        <div className="a27-cmp__cards">
          {rows.map((r, i) => (
            <div key={i} className="a27-cmp__card">
              <p className="a27-cmp__cardlabel">{r.label}</p>
              <dl className="a27-cmp__dl">
                <dt>{colA}</dt><dd>{r.a}</dd>
                <dt>{colB}</dt><dd>{r.b}</dd>
                <dt className="a27-cmp__dt-ativa">{colC}</dt><dd className="a27-cmp__dd-ativa">{r.c}</dd>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
