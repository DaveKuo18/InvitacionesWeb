const TRUE_VALUES = new Set(["1", "true", "yes", "on"]);

function isTruthy(value) {
  return TRUE_VALUES.has(String(value || "").toLowerCase());
}

export const APP_ENV = import.meta.env.VITE_APP_ENV || import.meta.env.MODE || "development";
export const DEMO_MODE = isTruthy(import.meta.env.VITE_DEMO_MODE) || APP_ENV === "demo";

export const DEMO_DISABLED_MESSAGE = "Esta acción está deshabilitada en el ambiente demo.";

export const demoUser = {
  username: import.meta.env.VITE_DEMO_USER_USERNAME || "demo",
  password: import.meta.env.VITE_DEMO_USER_PASSWORD || "demo1234",
};

export function isDemoInvitation(config) {
  return DEMO_MODE || config?.status === "demo" || config?.slug?.startsWith("demo-");
}

export function notifyDemoDisabled() {
  window.alert(DEMO_DISABLED_MESSAGE);
}
