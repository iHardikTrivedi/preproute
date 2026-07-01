import type { PropsWithChildren } from "react";

import { Box } from "@mui/material";

import LoginIllustration from "@/features/auth/components/LoginIllustration";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",

        width: "100vw",
        height: "100vh",

        p: 2, // 16px outer margin like Figma
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "background.default",
        }}
      >
        <LoginIllustration />
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
