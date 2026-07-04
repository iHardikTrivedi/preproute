import { Box, Pagination, Paper, Table, TableBody, TableContainer } from "@mui/material";
import { useMemo, useState } from "react";

import type { TestItem } from "../types/dashboard.types";

import EmptyState from "./EmptyState";
import TestTableHead from "./TestTableHead";
import TestTableRow from "./TestTableRow";
import TestTableSkeleton from "./TestTableSkeleton";

interface Filters {
  subject?: string;
  status?: string;
  sortCreated?: "asc" | "desc";
}

interface TestTableProps {
  tests: TestItem[];
  isPending: boolean;
  subjects?: string[];
  statuses?: string[];
  filters?: Filters;
  onFilterChange?: (next: Filters) => void;
  searchQuery?: string;
  onReset?: () => void;
  showFilters?: boolean;
}

const PAGE_SIZE = 20;

const TestTable = ({
  tests,
  isPending,
  subjects = [],
  statuses = [],
  filters = {},
  onFilterChange,
  searchQuery,
  onReset,
  showFilters,
}: TestTableProps) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(tests.length / PAGE_SIZE));
  const visibleTests = useMemo(
    () => tests.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [tests, page],
  );

  const handleView = (id: string) => {
    console.log("View", id);
  };

  const handleEdit = (id: string) => {
    console.log("Edit", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete", id);
  };

  if (isPending) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          minHeight: 0,
          flexShrink: 0,
        }}
      >
        <TestTableSkeleton />
      </Box>
    );
  }

  if (tests.length === 0) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          minHeight: 0,
        }}
      >
        <EmptyState />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
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
          <TestTableHead
            subjects={subjects}
            statuses={statuses}
            filters={filters}
            onFilterChange={onFilterChange}
            searchQuery={searchQuery}
            onReset={onReset}
            showFilters={!isPending && (showFilters ?? tests.length > 0)}
          />

          <TableBody>
            {visibleTests.map((test) => (
              <TestTableRow
                key={test.id}
                test={test}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
};

export default TestTable;
