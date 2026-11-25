"use client";

// 2027 cross-line band: a midnight block with a photo under a left-to-right
// veil. Personal (unchanged): promotes Commercial with the live switchBanner
// wording; the white button switches the page to Commercial (navigation).
// Commercial (site v2): no longer promotes Personal — heading, body line, an
// orange primary button that opens the EXISTING commercial pop-up with no
// product preselected, and an outlined WhatsApp button.

import Image from "next/image";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappHref } from "@/components/home/catalog";

interface Props {
  mode: Mode;
  onSwitchMode: (mode: Mode) => void;
  /** Commercial: existing commercial pop-up, no product preselected */
  onQuote: () => void;
}

export default function ContactCTA({ mode, onSwitchMode, onQuote }: Props) {
  const { t } = useLanguage();
  const personal = mode === "personal";
  const title = personal ? t("switchBanner.headline") : t("a27.band.title");
  const body = personal ? t("switchBanner.sub") : t("a27.band.body");

  return (
    <section className="a27-band" aria-labelledby="band-title" data-section="cta-band">
      <div className="a27-container">
        <div className="a27-band__block a27-on-dark">
          <div className="a27-band__photo" aria-hidden>
            <Image
              key={mode}
              src={personal ? "/2027/home/commercial-hero-bg.webp" : "/2027/home/commercial-hero-logistics-2027.webp"}
              alt=""
              fill
              sizes="(min-width: 1180px) 1116px, 100vw"
            />
          </div>
          <span aria-hidden className="a27-band__veil" />
          <div className="a27-band__text">
            <h2 id="band-title" className="a27-band__title">{title}</h2>
            <p className="a27-band__body">{body}</p>
          </div>
          {personal ? (
            <span className="a27-band__cta">
              <button type="button" data-arc="" className="a27-btn-white" onClick={() => onSwitchMode("commercial")}>
                <span data-glint="" aria-hidden />
                <span>{t("switchBanner.cta")}</span>
              </button>
              <span aria-hidden className="a27-arc a27-arc--orange a27-btn-arc" />
            </span>
          ) : (
            <div className="a27-band__btns">
              <span className="a27-band__cta">
                <button type="button" data-arc="" className="a27-btn a27-band__quote" onClick={onQuote}>
                  <span data-glint="" aria-hidden />
                  <span>{t("a27.band.cta")}</span>
                </button>
                <span aria-hidden className="a27-arc a27-arc--orange a27-btn-arc" />
              </span>
              <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="a27-btn-outline-dark">
                {t("a27.band.wa")}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
