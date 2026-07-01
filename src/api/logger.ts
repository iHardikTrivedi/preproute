import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const isDevelopment = import.meta.env.DEV;

const print = (title: string, data: unknown, color: string) => {
  if (!isDevelopment) return;

  console.groupCollapsed(`%c${title}`, `color:${color};font-weight:bold;font-size:12px`);

  console.dir(data);

  console.groupEnd();
};

class ApiLogger {
  request(config: AxiosRequestConfig) {
    if (!isDevelopment) return;

    console.groupCollapsed(
      `%c🚀 API REQUEST  ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
      "color:#2563EB;font-weight:bold;font-size:13px",
    );

    print("Method", config.method?.toUpperCase(), "#0EA5E9");
    print("URL", `${config.baseURL}${config.url}`, "#0EA5E9");
    print("Headers", config.headers, "#9333EA");
    print("Query Params", config.params, "#10B981");
    print("Request Body", config.data, "#F59E0B");

    console.groupEnd();
  }

  response(response: AxiosResponse) {
    if (!isDevelopment) return;

    console.groupCollapsed(
      `%c✅ API RESPONSE ${response.status} ${response.config.url}`,
      "color:#16A34A;font-weight:bold;font-size:13px",
    );

    print("Status", response.status, "#16A34A");
    print("Headers", response.headers, "#9333EA");
    print("Response", response.data, "#F97316");

    console.groupEnd();
  }

  error(error: AxiosError) {
    if (!isDevelopment) return;

    console.groupCollapsed(
      `%c❌ API ERROR ${error.response?.status ?? ""} ${error.config?.url}`,
      "color:#DC2626;font-weight:bold;font-size:13px",
    );

    print("Status", error.response?.status, "#DC2626");
    print("URL", error.config?.url, "#DC2626");
    print("Headers", error.config?.headers, "#9333EA");
    print("Request", error.config?.data, "#F59E0B");
    print("Response", error.response?.data, "#F97316");

    console.groupEnd();
  }
}

export default new ApiLogger();
