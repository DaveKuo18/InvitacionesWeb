import { DEMO_MODE } from "../config/env.js";

export function buildWhatsAppUrl({ number, message }) {
  if (DEMO_MODE) return "#demo-disabled";
  const cleanNumber = String(number || "").replace(/[^\d]/g, "");
  if (!cleanNumber) return "";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message || "")}`;
}
