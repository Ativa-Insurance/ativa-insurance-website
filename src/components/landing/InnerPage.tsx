// Industry, About and Coverages hub pages (site-v2 README 5.4 / 5.5): the
// earlier inner-page design, rendered on the server in the URL's language.
// Breadcrumb row, then a two-column hero (artwork on the right: product globe
// or line icon in a soft-blue circle; About shows the glass logo on a midnight
// panel; the hub has no art). Quote buttons open the EXISTING pop-up.
//   Industry: quick answer → coverage needed (links to product pages) → price
//     factors → how it works → carriers → FAQ → reviewed by → cross-line band.
//   About: quick answer → fact tiles → what an independent agency does →
//     (team, hidden until supplied) → where we're licensed → FAQ.
//   Hub: three index groups (links) → glossary A–Z → reviewed by.

import Image from "next/image";
import Link from "next/link";
import type { Language, Mode } from "@/types";
import { makeT } from "@/i18n/dict";
import { REGISTRY, homeHref, type PageId } from "@/content/pages/registry";
import { CONTENT, alternatesFor } from "@/content/pages/index";
import type { AboutContent, HubContent, IndustryContent, BaseCopy } from "@/content/pages/types";
import { breadcrumbs, pageJsonLd } from "@/content/pages/seo";
import { EMAIL } from "@/content/site";
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "@/components/home/catalog";
import { REVIEWER_NAME, REVIEWER_ROLE } from "@/content/reviewer";
import SectionHead from "@/components/v2/SectionHead";
import CarrierMarquee from "@/components/CarrierMarquee";
import InnerShell from "./InnerShell";
import QuoteButton from "./QuoteButton";
import LandingFaq from "./LandingFaq";
import StickyBar from "./StickyBar";
import { pageCards, type PageCard } from "./cards";

const STATE_ORDER = ["FL", "GA", "SC", "NC", "TN", "OH", "PA", "MD", "NJ", "CT"];

/** 84px (industry), 64px (hub) or hero-size artwork: globe, or the navy line icon in a soft-blue circle */
function Art({ globe, icon, cls }: { globe?: string; icon: string; cls: string }) {
  return globe ? (
    <img src={`/2027/globes/${globe}.png`} alt="" width={300} height={300} loading="lazy" className={`${cls} lp-art`} />
  ) : (
    <span aria-hidden className={`${cls} lp-art lp-art--icon`}><img src={`/2027/icons/navy/${icon}.svg`} alt="" /></span>
  );
}

