# Invitaciones Web

App Vite + React para vender y mantener invitaciones digitales desde una sola base de codigo. Las demos y los clientes reales usan plantillas reutilizables y datos por configuracion.

## Como correr

```bash
npm install
npm run dev
npm run build
```

Para configurar el WhatsApp comercial de la landing, copiar `.env.example` a `.env.local` y cambiar:

```text
VITE_CONTACT_WHATSAPP=5491112345678
```

Rutas principales:

```text
/
/demo/quince-glam
/demo/quince-dream
/demo/quince-neon
/demo/boda-elegante
/demo/boda-clasica
/demo/boda-boho
/demo/bautismo-delicado
/demo/bautismo-cielo
/demo/bautismo-natural
/demo/cumple
/demo/cumple-kids
/demo/cumple-noche
/demo/recibida-moderna
/demo/recibida-minimal
/demo/recibida-bold
/i/valentina-15
```

## Estructura

```text
src/
  app/
  templates/
  data/
    demos/
    invitations/
  components/
    shared/
    modules/
    rsvp/
  lib/
  types/
```

La app se sirve desde la raiz. Las demos viven como datos en `src/data/demos`, las invitaciones reales en `src/data/invitations` y los componentes visuales reutilizables en `src/components`.

## Agregar una nueva demo

1. Crear `src/data/demos/nueva-demo.js`.
2. Exportar un objeto con `slug`, `eventType`, `template`, `title`, `dateISO`, `location`, `modules`, `rsvp`, etc.
3. Agregarlo a `src/data/demos/index.js`.
4. Abrir `/demo/nombre-template`.

## Agregar una invitacion real

1. Crear `src/data/invitations/cliente-slug.js`.
2. Usar `status: "active"` y `slug: "cliente-slug"`.
3. Agregarlo a `src/data/invitations/index.js`.
4. La URL queda `/i/cliente-slug`.

## Elegir plantilla

En la config:

```js
template: "quince-glam"
```

Plantillas disponibles:

```text
boda-elegante
boda-clasica
boda-boho
quince-glam
quince-dream
quince-neon
bautismo-delicado
bautismo-cielo
bautismo-natural
cumple
cumple-kids
cumple-noche
recibida-moderna
recibida-minimal
recibida-bold
```

El registry vive en `src/lib/templateRegistry.js`. Varias plantillas pueden reutilizar el mismo layout y cambiar el estilo desde configuracion: colores, textos, imagenes, dress code, regalos y RSVP.

## Estilos comerciales por evento

Cada evento tiene varias demos para mostrar opciones al cliente:

```text
Boda: elegante, clasica, boho
15: glam, dream, neon
Bautismo: delicado, cielo, natural
Cumple: infantil, kids, noche
Recibida: moderna, minimal, bold
```

Para sumar un estilo nuevo, crear una config en `src/data/demos/templateVariants.js` o un archivo dedicado en `src/data/demos/`, agregar el `template` al registry y usar `/demo/nombre-template`.

## Activar o desactivar modulos

```js
modules: {
  countdown: true,
  story: true,
  details: true,
  itinerary: false,
  gallery: true,
  dressCode: true,
  gifts: true,
  rsvp: true,
  music: false,
}
```

Para sacar un modulo, cambiarlo a `false`.

## Cambiar datos editables

Todo lo editable vive en el archivo de configuracion:

```js
title: "Valentina",
eyebrow: "Mis 15",
dateISO: "2026-09-19T21:00:00-03:00",
displayDate: "Sabado 19 de septiembre de 2026",
theme: {
  primary: "#9A2F68",
  secondary: "#F4D7E8",
  background: "#FFF9FC",
  text: "#33242D",
  muted: "#7A6E75",
},
images: {
  hero: "...",
  portrait: "...",
  gallery: [],
},
location: {
  name: "Salon Garden Palace",
  address: "Av. Siempre Viva 1234, Buenos Aires",
  mapsUrl: "...",
},
```

## RSVP por WhatsApp

```js
rsvp: {
  enabled: true,
  mode: "whatsapp",
  whatsappNumber: "5491112345678",
  whatsappMessage: "Hola, confirmo mi asistencia. Mi nombre es:",
}
```

## RSVP por formulario + Google Sheets

Usar `mode: "form"` o `mode: "both"`:

```js
rsvp: {
  enabled: true,
  mode: "both",
  form: {
    enabled: true,
    fields: [
      { name: "nombre", label: "Nombre y apellido", type: "text", required: true },
      { name: "cantidad", label: "Cantidad de asistentes", type: "number", required: true },
      { name: "telefono", label: "Telefono", type: "tel", required: false },
      { name: "mensaje", label: "Mensaje", type: "textarea", required: false },
    ],
    storage: {
      provider: "webhook",
      webhookUrl: "https://script.google.com/macros/s/XXXX/exec",
    },
  },
}
```

Ver `docs/google-apps-script-rsvp.md` para configurar Google Sheets.

## Generar fotos y videos

Levantar la app:

```bash
npm run dev
```

Generar un asset puntual:

```bash
node scripts/generate-demo-assets.mjs --url http://localhost:5173/demo/quince-glam --name quince-glam
node scripts/generate-demo-assets.mjs --url http://localhost:5173/i/valentina-15 --name valentina-15
```

Sin parametros, el script recorre demos y cliente de ejemplo.

Los archivos generados se guardan en `recursos_redes/`, carpeta ignorada por Git para no subir assets pesados.

## Vercel y dominios

Para publicar en Vercel:

1. Importar el repo.
2. Framework: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Configurar dominio o subdominio desde `Settings > Domains`.

Para URLs comerciales se puede usar:

```text
invitacionesweb.com/demo/quince-glam
invitacionesweb.com/i/valentina-15
valentina.invitacionesweb.com/i/valentina-15
```
