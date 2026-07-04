import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, FormControl, InputLabel, MenuItem, Popover, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/router/routes";
import AppButton from "@/components/common/AppButton";
import AppSearchField from "@/components/common/AppSearchField";
import { DASHBOARD_TEXT } from "../constants";

interface Filters {
  subject?: string;
  status?: string;
  sortCreated?: "asc" | "desc";
}

interface Props {
  onSearch?: (query: string) => void;
  searchValue?: string;
  subjects?: string[];
  statuses?: string[];
  filters?: Filters;
  onApplyFilters?: (next: Filters) => void;
  onResetFilters?: () => void;
}

const DashboardToolbar = ({
  onSearch,
  searchValue,
  subjects = [],
  statuses = [],
  filters = {},
  onApplyFilters,
  onResetFilters,
}: Props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const [local, setLocal] = useState<Filters>(filters);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setLocal(filters ?? {});
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const apply = () => {
    onApplyFilters?.(local ?? {});
    handleClose();
  };

  const reset = () => {
    setLocal({});
    onResetFilters?.();
    handleClose();
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <AppSearchField
        placeholder="Search tests..."
        value={searchValue ?? ""}
        onChange={(e) => onSearch?.((e.target as HTMLInputElement).value)}
      />

      <Box sx={{ minWidth: 160 }}>
        <AppButton startIcon={<FilterListIcon />} onClick={handleOpen}>
          Filters
        </AppButton>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 2, minWidth: 280, display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControl size="small">
            <InputLabel>Subject</InputLabel>
            <Select
              value={local.subject ?? ""}
              label="Subject"
              onChange={(e) => {
                const next = { ...local, subject: e.target.value || undefined };
                setLocal(next);
                onApplyFilters?.(next);
              }}
            >
              <MenuItem value="">All</MenuItem>
              {subjects.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Status</InputLabel>
            <Select
              value={local.status ?? ""}
              label="Status"
              onChange={(e) => {
                const next = { ...local, status: e.target.value || undefined };
                setLocal(next);
                onApplyFilters?.(next);
              }}
            >
              <MenuItem value="">All</MenuItem>
              {statuses.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Sort</InputLabel>
            <Select
              value={local.sortCreated ?? ""}
              label="Sort"
              onChange={(e) => {
                const next = {
                  ...local,
                  sortCreated: (e.target.value as "asc" | "desc") || undefined,
                };
                setLocal(next);
                onApplyFilters?.(next);
              }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="asc">Oldest first</MenuItem>
              <MenuItem value="desc">Newest first</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
            <button type="button" onClick={reset} style={{ padding: "6px 12px" }}>
              Reset
            </button>
          </Box>
        </Box>
      </Popover>

      <Box
        sx={{
          minWidth: 180,
        }}
      >
        <AppButton startIcon={<AddRoundedIcon />} onClick={() => navigate(ROUTES.CREATE_TEST)}>
          {DASHBOARD_TEXT.CREATE_TEST}
        </AppButton>
      </Box>
    </Stack>
  );
};

export default DashboardToolbar;
