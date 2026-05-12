# RSVP con Google Sheets y Apps Script

Esta opcion sirve para invitaciones premium/deluxe: el formulario de la invitacion hace un `POST` a un Web App de Google Apps Script y cada confirmacion queda guardada en una hoja.

## 1. Crear el Sheet

1. Crear un Google Sheet nuevo.
2. Crear una hoja llamada `RSVP`.
3. En la primera fila agregar estas columnas:

```text
fecha, slug, evento, nombre, cantidad, telefono, email, mensaje, datos_extra_json
```

## 2. Crear el Apps Script

En el Sheet, abrir `Extensiones > Apps Script` y pegar:

```js
const SHEET_NAME = "RSVP";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const payload = JSON.parse(e.postData.contents || "{}");
  const values = payload.values || {};

  sheet.appendRow([
    payload.submittedAt || new Date().toISOString(),
    payload.invitationSlug || "",
    payload.eventTitle || "",
    values.nombre || "",
    values.cantidad || "",
    values.telefono || "",
    values.email || "",
    values.mensaje || "",
    JSON.stringify(values),
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Publicar como Web App

1. Click en `Implementar > Nueva implementacion`.
2. Tipo: `Aplicacion web`.
3. Ejecutar como: `Yo`.
4. Acceso: `Cualquier usuario`.
5. Copiar la URL generada.

## 4. Configurar la invitacion

En `src/data/invitations/mi-cliente.js`:

```js
rsvp: {
  enabled: true,
  mode: "form",
  form: {
    enabled: true,
    storage: {
      provider: "webhook",
      webhookUrl: "https://script.google.com/macros/s/XXXX/exec",
    },
  },
}
```

Tambien se puede usar `mode: "both"` para mostrar WhatsApp y formulario juntos.
