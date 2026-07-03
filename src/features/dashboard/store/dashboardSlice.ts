import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { DashboardState, TestItem } from "../types/dashboard.types";

const initialState: DashboardState = {
  isLoading: false,
  tests: [],
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    setTests(state, action: PayloadAction<TestItem[]>) {
      state.isLoading = false;
      state.tests = action.payload;
      state.error = null;
    },

    addTest(state, action: PayloadAction<TestItem>) {
      state.tests.unshift(action.payload);
    },

    updateTest(state, action: PayloadAction<TestItem>) {
      const index = state.tests.findIndex((test) => test.id === action.payload.id);

      if (index !== -1) {
        state.tests[index] = action.payload;
      }
    },

    removeTest(state, action: PayloadAction<string>) {
      state.tests = state.tests.filter((test) => test.id !== action.payload);
    },

    setError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearDashboard(state) {
      state.isLoading = false;
      state.tests = [];
      state.error = null;
    },
  },
});

export const { setLoading, setTests, addTest, updateTest, removeTest, setError, clearDashboard } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
