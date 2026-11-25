"use client";

// 2027 footer (design/claude-design/home/source/Ativa2027Footer.dc.html).
// Midnight, scalloped top edge, logo + tagline + Get a quote / WhatsApp / phone,
// link columns (Personal, Business, Service + Company, Talk to Ativa), licensed
// states + language buttons, agency note, copyright + privacy links.
// Office, disclosure and tagline use the live site's footer information.
// Product and service links go to their page (current language) when it exists;
// otherwise they open the EXISTING pop-up. On inner pages the language buttons
// go to the same page in the other language.

import Link from "next/link";
import { useSiteI18n } from "@/i18n/PageLang";
import { pageHref } from "@/content/pages/built";
import {
  BUSINESS_MENU,
  LICENSED_STATES,
  PERSONAL_MENU,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_ITEMS,
  WHATSAPP_DISPLAY,
  bopHref,
  whatsappHref,
  type QuoteTarget,
} from "@/components/home/catalog";
import type { Language, Mode } from "@/types";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href:  "https://www.facebook.com/ativainsurance/",
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href:  "https://www.instagram.com/ativainsurance",
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Google Reviews",
    href:  "https://maps.app.goo.gl/Zd8AptfZe46v9ntj8",
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
];

const LANGS: Array<{ code: Language; htmlLang: string; name: string }> = [
  { code: "en", htmlLang: "en", name: "English" },
  { code: "pt", htmlLang: "pt-BR", name: "Português" },
  { code: "es", htmlLang: "es", name: "Español" },
];

interface FooterProps {
  mode: Mode;
  /** "Get a quote" — homepage passes its opener; elsewhere it goes to /?openQuote= */
  onGetQuote?: () => void;
  /** Open the existing pop-up for one product (homepage and inner pages) */
  onOpenProduct?: (line: Mode, product?: string) => void;
}

