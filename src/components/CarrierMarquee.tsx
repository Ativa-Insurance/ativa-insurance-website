"use client";

// 2027 carrier strip: one row of logos in a white panel, scrolling right to
// left (70s loop) with a Pause/Play control (WCAG 2.2.2). The list is rendered
// twice for a seamless loop; the copy is hidden from screen readers.
// Reduced motion: no scrolling, a centred wrapping grid without the copy.
// Carrier lists are the live site's lists.

import { useState } from "react";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface Carrier {
  name: string;
  file: string;
}

const PERSONAL_CARRIERS: Carrier[] = [
  { name: "Geico",             file: "Geico.png" },
  { name: "Progressive",       file: "Progressive.png" },
  { name: "Bristol West",      file: "Bristol West.png" },
  { name: "Assurance America", file: "AssuranceAmerica.png" },
  { name: "Citizens",          file: "Citizens.png" },
  { name: "Cabrillo Coastal",  file: "Cabrillo Coastal.png" },
  { name: "Foremost",          file: "Foremost.png" },
  { name: "Green Shield",      file: "Green Shield.png" },
  { name: "RLI",               file: "RLI.png" },
  { name: "VacantExpress",     file: "VacantExpress.png" },
  { name: "Burns & Wilcox",    file: "Burns & Wilcox.png" },
  { name: "Wright Flood",      file: "Wright Flood.png" },
  { name: "Unique Insurance",  file: "Unique.png" },
  { name: "Tend",              file: "tend.png" },
  { name: "Sterling",          file: "sterling.png" },
  { name: "Rainwalk",          file: "RAINWALK.png" },
  { name: "Propeller",         file: "PROPELLER.png" },
  { name: "Kanguro",           file: "Kanguro.png" },
  { name: "ePremium",          file: "epremium.png" },
  { name: "Neptune",           file: "neptune.png" },
  { name: "Collectibles",      file: "COLLECTIBLES.png" },
  { name: "Ahoy",              file: "Ahoy.png" },
  { name: "AonEdge",           file: "AONEDGE.png" },
  { name: "Annex Risk",        file: "Annex Risk.png" },
];

const COMMERCIAL_CARRIERS: Carrier[] = [
  { name: "Geico",           file: "Geico.png" },
  { name: "Bristol West",    file: "Bristol West.png" },
  { name: "Forge",           file: "FORGE.png" },
  { name: "Hiscox",          file: "HISCOX.png" },
  { name: "RLI",             file: "RLI.png" },
  { name: "Normandy",        file: "NORMANDY.png" },
  { name: "Burns & Wilcox",  file: "Burns & Wilcox.png" },
  { name: "Great American",  file: "Great American.png" },
  { name: "Three",           file: "Three.png" },
  { name: "Berxi",           file: "BERXI.png" },
  { name: "First Insurance", file: "FIRST.png" },
  { name: "biBerk",          file: "Biberk.png" },
  { name: "AmTrust",         file: "AMTRUST.png" },
  { name: "Chubb",           file: "CHUBB.png" },
  { name: "Green Shield",    file: "Green Shield.png" },
  { name: "Next",            file: "NEXT.png" },
  { name: "Progressive",     file: "Progressive.png" },
  { name: "Attune",          file: "ATTUNE.png" },
  { name: "Blitz",           file: "BLITZ.png" },
  { name: "Cover Whale",     file: "COVER WHALE.png" },
  { name: "Propeller",       file: "PROPELLER.png" },
  { name: "BTIS",            file: "btis.png" },
];

function logoSrc(file: string): string {
  return `/carriers/${file.replace(/ /g, "%20")}`;
}

export default function CarrierMarquee({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const carriers = mode === "personal" ? PERSONAL_CARRIERS : COMMERCIAL_CARRIERS;

  return (
    <section className="a27-carriers" aria-labelledby="carriers-title" data-section="carriers">
      <div className="a27-intro">
        <h2 id="carriers-title" className="a27-h2">{t("carriers.heading")}</h2>
        <span aria-hidden className="a27-arc a27-h2-arc" />
        <p className="a27-lead">{t("carriers.sub")}</p>
      </div>
      <div className="a27-carriers__wrap">
        <div className="a27-carriers__panel">
          <div className="a27-carriers__mask">
            <div className="a27-carriers__track" data-marquee="" data-paused={paused ? "true" : "false"}>
              {carriers.map((c) => (
                <img key={c.name} src={logoSrc(c.file)} alt={c.name} loading="lazy" className="a27-carriers__logo" />
              ))}
              {carriers.map((c) => (
                <img key={`dup-${c.name}`} src={logoSrc(c.file)} alt="" aria-hidden="true" loading="lazy" className="a27-carriers__logo a27-carriers__dup" />
              ))}
            </div>
          </div>
        </div>
        <div className="a27-carriers__foot">
          <p className="a27-carriers__note">{t("a27.carriers.note")}</p>
          <button type="button" className="a27-carriers__pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
            <img src={`/2027/icons/navy/${paused ? "play" : "pause"}.svg`} alt="" width={13} height={13} />
            {paused ? t("a27.carriers.play") : t("a27.carriers.pause")}
          </button>
        </div>
      </div>
    </section>
  );
}
