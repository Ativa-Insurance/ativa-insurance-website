"use client";

import { useState } from "react";
import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

// ─── Carrier definitions ─────────────────────────────────────────────────────

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

// ─── Single carrier logo ──────────────────────────────────────────────────────

function CarrierItem({ carrier }: { carrier: Carrier }) {
  const [failed, setFailed]   = useState(false);
  const [hovered, setHovered] = useState(false);

  if (failed) {
    return (
      <span
        style={{
          display:         "inline-block",
          fontSize:        "12px",
          fontWeight:      600,
          whiteSpace:      "nowrap",
          padding:         "6px 14px",
          borderRadius:    "20px",
          border:          "1px solid #C7D7FD",
          backgroundColor: "#EEF2FF",
          color:           "#1B3A6B",
        }}
      >
        {carrier.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoSrc(carrier.file)}
      alt={carrier.name}
      height={52}
      style={{
        height:     "52px",
        width:      "auto",
        maxWidth:   "156px",
        objectFit:  "contain",
        display:    "block",
        filter:     hovered ? "grayscale(0%) opacity(1)" : "grayscale(100%) opacity(0.50)",
        transition: "filter 300ms ease",
        userSelect: "none",
        cursor:     "pointer",
      }}
      onError={() => setFailed(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      draggable={false}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CarrierMarquee({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  const isPersonal = mode === "personal";
  const carriers   = isPersonal ? PERSONAL_CARRIERS : COMMERCIAL_CARRIERS;
  const doubled    = [...carriers, ...carriers];

  // Section always white — logos need neutral bg to display correctly
  const bgColor      = "#FFFFFF";
  const headingColor = isPersonal ? "#1B3A6B" : "#0B1F33";

  return (
    <section
      style={{
        backgroundColor: bgColor,
        borderTop:       "1px solid rgba(0,0,0,0.06)",
        borderBottom:    "1px solid rgba(0,0,0,0.06)",
        padding:         "56px 0 48px",
        overflow:        "hidden",
      }}
    >
      {/* ── Heading ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: "36px" }}>
        <p
          style={{
            fontSize:      "11px",
            letterSpacing: "2.5px",
            fontWeight:    700,
            textTransform: "uppercase",
            color:         "#F5A623",
            marginBottom:  "10px",
          }}
        >
          Our Carrier Partners
        </p>
        <h2
          style={{
            fontSize:      "clamp(1.6rem, 2.5vw, 2rem)",
            fontWeight:    900,
            color:         headingColor,
            margin:        "0 0 8px",
            lineHeight:    1.1,
            letterSpacing: "-0.025em",
          }}
        >
          {t("carriers.heading")}
        </h2>
        <p
          style={{
            fontSize:  "15px",
            color:     "#64748B",
            margin:    0,
            lineHeight: 1.5,
          }}
        >
          {t("carriers.sub")}
        </p>
      </div>

      {/* ── Scrolling track ── */}
      <div style={{ position: "relative" }}>
        {/* Left fade */}
        <div
          style={{
            position:      "absolute",
            left:          0,
            top:           0,
            bottom:        0,
            width:         "96px",
            zIndex:        10,
            pointerEvents: "none",
            background:    `linear-gradient(to right, ${bgColor}, transparent)`,
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position:      "absolute",
            right:         0,
            top:           0,
            bottom:        0,
            width:         "96px",
            zIndex:        10,
            pointerEvents: "none",
            background:    `linear-gradient(to left, ${bgColor}, transparent)`,
          }}
        />

        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="flex items-center shrink-0 animate-marquee">
            {doubled.map((carrier, i) => (
              <div
                key={`${carrier.file}-${i}`}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  flexShrink:     0,
                  margin:         "0 32px",
                  height:         "72px",
                }}
              >
                <CarrierItem carrier={carrier} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
