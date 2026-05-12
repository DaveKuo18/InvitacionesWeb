export function hexToRgba(hex = "#000000", alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getTheme(config) {
  return {
    background: "#FFFDF8",
    card: "#FFFFFF",
    primary: "#BFA2DB",
    primaryDark: config?.theme?.primaryDark || config?.theme?.primary || "#6E4D86",
    secondary: "#61B4E1",
    accent: "#E8D8B8",
    soft: config?.theme?.secondary || "#E9DDF5",
    text: "#3E3544",
    muted: "#6F6874",
    ...config?.theme,
  };
}
