"use client";

// FAQ accordion on inner pages: same look and behaviour as the homepage FAQ
// (first item open, one open at a time, 300ms). Answers may carry official
// source links. The FAQPage structured data is rendered by the page.

import { useState } from "react";
import type { Source } from "@/content/pages/types";

interface LandingFaqProps {
  title: string;
  items: Array<{ q: string; a: string; sources?: Source[] }>;
  sourcesLabel: string;
}

export default function LandingFaq({ title, items, sourcesLabel }: LandingFaqProps) {
  const [open, setOpen] = useState(0);
  return (
    <section className="lp-sec a27-faq" id="faq" aria-labelledby="faq-title" data-section="faq">
      <div className="a27-faq__inner">
        <h2 id="faq-title" className="a27-h2 a27-faq__title">{title}</h2>
        <span aria-hidden className="a27-arc a27-h2-arc a27-faq__arc" />
        <div className="a27-faq__panel">
          {items.map((f, i) => {
            const o = open === i;
            return (
              <div key={f.q} className={i > 0 ? "a27-faq__row--line" : undefined}>
                <h3 className="a27-faq__h3">
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={o}
                    aria-controls={`faq-a-${i}`}
                    className="a27-faq__q"
                    onClick={() => setOpen(o ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <img src="/2027/icons/navy/chevron.svg" alt="" width={20} height={20} className="a27-faq__chev" data-open={o ? "true" : "false"} />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} data-acc="" data-open={o ? "true" : "false"}>
                  <div>
                    <p className="a27-faq__a">
                      {f.a}
                      {f.sources?.length ? (
                        <span className="lp-faq__src">
                          {sourcesLabel}:{" "}
                          {f.sources.map((s, k) => (
                            <span key={s.href}>{k > 0 && " · "}<a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></span>
                          ))}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
