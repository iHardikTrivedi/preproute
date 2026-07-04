import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { TEST_TABLE_COLUMNS } from "../constants";
import TestTableHead from "./TestTableHead";

interface Props {
  rows?: number;
}

const TestTableSkeleton = ({ rows = 20 }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        flex: 1,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        overflow: "auto",
      }}
    >
      <Table stickyHeader>
        <TestTableHead />

        <TableBody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRow key={i}>
              {TEST_TABLE_COLUMNS.map((col) => (
                <TableCell
                  key={col.key}
                  align={col.align}
                  sx={{ py: 2, width: col.width, whiteSpace: "nowrap" }}
                >
                  <Skeleton variant="rectangular" height={24} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestTableSkeleton;
