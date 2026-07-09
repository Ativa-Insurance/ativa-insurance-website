import { chromium } from "playwright";
import { mkdirSync } from "fs";

const OUT = "./screenshots";
mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile",  width: 390,  height: 844 },
];

const MODES = [
  { name: "personal",   url: "http://localhost:3000/" },
  { name: "commercial", url: "http://localhost:3000/?tab=commercial" },
];

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });

  for (const mode of MODES) {
    const page = await ctx.newPage();

    await page.goto(mode.url, { waitUntil: "networkidle", timeout: 30000 });

    // Commercial mode is set via ?tab=commercial URL param — no click needed.
    // Just wait for the mode transition animation to settle.
    if (mode.name === "commercial") {
      await page.waitForTimeout(600);
    }

    // Force-reveal all scroll-reveal sections (IntersectionObserver won't fire without scrolling)
    await page.evaluate(() => {
      document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("reveal-visible"));
      document.querySelectorAll("[data-row-reveal]").forEach(el => el.classList.add("reveal-visible"));
    });

    // Allow animations to settle
    await page.waitForTimeout(800);

    const file = `${OUT}/${mode.name}-${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`✓ ${file}`);

    await page.close();
  }

  await ctx.close();
}

await browser.close();
console.log("Done.");
