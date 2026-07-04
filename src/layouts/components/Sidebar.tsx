import { Box, Divider, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import { ROUTES } from "@/app/router/routes";
import { DashboardIcon, TestCreationIcon, TestTrackingIcon } from "@/assets/icons";

import { LAYOUT } from "../constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [collapsed] = useState(isMobile);

  return (
    <Box
      component="aside"
      sx={{
        width: collapsed ? LAYOUT.SIDEBAR.COLLAPSED_WIDTH : LAYOUT.SIDEBAR.EXPANDED_WIDTH,
        height: "100%",

        display: "flex",
        flexDirection: "column",
        flexShrink: 0,

        bgcolor: "background.paper",

        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Divider />

      {/* Navigation */}
      <Stack
        spacing={1}
        sx={{
          flex: 1,

          pt: 3,
          px: collapsed ? 0 : 1,
        }}
      >
        <SidebarItem
          title="Dashboard"
          to={ROUTES.DASHBOARD}
          icon={DashboardIcon}
          collapsed={collapsed}
        />

        <SidebarItem
          title="Test Creation"
          to={ROUTES.CREATE_TEST}
          icon={TestCreationIcon}
          collapsed={collapsed}
        />

        <SidebarItem
          title="Test Tracking"
          to={ROUTES.TEST_TRACKING}
          icon={TestTrackingIcon}
          collapsed={collapsed}
        />
      </Stack>
    </Box>
  );
};

export default Sidebar;
