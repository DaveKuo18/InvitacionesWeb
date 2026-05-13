import { recibidaModernaDemo } from "../demos/recibida-moderna.js";

export const me_recibo_magui = {
  ...recibidaModernaDemo,
  slug: "me_recibo_magui",
  status: "active",
  template: "recibida-moderna",
  templateVersion: "1.0",
  title: "Me recibí!",
  eyebrow: "Recibida",
  rsvp: {
    ...recibidaModernaDemo.rsvp,
    mode: "whatsapp",
    whatsappNumber: "5491112345678",
    whatsappMessage: "Hola, confirmo mi asistencia al evento. Mi nombre es:",
    form: {
      ...recibidaModernaDemo.rsvp.form,
      storage: { provider: "webhook", webhookUrl: "" },
    },
  },
};
