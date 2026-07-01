import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import type { LoginRequest, LoginResponse } from "../types/auth.types";

class AuthApi {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>(ENDPOINTS.AUTH.LOGIN, payload);
    return data;
  }
}

export default new AuthApi();
