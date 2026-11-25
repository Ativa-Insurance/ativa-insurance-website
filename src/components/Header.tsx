"use client";

// 2027 header (design/claude-design/site-v2/source/Ativa2027Header.dc.html).
// Sticky; transparent at the top of the homepage, frosted after 8px of scroll;
// 0.94 white from the top on other pages. Desktop (≥1024): Personal / Commercial
// / Service / Learn / About, language switch, WhatsApp, "Get a quote".
// Homepage: Personal / Commercial switch the view; phone + tablet get line tabs.
// Other pages: Personal / Commercial open their menu panels, and the language
// switch goes to the same page in the other language.
// Menu items link to their page (current language) when it exists; otherwise
// they open the EXISTING pop-up for that product.

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSiteI18n } from "@/i18n/PageLang";
import { pageHref } from "@/content/pages/built";
import { homeHref } from "@/content/pages/registry";
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
  /** Open the existing pop-up for one product (homepage and inner pages) */
  onOpenProduct?: (line: Mode, product?: string) => void;
  /** Inner pages: the line underlined in the nav (product and industry pages), or null */
  current?: Mode | null;
}

type Panel = "personal" | "business" | "service" | null;

/** Page id for each service menu item */
const SERVICE_PAGE: Record<ServiceId, string> = { claims: "claims-help", idcards: "id-cards", coi: "coi", changes: "policy-changes" };

const LANGS: Array<{ code: Language; label: string; htmlLang: string; name: string }> = [
  { code: "en", label: "EN", htmlLang: "en", name: "English" },
  { code: "pt", label: "PT", htmlLang: "pt-BR", name: "Português" },
  { code: "es", label: "ES", htmlLang: "es", name: "Español" },
];

const icon = (id: string, color = "navy") => `/2027/icons/${color}/${id}.svg`;

