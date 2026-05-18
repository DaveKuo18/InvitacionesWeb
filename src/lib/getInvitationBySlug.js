import { clientInvitations } from "../data/invitations/index.js";
import { demoInvitations } from "../data/demos/index.js";
import { DEMO_MODE } from "../config/env.js";

export function getInvitationBySlug(slug) {
  if (DEMO_MODE) {
    return demoInvitations.find((invitation) => invitation.slug === slug || invitation.template === slug);
  }

  return clientInvitations.find((invitation) => invitation.slug === slug);
}
