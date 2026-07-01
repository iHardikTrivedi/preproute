import { STORAGE } from "@/config/storage";

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
    try {
      const data = sessionStorage.getItem(STORAGE.USER);

      return data ? (JSON.parse(data) as T) : null;
    } catch {
      return null;
    }
  }

  removeUser() {
    sessionStorage.removeItem(STORAGE.USER);
  }

  clear() {
    this.removeAccessToken();
    this.removeRefreshToken();
    this.removeUser();
  }
}

export default new StorageService();
