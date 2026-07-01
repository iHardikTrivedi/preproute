import { createTheme } from "@mui/material/styles";

import components from "./components";
import palette from "./palette";
import shadows from "./shadows";
import spacing, { RADIUS } from "./spacing";
import typography from "./typography";

const theme = createTheme({
  cssVariables: true,
  palette,
  typography,
  spacing,
  shadows,
  components,
  shape: {
    borderRadius: RADIUS.md,
  },
});

export default theme;
