import type { ButtonProps } from "@mui/material";
import { Button, CircularProgress } from "@mui/material";

interface AppButtonProps extends ButtonProps {
  loading?: boolean;
}

const AppButton = ({ children, loading = false, disabled, ...props }: AppButtonProps) => {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      disableElevation
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <CircularProgress size={22} color="inherit" /> : children}
    </Button>
  );
};

export default AppButton;
