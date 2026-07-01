import { CircularProgress, Stack, Typography } from "@mui/material";

interface LoaderProps {
  size?: number;
  thickness?: number;
  text?: string;
  fullScreen?: boolean;
}

const Loader = ({ size = 24, thickness = 4, text, fullScreen = false }: LoaderProps) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        width: "100%",
        height: fullScreen ? "100vh" : "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={size} thickness={thickness} color="primary" />

      {text ? (
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      ) : null}
    </Stack>
  );
};

export default Loader;
