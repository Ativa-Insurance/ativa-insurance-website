"use client";

// 2027 product selection, overlapping the bottom of the hero.
// Featured card (Auto / Commercial auto) with ZIP row, product tiles, a
// WhatsApp tile (Commercial: a band with a text link) and the link under the grid. All triggers open the EXISTING pop-ups.
// ZIP: the personal pop-up already accepts a pre-filled garaging ZIP
// (initialData.garageZip), so a valid ZIP is passed through; the commercial
// pop-up has no ZIP input prop, so there the box just opens the pop-up (DECISIONS B9).

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "@/components/ProductCard";
import {
  COMMERCIAL_TILES,
  PERSONAL_TILES,
  bopHref,
  whatsappHref,
  type QuoteTarget,
  type TileItem,
} from "@/components/home/catalog";
import type { Mode } from "@/types";

interface ProductSelectionProps {
  mode: Mode;
  onOpen: (line: Mode, product?: string, initialData?: Record<string, string>) => void;
  onGetQuote: () => void;
}

export default function ProductSelection({ mode, onOpen, onGetQuote }: ProductSelectionProps) {
  const { t, tProducts, lang } = useLanguage();
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const personal = mode === "personal";
  const tiles = personal ? PERSONAL_TILES : COMMERCIAL_TILES;
  const live = tProducts(mode);

  const copyOf = (tile: TileItem) => {
    if (tile.copy.source === "live") {
      const liveId = tile.copy.liveId;
      const p = live.find((x) => x.id === liveId);
      if (p) return { title: p.title, description: p.description };
    }
    return { title: t(`a27.tiles.${mode}.${tile.id}.t`), description: t(`a27.tiles.${mode}.${tile.id}.d`) };
  };

  const run = (target: QuoteTarget, initialData?: Record<string, string>) => {
    if (target.kind === "ams") window.location.href = bopHref(lang);
    else onOpen(target.line, target.product, initialData);
  };

  const [featured, ...rest] = tiles;
  const feat = copyOf(featured);

  const startFeatured = () => {
    if (zip.length > 0 && zip.length < 5) {
      setZipError(t("form.errors.zipCode"));
      return;
    }
    setZipError("");
    run(featured.target, personal && zip.length === 5 ? { garageZip: zip } : undefined);
  };

  const talkTitle = personal ? t("hero.personal.notSureText") : t("hero.commercial.preferTalk");
  const talkBody = personal ? t("hero.personal.talkToAdvisor") : t("hero.commercial.speakAgent");

  return (
    <div className="a27-pick" data-section="product-cards">
      <p id="pick-label" className="a27-pick__label">{t(`a27.pick.${mode}`)}</p>
      <div className="a27-pick__grid" role="group" aria-labelledby="pick-label">
        <div className="a27-feat">
          <span data-sweep="" aria-hidden className="a27-feat__sweep" />
          <div className="a27-feat__top">
            <span className="a27-badge">{t("a27.pick.popular")}</span>
          </div>
          <button type="button" className="a27-feat__body" onClick={startFeatured}>
            <span aria-hidden className="a27-feat__globe">
              <Image
                src={`/2027/globes/${featured.globe}.png`}
                alt=""
                width={230}
                height={230}
                priority
                sizes="(max-width: 1023px) 170px, 230px"
              />
            </span>
            <span className="a27-feat__text">
              <span className="a27-feat__title">{feat.title}</span>
              <span className="a27-feat__desc">{feat.description}</span>
            </span>
          </button>
          <div className="a27-zip">
            <label htmlFor="hero-zip" className="a27-sr">{t(`hero.${mode}.enterZip`)}</label>
            <input
              id="hero-zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder={t(`hero.${mode}.enterZip`)}
              value={zip}
              aria-invalid={zipError ? true : undefined}
              aria-describedby={zipError ? "hero-zip-error" : undefined}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
                if (zipError) setZipError("");
              }}
              onKeyDown={(e) => { if (e.key === "Enter") startFeatured(); }}
              className="a27-zip__input"
            />
            <button type="button" data-arc="" className="a27-btn a27-btn--std" onClick={startFeatured}>
              <span data-glint="" aria-hidden />
              <span>{t(`hero.${mode}.seeMyRate`)}</span>
            </button>
          </div>
          {zipError && <p id="hero-zip-error" role="alert" className="a27-zip__error">{zipError}</p>}
        </div>

        {rest.map((tile) => {
          const c = copyOf(tile);
          return (
            <ProductCard
              key={tile.id}
              title={c.title}
              description={c.description}
              globe={tile.globe}
              icon={tile.icon}
              href={tile.target.kind === "ams" ? bopHref(lang) : undefined}
              onClick={tile.target.kind === "ams" ? undefined : () => run(tile.target)}
            />
          );
        })}

        <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="a27-talk">
          {personal ? (
            <>
              <span className="a27-talk__icon"><img src="/2027/icons/deep/whatsapp.svg" alt="" width={24} height={24} /></span>
              <span className="a27-talk__title">{talkTitle}</span>
              <span className="a27-talk__body">{talkBody}</span>
            </>
          ) : (
            <>
              <span className="a27-talk__row">
                <span className="a27-talk__icon"><img src="/2027/icons/deep/whatsapp.svg" alt="" width={24} height={24} /></span>
                <span className="a27-talk__title">{talkTitle}</span>
              </span>
              <span className="a27-talk__body">{talkBody}</span>
              <span className="a27-talk__link">
                {t("a27.pick.talkLink")}
                <img src="/2027/icons/navy/arrow.svg" alt="" width={14} height={14} />
              </span>
            </>
          )}
        </a>
      </div>
      <div className="a27-pick__more">
        <button type="button" onClick={onGetQuote}>
          {t(personal ? "a27.pick.morePersonal" : "a27.pick.moreCommercial")}
        </button>
      </div>
    </div>
  );
}
