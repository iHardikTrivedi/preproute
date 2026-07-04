import { Box } from "@mui/material";

import COLORS from "@/theme/colors";
import { TEST_TAB_OPTIONS } from "../constants";
import type { TestType } from "../types/tests.types";

interface TestTabsProps {
  value?: TestType;
  onChange?: (value: TestType) => void;
}

const TestTabs = ({ value = "chapterwise", onChange }: TestTabsProps) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        p: 0.5,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      {TEST_TAB_OPTIONS.map((option) => {
        const isSelected = value === option.value;

        return (
          <Box
            key={option.value}
            component="button"
            type="button"
            onClick={() => onChange?.(option.value)}
            sx={{
              height: 36,
              px: 2,
              border: 0,
              borderRadius: 1.5,
              bgcolor: isSelected ? COLORS.sidebar.activeBackground : "transparent",
              color: isSelected ? "primary.main" : "text.secondary",
              font: "inherit",
              fontSize: "0.875rem",
              fontWeight: isSelected ? 500 : 400,
              cursor: "pointer",
              transition: "background-color 0.2s, color 0.2s",

              "&:focus-visible": {
                outline: "2px solid",
                outlineColor: "primary.main",
                outlineOffset: 1,
              },
            }}
          >
            {option.label}
          </Box>
        );
      })}
    </Box>
  );
};

export default TestTabs;
