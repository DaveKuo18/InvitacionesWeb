export function buildWhatsAppUrl({ number, message }) {
  const cleanNumber = String(number || "").replace(/[^\d]/g, "");
  if (!cleanNumber) return "";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message || "")}`;
}
