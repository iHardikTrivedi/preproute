import { Box } from "@mui/material";

import { useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardToolbar from "../components/DashboardToolbar";
import TestTable from "../components/TestTable";
import { useDashboard } from "../hooks/useDashboard";
import { useGetTests } from "../hooks/useGetTests";

const DashboardPage = () => {
  const { tests, updateTests, setDashboardLoading, setDashboardError } = useDashboard();
  const { getTests, isPending } = useGetTests();

  useEffect(() => {
    if (tests.length > 0) return;

    const fetchTests = async () => {
      try {
        setDashboardLoading(true);

        const response = await getTests();

        updateTests(response);
      } catch (error) {
        setDashboardError(error instanceof Error ? error.message : "Failed to fetch tests.");
      } finally {
        setDashboardLoading(false);
      }
    };

    void fetchTests();
  }, [getTests, tests.length, updateTests, setDashboardLoading, setDashboardError]);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <DashboardHeader />

      {/* Body */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          p: 2.5,
          gap: 2.5,
        }}
      >
        {/* Toolbar */}
        {!isPending && tests.length > 0 && <DashboardToolbar />}

        {/* Table / Empty State */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
          }}
        >
          <TestTable tests={tests} isPending={isPending} />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
