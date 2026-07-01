import api from "./axios";

api.interceptors.request.use(
  (config) => {
    // Attach auth token here later
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401, 500, etc.
    return Promise.reject(error);
  },
);

export default api;
