import { Box } from "@mui/material";

import { LoginIllustrationImage } from "@/assets";

const LoginIllustration = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },

        justifyContent: "center",
        alignItems: "center",

        bgcolor: "background.default",

        p: 8,
      }}
    >
      <Box
        component="img"
        src={LoginIllustrationImage}
        alt="Login Illustration"
        sx={{
          width: "100%",
          maxWidth: 620,
        }}
      />
    </Box>
  );
};

export default LoginIllustration;
