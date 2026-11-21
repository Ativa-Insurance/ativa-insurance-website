"use client";

// 2027 header (design/claude-design/home/source/Ativa2027Header.dc.html).
// Sticky; transparent at the top of the homepage, frosted after 8px of scroll.
// Desktop (≥1024): Personal / Commercial / Service / Learn / About, language
// switch, WhatsApp, "Get a quote". Phone + tablet: line tabs + full-screen menu.

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Toggle from "@/components/Toggle";
import {
  BUSINESS_MENU,
  PERSONAL_MENU,
  PHONE_HREF,
  SERVICE_ITEMS,
  bopHref,
  whatsappHref,
  type CatalogItem,
  type QuoteTarget,
  type ServiceId,
} from "@/components/home/catalog";
import type { Language, Mode } from "@/types";

interface HeaderProps {
  mode: Mode;
  /** "Get a quote" — opens the existing pop-up with no product preselected */
  onGetQuote?: () => void;
  /** Homepage only: switch between the Personal and Commercial views */
  onModeChange?: (mode: Mode) => void;
  /** Homepage only: open the existing pop-up for one product */
  onOpenProduct?: (line: Mode, product?: string) => void;
}

const LANGS: Array<{ code: Language; label: string; htmlLang: string; name: string }> = [
  { code: "en", label: "EN", htmlLang: "en", name: "English" },
  { code: "pt", label: "PT", htmlLang: "pt-BR", name: "Português" },
  { code: "es", label: "ES", htmlLang: "es", name: "Español" },
];

const icon = (id: string, color = "navy") => `/2027/icons/${color}/${id}.svg`;

