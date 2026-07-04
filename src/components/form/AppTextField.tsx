import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";

import MuiTextField from "@mui/material/TextField";

interface AppTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;

  placeholder?: string;

  disabled?: boolean;

  type?: React.InputHTMLAttributes<unknown>["type"];

  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const AppTextField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  disabled = false,
  type = "text",
  error,
  helperText,
  fullWidth = true,
}: AppTextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const hasError = !!error || !!fieldState.error;
        return (
          <MuiTextField
            {...field}
            fullWidth={fullWidth}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            error={hasError}
            helperText={error ? helperText : fieldState.error?.message || helperText}
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                height: 44,
                "& fieldset": {
                  borderColor: hasError ? "error.main" : "divider",
                },
                "&:hover fieldset": {
                  borderColor: hasError ? "error.main" : "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: hasError ? "error.main" : "primary.main",
                },
                "&.Mui-disabled fieldset": {
                  borderColor: "divider",
                },
              },
            }}
          />
        );
      }}
    />
  );
};

export default AppTextField;
