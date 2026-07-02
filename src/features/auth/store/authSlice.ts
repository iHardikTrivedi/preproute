import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthSession, AuthState, User } from "../types/auth.types";

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    setAuth(state, action: PayloadAction<AuthSession>) {
      state.isAuthenticated = true;
      state.isLoading = false;

      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },

    updateToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },

    clearAuth(state) {
      state.isAuthenticated = false;
      state.isLoading = false;

      state.token = null;
      state.user = null;
    },

    finishInitialization(state) {
      state.isLoading = false;
    },
  },
});

export const { setLoading, setAuth, updateUser, updateToken, clearAuth, finishInitialization } =
  authSlice.actions;

export default authSlice.reducer;
