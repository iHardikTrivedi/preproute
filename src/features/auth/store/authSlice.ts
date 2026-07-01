import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, LoginResponse, User } from "../types/auth.types";

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setAuth(state, action: PayloadAction<LoginResponse>) {
      state.isAuthenticated = true;

      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;

      state.isLoading = false;
    },
    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    updateAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    clearAuth(state) {
      state.isAuthenticated = false;

      state.accessToken = null;
      state.refreshToken = null;

      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { setLoading, setAuth, updateUser, updateAccessToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
