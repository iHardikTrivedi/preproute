import { Box } from "@mui/material";

import { NotificationBellIcon } from "@/assets/icons";
import AppLogo from "@/components/common/AppLogo";
import { LAYOUT } from "../constants";
import HeaderProfile from "./HeaderProfile";

const notificationBell = (
  <Box
    component="img"
    src={NotificationBellIcon}
    alt="Notification Bell"
    sx={{
      width: 48,
      height: 48,
      display: "block",
      objectFit: "contain",
      userSelect: "none",
    }}
  />
);

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        height: LAYOUT.HEADER_HEIGHT,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        px: 4,

        bgcolor: "background.paper",

        borderBottom: "1px solid",
        borderColor: "divider",

        flexShrink: 0,
      }}
    >
      {/* Left Side */}
      <AppLogo width={160} clickable={false} />

      {/* Right Side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {notificationBell}
        <HeaderProfile />
      </Box>
    </Box>
  );
};

export default Header;
