import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/router/routes";
import AppButton from "@/components/common/AppButton";
import { COLORS } from "@/theme/colors";
import { DASHBOARD_TEXT } from "../constants";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flex: 1,

        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 3,

        border: 1,
        borderColor: "divider",

        bgcolor: "background.paper",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: 88,
            height: 88,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            borderRadius: "50%",

            bgcolor: COLORS.grey[100],
          }}
        >
          <DescriptionOutlinedIcon
            sx={{
              fontSize: 42,
              color: COLORS.grey[500],
            }}
          />
        </Box>

        <Stack
          sx={{
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: COLORS.text.primary,
            }}
          >
            {DASHBOARD_TEXT.NO_TESTS_FOUND}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: COLORS.text.secondary,
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            {DASHBOARD_TEXT.NO_TESTS_FOUND_SUBTITLE}
          </Typography>
        </Stack>

        <AppButton startIcon={<AddRoundedIcon />} onClick={() => navigate(ROUTES.CREATE_TEST)}>
          {DASHBOARD_TEXT.CREATE_TEST}
        </AppButton>
      </Stack>
    </Box>
  );
};

export default EmptyState;
