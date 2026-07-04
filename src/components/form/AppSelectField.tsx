import { Box, FormControl, FormHelperText, MenuItem, Select, Typography } from "@mui/material";

export interface AppSelectOption {
  label: string;
  value: string;
}

interface AppSelectFieldProps {
  label?: string;
  name?: string;
  value: string;
  options: AppSelectOption[];
  placeholder?: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
}

const AppSelectField = ({
  label,
  name,
  value,
  options,
  placeholder = "Choose from Drop-down",
  onChange,
  error = false,
  helperText,
  disabled = false,
  required = false,
  fullWidth = true,
}: AppSelectFieldProps) => {
  const selectedOption = options.find((option) => option.value === value);

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
            <Box
              component="span"
              sx={{
                color: "error.main",
                ml: 0.5,
              }}
            >
              *
            </Box>
          )}
        </Typography>
      )}

      <FormControl fullWidth={fullWidth} error={error} disabled={disabled} size="small">
        <Select
          name={name}
          value={value}
          displayEmpty
          onChange={(event) => onChange(event.target.value)}
          renderValue={() => {
            if (!value) {
              return (
                <Typography component="span" variant="body2" sx={{ color: "text.disabled" }}>
                  {placeholder}
                </Typography>
              );
            }

            return selectedOption?.label ?? value;
          }}
          sx={{
            height: 44,
            borderRadius: 1,

            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "error.main" : "divider",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "error.main" : "primary.main",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "error.main" : "primary.main",
              borderWidth: 1,
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default AppSelectField;
