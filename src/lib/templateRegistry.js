import { BodaElegante } from "../templates/boda/BodaElegante.jsx";
import { QuinceGlam } from "../templates/quince/QuinceGlam.jsx";
import { BautismoDelicado } from "../templates/bautismo/BautismoDelicado.jsx";
import { BabyShower } from "../templates/baby-shower/BabyShower.jsx";
import { Cumple } from "../templates/cumple/Cumple.jsx";
import { RecibidaModerna } from "../templates/recibida/RecibidaModerna.jsx";

export const templateRegistry = {
  "boda-elegante": BodaElegante,
  "boda-clasica": BodaElegante,
  "boda-boho": BodaElegante,
  "boda-minimal": BodaElegante,
  "boda-tropical": BodaElegante,
  "quince-glam": QuinceGlam,
  "quince-dream": QuinceGlam,
  "quince-neon": QuinceGlam,
  "quince-editorial": QuinceGlam,
  "quince-pastel": QuinceGlam,
  "bautismo-delicado": BautismoDelicado,
  "bautismo-cielo": BautismoDelicado,
  "bautismo-natural": BautismoDelicado,
  "bautismo-vintage": BautismoDelicado,
  "bautismo-jardin": BautismoDelicado,
  "baby-shower": BabyShower,
  "cumple": Cumple,
  "cumple-kids": Cumple,
  "cumple-noche": Cumple,
  "cumple-pool": Cumple,
  "cumple-black-gold": Cumple,
  "recibida-moderna": RecibidaModerna,
  "recibida-minimal": RecibidaModerna,
  "recibida-bold": RecibidaModerna,
  "recibida-tech": RecibidaModerna,
  "recibida-brunch": RecibidaModerna,
  "aniversario-clasico": BodaElegante,
  "baby-shower-botanico": BabyShower,
  "evento-corporativo": RecibidaModerna,
  "deluxe-personalizada": BodaElegante,
};

export function getTemplateComponent(template) {
  return templateRegistry[template];
}
