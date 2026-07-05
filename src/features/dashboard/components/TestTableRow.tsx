import { TableCell, TableRow, Typography } from "@mui/material";

import TestActions from "./TestActions";
import TestStatusChip from "./TestStatusChip";

import type { TestItem } from "../types/dashboard.types";

interface TestTableRowProps {
  test: TestItem;

  onView?: (id: string) => void;
  onEdit?: (test: TestItem) => void;
  onDelete?: (id: string) => void;
}

const TestTableRow = ({ test, onView, onEdit, onDelete }: TestTableRowProps) => {
  return (
    <TableRow
      hover
      sx={{
        "&:last-child td": {
          borderBottom: 0,
        },
      }}
    >
      <TableCell>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
          }}
        >
          {test.name}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body2">{test.subject}</Typography>
      </TableCell>

      <TableCell>
        <TestStatusChip status={test.status} />
      </TableCell>

      <TableCell>
        <Typography variant="body2">{new Date(test.createdAt).toLocaleDateString()}</Typography>
      </TableCell>

      <TableCell align="right">
        <TestActions id={test.id} onView={onView} onEdit={() => onEdit?.(test)} onDelete={onDelete} />
      </TableCell>
    </TableRow>
  );
};

export default TestTableRow;
