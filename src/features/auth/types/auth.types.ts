export interface LoginRequest {
  userId: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  message: string;
  data: LoginData;
}

export interface LoginData {
  token: string;
  user: User;
}
export interface AuthSession {
  token: string;
  user: User;
}
export interface User {
  id: string;
  userId: string;
  name: string;
  role: string;

  phone?: string;
  payment?: boolean;
  joiningDate?: string;
  endDate?: string;
  lastActive?: string;
  subrole?: string;
}
export interface AuthState {
  isLoading: boolean;

  token: string | null;
  user: User | null;
}
