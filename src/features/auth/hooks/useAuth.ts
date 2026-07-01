import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import storage from "@/utils/storage";
import { useCallback } from "react";
import { clearAuth, setAuth } from "../../auth/store/authSlice";
import type { LoginResponse } from "../types/auth.types";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const login = useCallback(
    (data: LoginResponse) => {
      storage.setAccessToken(data.accessToken);
      storage.setRefreshToken(data.refreshToken);
      storage.setUser(data.user);

      dispatch(setAuth(data));
    },
    [dispatch],
  );

  const logout = useCallback(() => {
    storage.clear();

    dispatch(clearAuth());
  }, [dispatch]);

  return {
    ...auth,
    login,
    logout,

    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    accessToken: auth.accessToken,
    refreshToken: auth.refreshToken,
  };
};
