import { demoInvitations } from "../data/demos/index.js";

export function getDemoByTemplate(template) {
  return demoInvitations.find((invitation) => invitation.template === template);
}
