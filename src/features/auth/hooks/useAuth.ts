import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import storage from "@/utils/storage";

import { ROUTES } from "@/app/router/routes";
import { clearAuth, setAuth } from "../store/authSlice";
import type { LoginResponse } from "../types/auth.types";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = useAppSelector((state) => state.auth);

  const login = useCallback(
    (data: LoginResponse) => {
      storage.setAccessToken(data.accessToken);
      storage.setRefreshToken(data.refreshToken);
      storage.setUser(data.user);

      dispatch(setAuth(data));

      navigate(ROUTES.DASHBOARD, {
        replace: true,
      });
    },
    [dispatch, navigate],
  );

  const logout = useCallback(() => {
    storage.clear();

    dispatch(clearAuth());

    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  }, [dispatch, navigate]);

  return {
    ...auth,
    login,
    logout,
  };
};
