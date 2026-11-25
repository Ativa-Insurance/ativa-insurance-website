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
  home: { type: "shapes", base: ["l 20 340 580 340"], hot: [
      ["r 170 190 220 150 4", "p M150 195L280 110L410 195", "r 262 272 40 68 2", "r 325 215 44 38 3"],
      ["r 455 252 110 88 4", "p M445 256L510 216L575 256", "r 475 288 70 52 2"],
      ["r 190 296 60 26 8", "r 184 306 72 30 6"],
      ["r 50 292 64 46 6", "p M70 292V280H94V292"],
      ["c 422 290 9", "p M422 299V324M410 310H434M422 324L412 340M422 324L432 340"],
      ["r 92 176 46 46 10", "p M115 187V211M103 199H127"]
    ], at: [[280, 160], [510, 196], [220, 274], [82, 262], [422, 262], [115, 152]] },
  renters: { type: "shapes", base: ["l 30 340 570 340", "r 150 60 300 280 6", "l 150 153 450 153", "l 150 246 450 246", "l 300 60 300 340"], hot: [
      ["r 158 161 134 77 4", "r 176 208 52 22 6", "r 246 192 30 22 2"],
      ["r 158 254 134 78 4", "p M205 262q-7 11 0 16q7-5 0-16Z", "p M240 262q-7 11 0 16q7-5 0-16Z"],
      ["r 478 300 86 22 4", "r 478 278 12 62 3", "r 494 290 26 10 4", "l 564 322 564 340"],
      ["c 92 286 9", "p M92 295V322M80 306H104M92 322L82 340M92 322L102 340", "p M92 236V258M81 247H103"]
    ], at: [[225, 180], [262, 300], [522, 256], [92, 210]] },
  condo: { type: "shapes", base: ["l 20 340 580 340"], hot: [
      ["r 170 70 260 270 6", "l 158 70 442 70", "r 280 292 40 48 2", "l 170 118 430 118"],
      ["r 185 136 112 84 3", "r 195 186 36 28 2", "r 235 186 36 28 2", "l 195 180 271 180"],
      ["r 303 136 112 84 3", "r 326 188 60 22 6", "r 320 198 72 18 5"],
      ["r 185 228 230 54 3", "p M250 236q-7 11 0 16q7-5 0-16Z", "p M290 236q-7 11 0 16q7-5 0-16Z"],
      ["r 462 302 110 34 16", "p M478 320q10-8 20 0t20 0t20 0t20 0"],
      ["r 52 292 64 46 6", "p M72 292V280H96V292"]
    ], at: [[300, 94], [241, 158], [359, 160], [380, 255], [517, 278], [84, 262]] },
  flood: { type: "shapes", water: [232, 222, 290, 276, 300], base: ["l 20 340 580 340", "p M170 155L310 70L450 155"], hot: [
      ["r 190 150 240 190 4", "r 180 332 260 12 2"],
      ["r 205 232 28 38 3", "p M221 239l-7 13h9l-7 13"],
      ["r 462 290 72 50 4", "c 498 315 16", "l 498 299 498 331", "l 482 315 514 315"],
      ["r 250 282 46 56 4", "c 273 314 13"],
      ["r 336 300 70 24 8", "r 330 310 82 28 6"]
    ], at: [[310, 122], [219, 208], [498, 266], [273, 258], [371, 276]] },
  pet: { type: "orbit", img: "/2027/globes/pet.png" },
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
