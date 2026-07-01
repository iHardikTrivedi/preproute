import { Stack, Typography } from "@mui/material";

import AppLogo from "@/components/common/AppLogo";

import { LOGIN_TEXT } from "../constants";

const LoginHeader = () => {
  return (
    <Stack spacing={3}>
      <AppLogo width={120} />

      <Stack spacing={1}>
        <Typography variant="h4">{LOGIN_TEXT.TITLE}</Typography>

        <Typography variant="caption" color="text.secondary">
          {LOGIN_TEXT.SUBTITLE}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LoginHeader;
