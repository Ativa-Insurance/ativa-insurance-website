// Product landing template (site-v2 README 5.2), rendered on the server in the
// URL's language. Sections render only when the page has content for them:
// hero, quick answer, what it protects, explorer, real-world situations,
// commonly misunderstood, covers / doesn't cover, who needs it, what affects
// the price, how it works, carriers, FAQ, related coverages, reviewed by
// (hidden until filled), final CTA; phone sticky bar.
// Quote buttons open the EXISTING pop-up for the page's product (QuoteHost).

import Image from "next/image";
import Link from "next/link";
import type { Language, Mode } from "@/types";
import { makeT } from "@/i18n/dict";
import { REGISTRY, type PageId } from "@/content/pages/registry";
import { CONTENT, alternatesFor, pageHref } from "@/content/pages/index";
import { breadcrumbs, pageJsonLd } from "@/content/pages/seo";
import { PERSONAL_TILES, COMMERCIAL_TILES, PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "@/components/home/catalog";
import { REVIEWER_NAME, REVIEWER_ROLE } from "@/content/reviewer";
import SectionHead from "@/components/v2/SectionHead";
import Scallop from "@/components/v2/Scallop";
import CarrierMarquee from "@/components/CarrierMarquee";
import InnerShell from "./InnerShell";
import QuoteButton from "./QuoteButton";
import Explorer from "./Explorer";
import Myths from "./Myths";
import LandingFaq from "./LandingFaq";
import StickyBar from "./StickyBar";

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export default function LandingPage({ id, lang }: { id: PageId; lang: Language }) {
  const c = CONTENT[id]!;
  const e = REGISTRY[id];
  const copy = c.copy[lang];
  const tr = makeT(lang);
  const t = tr.t;
  const biz = e.line === "business";
  const mode: Mode = biz ? "commercial" : "personal";
  const target = e.quote!;
  const crumbs = breadcrumbs(id, lang);
  const hero = c.hero;
  const arcCls = biz ? "a27-arc a27-arc--orange" : "a27-arc";

  // Related cards: link to built pages only (a product without a page is left out)
  const related = c.related
    .map((rid) => {
      const href = pageHref(rid, lang);
      if (!href) return null;
      const r = REGISTRY[rid];
      const group = r.line === "business" ? "business" : "personal";
      const tile = (group === "personal" ? PERSONAL_TILES : COMMERCIAL_TILES).find((x) => x.id === rid);
      const liveSet = tr.tProducts(group === "personal" ? "personal" : "commercial");
      let d = "";
      if (tile?.copy.source === "live") d = liveSet.find((p) => p.id === (tile.copy as { liveId: string }).liveId)?.description ?? "";
      else if (tile) d = t(`a27.tiles.${group === "personal" ? "personal" : "commercial"}.${rid}.d`);
      return { id: rid, href, t: t(`a27.items.${group}.${rid}`), d, globe: r.globe, icon: r.icon };
    })
    .filter((x): x is NonNullable<typeof x> => !!x);

  const reviewer = REVIEWER_NAME && REVIEWER_ROLE;
  const heroStyle = {
    "--pos-lg": hero.pos.lg,
    "--pos-md": hero.pos.md,
    "--pos-sm": hero.pos.sm,
    "--lp-band-md": `${hero.mdH ?? 330}px`,
    ...(hero.imgW ? { "--lp-img-w": hero.imgW } : {}),
    ...(hero.subW ? { "--lp-sub-w": hero.subW } : {}),
  } as React.CSSProperties;
  const heroCls = ["lp-hero", biz && "lp-hero--dark", hero.layout === "partial" && "lp-hero--partial", hero.side === "right" && "lp-hero--right"].filter(Boolean).join(" ");

  return (
    <InnerShell lang={lang} alternates={alternatesFor(id)} line={e.line}>
      {pageJsonLd(id, lang).map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      {/* Hero */}
      <section className={heroCls} style={heroStyle} aria-labelledby="lp-title" data-section="hero">
        <div className="lp-hero__media">
          <div className="lp-hero__img">
            <Image src={`/2027/landing/${hero.file}`} alt={copy.alt} fill priority sizes={hero.layout === "partial" ? "(min-width: 1024px) 66vw, 100vw" : "100vw"} />
          </div>
          <div className="lp-hero__veil" aria-hidden />
        </div>
        <div className="lp-hero__inner">
          <div className="lp-hero__col">
            <nav aria-label={t("lp.crumbs.label")} className="lp-crumbs">
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
            <p className="lp-eyebrow">{t(`lp.eyebrow.${biz ? "business" : "personal"}`)}</p>
            <h1 id="lp-title" className="lp-hero__h1">{copy.h1}</h1>
            <span aria-hidden className={`${arcCls} lp-hero__arc`} />
            <p className="lp-hero__sub">{copy.sub}</p>
            <div className="lp-hero__btns">
              <span className="lp-btnwrap">
                <QuoteButton target={target} className="lp-btn">{copy.cta}</QuoteButton>
                <span aria-hidden className={`${arcCls} a27-btn-arc`} />
              </span>
              <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="lp-btn-wa">
                <img src="/2027/icons/deep/whatsapp.svg" alt="" width={20} height={20} />
                {t("a27.cta.whatsapp")}
              </a>
            </div>
            <p className="lp-hero__lic">
              <img src={`/2027/icons/${biz ? "white" : "navy"}/check.svg`} alt="" width={15} height={15} />
              {t("lp.licensed")}
            </p>
          </div>
        </div>
        {biz && <Scallop edge="bottom" fill="#FFFFFF" />}
      </section>

      {/* Quick answer */}
      <section className={`lp-quick${biz ? " lp-quick--under-dark" : ""}`} aria-labelledby="quick-title" data-section="quick-answer">
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

      {/* What it protects (Auto) */}
      {copy.protects?.length ? (
        <section className="lp-protects" aria-labelledby="protects-title" data-section="protects">
          <div className="a27-container">
            <SectionHead id="protects-title" title={t("lp.protects")} />
            <ul className="lp-grid3">
              {copy.protects.map((g) => (
                <li key={g.t} className="lp-card">
                  <img src={`/2027/icons/navy/${g.icon}.svg`} alt="" width={28} height={28} />
                  <h3 className="lp-card__t">{g.t}</h3>
                  <p className="lp-card__d">{g.d}</p>
                  <ul className="lp-checks">
                    {g.items.map((it) => (
                      <li key={it}><img src="/2027/icons/navy/check.svg" alt="" width={15} height={15} />{it}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Interactive coverage explorer */}
      <Explorer
        scene={c.scene}
        title={copy.explorer.title}
        lead={copy.explorer.lead}
        legend={copy.explorer.legend}
        items={copy.explorer.items}
        labels={{ count: t("lp.count"), sources: t("lp.sources"), group: t("lp.explorerGroup") }}
      />

      {/* Real-world situations */}
      {copy.scenarios.length ? (
        <section className="lp-scen" aria-labelledby="scen-title" data-section="scenarios">
          <div className="a27-container">
            <SectionHead id="scen-title" title={t("lp.scen")} note={t("lp.scenNote")} />
            <ul className="lp-grid2">
              {copy.scenarios.map((s) => (
                <li key={s.t} className="lp-card lp-scen__card">
                  <p className="lp-scen__t">{s.t}</p>
                  <div className="lp-scen__parts">
                    <span className="lp-label">{t("lp.parts")}</span>
                    <div className="lp-chips">{s.parts.map((p) => <span key={p} className="lp-chip">{p}</span>)}</div>
                  </div>
                  <p className="lp-scen__d">{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Commonly misunderstood */}
      {copy.myths.length ? (
        <section className="lp-sec lp-myths" aria-labelledby="myth-title" data-section="misunderstood">
          <div className="a27-container">
            <SectionHead id="myth-title" title={t("lp.myths")} note={t("lp.mythsLead")} />
            <Myths items={copy.myths} labels={{ think: t("lp.think"), fact: t("lp.fact") }} />
          </div>
        </section>
      ) : null}

      {/* What it usually covers / doesn't cover */}
      <section className="lp-sec" aria-label={t("lp.covers")} data-section="covers">
        <div className="a27-container">
          <div className="lp-grid2">
            <div className="lp-covers__card">
              <h2 className="lp-h2-card">{t("lp.covers")}</h2>
              <span aria-hidden className="a27-arc lp-covers__arc" />
              <ul className="lp-list">
                {copy.explorer.items.map((it) => (
                  <li key={it.t}>
                    <span className="lp-bullet"><img src="/2027/icons/navy/check.svg" alt="" width={15} height={15} /></span>
                    <span className="lp-list__t">{it.t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lp-covers__card lp-covers__card--tint">
              <h2 className="lp-h2-card">{t("lp.notCovers")}</h2>
              <span aria-hidden className="a27-arc lp-covers__arc" />
              <ul className="lp-list">
                {copy.notCovered.map((x) => (
                  <li key={x}>
                    <span className="lp-bullet lp-bullet--no"><img src="/2027/icons/navy/x.svg" alt="" width={13} height={13} /></span>
                    <span className="lp-list__t">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="lp-src">{t("lp.independent")} {t("lp.stateNote")}</p>
        </div>
      </section>

      {/* Who needs it */}
      {copy.who.length ? (
        <section className="lp-sec" aria-labelledby="who-title" data-section="cards">
          <div className="a27-container">
            <SectionHead id="who-title" title={t("lp.who")} />
            <ul className="lp-grid3">
              {copy.who.map((w) => (
                <li key={w.t} className="lp-card lp-who">
                  <h3 className="lp-who__t">{w.t}</h3>
                  <p className="lp-card__d">{w.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* What affects the price (no prices anywhere) */}
      {copy.factors.length ? (
        <section className="lp-sec" aria-labelledby="factors-title" data-section="price-factors">
          <div className="a27-container lp-price">
            <div>
              <SectionHead id="factors-title" title={t("lp.factors")} className="lp-head--note" />
              <p className="lp-price__note">{t("lp.factorsNote")}</p>
            </div>
            <ol className="lp-price__list">
              {copy.factors.map((f, i) => (
                <li key={f}>
                  <span aria-hidden className="lp-price__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="lp-price__t">{f}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* How it works */}
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

      {/* Carriers: the live Personal or Commercial list (per-product lists declined) */}
      <CarrierMarquee mode={mode} variant="page" title={t("lp.carriers")} note={t("lp.carriersNote")} pauseLabel={t("lp.pause")} playLabel={t("lp.play")} />

      {/* FAQ */}
      {copy.faq.length ? (
        <LandingFaq title={t("lp.faq", { x: lower(copy.h1) })} items={copy.faq} sourcesLabel={t("lp.sources")} />
      ) : null}

      {/* Related coverages */}
      {related.length ? (
        <section className="lp-sec" aria-labelledby="related-title" data-section="related">
          <div className="a27-container">
            <SectionHead id="related-title" title={t("lp.related")} />
            <ul className="lp-related" style={{ "--lp-related-n": Math.max(3, Math.min(6, related.length)) } as React.CSSProperties}>
              {related.map((r) => (
                <li key={r.id}>
                  <Link href={r.href} className="lp-rel">
                    {r.globe ? (
                      <img src={`/2027/globes/${r.globe}.png`} alt="" width={124} height={124} loading="lazy" className="lp-rel__globe" />
                    ) : (
                      <span aria-hidden className="lp-rel__icon"><img src={`/2027/icons/navy/${r.icon}.svg`} alt="" width={28} height={28} /></span>
                    )}
                    <span className="lp-rel__t">{r.t}</span>
                    {r.d && <span className="lp-rel__d">{r.d}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Reviewed by: hidden until the owner fills reviewer name and role */}
      {reviewer ? (
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
                <time dateTime={c.updated}>{c.updated}</time>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="lp-cta a27-on-dark" aria-labelledby="fcta-title" data-section="final-cta">
        <Scallop edge="top" />
        <div className="a27-container lp-cta__inner">
          <h2 id="fcta-title" className="lp-cta__h2">{copy.cta}</h2>
          <span aria-hidden className="a27-arc a27-arc--orange lp-cta__arc" />
          <p className="lp-cta__lead">{t("lp.ctaLead")}</p>
          <div className="lp-cta__btns">
            <span className="lp-btnwrap">
              <QuoteButton target={target} className="lp-btn lp-btn--lg">{copy.cta}</QuoteButton>
              <span aria-hidden className="a27-arc a27-arc--orange a27-btn-arc" />
            </span>
            <a href={whatsappHref(t("a27.wa.hello"))} target="_blank" rel="noopener noreferrer" className="lp-btn-wa lp-btn-wa--lg">
              <img src="/2027/icons/deep/whatsapp.svg" alt="" width={20} height={20} />
              {t("a27.cta.whatsapp")}
            </a>
            <a href={PHONE_HREF} className="a27-btn-outline-dark a27-btn-outline-dark--soft">
              <img src="/2027/icons/white/phone.svg" alt="" width={18} height={18} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <StickyBar
        target={target}
        label={copy.cta}
        shortLabel={t("nav.getQuote")}
        waMessage={t("a27.wa.hello")}
        waLabel={t("a27.fab")}
        groupLabel={t("lp.stickyLabel")}
      />
    </InnerShell>
  );
}
