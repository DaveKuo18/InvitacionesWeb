import { mkdir, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";
import path from "node:path";

const edgePath = process.env.EDGE_PATH || "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ffmpegPath = process.env.FFMPEG_PATH || "C:\\Users\\dkuo\\AppData\\Local\\ffmpeg\\bin\\ffmpeg.exe";
const root = process.cwd();
const outRoot = path.join(root, "recursos_redes");
const viewport = { width: 1080, height: 1920 };
const fps = 30;
const durationSeconds = 15;
const videoSuffix = "scroll_reel_30fps_15s";

const defaultPages = [
  { slug: "quince-glam", title: "Quince glam", url: "http://127.0.0.1:5173/demo/quince-glam" },
  { slug: "quince-dream", title: "Quince dream", url: "http://127.0.0.1:5173/demo/quince-dream" },
  { slug: "quince-neon", title: "Quince neon", url: "http://127.0.0.1:5173/demo/quince-neon" },
  { slug: "boda-elegante", title: "Boda elegante", url: "http://127.0.0.1:5173/demo/boda-elegante" },
  { slug: "boda-clasica", title: "Boda clásica", url: "http://127.0.0.1:5173/demo/boda-clasica" },
  { slug: "boda-boho", title: "Boda boho", url: "http://127.0.0.1:5173/demo/boda-boho" },
  { slug: "bautismo-delicado", title: "Bautismo delicado", url: "http://127.0.0.1:5173/demo/bautismo-delicado" },
  { slug: "bautismo-cielo", title: "Bautismo cielo", url: "http://127.0.0.1:5173/demo/bautismo-cielo" },
  { slug: "bautismo-natural", title: "Bautismo natural", url: "http://127.0.0.1:5173/demo/bautismo-natural" },
  { slug: "cumple", title: "Cumple infantil", url: "http://127.0.0.1:5173/demo/cumple" },
  { slug: "cumple-kids", title: "Cumple kids", url: "http://127.0.0.1:5173/demo/cumple-kids" },
  { slug: "cumple-noche", title: "Cumple noche", url: "http://127.0.0.1:5173/demo/cumple-noche" },
  { slug: "recibida-moderna", title: "Recibida moderna", url: "http://127.0.0.1:5173/demo/recibida-moderna" },
  { slug: "recibida-minimal", title: "Recibida minimal", url: "http://127.0.0.1:5173/demo/recibida-minimal" },
  { slug: "recibida-bold", title: "Recibida bold", url: "http://127.0.0.1:5173/demo/recibida-bold" },
  { slug: "valentina-15", title: "Valentina 15", url: "http://127.0.0.1:5173/i/valentina-15" },
];

let messageId = 0;

function getArg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : "";
}

function getPages() {
  const url = getArg("url");
  const name = getArg("name") || "captura";
  if (url) return [{ slug: name, title: name, url }];
  return defaultPages;
}

function request(url, options = {}) {
  return fetch(url, options).then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status} en ${url}`);
    return response;
  });
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} termino con código ${code}`));
    });
  });
}

function send(ws, method, params = {}) {
  const id = ++messageId;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => {
    const onMessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.id !== id) return;
      ws.removeEventListener("message", onMessage);
      if (message.error) reject(new Error(`${method}: ${message.error.message}`));
      else resolve(message.result);
    };
    ws.addEventListener("message", onMessage);
  });
}

async function openPage(page) {
  const version = await request("http://127.0.0.1:9222/json/version").then((response) => response.json());
  const browserWs = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((resolve) => browserWs.addEventListener("open", resolve, { once: true }));
  const { targetId } = await send(browserWs, "Target.createTarget", { url: "about:blank" });
  browserWs.close();

  const targets = await request("http://127.0.0.1:9222/json/list").then((response) => response.json());
  const target = targets.find((item) => item.id === targetId);
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));

  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "Emulation.setDeviceMetricsOverride", { width: viewport.width, height: viewport.height, deviceScaleFactor: 1, mobile: true });
  await send(ws, "Page.navigate", { url: page.url });
  await wait(3600);
  return ws;
}

async function evalOnPage(ws, expression) {
  const result = await send(ws, "Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  return result.result.value;
}

async function scrollTo(ws, y) {
  await evalOnPage(ws, `window.scrollTo({ top: ${Math.round(y)}, behavior: "auto" }); true;`);
  await wait(120);
}

async function screenshot(ws, file) {
  const image = await send(ws, "Page.captureScreenshot", { format: "jpeg", quality: 88, fromSurface: true });
  await writeFile(file, Buffer.from(image.data, "base64"));
}

async function capturePage(page) {
  const pageDir = path.join(outRoot, page.slug);
  const photosDir = path.join(pageDir, "fotos");
  const framesDir = path.join(pageDir, "frames");
  const videosDir = path.join(pageDir, "videos");
  await mkdir(photosDir, { recursive: true });
  await mkdir(videosDir, { recursive: true });
  await rm(framesDir, { recursive: true, force: true });
  await mkdir(framesDir, { recursive: true });

  const ws = await openPage(page);
  const scrollHeight = await evalOnPage(ws, "Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)");
  const maxScroll = Math.max(0, scrollHeight - viewport.height);
  const positions = [
    { name: "01_hero", y: 0 },
    { name: "02_detalles", y: maxScroll * 0.34 },
    { name: "03_galeria", y: maxScroll * 0.64 },
    { name: "04_confirmacion", y: maxScroll },
  ];

  for (const position of positions) {
    await scrollTo(ws, position.y);
    await screenshot(ws, path.join(photosDir, `${page.slug}_${position.name}.jpg`));
  }

  const totalFrames = fps * durationSeconds;
  for (let frame = 0; frame < totalFrames; frame += 1) {
    const t = frame / (totalFrames - 1);
    const eased = t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
    await scrollTo(ws, eased * maxScroll);
    await screenshot(ws, path.join(framesDir, `frame_${String(frame + 1).padStart(4, "0")}.jpg`));
  }

  await send(ws, "Page.close");
  ws.close();

  const videoPath = path.join(videosDir, `${page.slug}_${videoSuffix}.mp4`);
  await run(ffmpegPath, ["-y", "-framerate", String(fps), "-i", path.join(framesDir, "frame_%04d.jpg"), "-vf", "format=yuv420p", "-c:v", "libx264", "-preset", "medium", "-crf", "20", videoPath]);
  await rm(framesDir, { recursive: true, force: true });
}

async function main() {
  await mkdir(outRoot, { recursive: true });
  const userDataDir = path.join(outRoot, ".edge-capture-profile");
  await rm(userDataDir, { recursive: true, force: true });
  await mkdir(userDataDir, { recursive: true });

  const edge = spawn(edgePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--remote-debugging-port=9222",
    `--user-data-dir=${userDataDir}`,
    `--window-size=${viewport.width},${viewport.height}`,
    "about:blank",
  ]);

  try {
    await wait(1800);
    for (const page of getPages()) {
      console.log(`Generando recursos para ${page.title}: ${page.url}`);
      await capturePage(page);
    }
  } finally {
    edge.kill();
    await wait(600);
    await rm(userDataDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