export default function Header({ mode, onGetQuote, onModeChange, onOpenProduct, current = null }: HeaderProps) {
  const { lang, setLang, t, page } = useSiteI18n();
  const isHome = !!onModeChange;
  const [scrolled, setScrolled] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setPanel(null);
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
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setPanel(null);
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
    else window.location.href = `/?openQuote=${mode}${lang !== "en" ? `&lang=${lang}` : ""}`;
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

  const togglePanel = (p: Exclude<Panel, null>) => setPanel((cur) => (cur === p ? null : p));
  // Service items: their page when built; until then claims → FAQ, others → WhatsApp with a pre-filled message
  const serviceHref = (id: ServiceId) => pageHref(SERVICE_PAGE[id], lang) ?? (id === "claims" ? "/faq" : whatsappHref(t(`a27.wa.${id}`)));
  const serviceExternal = (id: ServiceId) => !pageHref(SERVICE_PAGE[id], lang) && id !== "claims";
  const learnHref = pageHref("coverages", lang) ?? "/blog";
  const aboutHref = pageHref("about", lang) ?? "/faq";
  const logoHref = isHome ? "/?tab=personal" : homeHref(lang);
  const langIndex = Math.max(0, LANGS.findIndex((l) => l.code === lang));
  const frosted = scrolled || menuOpen;

  const lineItem = (m: Mode) => {
    const label = t(m === "personal" ? "nav.personal" : "nav.commercial");
    const isCurrent = isHome ? mode === m : current === m;
    const arc = isCurrent ? <span aria-hidden className="a27-arc a27-nav__arc" /> : null;
    const chev = <img src={icon("chevron")} alt="" width={14} height={14} className="a27-nav__chev" />;
    if (isHome) {
      return (
        <button type="button" className="a27-nav__link" aria-pressed={isCurrent} onClick={() => switchLine(m)}>
          {label}{chev}{arc}
        </button>
      );
    }
    const p = m === "personal" ? "personal" : "business";
    return (
      <button
        type="button"
        className="a27-nav__link"
        aria-expanded={panel === p}
        aria-controls={`a27-menu-${p}`}
        aria-current={isCurrent ? "true" : undefined}
        onClick={() => togglePanel(p)}
      >
        {label}{chev}{arc}
      </button>
    );
  };

  /** A product menu item: link to its page when built, otherwise the existing pop-up */
  const productItem = (it: CatalogItem, group: "personal" | "business", cls: string, size: number) => {
    const href = pageHref(it.id, lang);
    const body = (
      <>
        <img src={icon(it.icon)} alt="" width={size} height={size} />
        {t(`a27.items.${group}.${it.id}`)}
      </>
    );
    return (
      <li key={it.id}>
        {href ? (
          <Link href={href} className={cls} onClick={closeAll}>{body}</Link>
        ) : (
          <button type="button" className={cls} onClick={() => runTarget(it.target)}>{body}</button>
        )}
      </li>
    );
  };
  const menuItem = (it: CatalogItem, group: "personal" | "business") => productItem(it, group, "a27-mmenu__item", 20);

  return (
    <div ref={rootRef} className="a27-chrome a27-header-root" data-home={isHome ? "true" : "false"}>
      <a href="#main" className="a27-skip">{t("a27.skip")}</a>

      <header className="a27-header" data-frosted={frosted ? "true" : "false"}>
        <div className="a27-header__row">
          <Link href={logoHref} aria-label="Ativa Insurance" className="a27-brand" onClick={closeAll}>
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
              aria-expanded={panel === "service"}
              aria-controls="a27-menu-service"
              onClick={() => togglePanel("service")}
            >
              {t("a27.nav.service")}
              <img src={icon("chevron")} alt="" width={14} height={14} className="a27-nav__chev" />
            </button>
            <Link href={learnHref} className="a27-nav__link">{t("a27.nav.learn")}</Link>
            <Link href={aboutHref} className="a27-nav__link">{t("a27.nav.about")}</Link>
          </nav>

          <div className="a27-header__right">
            <div role="group" aria-label={t("a27.nav.language")} className="a27-lang">
              {LANGS.map((l) =>
                page?.alternates[l.code] ? (
                  <a
                    key={l.code}
                    href={page.alternates[l.code]}
                    lang={l.htmlLang}
                    hrefLang={l.htmlLang}
                    aria-label={l.name}
                    aria-current={l.code === lang ? "true" : undefined}
                    className="a27-lang__btn"
                  >
                    {l.label}
                  </a>
                ) : (
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
                ),
              )}
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
              onClick={() => { setPanel(null); setMenuOpen((o) => !o); }}
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

      {panel === "personal" && (
        <div id="a27-menu-personal" className="a27-panel a27-panel--personal" data-enter="rise">
          <div className="a27-panel__intro">
            <p className="a27-panel__title">{t("nav.personal")}</p>
            <p className="a27-panel__blurb">{t("a27.nav.personalBlurb")}</p>
          </div>
          <ul className="a27-panel__list a27-panel__list--grid">
            {PERSONAL_MENU.map((it) => productItem(it, "personal", "a27-panel__item", 22))}
          </ul>
        </div>
      )}

      {panel === "business" && (
        <div id="a27-menu-business" className="a27-panel a27-panel--business" data-enter="rise">
          <div className="a27-panel__intro">
            <p className="a27-panel__title">{t("nav.commercial")}</p>
            <p className="a27-panel__blurb">{t("a27.nav.businessBlurb")}</p>
          </div>
          <ul className="a27-panel__list a27-panel__list--grid">
            {BUSINESS_MENU.map((it) => productItem(it, "business", "a27-panel__item", 22))}
          </ul>
        </div>
      )}

      {panel === "service" && (
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
                  target={serviceExternal(id) ? "_blank" : undefined}
                  rel={serviceExternal(id) ? "noopener noreferrer" : undefined}
                  className="a27-panel__item"
                  onClick={() => setPanel(null)}
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
                      target={serviceExternal(id) ? "_blank" : undefined}
                      rel={serviceExternal(id) ? "noopener noreferrer" : undefined}
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
              <Link href={learnHref} className="a27-mmenu__item" onClick={closeAll}>{t("a27.nav.learn")}</Link>
              <Link href={aboutHref} className="a27-mmenu__item" onClick={closeAll}>{t("a27.nav.about")}</Link>
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