export default function Footer({ mode, onGetQuote, onOpenProduct }: FooterProps) {
  const { t, lang, setLang, page } = useSiteI18n();

  const getQuote = () => {
    if (onGetQuote) onGetQuote();
    else window.location.href = `/?openQuote=${mode}${lang !== "en" ? `&lang=${lang}` : ""}`;
  };
  const SERVICE_PAGE: Record<string, string> = { claims: "claims-help", idcards: "id-cards", coi: "coi", changes: "policy-changes" };
  const serviceHref = (id: string) => pageHref(SERVICE_PAGE[id], lang) ?? (id === "claims" ? "/faq" : whatsappHref(t(`a27.wa.${id}`)));
  const serviceExternal = (id: string) => !pageHref(SERVICE_PAGE[id], lang) && id !== "claims";
  const productLink = (id: string, group: "personal" | "business", target: QuoteTarget) => {
    const href = pageHref(id, lang);
    const label = t(`a27.items.${group}.${id}`);
    return href
      ? <Link href={href} className="a27-footer__link">{label}</Link>
      : <button type="button" className="a27-footer__link" onClick={() => run(target)}>{label}</button>;
  };
  const run = (target: QuoteTarget) => {
    if (target.kind === "ams") { window.location.href = bopHref(lang); return; }
    if (onOpenProduct) onOpenProduct(target.line, target.product);
    else {
      const qs = new URLSearchParams({ openQuote: target.line });
      if (target.product) qs.set("product", target.product);
      window.location.href = `/?${qs.toString()}`;
    }
  };

  const company = [
    { label: t("a27.footer.aboutLink"), href: pageHref("about", lang) ?? "/faq" },
    { label: t("a27.footer.learnLink"), href: pageHref("coverages", lang) ?? "/blog" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.rceCalculator"), href: "/rce-calculator" },
  ];

  return (
    <footer className="a27-chrome a27-footer a27-on-dark" data-section="footer">
      <svg aria-hidden viewBox="0 0 1000 100" preserveAspectRatio="none" className="a27-footer__edge">
        <path fill="#002941" d="M0 100Q110 20 245 48Q500-48 755 48Q890 20 1000 100Z" />
      </svg>
      <div className="a27-footer__inner">
        <div className="a27-footer__top">
          <div className="a27-footer__brand">
            <img src="/2027/brand/logo-color-dark.png" alt="Ativa Insurance" width={132} height={132} loading="lazy" />
            <p className="a27-footer__tagline">{t("footer.tagline")}</p>
          </div>
          <div className="a27-footer__actions">
            <span className="a27-footer__quote">
              <button type="button" data-arc="" className="a27-btn a27-btn--std a27-btn--footer" onClick={getQuote}>
                <span data-glint="" aria-hidden />
                <span>{t("nav.getQuote")}</span>
              </button>
              <span aria-hidden className="a27-arc a27-arc--orange a27-btn-arc" />
            </span>
            <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="a27-btn-wa">
              <img src="/2027/icons/deep/whatsapp.svg" alt="" width={19} height={19} />
              {t("a27.cta.whatsapp")}
            </a>
            <a href={PHONE_HREF} className="a27-footer__phone">
              <img src="/2027/icons/white/phone.svg" alt="" width={17} height={17} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <nav aria-label={t("a27.footer.label")} className="a27-footer__cols">
          <div>
            <p className="a27-footer__h">{t("nav.personal")}</p>
            <ul className="a27-footer__list">
              {PERSONAL_MENU.map((it) => (
                <li key={it.id}>{productLink(it.id, "personal", it.target)}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="a27-footer__h">{t("nav.commercial")}</p>
            <ul className="a27-footer__list">
              {BUSINESS_MENU.map((it) => (
                <li key={it.id}>{productLink(it.id, "business", it.target)}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="a27-footer__h">{t("a27.nav.service")}</p>
            <ul className="a27-footer__list a27-footer__list--gap">
              {SERVICE_ITEMS.map((id) => (
                <li key={id}>
                  <a
                    href={serviceHref(id)}
                    target={serviceExternal(id) ? "_blank" : undefined}
                    rel={serviceExternal(id) ? "noopener noreferrer" : undefined}
                    className="a27-footer__link"
                  >
                    {t(`a27.items.service.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
            <p className="a27-footer__h">{t("a27.footer.company")}</p>
            <ul className="a27-footer__list">
              {company.map((c) => (
                <li key={c.label}><Link href={c.href} className="a27-footer__link">{c.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="a27-footer__contact">
            <p className="a27-footer__h a27-footer__h--flush">{t("a27.footer.contact")}</p>
            <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="a27-footer__kv">
              <span className="a27-footer__k">{t("a27.footer.whatsappLabel")}</span>
              <span className="a27-footer__v">{WHATSAPP_DISPLAY}</span>
            </a>
            <a href={PHONE_HREF} className="a27-footer__kv">
              <span className="a27-footer__k">{t("a27.footer.phoneLabel")}</span>
              <span className="a27-footer__v">{PHONE_DISPLAY}</span>
            </a>
            <div className="a27-footer__kv">
              <span className="a27-footer__k">{t("a27.footer.addressLabel")}</span>
              <span className="a27-footer__addr">{t("footer.address")}</span>
            </div>
          </div>
        </nav>

        <div className="a27-footer__row">
          <div className="a27-footer__states">
            <span className="a27-footer__statestitle">{t("a27.footer.statesTitle")}</span>
            {LICENSED_STATES.map((code) => (
              <abbr key={code} title={t(`a27.states.names.${code}`)} className="a27-footer__state">{code}</abbr>
            ))}
          </div>
          <div role="group" aria-label={t("a27.nav.language")} className="a27-footer__langs">
            {LANGS.map((l) =>
              page?.alternates[l.code] ? (
                <a
                  key={l.code}
                  href={page.alternates[l.code]}
                  lang={l.htmlLang}
                  hrefLang={l.htmlLang}
                  aria-current={l.code === lang ? "true" : undefined}
                  className="a27-footer__lang"
                >
                  {l.name}
                </a>
              ) : (
                <button
                  key={l.code}
                  type="button"
                  lang={l.htmlLang}
                  aria-pressed={l.code === lang}
                  onClick={() => setLang(l.code)}
                  className="a27-footer__lang"
                >
                  {l.name}
                </button>
              ),
            )}
          </div>
        </div>

        <p className="a27-footer__note">{t("footer.disclaimer")}</p>

        <div className="a27-footer__legal">
          <span>{t("footer.rights", { year: new Date().getFullYear() })}</span>
          <div className="a27-footer__legallinks">
            <ul className="a27-footer__social" aria-label={t("a27.footer.social")}>
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>
                </li>
              ))}
            </ul>
            <Link href="/privacy-policy">{t("footer.privacy")}</Link>
            <Link href="/sms-privacy-policy">{t("footer.smsPrivacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
