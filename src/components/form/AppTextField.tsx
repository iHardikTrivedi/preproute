import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";

import MuiTextField from "@mui/material/TextField";

interface AppTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;

  label: string;

  placeholder?: string;

  disabled?: boolean;

  type?: React.InputHTMLAttributes<unknown>["type"];
}

const AppTextField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  disabled = false,
  type = "text",
}: AppTextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MuiTextField
          {...field}
          fullWidth
          label={label}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default AppTextField;