export default function Header({ mode, onGetQuote, onModeChange, onOpenProduct }: HeaderProps) {
  const { lang, setLang, t } = useLanguage();
  const isHome = !!onModeChange;
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setServiceOpen(false);
    setMenuOpen(false);
  }, []);

  // Frosted header after 8px of scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes menus; click outside closes the Service panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeAll(); };
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setServiceOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [closeAll]);

  // Body scroll lock while the phone menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const getQuote = () => {
    closeAll();
    if (onGetQuote) onGetQuote();
    else window.location.href = `/?openQuote=${mode}`;
  };

  const runTarget = (target: QuoteTarget) => {
    closeAll();
    if (target.kind === "ams") {
      window.location.href = bopHref(lang);
      return;
    }
    if (onOpenProduct) onOpenProduct(target.line, target.product);
    else {
      const qs = new URLSearchParams({ openQuote: target.line });
      if (target.product) qs.set("product", target.product);
      window.location.href = `/?${qs.toString()}`;
    }
  };

  const switchLine = (m: Mode) => {
    closeAll();
    onModeChange?.(m);
  };

  const serviceHref = (id: ServiceId) => (id === "claims" ? "/faq" : whatsappHref(t(`a27.wa.${id}`)));
  const langIndex = Math.max(0, LANGS.findIndex((l) => l.code === lang));
  const frosted = scrolled || menuOpen;

  const lineItem = (m: Mode) => {
    const label = t(m === "personal" ? "nav.personal" : "nav.commercial");
    const current = isHome && mode === m;
    const arc = current ? <span aria-hidden className="a27-arc a27-nav__arc" /> : null;
    return isHome ? (
      <button type="button" className="a27-nav__link" aria-pressed={current} onClick={() => switchLine(m)}>
        {label}
        <img src={icon("chevron")} alt="" width={14} height={14} className="a27-nav__chev" />
        {arc}
      </button>
    ) : (
      <Link href={`/?tab=${m}`} className="a27-nav__link">
        {label}
        <img src={icon("chevron")} alt="" width={14} height={14} className="a27-nav__chev" />
      </Link>
    );
  };

  const menuItem = (it: CatalogItem, group: "personal" | "business") => (
    <li key={it.id}>
      <button type="button" className="a27-mmenu__item" onClick={() => runTarget(it.target)}>
        <img src={icon(it.icon)} alt="" width={20} height={20} />
        {t(`a27.items.${group}.${it.id}`)}
      </button>
    </li>
  );

  return (
    <div ref={rootRef} className="a27-chrome a27-header-root" data-home={isHome ? "true" : "false"}>
      <a href="#main" className="a27-skip">{t("a27.skip")}</a>

      <header className="a27-header" data-frosted={frosted ? "true" : "false"}>
        <div className="a27-header__row">
          <Link href="/?tab=personal" aria-label="Ativa Insurance" className="a27-brand" onClick={closeAll}>
            <img src="/2027/brand/logo-mono-black-emblem.png" alt="" width={48} height={38} className="a27-brand__emblem" />
            <span className="a27-brand__words">
              <span className="a27-brand__ativa">ATIVA</span>
              <span className="a27-brand__ins">INSURANCE</span>
            </span>
          </Link>

          <nav aria-label={t("a27.nav.main")} className="a27-nav">
            {lineItem("personal")}
            {lineItem("commercial")}
            <button
              type="button"
              className="a27-nav__link"
              aria-expanded={serviceOpen}
              aria-controls="a27-menu-service"
              onClick={() => setServiceOpen((o) => !o)}
            >
              {t("a27.nav.service")}
              <img src={icon("chevron")} alt="" width={14} height={14} className="a27-nav__chev" />
            </button>
            <Link href="/blog" className="a27-nav__link">{t("a27.nav.learn")}</Link>
            <Link href="/faq" className="a27-nav__link">{t("a27.nav.about")}</Link>
          </nav>

          <div className="a27-header__right">
            <div role="group" aria-label={t("a27.nav.language")} className="a27-lang">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  lang={l.htmlLang}
                  aria-label={l.name}
                  aria-pressed={l.code === lang}
                  onClick={() => setLang(l.code)}
                  className="a27-lang__btn"
                >
                  {l.label}
                </button>
              ))}
              <span aria-hidden className="a27-lang__arc" style={{ transform: `translateX(${langIndex * 44}px)` }} />
            </div>

            <a
              href={whatsappHref(t("a27.wa.hello"))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("a27.fab")}
              className="a27-header__wa"
            >
              <img src={icon("whatsapp", "deep")} alt="" width={21} height={21} />
            </a>

            <span className="a27-header__quote">
              <button type="button" data-arc="" className="a27-btn a27-btn--header" onClick={getQuote}>
                <span data-glint="" aria-hidden />
                <span>{t("nav.getQuote")}</span>
              </button>
              <span aria-hidden className="a27-arc a27-btn-arc" />
            </span>

            <button
              type="button"
              className="a27-header__menu"
              aria-expanded={menuOpen}
              aria-controls="a27-mobile-menu"
              aria-label={menuOpen ? t("a27.nav.close") : t("a27.nav.menu")}
              onClick={() => { setServiceOpen(false); setMenuOpen((o) => !o); }}
            >
              <img src={icon(menuOpen ? "x" : "menu")} alt="" width={22} height={22} />
            </button>
          </div>
        </div>

        {isHome && (
          <div className="a27-header__tabs">
            <Toggle mode={mode} onChange={switchLine} />
          </div>
        )}
        <span aria-hidden className="a27-arc a27-header__edge" />
      </header>

      {serviceOpen && (
        <div id="a27-menu-service" className="a27-panel" data-enter="rise">
          <div className="a27-panel__intro">
            <p className="a27-panel__title">{t("a27.nav.service")}</p>
            <p className="a27-panel__blurb">{t("a27.nav.serviceBlurb")}</p>
          </div>
          <ul className="a27-panel__list">
            {SERVICE_ITEMS.map((id) => (
              <li key={id}>
                <a
                  href={serviceHref(id)}
                  target={id === "claims" ? undefined : "_blank"}
                  rel={id === "claims" ? undefined : "noopener noreferrer"}
                  className="a27-panel__item"
                  onClick={() => setServiceOpen(false)}
                >
                  <img src={icon(id)} alt="" width={22} height={22} />
                  {t(`a27.items.service.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {menuOpen && (
        <div id="a27-mobile-menu" className="a27-mmenu" data-enter="fade">
          <nav aria-label={t("a27.nav.mobile")} className="a27-mmenu__nav">
            <div>
              <p className="a27-mmenu__label">{t("nav.personal")}</p>
              <ul className="a27-mmenu__grid">{PERSONAL_MENU.map((it) => menuItem(it, "personal"))}</ul>
            </div>
            <div>
              <p className="a27-mmenu__label">{t("nav.commercial")}</p>
              <ul className="a27-mmenu__grid a27-mmenu__grid--biz">{BUSINESS_MENU.map((it) => menuItem(it, "business"))}</ul>
            </div>
            <div>
              <p className="a27-mmenu__label">{t("a27.nav.service")}</p>
              <ul className="a27-mmenu__grid a27-mmenu__grid--one">
                {SERVICE_ITEMS.map((id) => (
                  <li key={id}>
                    <a
                      href={serviceHref(id)}
                      target={id === "claims" ? undefined : "_blank"}
                      rel={id === "claims" ? undefined : "noopener noreferrer"}
                      className="a27-mmenu__item"
                      onClick={closeAll}
                    >
                      <img src={icon(id)} alt="" width={20} height={20} />
                      {t(`a27.items.service.${id}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="a27-mmenu__grid">
              <Link href="/blog" className="a27-mmenu__item" onClick={closeAll}>{t("a27.nav.learn")}</Link>
              <Link href="/faq" className="a27-mmenu__item" onClick={closeAll}>{t("a27.nav.about")}</Link>
            </div>
          </nav>
          <div className="a27-mmenu__actions">
            <button type="button" className="a27-mmenu__quote" onClick={getQuote}>{t("nav.getQuote")}</button>
            <div className="a27-mmenu__pair">
              <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="a27-mmenu__wa">
                <img src={icon("whatsapp", "deep")} alt="" width={20} height={20} />
                {t("a27.cta.whatsapp")}
              </a>
              <a href={PHONE_HREF} className="a27-mmenu__call">
                <img src={icon("phone")} alt="" width={18} height={18} />
                {t("a27.cta.call")}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
