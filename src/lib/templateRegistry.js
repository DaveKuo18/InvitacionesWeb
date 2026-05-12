import { BodaElegante } from "../templates/boda/BodaElegante.jsx";
import { QuinceGlam } from "../templates/quince/QuinceGlam.jsx";
import { BautismoDelicado } from "../templates/bautismo/BautismoDelicado.jsx";
import { CumpleInfantil } from "../templates/cumple/CumpleInfantil.jsx";
import { RecibidaModerna } from "../templates/recibida/RecibidaModerna.jsx";

export const templateRegistry = {
  "boda-elegante": BodaElegante,
  "quince-glam": QuinceGlam,
  "bautismo-delicado": BautismoDelicado,
  "cumple-infantil": CumpleInfantil,
  "recibida-moderna": RecibidaModerna,
};

export function getTemplateComponent(template) {
  return templateRegistry[template];
}
