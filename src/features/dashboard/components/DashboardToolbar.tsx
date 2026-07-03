import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/router/routes";
import AppButton from "@/components/common/AppButton";
import AppSearchField from "@/components/common/AppSearchField";
import { DASHBOARD_TEXT } from "../constants";

const DashboardToolbar = () => {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <AppSearchField placeholder="Search tests..." />

      <Box
        sx={{
          minWidth: 180,
        }}
      >
        <AppButton startIcon={<AddRoundedIcon />} onClick={() => navigate(ROUTES.CREATE_TEST)}>
          {DASHBOARD_TEXT.CREATE_TEST}
        </AppButton>
      </Box>
    </Stack>
  );
};

export default DashboardToolbar;
