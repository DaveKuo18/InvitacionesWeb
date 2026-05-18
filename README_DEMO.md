# Ambiente demo seguro

Este proyecto es una aplicacion frontend Vite + React. No hay backend, base de datos ni login real dentro del repositorio, asi que el modo demo se controla con variables `VITE_*`, fixtures locales y mocks de acciones sensibles.

## Variables de entorno

Copiar el ejemplo:

```bash
cp .env.demo.example .env.local
```

Variables nuevas:

```bash
VITE_APP_ENV=demo
VITE_DEMO_MODE=true
VITE_CONTACT_WHATSAPP=5491100000000
VITE_DEMO_USER_USERNAME=demo
VITE_DEMO_USER_PASSWORD=demo1234
```

`VITE_APP_ENV` puede ser `development`, `production` o `demo`. `VITE_DEMO_MODE=true` fuerza el comportamiento demo aunque el modo de Vite sea otro.

## Levantar localmente

```bash
npm install
npm run demo:seed
npm run dev
```

Tambien se puede usar:

```bash
npm run dev:demo
```

Abrir:

```text
http://localhost:5173/
http://localhost:5173/demo/quince-glam
```

## Resetear datos demo

```bash
npm run demo:reset
```

Como la app es estatica, este comando valida y regenera el estado desde fixtures versionados. Los datos demo viven en:

- `src/data/demos`
- `src/data/demo/users.js`
- `src/data/demo/rsvpResponses.js`

## Usuario demo

La app no tiene pantalla de login en este repo. Se deja un usuario demo documentado para futuras integraciones o pantallas privadas:

```text
usuario: demo
contrasena: demo1234
```

Se puede cambiar con:

```bash
VITE_DEMO_USER_USERNAME=demo
VITE_DEMO_USER_PASSWORD=demo1234
```

## Acciones deshabilitadas o simuladas

Cuando `VITE_DEMO_MODE=true`:

- WhatsApp se bloquea y muestra: "Esta accion esta deshabilitada en el ambiente demo."
- Los formularios RSVP no llaman webhooks reales; solo simulan el envio en consola.
- Los links de Google Maps de invitaciones demo se bloquean.
- Los datos de regalo/alias/CBU se tratan como ficticios y no se exponen como datos cobrables reales.
- Las rutas `/i/:slug` no leen invitaciones cliente; solo permiten encontrar demos por `slug` o `template`.

## Datos ficticios

Las invitaciones demo usan nombres, telefonos, emails y direcciones ficticias o genericas. No usar fotos, documentos, telefonos, aliases, CBUs, webhooks o URLs privadas de clientes en `src/data/demos` ni en `src/data/demo`.

## Despliegue demo

En Vercel:

1. Crear un proyecto separado para demo o un deployment separado del proyecto productivo.
2. Configurar variables:

```bash
VITE_APP_ENV=demo
VITE_DEMO_MODE=true
VITE_CONTACT_WHATSAPP=5491100000000
VITE_DEMO_USER_USERNAME=demo
VITE_DEMO_USER_PASSWORD=demo1234
```

3. Build command:

```bash
npm run build:demo
```

4. Output directory:

```text
dist
```

5. Verificar estas URLs:

```text
/demo/quince-glam
/demo/boda-elegante
/demo/cumple
```

## URL recomendada

Usar un subdominio separado, por ejemplo:

```text
https://demo.invitacionesweb.ar
```

Alternativa de portfolio:

```text
https://invitaciones-web-demo.vercel.app
```
