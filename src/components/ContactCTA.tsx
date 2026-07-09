"use client";

import type { Mode } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  mode:           Mode;
  onGetQuote:     () => void;
  onSwitchMode?:  () => void;
}

export default function ContactCTA({ mode, onGetQuote, onSwitchMode }: Props) {
  const { t } = useLanguage();
  const isPersonal = mode === "personal";

  if (isPersonal) {
    return (
      <section
        style={{
          backgroundColor: "#0B1F33",
          padding:         "0",
          position:        "relative",
          overflow:        "hidden",
        }}
      >
        {/* Building silhouette illustration */}
        <svg
          aria-hidden
          viewBox="0 0 400 160"
          style={{
            position:      "absolute",
            right:         0,
            bottom:        0,
            height:        "100%",
            width:         "auto",
            opacity:       0.07,
            pointerEvents: "none",
          }}
        >
          {/* Buildings */}
          <rect x="20"  y="60"  width="40" height="100" fill="white"/>
          <rect x="30"  y="40"  width="20" height="20"  fill="white"/>
          <rect x="70"  y="30"  width="50" height="130" fill="white"/>
          <rect x="80"  y="10"  width="30" height="22"  fill="white"/>
          <rect x="130" y="50"  width="35" height="110" fill="white"/>
          <rect x="175" y="20"  width="60" height="140" fill="white"/>
          <rect x="185" y="0"   width="40" height="22"  fill="white"/>
          <rect x="245" y="40"  width="45" height="120" fill="white"/>
          <rect x="300" y="55"  width="30" height="105" fill="white"/>
          <rect x="340" y="35"  width="50" height="125" fill="white"/>
          {/* Windows */}
          <rect x="35"  y="70"  width="8"  height="8"   fill="#0B1F33" opacity="0.5"/>
          <rect x="50"  y="70"  width="8"  height="8"   fill="#0B1F33" opacity="0.5"/>
          <rect x="80"  y="40"  width="8"  height="8"   fill="#0B1F33" opacity="0.5"/>
          <rect x="100" y="40"  width="8"  height="8"   fill="#0B1F33" opacity="0.5"/>
          <rect x="182" y="30"  width="10" height="10"  fill="#0B1F33" opacity="0.5"/>
          <rect x="205" y="30"  width="10" height="10"  fill="#0B1F33" opacity="0.5"/>
        </svg>

        {/* Truck silhouette */}
        <svg
          aria-hidden
          viewBox="0 0 200 80"
          style={{
            position:      "absolute",
            left:          "28%",
            bottom:        "0",
            height:        "60%",
            width:         "auto",
            opacity:       0.06,
            pointerEvents: "none",
          }}
        >
          <rect x="10"  y="20" width="120" height="50" rx="4" fill="white"/>
          <rect x="130" y="30" width="55"  height="40" rx="4" fill="white"/>
          <circle cx="35"  cy="72" r="12" fill="white"/>
          <circle cx="115" cy="72" r="12" fill="white"/>
          <circle cx="165" cy="72" r="12" fill="white"/>
        </svg>

        <div
          style={{
            maxWidth: "1120px",
            margin:   "0 auto",
            padding:  "40px 24px",
            display:  "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          <div>
            <p
              style={{
                fontSize:      "10px",
                letterSpacing: "2.5px",
                fontWeight:    700,
                textTransform: "uppercase",
                color:         "#F5A623",
                marginBottom:  "6px",
              }}
            >
              {t("switchBanner.eyebrow")}
            </p>
            <p
              style={{
                fontSize:   "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 900,
                color:      "#FFFFFF",
                margin:     "0 0 6px",
                lineHeight: 1.1,
              }}
            >
              {t("switchBanner.headline")}
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.4 }}>
              {t("switchBanner.sub")}
            </p>
          </div>

          <button
            type="button"
            onClick={onSwitchMode ?? onGetQuote}
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "8px",
              padding:         "14px 28px",
              borderRadius:    "10px",
              backgroundColor: "#F5A623",
              color:           "#0B1F33",
              fontSize:        "15px",
              fontWeight:      800,
              border:          "none",
              cursor:          "pointer",
              whiteSpace:      "nowrap",
              letterSpacing:   "-0.01em",
              flexShrink:      0,
            }}
          >
            {t("switchBanner.cta")} →
          </button>
        </div>
      </section>
    );
  }

  // Commercial mode — slim conversion bar
  return (
    <section
      style={{
        backgroundColor: "#0B1F33",
        borderTop:       "1px solid rgba(245,166,35,0.2)",
        padding:         "40px 24px",
        textAlign:       "center",
        position:        "relative",
        overflow:        "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position:      "absolute",
          top:           "50%",
          left:          "50%",
          transform:     "translate(-50%, -50%)",
          width:         "500px",
          height:        "500px",
          borderRadius:  "50%",
          background:    "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
        <p
          style={{
            fontSize:      "11px",
            letterSpacing: "2.5px",
            fontWeight:    700,
            textTransform: "uppercase",
            color:         "#F5A623",
            marginBottom:  "12px",
          }}
        >
          {t("contactCta.eyebrow")}
        </p>
        <h2
          style={{
            fontSize:      "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight:    900,
            color:         "#FFFFFF",
            margin:        "0 0 14px",
            lineHeight:    1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {t("contactCta.commercialHeadline")}
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", margin: "0 0 28px" }}>
          {t("contactCta.commercialSub")}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={onGetQuote}
            style={{
              padding:         "14px 28px",
              borderRadius:    "10px",
              backgroundColor: "#F5A623",
              color:           "#0B1F33",
              fontSize:        "15px",
              fontWeight:      800,
              border:          "none",
              cursor:          "pointer",
            }}
          >
            {t("contactCta.commercialCta")}
          </button>
          <a href="tel:5619468261" style={{ color: "rgba(255,255,255,0.70)", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            561-946-8261
          </a>
        </div>
      </div>
    </section>
  );
}
