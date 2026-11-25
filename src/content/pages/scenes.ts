// Explorer scenes (schematic line art, viewBox 600×400) from the design's
// source/lib/ativa-landing.js. DSL: "r x y w h [radius]" rect, "c cx cy r"
// circle, "l x1 y1 x2 y2" line, "p <path d>". hot[i] = shapes highlighted with
// explorer item i; at[i] = [x, y] of its numbered marker.

export type SceneId =
  | "auto" | "home" | "renters" | "condo" | "flood" | "pet"
  | "commercial-auto" | "gl" | "workers-comp" | "trucking" | "bop" | "commercial-umbrella" | "eo" | "coi";

export type Scene =
  | { type: "canopy" }
  | { type: "orbit"; img: string }
  | { type: "shapes"; base: string[]; hot: string[][]; at: Array<[number, number]>; water?: number[] };

export const SCENES: Partial<Record<SceneId, Scene>> = {
  auto: { type: "canopy" },
};

/** Convert one DSL shape to an SVG path "d" */
export function toD(s: string): string {
  const a = s.split(" ");
  const k = a[0];
  const n = a.slice(1).map(Number);
  if (k === "r") {
    const [x, y, w, h, r = 0] = n;
    return r
      ? `M${x + r} ${y}H${x + w - r}a${r} ${r} 0 0 1 ${r} ${r}V${y + h - r}a${r} ${r} 0 0 1 ${-r} ${r}H${x + r}a${r} ${r} 0 0 1 ${-r} ${-r}V${y + r}a${r} ${r} 0 0 1 ${r} ${-r}Z`
      : `M${x} ${y}h${w}v${h}h${-w}Z`;
  }
  if (k === "c") {
    const [x, y, r] = n;
    return `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
  }
  if (k === "l") return `M${n[0]} ${n[1]}L${n[2]} ${n[3]}`;
  return s.slice(2);
}
