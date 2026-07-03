import { Chip } from "@mui/material";

import { COLORS } from "@/theme/colors";

import type { TestStatus } from "../types/dashboard.types";

interface TestStatusChipProps {
  status: TestStatus;
}

type StatusConfig = {
  label: string;
  color: string;
  background: string;
};

const STATUS_CONFIG: Record<TestStatus, StatusConfig> = {
  draft: {
    label: "Draft",
    color: COLORS.warning.dark,
    background: COLORS.warning.light,
  },

  live: {
    label: "Live",
    color: COLORS.success.dark,
    background: COLORS.success.light,
  },

  unpublished: {
    label: "Unpublished",
    color: COLORS.grey[700],
    background: COLORS.grey[100],
  },
};

const TestStatusChip = ({ status }: TestStatusChipProps) => {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.draft;

  return (
    <Chip
      label={config?.label ?? "Unknown"}
      size="small"
      sx={{
        minWidth: 96,
        height: 28,

        borderRadius: 1,

        bgcolor: config.background,
        color: config.color,

        fontSize: 12,
        fontWeight: 600,

        "& .MuiChip-label": {
          px: 1.5,
        },
      }}
    />
  );
};

export default TestStatusChip;
