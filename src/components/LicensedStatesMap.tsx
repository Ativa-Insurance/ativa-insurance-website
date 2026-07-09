"use client";

import { useEffect, useRef, useState } from "react";

const LICENSED: Record<string, string> = {
  fl: "Florida",
  ga: "Georgia",
  sc: "South Carolina",
  nc: "North Carolina",
  tn: "Tennessee",
  oh: "Ohio",
  pa: "Pennsylvania",
  md: "Maryland",
  nj: "New Jersey",
  ct: "Connecticut",
  ma: "Massachusetts",
};

const MAP_STYLES = `
  .ativa-map .state        { fill: #E2E8F0; stroke: #FFFFFF; stroke-width: 1; }
  .ativa-map .borders      { stroke: #FFFFFF; stroke-width: 1; }
  .ativa-map .separator1   { stroke: #CBD5E1; stroke-width: 2; }
  .ativa-map .dccircle     { display: none; }
  .ativa-map .fl,
  .ativa-map .ga,
  .ativa-map .sc,
  .ativa-map .nc,
  .ativa-map .tn,
  .ativa-map .oh,
  .ativa-map .pa,
  .ativa-map .md,
  .ativa-map .nj,
  .ativa-map .ct,
  .ativa-map .ma           { fill: #1B3A6B; }
  @media (hover: hover) {
    .ativa-map [data-licensed] { cursor: pointer; }
  }
`;

interface Tooltip {
  name: string;
  x: number;
  y: number;
}

export default function LicensedStatesMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgHtml, setSvgHtml] = useState("");
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  useEffect(() => {
    fetch("/us-states-map.svg")
      .then((r) => r.text())
      .then(setSvgHtml)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!svgHtml || !containerRef.current) return;
    const container = containerRef.current;
    const svg = container.querySelector("svg");
    if (!svg) return;

    svg.classList.add("ativa-map");
    svg.setAttribute("viewBox", "0 0 959 490");
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.style.width = "100%";
    svg.style.height = "auto";
    svg.style.display = "block";

    // Replace the embedded <style> with our own
    const embedded = svg.querySelector("style");
    if (embedded) embedded.remove();

    const styleEl = document.createElementNS("http://www.w3.org/2000/svg", "style");
    styleEl.textContent = MAP_STYLES;
    svg.insertBefore(styleEl, svg.firstChild);

    // Wire up hover on licensed states only
    const handlers: Array<{ el: Element; enter: () => void; leave: () => void }> = [];

    Object.entries(LICENSED).forEach(([code, name]) => {
      svg.querySelectorAll(`.${code}`).forEach((path) => {
        (path as SVGElement).setAttribute("data-licensed", "true");

        const enter = (e: Event) => {
          const me = e as MouseEvent;
          const rect = container.getBoundingClientRect();
          (path as SVGElement).style.fill = "#F5A623";
          setTooltip({ name, x: me.clientX - rect.left, y: me.clientY - rect.top });
        };

        const leave = () => {
          (path as SVGElement).style.fill = "#1B3A6B";
          setTooltip(null);
        };

        path.addEventListener("mouseenter", enter);
        path.addEventListener("mouseleave", leave);
        handlers.push({ el: path, enter, leave });
      });
    });

    return () => {
      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [svgHtml]);

  return (
    <div ref={containerRef} style={{ position: "relative", maxWidth: "680px", margin: "0 auto" }}>
      <style>{MAP_STYLES}</style>
      <div dangerouslySetInnerHTML={{ __html: svgHtml }} />
      {tooltip && (
        <div
          style={{
            position:        "absolute",
            left:            tooltip.x + 12,
            top:             tooltip.y - 38,
            pointerEvents:   "none",
            backgroundColor: "#0B1F33",
            color:           "#FFFFFF",
            fontSize:        "12px",
            fontWeight:      700,
            padding:         "5px 12px",
            borderRadius:    "6px",
            whiteSpace:      "nowrap",
            boxShadow:       "0 2px 10px rgba(0,0,0,0.25)",
            zIndex:          10,
          }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}
