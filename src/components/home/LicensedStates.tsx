"use client";

// 2027 licensed-states section: heading, lead, 10 state chips and the map
// (existing LicensedStatesMap geometry, cropped to the eastern US with CSS).
// Hovering, focusing or tapping a state or a chip selects it; the two stay in
// sync. With a state selected: "Licensed in <state>" + a quote button that
// opens the EXISTING pop-up with no product preselected.

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LicensedStatesMap from "@/components/home/LicensedStatesMap";
import { LICENSED_STATES } from "@/components/home/catalog";

export default function LicensedStates({ onGetQuote }: { onGetQuote: () => void }) {
  const { t } = useLanguage();
  const [st, setSt] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef(onGetQuote);
  quoteRef.current = onGetQuote;

  const name = (code: string) => t(`a27.states.names.${code}`);

  // Make the licensed state shapes focusable and selectable (event delegation;
  // the SVG markup itself is not changed).
  useEffect(() => {
    const host = mapRef.current;
    if (!host) return;
    const codes = LICENSED_STATES.map((c) => c.toLowerCase());
    const paths = Array.from(host.querySelectorAll<SVGPathElement>("path")).filter((p) =>
      codes.includes((p.getAttribute("class") || "").split(" ")[0])
    );
    const cleanups: Array<() => void> = [];
    paths.forEach((p) => {
      const code = (p.getAttribute("class") || "").split(" ")[0].toUpperCase();
      p.setAttribute("tabindex", "0");
      p.setAttribute("role", "button");
      p.setAttribute("aria-label", name(code));
      const pick = () => setSt(code);
      const key = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); quoteRef.current(); }
      };
      p.addEventListener("mouseenter", pick);
      p.addEventListener("focus", pick);
      p.addEventListener("click", pick);
      p.addEventListener("keydown", key);
      cleanups.push(() => {
        p.removeEventListener("mouseenter", pick);
        p.removeEventListener("focus", pick);
        p.removeEventListener("click", pick);
        p.removeEventListener("keydown", key);
      });
    });
    return () => cleanups.forEach((fn) => fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  // Paint the selected state
  useEffect(() => {
    const host = mapRef.current;
    if (!host) return;
    host.querySelectorAll("path.is-selected").forEach((p) => p.classList.remove("is-selected"));
    if (st) host.querySelector(`path.${st.toLowerCase()}`)?.classList.add("is-selected");
  }, [st]);

  return (
    <section className="a27-section" aria-labelledby="states-title" data-section="map">
      <div className="a27-container">
        <div className="a27-split a27-map">
          <div className="a27-map__text">
            <h2 id="states-title" className="a27-map__title">{t("states.heading")}</h2>
            <p className="a27-lead a27-map__lead">{t("a27.states.lead")}</p>
            <ul className="a27-map__chips">
              {LICENSED_STATES.map((code) => (
                <li key={code}>
                  <button
                    type="button"
                    className="a27-chip"
                    aria-pressed={st === code}
                    onClick={() => setSt(code)}
                    onMouseEnter={() => setSt(code)}
                    onFocus={() => setSt(code)}
                  >
                    {code} · {name(code)}
                  </button>
                </li>
              ))}
            </ul>
            <p className="a27-map__note">{t("a27.states.outside")}</p>
          </div>
          <div className="a27-map__side">
            <div ref={mapRef} role="group" aria-label={t("a27.states.mapAlt")} className="a27-map__crop">
              <LicensedStatesMap showLegend={false} />
            </div>
            <div aria-live="polite" className="a27-map__status">
              {st ? (
                <>
                  <span className="a27-map__lic">{t("a27.states.licensedIn", { state: name(st) })}</span>
                  <button type="button" className="a27-btn a27-btn--sm" onClick={onGetQuote}>{t("nav.getQuote")}</button>
                </>
              ) : (
                <span className="a27-map__hint">{t("a27.states.hint")}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
