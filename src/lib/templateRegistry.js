import { BodaElegante } from "../templates/boda/BodaElegante.jsx";
import { QuinceGlam } from "../templates/quince/QuinceGlam.jsx";
import { BautismoDelicado } from "../templates/bautismo/BautismoDelicado.jsx";
import { CumpleInfantil } from "../templates/cumple/CumpleInfantil.jsx";
import { RecibidaModerna } from "../templates/recibida/RecibidaModerna.jsx";

export const templateRegistry = {
  "boda-elegante": BodaElegante,
  "boda-clasica": BodaElegante,
  "boda-boho": BodaElegante,
  "quince-glam": QuinceGlam,
  "quince-dream": QuinceGlam,
  "quince-neon": QuinceGlam,
  "bautismo-delicado": BautismoDelicado,
  "bautismo-cielo": BautismoDelicado,
  "bautismo-natural": BautismoDelicado,
  "cumple-infantil": CumpleInfantil,
  "cumple-kids": CumpleInfantil,
  "cumple-noche": CumpleInfantil,
  "recibida-moderna": RecibidaModerna,
  "recibida-minimal": RecibidaModerna,
  "recibida-bold": RecibidaModerna,
};

export function getTemplateComponent(template) {
  return templateRegistry[template];
}
