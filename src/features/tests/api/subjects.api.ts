import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import type { ApiResponse, Subject } from "../types/tests.types";

class SubjectsApi {
  async getAll(): Promise<ApiResponse<Subject[]>> {
    const { data } = await api.get<ApiResponse<Subject[]>>(ENDPOINTS.SUBJECTS);
    return data;
  }
}

export default new SubjectsApi();
