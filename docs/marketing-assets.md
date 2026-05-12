# Marketing assets

Sistema para generar capturas verticales, portadas y reels demo de las invitaciones desde Playwright + FFmpeg.

## Requisitos

- Tener la app corriendo: `npm run dev`.
- Tener FFmpeg instalado y disponible como `ffmpeg` en el PATH.
- En Windows, una instalacion simple es: `winget install Gyan.FFmpeg`.
- Si FFmpeg esta en una ruta puntual, usar `FFMPEG_PATH=C:\ruta\ffmpeg.exe`.

## Generar assets de una demo

```bash
npm run assets:demo -- --slug quince-glam
```

Tambien se puede pasar una URL concreta:

```bash
npm run assets:demo -- --url http://localhost:5173/demo/quince-glam --slug quince-glam
```

Si la app corre en otro puerto:

```bash
npm run assets:demo -- --slug quince-glam --base-url http://localhost:4173
```

## Generar todas las demos

```bash
npm run assets:all
```

## Agregar una nueva demo

Editar `scripts/marketing-assets.config.mjs` y agregar un item a `marketingAssets`:

```js
{
  slug: "nueva-demo",
  type: "demo",
  url: "/demo/nueva-demo",
  title: "Invitacion web para evento",
  outputDir: "public/marketing/nueva-demo",
  screenshots: [
    { name: "01-hero.jpg", scroll: 0 },
    { name: "02-detalles.jpg", selector: "[data-capture='details']" },
    { name: "03-galeria.jpg", selector: "[data-capture='gallery']" },
    { name: "04-extras.jpg", selector: "[data-capture='extras']" },
    { name: "05-confirmacion.jpg", selector: "[data-capture='rsvp']" },
  ],
}
```

Los puntos de captura disponibles en los modulos principales son:

```text
hero
details
gallery
extras
rsvp
```

## Archivos generados

Cada demo se guarda en `public/marketing/<slug>/`:

```text
cover.jpg
story.jpg
01-hero.jpg
02-detalles.jpg
03-galeria.jpg
04-extras.jpg
05-confirmacion.jpg
reel-short.mp4
reel-demo.mp4
```

Las imagenes salen en 1080x1920. Los videos salen en 1080x1920, 9:16, 30 FPS, MP4, H.264 y `yuv420p`.

## Modo captura

El script abre las invitaciones con `?capture=1`. En ese modo se ocultan controles flotantes, se reducen animaciones largas y se estabiliza la vista para screenshots. La vista normal no cambia.

## Edicion final en CapCut o Canva

Usar `reel-short.mp4` para piezas rapidas y `reel-demo.mp4` para mostrar mas secciones. La configuracion ya deja preparado un bloque `overlays` para automatizar textos en una etapa futura.

Preset final recomendado:

```text
1080x1920
9:16
30 FPS
MP4
H.264
pix_fmt yuv420p
```
