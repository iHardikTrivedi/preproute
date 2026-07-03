import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";

const AppSearchField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      size="small"
      fullWidth
      placeholder="Search..."
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default AppSearchField;
