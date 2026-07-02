import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import App from "./App";

import AuthProvider from "@/app/providers/AuthProvider";
import ReduxProvider from "@/app/providers/ReduxProvider";
import ThemeProvider from "@/app/providers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ReduxProvider>
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <AuthProvider>
              <App />
            </AuthProvider>
          </SnackbarProvider>
        </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
