import { clientInvitations } from "../data/invitations/index.js";

export function getInvitationBySlug(slug) {
  return clientInvitations.find((invitation) => invitation.slug === slug);
}
