"use client";

// 2027 cross-line band: a midnight block with the other line's photo under a
// left-to-right veil. The Personal page promotes Commercial (live
// switchBanner wording); the Commercial page promotes Personal. The button
// switches the page to the other line and scrolls to the top — navigation,
// not a quote trigger.

import Image from "next/image";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  mode: Mode;
  onSwitchMode: (mode: Mode) => void;
}

export default function ContactCTA({ mode, onSwitchMode }: Props) {
  const { t } = useLanguage();
  const personal = mode === "personal";
  const title = personal ? t("switchBanner.headline") : t("a27.band.title");
  const body = personal ? t("switchBanner.sub") : t("a27.band.body");
  const cta = personal ? t("switchBanner.cta") : t("a27.band.cta");

  return (
    <section className="a27-band" aria-labelledby="band-title" data-section="cta-band">
      <div className="a27-container">
        <div className="a27-band__block a27-on-dark">
          <div className="a27-band__photo" aria-hidden>
            <Image
              src={personal ? "/2027/photos/hero-commercial.webp" : "/2027/photos/hero-personal.webp"}
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
          <span className="a27-band__cta">
            <button
              type="button"
              data-arc=""
              className="a27-btn-white"
              onClick={() => onSwitchMode(personal ? "commercial" : "personal")}
            >
              <span data-glint="" aria-hidden />
              <span>{cta}</span>
            </button>
            <span aria-hidden className="a27-arc a27-arc--orange a27-btn-arc" />
          </span>
        </div>
      </div>
    </section>
  );
}
