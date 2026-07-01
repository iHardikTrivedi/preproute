import { api, ENDPOINTS } from "@/api";

import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
} from "../types/auth.types";

class AuthApi {
  login(payload: LoginRequest) {
    return api.post<LoginResponse>(ENDPOINTS.AUTH.LOGIN, payload);
  }

  logout() {
    return api.post(ENDPOINTS.AUTH.LOGOUT);
  }

  refreshToken(payload: RefreshTokenRequest) {
    return api.post<RefreshTokenResponse>(ENDPOINTS.AUTH.REFRESH, payload);
  }
}

export default new AuthApi();
