const ROOT_DOMAIN = "invitacionesweb.ar";
const IGNORED_HOSTS = new Set(["localhost", "127.0.0.1", ROOT_DOMAIN, `www.${ROOT_DOMAIN}`]);

export function getInvitationSlugFromHost(hostname = window.location.hostname) {
  const host = hostname.toLowerCase().split(":")[0];

  if (IGNORED_HOSTS.has(host) || host.endsWith(".vercel.app")) {
    return null;
  }

  if (!host.endsWith(`.${ROOT_DOMAIN}`)) {
    return null;
  }

  const subdomain = host.replace(`.${ROOT_DOMAIN}`, "");

  if (!subdomain || subdomain.includes(".")) {
    return null;
  }

  return subdomain;
}
