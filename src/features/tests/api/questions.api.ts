import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

import type {
  ApiResponse,
  BulkQuestionsRequest,
  FetchBulkQuestionsRequest,
  QuestionRequest,
} from "../types/tests.types";

class QuestionsApi {
  async bulkCreate(
    payload: BulkQuestionsRequest
  ): Promise<ApiResponse<QuestionRequest[]>> {
    const { data } = await api.post<ApiResponse<QuestionRequest[]>>(
      ENDPOINTS.QUESTIONS.BULK,
      payload
    );
    return data;
  }

  async fetchBulk(
    payload: FetchBulkQuestionsRequest
  ): Promise<ApiResponse<QuestionRequest[]>> {
    const { data } = await api.post<ApiResponse<QuestionRequest[]>>(
      ENDPOINTS.QUESTIONS.FETCH_BULK,
      payload
    );
    return data;
  }
}

export default new QuestionsApi();
