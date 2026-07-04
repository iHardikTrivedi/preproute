import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import type { ApiResponse, SubTopic } from "../types/tests.types";

class SubTopicsApi {
  async getByTopic(topicId: string): Promise<ApiResponse<SubTopic[]>> {
    const { data } = await api.get<ApiResponse<SubTopic[]>>(
      ENDPOINTS.SUB_TOPICS.BY_TOPIC(topicId)
    );
    return data;
  }
}

export default new SubTopicsApi();
