import { access, copyFile, mkdir, rm } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { chromium } from "playwright";
import { captureDefaults, marketingAssets } from "./marketing-assets.config.mjs";

const root = process.cwd();
const ffmpegCandidates = [
  process.env.FFMPEG_PATH,
  "ffmpeg",
  process.env.LOCALAPPDATA
    ? path.join(
        process.env.LOCALAPPDATA,
        "Microsoft",
        "WinGet",
        "Packages",
        "Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe",
        "ffmpeg-8.1.1-full_build",
        "bin",
        "ffmpeg.exe"
      )
    : "",
].filter(Boolean);
let ffmpegBin = ffmpegCandidates[0];

function getArg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : "";
}

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: options.stdio || "pipe" });
    let stderr = "";
    child.stderr?.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve({ stderr });
      else reject(new Error(`${command} termino con codigo ${code}\n${stderr}`));
    });
  });
}

async function ensureFfmpeg() {
  const errors = [];
  for (const candidate of ffmpegCandidates) {
    try {
      await run(candidate, ["-version"]);
      ffmpegBin = candidate;
      return;
    } catch (error) {
      errors.push(`${candidate}: ${error.message}`);
    }
  }
  throw new Error(
    [
      "FFmpeg no esta disponible.",
      "Instalalo y asegurate de que `ffmpeg` este en el PATH, o define FFMPEG_PATH con la ruta completa al ejecutable.",
      "Windows recomendado: winget install Gyan.FFmpeg",
      `Detalle: ${errors.join("\n")}`,
    ].join("\n")
  );
}

