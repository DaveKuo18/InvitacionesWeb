export const defaultBrand = {
  name: "Invitaciones Web",
  instagram: "@invitacionesweb.ar",
  logo: "/brand/invitaciones-web-logo.svg",
};

export const defaultModules = {
  countdown: true,
  story: true,
  details: true,
  itinerary: true,
  gallery: true,
  dressCode: true,
  gifts: true,
  rsvp: true,
  music: false,
};

export const defaultRsvpFields = [
  { name: "nombre", label: "Nombre y apellido", type: "text", required: true },
  { name: "cantidad", label: "Cantidad de asistentes", type: "number", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", required: false },
  { name: "email", label: "Email", type: "email", required: false },
  { name: "mensaje", label: "Mensaje", type: "textarea", required: false },
];
