"use client";

// 2027 FAQ: centred heading + arc, one white panel of accordion rows (one open
// at a time, the first open on load), then a line of text with WhatsApp and
// phone buttons. Questions, answers and headings are the live per-line FAQs.

import { useEffect, useState } from "react";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "@/components/home/catalog";
import { withLang } from "@/content/pages/built";

interface FAQItem { q: string; a: string }

export default function FAQ({ mode }: { mode: Mode }) {
  const { t, tRaw, lang } = useLanguage();
  const personal = mode === "personal";
  const items = ((tRaw(personal ? "faq.personalItems" : "faq.commercialItems") as FAQItem[] | undefined) ?? []);
  const [open, setOpen] = useState<number>(0);
  useEffect(() => setOpen(0), [mode]);

  return (
    <section id="faq" className="a27-section a27-faq" aria-labelledby="faq-title" data-section="faq">
      <div className="a27-faq__inner">
        <h2 id="faq-title" className="a27-h2 a27-faq__title">{t(personal ? "faq.personalHeading" : "faq.commercialHeading")}</h2>
        <span aria-hidden className="a27-arc a27-h2-arc a27-faq__arc" />
        <div className="a27-faq__panel">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={`${mode}-${i}`} className={i > 0 ? "a27-faq__row a27-faq__row--line" : "a27-faq__row"}>
                <h3 className="a27-faq__h3">
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(expanded ? -1 : i)}
                    className="a27-faq__q"
                  >
                    <span>{item.q}</span>
                    <img src="/2027/icons/navy/chevron.svg" alt="" width={20} height={20} className="a27-faq__chev" data-open={expanded ? "true" : "false"} />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} data-acc="" data-open={expanded ? "true" : "false"}>
                  <div><p className="a27-faq__a">{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="a27-faq__more">
          <a href={withLang(personal ? "/faq#personal" : "/faq#commercial", lang)} className="a27-faq__all">
            {t(personal ? "faq.viewAllPersonal" : "faq.viewAllCommercial")}
          </a>
        </div>
        <div className="a27-faq__help">
          <p className="a27-faq__line">{t("faq.stillHave")} {t("faq.stillSub")}</p>
          <div className="a27-faq__btns">
            <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="a27-btn-wa">
              <img src="/2027/icons/deep/whatsapp.svg" alt="" width={18} height={18} />
              {t("a27.cta.whatsapp")}
            </a>
            <a href={PHONE_HREF} className="a27-btn-phone">
              <img src="/2027/icons/navy/phone.svg" alt="" width={16} height={16} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
