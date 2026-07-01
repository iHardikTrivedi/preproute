import { useState } from "react";
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";

import { IconButton, InputAdornment, TextField as MuiTextField } from "@mui/material";

import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

interface AppPasswordFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;

  label: string;

  placeholder?: string;

  disabled?: boolean;
}

const AppPasswordField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  disabled = false,
}: AppPasswordFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <MuiTextField
          {...field}
          fullWidth
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          type={showPassword ? "text" : "password"}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );
};

export default AppPasswordField;
