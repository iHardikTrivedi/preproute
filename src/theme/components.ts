import type { Components } from "@mui/material/styles";
import COLORS from "./colors";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        boxSizing: "border-box",
      },

      html: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },

      body: {
        margin: 0,
        padding: 0,
        backgroundColor: COLORS.background.page,
        color: COLORS.text.primary,
      },

      a: {
        color: "inherit",
        textDecoration: "none",
      },

      img: {
        display: "block",
        maxWidth: "100%",
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: "contained",
    },

    styleOverrides: {
      root: {
        height: 48,
        borderRadius: 8,
        textTransform: "none",
        fontWeight: 600,
        fontSize: 16,
      },

      contained: {
        backgroundColor: COLORS.brand.primary,
        color: COLORS.common.white,

        "&:hover": {
          backgroundColor: COLORS.brand.primaryDark,
          boxShadow: "none",
        },

        "&:disabled": {
          backgroundColor: COLORS.grey[300],
          color: COLORS.grey[500],
        },
      },

      outlined: {
        borderColor: COLORS.border.default,

        "&:hover": {
          borderColor: COLORS.brand.primary,
        },
      },

      text: {
        color: COLORS.brand.primary,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      size: "medium",
      variant: "outlined",
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        height: 48,
        borderRadius: 8,
        backgroundColor: COLORS.background.input,

        "& fieldset": {
          borderColor: COLORS.border.default,
        },

        "&:hover fieldset": {
          borderColor: COLORS.brand.primary,
        },

        "&.Mui-focused fieldset": {
          borderWidth: 1,
          borderColor: COLORS.border.focus,
        },
      },

      input: {
        padding: "12px 16px",

        "&::placeholder": {
          color: COLORS.text.placeholder,
          opacity: 1,
        },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: COLORS.text.secondary,

        "&.Mui-focused": {
          color: COLORS.brand.primary,
        },
      },
    },
  },

  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },

    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: COLORS.background.paper,
      },
    },
  },

  MuiCard: {
    defaultProps: {
      elevation: 0,
    },

    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: COLORS.background.card,
      },
    },
  },

  MuiLink: {
    styleOverrides: {
      root: {
        color: COLORS.text.link,
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "none",

        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: COLORS.border.light,
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: COLORS.border.default,

        "&.Mui-checked": {
          color: COLORS.brand.primary,
        },
      },
    },
  },

  MuiRadio: {
    styleOverrides: {
      root: {
        color: COLORS.border.default,

        "&.Mui-checked": {
          color: COLORS.brand.primary,
        },
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
      },
    },
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: 12,
        borderRadius: 6,
      },
    },
  },
};

export default components;
