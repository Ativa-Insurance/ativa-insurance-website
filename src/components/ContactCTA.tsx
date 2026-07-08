"use client";

import type { Mode } from "@/types";

interface Props {
  mode: Mode;
  onGetQuote: () => void;
}

export default function ContactCTA({ mode, onGetQuote }: Props) {
  const isPersonal = mode === "personal";

  const bg      = isPersonal ? "#1B3A6B" : "#0B1F33";
  const gridLine = isPersonal
    ? "rgba(255,255,255,0.04)"
    : "rgba(245,166,35,0.05)";

  return (
    <section
      style={{
        backgroundColor: bg,
        backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
        backgroundSize:  "48px 48px",
        padding:         "88px 24px",
        position:        "relative",
        overflow:        "hidden",
        textAlign:       "center",
      }}
    >
      {/* Glow blob */}
      <div
        aria-hidden
        style={{
          position:        "absolute",
          top:             "50%",
          left:            "50%",
          transform:       "translate(-50%, -50%)",
          width:           "600px",
          height:          "600px",
          borderRadius:    "50%",
          background:      isPersonal
            ? "radial-gradient(circle, rgba(30,77,140,0.6) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
          pointerEvents:   "none",
        }}
      />

      <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontSize:      "11px",
            letterSpacing: "2.5px",
            fontWeight:    700,
            textTransform: "uppercase",
            color:         "#F5A623",
            marginBottom:  "14px",
          }}
        >
          Get Started Today
        </p>

        {/* Headline */}
        <h2
          style={{
            fontSize:      "clamp(2rem, 4vw, 3rem)",
            fontWeight:    900,
            color:         "#FFFFFF",
            margin:        "0 0 16px",
            lineHeight:    1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {isPersonal
            ? "Get Your Best Rate — In Minutes"
            : "Protect Your Business — Fast"}
        </h2>

        {/* Sub */}
        <p
          style={{
            fontSize:     "17px",
            color:        "rgba(255,255,255,0.70)",
            margin:       "0 0 36px",
            lineHeight:   1.6,
          }}
        >
          {isPersonal
            ? "No calls required. No spam. Just a fast, free quote from a licensed agent."
            : "Same-day certificates. No pressure. Licensed commercial specialists."}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={onGetQuote}
            style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             "8px",
              padding:         "16px 32px",
              borderRadius:    "12px",
              backgroundColor: "#F5A623",
              color:           "#0B1F33",
              fontSize:        "16px",
              fontWeight:      800,
              border:          "none",
              cursor:          "pointer",
              transition:      "opacity 200ms ease, transform 200ms ease",
              letterSpacing:   "-0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity   = "0.92";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity   = "1";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            {isPersonal ? "Get My Free Quote →" : "Get Business Coverage →"}
          </button>

          <a
            href="tel:5619468261"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              fontSize:       "15px",
              fontWeight:     600,
              color:          "rgba(255,255,255,0.75)",
              textDecoration: "none",
              transition:     "color 200ms ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)"; }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
            </svg>
            561-946-8261
          </a>
        </div>

        {/* Trust micro-copy */}
        <p
          style={{
            marginTop:  "24px",
            fontSize:   "13px",
            color:      "rgba(255,255,255,0.40)",
            letterSpacing: "0.02em",
          }}
        >
          Free · No obligation · Licensed in CT, FL, GA, NC, SC, NJ, TN, MD, MA, OH, PA
        </p>
      </div>
    </section>
  );
}
