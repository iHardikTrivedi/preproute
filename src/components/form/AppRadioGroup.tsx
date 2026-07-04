import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export interface AppRadioOption {
  label: string;
  value: string;
}

interface AppRadioGroupProps {
  label?: string;
  name?: string;
  value: string;
  options: AppRadioOption[];
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  row?: boolean;
}

const AppRadioGroup = ({
  label,
  name,
  value,
  options,
  onChange,
  error = false,
  helperText,
  disabled = false,
  required = false,
  row = true,
}: AppRadioGroupProps) => {
  return (
    <Box sx={{ width: "100%" }}>
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

      <FormControl fullWidth error={error} disabled={disabled} component="fieldset">
        <RadioGroup
          row={row}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          name={name}
          sx={{
            width: "100%",
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={
                <Radio
                  size="small"
                  color="primary"
                  sx={{
                    color: "primary.main",
                    "&.Mui-checked": {
                      color: "primary.main",
                    },
                  }}
                />
              }
              label={<Typography variant="body2">{option.label}</Typography>}
              sx={{
                m: 0,

                ...(row && {
                  flex: 1,
                }),

                "& .MuiRadio-root": {
                  p: 0.5,
                  mr: 0.5,
                },
              }}
            />
          ))}
        </RadioGroup>

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default AppRadioGroup;
