import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { useState } from "react";

import { ROUTES } from "@/app/router/routes";
import { DashboardIcon, TestCreationIcon, TestTrackingIcon } from "@/assets/icons";

import { LAYOUT } from "../constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

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

      <Box sx={{ p: 1, pb: 2, display: "flex", justifyContent: "center" }}>
        <IconButton onClick={() => setCollapsed((s) => !s)} size="small">
          <MenuOpenRoundedIcon sx={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
