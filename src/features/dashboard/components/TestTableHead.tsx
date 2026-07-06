import { Box, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { COLORS } from "@/theme/colors";

import { TEST_TABLE_COLUMNS } from "../constants";

interface Filters {
  subject?: string;
  status?: string;
  sortCreated?: "asc" | "desc";
}

interface TestTableHeadProps {
  subjects?: string[];
  statuses?: string[];
  filters?: Filters;
  onFilterChange?: (next: Filters) => void;
  searchQuery?: string;
  onReset?: () => void;
  showFilters?: boolean;
}

const TestTableHead = ({
  subjects = [],
  statuses = [],
  filters = {},
  onFilterChange,
  searchQuery,
  onReset,
  showFilters,
}: TestTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {TEST_TABLE_COLUMNS.map((column) => (
          <TableCell
            key={column.key}
            align={column.align}
            sx={{
              width: column.width,

              py: 2,

              fontSize: 14,
              fontWeight: 600,

              color: COLORS.text.primary,

              bgcolor: COLORS.grey[50],

              borderBottom: `1px solid ${COLORS.border.light}`,

              whiteSpace: "nowrap",
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TestTableHead;
