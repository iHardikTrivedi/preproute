import { Box } from "@mui/material";

import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";

import { DASHBOARD_TEXT } from "../constants";

const DashboardHeader = () => {
  return (
    <Box
      sx={{
        height: 72,

        flexShrink: 0,

        display: "flex",
        alignItems: "center",

        px: 2.5,

        borderBottom: "1px solid",
        borderColor: "divider",

        bgcolor: "background.paper",
      }}
    >
      <AppBreadcrumbs
        items={[
          {
            label: DASHBOARD_TEXT.TITLE,
          },
          {
            label: DASHBOARD_TEXT.ALL_TESTS,
          },
        ]}
      />
    </Box>
  );
};

export default DashboardHeader;
