import { Box, TextField, Typography } from "@mui/material";

interface AppTextFieldSimpleProps {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  type?: string;
}

const AppTextFieldSimple = ({
  label,
  value,
  placeholder,
  onChange,
  error = false,
  helperText,
  disabled = false,
  required = false,
  fullWidth = true,
  type = "text",
}: AppTextFieldSimpleProps) => {
  return (
    <Box sx={{ width: fullWidth ? "100%" : "auto" }}>
      {label && (
        <Typography
          variant="body2"
          sx={{
            color: disabled ? "text.disabled" : "text.primary",
            fontWeight: 500,
            mb: 1,
          }}
        >
          {label}
          {required && (
            <Box component="span" sx={{ color: "error.main", ml: 0.5 }}>
              *
            </Box>
          )}
        </Typography>
      )}
      <TextField
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        helperText={helperText}
        size="small"
        fullWidth={fullWidth}
        type={type}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 1,
            height: 44,
            "& fieldset": {
              borderColor: error ? "error.main" : "divider",
            },
            "&:hover fieldset": {
              borderColor: error ? "error.main" : "primary.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: error ? "error.main" : "primary.main",
            },
            "&.Mui-disabled fieldset": {
              borderColor: "divider",
            },
          },
        }}
      />
    </Box>
  );
};

export default AppTextFieldSimple;
