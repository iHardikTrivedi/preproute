import AppButton from "@/components/common/AppButton";
import COLORS from "@/theme/colors";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Menu, Typography } from "@mui/material";
import { useState } from "react";

import { selectUser } from "@/app/store/auth.selectors";
import { UserProfileImage } from "@/assets";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAppSelector } from "@/hooks/redux";

const HeaderProfile = () => {
  const user = useAppSelector(selectUser);

  const userProfile = (
    <Box
      component="img"
      src={UserProfileImage}
      alt="User Profile"
      sx={{
        width: 48,
        height: 48,
        display: "block",
        objectFit: "contain",
        userSelect: "none",
      }}
    />
  );

  const { logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,

          px: 1,
          py: 0.5,

          borderRadius: 2,

          cursor: "pointer",

          transition: "background-color .2s ease",

          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {userProfile}

        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {user?.name ?? "Guest"}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {user?.role ?? "-"}
          </Typography>
        </Box>

        <KeyboardArrowDownRoundedIcon color="action" fontSize="medium" />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        // PaperProps={{ sx: { minWidth: 240, p: 2 } }}
      >
        <Box sx={{ width: "100%" }}>
          <AppButton
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              bgcolor: COLORS.destructive.main,
              color: COLORS.destructive.contrastText,
              "&:hover": { bgcolor: COLORS.destructive.main },
            }}
          >
            Logout
          </AppButton>
        </Box>
      </Menu>
    </>
  );
};

export default HeaderProfile;
