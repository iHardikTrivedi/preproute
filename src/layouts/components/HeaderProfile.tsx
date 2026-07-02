import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Typography } from "@mui/material";

import { selectUser } from "@/app/store/auth.selectors";
import { UserProfileImage } from "@/assets";
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

  return (
    <Box
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
  );
};

export default HeaderProfile;
