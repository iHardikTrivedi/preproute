import { Box, Paper } from "@mui/material";

import Loader from "@/components/feedback/Loader";

interface PageLoaderProps {
  text?: string;
}

const PageLoader = ({ text = "Loading..." }: PageLoaderProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 320,
          py: 6,
          px: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Loader size={42} thickness={4} text={text} />
      </Paper>
    </Box>
  );
};

export default PageLoader;
