import { TableCell, TableHead, TableRow } from "@mui/material";

import { COLORS } from "@/theme/colors";

import { TEST_TABLE_COLUMNS } from "../constants";

const TestTableHead = () => {
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
