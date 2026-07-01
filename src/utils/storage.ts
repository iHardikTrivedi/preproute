import { STORAGE } from "@/config";

class StorageService {
  setAccessToken(token: string) {
    sessionStorage.setItem(STORAGE.ACCESS_TOKEN, token);
  }

  getAccessToken() {
    return sessionStorage.getItem(STORAGE.ACCESS_TOKEN);
  }

  removeAccessToken() {
    sessionStorage.removeItem(STORAGE.ACCESS_TOKEN);
  }

  setRefreshToken(token: string) {
    sessionStorage.setItem(STORAGE.REFRESH_TOKEN, token);
  }

  getRefreshToken() {
    return sessionStorage.getItem(STORAGE.REFRESH_TOKEN);
  }

  removeRefreshToken() {
    sessionStorage.removeItem(STORAGE.REFRESH_TOKEN);
  }

  setUser<T>(user: T) {
    sessionStorage.setItem(STORAGE.USER, JSON.stringify(user));
  }

  getUser<T>() {
    const data = sessionStorage.getItem(STORAGE.USER);

    return data ? (JSON.parse(data) as T) : null;
  }

  clear() {
    sessionStorage.clear();
  }
}

export default new StorageService();
