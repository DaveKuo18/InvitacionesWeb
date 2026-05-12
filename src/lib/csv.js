function escapeCsv(value) {
  const text = value == null ? "" : String(value);
  if (!/[",\n\r]/.test(text)) return text;
  return `"${text.replaceAll('"', '""')}"`;
}

export function rsvpResponseToCsvRow(payload) {
  const values = payload.values || {};
  const standard = [
    payload.submittedAt,
    payload.invitationSlug,
    payload.eventTitle,
    values.nombre,
    values.cantidad,
    values.telefono,
    values.email,
    values.mensaje,
  ];
  return [...standard, JSON.stringify(values)].map(escapeCsv).join(",");
}
