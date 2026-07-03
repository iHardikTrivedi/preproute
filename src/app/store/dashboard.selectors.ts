import type { RootState } from "./store";

export const selectDashboard = (state: RootState) => state.dashboard;
export const selectTests = (state: RootState) => state.dashboard.tests;
export const selectDashboardLoading = (state: RootState) => state.dashboard.isLoading;
export const selectDashboardError = (state: RootState) => state.dashboard.error;
export const selectHasTests = (state: RootState) => state.dashboard.tests.length > 0;
