import { Box } from "@mui/material";

import { COLORS } from "@/theme/colors";

import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";

const LoginCard = () => {
  return (
    <Box
      sx={{
        p: 0.1,
        height: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          height: "100%",

          border: "1px solid",
          borderColor: COLORS.border.primaryLight,

          borderRadius: 3,

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",

          px: 10,
          py: 8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 480,
            mx: "auto",
          }}
        >
          <LoginHeader />

          <Box
            sx={{
              mt: 5,
            }}
          >
            <LoginForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginCard;
