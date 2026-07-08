"use client";

import { useLanguage } from "@/context/LanguageContext";

type Mode = "personal" | "commercial";

function Sep({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      style={{ width: "1px", height: "16px", backgroundColor: color, flexShrink: 0, display: "block" }}
    />
  );
}

export default function TrustBar({ mode }: { mode: Mode }) {
  const { t } = useLanguage();
  const isPersonal = mode === "personal";

  const bg      = isPersonal ? "#1B3A6B" : "#0B1F33";
  const textClr = "rgba(255,255,255,0.88)";
  const starClr = isPersonal ? "#FCD34D" : "#F5A623";
  const sepClr  = "rgba(255,255,255,0.16)";

  const itemStyle: React.CSSProperties = {
    display:    "flex",
    alignItems: "center",
    gap:        "5px",
    padding:    "0 18px",
    whiteSpace: "nowrap",
    fontSize:   "12px",
    fontWeight: 500,
    color:      textClr,
    lineHeight: 1,
  };

  return (
    <div
      role="complementary"
      aria-label="Trust credentials"
      style={{ backgroundColor: bg, borderBottom: `1px solid ${sepClr}` }}
    >
      <style>{`
        @keyframes tb-star-sweep {
          0%,100% { opacity:1; filter:brightness(1); }
          45%      { opacity:0.65; filter:brightness(0.75); }
          55%      { opacity:1; filter:brightness(1.3); }
        }
        .tb-stars { animation: tb-star-sweep 4s ease-in-out infinite; }
        .tb-google { text-decoration:none; transition:opacity 0.15s; }
        .tb-google:hover { opacity:0.75; }
        @media(prefers-reduced-motion:reduce){.tb-stars{animation:none;}}
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "42px" }}>

          {/* ── Google Rating ─────────────────────────────────────────────── */}
          <a
            href="https://maps.app.goo.gl/Zd8AptfZe46v9ntj8"
            target="_blank"
            rel="noopener noreferrer"
            className="tb-google"
            style={itemStyle}
          >
            <span className="tb-stars" style={{ color: starClr, fontSize: "13px", letterSpacing: "-0.5px" }}>
              ★★★★★
            </span>
            <span>{t("trust.reviewsFull")}</span>
          </a>

          <Sep color={sepClr} />

          {/* ── Licensed States ────────────────────────────────────────────── */}
          <span style={itemStyle}>{t("trust.states")}</span>

          {/* ── Same-Day + Carriers — hidden on mobile ─────────────────────── */}
          <span className="hidden sm:contents">
            <Sep color={sepClr} />
            <span style={itemStyle}>{t("trust.sameDayCoverage")}</span>

            <Sep color={sepClr} />
            <span style={itemStyle}>
              <span style={{ color: starClr }}>🛡</span>
              {t("trust.carriers")}
            </span>
          </span>

        </div>
      </div>
    </div>
  );
}
