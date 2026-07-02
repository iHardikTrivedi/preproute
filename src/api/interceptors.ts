import api from "./axios";

import { ROUTES } from "@/app/router/routes";
import storageService from "@/utils/storageService";
import logger from "./logger";

api.interceptors.request.use(
  (config) => {
    const token = storageService.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    logger.request(config);

    return config;
  },
  (error) => {
    logger.error(error);

    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    logger.response(response);

    return response;
  },
  (error) => {
    logger.error(error);

    if (error.response?.status === 401) {
      storageService.clear();

      if (window.location.pathname !== ROUTES.LOGIN) {
        window.location.replace(ROUTES.LOGIN);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
