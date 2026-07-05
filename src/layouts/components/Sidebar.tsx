import { Box, Divider, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import { ROUTES } from "@/app/router/routes";
import {
  ArchiveIcon,
  DashboardIcon,
  InstitutesIcon,
  IssuesIcon,
  MessagesIcon,
  NotificationsIcon,
  PaymentsIcon,
  ProfileIcon,
  SettingsIcon,
  TestCreationIcon,
  TestPapersIcon,
  UsersIcon,
} from "@/assets/icons";
import { LAYOUT } from "../constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [collapsed, setCollapsed] = useState(isMobile);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Box
      component="aside"
      sx={{
        width: collapsed ? LAYOUT.SIDEBAR.COLLAPSED_WIDTH : LAYOUT.SIDEBAR.EXPANDED_WIDTH,
        height: "100%",
        minHeight: 0,

        display: "flex",
        flexDirection: "column",
        flexShrink: 0,

        bgcolor: "background.paper",

        borderRight: "1px solid",
        borderColor: "divider",

        transition: "width 0.3s ease-in-out",
      }}
    >
      <Divider />

      {/* Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: collapsed ? "center" : "flex-end", p: 1 }}>
        <IconButton onClick={handleToggle} size="small">
          {collapsed ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </IconButton>
      </Box>

      {/* Navigation */}
      <Stack
        spacing={1}
        sx={{
          flex: 1,
          pt: 1,
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

        <SidebarItem title="Issues" to={ROUTES.ISSUES} icon={IssuesIcon} collapsed={collapsed} />
        <SidebarItem
          title="Test Papers"
          to={ROUTES.TEST_PAPERS}
          icon={TestPapersIcon}
          collapsed={collapsed}
        />
        <SidebarItem title="Users" to={ROUTES.USERS} icon={UsersIcon} collapsed={collapsed} />
        <SidebarItem
          title="Institutes"
          to={ROUTES.INSTITUTES}
          icon={InstitutesIcon}
          collapsed={collapsed}
        />
        <SidebarItem title="Profile" to={ROUTES.PROFILE} icon={ProfileIcon} collapsed={collapsed} />
        <SidebarItem title="Archive" to={ROUTES.ARCHIVE} icon={ArchiveIcon} collapsed={collapsed} />
        <SidebarItem
          title="Payments"
          to={ROUTES.PAYMENTS}
          icon={PaymentsIcon}
          collapsed={collapsed}
        />
        <SidebarItem
          title="Messages"
          to={ROUTES.MESSAGES}
          icon={MessagesIcon}
          collapsed={collapsed}
        />
        <SidebarItem
          title="Notifications"
          to={ROUTES.NOTIFICATIONS}
          icon={NotificationsIcon}
          collapsed={collapsed}
        />
        <SidebarItem
          title="Settings"
          to={ROUTES.SETTINGS}
          icon={SettingsIcon}
          collapsed={collapsed}
        />
      </Stack>
    </Box>
  );
};

export default Sidebar;
