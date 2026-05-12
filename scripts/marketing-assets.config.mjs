const defaultScreenshots = [
  { name: "01-hero.jpg", scroll: 0 },
  { name: "02-detalles.jpg", selector: "[data-capture='details']" },
  { name: "03-galeria.jpg", selector: "[data-capture='gallery']" },
  { name: "04-extras.jpg", selector: "[data-capture='extras']" },
  { name: "05-confirmacion.jpg", selector: "[data-capture='rsvp']" },
];

const defaultReels = {
  short: {
    name: "reel-short.mp4",
    durationSeconds: 10,
    fps: 30,
  },
  demo: {
    name: "reel-demo.mp4",
    durationSeconds: 18,
    fps: 30,
  },
};

const defaultOverlays = [
  { start: 0, end: 2, text: "Invitacion web personalizada" },
  { start: 2, end: 5, text: "Cuenta regresiva + ubicacion" },
  { start: 5, end: 8, text: "Fotos, regalos y dress code" },
  { start: 8, end: 11, text: "Confirmacion por WhatsApp" },
  { start: 11, end: 13, text: "@invitacionesweb.ar" },
];

function demo(slug, title) {
  return {
    slug,
    type: "demo",
    url: `/demo/${slug}`,
    title,
    outputDir: `public/marketing/${slug}`,
    screenshots: defaultScreenshots,
    reels: defaultReels,
    overlays: defaultOverlays,
  };
}

export const marketingAssets = [
  demo("quince-glam", "Invitacion web para 15 anos"),
  demo("boda-elegante", "Invitacion web para bodas"),
  demo("bautismo-delicado", "Invitacion web para bautismo"),
  demo("cumple-infantil", "Invitacion web para cumpleanos"),
  demo("recibida-moderna", "Invitacion web para recibidas"),
  demo("deluxe-personalizada", "Invitacion web Plan Deluxe"),
];

export const captureDefaults = {
  baseUrl: process.env.MARKETING_BASE_URL || "http://localhost:5173",
  viewport: {
    width: 1080,
    height: 1920,
  },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
  imageQuality: 92,
  framePattern: "frame_%05d.jpg",
  video: {
    width: 1080,
    height: 1920,
    fps: 30,
    codec: "libx264",
    pixFmt: "yuv420p",
  },
};
