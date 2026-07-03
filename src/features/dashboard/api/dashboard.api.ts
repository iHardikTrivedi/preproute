import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import { mapDashboardResponse } from "../mappers/dashboard.mapper";

import type { DashboardApiResponse } from "../types/dashboard-api.types";
import type { DashboardResponse } from "../types/dashboard.types";

class DashboardApi {
  async getTests(): Promise<DashboardResponse> {
    const { data } = await api.get<DashboardApiResponse>(ENDPOINTS.DASHBOARD.TESTS);

    return mapDashboardResponse(data);
  }
}

export default new DashboardApi();
