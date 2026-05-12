import { quinceGlamDemo } from "../demos/quince-glam.js";

export const valentina15 = {
  ...quinceGlamDemo,
  slug: "valentina-15",
  status: "active",
  template: "quince-glam",
  templateVersion: "1.0",
  title: "Valentina",
  eyebrow: "Mis 15",
  rsvp: {
    ...quinceGlamDemo.rsvp,
    mode: "whatsapp",
    whatsappNumber: "5491112345678",
    whatsappMessage: "Hola, confirmo mi asistencia al evento. Mi nombre es:",
    form: {
      ...quinceGlamDemo.rsvp.form,
      storage: { provider: "webhook", webhookUrl: "" },
    },
  },
};
