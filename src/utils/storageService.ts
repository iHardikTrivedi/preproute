import { STORAGE } from "@/config/storage";

class StorageService {
  setToken(token: string) {
    sessionStorage.setItem(STORAGE.TOKEN, token);
  }

  getToken() {
    return sessionStorage.getItem(STORAGE.TOKEN);
  }

  removeToken() {
    sessionStorage.removeItem(STORAGE.TOKEN);
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
    this.removeToken();
    this.removeUser();
  }
}

export default new StorageService();
