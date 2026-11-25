"use client";

// Interactive coverage explorer (site-v2 README 5.2): an SVG scene, numbered
// markers, a chip row and one detail panel. Selecting a part of the drawing, a
// marker or a chip selects the same item; one item is always selected (the
// first on load). Chips are real buttons (keyboard and screen readers); the
// detail panel is aria-live. Works without hover on phones.

import { useState } from "react";
import { SCENES, toD, type SceneId } from "@/content/pages/scenes";
import type { ExplorerItem } from "@/content/pages/types";

interface ExplorerProps {
  scene: SceneId;
  title: string;
  lead: string;
  legend: string;
  items: ExplorerItem[];
  labels: { count: string; sources: string; group: string };
}

const HOT = (on: boolean) =>
  on ? { stroke: "#FF9900", op: 1, sw: 3, fill: "rgba(255,153,0,0.18)" } : { stroke: "#B6DFED", op: 0.65, sw: 2, fill: "rgba(182,223,237,0.05)" };
const BASE = { stroke: "#8FBFD0", op: 0.45, sw: 2, fill: "none" };

export default function Explorer({ scene, title, lead, legend, items, labels }: ExplorerProps) {
  const [sel, setSel] = useState(0);
  const sc = SCENES[scene];
  const cur = items[sel];

  const paths: Array<{ d: string; tf?: string; stroke: string; op: number; sw: number; fill: string; i?: number; arc?: boolean }> = [];
  const markers: Array<{ x: number; y: number; i: number }> = [];
  if (sc?.type === "canopy") {
    items.forEach((_, i) => {
      const w = 540 - i * 64;
      const s = w / 1000;
      paths.push({ d: "M0 400C47 155 252 0 502 0S954 155 1000 400", tf: `translate(${300 - w / 2} ${360 - 400 * s * 0.92}) scale(${s} ${s * 0.92})`, stroke: i === sel ? "#FFFFFF" : "#B6DFED", op: i === sel ? 1 : 0.32, sw: 16, fill: "none", i, arc: true });
    });
    paths.push({ d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9 17h6M15 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0", tf: "translate(252 282) scale(4)", stroke: "#EEF7FA", op: 1, sw: 2, fill: "none" });
    paths.push({ d: "M30 372Q300 346 570 372Q300 360 30 372Z", stroke: "none", op: 1, sw: 0, fill: "rgba(182,223,237,0.85)" });
  } else if (sc?.type === "orbit") {
    const pts = items.map((_, i) => {
      const a = ((-90 + (i * 360) / items.length) * Math.PI) / 180;
      return [Math.round(300 + 222 * Math.cos(a)), Math.round(200 + 152 * Math.sin(a)), Math.round(300 + 112 * Math.cos(a)), Math.round(200 + 112 * Math.sin(a))];
    });
    paths.push({ d: toD("c 300 200 104"), ...BASE });
    const order = items.map((_, i) => i).filter((i) => i !== sel).concat(items.length ? [sel] : []);
    order.forEach((i) => {
      const p = pts[i];
      paths.push({ d: toD(`l ${p[2]} ${p[3]} ${p[0]} ${p[1]}`), ...HOT(i === sel), fill: "none", i });
      paths.push({ d: toD(`c ${p[0]} ${p[1]} 24`), ...HOT(i === sel), i });
    });
    pts.forEach((p, i) => markers.push({ x: p[0], y: p[1], i }));
  } else if (sc?.type === "shapes") {
    sc.base.forEach((s) => paths.push({ d: toD(s), ...BASE }));
    const order = items.map((_, i) => i).filter((i) => i !== sel).concat(items.length ? [sel] : []);
    order.forEach((i) => (sc.hot[i] || []).forEach((s) => paths.push({ d: toD(s), ...HOT(i === sel), ...(s[0] === "l" ? { fill: "none" } : {}), i })));
    sc.at.forEach((p, i) => { if (i < items.length) markers.push({ x: p[0], y: p[1], i }); });
  }
  const water = sc?.type === "shapes" && sc.water ? sc.water[sel] : null;

  return (
    <section className="lp-x a27-on-dark" id="explore" aria-labelledby="x-title" data-section="explorer">
      <svg aria-hidden focusable="false" viewBox="0 0 1000 100" preserveAspectRatio="none" className="a27-scallop a27-scallop--top">
        <path fill="#002941" d="M0 100Q110 20 245 48Q500-48 755 48Q890 20 1000 100Z" />
      </svg>
      <div className="a27-container">
        <div className="lp-x__head">
          <h2 id="x-title" className="a27-h2">{title}</h2>
          <p className="lp-x__lead">{lead}</p>
        </div>
        <div className="lp-x__body">
          <div className="lp-x__panel">
            <div className="lp-x__stage">
              <svg viewBox="0 0 600 400" role="img" aria-label={title} className="lp-x__svg">
                {paths.map((p, k) => (
                  <path
                    key={k}
                    d={p.d}
                    transform={p.tf}
                    fill={p.fill}
                    stroke={p.stroke}
                    strokeOpacity={p.op}
                    strokeWidth={p.sw}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    data-hot={p.i !== undefined ? "" : undefined}
                    data-arc-layer={p.arc ? "" : undefined}
                    onClick={p.i !== undefined ? () => setSel(p.i as number) : undefined}
                  />
                ))}
                {water !== null && (
                  <svg x="0" y="0" width="600" height="340">
                    <rect x="0" y="0" width="600" height="400" fill="#B6DFED" fillOpacity="0.24" className="lp-x__water" style={{ transform: `translateY(${water}px)` }} />
                  </svg>
                )}
              </svg>
              {markers.map((m) => (
                <button
                  key={m.i}
                  type="button"
                  tabIndex={-1}
                  aria-hidden
                  className="lp-x__marker"
                  data-sel={m.i === sel ? "true" : "false"}
                  style={{ left: `${m.x / 6}%`, top: `${m.y / 4}%` }}
                  onClick={() => setSel(m.i)}
                >
                  {m.i + 1}
                </button>
              ))}
              {sc?.type === "orbit" && !sc.icon && <img src={sc.img} alt="" className="lp-x__orbit" loading="lazy" />}
              {sc?.type === "orbit" && sc.icon && <span aria-hidden className="lp-x__orbit lp-x__orbit--icon"><img src={sc.img} alt="" /></span>}
            </div>
            <div role="group" aria-label={labels.group} className="lp-x__chips">
              {items.map((it, i) => (
                <button key={it.t} type="button" aria-pressed={i === sel} aria-controls="x-detail" className="lp-x__chip" onClick={() => setSel(i)}>
                  <span aria-hidden className="lp-x__n">{i + 1}</span>
                  {it.t}
                </button>
              ))}
            </div>
          </div>
          <div id="x-detail" aria-live="polite" className="lp-x__detail">
            <p className="lp-x__count">{labels.count.replace("{n}", String(sel + 1)).replace("{total}", String(items.length))}</p>
            <h3 className="lp-x__h3">{cur?.t}{cur?.term && <span className="lp-x__term" lang="en"> ({cur.term})</span>}</h3>
            <p className="lp-x__d">{cur?.d}</p>
            {cur?.rows.length ? (
              <dl className="lp-x__rows">
                {cur.rows.map((r) => (
                  <div key={r.k}><dt>{r.k}</dt><dd>{r.v}</dd></div>
                ))}
              </dl>
            ) : null}
            {cur?.sources?.length ? (
              <p className="lp-x__src">
                {labels.sources}:{" "}
                {cur.sources.map((s, k) => (
                  <span key={s.href}>{k > 0 && " · "}<a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></span>
                ))}
              </p>
            ) : null}
            <p className="lp-x__legend">{legend}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