export default function InnerPage({ id, lang }: { id: PageId; lang: Language }) {
  const e = REGISTRY[id];
  const content = CONTENT[id]!;
  const copy = content.copy[lang] as BaseCopy;
  const tr = makeT(lang);
  const t = tr.t;
  const biz = e.line === "business";
  const mode: Mode = biz ? "commercial" : "personal";
  const target = e.quote!;
  const crumbs = breadcrumbs(id, lang);
  const arcCls = biz ? "a27-arc a27-arc--orange" : "a27-arc";
  const reviewer = REVIEWER_NAME && REVIEWER_ROLE;
  const waMsg = t("a27.wa.hello");

  const industry = e.template === "industry" ? (content as IndustryContent).copy[lang] : null;
  const aboutC = e.template === "about" ? (content as AboutContent) : null;
  const about = aboutC ? aboutC.copy[lang] : null;
  const hubC = e.template === "hub" ? (content as HubContent) : null;
  const hub = hubC ? hubC.copy[lang] : null;

  // Glossary: A–Z in the page language, letter shown on the first term of each letter
  const terms = hub ? [...hub.glossary].sort((a, b) => a.t.localeCompare(b.t, lang)) : [];
  const letters: string[] = [];
  const termRows = terms.map((g) => {
    const L = g.t.charAt(0).toLocaleUpperCase(lang).normalize("NFD").replace(/[̀-ͯ]/g, "");
    const first = !letters.includes(L);
    if (first) letters.push(L);
    return { ...g, letter: first ? L : "" };
  });

  const states = (tr.tRaw("a27.states.names") ?? {}) as Record<string, string>;
  const heroArt = industry ? (
    <Art globe={e.globe} icon={e.icon} cls="lp-ihero__globe" />
  ) : about ? (
    <div className="lp-ihero__logo a27-on-dark">
      <Image src="/2027/brand/ativa-logo-glass-alpha-960.webp" alt="Ativa Insurance" width={960} height={960} sizes="(min-width: 1024px) 300px, 60vw" priority />
    </div>
  ) : null;

  const indexGroup = (title: string, cards: PageCard[], key: string) =>
    cards.length ? (
      <section className="lp-sec lp-index" aria-labelledby={`idx-${key}`} data-section={`index-${key}`} key={key}>
        <div className="a27-container">
          <SectionHead id={`idx-${key}`} title={title} />
          <ul className="lp-index__grid">
            {cards.map((c) => (
              <li key={c.id}>
                <Link href={c.href} className="lp-index__card">
                  <Art globe={c.globe} icon={c.icon} cls="lp-index__art" />
                  <span className="lp-index__text">
                    <span className="lp-index__t">{c.t}</span>
                    {c.d && <span className="lp-index__d">{c.d}</span>}
                  </span>
                  <img src="/2027/icons/navy/arrow.svg" alt="" width={16} height={16} className="lp-index__arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ) : null;

  return (
    <InnerShell lang={lang} alternates={alternatesFor(id)} line={e.line}>
      {pageJsonLd(id, lang).map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      {/* Breadcrumb row + hero */}
      <section className={`lp-ihero${heroArt ? "" : " lp-ihero--noart"}`} aria-labelledby="lp-title" data-section="hero">
        <div className="a27-container">
          <nav aria-label={t("lp.crumbs.label")} className="lp-crumbs lp-ihero__crumbs">
            <ol>
              {crumbs.map((b, i) => (
                <li key={b.name}>
                  {i < crumbs.length - 1 ? (
                    <>
                      {b.href ? <Link href={b.href}>{b.name}</Link> : <span>{b.name}</span>}
                      <span aria-hidden className="lp-crumbs__sep">›</span>
                    </>
                  ) : (
                    <span aria-current="page">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="lp-ihero__grid">
            <div className="lp-ihero__col">
              <h1 id="lp-title" className="lp-ihero__h1">{copy.h1}</h1>
              <span aria-hidden className={`${arcCls} lp-hero__arc`} />
              <p className="lp-ihero__sub">{copy.sub}</p>
              <div className="lp-hero__btns">
                <span className="lp-btnwrap">
                  <QuoteButton target={target} className="lp-btn">{t("nav.getQuote")}</QuoteButton>
                  <span aria-hidden className="a27-arc a27-btn-arc" />
                </span>
                <a href={whatsappHref(waMsg)} target="_blank" rel="noopener noreferrer" className="lp-btn-wa">
                  <img src="/2027/icons/deep/whatsapp.svg" alt="" width={20} height={20} />
                  {t("a27.cta.whatsapp")}
                </a>
              </div>
              <p className="lp-hero__lic">
                <img src="/2027/icons/navy/check.svg" alt="" width={15} height={15} />
                {t("lp.licensed")}
              </p>
            </div>
            {heroArt && <div className="lp-ihero__art">{heroArt}</div>}
          </div>
        </div>
      </section>

      {/* Quick answer */}
      {copy.quickQ && copy.quick ? (
        <section className="lp-quick" aria-labelledby="quick-title" data-section="quick-answer">
          <div className="a27-container">
            <div className="lp-quick__box a27-on-dark">
              <div className="lp-quick__q">
                <span className="lp-badge">{t("lp.quick")}</span>
                <h2 id="quick-title" className="lp-quick__h2">{copy.quickQ}</h2>
              </div>
              <p className="lp-quick__a">{copy.quick}</p>
            </div>
          </div>
        </section>
      ) : null}

      {/* About: fact tiles (only facts already on the site) */}
      {about ? (
        <section className="lp-facts" aria-label={copy.h1} data-section="facts">
          <div className="a27-container">
            <ul className="lp-facts__grid">
              {about.facts.map((f) => (
                <li key={f} className="lp-fact"><img src="/2027/icons/navy/check.svg" alt="" width={18} height={18} />{f}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Industry: coverage this kind of business usually needs */}
      {industry ? (
        <section className="lp-sec" aria-labelledby="needed-title" data-section="coverages-needed">
          <div className="a27-container">
            <SectionHead id="needed-title" title={t("lp.needed")} note={t("lp.neededLead")} />
            <ul className="lp-needed">
              {industry.needed.map((n) => {
                const c = pageCards([n.id], lang)[0];
                if (!c) return null;
                return (
                  <li key={n.id}>
                    <Link href={c.href} className="lp-needed__card">
                      <Art globe={c.globe} icon={c.icon} cls="lp-needed__art" />
                      <span className="lp-needed__text">
                        <span className="lp-needed__t">{c.t}</span>
                        <span className="lp-needed__d">{n.why}</span>
                        <span className="lp-needed__see">{t("lp.see")}<img src="/2027/icons/navy/arrow.svg" alt="" width={14} height={14} /></span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Industry: what affects the price (no prices anywhere) */}
      {industry ? (
        <section className="lp-sec" aria-labelledby="factors-title" data-section="price-factors">
          <div className="a27-container lp-price">
            <div>
              <SectionHead id="factors-title" title={t("lp.factors")} className="lp-head--note" />
              <p className="lp-price__note">{t("lp.factorsNote")}</p>
            </div>
            <ol className="lp-price__list">
              {industry.factors.map((f, i) => (
                <li key={f.t}>
                  <span aria-hidden className="lp-price__n">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="lp-price__t">{f.t}</span>
                    <span className="lp-price__d">{f.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* Industry: how it works + carriers */}
      {industry ? (
        <>
          <section className="lp-sec" aria-labelledby="how-title" data-section="how-it-works">
            <div className="a27-container">
              <SectionHead id="how-title" title={t("lp.how")} />
              <ol className="lp-grid3">
                {((tr.tRaw("lp.steps") ?? []) as Array<{ t: string; d: string }>).map((s, i) => (
                  <li key={s.t} className="a27-step">
                    <span className="a27-step__n">{i + 1}</span>
                    <p className="a27-step__t">{s.t}</p>
                    <p className="a27-step__d">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <CarrierMarquee mode={mode} variant="page" title={t("lp.carriers")} note={t("lp.carriersNote")} pauseLabel={t("lp.pause")} playLabel={t("lp.play")} />
        </>
      ) : null}

      {/* About: what an independent agency does */}
      {about ? (
        <section className="lp-sec" aria-labelledby="wwd-title" data-section="cards">
          <div className="a27-container">
            <SectionHead id="wwd-title" title={t("lp.whatWeDo")} />
            <ul className="lp-grid3">
              {about.whatWeDo.map((w) => (
                <li key={w.t} className="lp-card lp-who">
                  <h3 className="lp-who__t">{w.t}</h3>
                  <p className="lp-card__d">{w.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* About: where we're licensed + office (static map, not interactive) */}
      {about ? (
        <section className="lp-sec" aria-labelledby="states-title" data-section="states-office">
          <div className="a27-container">
            <div className="lp-states">
              <div>
                <h2 id="states-title" className="a27-h2">{t("lp.states")}</h2>
                <ul className="lp-states__chips">
                  {STATE_ORDER.map((code) => (
                    <li key={code} className="lp-states__chip">{code}-{states[code] ?? code}</li>
                  ))}
                </ul>
                <h3 className="lp-states__office">{t("lp.office")}</h3>
                <address className="lp-states__addr">
                  1 SE Ocean Blvd, Stuart, FL 34994
                  {aboutC?.hours ? <><br />{aboutC.hours[lang]}</> : null}
                  <br />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </address>
              </div>
              <img src="/2027/brand/licensed-states-light.svg" alt={t("a27.states.mapAlt")} width={340} height={400} loading="lazy" className="lp-states__map" />
            </div>
          </div>
        </section>
      ) : null}

      {/* Hub: index groups + glossary */}
      {hubC && hub ? (
        <>
          {indexGroup(t("lp.indexP"), pageCards(hubC.indexP, lang), "p")}
          {indexGroup(t("lp.indexB"), pageCards(hubC.indexB, lang), "b")}
          {indexGroup(t("lp.indexI"), pageCards(hubC.indexI, lang), "i")}
          <section className="lp-sec" aria-labelledby="glossary-title" data-section="glossary">
            <div className="a27-container">
              <SectionHead id="glossary-title" title={t("lp.glossary")} note={t("lp.glossaryLead")} />
              <nav aria-label={t("lp.glossaryLetters")} className="lp-gloss__letters">
                {letters.map((L) => <a key={L} href={`#g-${L}`} className="lp-gloss__letter">{L}</a>)}
              </nav>
              <dl className="lp-gloss">
                {termRows.map((g) => (
                  <div key={g.t} className="lp-gloss__row" id={g.letter ? `g-${g.letter}` : undefined}>
                    <span aria-hidden className="lp-gloss__L">{g.letter}</span>
                    <dt className="lp-gloss__t">{g.t}</dt>
                    <dd className="lp-gloss__d">{g.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </>
      ) : null}

      {/* FAQ */}
      {copy.faq.length ? (
        <LandingFaq title={about ? t("lp.faqAbout") : t("lp.faq", { x: copy.h1.charAt(0).toLowerCase() + copy.h1.slice(1) })} items={copy.faq} sourcesLabel={t("lp.sources")} />
      ) : null}

      {/* Reviewed by: hidden until the owner fills reviewer name and role */}
      {reviewer && !about ? (
        <section className="lp-reviewed" aria-label={t("lp.reviewed")} data-section="reviewed-by">
          <div className="a27-faq__inner">
            <div className="lp-reviewed__box">
              <div className="lp-reviewed__who">
                <span className="lp-label">{t("lp.reviewed")}</span>
                <span className="lp-reviewed__name">{REVIEWER_NAME}</span>
                <span className="lp-reviewed__role">{REVIEWER_ROLE}</span>
              </div>
              <div className="lp-reviewed__date">
                <span className="lp-label">{t("lp.updated")}</span>
                <time dateTime={content.updated}>{content.updated}</time>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Industry: cross-line band (a link to the Personal homepage view) */}
      {industry ? (
        <section className="a27-band lp-iband" aria-labelledby="band-title" data-section="cross-line-band">
          <div className="a27-container">
            <div className="a27-band__block a27-on-dark">
              <div className="a27-band__photo lp-iband__photo" aria-hidden>
                <Image src="/2027/home/personal-hero-bg.webp" alt="" fill sizes="(min-width: 1180px) 1116px, 100vw" />
              </div>
              <span aria-hidden className="a27-band__veil" />
              <div className="a27-band__text">
                <h2 id="band-title" className="a27-band__title">{t("lp.band.title")}</h2>
                <p className="a27-band__body">{t("lp.band.body")}</p>
              </div>
              <span className="a27-band__cta">
                <Link href={homeHref(lang, "personal")} data-arc="" className="a27-btn-white">
                  <span data-glint="" aria-hidden />
                  <span>{t("lp.band.cta")}</span>
                </Link>
                <span aria-hidden className="a27-arc a27-arc--orange a27-btn-arc" />
              </span>
            </div>
          </div>
        </section>
      ) : null}

      <StickyBar
        target={target}
        label={t("nav.getQuote")}
        shortLabel={t("nav.getQuote")}
        waMessage={waMsg}
        waLabel={t("a27.fab")}
        callLabel={t("a27.cta.call")}
        phoneHref={PHONE_HREF}
        groupLabel={t("lp.stickyLabel")}
      />
    </InnerShell>
  );
}
