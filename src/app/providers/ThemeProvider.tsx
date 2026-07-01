import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { PropsWithChildren } from "react";

import theme from "@/theme/theme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
