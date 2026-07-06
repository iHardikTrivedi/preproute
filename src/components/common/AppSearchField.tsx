import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import React from "react";

const AppSearchField = (props: TextFieldProps) => {
  const value = props.value as string | undefined;

  const providedInput =
    (props.slotProps && "input" in props.slotProps ? props.slotProps.input : undefined) || {};

  const inputSlotProps = {
    ...providedInput,
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon fontSize="small" />
      </InputAdornment>
    ),
    endAdornment: value ? (
      <InputAdornment position="end">
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            props.onChange?.({
              target: { value: "" },
            } as unknown as React.ChangeEvent<HTMLInputElement>);
          }}
          aria-label="clear"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </InputAdornment>
    ) : undefined,
  };

  return (
    <TextField
      {...props}
      size="small"
      fullWidth
      placeholder="Search..."
      slotProps={{ input: inputSlotProps }}
    />
  );
};

export default AppSearchField;