async function ensureAppRunning(baseUrl) {
  try {
    const response = await fetch(baseUrl, { method: "GET" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch (error) {
    throw new Error(
      [
        `No pude abrir la app en ${baseUrl}.`,
        "Levantala con `npm run dev` o usa MARKETING_BASE_URL / --url con una URL activa.",
        `Detalle: ${error.message}`,
      ].join("\n")
    );
  }
}

function withCaptureParam(url) {
  url.searchParams.set("capture", "1");
  return url;
}

function resolveCaptureUrl(asset, baseUrl) {
  const rawUrl = asset.url || `/demo/${asset.slug}`;
  const url = rawUrl.startsWith("http") ? new URL(rawUrl) : new URL(rawUrl, baseUrl);
  const route = `${url.pathname}${url.search}${url.hash ? url.hash.replace(/^#/, "") : ""}`;

  if (url.hash) {
    return withCaptureParam(url).toString();
  }

  const hashUrl = new URL(baseUrl);
  hashUrl.pathname = "/";
  hashUrl.search = "";
  hashUrl.hash = route.startsWith("/") ? route : `/${route}`;
  return withCaptureParam(hashUrl).toString();
}

function selectAssets() {
  const cliUrl = getArg("url");
  const cliSlug = getArg("slug") || getArg("name");
  if (cliUrl) {
    const slug = cliSlug || "captura";
    return [
      {
        slug,
        type: "custom",
        url: cliUrl,
        title: slug,
        outputDir: `public/marketing/${slug}`,
        screenshots: marketingAssets[0].screenshots,
        reels: marketingAssets[0].reels,
        overlays: [],
      },
    ];
  }

  if (hasFlag("all")) return marketingAssets;

  if (cliSlug) {
    const match = marketingAssets.find((item) => item.slug === cliSlug);
    if (!match) {
      throw new Error(`No existe "${cliSlug}" en scripts/marketing-assets.config.mjs`);
    }
    return [match];
  }

  throw new Error("Indica --slug quince-glam, --all o --url http://localhost:5173/demo/quince-glam --slug quince-glam");
}

async function waitForPageAssets(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
  await page.evaluate(async () => {
    await document.fonts?.ready;
    const images = [...document.images].filter((image) => !image.complete);
    await Promise.all(
      images.map(
        (image) =>
          new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          })
      )
    );
  });
  await page.waitForTimeout(450);
}

async function getScrollYForSelector(page, selector) {
  return page.evaluate((captureSelector) => {
    const element = document.querySelector(captureSelector);
    if (!element) return null;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const desired = window.scrollY + element.getBoundingClientRect().top - 72;
    return Math.max(0, Math.min(maxScroll, desired));
  }, selector);
}

async function scrollToCapturePoint(page, point) {
  let y = Number.isFinite(point.scroll) ? point.scroll : null;
  if (point.selector) {
    y = await getScrollYForSelector(page, point.selector);
    if (y === null) {
      console.warn(`No encontre ${point.selector}; salto ${point.name}`);
      return false;
    }
  }
  await page.evaluate((targetY) => window.scrollTo({ top: targetY, behavior: "auto" }), y || 0);
  await page.waitForTimeout(180);
  return true;
}

async function captureScreenshots(page, asset, outputDir) {
  for (const point of asset.screenshots || []) {
    const found = await scrollToCapturePoint(page, point);
    if (!found) continue;
    const filePath = path.join(outputDir, point.name);
    await page.screenshot({
      path: filePath,
      type: point.name.endsWith(".png") ? "png" : "jpeg",
      quality: point.name.endsWith(".png") ? undefined : captureDefaults.imageQuality,
      fullPage: false,
    });
    console.log(`  imagen ${point.name}`);
  }
}

async function getVideoScrollRange(page) {
  return page.evaluate(() => {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const rsvp = document.querySelector("[data-capture='rsvp']");
    if (!rsvp) return { start: 0, end: maxScroll };
    const desired = window.scrollY + rsvp.getBoundingClientRect().top - 72;
    return { start: 0, end: Math.max(0, Math.min(maxScroll, desired)) };
  });
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2;
}

async function generateVideo(page, reel, outputDir, assetSlug) {
  const fps = reel.fps || captureDefaults.video.fps;
  const totalFrames = Math.max(1, Math.round((reel.durationSeconds || 10) * fps));
  const framesDir = path.join(outputDir, `.frames-${path.parse(reel.name).name}`);
  const outputPath = path.join(outputDir, reel.name);

  await rm(framesDir, { recursive: true, force: true });
  await mkdir(framesDir, { recursive: true });

  const range = await getVideoScrollRange(page);
  for (let index = 0; index < totalFrames; index += 1) {
    const t = totalFrames === 1 ? 1 : index / (totalFrames - 1);
    const y = range.start + (range.end - range.start) * easeInOutCubic(t);
    await page.evaluate((targetY) => window.scrollTo({ top: targetY, behavior: "auto" }), y);
    await page.waitForTimeout(12);
    await page.screenshot({
      path: path.join(framesDir, `frame_${String(index + 1).padStart(5, "0")}.jpg`),
      type: "jpeg",
      quality: 90,
      fullPage: false,
    });
  }

  await run(
    ffmpegBin,
    [
      "-y",
      "-framerate",
      String(fps),
      "-i",
      path.join(framesDir, "frame_%05d.jpg"),
      "-vf",
      `scale=${captureDefaults.video.width}:${captureDefaults.video.height}:force_original_aspect_ratio=increase,crop=${captureDefaults.video.width}:${captureDefaults.video.height},format=${captureDefaults.video.pixFmt}`,
      "-r",
      String(fps),
      "-c:v",
      captureDefaults.video.codec,
      "-preset",
      "medium",
      "-crf",
      "20",
      "-movflags",
      "+faststart",
      outputPath,
    ],
    { stdio: "inherit" }
  );

  await rm(framesDir, { recursive: true, force: true });
  console.log(`  video ${reel.name} (${assetSlug})`);
}

async function copyCovers(outputDir) {
  const hero = path.join(outputDir, "01-hero.jpg");
  try {
    await access(hero, constants.F_OK);
    await copyFile(hero, path.join(outputDir, "cover.jpg"));
    await copyFile(hero, path.join(outputDir, "story.jpg"));
    console.log("  portada cover.jpg + story.jpg");
  } catch {
    console.warn("No pude crear cover.jpg/story.jpg porque no existe 01-hero.jpg");
  }
}

async function generateAsset(browser, asset, baseUrl) {
  const outputDir = path.resolve(root, asset.outputDir || `public/marketing/${asset.slug}`);
  await mkdir(outputDir, { recursive: true });

  const page = await browser.newPage({
    viewport: captureDefaults.viewport,
    deviceScaleFactor: captureDefaults.deviceScaleFactor,
    isMobile: captureDefaults.isMobile,
    hasTouch: captureDefaults.hasTouch,
  });
  const url = resolveCaptureUrl(asset, baseUrl);
  console.log(`Generando ${asset.slug}: ${url}`);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await waitForPageAssets(page);

  await captureScreenshots(page, asset, outputDir);
  await copyCovers(outputDir);

  for (const reel of Object.values(asset.reels || {})) {
    await generateVideo(page, reel, outputDir, asset.slug);
  }

  await page.close();
}

async function main() {
  const baseUrl = getArg("base-url") || process.env.MARKETING_BASE_URL || captureDefaults.baseUrl;
  const assets = selectAssets();

  await ensureAppRunning(baseUrl);
  await ensureFfmpeg();

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (error) {
    throw new Error(
      [
        "No pude abrir Chromium con Playwright.",
        "Si es la primera vez que usas este generador, ejecuta: npx playwright install chromium",
        `Detalle: ${error.message}`,
      ].join("\n")
    );
  }

  try {
    for (const asset of assets) {
      await generateAsset(browser, asset, baseUrl);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
