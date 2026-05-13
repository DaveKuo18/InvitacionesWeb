export async function submitRsvp(config, values) {
  const storage = config.rsvp?.form?.storage || {};
  const payload = {
    invitationSlug: config.slug,
    eventTitle: config.title,
    submittedAt: new Date().toISOString(),
    values,
  };

  if (storage.provider === "webhook" && storage.webhookUrl) {
    const response = await fetch(storage.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`El webhook respondio con HTTP ${response.status}.`);
    return payload;
  }

  const isDemo = config.slug?.startsWith("demo-") || config.status === "demo";
  if (isDemo || import.meta.env.DEV) {
    console.info("RSVP simulado porque no hay webhook configurado.", payload);
    return payload;
  }

  throw new Error("No hay un webhook configurado para guardar esta confirmación.");
}
