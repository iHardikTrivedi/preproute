import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { PrepRouteLogo } from "@/assets";

interface AppLogoProps {
  width?: number | string;
  height?: number | string;
  clickable?: boolean;
}

const AppLogo = ({ width = 120, height = "auto", clickable = false }: AppLogoProps) => {
  const logo = (
    <Box
      component="img"
      src={PrepRouteLogo}
      alt="PrepRoute"
      sx={{
        width,
        height,
        display: "block",
        objectFit: "contain",
        userSelect: "none",
      }}
    />
  );

  if (!clickable) {
    return logo;
  }

  return (
    <Box
      component={RouterLink}
      to="/"
      sx={{
        display: "inline-flex",
        textDecoration: "none",
      }}
    >
      {logo}
    </Box>
  );
};

export default AppLogo;
