import type { PaletteOptions } from "@mui/material/styles";
import COLORS from "./colors";

const palette: PaletteOptions = {
  mode: "light",

  primary: {
    main: COLORS.brand.primary,
    light: COLORS.brand.primaryLight,
    dark: COLORS.brand.primaryDark,
    contrastText: COLORS.common.white,
  },

  secondary: {
    main: COLORS.brand.primaryDark,
    light: COLORS.brand.primaryLight,
    dark: COLORS.brand.primaryDark,
    contrastText: COLORS.common.white,
  },

  success: {
    main: COLORS.success.main,
    light: COLORS.success.light,
    dark: COLORS.success.dark,
    contrastText: COLORS.common.white,
  },

  warning: {
    main: COLORS.warning.main,
    light: COLORS.warning.light,
    dark: COLORS.warning.dark,
    contrastText: COLORS.common.white,
  },

  error: {
    main: COLORS.error.main,
    light: COLORS.error.light,
    dark: COLORS.error.dark,
    contrastText: COLORS.common.white,
  },

  info: {
    main: COLORS.info.main,
    light: COLORS.info.light,
    dark: COLORS.info.dark,
    contrastText: COLORS.common.white,
  },

  background: {
    default: COLORS.background.page,
    paper: COLORS.background.card,
  },

  text: {
    primary: COLORS.text.primary,
    secondary: COLORS.text.secondary,
    disabled: COLORS.text.disabled,
  },

  divider: COLORS.border.light,

  common: {
    black: COLORS.common.black,
    white: COLORS.common.white,
  },

  grey: {
    50: COLORS.grey[50],
    100: COLORS.grey[100],
    200: COLORS.grey[200],
    300: COLORS.grey[300],
    400: COLORS.grey[400],
    500: COLORS.grey[500],
    600: COLORS.grey[600],
    700: COLORS.grey[700],
    800: COLORS.grey[800],
    900: COLORS.grey[900],
  },

  action: {
    active: COLORS.text.primary,
    hover: COLORS.overlay.light,
    selected: COLORS.overlay.medium,
    focus: COLORS.overlay.dark,
    disabled: COLORS.text.disabled,
    disabledBackground: COLORS.grey[100],
  },

  tonalOffset: 0.2,
  contrastThreshold: 3,
};

export default palette;
