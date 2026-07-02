import { Box, Typography } from "@mui/material";

const DashboardPage = () => {
  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Typography variant="h4">Dashboard</Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mt: 1,
        }}
      >
        Dashboard Content
      </Typography>
    </Box>
  );
};

export default DashboardPage;
