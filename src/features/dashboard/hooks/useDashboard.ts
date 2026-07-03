import { useCallback } from "react";

import { selectDashboard } from "@/app/store/dashboard.selectors";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { clearDashboard, setError, setLoading, setTests } from "../store/dashboardSlice";

import type { DashboardResponse } from "../types/dashboard.types";

export const useDashboard = () => {
  const dispatch = useAppDispatch();

  const dashboard = useAppSelector(selectDashboard);

  const updateTests = useCallback(
    (response: DashboardResponse) => {
      dispatch(setTests(response.data));
    },
    [dispatch],
  );

  const setDashboardLoading = useCallback(
    (isLoading: boolean) => {
      dispatch(setLoading(isLoading));
    },
    [dispatch],
  );

  const setDashboardError = useCallback(
    (error: string | null) => {
      dispatch(setError(error));
    },
    [dispatch],
  );

  const clear = useCallback(() => {
    dispatch(clearDashboard());
  }, [dispatch]);

  return {
    ...dashboard,
    updateTests,
    setDashboardLoading,
    setDashboardError,
    clear,
  };
};
