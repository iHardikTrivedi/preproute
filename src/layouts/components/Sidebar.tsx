import { Box, Divider, Stack } from "@mui/material";

import { ROUTES } from "@/app/router/routes";
import { DashboardIcon, TestCreationIcon, TestTrackingIcon } from "@/assets/icons";
import AppLogo from "@/components/common/AppLogo";

import { LAYOUT } from "../constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: LAYOUT.SIDEBAR.EXPANDED_WIDTH,
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        flexShrink: 0,

        bgcolor: "background.paper",

        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          height: LAYOUT.HEADER_HEIGHT,
          display: "flex",
          alignItems: "center",
          px: 3,
          flexShrink: 0,
        }}
      >
        <AppLogo />
      </Box>

      <Divider />

      {/* Navigation */}
      <Stack
        spacing={1}
        sx={{
          flex: 1,

          pt: 3,
          px: 1,
        }}
      >
        <SidebarItem title="Dashboard" to={ROUTES.DASHBOARD} icon={DashboardIcon} />

        <SidebarItem title="Test Creation" to={ROUTES.CREATE_TEST} icon={TestCreationIcon} />

        <SidebarItem title="Test Tracking" to={ROUTES.TEST_TRACKING} icon={TestTrackingIcon} />
      </Stack>
    </Box>
  );
};

export default Sidebar;
