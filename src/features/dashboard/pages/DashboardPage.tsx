import { Box } from "@mui/material";

import AppNoResultFound from "@/components/common/AppNoResultFound";
import { useEffect, useMemo, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardToolbar from "../components/DashboardToolbar";
import TestTable from "../components/TestTable";
import { useDashboard } from "../hooks/useDashboard";
import { useGetTests } from "../hooks/useGetTests";

const DashboardPage = () => {
  const { tests, updateTests, setDashboardLoading, setDashboardError } = useDashboard();
  const { getTests, isPending } = useGetTests();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<{
    subject?: string;
    status?: string;
    sortCreated?: "asc" | "desc";
  }>({});

  const subjects = useMemo(() => {
    const set = new Set<string>();
    tests.forEach((t) => t.subject && set.add(t.subject));
    return Array.from(set);
  }, [tests]);

  const statuses = useMemo(() => {
    const set = new Set<string>();
    tests.forEach((t) => t.status && set.add(t.status));
    return Array.from(set);
  }, [tests]);

  const filteredTests = useMemo(() => {
    const q = query.trim().toLowerCase();

    const list = tests.filter((t) => {
      if (q) {
        const matchQ =
          (t.name && t.name.toLowerCase().includes(q)) ||
          (t.subject && t.subject.toLowerCase().includes(q)) ||
          (t.topics && t.topics.some((s) => s.toLowerCase().includes(q))) ||
          (t.subTopics && t.subTopics.some((s) => s.toLowerCase().includes(q)));

        if (!matchQ) return false;
      }

      if (filters.subject && t.subject !== filters.subject) return false;
      if (filters.status && t.status !== (filters.status as any)) return false;

      return true;
    });

    if (filters.sortCreated) {
      return list.slice().sort((a, b) => {
        const da = new Date(a.createdAt).getTime();
        const db = new Date(b.createdAt).getTime();
        return filters.sortCreated === "asc" ? da - db : db - da;
      });
    }

    return list;
  }, [tests, query, filters]);

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
        {!isPending && tests.length > 0 && (
          <DashboardToolbar
            onSearch={setQuery}
            searchValue={query}
            subjects={subjects}
            statuses={statuses}
            filters={filters}
            onApplyFilters={(next) => setFilters(next)}
            onResetFilters={() => {
              setFilters({});
              setQuery("");
            }}
          />
        )}

        {/* Table / Empty State */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
          }}
        >
          {tests.length > 0 && filteredTests.length === 0 && !isPending ? (
            <AppNoResultFound
              onClear={() => {
                setQuery("");
                setFilters({});
              }}
            />
          ) : (
            <TestTable
              tests={filteredTests}
              isPending={isPending}
              subjects={subjects}
              statuses={statuses}
              filters={filters}
              onFilterChange={(next) => setFilters(next)}
              searchQuery={query}
              onReset={() => {
                setQuery("");
                setFilters({});
              }}
              showFilters={false}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
