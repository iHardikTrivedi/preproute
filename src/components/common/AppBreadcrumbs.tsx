import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { COLORS } from "@/theme/colors";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface AppBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const AppBreadcrumbs = ({ items }: AppBreadcrumbsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 0.5,
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Box
            key={`${item.label}-${index}`}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {item.href && !isLast ? (
              <Typography
                component={RouterLink}
                to={item.href}
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: COLORS.text.secondary,

                  "&:hover": {
                    color: COLORS.brand.primary,
                  },
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Typography
                variant="body2"
                sx={{
                  color: isLast ? COLORS.text.primary : COLORS.text.secondary,
                  fontWeight: isLast ? 500 : 400,
                }}
              >
                {item.label}
              </Typography>
            )}

            {!isLast && (
              <Typography
                variant="body2"
                sx={{
                  mx: 1,
                  color: COLORS.text.secondary,
                  fontWeight: 400,
                  userSelect: "none",
                }}
              >
                /
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default AppBreadcrumbs;
