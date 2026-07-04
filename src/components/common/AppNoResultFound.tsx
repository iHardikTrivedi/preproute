import { Box, Button, Typography } from "@mui/material";

interface Props {
  onClear?: () => void;
}

const AppNoResultFound = ({ onClear }: Props) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography variant="h6">No results found</Typography>
      <Typography variant="body2" color="text.secondary">
        Try a different search term.
      </Typography>
      {onClear && (
        <Button variant="outlined" color="primary" onClick={onClear}>
          Clear search
        </Button>
      )}
    </Box>
  );
};

export default AppNoResultFound;
