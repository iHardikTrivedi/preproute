import type { ComponentType, SVGProps } from "react";

import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import { COLORS } from "@/theme/colors";

interface SidebarItemProps {
  title: string;
  to: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  collapsed?: boolean;
}

const SidebarItem = ({ title, to, icon: Icon, collapsed = false }: SidebarItemProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Box
          sx={{
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",

            gap: collapsed ? 0 : 2,

            height: 60,

            ml: 0,
            mr: collapsed ? 0 : 2,
            my: 0.5,

            pl: collapsed ? 0 : 3,
            pr: collapsed ? 0 : 2,

            borderTopRightRadius: 14,
            borderBottomRightRadius: 14,

            bgcolor: isActive ? COLORS.sidebar.activeBackground : "transparent",

            cursor: "pointer",

            transition: "all .25s ease",

            "&:hover": {
              bgcolor: COLORS.sidebar.hoverBackground,
            },

            "&::before": {
              content: '""',

              position: "absolute",

              left: 0,
              top: 0,
              bottom: 0,

              width: isActive && !collapsed ? 6 : 0,

              backgroundColor: COLORS.sidebar.active,

              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,

              transition: "width .25s ease",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: isActive ? COLORS.sidebar.active : COLORS.sidebar.inactive,

              "& svg": {
                width: 22,
                height: 22,

                display: "block",
              },
            }}
          >
            <Icon />
          </Box>

          {!collapsed && (
            <Typography
              variant="body2"
              sx={{
                color: isActive ? COLORS.sidebar.active : COLORS.sidebar.inactive,

                fontWeight: isActive ? 600 : 500,

                whiteSpace: "nowrap",

                userSelect: "none",
              }}
            >
              {title}
            </Typography>
          )}
        </Box>
      )}
    </NavLink>
  );
};

export default SidebarItem;
