import { DEMO_DISABLED_MESSAGE, isDemoInvitation } from "../config/env.js";

export async function submitRsvp(config, values) {
  const storage = config.rsvp?.form?.storage || {};
  const payload = {
    invitationSlug: config.slug,
    eventTitle: config.title,
    submittedAt: new Date().toISOString(),
    values,
  };

  if (isDemoInvitation(config)) {
    console.info(`${DEMO_DISABLED_MESSAGE} RSVP simulado.`, payload);
    return { ...payload, simulated: true };
  }

  if (storage.provider === "webhook" && storage.webhookUrl) {
    const response = await fetch(storage.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`El webhook respondio con HTTP ${response.status}.`);
    return payload;
  }

  if (import.meta.env.DEV) {
    console.info("RSVP simulado porque no hay webhook configurado.", payload);
    return payload;
  }

  throw new Error("No hay un webhook configurado para guardar esta confirmación.");
}
