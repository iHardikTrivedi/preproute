export const COLORS = {
  brand: {
    primary: "#5988EF",
    primaryLight: "#60A5FA",
    primaryDark: "#1B5DEF",
    logo: "#1B5DEF",
  },

  sidebar: {
    active: "#384EC7",
    inactive: "#6B7180",
    activeBackground: "#F8FAFF",
    hoverBackground: "#F8FAFF",
  },

  background: {
    page: "#F7FBFF",
    paper: "#FFFFFF",
    sidebar: "#FFFFFF",
    card: "#FFFFFF",
    input: "#FFFFFF",
    disabled: "#F9FAFB",
  },

  text: {
    primary: "#374151",
    secondary: "#6B7280",
    disabled: "#D1D5DB",
    inverse: "#FFFFFF",
    placeholder: "#9CA3AF",
    link: "#1B5DEF",
  },

  border: {
    light: "#E5E7EB",
    default: "#D1D5DB",
    strong: "#9CA3AF",
    focus: "#5988EF",
    primaryLight: "#60A5FA",
  },

  success: {
    main: "#22C55E",
    light: "#DCFCE7",
    dark: "#15803D",
  },

  warning: {
    main: "#F59E0B",
    light: "#FEF3C7",
    dark: "#B45309",
  },

  error: {
    main: "#EF4444",
    light: "#FEE2E2",
    dark: "#B91C1C",
  },

  destructive: {
    main: "#FF7F7F",
    contrastText: "#FFFFFF",
  },

  info: {
    main: "#3B82F6",
    light: "#DBEAFE",
    dark: "#1D4ED8",
  },

  grey: {
    0: "#FFFFFF",
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  common: {
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",
  },

  overlay: {
    light: "rgba(89,136,239,0.08)",
    medium: "rgba(89,136,239,0.12)",
    dark: "rgba(89,136,239,0.20)",
  },

  shadow: {
    xs: "rgba(15,23,42,0.04)",
    sm: "rgba(15,23,42,0.08)",
    md: "rgba(15,23,42,0.12)",
    lg: "rgba(15,23,42,0.18)",
  },
} as const;

export type Colors = typeof COLORS;
export default COLORS;
