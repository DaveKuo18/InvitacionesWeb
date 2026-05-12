# Desplegar una invitacion contratada en Vercel

Esta guia describe el flujo recomendado cuando un cliente contrata una invitacion web. La app esta preparada para Vercel con rutas limpias (`/i/cliente`) usando `BrowserRouter` y `vercel.json`.

## 1. Preparar la invitacion del cliente

1. Crear un archivo en `src/data/invitations/`, por ejemplo:

```text
src/data/invitations/sofia-15.js
```

2. Usar una demo como base. Lo mas rapido es copiar la estructura de `src/data/invitations/valentina-15.js` o de una demo en `src/data/demos/`.
3. Cambiar los datos principales:

```js
export const sofia15 = {
  slug: "sofia-15",
  status: "active",
  eventType: "quince",
  template: "quince-pastel",
  title: "Sofia",
  eyebrow: "Mis 15",
  dateISO: "2026-09-19T21:00:00-03:00",
  displayDate: "Sabado 19 de septiembre de 2026",
  intro: "Te espero para celebrar mis 15.",
  // theme, images, location, story, dressCode, gift, rsvp...
};
```

4. Agregar la invitacion al indice:

```js
// src/data/invitations/index.js
import { sofia15 } from "./sofia-15.js";

export const invitations = [
  sofia15,
];
```

5. Probar localmente:

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:5173/i/sofia-15
```

## 2. Revisar datos antes de publicar

Antes de desplegar, validar:

- Nombre del evento y textos principales.
- Fecha en `dateISO` con zona horaria `-03:00`.
- Fecha visible en `displayDate`.
- Direccion, salon, hora y link de Google Maps.
- Fotos: hero, portrait y galeria.
- Dress code.
- Alias, CBU, regalos o lista.
- RSVP por WhatsApp o formulario.
- Numero de WhatsApp correcto.
- Ortografia y nombres de familiares.

Si usa formulario RSVP con Google Sheets, primero configurar el webhook siguiendo `docs/google-apps-script-rsvp.md` y pegar la URL en:

```js
rsvp: {
  mode: "form",
  form: {
    storage: {
      provider: "webhook",
      webhookUrl: "https://script.google.com/macros/s/XXXX/exec",
    },
  },
}
```

## 3. Ejecutar chequeos locales

```bash
npm run build
```

Opcional:

```bash
npm run lint
```

Si el build falla, no publicar todavia. Corregir imports, nombres de template o errores de sintaxis.

## 4. Subir cambios a GitHub

1. Crear una rama para el cliente:

```bash
git checkout -b cliente/sofia-15
```

2. Revisar cambios:

```bash
git status
```

3. Crear commit:

```bash
git add src/data/invitations src/data/demos src/lib/templateRegistry.js README.md docs
git commit -m "Agrega invitacion de Sofia 15"
```

4. Subir la rama:

```bash
git push origin cliente/sofia-15
```

5. Crear Pull Request en GitHub y mergear a la rama principal cuando este revisado.

## 5. Crear el proyecto en Vercel

Para un cliente se puede usar el mismo proyecto principal o crear un proyecto separado. El flujo mas simple para operar muchos clientes es mantener una sola app y publicar cada invitacion en `/i/slug-del-cliente`.

Para un proyecto nuevo:

1. Entrar en Vercel.
2. Click en `Add New... > Project`.
3. Importar el repositorio de GitHub.
4. Configurar:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

5. Verificar que Vercel detecte `vercel.json`. Ese archivo hace que rutas como `/i/sofia-15` funcionen al recargar la pagina.
6. Click en `Deploy`.

## 6. Variables de entorno

En `Settings > Environment Variables` agregar, si corresponde:

```text
VITE_CONTACT_WHATSAPP=5491112345678
```

Esta variable se usa para los botones comerciales de la landing. Las invitaciones pueden tener su propio numero dentro de cada config en `rsvp.whatsappNumber`.

Despues de cambiar variables, hacer `Redeploy`.

## 7. Revisar el deploy

Cuando Vercel termina, abrir:

```text
https://tu-proyecto.vercel.app/i/sofia-15
```

Checklist de QA:

- La pagina abre sin hash (`#`) y no da 404 al recargar.
- En mobile se ve bien el hero.
- La cuenta regresiva toma la fecha correcta.
- El boton de Google Maps abre la ubicacion.
- El boton de WhatsApp arma el mensaje correcto.
- El formulario RSVP envia bien, si aplica.
- Las fotos cargan rapido.
- El favicon y logo se ven correctos.

## 8. Configurar dominio o subdominio

En `Settings > Domains` se puede usar:

```text
invitacionesweb.ar/i/sofia-15
sofia15.invitacionesweb.ar
www.sofia15.com.ar
```

Para un dominio propio:

1. Comprar o recibir acceso al dominio.
2. Agregarlo en `Settings > Domains`.
3. Vercel indica los registros DNS necesarios.
4. Configurar esos registros donde este comprado el dominio.
5. Esperar la propagacion.
6. Probar con y sin `www`, segun corresponda.

## 9. Entrega al cliente

Enviar:

- Link final.
- QR del link, si esta incluido.
- Fecha hasta la que se reciben cambios.
- Aclaracion de que los datos pueden actualizarse segun el plan.
- Instrucciones de RSVP si usa formulario.

Mensaje sugerido:

```text
Hola! Ya esta publicada tu invitacion web:
https://tu-dominio.com/i/sofia-15

Te recomiendo abrirla desde el celular, revisar fecha, ubicacion, textos, fotos y confirmar que el boton de WhatsApp funciona bien.
```

## 10. Cambios posteriores

Para cambios de texto, fotos o datos:

1. Editar el archivo del cliente en `src/data/invitations/`.
2. Ejecutar `npm run build`.
3. Crear commit y subir a GitHub.
4. Vercel despliega automaticamente.
5. Avisar al cliente cuando el deploy este listo.

