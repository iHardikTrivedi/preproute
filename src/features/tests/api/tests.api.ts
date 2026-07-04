import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import type { ApiResponse, CreateTestRequest, Test } from "../types/tests.types";

class TestsApi {
  async create(payload: CreateTestRequest): Promise<ApiResponse<Test>> {
    const { data } = await api.post<ApiResponse<Test>>(ENDPOINTS.TESTS.BASE, payload);
    return data;
  }

  async getById(id: string): Promise<ApiResponse<Test>> {
    const { data } = await api.get<ApiResponse<Test>>(ENDPOINTS.TESTS.BY_ID(id));
    return data;
  }

  async update(id: string, payload: Partial<Test>): Promise<ApiResponse<Test>> {
    const { data } = await api.put<ApiResponse<Test>>(ENDPOINTS.TESTS.BY_ID(id), payload);
    return data;
  }
}

export default new TestsApi();
