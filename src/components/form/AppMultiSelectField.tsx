import { useLayoutEffect, useState } from "react";

import type { SelectChangeEvent } from "@mui/material";
import {
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  FormHelperText,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export interface AppMultiSelectOption {
  label: string;
  value: string;
}

interface AppMultiSelectFieldProps {
  label?: string;
  name?: string;
  values: string[];
  options: AppMultiSelectOption[];
  placeholder?: string;
  onChange: (values: string[]) => void;
  onOpen?: () => void;
  onClose?: () => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  open?: boolean;
}

const AppMultiSelectField = ({
  label,
  name,
  values,
  options,
  placeholder = "Select options",
  onChange,
  onOpen,
  onClose,
  error = false,
  helperText,
  disabled = false,
  required = false,
  fullWidth = true,
  loading = false,
  open,
}: AppMultiSelectFieldProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [shouldOpenOnLoad, setShouldOpenOnLoad] = useState(false);

  // Sync with external open state
  useLayoutEffect(() => {
    if (open && !internalOpen) {
      setInternalOpen(true);
      setShouldOpenOnLoad(false);
    }
  }, [open, internalOpen]);

  const selectedLabels = options
    .filter((opt) => values.includes(opt.value))
    .map((opt) => opt.label);

  const displayText = selectedLabels.length > 0 ? selectedLabels.join(", ") : placeholder;

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const selectedValues = event.target.value as string[];
    onChange(selectedValues);
  };

  const handleClose = () => {
    setInternalOpen(false);
    setShouldOpenOnLoad(false);
    onClose?.();
  };

  const handleOpen = () => {
    if (loading) {
      // If loading, set flag and trigger onOpen but don't open dropdown yet
      setShouldOpenOnLoad(true);
      onOpen?.();
      return;
    }
    setInternalOpen(true);
    onOpen?.();
  };

  // When loading completes and we were supposed to open, open the dropdown
  useLayoutEffect(() => {
    if (!loading && shouldOpenOnLoad && !internalOpen) {
      setInternalOpen(true);
      setShouldOpenOnLoad(false);
    }
  }, [loading, shouldOpenOnLoad, internalOpen]);

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

      <FormControl fullWidth={fullWidth} error={error} disabled={disabled} size="small">
        <Select
          name={name}
          multiple
          displayEmpty
          open={internalOpen}
          value={values}
          onChange={handleChange}
          onClose={handleClose}
          onOpen={handleOpen}
          renderValue={() => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {loading ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: selectedLabels.length === 0 ? "text.disabled" : "text.primary" }}
                >
                  {displayText}
                </Typography>
              )}
            </Box>
          )}
          MenuProps={{
            slotProps: {
              paper: {
                style: { maxHeight: 300 },
              },
            },
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
              <Checkbox checked={values.includes(option.value)} size="small" sx={{ py: 0.5 }} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default AppMultiSelectField;
