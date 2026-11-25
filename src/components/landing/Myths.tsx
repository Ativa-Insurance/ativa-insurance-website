"use client";

// "Commonly misunderstood" disclosure cards: a full-width button per card
// ("People often think" + statement + chevron); opens a box with what's
// actually true. Cards toggle independently; the first is open on load.

import { useState } from "react";

interface MythsProps {
  items: Array<{ m: string; f: string }>;
  labels: { think: string; fact: string };
}

export default function Myths({ items, labels }: MythsProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  return (
    <ul className="lp-grid3">
      {items.map((it, i) => {
        const o = !!open[i];
        return (
          <li key={it.m} className="lp-myth">
            <button
              type="button"
              id={`myth-q-${i}`}
              aria-expanded={o}
              aria-controls={`myth-a-${i}`}
              className="lp-myth__btn"
              onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
            >
              <span className="lp-myth__q">
                <span className="lp-label">{labels.think}</span>
                <span className="lp-myth__m">{it.m}</span>
              </span>
              <img src="/2027/icons/navy/chevron.svg" alt="" width={20} height={20} className="lp-myth__chev" data-open={o ? "true" : "false"} />
            </button>
            <div id={`myth-a-${i}`} role="region" aria-labelledby={`myth-q-${i}`} data-acc="" data-open={o ? "true" : "false"}>
              <div>
                <div className="lp-myth__box">
                  <span className="lp-myth__fact">
                    <span className="lp-myth__dot"><img src="/2027/icons/navy/check.svg" alt="" width={11} height={11} /></span>
                    {labels.fact}
                  </span>
                  <p className="lp-myth__f">{it.f}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
